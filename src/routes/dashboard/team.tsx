import { createFileRoute } from '@tanstack/react-router';
import { supabase } from '../../lib/supabase';

export const Route = createFileRoute('/dashboard/team')({
  loader: async ({ context }) => {
    const profile = (context as any).profile;
    if (!profile?.generated_username) return { team: [] };

    const { data: team } = await supabase
      .from('profiles')
      .select('first_name, last_name, role, is_package_active, pjp, created_at')
      .eq('referral_username', profile.generated_username)
      .order('created_at', { ascending: false });

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
          You must purchase a course package to access your team downline and track team members.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">Your Team Network</h2>
      <p className="text-xs text-slate-500 mb-6">Students who signed up using your referral username.</p>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        {team.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-400">
            No one has registered using your referral username yet.
          </div>
        ) : (
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Member</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Package Status</th>
                <th className="py-3 px-4">Joined Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {team.map((m: any, idx: number) => (
                <tr key={idx}>
                  <td className="py-3 px-4 font-bold text-slate-800">{m.first_name} {m.last_name}</td>
                  <td className="py-3 px-4 capitalize">{m.role}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      m.is_package_active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {m.is_package_active ? 'Active' : 'Unenrolled'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-400">{new Date(m.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}