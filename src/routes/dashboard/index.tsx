import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/')({
  component: DashboardOverview,
});

function DashboardOverview() {
  // Inherit profile data loaded by dashboard.tsx
  const { profile } = Route.useRouteContext();
  const referralUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/auth?mode=register&ref=${profile?.generated_username}`
    : '';

  const copyReferral = () => {
    navigator.clipboard.writeText(referralUrl);
    alert('Referral link copied!');
  };

  return (
    <div className="space-y-6">
      {/* Locked Referral Alert */}
      {!profile?.is_package_active && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-xs font-bold text-amber-900">Your Referral System is Locked</h4>
            <p className="text-[11px] text-amber-700 mt-0.5">
              To invite teammates, earn TJP, and build your downline, you must purchase a course package first.
            </p>
          </div>
          <Link
            to="/dashboard/packages"
            className="shrink-0 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition"
          >
            Browse Packages
          </Link>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-[11px] font-semibold text-slate-500 uppercase">My Role</span>
          <p className="text-2xl font-black text-slate-900 mt-1 capitalize">{profile?.role || 'Partner'}</p>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-[11px] font-semibold text-slate-500 uppercase">Personal Journey Points (PJP)</span>
          <p className="text-2xl font-black text-blue-600 mt-1">{profile?.pjp ?? 0}</p>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-[11px] font-semibold text-slate-500 uppercase">Team Journey Points (TJP)</span>
          <p className="text-2xl font-black text-indigo-600 mt-1">{profile?.tjp ?? 0}</p>
        </div>
      </div>

      {/* Referral Link Box */}
      <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 mb-1">Your Referral Link</h3>
        <p className="text-xs text-slate-500 mb-4">
          Share your link with new members to earn team points.
        </p>

        {profile?.is_package_active ? (
          <div className="flex items-center gap-3">
            <input
              type="text"
              readOnly
              value={referralUrl}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 font-mono"
            />
            <button
              onClick={copyReferral}
              className="bg-[#0047cc] hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition"
            >
              Copy Link
            </button>
          </div>
        ) : (
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-4 flex items-center justify-between">
            <span className="text-xs text-slate-400 italic">
              🔒 You must purchase a package to unlock your referral link.
            </span>
            <Link to="/dashboard/packages" className="text-xs font-bold text-blue-600 hover:underline">
              Unlock Now &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}