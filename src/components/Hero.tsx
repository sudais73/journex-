// app/components/Navbar.tsx, Hero.tsx, About.tsx, etc.
import { type Locale, translations } from '../lib/i18n';
import { Link } from '@tanstack/react-router';

export function Hero({ locale }: { locale: Locale }) {
  const t = translations[locale].hero;

  return (
    <section className="bg-gradient-to-b from-[#0047cc] via-[#0055eb] to-[#0062ff] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block bg-blue-700/50 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            {t.title}
          </h1>
          <p className="text-blue-100 text-base md:text-lg mb-8 max-w-lg">
            {t.desc}
          </p>
          <div className="flex gap-4 mb-10">
            <Link to="/auth" search={{ mode: 'register' }} className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3 rounded-lg text-sm transition">
              {t.ctaPrimary}
            </Link>
            <a href="#packages" className="bg-blue-600/50 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg text-sm border border-blue-400/30 transition">
              {t.ctaSecondary}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-blue-400/20 pt-6">
            <div>
              <p className="text-2xl font-bold">2k+</p>
              <p className="text-xs text-blue-200">{t.stat1}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">15+</p>
              <p className="text-xs text-blue-200">{t.stat2}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-xs text-blue-200">{t.stat3}</p>
            </div>
          </div>
        </div>

        {/* Hero Image Card */}
        <div className="relative flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 max-w-sm">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              alt="Journex Learner"
              className="w-full h-auto object-cover"
            />
            {/* Floating Point Tag */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur shadow-lg border border-slate-100 rounded-xl px-4 py-2">
              <span className="text-xs text-slate-500 font-medium block">Awarded Reward</span>
              <span className="text-blue-600 font-bold text-base">+50 PJP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}