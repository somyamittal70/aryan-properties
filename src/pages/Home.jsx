// Home.jsx - Aryan Properties

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  ArrowRight,
  Home,
  Building2,
  Trees,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Shield,
  Award,
  Clock,
  HeartHandshake,
  TrendingUp,
  Key,
  BarChart3,
  ZoomIn,
  Menu,
  X,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const COLORS = {
  bg: "#F0F5ED",
  bgAlt: "#FFFFFF",
  text: "#1E2D1A",
  textLight: "#4A6741",
  textMuted: "#7A9B72",
  green: "#5d8f44",
  greenDark: "#3a6b25",
  greenDeep: "#1a3a0a",
  dark: "#0F1F0A",
  border: "#C8DDB8",
  borderLight: "#DFF0D2",
};

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80",
  house1:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  house2:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  house3:
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  house4:
    "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
  interior1:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  interior2:
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
  pool: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
  invest:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
  client1:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  client2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  client3:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
};

const PROPERTIES = [
  {
    id: 1,
    title: "Green Valley Villa",
    location: "Sector 110, Noida",
    price: "₹3.2 Cr",
    type: "Villa",
    beds: 4,
    area: "2400 sq.ft",
    img: IMAGES.house1,
    tag: "Featured",
  },
  {
    id: 2,
    title: "Aryan Residency",
    location: "Sector 78, Noida",
    price: "₹1.8 Cr",
    type: "Apartment",
    beds: 3,
    area: "1650 sq.ft",
    img: IMAGES.house3,
    tag: "New",
  },
  {
    id: 3,
    title: "Palm Grove Bungalow",
    location: "Greater Noida West",
    price: "₹2.5 Cr",
    type: "Bungalow",
    beds: 5,
    area: "3100 sq.ft",
    img: IMAGES.house2,
  },
];

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Home Buyer, Noida",
    text: "Aryan Properties made our dream home a reality. The team was professional, transparent, and helped us every step of the way. Truly a trustworthy partner.",
    rating: 5,
    image: IMAGES.client1,
  },
  {
    name: "Priya Verma",
    role: "Investor, Delhi NCR",
    text: "I've invested in 3 properties through Aryan Properties. Their market knowledge and honest guidance have delivered excellent returns every time.",
    rating: 5,
    image: IMAGES.client2,
  },
  {
    name: "Amit Khanna",
    role: "Property Seller",
    text: "Sold my property within 3 weeks at the best price. The team handled everything from legal docs to final handover. Highly recommended!",
    rating: 5,
    image: IMAGES.client3,
  },
];

const FEATURES = [
  {
    icon: Award,
    title: "Best Deal Guarantee",
    desc: "We negotiate hard on your behalf to ensure you always get the most value for your investment.",
  },
  {
    icon: Shield,
    title: "Trusted Since 2010",
    desc: "Over a decade of honest dealings and 1000+ satisfied clients across Noida and Greater Noida.",
  },
  {
    icon: TrendingUp,
    title: "High ROI Properties",
    desc: "Handpicked properties in high-growth zones with proven appreciation and rental potential.",
  },
  {
    icon: Clock,
    title: "7-Day Support",
    desc: "Our team is available every day of the week — site visits, queries, and documentation help.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Assistance",
    desc: "From property search to registration — legal, loan, and possession support under one roof.",
  },
  {
    icon: Key,
    title: "Verified Listings Only",
    desc: "Every property is site-verified, legally cleared, and builder-approved before listing.",
  },
];

const INVESTMENTS = [
  {
    icon: TrendingUp,
    title: "Residential Investment",
    stat: "18–30%",
    statLabel: "Appreciation in 3 Years",
    desc: "Noida and Greater Noida are among India's fastest appreciating real estate markets, ideal for long-term wealth creation.",
  },
  {
    icon: BarChart3,
    title: "Rental Income",
    stat: "4–8%",
    statLabel: "Annual Rental Yield",
    desc: "Premium residential and commercial properties in Sector 110, 78, and 137 command strong consistent rental demand.",
  },
  {
    icon: Shield,
    title: "Plot Investment",
    stat: "₹20L–1Cr",
    statLabel: "Entry Range",
    desc: "Affordable plots in high-growth corridors near Yamuna Expressway and Greater Noida West.",
  },
];

