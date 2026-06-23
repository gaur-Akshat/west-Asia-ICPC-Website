import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function TeamsAWC2425() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                List of Selected Teams- 2024-25
              </h1>
              <div className="mb-4 sm:mb-6">
                <select className="w-full sm:w-auto border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 font-medium bg-white">
                  <option value="">Select Championship Session</option>
                  <option value="94014565-8795-4278-b03c-33187bea12ae">
                    AWC 2025-26
                  </option>
                  <option value="1f1672dc-34bd-4bb1-8e58-a751ba2ff12c">
                    AWC 2024-25
                  </option>
                </select>
              </div>
              <p className="text-sm sm:text-base text-justify text-red-700 leading-relaxed mb-4 sm:mb-6">
                The number of teams selected from each regional site is
                determined by the total participation in both the Online and
                On-site contests. A higher participation metric results in more
                slots being allocated. Based on this criterion, the following
                slots have been assigned for team selection at each regional
                site:
              </p>
              <div className="bg-white/80 backdrop-blur-md border border-amber-200 rounded-xl shadow-md overflow-hidden overflow-x-auto mb-6">
                <table className="w-full min-w-[320px] border border-gray-400">
                  <thead>
                    <tr className="bg-red-400">
                      <th className="border border-gray-400 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-bold text-white text-center">
                        Regional Site
                      </th>
                      <th className="border border-gray-400 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-bold text-white text-center">
                        Allotted Slots
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-red-100">
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        20
                      </td>
                    </tr>
                    <tr className="bg-red-200">
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        Topi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        4
                      </td>
                    </tr>
                    <tr className="bg-red-100">
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        Kabul
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        3
                      </td>
                    </tr>
                    <tr className="bg-red-200">
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        Tehran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        5
                      </td>
                    </tr>
                    <tr className="bg-red-100">
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        16
                      </td>
                    </tr>
                    <tr className="bg-red-200">
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        9
                      </td>
                    </tr>
                    <tr className="bg-red-100">
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        Chennai
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                        8
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-justify text-red-700 leading-relaxed mb-4 sm:mb-6">
                Teams are chosen based on their performance at their respective
                regional contest sites. Below is the list of selected teams as
                per the Team Selection Process of the Asia West Championship:
              </p>
              <div className="bg-white/80 backdrop-blur-md border border-amber-200 rounded-xl shadow-md overflow-hidden overflow-x-auto mb-6">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="bg-blue-200">
                      <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left whitespace-nowrap">
                        Sl No
                      </th>
                      <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left min-w-[120px]">
                        Team Name
                      </th>
                      <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left min-w-[140px]">
                        Institute
                      </th>
                      <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left min-w-[100px]">
                        Selected from
                      </th>
                      <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left min-w-[100px]">
                        AWC Venue
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        1
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        DU_Primordius
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        University of Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        2
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        SUST_Fanatics
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Shahjalal University of Science and Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        3
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        CoU_LastRunForMemories
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Comilla University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        4
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        IUT_CocolaChampionBiscuit
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Islamic University of Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        5
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        BRACU_Crows
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        BRAC University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        6
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        998244353
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Rajshahi University of Engineering &amp;Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        7
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        BUET_Quasar
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Bangladesh University of Engineering and Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        8
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        DIU_Strygwyr
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Daffodil International University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        9
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        RUET_B_Team
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Rajshahi University of Engineering &amp;Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        10
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        JU_the0dd1out
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Jahangirnagar University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        11
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Code_Monkeys!
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Khulna University of Engineering &amp; Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        12
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        BUET_hotasha
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Bangladesh University of Engineering and Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        13
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        KU_ErrorMakers
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Khulna University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        14
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        JU_BinaryMosFet
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Jahangirnagar University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        15
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        RU_S_Cube
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        University of Rajshahi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        16
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        JUST_FLARE
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Jashore University of Science and Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        17
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        IU_Waving_Flag
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Islamic University, Bangladesh
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        18
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        EWU_495_fanclub
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        East West University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        19
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        PSTU : Returned From Breaking Point
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Patuakhali Science and Technology University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhaka
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        20
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amigos
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kardan University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kabul
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Topi
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        21
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Algo Hackers
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kabul Polytechnic University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kabul
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Topi
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        22
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        DeCrypteRs
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kateb University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kabul
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Topi
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        23
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Ballmer Peak
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Sharif University of Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Tehran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Tehran
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        24
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        SENSODYNE
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        University of Tehran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Tehran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Tehran
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        25
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        KhasTeAm
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        University of Tehran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Tehran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Tehran
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        26
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Argons
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amirkabir University of Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Tehran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Tehran
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        27
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Crucio
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amirkabir University of Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Tehran
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Tehran
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        28
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Proxima
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        NU-FAST Karachi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Topi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Topi
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        29
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Code Paladins
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Habib University
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Topi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Topi
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        30
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        3AM
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        National University of Sciences and Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Topi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Topi
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        31
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Purple Hat
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Punjab University College of Information Technology
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Topi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Topi
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        32
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        on_the_spectrum
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Delhi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Chennai
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        33
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Prefer Not To Say
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology (BHU) Varanasi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Chennai
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        34
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        hehe i do cp
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Roorkee
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Chennai
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        35
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        IcyPeasy
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        National Institute of Technology Tiruchirappalli
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Chennai
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        36
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        DDD
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Bombay
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Chennai
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        37
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Variables
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Chennai
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        38
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        100sage
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Hyderabad
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Chennai
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        39
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        The Blasters
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Madras
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Chennai
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        40
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        SubtasksWhere
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        International Institute of Information Technology,
                        Hyderabad
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        41
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        poocha kya
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology BHU
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        42
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        segment trACk
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        43
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        NutFlush
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Madras
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        44
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Trie Harder
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        National Institute of Technology Karnataka
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        45
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        HeheKyaHua
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Kharagpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        46
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Zaleel
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology BHU
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        47
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mushroom
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Roorkee
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        48
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        LAG
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Roorkee
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        49
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Ice shard
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Chennai Mathematical Institute
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        50
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        404_solution_not_found
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Indore
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        51
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Code_Dawgs
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute Of Technology – Kanpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        52
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        HSS433
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Guwahati
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        53
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Wasted_apples
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Mandi
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        54
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        bytemASKers
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Roorkee
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        55
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Fast and Fourier
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Bhubaneswar
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        56
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        whitepilled again
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        International Institute of Information Technology,
                        Bangalore
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        57
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Soup
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Madras
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        58
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        SRS sus
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Birla Institute of Technology &amp; Science Pilani,
                        Pilani Campus
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        59
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Cheetah
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Ropar
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        60
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        AlooParatha
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute of Technology Kharagpur
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        61
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        HackstreetBoys
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute Of Technology – Bombay
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        62
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        kabhikabhicpp
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Indian Institute Of Technology – Bombay
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        63
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Lazy Coders
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Walchand College of Engineering, Sangli
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                        64
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Silent 3lers
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Dhirubhai Ambani Institute of Information and
                        Communication Technology, Gandhinagar
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Amritapuri
                      </td>
                      <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                        Mathura
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
