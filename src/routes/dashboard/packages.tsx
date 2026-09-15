import { createFileRoute, useRouter } from '@tanstack/react-router';
import { supabase } from '../../lib/supabase';

export const Route = createFileRoute('/dashboard/packages')({
  component: DashboardPackages,
});

function DashboardPackages() {
  const { profile } = Route.useRouteContext();
  const router = useRouter();

  const packagesList = [
    { id: 'en-foundation', name: 'English Foundation', price: '6,800 ETB', rawPrice: 6800, pjp: 68, lang: 'english' },
    { id: 'en-progress', name: 'English Progress', price: '12,500 ETB', rawPrice: 12500, pjp: 125, lang: 'english' },
    { id: 'en-mastery', name: 'English Mastery', price: '19,850 ETB', rawPrice: 19850, pjp: 198, lang: 'english' },
    { id: 'en-excellence', name: 'English Excellence', price: '24,500 ETB', rawPrice: 24500, pjp: 245, lang: 'english' },
    { id: 'ar-foundation', name: 'Arabic Foundation', price: '5,400 ETB', rawPrice: 5400, pjp: 54, lang: 'arabic' },
    { id: 'ar-progress', name: 'Arabic Progress', price: '9,650 ETB', rawPrice: 9650, pjp: 96, lang: 'arabic' },
    { id: 'ar-mastery', name: 'Arabic Mastery', price: '15,390 ETB', rawPrice: 15390, pjp: 153, lang: 'arabic' },
    { id: 'ar-excellence', name: 'Arabic Excellence', price: '21,436 ETB', rawPrice: 21436, pjp: 214, lang: 'arabic' },
  ];

  const handleEnroll = async (pkg: typeof packagesList[0]) => {
    // 1. Record purchase
    await supabase.from('package_purchases').insert([
      {
        user_id: profile.id,
        package_id: pkg.id,
        language: pkg.lang,
        tier: pkg.name,
        amount_etb: pkg.rawPrice,
        pjp_awarded: pkg.pjp,
        status: 'completed',
      },
    ]);

    // 2. Invalidate router to refetch the profile loader data automatically
    await router.invalidate();
    alert(`Enrolled in ${pkg.name}! Your referral link is now unlocked.`);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-1">Available Packages</h2>
      <p className="text-xs text-slate-500 mb-6">Choose a package to start learning and activate your referral privileges.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {packagesList.map((pkg) => {
          const isEnrolled = profile?.active_package_id === pkg.id;
          return (
            <div key={pkg.id} className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{pkg.lang}</span>
                <h3 className="text-sm font-bold text-slate-900 mt-1">{pkg.name}</h3>
                <p className="text-xl font-extrabold text-slate-900 mt-2">{pkg.price}</p>
                <p className="text-xs text-slate-400 mt-1">Earns {pkg.pjp} PJP</p>
              </div>

              <button
                disabled={isEnrolled}
                onClick={() => handleEnroll(pkg)}
                className={`w-full mt-6 py-2.5 rounded-xl text-xs font-bold transition ${
                  isEnrolled
                    ? 'bg-emerald-100 text-emerald-800 cursor-default'
                    : 'bg-[#0047cc] hover:bg-blue-700 text-white'
                }`}
              >
                {isEnrolled ? 'Currently Active' : 'Enroll Now'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}