const SERVICES = [
  {
    title: "Buy",
    subtitle: "Residential & Commercial",
    desc: "Flats, villas, bungalows, plots, and commercial spaces across Noida, Greater Noida and Delhi NCR.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    title: "Sell",
    subtitle: "Get Best Price",
    desc: "List your property with us and reach thousands of verified buyers. Quick sale, best value.",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
  },
  {
    title: "Rent",
    subtitle: "Premium Spaces",
    desc: "Short and long-term rental solutions for residential and commercial requirements.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Book",
    subtitle: "New Projects",
    desc: "Pre-launch bookings and new project consultancy with trusted builders across NCR.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
];

const GALLERY_ITEMS = [
  { img: IMAGES.house1, label: "Green Valley Villa", span: "" },
  { img: IMAGES.interior1, label: "Premium Interiors", span: "" },
  { img: IMAGES.pool, label: "Amenities", span: "" },
  { img: IMAGES.house3, label: "Aryan Residency", span: "" },
  { img: IMAGES.house2, label: "Palm Grove Bungalow", span: "col-span-2" },
];

const TABS = ["Residential", "Commercial", "Plots", "Rental"];
const FILTERS = ["All", "Villa", "Apartment", "Bungalow"];
const STATS = [
  { value: "1000+", label: "Properties Sold" },
  { value: "₹500Cr+", label: "Transactions" },
  { value: "14+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const useBreakpoint = () => {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return {
    isMobile: w < 640,
    isTablet: w >= 640 && w < 1024,
    isDesktop: w >= 1024,
    width: w,
  };
};

const GlobalStyles = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
    <style>{`
      * { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { overflow-x: hidden; }
      input, select, textarea, button { font-family: 'Jost', sans-serif; }
      select option { color: #1E2D1A; background: #fff; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #F0F5ED; }
      ::-webkit-scrollbar-thumb { background: #5d8f44; border-radius: 3px; }
      .hide-scrollbar::-webkit-scrollbar { display: none; }
      .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      .nav-link { transition: color 0.2s; }
      .nav-link:hover { color: #5d8f44 !important; }
      .prop-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(30,45,26,0.12) !important; }
      .prop-card { transition: transform 0.3s, box-shadow 0.3s; }
      .prop-card img { transition: transform 0.6s; }
      .prop-card:hover img { transform: scale(1.06); }
      .srv-desc { opacity: 0; transform: translateY(8px); transition: all 0.3s; }
      .srv-card:hover .srv-desc { opacity: 1 !important; transform: translateY(0) !important; }
      .srv-card:hover .srv-overlay { background: linear-gradient(to top, rgba(10,31,5,0.95) 0%, rgba(10,31,5,0.5) 60%, transparent 100%) !important; }
      .feat-card { transition: transform 0.3s; }
      .feat-card:hover { transform: translateY(-4px); }
      .inv-card { transition: border-color 0.3s, background 0.3s; }
      .inv-card:hover { border-color: rgba(93,143,68,0.5) !important; background: rgba(93,143,68,0.04) !important; }
      .gal-item img { transition: transform 0.6s; }
      .gal-item:hover img { transform: scale(1.08); }
      .gal-overlay { opacity: 0; transition: opacity 0.3s; }
      .gal-item:hover .gal-overlay { opacity: 1; }
      input:focus, select:focus, textarea:focus { border-color: #5d8f44 !important; outline: none; }
      .mobile-nav { transform: translateX(100%); transition: transform 0.35s ease; }
      .mobile-nav.open { transform: translateX(0); }
      @media (max-width: 639px) {
        .srv-desc { opacity: 1 !important; transform: translateY(0) !important; }
      }
    `}</style>
  </>
);

