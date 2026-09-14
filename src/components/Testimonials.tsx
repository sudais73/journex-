// app/components/Navbar.tsx, Hero.tsx, About.tsx, etc.
import { type Locale, translations } from '../lib/i18n';

export function Testimonials({ locale }: { locale: Locale }) {
  const t = translations[locale].testimonials;

  const stories = [
    {
      quote: "Joining Journex unlocked real everyday English for me. Within four months, I was able to comfortably pitch to international freelance clients.",
      author: "Hana T.",
      role: "Excellence Track Learner"
    },
    {
      quote: "The Arabic Mastery course gave me the exact foundation I needed. Learning with an accountable peer group makes all the difference.",
      author: "Ibrahim K.",
      role: "Arabic Mastery Track"
    },
    {
      quote: "Not only did my speaking improve, but earning referral points while introducing my colleagues added a whole extra layer of motivation[cite: 1].",
      author: "Meron A.",
      role: "Partner & Learner[cite: 1]"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-2">
          {t.tag}
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-200/80 bg-white flex flex-col justify-between shadow-sm">
              <p className="text-xs text-slate-600 leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>
              <div className="border-t border-slate-100 pt-3">
                <p className="text-xs font-bold text-slate-900">{item.author}</p>
                <p className="text-[10px] text-blue-600">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}