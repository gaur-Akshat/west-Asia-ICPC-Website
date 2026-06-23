import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function OrganisingCommittee() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <div className="flex-1 min-w-0">
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-800 mb-4 sm:mb-6">
                  Organising Committee
                </h1>
                <div className="bg-white/80 backdrop-blur-md border border-amber-200 rounded-xl shadow-md overflow-hidden overflow-x-auto mb-6">
                  <table className="w-full min-w-[640px]">
                    <thead>
                      <tr className="bg-blue-200">
                        <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left whitespace-nowrap min-w-[150px]">
                          Position
                        </th>
                        <th className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 text-left min-w-[300px]">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Chief Patron
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Sri Narayan Das Agrawal
                              </div>
                              <div className="text-gray-900 font-medium">
                                Chancellor, GLA University, Mathura
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:chancellor@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Sri Narayan Das Agrawal"
                                >
                                  chancellor@gla.ac.in
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Patron
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Dr. Anoop Kumar Gupta
                              </div>
                              <div className="text-gray-900 font-medium">
                                Vice Chancellor, GLA University, Mathura
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:vc@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Dr. Anoop Kumar Gupta"
                                >
                                  vc@gla.ac.in
                                </a>
                              </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200">
                              <div className="font-semibold text-blue-700">
                                Mr. Neeraj Agrawal
                              </div>
                              <div className="text-gray-900 font-medium">
                                C.E.O, GLA University, Mathura
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:ceo@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Mr. Neeraj Agrawal"
                                >
                                  ceo@gla.ac.in
                                </a>
                              </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200">
                              <div className="font-semibold text-blue-700">
                                Mr. Vivek Agrawal
                              </div>
                              <div className="text-gray-900 font-medium">
                                C.F.O, GLA University, Mathura
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:cfo@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Mr. Vivek Agrawal"
                                >
                                  cfo@gla.ac.in
                                </a>
                              </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200">
                              <div className="font-semibold text-blue-700">
                                Mr. Ashok Kumar Singh
                              </div>
                              <div className="text-gray-900 font-medium">
                                Registrar, GLA University, Mathura
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:registrar@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Mr. Ashok Kumar Singh"
                                >
                                  registrar@gla.ac.in
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Regional Contest Director
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Prof. Phalguni Gupta
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:pg@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Prof. Phalguni Gupta"
                                >
                                  pg@gla.ac.in
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Associate RCD
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Prof. Ashish Sharma
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:ashish.sharma@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Prof. Ashish Sharma"
                                >
                                  ashish.sharma@gla.ac.in
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Deputy RCD
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Prof. Rohit Agarwal
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:rohit.agrwal@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Prof. Rohit Agarwal"
                                >
                                  rohit.agrwal@gla.ac.in
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Operational Manager
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Prof. Hitendra Garg
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:hitendra.garg@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Prof. Hitendra Garg"
                                >
                                  hitendra.garg@gla.ac.in
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          System Manager
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Dr. Anshy Singh
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:anshy.singh@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Dr. Anshy Singh"
                                >
                                  anshy.singh@gla.ac.in
                                </a>
                              </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200">
                              <div className="font-semibold text-blue-700">
                                Mr.Binod Bihari Ray
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:binod.ray@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Mr.Binod Bihari Ray"
                                >
                                  binod.ray@gla.ac.in
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Hospitality Incharge
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Dr. Ambuj Kumar Mishra
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:ambuj.mishra@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Dr. Ambuj Kumar Mishra"
                                >
                                  ambuj.mishra@gla.ac.in
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Transport Incharge
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Mr. Narendra Mohan
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:narendra.mohan@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Mr. Narendra Mohan"
                                >
                                  narendra.mohan@gla.ac.in
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Publicity Incharge
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Dr. Himanshu Sharma
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:himanshu.sharma@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Dr. Himanshu Sharma"
                                >
                                  himanshu.sharma@gla.ac.in
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Supporting Staff
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Mr. Somnath Chauhan
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:somnath.chauhan@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Mr. Somnath Chauhan"
                                >
                                  somnath.chauhan@gla.ac.in
                                </a>
                              </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200">
                              <div className="font-semibold text-blue-700">
                                Mr. Saurav Sen Gupta
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:saurav.gupta@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Mr. Saurav Sen Gupta"
                                >
                                  saurav.gupta@gla.ac.in
                                </a>
                              </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200">
                              <div className="font-semibold text-blue-700">
                                Mr. Madhur Krishna
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:madhur.krishna@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Mr. Madhur Krishna"
                                >
                                  madhur.krishna@gla.ac.in
                                </a>
                              </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200">
                              <div className="font-semibold text-blue-700">
                                Mr. Amit Pachori
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:amit.pachori@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Mr. Amit Pachori"
                                >
                                  amit.pachori@gla.ac.in
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Web Development Team
                        </td>
                        <td className="border border-gray-400 px-2 sm:px-3 py-2 text-xs sm:text-sm">
                          <div className="space-y-3">
                            <div className="">
                              <div className="font-semibold text-blue-700">
                                Abhay Pratap Singh
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:abhay.singh1_cs24@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Abhay Pratap Singh"
                                >
                                  abhay.singh1_cs24@gla.ac.in
                                </a>
                              </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200">
                              <div className="font-semibold text-blue-700">
                                Himanshu Patel
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:himanshu.patel_mca24@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Himanshu Patel"
                                >
                                  himanshu.patel_mca24@gla.ac.in
                                </a>
                              </div>
                            </div>
                            <div className="pt-3 border-t border-gray-200">
                              <div className="font-semibold text-blue-700">
                                Shivam Pal
                              </div>
                              <div className="text-blue-600">
                                <a
                                  href="mailto:shivam.pal_mca24@gla.ac.in"
                                  className="underline hover:text-blue-800 hover:font-semibold transition-all duration-200 cursor-pointer"
                                  title="Send email to Shivam Pal"
                                >
                                  shivam.pal_mca24@gla.ac.in
                                </a>
                              </div>
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
