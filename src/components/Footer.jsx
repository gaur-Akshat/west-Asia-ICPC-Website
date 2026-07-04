import { footerLinks, partnerLogos, glaLogo } from "../data/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] text-slate-600 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
          {/* About blurb */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              ICPC Asia West Continent Championship
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              The premier programming contest for university students across the
              Asia West region, fostering algorithmic thinking and competitive
              programming excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-slate-900">Contact</h3>
            <div className="text-sm text-slate-600 space-y-2 font-medium">
              <p>ICPC Asia West Continent Championship</p>
              <p>Email: icpc.secretary@gmail.com</p>
              <p>
                <a
                  href="https://icpc.global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Official ICPC Website
                </a>
              </p>
            </div>
          </div>

          {/* GLA Logo */}
          <div className="flex items-center justify-center bg-white rounded-lg p-2 border border-slate-200">
            <img
              alt="ICPC Footer Image"
              width="300"
              height="150"
              className="w-full h-auto max-h-48 object-contain rounded-lg mix-blend-multiply"
              src={glaLogo}
            />
          </div>
        </div>

        {/* Partner logos */}
        <div className="flex flex-col items-center gap-0 mb-4 px-4 border-t border-slate-200 pt-8 mt-8">
          <div className="text-center text-base sm:text-lg font-semibold text-slate-900 mb-2">
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} ICPC Asia West Continent Championship. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
