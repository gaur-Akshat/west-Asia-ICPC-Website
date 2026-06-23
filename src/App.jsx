import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Pages
import Home from "./pages/Home";
import ResultsAWC2526 from "./pages/ResultsAWC2526";
import ResultsAWC2425 from "./pages/ResultsAWC2425";
import TeamsAWC2526 from "./pages/TeamsAWC2526";
import TeamsAWC2425 from "./pages/TeamsAWC2425";
import Committee from "./pages/Committee";
import OrganisingCommittee from "./pages/OrganisingCommittee";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/awc-2025-26" element={<ResultsAWC2526 />} />
        <Route path="/results/awc-2024-25" element={<ResultsAWC2425 />} />
        <Route path="/teams/awc-2025-26" element={<TeamsAWC2526 />} />
        <Route path="/teams/awc-2024-25" element={<TeamsAWC2425 />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/organising-committee" element={<OrganisingCommittee />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
