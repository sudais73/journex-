export function Pricing() {
  const englishTiers = [
    { title: "Foundation", price: "6,800 ETB", sub: "Basic conversation & writing" },
    { title: "Progress", price: "12,500 ETB", sub: "Fluency & intermediate skills" },
    { title: "Mastery", price: "19,850 ETB", sub: "Advanced leadership English", featured: true },
    { title: "Excellence", price: "24,500 ETB", sub: "Professional & networking master" }
  ];

  const arabicTiers = [
    { title: "Foundation", price: "5,400 ETB", sub: "Reading, basic letters & dialogue" },
    { title: "Progress", price: "9,650 ETB", sub: "Applied daily speaking & grammar" },
    { title: "Mastery", price: "15,390 ETB", sub: "Grammar, literature & conversation", featured: true },
    { title: "Excellence", price: "21,436 ETB", sub: "Mastery, rhetoric & fluency" }
  ];

  const renderSection = (title: string, list: typeof englishTiers) => (
    <div className="mb-12">
      <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {list.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-6 flex flex-col justify-between border ${
              item.featured ? 'border-blue-600 shadow-md ring-1 ring-blue-600/30' : 'border-slate-200 bg-white'
            }`}
          >
            <div>
              {item.featured && (
                <span className="text-[10px] font-bold tracking-wider uppercase bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full inline-block mb-3">
                  Most Popular
                </span>
              )}
              <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
              <p className="text-2xl font-black text-blue-600 my-2">{item.price}</p>
              <p className="text-xs text-slate-500 mb-6">{item.sub}</p>
            </div>
            <button className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition">
              Start this journey
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="packages" className="py-16 px-6 md:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Packages</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Choose where your journey starts</h2>
        </div>
        {renderSection("English Learning Journey", englishTiers)}
        {renderSection("Arabic Learning Journey", arabicTiers)}
      </div>
    </section>
  );
}