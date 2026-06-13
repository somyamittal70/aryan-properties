import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMagnifyingGlassPlus, FaPlay, FaXmark, FaImages, FaVideo } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";
import img1 from "../assets/video/img1.jpeg";

/* ── Image URLs ── */
const IMGS = {
  heroBg:    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85",
  farmhouse1:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  farmhouse2:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  farmhouse3:"https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=800&q=80",
  villa1:    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  villa2:    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  villa3:    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80",
  interior1: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  interior2: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=800&q=80",
  pool:      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  garden:    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  master:    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  estate1:   "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  estate2:   "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  estate3:   "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
  lounge:    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  kitchen:   "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  terrace:   "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  corridor:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  courtyard: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  rooftop:   "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
  driveway:  "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=800&q=80",
};

const IMAGES_GALLERY = [
  { img: IMGS.farmhouse1, label: "The Amber Estate",   cat: "Farmhouse"  },
  { img: IMGS.villa1,     label: "Villa Serenita",     cat: "Villa"      },
  { img: IMGS.interior1,  label: "Grand Interiors",    cat: "Interiors"  },
  { img: IMGS.pool,       label: "Infinity Pool",      cat: "Amenities"  },
  { img: IMGS.farmhouse2, label: "The Green Manor",    cat: "Farmhouse"  },
  { img: IMGS.interior2,  label: "Dining Hall",        cat: "Interiors"  },
  { img: IMGS.garden,     label: "Curated Gardens",    cat: "Exterior"   },
  { img: img1,            label: "Luxury Room",        cat: "Interior"   },
  { img: IMGS.villa2,     label: "Horizon Retreat",    cat: "Villa"      },
  { img: IMGS.farmhouse3, label: "The Ivory Court",    cat: "Farmhouse"  },
  { img: IMGS.master,     label: "Master Suite",       cat: "Interiors"  },
  { img: IMGS.villa3,     label: "Vista Palms",        cat: "Villa"      },
  { img: IMGS.estate1,    label: "The Pearl Estate",   cat: "Estate"     },
  { img: IMGS.estate2,    label: "Golden Residency",   cat: "Estate"     },
  { img: IMGS.estate3,    label: "The White Mansion",  cat: "Estate"     },
  { img: IMGS.lounge,     label: "Royal Lounge",       cat: "Interiors"  },
  { img: IMGS.kitchen,    label: "Gourmet Kitchen",    cat: "Interiors"  },
  { img: IMGS.terrace,    label: "Sunset Terrace",     cat: "Exterior"   },
  { img: IMGS.corridor,   label: "Grand Corridor",     cat: "Interiors"  },
  { img: IMGS.courtyard,  label: "Open Courtyard",     cat: "Exterior"   },
  { img: IMGS.rooftop,    label: "Rooftop Lounge",     cat: "Amenities"  },
];

// ── YouTube video IDs — apne videos ke IDs yahan replace karo ──
// Format: youtube.com/watch?v=VIDEO_ID  <-- yahi ID chahiye
const VIDEOS_GALLERY = [
  {
    youtubeId: "pHkBbg1MTXE",
    thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    label: "Luxury Villa Tour",
    cat: "Villa",
  },
  {
    youtubeId: "wL6eGBdTmC4",
    thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    label: "Modern Farmhouse",
    cat: "Farmhouse",
  },
  {
    youtubeId: "N7YQKH_BSPU",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    label: "The Pearl Estate",
    cat: "Estate",
  },
  {
    youtubeId: "4sxMCwqiA-Q",
    thumbnail: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    label: "The Amber Estate",
    cat: "Farmhouse",
  },
  {
    youtubeId: "8EufYz1DXSY",
    thumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    label: "Infinity Pool Tour",
    cat: "Amenities",
  },
  {
    youtubeId: "jPJSrmkEEf0",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    label: "Grand Interior Tour",
    cat: "Interiors",
  },
  {
    youtubeId: "ZBvECeH8Mos",
    thumbnail: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    label: "Garden Walkthrough",
    cat: "Exterior",
  },
  {
    youtubeId: "dLfKHpPSy4s",
    thumbnail: img1,
    label: "Luxury Room",
    cat: "Villa",
  },
  {
    youtubeId: "ZBvECeH8Mos",
    thumbnail: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    label: "Garden Walkthrough",
    cat: "Exterior",
  },
];

