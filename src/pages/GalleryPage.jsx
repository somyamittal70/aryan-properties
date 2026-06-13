import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMagnifyingGlassPlus, FaPlay, FaXmark, FaImages, FaVideo } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";
import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import img1 from "../assets/video/img1.jpeg";

/* ── direct image URLs ── */
const IMGS = {
  heroBg:    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85",
  farmhouse1:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  farmhouse2:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  farmhouse3:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  villa1:    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  villa2:    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  villa3:    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  interior1: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  interior2: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
  pool:      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
};

const IMAGES_GALLERY = [
  { img: IMGS.farmhouse1, label: "The Amber Estate",  cat: "Farmhouse"  },
  { img: IMGS.villa1,     label: "Villa Serenita",    cat: "Villa"      },
  { img: IMGS.interior1,  label: "Grand Interiors",   cat: "Interiors"  },
  { img: IMGS.pool,       label: "Infinity Pool",     cat: "Amenities"  },
  { img: IMGS.farmhouse2, label: "The Green Manor",   cat: "Farmhouse"  },
  { img: IMGS.interior2,  label: "Dining Hall",       cat: "Interiors"  },
  {
    img: "https://i.pinimg.com/736x/6e/d7/99/6ed799d2cca87b1d5094964d17ec411d.jpg",
    label: "Curated Gardens", cat: "Exterior",
  },
  { img: img1,            label: "Room",              cat: "Interior"   },
  { img: IMGS.villa2,     label: "Horizon Retreat",   cat: "Villa"      },
  { img: IMGS.farmhouse3, label: "The Ivory Court",   cat: "Farmhouse"  },
  {
    img: "https://i.pinimg.com/736x/de/a2/86/dea28688aebea8bc81eb2bc2c53ac606.jpg",
    label: "Master Suite",   cat: "Interiors",
  },
  { img: IMGS.villa3,     label: "Vista Palms",       cat: "Villa"      },
];

const VIDEOS_GALLERY = [
  { video: video1, thumbnail: img1,        label: "Luxury Room",  cat: "Villa"     },
  { video: video2, thumbnail: IMGS.villa3, label: "Luxury Villa", cat: "Farmhouse" },
];

