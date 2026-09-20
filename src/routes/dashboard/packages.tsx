import { useState } from 'react';
import { createFileRoute, useRouteContext, useRouter } from '@tanstack/react-router';
import { supabase } from '../../lib/supabase';

export const Route = createFileRoute('/dashboard/packages')({
  component: DashboardPackages,
});


interface PackageItem {
  id: string;
  name: string;
  lang: 'english' | 'arabic';
  tier: string;
  price: string;
  rawPrice: number;
  pjp: number;
}

function DashboardPackages() {
  const { profile } = Route.useRouteContext();
  const router = useRouter();

  const [selectedPkg, setSelectedPkg] = useState<PackageItem | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'telebirr' | 'cbe'>('telebirr');
  const [phoneNumber, setPhoneNumber] = useState(profile?.phone || '0912345678');
  const [isProcessing, setIsProcessing] = useState(false);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  const packagesList: PackageItem[] = [
    { id: 'en-foundation', name: 'English Foundation', lang: 'english', tier: 'Foundation', price: '6,800 ETB', rawPrice: 6800, pjp: 68 },
    { id: 'en-progress', name: 'English Progress', lang: 'english', tier: 'Progress', price: '12,500 ETB', rawPrice: 12500, pjp: 125 },
    { id: 'en-mastery', name: 'English Mastery', lang: 'english', tier: 'Mastery', price: '19,850 ETB', rawPrice: 19850, pjp: 198 },
    { id: 'en-excellence', name: 'English Excellence', lang: 'english', tier: 'Excellence', price: '24,500 ETB', rawPrice: 24500, pjp: 245 },
    { id: 'ar-foundation', name: 'Arabic Foundation', lang: 'arabic', tier: 'Foundation', price: '5,400 ETB', rawPrice: 5400, pjp: 54 },
    { id: 'ar-progress', name: 'Arabic Progress', lang: 'arabic', tier: 'Progress', price: '9,650 ETB', rawPrice: 9650, pjp: 96 },
    { id: 'ar-mastery', name: 'Arabic Mastery', lang: 'arabic', tier: 'Mastery', price: '15,390 ETB', rawPrice: 15390, pjp: 153 },
    { id: 'ar-excellence', name: 'Arabic Excellence', lang: 'arabic', tier: 'Excellence', price: '21,436 ETB', rawPrice: 21436, pjp: 214 },
  ];

  const handleExecuteTestPayment = async () => {
    if (!selectedPkg) return;
    setIsProcessing(true);

    try {
      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const { error } = await supabase.rpc('complete_package_purchase', {
        p_user_id: profile.id,
        p_package_id: selectedPkg.id,
        p_language: selectedPkg.lang,
        p_tier: selectedPkg.tier,
        p_amount: selectedPkg.rawPrice,
        p_pjp: selectedPkg.pjp,
        p_payment_method: `${paymentMethod}_test_sandbox`,
      });

      if (error) throw error;

      setSuccessNotice(`Payment successful via ${paymentMethod === 'telebirr' ? 'Telebirr' : 'CBE Birr'}! ${selectedPkg.name} activated.`);
      setSelectedPkg(null);

      // Invalidate route so parent loader refreshes profile status
      await router.invalidate();
    } catch (err: any) {
      alert(err.message || 'Payment simulation failed.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Course Packages</h2>
        <p className="text-xs text-slate-500">
          Enroll in any package to unlock course materials, gain personal points (PJP), and activate your referral privileges.
        </p>
      </div>

      {successNotice && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-2xl flex items-center justify-between">
          <span>✓ {successNotice}</span>
          <button onClick={() => setSuccessNotice(null)} className="text-emerald-900 font-bold ml-4">✕</button>
        </div>
      )}

      {/* Package Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {packagesList.map((pkg) => {
          const isCurrent = profile?.active_package_id === pkg.id;

          return (
            <div
              key={pkg.id}
              className={`p-5 bg-white border rounded-2xl flex flex-col justify-between shadow-xs transition ${
                isCurrent ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{pkg.lang}</span>
                <h3 className="text-sm font-bold text-slate-900 mt-1">{pkg.name}</h3>
                <p className="text-xl font-black text-slate-900 mt-2">{pkg.price}</p>
                <p className="text-xs text-slate-400 mt-0.5">Awards +{pkg.pjp} PJP</p>
              </div>

              <button
                disabled={isCurrent}
                onClick={() => setSelectedPkg(pkg)}
                className={`w-full mt-6 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  isCurrent
                    ? 'bg-emerald-100 text-emerald-800 cursor-default'
                    : 'bg-[#0047cc] hover:bg-blue-700 text-white'
                }`}
              >
                {isCurrent ? 'Currently Active' : 'Enroll / Pay'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Test Payment Modal */}
      {selectedPkg && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-200 shadow-2xl space-y-5">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded uppercase tracking-wider">
                  Test Sandbox Mode
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">Complete Enrollment</h3>
                <p className="text-xs text-slate-500">{selectedPkg.name} • {selectedPkg.price}</p>
              </div>
              <button
                onClick={() => setSelectedPkg(null)}
                className="text-slate-400 hover:text-slate-600 p-1 text-base font-bold"
              >
                ✕
              </button>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">Select Payment Method</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('telebirr')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition ${
                    paymentMethod === 'telebirr'
                      ? 'border-[#0047cc] bg-blue-50/50 text-[#0047cc] font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-sm">📱</span>
                  <span className="text-xs">Telebirr (Test)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cbe')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition ${
                    paymentMethod === 'cbe'
                      ? 'border-[#0047cc] bg-blue-50/50 text-[#0047cc] font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-sm">🏦</span>
                  <span className="text-xs">CBE Birr (Test)</span>
                </button>
              </div>
            </div>

            {/* Test Phone Input */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Payer Mobile Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="09..."
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none font-mono"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Simulated USSD / OTP prompt will be bypassed automatically.
              </span>
            </div>

            {/* Summary */}
            <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1 text-slate-600">
              <div className="flex justify-between">
                <span>Total Due:</span>
                <span className="font-bold text-slate-900">{selectedPkg.price}</span>
              </div>
              <div className="flex justify-between">
                <span>PJP to Earn:</span>
                <span className="font-bold text-blue-600">+{selectedPkg.pjp} Points</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedPkg(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isProcessing}
                onClick={handleExecuteTestPayment}
                className="flex-1 py-2.5 rounded-xl bg-[#0047cc] hover:bg-blue-700 disabled:bg-blue-300 text-white text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Authorizing...</span>
                  </>
                ) : (
                  `Pay ${selectedPkg.price}`
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}