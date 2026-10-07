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
            <li>Phone: <a href="tel:+251900577765">+251 900577765</a></li>
            <li>Email: JournexEdu@gmail.com</li>
            <li>Location: Shashanne, Oromia, Ethiopia</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
  {/* Copyright */}
  <p>© {new Date().getFullYear()} Journex Inc. All rights reserved.</p>

  {/* Social Links */}
  <div className="flex items-center gap-3">
    {/* Telegram */}
    <a
      href="https://t.me/JournexEdu"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Telegram"
      className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-[#229ED9]/20 transition"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.83 1.018z" />
      </svg>
    </a>

    {/* Facebook */}
    <a
      href="https://facebook.com/your_facebook_page"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-[#1877F2]/20 transition"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </a>

    {/* TikTok */}
    <a
      href="https://tiktok.com/@your_handle"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="https://youtube.com/@your_channel"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-[#FF0000]/20 transition"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    </a>
  </div>
</div>
    </footer>
  );
}