/* ── Video Modal ── */
const VideoModal = ({ video, onClose }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(8px)" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#5d8f44] transition-colors bg-transparent border-none cursor-pointer"
        >
          <FaXmark size={28} />
        </button>
        <video
          src={video}
          controls
          autoPlay
          className="w-full rounded-lg"
          style={{ maxHeight: "80vh" }}
        >
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const Gallery = () => {
  const [activeTab, setActiveTab]       = useState("photos");
  const [playingVideo, setPlayingVideo] = useState(null);

  const currentGallery = activeTab === "photos" ? IMAGES_GALLERY : VIDEOS_GALLERY;
  const isVideo        = activeTab === "videos";

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden">
        {/* bg */}
        <div className="absolute inset-0">
          <img
            src={IMGS.heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
          {/* gold shimmer bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5d8f44]/50 to-transparent" />
        </div>

        {/* content */}
        <div className="relative z-10 w-full max-w-[1380px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center py-24 sm:py-32">

          {/* eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <span className="w-8 sm:w-12 h-px bg-[#5d8f44]" />
            <span className="font-[Jost] text-[#5d8f44] text-[9px] sm:text-[10px] tracking-[0.28em] uppercase">
              Walora Groups · Visual Showcase
            </span>
            <span className="w-8 sm:w-12 h-px bg-[#5d8f44]" />
          </motion.div>

          {/* headline */}
          <motion.h1
            className="font-[Cormorant_Garamond] font-light text-white leading-[1.0] mb-5"
            style={{ fontSize: "clamp(2.8rem, 9vw, 7rem)" }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            OUR<br />
            <span className="italic text-[#5d8f44]">Gallery</span>
          </motion.h1>

          {/* rule */}
          <motion.div
            className="w-14 h-px bg-[#5d8f44]/60 mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
          />

          {/* sub */}
          <motion.p
            className="font-[Jost] font-light text-white/55 max-w-[500px] leading-relaxed mb-10"
            style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            A curated visual journey through our finest estates, villas, and
            farmhouses across Delhi NCR.
          </motion.p>

          {/* tab pills */}
          <motion.div
            className="flex items-center gap-3 mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.44 }}
          >
            {[
              { id: "photos", Icon: FaImages, label: "Photos" },
              { id: "videos", Icon: FaVideo,  label: "Videos" },
            ].map(({ id, Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className="flex items-center gap-2 px-5 sm:px-7 py-2.5 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-[Jost] font-semibold transition-all duration-300 border"
                style={{
                  background: activeTab === id ? "#5d8f44" : "rgba(255,255,255,0.06)",
                  color:      activeTab === id ? "#1A202C" : "rgba(255,255,255,0.7)",
                  borderColor: activeTab === id ? "#5d8f44" : "rgba(255,255,255,0.2)",
                }}
              >
                <Icon size={12} />
                {label}
              </button>
            ))}
          </motion.div>

          {/* stats */}
          <motion.div
            className="flex flex-wrap justify-center w-full max-w-[560px] border-t border-[#5d8f44]/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.56 }}
          >
            {[
              { num: "12+",  label: "Estates" },
              { num: "500+", label: "Photos"  },
              { num: "20+",  label: "Videos"  },
            ].map((s, i) => (
              <div
                key={i}
                className="flex-1 min-w-[100px] flex flex-col items-center gap-1 py-4 px-3"
              >
                <span
                  className="font-[Cormorant_Garamond] font-light text-[#5d8f44]"
                  style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", lineHeight: 1 }}
                >
                  {s.num}
                </span>
                <span className="font-[Jost] text-[9px] tracking-[0.18em] uppercase text-white/35">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span className="font-[Jost] text-[8px] tracking-[0.2em] uppercase text-white/25">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ChevronDown size={13} className="text-[#5d8f44]/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── GRID ── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F4F7F2]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* tab toggle (desktop repeat for UX, synced with hero pills) */}
          <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
            {[
              { id: "photos", Icon: FaImages, label: "Photos" },
              { id: "videos", Icon: FaVideo,  label: "Videos" },
            ].map(({ id, Icon, label }) => (
              <motion.button
                key={id}
                onClick={() => setActiveTab(id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "12px 24px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  background:
                    activeTab === id
                      ? "linear-gradient(135deg,#5d8f44 0%,#74b055 100%)"
                      : "rgba(93,143,68,0.08)",
                  color:      activeTab === id ? "#fff" : "#5d8f44",
                  border:     activeTab === id
                      ? "1.5px solid rgba(255,255,255,0.35)"
                      : "1.5px solid rgba(93,143,68,0.28)",
                  boxShadow:  activeTab === id
                      ? "0 8px 24px rgba(93,143,68,0.30)"
                      : "0 2px 8px rgba(93,143,68,0.10)",
                }}
              >
                <Icon size={14} />
                {label}
              </motion.button>
            ))}
          </div>

          {/* masonry grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
            >
              {currentGallery.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="group relative overflow-hidden cursor-pointer break-inside-avoid rounded-lg"
                  onClick={() => isVideo && setPlayingVideo(item.video)}
                >
                  <img
                    src={isVideo ? item.thumbnail : item.img}
                    alt={item.label}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ height: "clamp(180px, 30vw, 280px)" }}
                  />

                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500 flex flex-col items-center justify-center gap-1.5">
                    {isVideo ? (
                      <motion.div
                        className="w-11 h-11 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "#5d8f44" }}
                        whileHover={{ scale: 1.15 }}
                      >
                        <FaPlay size={14} style={{ color: "#fff", marginLeft: "3px" }} />
                      </motion.div>
                    ) : (
                      <FaMagnifyingGlassPlus
                        size={20}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: "#fff" }}
                      />
                    )}
                    {item.label && (
                      <span className="font-[Jost] text-white text-[10px] sm:text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.label}
                      </span>
                    )}
                    {item.cat && (
                      <span
                        className="font-[Jost] text-[8px] sm:text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: "#5d8f44" }}
                      >
                        {item.cat}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* video modal */}
      {playingVideo && (
        <VideoModal video={playingVideo} onClose={() => setPlayingVideo(null)} />
      )}
    </>
  );
};

export default Gallery;