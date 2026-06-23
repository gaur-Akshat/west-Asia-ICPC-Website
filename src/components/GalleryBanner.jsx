import { galleryPhotos } from "../data/constants";

export default function GalleryBanner() {
  return (
    <a
      className="group block mt-8 sm:mt-10 lg:mt-12 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300"
      href="/gallery"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        {/* Text column */}
        <div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Explore Moments From ICPC Asia West Continent Championship
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
            Step into our photo and video gallery to relive championship
            highlights, team interactions, and event snapshots.
          </p>
          <span className="mt-5 inline-flex items-center text-sm sm:text-base font-bold text-indigo-600 group-hover:text-indigo-700">
            Open Gallery
          </span>
        </div>

        {/* Polaroid-style scattered photos */}
        <div className="relative h-56 sm:h-64 lg:h-72">
          {galleryPhotos.map((photo) => (
            <div key={photo.alt} className={photo.style}>
              <img
                alt={photo.alt}
                loading="lazy"
                className="object-cover"
                src={photo.src}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