/* ── YouTube Modal ── */
const VideoModal = ({ youtubeId, onClose }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "clamp(12px, 3vw, 24px)",
        background: "rgba(0,0,0,0.95)", backdropFilter: "blur(8px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", width: "100%", maxWidth: 900 }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: -44, right: 0,
            color: "#fff", background: "transparent",
            border: "none", cursor: "pointer",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "#5d8f44"}
          onMouseLeave={e => e.currentTarget.style.color = "#fff"}
        >
          <FaXmark size={26} />
        </button>

        {/* YouTube iframe */}
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute", top: 0, left: 0,
              width: "100%", height: "100%",
              borderRadius: 8, border: "none",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const Gallery = () => {
  const [activeTab, setActiveTab]         = useState("photos");
  const [playingVideo, setPlayingVideo]   = useState(null);

  const currentGallery = activeTab === "photos" ? IMAGES_GALLERY : VIDEOS_GALLERY;
  const isVideo        = activeTab === "videos";

  const TabButtons = ({ small }) => (
    <div style={{ display: "flex", alignItems: "center", gap: small ? 12 : 10, flexWrap: "wrap" }}>
      {[
        { id: "photos", Icon: FaImages, label: "Photos" },
        { id: "videos", Icon: FaVideo,  label: "Videos" },
      ].map(({ id, Icon, label }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          style={{
            display: "flex", alignItems: "center",
            gap: 8,
            padding: small
              ? "10px clamp(16px,3vw,20px)"
              : "8px clamp(14px,2.5vw,28px)",
            fontSize: "clamp(9px, 1.5vw, 11px)",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontFamily: "Jost, sans-serif",
            cursor: "pointer",
            transition: "all 0.3s",
            borderRadius: small ? 8 : 0,
            background: activeTab === id
              ? (small ? "linear-gradient(135deg,#5d8f44 0%,#74b055 100%)" : "#5d8f44")
              : "rgba(255,255,255,0.06)",
            color:      activeTab === id ? "#fff" : small ? "#5d8f44" : "rgba(255,255,255,0.7)",
            border: activeTab === id
              ? (small ? "1.5px solid rgba(255,255,255,0.35)" : "1px solid #5d8f44")
              : (small ? "1.5px solid rgba(93,143,68,0.28)" : "1px solid rgba(255,255,255,0.2)"),
            boxShadow: small && activeTab === id ? "0 8px 24px rgba(93,143,68,0.30)" : "none",
          }}
        >
          <Icon size={12} />
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>

      {/* ── HERO ── */}
      <section style={{
        position: "relative", minHeight: "100svh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={IMGS.heroBg} alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.55), rgba(0,0,0,0.85))",
          }} />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
            background: "linear-gradient(to right, transparent, rgba(93,143,68,0.5), transparent)",
          }} />
        </div>

        <div style={{
          position: "relative", zIndex: 10, width: "100%", maxWidth: 1380,
          margin: "0 auto",
          padding: "clamp(80px,12vw,120px) clamp(16px,5vw,64px) clamp(60px,10vw,100px)",
          boxSizing: "border-box",
          display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
        }}>

          <motion.div
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(16px,3vw,24px)" }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <span style={{ width: "clamp(24px,4vw,48px)", height: 1, background: "#5d8f44", display: "inline-block" }} />
            <span style={{ fontFamily: "Jost, sans-serif", color: "#5d8f44", fontSize: "clamp(8px,1.8vw,10px)", letterSpacing: "0.28em", textTransform: "uppercase" }}>
              Aryan Properties · Visual Showcase
            </span>
            <span style={{ width: "clamp(24px,4vw,48px)", height: 1, background: "#5d8f44", display: "inline-block" }} />
          </motion.div>

          <motion.h1
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#fff", lineHeight: 1.0, marginBottom: "clamp(16px,2vw,20px)", fontSize: "clamp(2.8rem, 9vw, 7rem)" }}
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            OUR<br /><span style={{ fontStyle: "italic", color: "#5d8f44" }}>Gallery</span>
          </motion.h1>

          <motion.div
            style={{ width: 56, height: 1, background: "rgba(93,143,68,0.6)", marginBottom: "clamp(16px,2vw,24px)" }}
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
          />

          <motion.p
            style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.55)", maxWidth: 500, lineHeight: 1.75, marginBottom: "clamp(24px,4vw,40px)", fontSize: "clamp(0.82rem, 2vw, 1rem)" }}
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            A curated visual journey through our finest estates, villas, and farmhouses across Delhi NCR.
          </motion.p>

          <motion.div
            style={{ marginBottom: "clamp(32px,6vw,64px)" }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.44 }}
          >
            <TabButtons small={false} />
          </motion.div>

          <motion.div
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "100%", maxWidth: 560, borderTop: "1px solid rgba(93,143,68,0.2)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.56 }}
          >
            {[
              { num: "22+",  label: "Estates" },
              { num: "500+", label: "Photos"  },
              { num: "8+",   label: "Videos"  },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, minWidth: 90, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "clamp(12px,2vw,16px) 12px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#5d8f44", fontSize: "clamp(1.4rem,4vw,2rem)", lineHeight: 1 }}>{s.num}</span>
                <span style={{ fontFamily: "Jost, sans-serif", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ position: "absolute", bottom: "clamp(12px,3vw,24px)", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 10 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span style={{ fontFamily: "Jost, sans-serif", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
            <ChevronDown size={13} color="rgba(93,143,68,0.5)" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── GRID SECTION ── */}
      <section style={{ padding: "clamp(32px,6vw,64px) 0", background: "#F4F7F2" }}>
        <div style={{ maxWidth: 1380, margin: "0 auto", padding: "0 clamp(16px,5vw,64px)", boxSizing: "border-box" }}>

          <div style={{ marginBottom: "clamp(24px,4vw,40px)" }}>
            <TabButtons small={true} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="gallery-masonry"
            >
              {currentGallery.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  onClick={() => isVideo && setPlayingVideo(item.youtubeId)}
                  style={{ position: "relative", overflow: "hidden", cursor: "pointer", borderRadius: 8, breakInside: "avoid", marginBottom: "clamp(10px,2vw,16px)", display: "block" }}
                  className="gallery-item group"
                >
                  <img
                    src={isVideo ? item.thumbnail : item.img}
                    alt={item.label}
                    style={{ width: "100%", objectFit: "cover", display: "block", height: "clamp(180px, 28vw, 280px)", transition: "transform 0.7s ease" }}
                    className="gallery-img"
                  />

                  <div
                    style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, transition: "background 0.5s" }}
                    className="gallery-overlay"
                  >
                    {isVideo ? (
                      <div style={{ width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "#5d8f44", opacity: 0, transition: "opacity 0.3s" }} className="gallery-icon">
                        <FaPlay size={14} style={{ color: "#fff", marginLeft: 3 }} />
                      </div>
                    ) : (
                      <div className="gallery-icon" style={{ opacity: 0, transition: "opacity 0.3s" }}>
                        <FaMagnifyingGlassPlus size={20} style={{ color: "#fff" }} />
                      </div>
                    )}
                    {item.label && (
                      <span className="gallery-icon" style={{ fontFamily: "Jost, sans-serif", color: "#fff", fontSize: "clamp(9px,1.5vw,11px)", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0, transition: "opacity 0.3s" }}>
                        {item.label}
                      </span>
                    )}
                    {item.cat && (
                      <span className="gallery-icon" style={{ fontFamily: "Jost, sans-serif", color: "#5d8f44", fontSize: "clamp(8px,1.2vw,9px)", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0, transition: "opacity 0.3s" }}>
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

      {/* YouTube Modal */}
      {playingVideo && (
        <VideoModal youtubeId={playingVideo} onClose={() => setPlayingVideo(null)} />
      )}

      <style>{`
        .gallery-masonry {
          columns: 1;
          column-gap: clamp(10px, 2vw, 16px);
        }
        @media (min-width: 480px) { .gallery-masonry { columns: 2; } }
        @media (min-width: 1024px) { .gallery-masonry { columns: 3; } }
        .gallery-item:hover .gallery-img { transform: scale(1.1); }
        .gallery-item:hover .gallery-overlay { background: rgba(0, 0, 0, 0.55) !important; }
        .gallery-item:hover .gallery-icon { opacity: 1 !important; }
      `}</style>
    </div>
  );
};

export default Gallery;