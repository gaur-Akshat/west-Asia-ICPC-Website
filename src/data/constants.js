// ─── Asset Imports ───────────────────────────────────────────────────────────
import integramindsImg from "../../asset/integraminds.webp";
import digitaltrackImg from "../../asset/digitaltrack.webp";
import seamlessImg from "../../asset/seamless.webp";
import transoftImg from "../../asset/transoft.webp";
import w3gradsImg from "../../asset/w3gradshd.webp";
import glaLogoImg from "../../asset/gla-logo.webp";

export const glaLogo = glaLogoImg;

// ─── Regional Contest Directors ───────────────────────────────────────────────
export const directors = [
  {
    country: "Afghanistan",
    site: "Kabul",
    director: "Prof. Mohammad Shah Omid",
    email: "m.shah.omid@kateb.edu.af",
    website: "http://icpc.kateb.edu.af/",
  },
  {
    country: "Bangladesh",
    site: "Dhaka",
    director: "Prof. MD Rashedul Islam",
    email: "icpc@iubat.edu",
    website: "https://icpc2026.iubat.edu/",
  },
  {
    country: "India",
    site: "Amritapuri",
    director: "Prof. Vipin Pavithran",
    email: "icpc@am.amrita.edu",
    website: "https://amritaicpc.in",
  },
  {
    country: "India",
    site: "Chennai",
    director: "Prof. John Deva Prasanna D S",
    email: "johndevd@srmist.edu.in",
    website: "https://srmist.edu.in/icpc",
  },
  {
    country: "India",
    site: "Kanpur",
    director: "Prof. Sandesh Gupta",
    email: "sandesh@csjmu.ac.in",
    website: "https://kanpur.indiaicpc.in/",
  },
  {
    country: "India",
    site: "Mathura",
    director: "Prof. Anoop Kumar Gupta",
    email: "rohit.agrwal@gla.ac.in",
    website: "https://mathura.indiaicpc.in/",
  },
  {
    country: "India",
    site: "Greater Noida",
    director: "Prof. Diwakar Bharadwaj",
    email: "diwakar.bharadwaj@gla.ac.in",
    website: "https://wc.indiaicpc.in/",
  },
  {
    country: "Iran",
    site: "Tehran",
    director: "Prof. Hamid Zarrabi-Zadeh",
    email: "zarrabi@sharif.edu",
    website: "https://icpc.sharif.edu",
  },
  {
    country: "Pakistan",
    site: "Topi",
    director: "Prof. Masroor Hussain",
    email: "masroor.hussain@gmail.com",
    website: "https://www.giki.edu.pk/icpc",
  },
  {
    country: "Sri Lanka",
    site: "Peradeniya",
    director: "Prof. Upul Jayasinghe",
    email: "upuljm@eng.pdn.ac.lk",
    website: "https://icpc.ieee.lk/",
  },
];

// ─── Important Dates ──────────────────────────────────────────────────────────
export const importantDates = [
  { country: "Afghanistan", site: "Kabul", date: "22nd - 23rd October, 2026" },
  { country: "Bangladesh", site: "Dhaka", date: "18th - 19th December 2026" },
  { country: "India", site: "Amritapuri", date: "End December 2026" },
  { country: "India", site: "Chennai", date: "11th - 12th December 2026" },
  { country: "India", site: "Kanpur", date: "22nd - 23rd December, 2026" },
  { country: "India", site: "Mathura", date: "27th - 28th December, 2026" },
  { country: "India", site: "Greater Noida", date: "20th - 21st March, 2027" }, 
  { country: "Iran", site: "Tehran", date: "24th - 25th December 2026" },
  { country: "Pakistan", site: "Topi", date: "Mid December 2026" },
  { country: "Sri Lanka", site: "Peradeniya", date: "5th - 6th December 2026" },
];

// ─── Sidebar Links ────────────────────────────────────────────────────────────
export const sidebarLinks = [
  {
    href: "/documents/DIRECTOR_REPORT.pdf",
    title: "DIRECTOR'S REPORT",
    subtitle: "AWC 2025-2026",
    colorScheme: "red",
    isNew: true,
  },
  {
    href: "/documents/Anoun2026.pdf",
    title: "Programme Schedule",
    subtitle: "AWC 2025-2026",
    colorScheme: "red",
    isNew: true,
  },
  {
    href: "https://icpcasiawest.vercel.app/results?session=94014565-8795-4278-b03c-33187bea12ae",
    title: "AWC Result",
    subtitle: "Asia West Championship (2025-2026)",
    colorScheme: "green",
    isNew: false,
  },
  {
    href: "/documents/PROBLEM_SET26.pdf",
    title: "Problem Set",
    subtitle: "AWC Problem Set 2025-2026",
    colorScheme: "red",
    isNew: true,
  },
  {
    href: "https://icpcasiawest.vercel.app/teams?session=94014565-8795-4278-b03c-33187bea12ae",
    title: "Selected Team for AWC 2025–26",
    subtitle: "",
    colorScheme: "red",
    isNew: true,
  },
  {
    href: "/documents/Asia-West_Rules.pdf",
    title: "Contest Rules",
    subtitle: "AWC 2025-2026",
    colorScheme: "green",
    isNew: false,
  },
  {
    href: "/documents/problem_set_2024_25.pdf",
    title: "🏆 AWC Problem Set (2024-25)",
    subtitle: "AWC Problem Set (2024-25)",
    colorScheme: "blue",
    isNew: false,
  },
  {
    href: "https://icpcasiawest.vercel.app/teams?session=1f1672dc-34bd-4bb1-8e58-a751ba2ff12c",
    title: "List of Selected Teams for Asia West Championship 2024-25",
    subtitle: "",
    colorScheme: "gray",
    isNew: false,
  },
];

