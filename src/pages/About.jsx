import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const team = [
  {
    name: "Abhay Pratap Singh",
    role: "Full Stack Developer & Project Lead",
    desc: "Passionate full-stack developer with expertise in React, Next.js, and modern web technologies. Leading the technical architecture of the ICPC platform.",
    tags: ["React", "Next.js", "Node.js", "Database Design"],
    img: "/abhay.png",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Himanshu Patel",
    role: "Frontend Developer & UI/UX Designer",
    desc: "Creative frontend developer specializing in user experience and responsive design. Crafting intuitive interfaces for competitive programming platforms.",
    tags: ["UI/UX Design", "React", "Tailwind CSS", "Figma"],
    img: "/himanshu.png",
    color: "from-emerald-400 to-teal-500",
  },
  {
    name: "Shivam Pal",
    role: "Backend Developer & Database Specialist",
    desc: "Backend specialist focusing on database optimization and API development. Ensuring robust and scalable solutions for championship management.",
    tags: ["Backend Development", "Database", "API Design", "Supabase"],
    img: "/shivam.png",
    color: "from-purple-500 to-pink-500",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FAF9F6]">
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Dynamic Background Elements */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 mb-4 tracking-tight">
                Meet Our Development Team
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                The talented engineers and designers building the digital
                experience for the ICPC Asia West platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/80 backdrop-blur-md rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden hover:-translate-y-2"
                >
                  <div className="aspect-square relative overflow-hidden bg-slate-100">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
                    ></div>
                    <img
                      alt={member.name}
                      loading="lazy"
                      className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                      src={member.img}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                      {member.name}
                    </h3>
                    <p
                      className={`font-bold bg-clip-text text-transparent bg-gradient-to-r ${member.color} mb-4`}
                    >
                      {member.role}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {member.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-50 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
