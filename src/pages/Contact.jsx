import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, ArrowRight,
  Shield, Star, Home, TrendingUp, Award, Users,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ─── Google Fonts import ───────────────────────────────────────── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .cg { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-style: normal; }
    .jost { font-family: 'Jost', sans-serif; }

    @keyframes heroZoom {
      from { transform: scale(1.0); }
      to   { transform: scale(1.07); }
    }

    .green-line {
      display: inline-block;
      width: 40px; height: 1px;
      background: #5d8f44;
      vertical-align: middle;
      flex-shrink: 0;
    }
    .label-tag {
      font-family: 'Jost', sans-serif;
      font-size: 9px;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: #5d8f44;
    }
    input, select, textarea {
      font-family: 'Jost', sans-serif;
      outline: none;
    }
    input::placeholder, textarea::placeholder { color: rgba(45,55,72,0.38); }

    .form-field {
      width: 100%;
      background: #fff;
      border: 1px solid rgba(45,55,72,0.12);
      padding: 14px 18px;
      font-size: 13px;
      color: #1A202C;
      transition: border-color 0.25s;
    }
    .form-field:focus { border-color: rgba(93,143,68,0.7); }
    select.form-field { color: rgba(45,55,72,0.55); appearance: none; cursor: pointer; }

    .why-card:hover { border-color: rgba(93,143,68,0.55); transform: translateY(-3px); box-shadow: 0 20px 60px rgba(0,0,0,0.07); }
    .prop-card:hover .prop-img { transform: scale(1.06); }
    .submit-btn:hover { background: #4a7235 !important; }
    .submit-btn:hover .arrow-icon { transform: translateX(4px); }
    .arrow-icon { transition: transform 0.25s; }

    .loc-card-dark { background: #1A202C; border-color: rgba(93,143,68,0.35); }
    .loc-card-light { background: #fff; border-color: rgba(93,143,68,0.18); }

    .testi-card:hover { border-color: rgba(93,143,68,0.5); }

    /* ── Responsive breakpoints ── */

    @media (max-width: 767px) {
      .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
      .stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(93,143,68,0.12); }
      .stats-grid > div:nth-child(odd) { border-right: 1px solid rgba(93,143,68,0.12) !important; }
      .stats-grid > div:last-child { border-bottom: none; }
    }

    @media (max-width: 767px) {
      .hero-content { padding: 0 20px !important; }
      .hero-btns { flex-direction: column !important; gap: 10px !important; }
      .hero-btns button { width: 100%; justify-content: center; }
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      .hero-content { padding: 0 40px !important; }
    }

    @media (max-width: 767px) {
      .section-pad { padding: 60px 0 !important; }
      .section-inner { padding: 0 20px !important; }
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      .section-pad { padding: 70px 0 !important; }
      .section-inner { padding: 0 36px !important; }
    }

    @media (max-width: 767px) {
      .why-cards-grid { grid-template-columns: 1fr !important; }
      .why-outer-grid { grid-template-columns: 1fr !important; }
      .why-image-stack { display: none !important; }
      .why-header-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      .why-outer-grid { grid-template-columns: 1fr !important; }
      .why-image-stack { display: none !important; }
      .why-header-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
    }

    @media (max-width: 767px) {
      .locations-grid { grid-template-columns: 1fr !important; }
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      .locations-grid { grid-template-columns: 1fr 1fr !important; }
    }

    @media (max-width: 767px) {
      .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      .form-box { padding: 28px 20px !important; }
      .form-2col { grid-template-columns: 1fr !important; }
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      .form-box { padding: 36px 32px !important; }
    }
    @media (max-width: 767px) {
      .loc-single-grid { grid-template-columns: 1fr !important; }
      .loc-single-grid iframe { min-height: 280px !important; }
    }

    @media (max-width: 767px) {
      .map-wrap { height: 260px !important; }
    }

    iframe { max-width: 100%; }
  `}</style>
);

/* ─── Images ────────────────────────────────────────────────────── */
const IMG = {
  hero:     "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=85",
  villa1:   "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
  farm1:    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=85",
  farm2:    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=85",
  villa2:   "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=900&q=85",
  interior: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85",
  team:     "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=85",
};

/* ─── Data ──────────────────────────────────────────────────────── */
const STATS = [
  { val: "350+",       lab: "Properties Sold" },
  { val: "₹2,400Cr+", lab: "Transactions Closed" },
  { val: "15+",        lab: "Years of Expertise" },
  { val: "98%",        lab: "Client Satisfaction" },
];

const WHY = [
  { icon: Shield,     title: "Verified Properties",             body: "Every listing undergoes rigorous title-clearance and legal verification before it reaches you." },
  { icon: Award,      title: "Award-Winning Portfolio",         body: "Recognised as NCR's premier luxury real-estate brand for three consecutive years." },
  { icon: TrendingUp, title: "Strong ROI Track Record",         body: "Our farmhouse developments have delivered 18–24% capital appreciation over five years." },
  { icon: Users,      title: "Dedicated Relationship Managers", body: "One trusted advisor guides you from site visit to registration and beyond." },
];

/* ─── Animation helper ──────────────────────────────────────────── */
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ═══════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════ */
export default function Contact() {
  return (
    <>
      <FontLink />
      <div className="jost" style={{ fontFamily: "'Jost', sans-serif" }}>

        {/* ══ HERO ═════════════════════════════════════════════════ */}
        <section style={{ position: "relative", height: "80vh", minHeight: 480, overflow: "hidden", display: "flex", alignItems: "center" }}>
          <img
            src={IMG.hero} alt="Luxury villa"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
              animation: "heroZoom 18s ease-in-out infinite alternate" }}
          />
          <div style={{ position: "absolute", inset: 0,
            background: "linear-gradient(105deg, rgba(26,32,44,0.95) 0%, rgba(26,32,44,0.75) 50%, rgba(26,32,44,0.3) 100%)" }} />
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "#5d8f44" }} />

          <div className="hero-content" style={{ position: "relative", zIndex: 10, maxWidth: 1380, margin: "0 auto", padding: "0 64px", width: "100%" }}>
            <motion.div {...up(0.1)}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span className="green-line" />
                <span className="label-tag">Luxury Real Estate · NCR India</span>
              </div>
              <h1 className="cg" style={{ fontSize: "clamp(38px,7vw,96px)", color: "#fff", lineHeight: 1.05, marginBottom: 28, letterSpacing: "-0.5px" }}>
                CONTACT<br />
                <span style={{ color: "#5d8f44" }}>WALORA Group</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 420, fontSize: 14, lineHeight: 1.8, marginBottom: 40 }}>
                Whether you seek a private farmhouse retreat or a prestigious villa in the NCR,
                our advisory team is ready to guide every step of your journey.
              </p>
              <div className="hero-btns" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link to="/about">
                  <button className="submit-btn"
                    style={{ background: "#5d8f44", color: "#fff", padding: "14px 32px", border: "none",
                      fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "'Jost',sans-serif",
                      fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                    Visit Us <ArrowRight size={12} className="arrow-icon" />
                  </button>
                </Link>
                <Link to="/properties">
                  <button style={{ background: "transparent", color: "#fff", padding: "14px 32px",
                    border: "1px solid rgba(255,255,255,0.25)", fontSize: 10, letterSpacing: "0.25em",
                    textTransform: "uppercase", fontFamily: "'Jost',sans-serif", fontWeight: 500, cursor: "pointer" }}>
                    View Properties
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
            background: "linear-gradient(to top, #1A202C, transparent)" }} />
        </section>

        {/* ══ STATS ════════════════════════════════════════════════ */}
        <section style={{ background: "#1A202C", borderTop: "1px solid rgba(93,143,68,0.15)", borderBottom: "1px solid rgba(93,143,68,0.15)" }}>
          <div className="section-inner" style={{ maxWidth: 1380, margin: "0 auto", padding: "0 64px" }}>
            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
              {STATS.map(({ val, lab }, i) => (
                <motion.div key={lab} {...up(i * 0.08)}
                  style={{ padding: "36px 0", textAlign: "center",
                    borderRight: i < 3 ? "1px solid rgba(93,143,68,0.12)" : "none" }}>
                  <p className="cg" style={{ fontSize: "clamp(28px,4vw,40px)", color: "#5d8f44", lineHeight: 1 }}>{val}</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 8 }}>{lab}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ LOCATIONS ════════════════════════════════════════════ */}
        <section className="section-pad" style={{ background: "#fff", padding: "100px 0" }}>
          <div className="section-inner" style={{ maxWidth: 1380, margin: "0 auto", padding: "0 64px" }}>
            <motion.div {...up()} style={{ marginBottom: 52 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <span className="green-line" />
                <span className="label-tag">Our Office</span>
              </div>
              <h2 className="cg" style={{ fontSize: "clamp(28px,4vw,54px)", color: "#1A202C" }}>
                WHERE TO FIND US
              </h2>
            </motion.div>

            <motion.div {...up(0.1)} style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              border: "1px solid rgba(93,143,68,0.25)",
              overflow: "hidden",
              minHeight: 420,
            }}
            className="loc-single-grid">

              {/* Info card */}
              <div style={{
                background: "#1A202C",
                padding: "44px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 28,
              }}>
                <span style={{
                  fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase",
                  color: "#5d8f44", background: "rgba(93,143,68,0.12)",
                  padding: "4px 10px", display: "inline-block", alignSelf: "flex-start"
                }}>
                  Head Office
                </span>

                <h3 className="cg" style={{ fontSize: "clamp(20px,2vw,26px)", color: "#fff", lineHeight: 1.3 }}>
                  Greater Noida
                </h3>

                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 36, height: 36, border: "1px solid rgba(93,143,68,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    background: "rgba(93,143,68,0.08)", marginTop: 2
                  }}>
                    <MapPin size={13} color="#5d8f44" />
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.55)" }}>
                    Milak Lachchhi, Milak Lachhi,<br />
                    Greater Noida,<br />
                    Uttar Pradesh 203207, India
                  </p>
                </div>

                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 36, height: 36, border: "1px solid rgba(93,143,68,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    background: "rgba(93,143,68,0.08)"
                  }}>
                    <Clock size={13} color="#5d8f44" />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.55)" }}>Mon – Sat: 9:00 am – 6:00 pm</p>
                    <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.55)" }}>Sunday: By Appointment Only</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 36, height: 36, border: "1px solid rgba(93,143,68,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    background: "rgba(93,143,68,0.08)"
                  }}>
                    <Phone size={13} color="#5d8f44" />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.55)" }}>+91 9654005400</p>
                    <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.55)" }}>info@waloragroup.in</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div style={{ minHeight: 420, overflow: "hidden" }}>
                <iframe
                  title="Walora Estates — Greater Noida"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=Milak%20Lachchhi%2C%20Milak%20Lachhi%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20203207%2C%20India&maptype=roadmap&zoom=14"
                  width="100%" height="100%"
                  style={{ border: 0, display: "block", minHeight: 420, filter: "grayscale(15%) contrast(1.05)" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ CONTACT FORM + INFO ══════════════════════════════════ */}
        <section className="section-pad" style={{ background: "#F4F7F4", padding: "100px 0" }}>
          <div className="section-inner" style={{ maxWidth: 1380, margin: "0 auto", padding: "0 64px" }}>

            <motion.div {...up()} style={{ marginBottom: 60 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <span className="green-line" />
                <span className="label-tag">Get In Touch</span>
              </div>
              <h2 className="cg" style={{ fontSize: "clamp(28px,4vw,58px)", color: "#1A202C", letterSpacing: "-0.3px" }}>
                START A CONVERSATION
              </h2>
            </motion.div>

            <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 56, alignItems: "start" }}>

              {/* ── Info Column ── */}
              <motion.div {...up(0.1)}>
                {[
                  { icon: Mail,   label: "Email",         lines: ["info@waloragroup.in"] },
                  { icon: MapPin, label: "Head Office",   lines: ["Milak Lachchhi, Milak Lachhi, Greater Noida,", "Uttar Pradesh 203207, India"] },
                  { icon: Clock,  label: "Working Hours", lines: ["Mon – Sat: 9:00 am – 6:00 pm", "Sunday: By Appointment Only"] },
                ].map(({ icon: Icon, label, lines }) => (
                  <div key={label} style={{ display: "flex", gap: 20, marginBottom: 36 }}>
                    <div style={{ width: 48, height: 48, border: "1px solid rgba(93,143,68,0.3)", background: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={15} color="#5d8f44" />
                    </div>
                    <div>
                      <p style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase",
                        color: "rgba(45,55,72,0.38)", marginBottom: 6 }}>{label}</p>
                      {lines.map(l => <p key={l} style={{ fontSize: 13, color: "#1A202C", lineHeight: 1.7 }}>{l}</p>)}
                    </div>
                  </div>
                ))}

                {/* Team image */}
                <div style={{ position: "relative", overflow: "hidden", height: 220, marginTop: 12 }}>
                  <img src={IMG.team} alt="Advisory team"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,32,44,0.88), transparent 50%)" }} />
                  <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <p className="cg" style={{ color: "#fff", fontSize: 22 }}>Our Advisory Team</p>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 4 }}>
                      Greater Noida · New Delhi · Noida
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ── Form ── */}
              <motion.div {...up(0.18)} className="form-box"
                style={{ background: "#fff", border: "1px solid rgba(93,143,68,0.22)", padding: "48px 44px" }}>
                <h3 className="cg" style={{ fontSize: "clamp(24px,3vw,32px)", color: "#1A202C", marginBottom: 8 }}>SEND US A MESSAGE</h3>
                <p style={{ fontSize: 12, color: "rgba(45,55,72,0.45)", marginBottom: 36, lineHeight: 1.7 }}>
                  Our team typically responds within 2 business hours.
                </p>

                <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  {[
                    { ph: "Full Name",         type: "text" },
                    { ph: "Email Address",     type: "email" },
                    { ph: "City / Location",   type: "text" },
                    { ph: "Budget (Optional)", type: "text" },
                  ].map(({ ph, type }) => (
                    <input key={ph} type={type} placeholder={ph} className="form-field" />
                  ))}
                </div>

                <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <select className="form-field">
                    <option value="">Purpose of Enquiry</option>
                    <option>Buy a Farmhouse</option>
                    <option>Buy a Villa</option>
                    <option>Rent a Property</option>
                    <option>Schedule a Site Visit</option>
                    <option>Investment Advisory</option>
                    <option>Turnkey / Custom Build</option>
                    <option>Partnership / Joint Venture</option>
                  </select>
                  <select className="form-field">
                    <option value="">Preferred Location</option>
                    <option>Chattarpur, South Delhi</option>
                    <option>Golf Course Road, Gurugram</option>
                    <option>Sohna, Haryana</option>
                    <option>Faridabad, Haryana</option>
                    <option>Noida Expressway, UP</option>
                    <option>Jim Corbett / Uttarakhand</option>
                    <option>Open to Suggestions</option>
                  </select>
                </div>

                <textarea
                  rows={5} placeholder="Tell us about your ideal property — size, style, must-haves..."
                  className="form-field"
                  style={{ resize: "none", marginBottom: 28, display: "block" }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                  <button className="submit-btn"
                    style={{ background: "#5d8f44", color: "#fff", border: "none", padding: "15px 36px",
                      fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
                      fontFamily: "'Jost',sans-serif", fontWeight: 700, cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 8 }}>
                    Submit Message <ArrowRight size={12} className="arrow-icon" />
                  </button>
                  <p style={{ fontSize: 10, color: "rgba(45,55,72,0.38)", letterSpacing: "0.04em" }}>
                    Your information is kept strictly confidential.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ WHY CHOOSE US ════════════════════════════════════════ */}
        <section className="section-pad" style={{ background: "#F4F7F4", padding: "100px 0" }}>
          <div className="section-inner" style={{ maxWidth: 1380, margin: "0 auto", padding: "0 64px" }}>

            <div className="why-header-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 64 }}>
              <motion.div {...up()}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span className="green-line" />
                  <span className="label-tag">Why Walora</span>
                </div>
                <h2 className="cg" style={{ fontSize: "clamp(28px,4vw,58px)", color: "#1A202C", lineHeight: 1.1, letterSpacing: "-0.3px" }}>
                  WHY DISCERNING<br />BUYERS CHOOSE US
                </h2>
              </motion.div>
              <motion.p {...up(0.12)} style={{ color: "rgba(45,55,72,0.6)", fontSize: 14, lineHeight: 1.9, alignSelf: "end" }}>
                Two decades of curating India's finest farmhouses and villas means we know exactly
                what makes a property a true legacy asset — and how to secure it for you.
              </motion.p>
            </div>

            <div className="why-outer-grid" style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 24 }}>
              <div className="why-cards-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {WHY.map(({ icon: Icon, title, body }, i) => (
                  <motion.div key={title} {...up(i * 0.07)}
                    className="why-card"
                    style={{ background: "#fff", border: "1px solid rgba(93,143,68,0.18)", padding: "30px 30px",
                      borderTopLeftRadius: 0, borderTopRightRadius: 50, borderBottomLeftRadius: 50, borderBottomRightRadius: 0,
                      transition: "all 0.3s ease", cursor: "default" }}>
                    <div style={{ width: 44, height: 44, border: "1px solid rgba(93,143,68,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                      <Icon size={16} color="#5d8f44" />
                    </div>
                    <h3 className="cg" style={{ fontSize: "clamp(18px,2vw,22px)", color: "#1A202C", marginBottom: 10 }}>{title}</h3>
                    <p style={{ fontSize: 14, color: "rgba(45,55,72,0.6)", lineHeight: 1.75 }}>{body}</p>
                  </motion.div>
                ))}
              </div>

              {/* Image stack */}
              <motion.div {...up(0.15)} className="why-image-stack" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ position: "relative", overflow: "hidden", flex: 1, minHeight: 220 }}>
                  <img src={IMG.villa1} alt="Villa" style={{ width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.7s ease", display: "block" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
                    background: "linear-gradient(to top, rgba(26,32,44,0.85), transparent)", padding: "20px 20px 16px" }}>
                    <span style={{ color: "#5d8f44", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase" }}>Villa Collection</span>
                  </div>
                </div>
                <div style={{ position: "relative", overflow: "hidden", flex: 1, minHeight: 220 }}>
                  <img src={IMG.farm1} alt="Farmhouse" style={{ width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.7s ease", display: "block" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
                    background: "linear-gradient(to top, rgba(26,32,44,0.85), transparent)", padding: "20px 20px 16px" }}>
                    <span style={{ color: "#5d8f44", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase" }}>Farmhouse Estates</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}