const SectionLabel = ({ children, light = false }) => (
  <div
    style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}
  >
    <span style={{ width: 32, height: 1, background: COLORS.green }} />
    <span
      style={{
        fontSize: 10,
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: light ? "rgba(255,255,255,0.5)" : COLORS.textMuted,
        fontFamily: "Jost, sans-serif",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  </div>
);

// ─── HERO ─────────────────────────────────────────────────────────
const Hero = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const [activeTab, setActiveTab] = useState("Residential");
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <motion.img
          src={IMAGES.hero}
          alt="Premium Property"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          animate={{ scale: [1, 1.08], x: [0, -10] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,31,5,0.65) 0%, rgba(10,31,5,0.45) 50%, rgba(10,31,5,0.8) 100%)",
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "80px 16px 100px" : "0 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 14,
          }}
        >
          <span
            style={{
              width: isMobile ? 20 : 40,
              height: 1,
              background: COLORS.green,
            }}
          />
          <span
            style={{
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: COLORS.green,
              fontFamily: "Jost, sans-serif",
            }}
          >
            Noida's Trusted Real Estate Partner
          </span>
          <span
            style={{
              width: isMobile ? 20 : 40,
              height: 1,
              background: COLORS.green,
            }}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile
              ? "70px"
              : "60px",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
          }}
        >
          TURNING YOUR DREAM
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile
              ? "65px"
              : "75px",
            fontWeight: 900,
            color: COLORS.green,
            lineHeight: 1,
            letterSpacing: "-0.01em",
            marginBottom: 8,
          }}
        >
          HOME INTO REALITY
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            color: "rgba(255, 255, 255, 1)",
            fontFamily: "Jost, sans-serif",
            fontWeight: 300,
            fontSize: isMobile ? 13 : 16,
            maxWidth: 480,
            marginBottom: 24,
            lineHeight: 1.7,
            padding: "0 4px",
          }}
        >
          Buy, Sell, Rent or Book — residential & commercial properties across
          Noida and Greater Noida with 14+ years of trusted expertise.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            background: "rgba(10,31,5,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(93,143,68,0.25)",
            borderRadius: 20,
            padding: "4px 4px 8px",
            width: "100%",
            maxWidth: 760,
            marginBottom: 20,
          }}
        >
          <div
            className="hide-scrollbar"
            style={{
              display: "flex",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              marginBottom: 4,
              overflowX: "auto",
            }}
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: isMobile ? "9px 10px" : "12px 16px",
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "Jost, sans-serif",
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                  transition: "all 0.2s",
                  color:
                    activeTab === tab ? COLORS.green : "rgba(255,255,255,0.45)",
                  borderBottom:
                    activeTab === tab
                      ? `2px solid ${COLORS.green}`
                      : "2px solid transparent",
                  marginBottom: -1,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {tab === "Residential" ? (
                  <Home size={10} />
                ) : tab === "Commercial" ? (
                  <Building2 size={10} />
                ) : (
                  <Trees size={10} />
                )}
                {tab}
              </button>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: 8,
              padding: "4px 8px 0",
              flexWrap: isMobile ? "wrap" : "nowrap",
            }}
          >
            <input
              type="text"
              placeholder={`Search ${activeTab} in Noida / Greater Noida...`}
              style={{
                flex: isMobile ? "1 1 100%" : 1,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "11px 14px",
                color: "#fff",
                fontSize: 12,
                fontFamily: "Jost, sans-serif",
                outline: "none",
                minWidth: 0,
              }}
            />
            <select
              style={{
                flex: isMobile ? "1 1 calc(50% - 4px)" : "0 0 auto",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "11px 12px",
                color: "rgba(255,255,255,0.6)",
                fontSize: 11,
                fontFamily: "Jost, sans-serif",
                cursor: "pointer",
              }}
            >
              <option>Budget</option>
              <option>Under ₹50L</option>
              <option>₹50L–1Cr</option>
              <option>₹1–3 Cr</option>
              <option>Above ₹3 Cr</option>
            </select>
            <button
              style={{
                flex: isMobile ? "1 1 calc(50% - 4px)" : "0 0 auto",
                background: COLORS.green,
                border: "none",
                borderRadius: 12,
                padding: "11px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "Jost, sans-serif",
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              <Search size={13} /> Search
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 36,
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            padding: "0 4px",
          }}
        >
          <Link to="/properties">
            <button
              style={{
                background: COLORS.green,
                color: "#fff",
                border: "none",
                borderRadius: 14,
                padding: isMobile ? "12px 20px" : "13px 24px",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "Jost, sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Explore Properties <ArrowRight size={12} />
            </button>
          </Link>
          <Link to="/contact">
            <button
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: 14,
                padding: isMobile ? "12px 20px" : "13px 24px",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "Jost, sans-serif",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Book Site Visit
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr 1fr"
              : `repeat(${STATS.length}, auto)`,
            border: "1px solid rgba(93,143,68,0.25)",
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(10px)",
            borderRadius: 16,
            width: isMobile ? "100%" : "auto",
            overflow: "hidden",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: isMobile ? "14px 12px" : "20px 28px",
                textAlign: "center",
                borderRight:
                  !isMobile && i < STATS.length - 1
                    ? "1px solid rgba(93,143,68,0.2)"
                    : "none",
                borderBottom:
                  isMobile && i < 2 ? "1px solid rgba(93,143,68,0.2)" : "none",
                borderLeft:
                  isMobile && (i === 1 || i === 3)
                    ? "1px solid rgba(93,143,68,0.2)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: isMobile ? 18 : 26,
                  fontWeight: 500,
                  color: COLORS.green,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "Jost, sans-serif",
                  marginTop: 3,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            fontSize: 8,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            fontFamily: "Jost, sans-serif",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={14} color={COLORS.green} />
      </motion.div>
    </section>
  );
};

