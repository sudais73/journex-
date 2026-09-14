import { Link } from '@tanstack/react-router';
// app/components/Navbar.tsx, Hero.tsx, About.tsx, etc.
import { type Locale, translations } from '../lib/i18n';

interface Props {
  locale: Locale;
  setLocale: (lang: Locale) => void;
}

export function Navbar({ locale, setLocale }: Props) {
  const t = translations[locale].nav;

  return (
    <header className="w-full bg-[#0047cc] text-white py-4 px-6 md:px-12 flex items-center justify-between border-b border-blue-400/20">
      <div className="flex items-center gap-2">
        <div className="bg-white text-[#0047cc] font-black rounded-lg w-8 h-8 flex items-center justify-center text-lg">
          J
        </div>
        <span className="text-xl font-bold tracking-tight">Journex</span>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-blue-100">
        <a href="#about" className="hover:text-white transition">{t.about}</a>
        <a href="#mission" className="hover:text-white transition">{t.mission}</a>
        <a href="#packages" className="hover:text-white transition">{t.packages}</a>
        <a href="#teachers" className="hover:text-white transition">{t.teachers}</a>
        <a href="#faq" className="hover:text-white transition">{t.faq}</a>
      </nav>

      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <div className="flex items-center bg-blue-700/50 rounded-lg p-0.5 text-xs font-semibold">
          <button
            onClick={() => setLocale('om')}
            className={`px-2.5 py-1 rounded-md transition ${locale === 'om' ? 'bg-white text-[#0047cc] shadow-sm' : 'text-blue-200'}`}
          >
            OM
          </button>
          <button
            onClick={() => setLocale('en')}
            className={`px-2.5 py-1 rounded-md transition ${locale === 'en' ? 'bg-white text-[#0047cc] shadow-sm' : 'text-blue-200'}`}
          >
            EN
          </button>
        </div>

        <Link to="/auth" search={{ mode: 'login' }} className="text-sm font-semibold hover:text-white">
          {t.login}
        </Link>
        <Link
          to="/auth"
          search={{ mode: 'register' }}
          className="bg-white text-[#0047cc] hover:bg-blue-50 text-sm font-bold px-4 py-2 rounded-lg transition shadow-sm"
        >
          {t.join}
        </Link>
      </div>
    </header>
  );
}