import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function ResultsAWC2526() {
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
                  Result of AWC 2025-26
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
                        Problems Solved
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
                        not qualified
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        13:40:28
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Varanasi
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        TOURISTS
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        15:25:10
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Delhi
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Div4Maxxer
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        22:12:22
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Kharagpur
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        godeaters
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        23:01:06
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Varanasi
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Slendermen
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        09:56:30
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Hyderabad
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        lazy three
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10:47:08
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        International Institute of Information Technology -
                        Hyderabad
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        SegFault@IITB
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        11:56:58
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Bombay
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        8
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Keval Have Mercy
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12:04:34
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        International Institute of Information Technology -
                        Hyderabad
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        9
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        hehe i do cp
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12:08:12
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Roorkee
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        just_better
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        15:56:31
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Bombay
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        11
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Malai Chaap Extra Masala
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        16:21:06
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Roorkee
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        team
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        16:33:56
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        International Institute of Information Technology -
                        Bangalore
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        13
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Weak Testcase
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        20:26:46
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        IIIT-Delhi
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        14
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        The Blasters
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        09:07:31
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Madras
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        15
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        dinoxors
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        09:23:21
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Indore
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        16
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        CAT in the HAT
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        09:30:38
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Guwahati
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        17
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Azkaban ke Kaidi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        09:59:39
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Indore
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        18
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        DiceStraw
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10:12:36
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Madras
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        19
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        (un)retired
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10:52:45
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Kanpur
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        20
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Wowwies
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        11:24:18
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        DJ Sanghvi College of Engineering
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        21
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        GodFathers Inc.
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        11:26:02
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Shahjalal University of Science and Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        22
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        ACSepted
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12:04:36
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Hyderabad
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        23
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        phirse lite lo
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        13:39:05
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Birla Institute of Technology and Science, Pilani Campus
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        24
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Khokhla Ghudsawaar
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        14:05:11
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        International Institute of Information Technology -
                        Bangalore
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        25
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        cantreachCM
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        14:07:11
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Bombay
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        26
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        BUET_Silver_hawks
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        14:07:24
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Bangladesh University of Engineering and Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        27
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        AC || AFK
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        14:07:45
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology (ISM), Dhanbad
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        28
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        The Sidekicks
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        14:59:59
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        IIIT-Delhi
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        29
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        PPA-46ms
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        06:38:42
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Madras
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        30
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        WA.on.pretest.4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        07:12:02
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Kanpur
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        31
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Kal_Batayenge
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        08:46:30
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Rishihood University
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        32
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        O_HELL
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        08:46:40
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Madras
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        33
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Level
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        09:57:37
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Information Technology, Allahabad
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        34
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Codeblasters
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10:07:32
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Science, Bangalore
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        35
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        AIUB_Modularity
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        10:11:01
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        American International University - Bangladesh
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        36
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        KUET_Potol
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        11:15:13
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Khulna University of Engineering and Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        37
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        DU_MaxSunkCostFlow
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        11:35:34
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        38
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        O(n)ionParatha
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        11:41:34
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        National Institute of Technology Karnataka, Surathkul
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        39
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        IUT_Kamikaze
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12:04:35
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Islamic University of Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        40
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Dream O(n)
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12:22:44
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Rajshahi University of Engineering &amp; Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        41
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        OnlyYou
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        13:23:13
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Ropar
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        42
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        hope_is_np_hard
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        03:01:55
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Veermata Jijabai Technological Institute
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        43
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        DU_Kairo
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        05:08:11
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        44
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        JU_Jabian_6.1
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        05:19:53
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Jahangirnagar University
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        45
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        ICPC**2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        05:32:05
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        International Institute of Information Technology -
                        Hyderabad
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        46
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        SUST_Oblivion
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        05:43:04
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Shahjalal University of Science and Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        47
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        cyclone
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        05:53:08
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Dhirubhai Ambani Institute of Information and
                        Communication Technology, Gandhinagar
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        48
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        AUST_Simplexity
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        05:53:54
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Ahsanullah University of Science and Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        49
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Team_Tim
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        05:58:50
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Shahjalal University of Science and Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        50
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        kzzouka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        06:09:29
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Birla Institute of Technology and Science, Pilani Campus
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        51
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Team Glory
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        06:39:46
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        SRI LANKA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Sri Lanka Institue of Information Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        52
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        LAL Fund
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        07:38:50
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Information Technology, Allahabad
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        53
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Infinite Tsukuyomi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        07:42:25
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Chittagong University of Engineering &amp; Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        54
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        BRACU_ScareCrows
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        07:46:47
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        BRAC University
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        55
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        return icpc;
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        08:29:32
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Kanpur
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        56
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        DIU_MilesPerHour
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        00:52:28
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Daffodil International University
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        57
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Team Teleforces
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        00:53:09
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Patna
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        58
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        IseePCs
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        00:55:34
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        K. J. Somaiya College of Engineering, Vidyavihar, Mumbai
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        59
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Nah, We'd Win
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        00:59:22
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology (ISM), Dhanbad
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        60
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Peri Peri Fries
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:07:02
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Varanasi
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        61
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        SUST IKHWAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:22:58
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Shahjalal University of Science and Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        61
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        The Segmentors
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:22:58
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Indore
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        63
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        ByteMeSofter
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:23:27
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        National Institute of Technology Karnataka, Surathkul
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        64
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Litti Chokers
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:31:21
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Kanpur
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        65
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        #1frombits.h
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:36:19
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        BITS Pilani, Hyderabad Campus
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        66
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        CoU_Reignite
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:39:26
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Comilla University
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        67
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        3BlueNoBrown
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:39:47
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Rajshahi University of Engineering &amp; Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        68
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        BLANK
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:44:29
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Information Technology, Nagpur
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        69
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        SUST_BOTbrikkho
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:47:11
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Shahjalal University of Science and Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        70
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        DU_MB
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:48:20
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Dhaka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        71
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Waluigi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:57:27
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Indian Institute of Technology - Hyderabad
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        72
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        AfterShock
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        02:13:00
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        East West University
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        73
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        JU_Twilight_Tray
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        02:13:26
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Jahangirnagar University
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        74
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        RUET_Celestials
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        02:15:41
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Rajshahi University of Engineering &amp; Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        75
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        exeCuties
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        02:46:39
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        INDIA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Manipal Institute of Technology, Manipal
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        76
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Chai Walay
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        03:25:56
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        PAKISTAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        NU-FAST Karachi
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        77
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Fiery_end
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        04:01:48
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Shahjalal University of Science and Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        78
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        CU_LastMove
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        04:12:21
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Chittagong
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        79
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        IUT_Lycoris
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        05:40:52
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        BANGLADESH
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Islamic University of Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        80
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Segmentation Faults
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        06:38:52
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        PAKISTAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        FAST National University of Computer and Emerging
                        Sciences, Lahore
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        81
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Gato
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        08:56:00
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        PAKISTAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Punjab University College of Information Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        82
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        RePeaTers
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        12:09:30
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        SRI LANKA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Kelaniya
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        83
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Code Warriors
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        1
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        01:51:08
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        PAKISTAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        NED University of Engineering &amp; Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        NovaCore
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        0
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        0
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        SRI LANKA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Peradeniya
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Velosphere
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        0
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        0
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        SRI LANKA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Moratuwa - Sri Lanka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        TLEMora
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        SRI LANKA
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Moratuwa - Sri Lanka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Runtime Shadows
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        AFGHANISTAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Kabul University
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        03:00 AM
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        PAKISTAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        National University of Sciences and Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        runtime servivors
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        IRAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Amirkabir University of Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        TryHard
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        IRAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Tehran
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        BaseballHuh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        AFGHANISTAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Kardan University
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Team Ghadar
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        IRAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Amirkabir University of Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Psycho
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        IRAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Amirkabir University of Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        KhasTeAm
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        IRAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Tehran
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        lp1 on fire
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        IRAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Sharif University of Technology
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        INFINITY CODERS
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        AFGHANISTAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Avicenna University
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Code Code
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        IRAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Isfahan
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Sardast
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        IRAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Amirkabir University of Technology
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        MORTAR
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        IRAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        University of Tehran
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Enigma
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        AFGHANISTAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Kateb University
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        XCode
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        -
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        Did Not Participate
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        AFGHANISTAN
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-blue-700 font-medium">
                        Kabul University
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
