import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ZoomIn, Play } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { UNSPLASH } from "../../data/properties";


const IMAGES_GALLERY = [
  { img: UNSPLASH.farmhouse1, span: "row-span-2", label: "The Amber Estate" },
  { img: UNSPLASH.interior1, span: "", label: "Grand Interiors" },
  { img: UNSPLASH.pool, span: "", label: "Infinity Pool" },
  { img: UNSPLASH.villa1, span: "col-span-2", label: "Villa Serenita" },
  { img: UNSPLASH.garden, span: "", label: "Curated Gardens" },
  { img: UNSPLASH.interior2, span: "", label: "Dining Hall" },
];

const VIDEOS_GALLERY = [
  { thumbnail: UNSPLASH.farmhouse1, label: "Property Tour", span: "row-span-2" },
  { thumbnail: UNSPLASH.interior1, label: "Interior Walkthrough", span: "" },
  { thumbnail: UNSPLASH.pool, label: "Luxury Amenities", span: "" },
  { thumbnail: UNSPLASH.villa1, label: "Villa Showcase", span: "col-span-2" },
  { thumbnail: UNSPLASH.garden, label: "Landscape Design", span: "" },
  { thumbnail: UNSPLASH.interior2, label: "Living Spaces", span: "" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const gallery = activeTab === "photos" ? IMAGES_GALLERY : VIDEOS_GALLERY;

  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeading
            eyebrow="Visual Journey"
            title={
              <>
                Inside Our
                <br />
                <span className="italic text-[#5d8f44]">Luxury World</span>
              </>
            }
            align="left"
            className="max-w-sm"
          />

          <Link
            to="/gallery"
            className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-black border-b border-[#5d8f44] pb-1 hover:text-[#5d8f44] transition-colors group self-start md:self-auto"
          >
            View Full Gallery
            <ArrowRight
              size={11}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-4 mb-10">
          {["photos", "videos"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-xs uppercase tracking-[0.2em] border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#5d8f44] text-white border-[#5d8f44]"
                  : "bg-transparent text-black border-[#5d8f44]/50 hover:border-[#5d8f44]"
              }`}
            >
              {tab === "photos" ? "📷 Photos" : "🎬 Videos"}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          style={{ gridAutoRows: "200px" }}
        >
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden cursor-pointer ${item.span}`}
            >
              <img
                src={activeTab === "photos" ? item.img : item.thumbnail}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300" />

              {/* Video play button */}
              {activeTab === "videos" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#5d8f44] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                    <Play size={22} className="text-white fill-white ml-1" />
                  </div>
                </div>
              )}

              {/* Hover label + zoom icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={22} className="text-[#5d8f44] mb-2" />
                <span className="text-white text-xs tracking-widest uppercase">
                  {item.label}
                </span>
              </div>

              {/* Corner accents */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#5d8f44]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#5d8f44]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;