// ─── ABOUT ────────────────────────────────────────────────────────
const About = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const isSmall = isMobile || isTablet;
  return (
    <section
      style={{
        padding: isSmall ? "64px 0" : "112px 0",
        background: COLORS.bgAlt,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
            gap: isSmall ? 40 : 80,
            alignItems: "center",
          }}
        >
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 0,
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <img
                  src={IMAGES.house1}
                  alt="Aryan Properties"
                  style={{
                    width: "100%",
                    height: isTablet ? 340 : 500,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,31,5,0.25), transparent)",
                  }}
                />
              </div>
              {!isTablet && (
                <div
                  style={{
                    position: "absolute",
                    bottom: -40,
                    right: -32,
                    width: 170,
                    height: 150,
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "4px solid #fff",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    zIndex: 2,
                  }}
                >
                  <img
                    src={IMAGES.interior1}
                    alt="Interior"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  zIndex: 3,
                  background: "rgba(10,31,5,0.88)",
                  backdropFilter: "blur(10px)",
                  padding: "14px 18px",
                  textAlign: "center",
                  borderRadius: 14,
                  border: `1px solid rgba(93,143,68,0.3)`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 28,
                    color: COLORS.green,
                    fontWeight: 500,
                  }}
                >
                  14+
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: 8,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "Jost, sans-serif",
                    marginTop: 4,
                    lineHeight: 1.6,
                  }}
                >
                  Years of
                  <br />
                  Trust
                </div>
              </motion.div>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, x: isSmall ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <SectionLabel>About Aryan Properties</SectionLabel>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile
                  ? "clamp(30px, 8vw, 44px)"
                  : "clamp(40px, 5vw, 58px)",
                fontWeight: 900,
                color: COLORS.dark,
                lineHeight: 1.1,
                marginBottom: 18,
              }}
            >
              A LEGACY OF
              <br />
              <span style={{ color: COLORS.green }}>TRUST & SERVICE</span>
            </h2>
            <p
              style={{
                color: "#222",
                fontFamily: "Jost, sans-serif",
                fontWeight: 300,
                fontSize: isMobile ? 14 : 15,
                lineHeight: 1.8,
                marginBottom: 14,
              }}
            >
              Aryan Properties has been helping families and investors find
              their ideal properties since 2010. Based in Sector 110, Noida, we
              specialize in residential, commercial, and plot transactions
              across the entire Delhi NCR region.
            </p>
            <p
              style={{
                color: "#222",
                fontFamily: "Jost, sans-serif",
                fontWeight: 300,
                fontSize: isMobile ? 14 : 15,
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              With over 1000 successful transactions and a team that puts your
              interests first, we make buying, selling, renting, and booking
              property a smooth and rewarding experience.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                marginBottom: 28,
              }}
            >
              {[
                ["1000+", "Properties Transacted"],
                ["₹500 Cr+", "Total Transactions"],
                ["98%", "Client Retention"],
                ["50+", "Builder Partners"],
              ].map(([val, label]) => (
                <div
                  key={label}
                  style={{
                    borderLeft: `3px solid ${COLORS.green}`,
                    paddingLeft: 12,
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? 20 : 22,
                      fontWeight: 500,
                      color: COLORS.dark,
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: COLORS.textMuted,
                      fontFamily: "Jost, sans-serif",
                      marginTop: 2,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about">
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 600,
                  color: COLORS.dark,
                  background: "none",
                  border: "none",
                  borderBottom: `2px solid ${COLORS.green}`,
                  paddingBottom: 4,
                  cursor: "pointer",
                }}
              >
                Know More About Us <ArrowRight size={13} />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── PROPERTIES ───────────────────────────────────────────────────
const PropertyCard = ({ property, index }) => (
  <motion.div
    className="prop-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    style={{
      background: "#fff",
      borderRadius: "60px 0px 60px 0px",
      overflow: "hidden",
      border: `1px solid ${COLORS.borderLight}`,
      boxShadow: "0 4px 24px rgba(30,45,26,0.06)",
      cursor: "pointer",
    }}
  >
    <div style={{ position: "relative", height: 210, overflow: "hidden" }}>
      <img
        src={property.img}
        alt={property.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {property.tag && (
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 14,
            background: COLORS.green,
            color: "#fff",
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontFamily: "Jost, sans-serif",
            fontWeight: 600,
            padding: "5px 12px",
            borderRadius: 8,
          }}
        >
          {property.tag}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: 18,
          right: 12,
          background: "rgba(10,31,5,0.8)",
          backdropFilter: "blur(8px)",
          color: "#fff",
          fontSize: 11,
          fontFamily: "Jost, sans-serif",
          fontWeight: 600,
          padding: "5px 12px",
          borderRadius: 9,
        }}
      >
        {property.price}
      </div>
    </div>
    <div style={{ padding: "16px 20px 20px" }}>
      <div
        style={{
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: COLORS.textMuted,
          fontFamily: "Jost, sans-serif",
          marginBottom: 4,
        }}
      >
        {property.type}
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 19,
          fontWeight: 500,
          color: COLORS.dark,
          marginBottom: 4,
        }}
      >
        {property.title}
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginBottom: 12,
        }}
      >
        <MapPin size={11} color={COLORS.textMuted} />
        <span
          style={{
            fontSize: 12,
            color: COLORS.textLight,
            fontFamily: "Jost, sans-serif",
          }}
        >
          {property.location}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
          paddingTop: 12,
          borderTop: `1px solid ${COLORS.borderLight}`,
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: COLORS.textLight,
            fontFamily: "Jost, sans-serif",
          }}
        >
          {property.beds} Beds
        </span>
        <span style={{ fontSize: 12, color: COLORS.textMuted }}>·</span>
        <span
          style={{
            fontSize: 12,
            color: COLORS.textLight,
            fontFamily: "Jost, sans-serif",
          }}
        >
          {property.area}
        </span>
      </div>
    </div>
  </motion.div>
);

