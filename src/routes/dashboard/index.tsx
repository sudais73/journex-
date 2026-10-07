import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { convertPointsToETB, calculateTjpWithdrawal } from '../../lib/points';

export const Route = createFileRoute('/dashboard/')({
  component: DashboardOverview,
});

function DashboardOverview() {
  const { profile } = Route.useRouteContext();
  const [copied, setCopied] = useState(false);

  const ljp = Number(profile?.ljp || 0);
  const tjp = Number(profile?.tjp || 0);
  const bp = Number(profile?.bp || 0);

  const tjpWithdrawal = calculateTjpWithdrawal(tjp);

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://journex.org';
  const referralUrl = `${origin}/auth?mode=register&ref=${encodeURIComponent(profile?.generated_username || '')}`;

  const copyReferral = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = referralUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Dashboard Overview</h2>
        <p className="text-xs text-slate-500">Welcome back, {profile?.first_name} {profile?.last_name}.</p>
      </div>

      {/* Points & Wallets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1. Bonus Points (BP) */}
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Bonus Points (BP)</span>
              <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">Academic Only</span>
            </div>
            <p className="text-3xl font-black text-blue-600">{bp.toLocaleString()}</p>
          </div>
          <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
            Non-convertible. Earned when purchasing courses and when your direct referrals enroll.
          </p>
        </div>

        {/* 2. Learning Journey Points (LJP) */}
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Direct Referral (LJP)</span>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md">Convertible</span>
            </div>
            <p className="text-3xl font-black text-emerald-600">{ljp.toLocaleString()}</p>
            <p className="text-xs font-bold text-slate-700 mt-1">
              ≈ {convertPointsToETB(ljp).toLocaleString()} ETB
            </p>
          </div>
          <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
            Earned directly when students use your referral username to purchase packages.
          </p>
        </div>

        {/* 3. Team Journey Points (TJP) */}
        <div className="p-5 bg-[#0b192e] text-white rounded-2xl border border-slate-800 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Team Network (TJP)</span>
              <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-md">
                Min. 70 TJP
              </span>
            </div>
            <p className="text-3xl font-black text-emerald-400">{tjp.toLocaleString()}</p>
            <p className="text-xs font-semibold text-slate-300 mt-1">
              Total Value: {convertPointsToETB(tjp).toLocaleString()} ETB
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-400">Available to Withdraw:</span>
              <span className="font-bold text-emerald-400">
                {tjpWithdrawal.withdrawableTjp} TJP ({tjpWithdrawal.withdrawableEtb.toLocaleString()} ETB)
              </span>
            </div>
            {tjpWithdrawal.lockedTjp > 0 && (
              <div className="flex justify-between text-slate-400">
                <span>Pending next 70 chunk:</span>
                <span>{tjpWithdrawal.lockedTjp} TJP (Need {tjpWithdrawal.pointsNeededForNext} more)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Referral Link Card */}
      <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
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
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 font-mono outline-none selection:bg-blue-600 selection:text-white"
            />
            <button
              type="button"
              onClick={copyReferral}
              className={`font-bold px-5 py-2.5 rounded-xl text-xs transition cursor-pointer shrink-0 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#0047cc] hover:bg-blue-700 text-white'
              }`}
            >
              {copied ? 'Copied!' : 'Copy Link'}
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