import { createFileRoute } from '@tanstack/react-router';
import { supabase } from '../../lib/supabase';

export const Route = createFileRoute('/dashboard/team')({
  loader: async () => {
    // 1. Get current logged in user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { team: [] };

    // 2. Fetch user's own profile to get generated_username
    const { data: myProfile } = await supabase
      .from('profiles')
      .select('generated_username')
      .eq('id', user.id)
      .single();

    if (!myProfile?.generated_username) return { team: [] };

    // 3. Fetch all invitees whose referral_username matches
    const { data: team, error } = await supabase
      .from('profiles')
      .select('first_name, last_name, role, is_package_active, active_package_tier, bp, created_at')
      .ilike('referral_username', myProfile.generated_username.trim())
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching team members:', error);
      return { team: [] };
    }

    return { team: team || [] };
  },
  component: DashboardTeam,
});

function DashboardTeam() {
  const { team } = Route.useLoaderData();
  const { profile } = Route.useRouteContext();

  if (!profile?.is_package_active) {
    return (
      <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
        <span className="text-4xl">🔒</span>
        <h3 className="text-base font-bold text-slate-900 mt-3">Team Network Locked</h3>
        <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-4">
          You must purchase a course package to access your team downline and track invited students.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Your Direct Invites</h2>
          <p className="text-xs text-slate-500">Students who registered using your referral code (@{profile?.generated_username}).</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 block">Total Referrals</span>
          <span className="text-lg font-black text-slate-900">{team.length} Members</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        {team.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-400">
            No one has registered using your referral username yet.
          </div>
        ) : (
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4">Package Status</th>
                <th className="py-3.5 px-4">Enrolled Tier</th>
                <th className="py-3.5 px-4">Student BP</th>
                <th className="py-3.5 px-4">Joined Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {team.map((m: any, idx: number) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-bold text-slate-800">
                    {m.first_name} {m.last_name}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        m.is_package_active
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {m.is_package_active ? 'Active Enrolled' : 'Registered (No Course)'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 capitalize font-medium text-slate-700">
                    {m.active_package_tier || '—'}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-blue-600">
                    {m.bp ?? 0} BP
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">
                    {new Date(m.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}