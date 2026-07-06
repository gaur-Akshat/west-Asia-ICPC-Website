import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function TeamsAWC2526() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFFCF2]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div className="flex-1 min-w-0">
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  List of Selected Teams - 2026-27
                </h1>
                <div className="h-1 w-20 bg-amber-400 rounded-full"></div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md border border-amber-200 rounded-2xl shadow-sm p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                  To Be Announced
                </h2>
                <p className="text-slate-600 text-base sm:text-lg max-w-lg mx-auto">
                  The list of selected teams for the Asia West Championship is currently being finalized. Please check back later for updates.
                </p>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
