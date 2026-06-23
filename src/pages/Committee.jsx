import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function Committee() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div className="flex-1 min-w-0">
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <h1 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 border-b-2 border-gray-300 pb-1">
                  People
                </h1>
                <div className="bg-white/80 backdrop-blur-md border border-amber-200 rounded-xl shadow-md overflow-hidden overflow-x-auto mb-6">
                  <table className="w-full min-w-[640px]">
                    <thead>
                      <tr className="bg-blue-200">
                        <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left whitespace-nowrap min-w-[150px]">
                          Designation
                        </th>
                        <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left min-w-[300px]">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Patron
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="font-semibold text-blue-700">
                              Prof. C. J. Hwang
                            </div>
                            <div className="text-gray-900 font-medium">
                              Asia Regional Contest Director
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-yellow-100">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Regional Contest Director and Associate Director, ICPC
                          Asia WC Super Region
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="font-semibold text-blue-700">
                              Prof. Phalguni Gupta
                            </div>
                            <div className="text-gray-900 font-medium">
                              Chancellor's Advisor
                            </div>
                            <div className="text-gray-900">
                              GLA University, Mathura, Mathura-281406 India
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:iitkmailsofpg@gmail.com"
                                className="underline"
                              >
                                iitkmailsofpg@gmail.com
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="URL: //wc.indiaicpc.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                URL: //wc.indiaicpc.in/
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Secretary &amp; Associate Director ICPC Asia WC Super
                          Region
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="font-semibold text-blue-700">
                              Professor Abul L Haque
                            </div>
                            <div className="text-gray-900">
                              Jaatri University, Dhaka, Bangladesh
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:abul.haque@gmail.com"
                                className="underline"
                              >
                                abul.haque@gmail.com
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-800 mb-4 sm:mb-6">
                  ICPC AWC Steering Committee
                </h2>
                <div className="bg-white/80 backdrop-blur-md border border-amber-200 rounded-xl shadow-md overflow-hidden overflow-x-auto mb-6">
                  <table className="w-full min-w-[640px]">
                    <thead>
                      <tr className="bg-blue-200">
                        <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left whitespace-nowrap min-w-[150px]">
                          Name
                        </th>
                        <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left min-w-[300px]">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Prof. Ashish Sharma
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="text-gray-900 font-medium">
                              GLA University Mathura, India
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:ashish.sharma@gla.ac.in"
                                className="underline"
                              >
                                ashish.sharma@gla.ac.in
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="https://wc.indiaicpc.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                https://wc.indiaicpc.in/
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Prof. Rohit Agarwal
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="text-gray-900 font-medium">
                              GLA University Mathura, India
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:rohit.agrwal@gla.ac.in"
                                className="underline"
                              >
                                rohit.agrwal@gla.ac.in
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="https://wc.indiaicpc.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                https://wc.indiaicpc.in/
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Prof. Vipin Pavithran
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="text-gray-900 font-medium">
                              Amrita Vishwavidyapeetham, Amritapuri, India
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:VipinP@am.amrita.edu"
                                className="underline"
                              >
                                VipinP@am.amrita.edu
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="https://amritaicpc.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                https://amritaicpc.in/
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Prof. Masilamani V.
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="text-gray-900 font-medium">
                              Indian Institute of Information Technology, Design
                              and Manufacturing, Kancheepuram, India
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:masila@iiitdm.ac.in"
                                className="underline"
                              >
                                masila@iiitdm.ac.in
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="https://icpc-iiitdm.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                https://icpc-iiitdm.vercel.app/
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Prof. Mohammad Shah Omid
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="text-gray-900 font-medium">
                              Kateb University, Kabul, Afghanistan
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:mso.omid@gmail.com"
                                className="underline"
                              >
                                mso.omid@gmail.com
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="https://www.kateb.edu.af"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                https://www.kateb.edu.af
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Prof. Sandesh Gupta
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="text-gray-900 font-medium">
                              University Institute of Engineering and
                              Technology, CSJM University, Kanpur, India
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:guptasandesh@gmail.com"
                                className="underline"
                              >
                                guptasandesh@gmail.com
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="https://kanpur.indiaicpc.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                https://kanpur.indiaicpc.in/
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Prof. Hamid Zarrabi-Zadeh
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="text-gray-900 font-medium">
                              Sharif University of Technology, Tehran, Iran
                            </div>
                            <div className="text-gray-900 font-medium">
                              Secretary &amp; Associate Director ICPC Asia WC
                              Super Region
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:zarrabi@sharif.edu"
                                className="underline"
                              >
                                zarrabi@sharif.edu
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="https://icpc.ir"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                https://icpc.ir
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Prof. Masroor Hussain
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="text-gray-900 font-medium">
                              Ghulam Ishaq Khan Institute, Topi, Pakistan,
                            </div>
                            <div className="text-gray-900 font-medium">
                              Regional Contest Director and Associate Director
                              ICPC Asia WC Super Region
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:hussain@giki.edu.pk"
                                className="underline"
                              >
                                hussain@giki.edu.pk
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="http://www.acmgiki.com/icpc.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                http://www.acmgiki.com/icpc.php
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Prof. Upul Jayasinghe
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="text-gray-900 font-medium">
                              University of Peradeniya, Sri Lanka
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:upuljm@eng.pdn.ac.lk"
                                className="underline"
                              >
                                upuljm@eng.pdn.ac.lk
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="https://icpc.ieee.lk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                https://icpc.ieee.lk/
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Prof. Saifur Rahman
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-1">
                            <div className="text-gray-900 font-medium">
                              BUET Dhaka, Bangladesh
                            </div>
                            <div className="text-blue-600">
                              E-mail:{" "}
                              <a
                                href="mailto:saifurs@gmail.com"
                                className="underline"
                              >
                                saifurs@gmail.com
                              </a>
                            </div>
                            <div className="text-blue-600">
                              URL:{" "}
                              <a
                                href="https://icpc.bubt.edu.bd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                https://icpc.bubt.edu.bd/
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
