import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { type Locale, translations } from '../lib/i18n';

interface Props {
  locale: Locale;
  setLocale: (lang: Locale) => void;
}

export function Navbar({ locale, setLocale }: Props) {
  const t = translations[locale].nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0047cc]/95 backdrop-blur-md text-white border-b border-blue-400/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => handleScroll(e, '')}
          className="flex items-center gap-2"
        >
          <div className="bg-white text-[#0047cc] font-black rounded-lg w-8 h-8 flex items-center justify-center text-lg shadow-sm">
            J
          </div>
          <span className="text-xl font-bold tracking-tight">Journex</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-blue-100">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="hover:text-white transition cursor-pointer"
          >
            {t.about}
          </a>
          <a
            href="#packages"
            onClick={(e) => handleScroll(e, 'packages')}
            className="hover:text-white transition cursor-pointer"
          >
            {t.packages}
          </a>
          <a
            href="#teachers"
            onClick={(e) => handleScroll(e, 'teachers')}
            className="hover:text-white transition cursor-pointer"
          >
            {t.teachers}
          </a>
          <a
            href="#faq"
            onClick={(e) => handleScroll(e, 'faq')}
            className="hover:text-white transition cursor-pointer"
          >
            {t.faq}
          </a>
        </nav>

        {/* Right Action Items (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-blue-700/60 rounded-lg p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLocale('om')}
              className={`px-2.5 py-1 rounded-md transition ${
                locale === 'om' ? 'bg-white text-[#0047cc] shadow-sm' : 'text-blue-200 hover:text-white'
              }`}
            >
              OM
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`px-2.5 py-1 rounded-md transition ${
                locale === 'en' ? 'bg-white text-[#0047cc] shadow-sm' : 'text-blue-200 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            to="/auth"
            search={{ mode: 'login' }}
            className="text-sm font-semibold hover:text-white transition"
          >
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

        {/* Mobile Action Buttons: Language Switcher + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center bg-blue-700/60 rounded-lg p-0.5 text-[11px] font-bold">
            <button
              type="button"
              onClick={() => setLocale('om')}
              className={`px-2 py-0.5 rounded ${
                locale === 'om' ? 'bg-white text-[#0047cc]' : 'text-blue-200'
              }`}
            >
              OM
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`px-2 py-0.5 rounded ${
                locale === 'en' ? 'bg-white text-[#0047cc]' : 'text-blue-200'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-1.5 rounded-lg text-blue-100 hover:text-white hover:bg-blue-700/50 transition focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#003cb3] border-t border-blue-400/20 px-6 py-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-blue-100 border-b border-blue-500/30 pb-4">
            <a
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="py-1 hover:text-white transition"
            >
              {t.about}
            </a>
            <a
              href="#packages"
              onClick={(e) => handleScroll(e, 'packages')}
              className="py-1 hover:text-white transition"
            >
              {t.packages}
            </a>
            <a
              href="#teachers"
              onClick={(e) => handleScroll(e, 'teachers')}
              className="py-1 hover:text-white transition"
            >
              {t.teachers}
            </a>
            <a
              href="#faq"
              onClick={(e) => handleScroll(e, 'faq')}
              className="py-1 hover:text-white transition"
            >
              {t.faq}
            </a>
          </nav>

          <div className="flex flex-col gap-2.5 pt-1">
            <Link
              to="/auth"
              search={{ mode: 'login' }}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-blue-100 bg-blue-800/60 rounded-xl hover:bg-blue-800 transition"
            >
              {t.login}
            </Link>
            <Link
              to="/auth"
              search={{ mode: 'register' }}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold text-[#0047cc] bg-white rounded-xl shadow hover:bg-blue-50 transition"
            >
              {t.join}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}