// ─── Team Selection Rules ─────────────────────────────────────────────────────
export const teamSelectionRules = [
  "Teams are invited to participate in the contest based on their performance in their respective regional contest sites.",
  "Only the top few teams from each site will be selected for the contest.",
  "Even though the Champion Team of each regional site—the WINNER of the site—gets a slot in the World Finals, all the winning teams of all regional sites of Asia West Continent must participate in the AWC Championship trophy.",
  "Other teams of the Champion Institutes (i.e., an institute that has at least one Champion Team) are not eligible to participate in AWC.",
  "Team composition, under no circumstances, can be changed.",
  "The number of teams to be selected from each site is based on the total number of teams that participated in the Online contest and the On-site contest. The weightage for online contest teams is 0.5 and for onsite contest teams is 1. Higher the value of the metric, the larger the number.",
  "However, the minimum number of teams from each site that will be eligible is 5.",
  "The RCD of each site will select the top few teams for the AWC Finals based on the ranking of their respective Regional Contest. There is no restriction on the number of teams from one institution (except for item 4 above).",
  "Contests of all sites are assumed to have the same degree of difficulty. In case of a tie, World Finals Rules will be followed (number of problems solved, penalty time, time of last problem solved, time of 2nd last problem solved, and so on).",
];

// ─── Gallery photos ───────────────────────────────────────────────────────────
export const galleryPhotos = [
  {
    alt: "Campus ambience",
    style:
      "absolute left-[3%] top-[20%] rotate-[-10deg] bg-white p-2 shadow-lg w-[42%] h-[48%]",
    src: "https://placehold.co/400x300/e2e8f0/475569?text=Campus+Ambience",
  },
  {
    alt: "Inaugural moment",
    style:
      "absolute left-[30%] top-[2%] rotate-[6deg] bg-white p-2 shadow-lg w-[46%] h-[50%]",
    src: "https://placehold.co/400x300/dbeafe/1e40af?text=Inaugural+Moment",
  },
  {
    alt: "Main contest",
    style:
      "absolute left-[54%] top-[24%] rotate-[10deg] bg-white p-2 shadow-lg w-[40%] h-[45%]",
    src: "https://placehold.co/400x300/dcfce7/166534?text=Main+Contest",
  },
  {
    alt: "Award ceremony",
    style:
      "absolute left-[18%] top-[48%] rotate-[-2deg] bg-white p-2 shadow-lg w-[52%] h-[50%]",
    src: "https://placehold.co/400x300/fef9c3/713f12?text=Award+Ceremony",
  },
];

// ─── Nav Links ────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/", hasDropdown: false },
  {
    label: "Results",
    href: "/results",
    hasDropdown: true,
    dropdownItems: [
      { label: "AWC 2025-26", href: "/results/awc-2025-26" },
      { label: "AWC 2024-25", href: "/results/awc-2024-25" },
    ],
  },
  {
    label: "Selected Teams",
    href: "/teams",
    hasDropdown: true,
    dropdownItems: [
      { label: "AWC 2025-26", href: "/teams/awc-2025-26" },
      { label: "AWC 2024-25", href: "/teams/awc-2024-25" },
    ],
  },
  { label: "Steering Committee", href: "/committee", hasDropdown: false },
  {
    label: "Organising Committee",
    href: "/organising-committee",
    hasDropdown: false,
  },
  { label: "Development Team", href: "/about", hasDropdown: false },
];

// ─── Footer Quick Links ───────────────────────────────────────────────────────
export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Results", href: "/results" },
  { label: "Selected Teams", href: "/teams" },
  { label: "Steering Committee", href: "/committee" },
  { label: "About", href: "/about" },
];

// ─── Partner Logos ────────────────────────────────────────────────────────────
export const partnerLogos = [
  { alt: "Integraminds logo", src: integramindsImg },
  { alt: "Digital Track logo", src: digitaltrackImg },
  { alt: "Seamless Infotech logo", src: seamlessImg },
  { alt: "Transoft Infotech logo", src: transoftImg },
  { alt: "W3grads logo", src: w3gradsImg },
];
