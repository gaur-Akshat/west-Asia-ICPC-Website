// Hero section: city names bar, logo, sponsors, title, and date badge
import icpcLogo from "../../asset/icpc-logo.webp";
import jetbrainsLogo from "../../asset/jetbrains.webp";
import janeStreetLogo from "../../asset/jane-4.webp";

const cities = [
  { name: "Greater Noida", country: "India" },
  { name: "Dhaka", country: "Bangladesh" },
  { name: "Topi", country: "Pakistan" },
  { name: "Tehran", country: "Iran" },
];

export default function Hero() {
  return (
    <div className="relative bg-[#FAF9F6] overflow-hidden py-8 sm:py-12 lg:py-16 border-b border-slate-200">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative">
        {/* City Names Row */}
        <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-4 sm:gap-x-8 lg:gap-x-12 mb-4 sm:mb-6 lg:mb-8">
          {cities.map((city, idx) => (
            <div
              key={city.name}
              className="flex items-center space-x-4 sm:space-x-8 lg:space-x-12"
            >
              <div className="text-center">
                <div className="text-slate-900 tracking-tight text-sm sm:text-lg lg:text-xl font-bold">
                  {city.name}
                </div>
                <div className="text-slate-600 font-medium text-xs sm:text-sm">
                  {city.country}
                </div>
              </div>
              {idx < cities.length - 1 && (
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />
              )}
            </div>
          ))}
        </div>

        {/* Logo + Title + Date */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Logo column */}
          <div className="w-full sm:w-80 lg:w-96 flex-shrink-0">
            <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
              <div className="w-full h-64 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <img
                  alt="Championship"
                  className="relative w-full h-full object-contain rounded-lg bg-white/80 backdrop-blur-sm p-2 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                  src={icpcLogo}
                />
              </div>
            </div>

            {/* Sponsor Logos */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <img
                  alt="JetBrains"
                  loading="lazy"
                  width="120"
                  height="32"
                  className="h-6 sm:h-8 w-auto object-contain hover:opacity-80 transition-opacity"
                  src={jetbrainsLogo}
                />
              </div>
              <div className="w-px h-6 sm:h-8 bg-slate-300" />
              <div className="flex items-center space-x-2">
                <img
                  alt="Jane Street"
                  loading="lazy"
                  width="140"
                  height="32"
                  className="h-6 sm:h-8 w-auto object-contain hover:opacity-80 transition-opacity"
                  src={janeStreetLogo}
                />
              </div>
            </div>
          </div>

          {/* Vertical Divider (desktop only) */}
          <div className="hidden lg:flex flex-col items-center h-64 mx-4">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
          </div>

          {/* Title + Date */}
          <div className="flex-1 text-center min-w-0">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6 leading-tight">
              <span className="block text-indigo-700 mb-2 text-4xl sm:text-5xl lg:text-7xl font-black tracking-normal uppercase">
                ICPC
              </span>
              ASIA WEST CONTINENT <br className="hidden lg:block" />{" "}
              CHAMPIONSHIP
            </h1>
            <div className="inline-flex items-center mt-2 lg:mt-6 group">
              <div className="text-indigo-600 px-3 sm:px-4 py-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black">
                  20-21
                </div>
              </div>
              <div className="text-slate-800 px-3 sm:px-4 py-2 flex flex-col justify-center text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold leading-none uppercase tracking-wide text-slate-900">
                  March
                </div>
                <div className="text-base sm:text-lg lg:text-xl text-indigo-700 font-medium leading-none mt-1">
                  2027
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
