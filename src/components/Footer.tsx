export function Footer() {
  return (
    <footer className="bg-[#0b192e] text-slate-400 py-12 px-6 md:px-12 border-t border-slate-800 text-xs">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-blue-600 text-white font-black rounded w-6 h-6 flex items-center justify-center text-sm">
              J
            </div>
            <span className="text-base font-bold text-white tracking-tight">Journex</span>
          </div>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            Empowering individuals through education, structured language mastery, and decentralized community network pathways[cite: 1].
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Explore</h4>
          <ul className="space-y-1.5 text-[11px]">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#packages" className="hover:text-white transition">English Package</a></li>
            <li><a href="#packages" className="hover:text-white transition">Arabic Package</a></li>
            <li><a href="#teachers" className="hover:text-white transition">Our Mentors</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Policies</h4>
          <ul className="space-y-1.5 text-[11px]">
            <li><a href="#" className="hover:text-white transition">Compensation Plan</a></li>
            <li><a href="#" className="hover:text-white transition">Code of Ethics</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-1.5 text-[11px]">
            <li>Phone: +251 965 656 355[cite: 1]</li>
            <li>Email: inquiry@journex.org</li>
            <li>Location: Addis Ababa, Ethiopia</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-slate-800 text-center text-[10px] text-slate-500">
        © {new Date().getFullYear()} Journex Inc. All rights reserved.
      </div>
    </footer>
  );
}