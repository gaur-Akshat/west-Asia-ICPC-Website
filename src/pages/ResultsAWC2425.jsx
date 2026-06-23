import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function ResultsAWC2425() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div className="flex-1 min-w-0">
              <div className="mb-4 sm:mb-6">
                <h1 className="text-sm sm:text-base lg:text-lg text-gray-600 mb-2 border-b-2 border-gray-300 pb-1"></h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-800 mb-3 sm:mb-4">
                  Result of AWC 2024-25
                </h2>
              </div>
              <div className="mb-4"></div>
              <div className="bg-white/80 backdrop-blur-md border border-amber-200 rounded-xl shadow-md overflow-hidden overflow-x-auto mb-6">
                <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="bg-blue-200">
                      <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 whitespace-nowrap">
                        Rank
                      </th>
                      <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left min-w-[120px]">
                        Team Name
                      </th>
                      <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 whitespace-nowrap">
                        Score
                      </th>
                      <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 whitespace-nowrap">
                        Total Time
                      </th>
                      <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 whitespace-nowrap">
                        Country
                      </th>
                      <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left min-w-[150px]">
                        Institute Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        1
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Ballmer Peak
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        16.35.53
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Iran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Sharif University of Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        on_the_spectrum
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        9
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        17.56.41
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Delhi
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        SubtasksWhere
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        8
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        16.14.14
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        International Institute of Information Technology,
                        Hyderabad
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Ice shard
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        8
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        17.01.22
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Chennai Mathematical Institute
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        SENSODYNE
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        8
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        20.26.12
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Iran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Tehran
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        poocha kya
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        13.27.13
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology BHU
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        8
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Code_Dawgs
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        14.08.02
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Kanpur
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        9
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        404_solution_not_found
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        15.13.30
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Indore
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        segment_trACk
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        15.53.22
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Kanpur
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        11
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Prefer Not To Say
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        16.32.15
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology BHU
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        DDD
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        17.24.16
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Bombay
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        13
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        BRACU_Crows
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        9.32.55
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        BRAC University
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        14
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        SUST_Fanatics
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        9.56.32
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Shahjalal University of Science &amp; Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        15
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        HackstreetBoys
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12.28.36
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Bombay
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        16
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        IcyPeasy
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        13.31.11
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        National Institute of Technology Tiruchirappalli
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        17
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        HeheKyaHua
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        15.05.00
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Kharagpur
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        18
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        LAG
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        15.28.57
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Roorkee
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        19
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Lazy Coders
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        16.10.51
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Walchand College of Engineering, Sangli
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        20
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Crucio
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        19.03.09
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Iran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Amirkabir University of Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        21
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        bytemASKers
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6.36.57
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Roorkee
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        22
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        BUET_Quasar
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7.12.11
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Bangladesh University of Engineering and Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        23
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Variables
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10.18.36
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Kanpur
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        24
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        KhasTeAm
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10.27.47
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Iran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Tehran
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        25
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        kabhikabhicpp
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10.36.46
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Bombay
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        26
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Fast and Fourier
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10.51.35
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Bhubaneswar
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        27
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        100sage
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        11.13.41
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology, Hyderabad
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        28
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Zaleel
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        11.19.50
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology BHU
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        29
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        AlooParatha
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12.53.22
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Kharagpur
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        30
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Mushroom
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12.57.05
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Roorkee
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        31
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Code_Monkeys!
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        13.33.04
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Khulna University of Engineering &amp; Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        32
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        whitepilled again
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        13.55.24
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        International Institute of Information Technology,
                        Bangalore
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        33
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        RUET_B_Team
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        14.10.32
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Rajshahi University of Engineering &amp; Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        34
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        JUST_FLARE
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        15.14.27
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Jessore University of Science and Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        35
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Cheetah
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        15.36.10
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Ropar
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        36
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        BUET_hotasha
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        18.50.50
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Bangladesh University of Engineering and Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        37
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        JU_the0dd1out
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7.22.54
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Jahangirnagar University
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        38
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        NutFlush
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        8.28.48
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Madras
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        39
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Argons
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10.43.41
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Iran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Amirkabir University of Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        40
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        998244353
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10.54.58
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Rajshahi University of Engineering &amp; Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        41
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        SRS sus
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        11.24.37
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Birla Institute of Technology and Science, Pilani Campus
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        42
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Wasted_apples
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12.43.30
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Mandi
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        43
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Trie Harder
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12.52.13
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        National Institute of Technology Karnataka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        44
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Silent 3lers
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        13.06.12
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Dhirubhai Ambani Institute of Information and
                        Communication Technology, Gandhinagar
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        45
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        The Blasters
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        13.42.58
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Madras
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        46
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        DU_Singularity
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        14.06.41
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        47
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        KU_ErrorMakers
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5.56.14
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Khulna University, Bangladesh
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        48
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        DU_Primordius
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6.32.30
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        49
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        HSS433
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6.44.29
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Guwahati
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        50
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Code Paladins
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        8.32.50
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Pakistan
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Habib University
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        51
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        CoU_LastRunForMemories
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        9.02.27
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Comilla University, Bangladesh
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        52
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        DIU_Strygwyr
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        9.19.55
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Daffodil International University
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        53
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        IU_Waving_Flag
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        1.08.48
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Islamic University, Bangladesh
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        54
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        3:00 AM
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2.49.17
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Pakistan
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        National University of Sciences and Technology,
                        Islamabad
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        55
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        RU_S_Cube
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3.14.54
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Rajshahi
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        56
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Soup
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3.59.40
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        India
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology Madras
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        57
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        JU_BinaryMosFet
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4.32.59
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Jahangirnagar University
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        58
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        PSTU Returned From Breaking Point
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4.42.29
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Patuakhali Science And technology University
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        59
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        EWU_495_fanclub
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4.45.00
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        East West University, Bangladesh
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        60
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        IUT_CocolaChampionBiscuit
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        17.00.16
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Islamic University of Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        61
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Purple hat
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        1
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        1.38.07
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Pakistan
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Punjab University College of Information Technology,
                        Lahore, Pakistan
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        62
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Proxima
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        1
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2.26.16
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Pakistan
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        National University of Computer and Emerging Sciences
                      </td>
                    </tr>
                  </tbody>
                </table>
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
