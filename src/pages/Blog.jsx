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

const STATS = [
  { value: "₹500Cr+", label: "Deals Closed" },
  { value: "12+", label: "Years Experience" },
  { value: "850+", label: "Happy Clients" },
  { value: "200+", label: "Properties" },
];

const TABS = ["Residential", "Commercial", "Plots", "Farmhouses"];

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
                  "linear-gradient(105deg, rgba(10,25,5,0.88) 0%, rgba(10,25,5,0.55) 55%, rgba(10,25,5,0.30) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute top-1/2 right-6 sm:right-10 -translate-y-1/2 z-20 flex flex-col gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: 6,
                height: i === slide ? 28 : 6,
                background: i === slide ? "#5d8f44" : "rgba(255,255,255,0.35)",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-0">

          {/* Label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`label-${slide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4 sm:mb-6"
            >
              <span className="w-10 sm:w-14 h-[1.5px] bg-[#5d8f44]" />
              <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#5d8f44] font-semibold font-[Jost]">
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
              <h1
                className="text-white leading-[0.88] font-[Cormorant_Garamond] font-bold uppercase"
                style={{ fontSize: "clamp(4.5rem, 14vw, 12rem)", letterSpacing: "-0.01em" }}
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
          <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end pb-10">

            <AnimatePresence mode="wait">
              <motion.div
                key={`sub-${slide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <p className="text-white/70 font-[Jost] font-light text-sm sm:text-base leading-relaxed max-w-md mb-6">
                  {s.sub}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link to="/contact">
                    <motion.button
                      className="inline-flex items-center gap-2 px-6 py-3 text-white text-[11px] tracking-[0.18em] uppercase font-semibold font-[Jost] border-none cursor-pointer"
                      style={{ background: "#5d8f44" }}
                      whileHover={{ backgroundColor: "#3a6b25", scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Get In Touch <ArrowRight size={13} />
                    </motion.button>
                  </Link>
                  <Link to="/properties">
                    <motion.button
                      className="inline-flex items-center gap-2 px-6 py-3 text-white text-[11px] tracking-[0.18em] uppercase font-semibold font-[Jost] cursor-pointer"
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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-px"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(93,143,68,0.2)" }}
            >
              {STATS.map((st, i) => (
                <div
                  key={i}
                  className="px-4 py-4 sm:py-5 text-center"
                  style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(93,143,68,0.2)" : "none" }}
                >
                  <div
                    className="font-[Cormorant_Garamond] font-semibold text-[#5d8f44]"
                    style={{ fontSize: "clamp(1.2rem,2.5vw,1.6rem)" }}
                  >
                    {st.value}
                  </div>
                  <div className="text-[8px] tracking-[0.2em] uppercase text-white/40 font-[Jost] mt-1">
                    {st.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full mb-0"
            style={{
              background: "rgba(10,25,5,0.75)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(93,143,68,0.25)",
            }}
          >
            {/* Tabs */}
            <div className="flex overflow-x-auto" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex items-center gap-2 whitespace-nowrap font-[Jost] cursor-pointer border-none transition-all"
                  style={{
                    padding: "12px 20px",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    background: "transparent",
                    color: activeTab === tab ? "#5d8f44" : "rgba(255,255,255,0.4)",
                    borderBottom: activeTab === tab ? "2px solid #5d8f44" : "2px solid transparent",
                    marginBottom: -1,
                    fontWeight: 500,
                  }}
                >
                  {tab === "Residential" ? <Home size={10} />
                    : tab === "Commercial" ? <Building2 size={10} />
                    : tab === "Plots" ? <Trees size={10} />
                    : <MapPin size={10} />}
                  {tab}
                </button>
              ))}
            </div>

            {/* Search row */}
            <div className="flex flex-wrap sm:flex-nowrap gap-2 p-3 sm:p-4">
              <input
                type="text"
                placeholder={`Search ${activeTab} in Noida / Greater Noida...`}
                className="flex-1 min-w-0 text-white text-xs font-[Jost] placeholder-white/40 outline-none"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(93,143,68,0.2)",
                  padding: "11px 14px",
                }}
              />
              <select
                className="font-[Jost] cursor-pointer outline-none text-xs"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(93,143,68,0.2)",
                  padding: "11px 14px",
                  color: "rgba(255,255,255,0.55)",
                  flex: "0 0 auto",
                }}
              >
                <option>Budget</option>
                <option>Under ₹50L</option>
                <option>₹50L–1Cr</option>
                <option>₹1–3 Cr</option>
                <option>Above ₹3 Cr</option>
              </select>
              <select
                className="font-[Jost] cursor-pointer outline-none text-xs"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(93,143,68,0.2)",
                  padding: "11px 14px",
                  color: "rgba(255,255,255,0.55)",
                  flex: "0 0 auto",
                }}
              >
                <option>Location</option>
                <option>Sector 110, Noida</option>
                <option>Sector 78, Noida</option>
                <option>Greater Noida West</option>
                <option>Yamuna Expressway</option>
              </select>
              <button
                className="inline-flex items-center gap-2 text-white text-[10px] tracking-[0.2em] uppercase font-semibold font-[Jost] cursor-pointer border-none whitespace-nowrap"
                style={{ background: "#5d8f44", padding: "11px 22px", flex: "0 0 auto" }}
              >
                <Search size={13} /> Search
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[8px] tracking-[0.3em] uppercase text-white/30 font-[Jost]">Scroll</span>
          <ChevronDown size={14} color="#5d8f44" />
        </motion.div>
      </section>

      {/* ── BLOG SECTION ── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#F5F7F5]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap mb-8 sm:mb-10">
            {CATS.map((c, i) => (
              <button
                key={c}
                className={`px-4 sm:px-5 py-2 text-[10px] tracking-widest uppercase border transition-colors ${
                  i === 0
                    ? "bg-[#5d8f44] text-white border-[#5d8f44]"
                    : "border-[#2D3748]/20 text-[#2D3748]/60 hover:border-[#5d8f44] hover:text-[#5d8f44]"
                }`}
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-8 sm:mb-10 group cursor-pointer border border-[#5d8f44]/20"
          >
            <div className="img-zoom-wrap overflow-hidden h-60 sm:h-72 lg:h-auto">
              <img src={BLOGS[0].image} alt={BLOGS[0].title} className="img-inner w-full h-full object-cover" />
            </div>
            <div className="bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-[#5d8f44] text-[9px] tracking-[0.3em] uppercase mb-3">
                {BLOGS[0].category}
              </span>
              <h2 className="font-[Cormorant_Garamond] text-2xl sm:text-3xl font-medium text-[#1A202C] mb-3 sm:mb-4 group-hover:text-[#5d8f44] transition-colors">
                {BLOGS[0].title}
              </h2>
              <p className="text-[#2D3748]/60 text-sm font-[Jost] font-light leading-relaxed mb-5 sm:mb-6">
                {BLOGS[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3 text-[#2D3748]/40 text-xs">
                  <span>{BLOGS[0].date}</span>
                  <span>·</span>
                  <Clock size={11} />
                  <span>{BLOGS[0].readTime} read</span>
                </div>
                <span className="text-[#5d8f44] text-[10px] tracking-widest uppercase border-b border-[#5d8f44] pb-px">
                  Read Article
                </span>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {BLOGS.slice(1).map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group border border-[#5d8f44]/15 bg-white cursor-pointer hover:border-[#5d8f44]/40 transition-colors"
              >
                <div className="img-zoom-wrap overflow-hidden h-48 sm:h-52">
                  <img src={b.image} alt={b.title} className="img-inner w-full h-full object-cover" />
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-[#5d8f44] text-[9px] tracking-[0.3em] uppercase mb-2 block">
                    {b.category}
                  </span>
                  <h3 className="font-[Cormorant_Garamond] text-lg sm:text-xl font-medium text-[#1A202C] mb-2 sm:mb-3 group-hover:text-[#5d8f44] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-[#2D3748]/60 text-sm font-[Jost] font-light leading-relaxed mb-4 line-clamp-2">
                    {b.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#2D3748]/40">
                    <span>{b.date}</span>
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