const LuxuryProperties = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? PROPERTIES : PROPERTIES.filter((p) => p.type === active);
  const cols = isMobile ? 1 : isTablet ? 2 : 3;
  return (
    <section
      style={{
        padding: isMobile ? "64px 0" : "112px 0",
        background: COLORS.bg,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            marginBottom: 28,
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 12 : 0,
          }}
        >
          <div>
            <SectionLabel>Properties</SectionLabel>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile
                  ? "clamp(26px, 7vw, 40px)"
                  : "clamp(36px, 5vw, 52px)",
                fontWeight: 550,
                color: COLORS.dark,
                lineHeight: 1.1,
              }}
            >
              FEATURED LISTINGS
            </h2>
          </div>
          <Link
            to="/properties"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: COLORS.dark,
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              textDecoration: "none",
              borderBottom: `1.5px solid ${COLORS.green}`,
              paddingBottom: 3,
            }}
          >
            View All <ArrowRight size={12} />
          </Link>
        </div>
        <div
          className="hide-scrollbar"
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 28,
            overflowX: "auto",
            paddingBottom: 4,
          }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: "9px 16px",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "Jost, sans-serif",
                fontWeight: 500,
                cursor: "pointer",
                border: active === f ? "none" : `1.5px solid ${COLORS.border}`,
                borderRadius: 10,
                background: active === f ? COLORS.green : "transparent",
                color: active === f ? "#fff" : COLORS.textLight,
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: isMobile ? 16 : 24,
          }}
        >
          {filtered.map((prop, i) => (
            <PropertyCard key={prop.id} property={prop} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SERVICES ─────────────────────────────────────────────────────
const Services = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? 1 : isTablet ? 2 : 4;
  return (
    <section
      style={{
        padding: isMobile ? "64px 0" : "112px 0",
        background: COLORS.greenDeep,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(to right, transparent, ${COLORS.green}55, transparent)`,
        }}
      />
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 40px",
        }}
      >
        <div style={{ marginBottom: 40 }}>
          <SectionLabel light>What We Offer</SectionLabel>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile
                ? "clamp(26px, 7vw, 40px)"
                : "clamp(36px, 5vw, 52px)",
              fontWeight: 600,
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            OUR CORE SERVICES
          </h2>
        </div>
        <Link to="/services">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: 14,
            }}
          >
            {SERVICES.map((srv, i) => (
              <motion.div
                key={srv.title}
                className="srv-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  position: "relative",
                  height: isMobile ? 280 : isTablet ? 360 : 420,
                  borderRadius: "50px 0px 50px 0px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  className="srv-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(10,31,5,0.92) 0%, rgba(10,31,5,0.2) 60%, transparent 100%)",
                    transition: "background 0.4s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 40,
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.08)",
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: isMobile ? 16 : 20,
                  }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: COLORS.green,
                      fontFamily: "Jost, sans-serif",
                      marginBottom: 4,
                    }}
                  >
                    {srv.subtitle}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: isMobile ? 20 : 22,
                      fontWeight: 500,
                      color: "#fff",
                      marginBottom: 6,
                    }}
                  >
                    {srv.title}
                  </h3>
                  <p
                    className="srv-desc"
                    style={{
                      fontSize: 12,
                      fontFamily: "Jost, sans-serif",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.7,
                      marginBottom: 8,
                    }}
                  >
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
};

// ─── FEATURES ─────────────────────────────────────────────────────
const Features = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? 1 : isTablet ? 2 : 3;
  return (
    <section
      style={{
        padding: isMobile ? "64px 0" : "112px 0",
        background: COLORS.bgAlt,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 40px",
        }}
      >
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile
                ? "clamp(26px, 7vw, 40px)"
                : "clamp(36px, 5vw, 52px)",
              fontWeight: 900,
              color: COLORS.dark,
              lineHeight: 1.1,
            }}
          >
            THE ARYAN PROPERTIES{" "}
            <span style={{ color: COLORS.green }}>ADVANTAGE</span>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: isMobile ? 14 : 20,
          }}
        >
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              className="feat-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                padding: isMobile ? "24px 20px" : "32px 28px",
                borderRadius: "50px 0px 50px 0px",
                background: i % 2 === 1 ? COLORS.greenDeep : COLORS.bg,
                border: `1px solid ${i % 2 === 1 ? "rgba(93,143,68,0.2)" : COLORS.borderLight}`,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(93,143,68,0.12)",
                  border: "1px solid rgba(93,143,68,0.25)",
                  marginBottom: 16,
                }}
              >
                <feat.icon size={18} color={COLORS.green} />
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 20,
                  fontWeight: 500,
                  color: i % 2 === 1 ? "#fff" : COLORS.dark,
                  marginBottom: 8,
                }}
              >
                {feat.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color:
                    i % 2 === 1 ? "rgba(255,255,255,0.55)" : COLORS.textLight,
                }}
              >
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── WHY INVEST ───────────────────────────────────────────────────
const WhyInvest = () => {
  const { isMobile } = useBreakpoint();
  const cols = isMobile ? 1 : 3;
  return (
    <section
      style={{
        position: "relative",
        padding: isMobile ? "64px 0" : "112px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src={IMAGES.invest}
          alt="Investment"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,31,5,0.90)",
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 40px",
        }}
      >
        <div style={{ marginBottom: 40 }}>
          <SectionLabel light>Investment Opportunity</SectionLabel>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile
                ? "clamp(26px, 7vw, 40px)"
                : "clamp(36px, 5vw, 52px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            INVEST IN <br />
            <span style={{ color: COLORS.green }}>NOIDA REAL ESTATE</span>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: isMobile ? 14 : 18,
          }}
        >
          {INVESTMENTS.map((inv, i) => (
            <motion.div
              key={inv.title}
              className="inv-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                border: "1px solid rgba(93,143,68,0.2)",
                borderRadius: "50px 0px 50px 0px",
                padding: isMobile ? "24px 20px" : "32px 28px",
                backdropFilter: "blur(8px)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "rgba(93,143,68,0.15)",
                  border: "1px solid rgba(93,143,68,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <inv.icon size={17} color={COLORS.green} />
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#fff",
                  marginBottom: 16,
                }}
              >
                {inv.title}
              </h3>
              <div style={{ marginBottom: 12 }}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: isMobile ? 30 : 38,
                    fontWeight: 300,
                    color: COLORS.green,
                    lineHeight: 1,
                  }}
                >
                  {inv.stat}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "Jost, sans-serif",
                    marginTop: 5,
                  }}
                >
                  {inv.statLabel}
                </div>
              </div>
              <p
                style={{
                  fontSize: 13,
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                }}
              >
                {inv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── GALLERY ──────────────────────────────────────────────────────
const Gallery = () => {
  const { isMobile, isTablet } = useBreakpoint();
  return (
    <section
      style={{
        padding: isMobile ? "64px 0" : "112px 0",
        background: COLORS.bgAlt,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            marginBottom: 32,
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 10 : 0,
          }}
        >
          <div>
            <SectionLabel>Visual Tour</SectionLabel>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile
                  ? "clamp(26px, 7vw, 40px)"
                  : "clamp(36px, 5vw, 52px)",
                fontWeight: 900,
                color: COLORS.dark,
                lineHeight: 1.1,
              }}
            >
              EXPLORE OUR
              <br />
              <span style={{ color: COLORS.green }}>PROPERTIES</span>
            </h2>
          </div>
          <Link
            to="/gallery"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: COLORS.dark,
              fontFamily: "Jost, sans-serif",
              fontWeight: 500,
              textDecoration: "none",
              borderBottom: `1.5px solid ${COLORS.green}`,
              paddingBottom: 3,
            }}
          >
            Full Gallery <ArrowRight size={12} />
          </Link>
        </div>
        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                className="gal-item"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  position: "relative",
                  borderRadius: 14,
                  overflow: "hidden",
                  cursor: "pointer",
                  height: 200,
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  className="gal-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(10,31,5,0.55)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ZoomIn
                    size={22}
                    color={COLORS.green}
                    style={{ marginBottom: 8 }}
                  />
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 10,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      fontFamily: "Jost, sans-serif",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : isTablet ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              gridAutoRows: "200px",
            }}
          >
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                className="gal-item"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  position: "relative",
                  borderRadius: 14,
                  overflow: "hidden",
                  cursor: "pointer",
                  gridColumn: item.span === "col-span-2" ? "span 2" : "span 1",
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  className="gal-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(10,31,5,0.55)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ZoomIn
                    size={22}
                    color={COLORS.green}
                    style={{ marginBottom: 8 }}
                  />
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 10,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      fontFamily: "Jost, sans-serif",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridAutoRows: "200px",
              gap: 14,
            }}
          >
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                className="gal-item"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  position: "relative",
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                  gridRow: item.span === "row-span-2" ? "span 2" : "span 1",
                  gridColumn: item.span === "col-span-2" ? "span 2" : "span 1",
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  className="gal-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(10,31,5,0.55)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ZoomIn
                    size={22}
                    color={COLORS.green}
                    style={{ marginBottom: 8 }}
                  />
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 10,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      fontFamily: "Jost, sans-serif",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// ─── TESTIMONIALS ─────────────────────────────────────────────────
const Testimonials = () => {
  const { isMobile } = useBreakpoint();
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[current];
  return (
    <section
      style={{
        padding: isMobile ? "64px 0" : "112px 0",
        background: COLORS.bg,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 40px",
        }}
      >
        <div style={{ marginBottom: 40 }}>
          <SectionLabel>Client Stories</SectionLabel>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile
                ? "clamp(26px, 7vw, 40px)"
                : "clamp(36px, 5vw, 52px)",
              fontWeight: 900,
              color: COLORS.dark,
              lineHeight: 1.1,
            }}
          >
            WORDS FROM OUR
            <br />
            <span style={{ color: COLORS.green }}>HAPPY CLIENTS</span>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: isMobile ? 24 : 64,
            alignItems: "center",
            maxWidth: 1080,
            margin: "0 auto",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ position: "relative", flexShrink: 0 }}
          >
            <div
              style={{
                width: isMobile ? 120 : 192,
                height: isMobile ? 144 : 224,
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <img
                src={t.image}
                alt={t.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -10,
                right: -10,
                width: "100%",
                height: "100%",
                borderRadius: 20,
                border: `1.5px solid ${COLORS.border}`,
              }}
            />
          </motion.div>
          <div style={{ flex: 1, width: "100%" }}>
            <Quote
              size={28}
              color={`${COLORS.green}44`}
              style={{ marginBottom: 10 }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: isMobile ? 15 : 20,
                    fontWeight: 300,
                    color: COLORS.dark,
                    lineHeight: 1.6,
                    marginBottom: 18,
                  }}
                >
                  "{t.text}"
                </p>
                <div style={{ display: "flex", gap: 3, marginBottom: 8 }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={COLORS.green}
                      color={COLORS.green}
                    />
                  ))}
                </div>
                <div
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 500,
                    fontSize: 13,
                    color: COLORS.dark,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: COLORS.textMuted,
                    fontFamily: "Jost, sans-serif",
                    marginTop: 3,
                  }}
                >
                  {t.role}
                </div>
              </motion.div>
            </AnimatePresence>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 22,
              }}
            >
              <button
                onClick={prev}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  border: `1.5px solid ${COLORS.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                <ChevronLeft size={14} color={COLORS.textLight} />
              </button>
              <div style={{ display: "flex", gap: 7 }}>
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    style={{
                      height: 4,
                      width: i === current ? 26 : 14,
                      borderRadius: 4,
                      background: i === current ? COLORS.green : COLORS.border,
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>
              <button
                onClick={next}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  border: `1.5px solid ${COLORS.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                <ChevronRight size={14} color={COLORS.textLight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── CTA ──────────────────────────────────────────────────────────
const CTA = () => {
  const { isMobile } = useBreakpoint();
  return (
    <section
      style={{
        position: "relative",
        padding: isMobile ? "56px 16px" : "30px 40px",
        overflow: "hidden",
        borderRadius: isMobile ? 14 : 20,
        margin: isMobile ? "12px 12px" : "20px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: isMobile ? 360 : "auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${IMAGES.house3}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "inherit",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,31,5,0.55) 5%, rgba(10,31,5,0.92) 100%)",
          borderRadius: "inherit",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 580,
          margin: "0 auto",
          width: "100%",
          padding: "0 4px",
        }}
      >
        <p
          style={{
            fontSize: 9,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: `${COLORS.green}CC`,
            fontFamily: "Jost, sans-serif",
            marginBottom: 14,
          }}
        >
          Begin Your Journey
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile
              ? "clamp(26px, 8vw, 44px)"
              : "clamp(36px, 5.5vw, 62px)",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1.08,
            marginBottom: 14,
            letterSpacing: "-0.01em",
          }}
        >
          FIND YOUR PERFECT{" "}
          <span style={{ color: COLORS.green }}>PROPERTY</span> Today
        </h2>
        <div
          style={{
            width: 60,
            height: 3,
            background: `${COLORS.green}88`,
            margin: "0 auto 20px",
          }}
        />
        <p
          style={{
            fontSize: 13,
            fontFamily: "Jost, sans-serif",
            fontWeight: 300,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 420,
            margin: "0 auto 28px",
            lineHeight: 1.8,
          }}
        >
          Explore verified properties across Noida and Greater Noida. Buy, sell,
          rent or book — we handle it all.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <Link to="/properties">
            <button
              style={{
                background: COLORS.green,
                color: "#fff",
                border: "none",
                borderRadius: 2,
                padding: "13px 28px",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontFamily: "Jost, sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              Explore Properties <ArrowRight size={12} />
            </button>
          </Link>
          <Link to="/contact">
            <button
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.45)",
                borderRadius: 2,
                padding: "13px 28px",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontFamily: "Jost, sans-serif",
                fontWeight: 400,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              <Calendar size={12} /> Call to Visit
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

// ─── CONTACT ──────────────────────────────────────────────────────
const Contact = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const isSmall = isMobile || isTablet;
  return (
    <section
      style={{
        padding: isMobile ? "64px 0" : "112px 0",
        background: COLORS.bgAlt,
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
            gap: isMobile ? 40 : 80,
          }}
        >
          <div>
            <SectionLabel>Get In Touch</SectionLabel>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile
                  ? "clamp(26px, 7vw, 40px)"
                  : "clamp(36px, 5vw, 52px)",
                fontWeight: 900,
                color: COLORS.dark,
                lineHeight: 1.1,
                marginBottom: 12,
              }}
            >
              LET'S FIND YOUR <br />
              <span style={{ color: COLORS.green }}>Perfect Property</span>
            </h2>
            <p
              style={{
                fontSize: isMobile ? 14 : 18,
                fontFamily: "Jost, sans-serif",
                fontWeight: 300,
                color: COLORS.textLight,
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              Our team is available 7 days a week. Walk in, call, or send us a
              message — we respond fast.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                { icon: Phone, label: "Phone", val: "099534 44307" },
                { icon: Mail, label: "Email", val: "info@aryanproperties.com" },
                {
                  icon: MapPin,
                  label: "Office",
                  val: "Shop No-16, VDS Market, Sector 110, Noida, Uttar Pradesh 201304",
                },
              ].map(({ icon: Icon, label, val }) => (
                <div
                  key={label}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 11,
                      border: `1.5px solid ${COLORS.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background: COLORS.bg,
                    }}
                  >
                    <Icon size={14} color={COLORS.textLight} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: COLORS.textMuted,
                        fontFamily: "Jost, sans-serif",
                        marginBottom: 2,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: COLORS.dark,
                        fontFamily: "Jost, sans-serif",
                      }}
                    >
                      {val}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: isSmall ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: COLORS.bg,
              borderRadius: 20,
              border: `1px solid ${COLORS.borderLight}`,
              padding: isMobile ? 20 : 36,
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                fontWeight: 500,
                color: COLORS.dark,
                marginBottom: 22,
              }}
            >
              Send an Enquiry
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginBottom: 10,
              }}
            >
              {["Full Name", "Phone Number"].map((ph) => (
                <input
                  key={ph}
                  type="text"
                  placeholder={ph}
                  style={{
                    border: `1.5px solid ${COLORS.border}`,
                    borderRadius: 11,
                    padding: "12px 13px",
                    fontSize: 12,
                    color: COLORS.dark,
                    fontFamily: "Jost, sans-serif",
                    background: "#fff",
                    outline: "none",
                    width: "100%",
                    minWidth: 0,
                  }}
                />
              ))}
            </div>
            <input
              type="email"
              placeholder="Email Address"
              style={{
                border: `1.5px solid ${COLORS.border}`,
                borderRadius: 11,
                padding: "12px 13px",
                fontSize: 12,
                color: COLORS.dark,
                fontFamily: "Jost, sans-serif",
                background: "#fff",
                outline: "none",
                width: "100%",
                display: "block",
                marginBottom: 10,
              }}
            />
            <select
              style={{
                border: `1.5px solid ${COLORS.border}`,
                borderRadius: 11,
                padding: "12px 13px",
                fontSize: 12,
                color: COLORS.textLight,
                fontFamily: "Jost, sans-serif",
                background: "#fff",
                width: "100%",
                display: "block",
                marginBottom: 10,
              }}
            >
              <option>I'm looking to...</option>
              <option>Buy a Property</option>
              <option>Sell My Property</option>
              <option>Rent a Property</option>
              <option>Book New Project</option>
            </select>
            <textarea
              placeholder="Tell us about your requirements..."
              rows={isMobile ? 3 : 4}
              style={{
                border: `1.5px solid ${COLORS.border}`,
                borderRadius: 11,
                padding: "12px 13px",
                fontSize: 12,
                color: COLORS.dark,
                fontFamily: "Jost, sans-serif",
                background: "#fff",
                outline: "none",
                width: "100%",
                resize: "none",
                display: "block",
                marginBottom: 18,
              }}
            />
            <button
              style={{
                width: "100%",
                background: COLORS.green,
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "14px",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "Jost, sans-serif",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
              }}
            >
              Submit Enquiry <ArrowRight size={13} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── APP ──────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ fontFamily: "Jost, sans-serif", background: COLORS.bg }}>
      <GlobalStyles />
      <Hero />
      <About />
      <LuxuryProperties />
      <Services />
      <Features />
      <WhyInvest />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
}
