import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMagnifyingGlassPlus, FaPlay, FaXmark,  FaImages,FaVideo, } from "react-icons/fa6";
import { UNSPLASH } from "../data/properties";
import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import img1 from "../assets/video/img1.jpeg";

const IMAGES_GALLERY = [
  { img: UNSPLASH.farmhouse1, label: "The Amber Estate", cat: "Farmhouse" },
  { img: UNSPLASH.villa1, label: "Villa Serenita", cat: "Villa" },
  { img: UNSPLASH.interior1, label: "Grand Interiors", cat: "Interiors" },
  { img: UNSPLASH.pool, label: "Infinity Pool", cat: "Amenities" },
  { img: UNSPLASH.farmhouse2, label: "The Green Manor", cat: "Farmhouse" },
  { img: UNSPLASH.interior2, label: "Dining Hall", cat: "Interiors" },
  {
    img: "https://i.pinimg.com/736x/6e/d7/99/6ed799d2cca87b1d5094964d17ec411d.jpg",
    label: "Curated Gardens",
    cat: "Exterior",
  },
  {
    img: img1,
    label: "Room",
    cat: "Interior",
  },
  { img: UNSPLASH.villa2, label: "Horizon Retreat", cat: "Villa" },
  { img: UNSPLASH.farmhouse3, label: "The Ivory Court", cat: "Farmhouse" },
  {
    img: "https://i.pinimg.com/736x/de/a2/86/dea28688aebea8bc81eb2bc2c53ac606.jpg",
    label: "Master Suite",
    cat: "Interiors",
  },
  { img: UNSPLASH.villa3, label: "Vista Palms", cat: "Villa" },
];

const VIDEOS_GALLERY = [
  {
    video: video1,
    thumbnail: img1,
    label: "Luxury Room",
    cat: "Villa",
  },
  {
    video: video2,
    thumbnail: UNSPLASH.villa3,
    label: "Luxury Villa",
    cat: "Farmhouse",
  },
];

// Video Player Modal
const VideoModal = ({ video, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-[#5d8f44] transition-colors"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 101,
            }}
          >
            <FaXmark size={32} />
          </button>

          {/* Video Player */}
          <video
            src={video}
            controls
            autoPlay
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              maxHeight: "80vh",
            }}
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [playingVideo, setPlayingVideo] = useState(null);
  const currentGallery =
    activeTab === "photos" ? IMAGES_GALLERY : VIDEOS_GALLERY;
  const isVideo = activeTab === "videos";

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[280px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={UNSPLASH.farmhouse3}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 w-full">
          <h1 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl lg:text-7xl font-light text-white">
            GALLERY
          </h1>
          <p className="mt-3 max-w-2xl text-white/80 font-[Jost] text-sm sm:text-base md:text-lg leading-relaxed">
            A curated visual journey through our finest estates, villas, and
            farmhouses across Delhi NCR.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F4F7F2]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "32px",
              alignItems: "center",
            }}
          >
            {/* Premium Toggle Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "40px",
                alignItems: "center",
              }}
            >
              {/* Photos Button */}
              <motion.button
                onClick={() => setActiveTab("photos")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "14px 28px",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  background:
                    activeTab === "photos"
                      ? "linear-gradient(135deg, #5d8f44 0%, #74b055 100%)"
                      : "rgba(93, 143, 68, 0.08)",
                  color: activeTab === "photos" ? "#fff" : "#5d8f44",
                  boxShadow:
                    activeTab === "photos"
                      ? "0 8px 24px rgba(93, 143, 68, 0.35), inset 0 1px 0 rgba(255,255,255,0.3)"
                      : "0 4px 12px rgba(93, 143, 68, 0.12)",
                  backdropFilter: "blur(10px)",
                  border:
                    activeTab === "photos"
                      ? "1.5px solid rgba(255,255,255,0.4)"
                      : "1.5px solid rgba(93, 143, 68, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== "photos") {
                    e.currentTarget.style.background = "rgba(93, 143, 68, 0.15)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(93, 143, 68, 0.25)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== "photos") {
                    e.currentTarget.style.background = "rgba(93, 143, 68, 0.08)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(93, 143, 68, 0.12)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <FaImages size={16} />
                </span>
                <span>Photos</span>
                {activeTab === "photos" && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "rgba(255,255,255,0.6)",
                      borderRadius: "2px 2px 0 0",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>

              {/* Videos Button */}
              <motion.button
                onClick={() => setActiveTab("videos")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "14px 28px",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  background:
                    activeTab === "videos"
                      ? "linear-gradient(135deg, #5d8f44 0%, #74b055 100%)"
                      : "rgba(93, 143, 68, 0.08)",
                  color: activeTab === "videos" ? "#fff" : "#5d8f44",
                  boxShadow:
                    activeTab === "videos"
                      ? "0 8px 24px rgba(93, 143, 68, 0.35), inset 0 1px 0 rgba(255,255,255,0.3)"
                      : "0 4px 12px rgba(93, 143, 68, 0.12)",
                  backdropFilter: "blur(10px)",
                  border:
                    activeTab === "videos"
                      ? "1.5px solid rgba(255,255,255,0.4)"
                      : "1.5px solid rgba(93, 143, 68, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== "videos") {
                    e.currentTarget.style.background = "rgba(93, 143, 68, 0.15)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(93, 143, 68, 0.25)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== "videos") {
                    e.currentTarget.style.background = "rgba(93, 143, 68, 0.08)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(93, 143, 68, 0.12)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <FaVideo size={16} />
                </span>
                <span>Videos</span>
                {activeTab === "videos" && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "rgba(255,255,255,0.6)",
                      borderRadius: "2px 2px 0 0",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            </div>
          </div>

          {/* Images/Videos Grid */}
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
          >
            {currentGallery.map((item, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative overflow-hidden cursor-pointer break-inside-avoid rounded-lg"
                onClick={() => isVideo && setPlayingVideo(item.video)}
              >
                {/* Thumbnail */}
                <img
                  src={isVideo ? item.thumbnail : item.img}
                  alt={item.label}
                  className="w-full object-cover h-48 sm:h-56 lg:h-64 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex flex-col items-center justify-center gap-1">
                  {/* Play Icon for Videos */}
                  {isVideo ? (
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "#5d8f44" }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaPlay
                        size={16}
                        style={{ color: "#fff", marginLeft: "3px" }}
                      />
                    </motion.div>
                  ) : (
                    <FaMagnifyingGlassPlus
                      size={22}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: "#5d8f44" }}
                    />
                  )}

                  {/* Text */}
                  {item.label && (
                    <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.label}
                    </span>
                  )}
                  {item.cat && (
                    <span
                      className="text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: "#5d8f44" }}
                    >
                      {item.cat}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {playingVideo && (
        <VideoModal
          video={playingVideo}
          onClose={() => setPlayingVideo(null)}
        />
      )}
    </>
  );
};

export default Gallery;