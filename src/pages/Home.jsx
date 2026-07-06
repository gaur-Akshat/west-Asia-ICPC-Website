import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import GalleryBanner from "../components/GalleryBanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFFCF2] pb-12 sm:pb-16 lg:pb-20">
        <Hero />
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="mt-6 sm:mt-8 lg:mt-12 flex flex-col lg:flex-row gap-4 lg:gap-8">
            <MainContent />
            <Sidebar />
          </div>
          <GalleryBanner />
        </div>
      </div>
      <Footer />
    </>
  );
}
