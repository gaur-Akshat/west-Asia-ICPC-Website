import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function TeamsAWC2526() {
  const [activeTab, setActiveTab] = useState("kanpur");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <section className="py-12 bg-transparent">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              <div className="flex-1 min-w-0">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  List of Selected Teams- 2025-26
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
                  On-site contests. A higher participation metric results in
                  more slots being allocated. Based on this criterion, the
                  following slots have been assigned for team selection at each
                  regional site:
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
                          Topi
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          5
                        </td>
                      </tr>
                      <tr className="bg-red-200">
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          Kanpur
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          11
                        </td>
                      </tr>
                      <tr className="bg-red-100">
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          Peradeniya
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          6
                        </td>
                      </tr>
                      <tr className="bg-red-200">
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          Tehran
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          9
                        </td>
                      </tr>
                      <tr className="bg-red-100">
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          Kabul
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          5
                        </td>
                      </tr>
                      <tr className="bg-red-200">
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          29
                        </td>
                      </tr>
                      <tr className="bg-red-100">
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          Dhaka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          25
                        </td>
                      </tr>
                      <tr className="bg-red-200">
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          Chennai
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
                          11
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm sm:text-base text-justify text-red-700 leading-relaxed mb-4 sm:mb-6">
                  Teams are chosen based on their performance at their
                  respective regional contest sites. Below is the list of
                  selected teams as per the Team Selection Process of the Asia
                  West Championship:
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          1
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Enigma{" "}
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
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          2
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          XCode
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Kabul University
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Kabul
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Topi
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          3
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Runtime Shadows
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Kabul University
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
                          4
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          BaseballHuh
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          5
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          INFINITY CODERS
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Avicenna University
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
                          6
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Ip1 on fire
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          7
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Psycho
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
                          8
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Sardast
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          9
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
                          10
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          runtime servivors
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          11
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          MORTAR
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
                          12
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Code Code
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          University of Isfahan
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Tehran
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Tehran
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          13
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          TryHard
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
                          14
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Team Ghadar
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          15
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Chai Walay
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          NU-FAST, Karanchi
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
                          16
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          3AM
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          NUST, Islamabad
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Topi
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Topi
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          17
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Code Warriors
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          NED, University of Engg. &amp; Tech, Karanchi
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
                          18
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Gato
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Punjab University College of Information Technology,
                          Lahore
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Topi
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Topi
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          19
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Segmentation Fault
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          FAST NUCES, Lahore
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
                          20
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Team Glory
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          SLIT, Sri Lanka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Peradeniya
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          21
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          TLEMora
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          University of Moratuwa, Sri Lanka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Peradeniya
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          22
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          AfterShock
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          East West University, Bangladesh
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Peradeniya
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhaka
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          23
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          RePeaTers
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          University of Kelaniya, Sri Lanka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Peradeniya
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          24
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Velosphere
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          University of Moratuwa, Sri Lanka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Peradeniya
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          25
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          NovaCore
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          University of Peradeniya, Sri Lanka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Peradeniya
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          26
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          BUET_Silver_hawks
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          27
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          DU_MaxSunkCostFlow
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
                          28
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          GodFathers Inc.
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          29
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          DU_MB
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
                          30
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          CoU_Reignite
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          31
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          SUST IKHWAN
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
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          32
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          JU_Jabian_6.1
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          33
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          IUT_Kamikaze
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
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          34
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          3BlueNoBrown
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Rajshahi University of Engineering &amp; Technology
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhaka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhaka
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          35
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Infinite Tsukuyomi
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Chittagong University of Engineering &amp; Technology
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
                          36
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          BRACU_ScareCrows
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          37
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Fiery_end
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
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          38
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dream O(n)
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Rajshahi University of Engineering &amp; Technology
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhaka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhaka
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          39
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Team_Tim
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
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          40
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          JU_Twilight_Tray
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          41
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          KUET_Potol
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Khulna University of Engineering and Technology
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
                          42
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          AIUB_Modularity
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          American International University - Bangladesh
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhaka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhaka
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          43
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          SUST_Oblivion
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
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          44
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          CU_LastMove
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          University of Chittagong
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhaka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhaka
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          45
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          DU_Kairo
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
                          46
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          RUET_Celestials
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Rajshahi University of Engineering &amp; Technology
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhaka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhaka
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          47
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          SUST_BOTbrikkho
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
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          48
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          DIU_MilesPerHour
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          49
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          AUST_Simplexity
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Ahsanullah University of Science and Technology
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
                          50
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          IUT_Lycoris
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
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          51
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Malai Chaap Extra Masala
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Roorkee
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
                          52
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          just_better
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Bombay
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Kanpur
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          53
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          AC || AFK
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology (ISM), Dhanbad
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
                          54
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          O_HELL
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology, Madras
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Kanpur
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          55
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Azkaban ke Kaidi
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Indore
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
                          56
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          #1frombits.h
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          BITS-Pilani, Hyderabad Campus
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Kanpur
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          57
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          OnlyYou
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Ropar
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
                          58
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Peri Peri Fries
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Varanasi
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Kanpur
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          59
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          WA.on.pretest.4
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Kanpur
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
                          60
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Khokhla Ghudsawaar
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          International Institute of Information Technology -
                          Bangalore
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Kanpur
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          61
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          phirse lite lo
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Birla Institute of Technology and Science, Pilani
                          Campus
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
                          62
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          TOURISTS
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute Of Technology - Delhi
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Chennai
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          63
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          CAT in the HAT
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute Of Technology - Guwahati
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
                          64
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          dinoxors
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute Of Technology - Indore
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Chennai
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          65
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Codeblasters
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute Of Science, Bangalore
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
                          66
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          (un)retired
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute Of Technology - Kanpur
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Chennai
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          67
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          team
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          International Institute Of Information Technology -
                          Bangalore
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
                          68
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          ICPC**2
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          International Institute Of Information Technology,
                          Hyderabad
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Chennai
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          69
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          exeCuties
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Manipal Institute Of Technology, Manipal
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
                          70
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          return icpc;
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute Of Technology - Kanpur
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Chennai
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          71
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          PPA-46ms
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute Of Technology, Madras
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
                          72
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          cyclone
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Dhirubhai Ambani Institute Of Information And
                          Communication Technology, Gandhinagar
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Chennai
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          73
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Div4Maxxer
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Kharagpur
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
                          74
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          hehe i do cp
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Roorkee
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          75
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Wowwies
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          DJ Sanghvi College of Engineering
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
                          76
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Slendermen
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Hyderabad
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          77
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          lazy three
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          International Institute of Information Technology,
                          Hyderabad
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
                          78
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          The Blasters
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology, Madras
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          79
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          not qualified
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Varanasi
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
                          80
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          SegFault@IITB
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Bombay
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          81
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          godeaters
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Varanasi
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
                          82
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          cantreachCM
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Bombay
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          83
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Keval Have Mercy
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          International Institute of Information Technology,
                          Hyderabad
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
                          84
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          kzzouka
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Birla Institute of Technology and Science, Pilani
                          Campus
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          85
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Team Teleforces
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Patna
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
                          86
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Weak Testcase
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          IIIT Delhi
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          87
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          LAL Fund
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Information Technology Allahabad
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
                          88
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Level
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Information Technology Allahabad
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          89
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          The Sidekicks
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          IIIT Delhi
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
                          90
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          hope_is_np_hard
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Veermata Jijabai Technological Institute
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          91
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          IseePCs
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          K. J. Somaiya College of Engineering, Vidyavihar,
                          Mumbai
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
                          92
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Nah, We'd Win
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology (ISM), Dhanbad
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          93
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          ByteMeSofter
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          National Institute of Technology Karnataka, Surathkul
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
                          94
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          ACSepted
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Hyderabad
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          95
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Litti Chokers
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Kanpur
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
                          96
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Waluigi
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Hyderabad
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          97
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          BLANK
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Information Technology Nagpur
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
                          98
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          The Segmentors
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology - Indore
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          99
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Kal_Batayenge
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Rishihood University
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
                          100
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          DiceStraw
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Indian Institute of Technology, Madras
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Amritapuri
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          Mathura
                        </td>
                      </tr>
                      <tr className="bg-white/40">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium whitespace-nowrap">
                          101
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          O(n)ionParatha
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-900 font-medium">
                          National Institute of Technology Karnataka, Surathkul
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
        </section>
      </div>
      <Footer />
    </>
  );
}
