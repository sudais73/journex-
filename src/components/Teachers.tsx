// app/components/Navbar.tsx, Hero.tsx, About.tsx, etc.
import { type Locale, translations } from '../lib/i18n';

export function Teachers({ locale }: { locale: Locale }) {
  const t = translations[locale].teachers;

  const instructors = [
    { name: "Ustaz Salih Ahmed", role: "Lead Arabic Instructor", cred: "10+ years experience, Al-Azhar graduate" },
    { name: "Helen Getachew", role: "Senior English Coach", cred: "IELTS 8.5, certified TESOL specialist" },
    { name: "Fuad Abdella", role: "Spoken Arabic Expert", cred: "Corporate communication and fluency coach" },
    { name: "Robel Tesfaye", role: "Business English Trainer", cred: "Specialist in workplace presentation & writing" },
  ];

  return (
    <section id="teachers" className="py-16 px-6 md:px-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-2">
          {t.tag}
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {instructors.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mb-4">
                {item.name.charAt(0)}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
              <p className="text-xs text-blue-600 font-semibold mb-2">{item.role}</p>
              <p className="text-[11px] text-slate-500">{item.cred}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}