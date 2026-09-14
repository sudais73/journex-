import { type Locale, type PackageTier, translations } from '../lib/i18n';
import { useNavigate } from '@tanstack/react-router';

// Custom lightweight SVG icons
function BookIcon() {
  return (
    <svg className="w-6 h-6 text-blue-600 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function TranslateIcon() {
  return (
    <svg className="w-6 h-6 text-blue-600 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} className="text-emerald-500" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l2.5 2.5 5-5" />
    </svg>
  );
}

export function Pricing({ locale }: { locale: Locale }) {
  const t = translations[locale].packages;
  const navigate = useNavigate();

  const handleSelectPackage = (packageId: string) => {
    navigate({
      to: '/auth',
      search: { mode: 'register', package: packageId }
    });
  };

  const renderTierCards = (tiers: PackageTier[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`relative rounded-2xl bg-white p-7 flex flex-col justify-between transition-all ${
            tier.popular
              ? 'border-2 border-[#0052cc] shadow-xl'
              : 'border border-slate-200/90 shadow-sm hover:shadow-md'
          }`}
        >
          {/* Most popular badge positioned on border */}
          {tier.popular && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0052cc] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {t.mostPopular}
            </div>
          )}

          <div>
            <span className="text-xs font-bold text-[#0052cc] block mb-1">
              {tier.name}
            </span>
            <div className="text-2xl font-black text-slate-950 mb-3 tracking-tight">
              {tier.price}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed min-h-[36px] mb-6">
              {tier.desc}
            </p>

            {/* Feature Checkmarks List */}
            <ul className="space-y-3 mb-8">
              {tier.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckIcon />
                  <span className="leading-tight">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Duration & Points Tag */}
            <div className="text-[11px] text-slate-400 font-medium mb-4">
              {tier.duration} • {tier.pjp}
            </div>

            {/* Action Button */}
            <button
              onClick={() => handleSelectPackage(tier.id)}
              className="w-full bg-[#0052cc] hover:bg-[#0043a8] active:scale-[0.99] text-white text-xs font-bold py-3 px-4 rounded-xl transition shadow-sm"
            >
              {t.startBtn}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="packages" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-[#0052cc] tracking-wider uppercase block mb-1">
            {t.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            {t.heading}
          </h2>
        </div>

        {/* 1. English Track */}
        <div className="mb-16">
          <div className="flex items-center text-xl font-bold text-slate-900 mb-6">
            <BookIcon />
            <span>{t.englishTitle}</span>
          </div>
          {renderTierCards(t.englishList)}
        </div>

        {/* 2. Arabic Track */}
        <div>
          <div className="flex items-center text-xl font-bold text-slate-900 mb-6">
            <TranslateIcon />
            <span>{t.arabicTitle}</span>
          </div>
          {renderTierCards(t.arabicList)}
        </div>
      </div>
    </section>
  );
}