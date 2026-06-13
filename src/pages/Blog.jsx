import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Home, Building2, Trees, MapPin, Search, ChevronDown } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState("Residential");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const t = setTimeout(() => setSlide((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearTimeout(t);
  }, [slide]);

  const s = SLIDES[slide];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

        {/* Background slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={slide}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <img src={s.bg} alt="" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, rgba(10,25,5,0.92) 0%, rgba(10,25,5,0.60) 55%, rgba(10,25,5,0.35) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute top-1/2 right-3 sm:right-6 lg:right-10 -translate-y-1/2 z-20 flex flex-col gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: 5,
                height: i === slide ? 24 : 5,
                background: i === slide ? "#5d8f44" : "rgba(255,255,255,0.35)",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-6 mb-140 sm:mb-12 lg:mb-14 pb-0">

          {/* Label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`label-${slide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-3 sm:mb-5"
            >
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#5d8f44]" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#5d8f44] font-semibold font-[Jost]">
                {s.label}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Headline — responsive size */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${slide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="text-white leading-[0.9] font-[Cormorant_Garamond] font-bold uppercase"
                style={{
                  /*
                   * Mobile  (~375px) → 2.2rem  = ~35px  ✓ clean, not overwhelming
                   * Tablet  (~768px) → ~4rem   = ~64px  ✓ punchy
                   * Desktop (~1280px)→ ~5rem   = ~80px  ✓ bold but contained
                   * Max cap → 5.5rem so it never blows out
                   */
                  fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.line1}
                <br />
                <span style={{ color: "#5d8f44" }}>{s.line2}</span>
                <br />
                {s.line3}
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Sub + Buttons + Stats */}
          <div className="mt-5 sm:mt-7 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 items-end pb-8 sm:pb-10">

            <AnimatePresence mode="wait">
              <motion.div
                key={`sub-${slide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <p className="text-white/70 font-[Jost] font-light text-xs sm:text-sm leading-relaxed max-w-md mb-5">
                  {s.sub}
                </p>
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  <Link to="/contact">
                    <motion.button
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-white text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold font-[Jost] border-none cursor-pointer"
                      style={{ background: "#5d8f44" }}
                      whileHover={{ backgroundColor: "#3a6b25", scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Get In Touch <ArrowRight size={12} />
                    </motion.button>
                  </Link>
                  <Link to="/properties">
                    <motion.button
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-white text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold font-[Jost] cursor-pointer"
                      style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.45)" }}
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

        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
        >
          <span className="text-[8px] tracking-[0.3em] uppercase text-white/30 font-[Jost]">Scroll</span>
          <ChevronDown size={13} color="#5d8f44" />
        </motion.div>
      </section>

      {/* ── BLOG SECTION ── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F5F7F5]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap mb-8 sm:mb-10">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-4 sm:px-5 py-2 text-[9px] sm:text-[10px] tracking-widest uppercase border transition-colors font-[Jost] font-medium"
                style={{
                  background: activeCategory === c ? "#5d8f44" : "transparent",
                  color: activeCategory === c ? "#fff" : "rgba(45,55,72,0.6)",
                  borderColor: activeCategory === c ? "#5d8f44" : "rgba(45,55,72,0.2)",
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-6 sm:mb-8 lg:mb-10 group cursor-pointer border border-[#5d8f44]/20"
          >
            <div className="overflow-hidden h-56 sm:h-72 lg:h-auto">
              <img
                src={BLOGS[0].image}
                alt={BLOGS[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-[#5d8f44] text-[9px] tracking-[0.3em] uppercase mb-3 font-[Jost]">
                {BLOGS[0].category}
              </span>
              <h2 className="font-[Cormorant_Garamond] text-xl sm:text-2xl lg:text-3xl font-medium text-[#1A202C] mb-3 sm:mb-4 group-hover:text-[#5d8f44] transition-colors leading-snug">
                {BLOGS[0].title}
              </h2>
              <p className="text-[#2D3748]/60 text-sm font-[Jost] font-light leading-relaxed mb-5 sm:mb-6">
                {BLOGS[0].excerpt}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 sm:gap-3 text-[#2D3748]/40 text-xs font-[Jost]">
                  <span>{BLOGS[0].date}</span>
                  <span>·</span>
                  <Clock size={11} />
                  <span>{BLOGS[0].readTime} read</span>
                </div>
                <span className="text-[#5d8f44] text-[10px] tracking-widest uppercase border-b border-[#5d8f44] pb-px font-[Jost]">
                  Read Article
                </span>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {BLOGS.slice(1).map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group border border-[#5d8f44]/15 bg-white cursor-pointer hover:border-[#5d8f44]/40 transition-colors"
              >
                <div className="overflow-hidden h-44 sm:h-48 lg:h-52">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <span className="text-[#5d8f44] text-[9px] tracking-[0.3em] uppercase mb-2 block font-[Jost]">
                    {b.category}
                  </span>
                  <h3 className="font-[Cormorant_Garamond] text-lg sm:text-xl font-medium text-[#1A202C] mb-2 sm:mb-3 group-hover:text-[#5d8f44] transition-colors leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-[#2D3748]/60 text-sm font-[Jost] font-light leading-relaxed mb-4 line-clamp-2">
                    {b.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#2D3748]/40 font-[Jost]">
                    <span>{b.date}</span>
                    <span className="text-[#5d8f44] text-[9px] tracking-widest uppercase border-b border-[#5d8f44]/50 pb-px">
                      Read →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Blog;