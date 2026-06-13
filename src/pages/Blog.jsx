import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    label: "Premium Real Estate",
    line1: "FIND YOUR",
    line2: "DREAM",
    line3: "PROPERTY",
    sub: "Discover exclusive villas, farmhouses and luxury residences across Delhi NCR.",
  },
  {
    bg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
    label: "Luxury Living",
    line1: "ELITE",
    line2: "ADDRESSES",
    line3: "AWAIT",
    sub: "South Delhi to Gurugram — premium properties curated for discerning buyers.",
  },
  {
    bg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
    label: "Commercial Spaces",
    line1: "INVEST IN",
    line2: "THE BEST",
    line3: "LOCATIONS",
    sub: "Strategic commercial investments across NCR's fastest-growing corridors.",
  },
];

const CATS = ["All", "Villas", "Farmhouses", "Investment", "Luxury Living", "Commercial"];

const BLOGS = [
  {
    id: 1,
    category: "Investment",
    title: "Why South Delhi Remains the Most Sought-After Address in 2025",
    excerpt:
      "From Vasant Vihar to Greater Kailash, South Delhi's prime residential corridors continue to command premium valuations — and the reasons go far beyond prestige.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    date: "June 3, 2025",
    readTime: "5 min",
  },
  {
    id: 2,
    category: "Farmhouses",
    title: "The Rise of Chhatarpur Farms: A Weekend Retreat Goes Full-Time",
    excerpt:
      "Once reserved for weekend escapes, farmhouse living on Delhi's southern fringe is now attracting buyers seeking permanent residences with space, greenery, and seclusion.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    date: "May 18, 2025",
    readTime: "4 min",
  },
  {
    id: 3,
    category: "Commercial",
    title: "Gurugram's Golf Course Extension Road: The New Epicentre of Premium Office Space",
    excerpt:
      "A deep-dive into how GCE Road evolved from a residential artery into one of the NCR's most competitive commercial destinations for HNI occupiers and investors.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    date: "May 9, 2025",
    readTime: "6 min",
  },
  {
    id: 4,
    category: "Luxury Living",
    title: "Inside Delhi's ₹25 Cr+ Homes: What the Ultra-Premium Buyer Demands Today",
    excerpt:
      "Private elevators, smart-home integration, rooftop terraces with city views — what defines a true ultra-luxury residence in the capital in 2025.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    date: "April 27, 2025",
    readTime: "5 min",
  },
  {
    id: 5,
    category: "Villas",
    title: "DLF 5 Gurgaon vs Shanti Niketan Delhi: A Tale of Two Trophy Addresses",
    excerpt:
      "We compare two of the NCR's most coveted villa enclaves — their lifestyle offerings, appreciation potential, and the profile of buyers choosing each.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    date: "April 14, 2025",
    readTime: "4 min",
  },
];

const Blog = () => {
  const [slide, setSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const t = setTimeout(() => setSlide((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearTimeout(t);
  }, [slide]);

  const s = SLIDES[slide];

  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>

      {/* ── HERO ── */}
      <section
        style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}
      >
        {/* Background slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={slide}
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <img src={s.bg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div
              style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(105deg, rgba(10,25,5,0.92) 0%, rgba(10,25,5,0.60) 55%, rgba(10,25,5,0.35) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div style={{
          position: "absolute", top: "50%", right: "clamp(12px, 3vw, 40px)",
          transform: "translateY(-50%)", zIndex: 20,
          display: "flex", flexDirection: "column", gap: 8,
        }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{
                width: 5,
                height: i === slide ? 24 : 5,
                background: i === slide ? "#5d8f44" : "rgba(255,255,255,0.35)",
                border: "none", cursor: "pointer",
                borderRadius: 99,
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div style={{
          position: "relative", zIndex: 10,
          width: "100%",
          maxWidth: 1380,
          margin: "0 auto",
          padding: "clamp(80px, 12vw, 120px) clamp(16px, 5vw, 64px) clamp(60px, 10vw, 100px)",
          boxSizing: "border-box",
        }}>

          {/* Label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`label-${slide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(12px, 2vw, 20px)" }}
            >
              <span style={{ width: "clamp(24px,4vw,48px)", height: 1.5, background: "#5d8f44", flexShrink: 0, display: "inline-block" }} />
              <span style={{
                fontSize: "clamp(8px, 1.8vw, 10px)", letterSpacing: "0.25em",
                textTransform: "uppercase", color: "#5d8f44",
                fontWeight: 600, fontFamily: "Jost, sans-serif",
              }}>
                {s.label}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${slide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 style={{
                color: "#fff",
                lineHeight: 0.95,
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                margin: 0,
                /* Mobile: ~32px, Tablet: ~56px, Desktop: ~80px */
                fontSize: "clamp(2rem, 6.5vw, 5rem)",
              }}>
                {s.line1}
                <br />
                <span style={{ color: "#5d8f44" }}>{s.line2}</span>
                <br />
                {s.line3}
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Sub + Buttons */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`sub-${slide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ marginTop: "clamp(16px, 3vw, 28px)" }}
            >
              <p style={{
                color: "rgba(255,255,255,0.7)",
                fontFamily: "Jost, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(12px, 2vw, 14px)",
                lineHeight: 1.75,
                maxWidth: 420,
                marginBottom: "clamp(16px, 3vw, 24px)",
              }}>
                {s.sub}
              </p>

              {/* Buttons — row on all sizes, wrap if needed */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link to="/contact">
                  <motion.button
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "clamp(10px,2vw,14px) clamp(18px,3vw,28px)",
                      background: "#5d8f44", color: "#fff", border: "none",
                      fontSize: "clamp(9px,1.5vw,11px)", letterSpacing: "0.18em",
                      textTransform: "uppercase", fontWeight: 600,
                      fontFamily: "Jost, sans-serif", cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                    whileHover={{ backgroundColor: "#3a6b25", scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Get In Touch <ArrowRight size={12} />
                  </motion.button>
                </Link>
                <Link to="/properties">
                  <motion.button
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "clamp(10px,2vw,14px) clamp(18px,3vw,28px)",
                      background: "transparent", color: "#fff",
                      border: "1.5px solid rgba(255,255,255,0.45)",
                      fontSize: "clamp(9px,1.5vw,11px)", letterSpacing: "0.18em",
                      textTransform: "uppercase", fontWeight: 600,
                      fontFamily: "Jost, sans-serif", cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                    whileHover={{ borderColor: "#5d8f44", color: "#5d8f44", scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Properties
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: "absolute", bottom: "clamp(12px, 3vw, 24px)",
            left: "50%", transform: "translateX(-50%)",
            zIndex: 20, display: "flex", flexDirection: "column",
            alignItems: "center", gap: 6,
          }}
        >
          <span style={{ fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "Jost, sans-serif" }}>Scroll</span>
          <ChevronDown size={13} color="#5d8f44" />
        </motion.div>
      </section>

      {/* ── BLOG SECTION ── */}
      <section style={{ padding: "clamp(40px, 6vw, 80px) 0", background: "#F5F7F5" }}>
        <div style={{
          maxWidth: 1380, margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 64px)",
          boxSizing: "border-box",
        }}>

          {/* Category Filter */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: "clamp(24px, 4vw, 40px)" }}>
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{
                  padding: "8px clamp(12px, 2vw, 20px)",
                  fontSize: "clamp(8px, 1.5vw, 10px)",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  border: `1px solid ${activeCategory === c ? "#5d8f44" : "rgba(45,55,72,0.2)"}`,
                  background: activeCategory === c ? "#5d8f44" : "transparent",
                  color: activeCategory === c ? "#fff" : "rgba(45,55,72,0.6)",
                  fontFamily: "Jost, sans-serif", fontWeight: 500,
                  cursor: "pointer", transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              border: "1px solid rgba(93,143,68,0.2)",
              marginBottom: "clamp(24px, 4vw, 48px)",
              cursor: "pointer",
            }}
            className="group"
          >
            <div style={{ overflow: "hidden", height: "clamp(200px, 35vw, 340px)" }}>
              <img
                src={BLOGS[0].image}
                alt={BLOGS[0].title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.7s" }}
                className="group-hover:scale-105"
              />
            </div>
            <div style={{
              background: "#fff",
              padding: "clamp(20px, 4vw, 48px)",
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <span style={{ color: "#5d8f44", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 12, fontFamily: "Jost, sans-serif" }}>
                {BLOGS[0].category}
              </span>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(18px, 3vw, 30px)",
                fontWeight: 500, color: "#1A202C",
                marginBottom: "clamp(10px, 2vw, 16px)",
                lineHeight: 1.3,
              }}
                className="group-hover:text-[#5d8f44] transition-colors"
              >
                {BLOGS[0].title}
              </h2>
              <p style={{ color: "rgba(45,55,72,0.6)", fontSize: "clamp(12px, 1.8vw, 14px)", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.75, marginBottom: "clamp(16px, 3vw, 24px)" }}>
                {BLOGS[0].excerpt}
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(45,55,72,0.4)", fontSize: 12, fontFamily: "Jost, sans-serif" }}>
                  <span>{BLOGS[0].date}</span>
                  <span>·</span>
                  <Clock size={11} />
                  <span>{BLOGS[0].readTime} read</span>
                </div>
                <span style={{ color: "#5d8f44", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", borderBottom: "1px solid #5d8f44", paddingBottom: 2, fontFamily: "Jost, sans-serif" }}>
                  Read Article
                </span>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(16px, 3vw, 24px)",
          }}>
            {BLOGS.slice(1).map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  border: "1px solid rgba(93,143,68,0.15)",
                  background: "#fff",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
                className="group hover:border-[#5d8f44]/40"
              >
                <div style={{ overflow: "hidden", height: "clamp(160px, 25vw, 220px)" }}>
                  <img
                    src={b.image}
                    alt={b.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.7s" }}
                    className="group-hover:scale-105"
                  />
                </div>
                <div style={{ padding: "clamp(16px, 3vw, 24px)" }}>
                  <span style={{ color: "#5d8f44", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 8, display: "block", fontFamily: "Jost, sans-serif" }}>
                    {b.category}
                  </span>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    fontWeight: 500, color: "#1A202C",
                    marginBottom: "clamp(8px, 1.5vw, 12px)",
                    lineHeight: 1.3,
                  }}
                    className="group-hover:text-[#5d8f44] transition-colors"
                  >
                    {b.title}
                  </h3>
                  <p style={{ color: "rgba(45,55,72,0.6)", fontSize: "clamp(12px, 1.8vw, 14px)", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.75, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {b.excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, color: "rgba(45,55,72,0.4)", fontFamily: "Jost, sans-serif" }}>
                    <span>{b.date}</span>
                    <span style={{ color: "#5d8f44", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", borderBottom: "1px solid rgba(93,143,68,0.5)", paddingBottom: 2 }}>
                      Read →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Blog;