import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, ArrowRight,
  Shield, TrendingUp, Award, Users,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ─── Google Fonts ──────────────────────────────────────────────── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    .cg  { font-family: 'Cormorant Garamond', serif; font-weight: 700; }
    .jost{ font-family: 'Jost', sans-serif; }

    @keyframes heroZoom {
      from { transform: scale(1.0); }
      to   { transform: scale(1.07); }
    }

    .green-line {
      display: inline-block; width: 40px; height: 1px;
      background: #5d8f44; vertical-align: middle; flex-shrink: 0;
    }
    .label-tag {
      font-family: 'Jost', sans-serif; font-size: 9px;
      letter-spacing: 0.28em; text-transform: uppercase; color: #5d8f44;
    }

    input, select, textarea { font-family: 'Jost', sans-serif; outline: none; }
    input::placeholder, textarea::placeholder { color: rgba(45,55,72,0.38); }

    .form-field {
      width: 100%; background: #fff;
      border: 1px solid rgba(45,55,72,0.12);
      padding: 14px 16px; font-size: 13px; color: #1A202C;
      transition: border-color 0.25s;
    }
    .form-field:focus { border-color: rgba(93,143,68,0.7); }
    select.form-field { color: rgba(45,55,72,0.55); appearance: none; cursor: pointer; }

    .why-card { transition: all 0.3s ease; cursor: default; }
    .why-card:hover { border-color: rgba(93,143,68,0.55) !important; transform: translateY(-3px); box-shadow: 0 20px 60px rgba(0,0,0,0.07); }

    .submit-btn { transition: background 0.2s; }
    .submit-btn:hover { background: #4a7235 !important; }
    .arrow-icon { transition: transform 0.25s; }
    .submit-btn:hover .arrow-icon { transform: translateX(4px); }

    /* ── base inner ── */
    .section-inner { max-width: 1380px; margin: 0 auto; padding: 0 64px; }
    .section-pad   { padding: 100px 0; }

    /* ── stats ── */
    .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); }

    /* ── location ── */
    .loc-grid { display: grid; grid-template-columns: 1fr 2fr; min-height: 420px; border: 1px solid rgba(93,143,68,0.25); overflow: hidden; }
    .loc-map  { min-height: 420px; overflow: hidden; }
    .loc-map iframe { width: 100%; height: 100%; min-height: 420px; border: 0; display: block; filter: grayscale(15%) contrast(1.05); }

    /* ── contact ── */
    .contact-grid { display: grid; grid-template-columns: 2fr 3fr; gap: 56px; align-items: start; }
    .form-box     { background: #fff; border: 1px solid rgba(93,143,68,0.22); padding: 48px 44px; }
    .form-2col    { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }

    /* ── why ── */
    .why-header-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: end; margin-bottom: 64px; }
    .why-outer-grid   { display: grid; grid-template-columns: 3fr 2fr; gap: 24px; }
    .why-cards-grid   { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

    /* hero btns */
    .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

    /* ════════════════════════════════
       TABLET  768 – 1023
    ════════════════════════════════ */
    @media (max-width: 1023px) {
      .section-inner { padding: 0 36px; }
      .section-pad   { padding: 72px 0; }

      .contact-grid  { grid-template-columns: 1fr; gap: 40px; }
      .form-box      { padding: 36px 32px; }

      .why-outer-grid  { grid-template-columns: 1fr; }
      .why-image-stack { display: none !important; }
      .why-header-grid { grid-template-columns: 1fr; gap: 20px; }

      .loc-grid { grid-template-columns: 1fr; }
      .loc-map  { min-height: 300px; }
      .loc-map iframe { min-height: 300px; }
    }

    /* ════════════════════════════════
       MOBILE  < 640
    ════════════════════════════════ */
    @media (max-width: 639px) {
      .section-inner { padding: 0 16px; }
      .section-pad   { padding: 52px 0; }

      .hero-content  { padding: 0 16px !important; }
      .hero-btns     { flex-direction: column; gap: 10px; }
      .hero-btns a, .hero-btns button { width: 100%; justify-content: center; }

      /* stats → 2 col */
      .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
      .stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(93,143,68,0.12) !important; }
      .stats-grid > div:nth-child(odd)  { border-right: 1px solid rgba(93,143,68,0.12) !important; }
      .stats-grid > div:last-child      { border-bottom: none !important; }

      /* form single col */
      .form-2col { grid-template-columns: 1fr !important; }
      .form-box  { padding: 24px 16px !important; }

      /* why cards single col */
      .why-cards-grid  { grid-template-columns: 1fr !important; }
      .why-header-grid { grid-template-columns: 1fr !important; gap: 14px !important; margin-bottom: 36px !important; }

      /* location card */
      .loc-grid { grid-template-columns: 1fr !important; }
      .loc-map  { min-height: 240px !important; }
      .loc-map iframe { min-height: 240px !important; }
      .loc-info-card  { padding: 28px 20px !important; }

      /* contact info row */
      .contact-info-item { gap: 12px !important; margin-bottom: 24px !important; }
      .contact-icon-sq   { width: 38px !important; height: 38px !important; }

      /* team image */
      .team-img { height: 180px !important; }

      iframe { max-width: 100%; }
    }

    /* ════════════════════════════════
       VERY SMALL  < 380
    ════════════════════════════════ */
    @media (max-width: 379px) {
      .section-inner { padding: 0 12px; }
    }
  `}</style>
);

/* ─── Images ────────────────────────────────────────────────────── */
const IMG = {
  hero:  "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=85",
  villa1:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
  farm1: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=85",
  team:  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=85",
};

const STATS = [
  { val: "1000+",     lab: "Properties Sold" },
  { val: "₹500Cr+",  lab: "Transactions Closed" },
  { val: "14+",       lab: "Years of Expertise" },
  { val: "98%",       lab: "Client Satisfaction" },
];

const WHY = [
  { icon: Shield,     title: "Verified Properties",             body: "Every listing undergoes rigorous title-clearance and legal verification before it reaches you." },
  { icon: Award,      title: "Award-Winning Portfolio",         body: "Recognised as NCR's premier real-estate brand, serving Noida & Greater Noida for over 14 years." },
  { icon: TrendingUp, title: "Strong ROI Track Record",         body: "Our residential developments have delivered consistent capital appreciation across Noida corridors." },
  { icon: Users,      title: "Dedicated Relationship Managers", body: "One trusted advisor guides you from site visit to registration and beyond — no handoffs." },
];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

const iconBox = {
  width: 36, height: 36, border: "1px solid rgba(93,143,68,0.3)",
  display: "flex", alignItems: "center", justifyContent: "center",
  flexShrink: 0, background: "rgba(93,143,68,0.08)", marginTop: 2,
};

/* ═══════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════ */
export default function Contact() {
  return (
    <>
      <FontLink />
      <div className="jost">

        {/* ══ HERO ═════════════════════════════════════════════════ */}
        <section style={{ position: "relative", height: "80vh", minHeight: 460, overflow: "hidden", display: "flex", alignItems: "center" }}>
          <img src={IMG.hero} alt="Luxury property"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
              animation: "heroZoom 18s ease-in-out infinite alternate" }} />
          <div style={{ position: "absolute", inset: 0,
            background: "linear-gradient(105deg,rgba(26,32,44,0.95) 0%,rgba(26,32,44,0.75) 50%,rgba(26,32,44,0.3) 100%)" }} />
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "#5d8f44" }} />

          <div className="hero-content section-inner"
            style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 64px" }}>
            <motion.div {...up(0.1)}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span className="green-line" />
                <span className="label-tag">Noida's Trusted Real Estate Partner</span>
              </div>
              <h1 className="cg" style={{ fontSize: "clamp(32px,6vw,82px)", color: "#fff", lineHeight: 1.05, marginBottom: 24, letterSpacing: "-0.5px" }}>
                CONTACT<br />
                <span style={{ color: "#5d8f44" }}>ARYAN PROPERTIES</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 400, fontSize: 13, lineHeight: 1.85, marginBottom: 36 }}>
                Whether you're looking to buy, sell, rent or invest in Noida &amp; Greater Noida,
                our expert team is ready to guide every step of your journey.
              </p>
              <div className="hero-btns">
                <Link to="/about">
                  <button className="submit-btn"
                    style={{ background: "#5d8f44", color: "#fff", padding: "13px 28px", border: "none",
                      fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
                      fontFamily: "'Jost',sans-serif", fontWeight: 700, cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 8, width: "100%", justifyContent: "center" }}>
                    Visit Us <ArrowRight size={12} className="arrow-icon" />
                  </button>
                </Link>
                <Link to="/properties">
                  <button style={{ background: "transparent", color: "#fff", padding: "13px 28px",
                    border: "1px solid rgba(255,255,255,0.25)", fontSize: 10, letterSpacing: "0.25em",
                    textTransform: "uppercase", fontFamily: "'Jost',sans-serif", fontWeight: 500,
                    cursor: "pointer", width: "100%", justifyContent: "center" }}>
                    View Properties
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100,
            background: "linear-gradient(to top,#1A202C,transparent)" }} />
        </section>

        {/* ══ STATS ════════════════════════════════════════════════ */}
        <section style={{ background: "#1A202C", borderTop: "1px solid rgba(93,143,68,0.15)", borderBottom: "1px solid rgba(93,143,68,0.15)" }}>
          <div className="section-inner">
            <div className="stats-grid">
              {STATS.map(({ val, lab }, i) => (
                <motion.div key={lab} {...up(i * 0.08)}
                  style={{ padding: "32px 0", textAlign: "center",
                    borderRight: i < 3 ? "1px solid rgba(93,143,68,0.12)" : "none" }}>
                  <p className="cg" style={{ fontSize: "clamp(24px,3.5vw,38px)", color: "#5d8f44", lineHeight: 1 }}>{val}</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 8 }}>{lab}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ LOCATION MAP ═════════════════════════════════════════ */}
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="section-inner">
            <motion.div {...up()} style={{ marginBottom: 44 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span className="green-line" />
                <span className="label-tag">Our Office</span>
              </div>
              <h2 className="cg" style={{ fontSize: "clamp(26px,4vw,52px)", color: "#1A202C" }}>
                WHERE TO FIND US
              </h2>
            </motion.div>

            <motion.div {...up(0.1)} className="loc-grid">
              {/* Info */}
              <div className="loc-info-card"
                style={{ background: "#1A202C", padding: "40px 32px", display: "flex",
                  flexDirection: "column", justifyContent: "center", gap: 24 }}>
                <span style={{ fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase",
                  color: "#5d8f44", background: "rgba(93,143,68,0.12)",
                  padding: "4px 10px", display: "inline-block", alignSelf: "flex-start" }}>
                  Head Office
                </span>

                <h3 className="cg" style={{ fontSize: "clamp(18px,2vw,24px)", color: "#fff", lineHeight: 1.3 }}>
                  Sector 110, Noida
                </h3>

                {[
                  { Icon: MapPin, lines: ["Shop No-16, VDS Market,", "Sector 110, Noida, UP 201304"] },
                  { Icon: Phone,  lines: ["099534 44307"],                         href: "tel:+910995344307" },
                  { Icon: Mail,   lines: ["info@aryanproperties.com"],              href: "mailto:info@aryanproperties.com" },
                  { Icon: Clock,  lines: ["Mon – Sat: 9:00 am – 7:00 pm", "Sunday: By Appointment Only"] },
                ].map(({ Icon, lines, href }) => (
                  <div key={lines[0]} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={iconBox}><Icon size={12} color="#5d8f44" /></div>
                    <div>
                      {lines.map(l =>
                        href
                          ? <a key={l} href={href} style={{ display: "block", fontSize: 12, lineHeight: 1.8,
                              color: "rgba(255,255,255,0.55)", textDecoration: "none",
                              transition: "color 0.2s", wordBreak: "break-word" }}
                              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}>{l}</a>
                          : <p key={l} style={{ fontSize: 12, lineHeight: 1.8, color: "rgba(255,255,255,0.55)" }}>{l}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="loc-map">
                <iframe
                  title="Aryan Properties — Sector 110 Noida"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0!2d77.3910!3d28.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector%20110%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ CONTACT FORM + INFO ══════════════════════════════════ */}
        <section className="section-pad" style={{ background: "#F4F7F4" }}>
          <div className="section-inner">
            <motion.div {...up()} style={{ marginBottom: 52 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span className="green-line" />
                <span className="label-tag">Get In Touch</span>
              </div>
              <h2 className="cg" style={{ fontSize: "clamp(26px,4vw,56px)", color: "#1A202C", letterSpacing: "-0.3px" }}>
                START A CONVERSATION
              </h2>
            </motion.div>

            <div className="contact-grid">

              {/* ── Info column ── */}
              <motion.div {...up(0.1)}>
                {[
                  { icon: Phone,  label: "Call Us",      lines: ["099534 44307"],                        href: "tel:+910995344307" },
                  { icon: Mail,   label: "Email",         lines: ["info@aryanproperties.com"],             href: "mailto:info@aryanproperties.com" },
                  { icon: MapPin, label: "Office",        lines: ["Shop No-16, VDS Market,", "Sector 110, Noida, UP 201304"] },
                  { icon: Clock,  label: "Working Hours", lines: ["Mon – Sat: 9:00 am – 7:00 pm", "Sunday: By Appointment Only"] },
                ].map(({ icon: Icon, label, lines, href }) => (
                  <div key={label} className="contact-info-item"
                    style={{ display: "flex", gap: 18, marginBottom: 32, alignItems: "flex-start" }}>
                    <div className="contact-icon-sq"
                      style={{ width: 46, height: 46, border: "1px solid rgba(93,143,68,0.3)", background: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={14} color="#5d8f44" />
                    </div>
                    <div>
                      <p style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase",
                        color: "rgba(45,55,72,0.38)", marginBottom: 5 }}>{label}</p>
                      {lines.map(l =>
                        href
                          ? <a key={l} href={href} style={{ display: "block", fontSize: 13, color: "#1A202C",
                              lineHeight: 1.75, textDecoration: "none", transition: "color 0.2s", wordBreak: "break-word" }}
                              onMouseEnter={e => e.currentTarget.style.color = "#5d8f44"}
                              onMouseLeave={e => e.currentTarget.style.color = "#1A202C"}>{l}</a>
                          : <p key={l} style={{ fontSize: 13, color: "#1A202C", lineHeight: 1.75 }}>{l}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Team image */}
                <div className="team-img"
                  style={{ position: "relative", overflow: "hidden", height: 210, marginTop: 4 }}>
                  <img src={IMG.team} alt="Aryan Properties Team"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0,
                    background: "linear-gradient(to top,rgba(26,32,44,0.88),transparent 55%)" }} />
                  <div style={{ position: "absolute", bottom: 18, left: 18 }}>
                    <p className="cg" style={{ color: "#fff", fontSize: 20 }}>Our Advisory Team</p>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 10,
                      letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 4 }}>
                      Noida · Greater Noida · NCR
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ── Form ── */}
              <motion.div {...up(0.18)} className="form-box">
                <h3 className="cg" style={{ fontSize: "clamp(22px,3vw,30px)", color: "#1A202C", marginBottom: 8 }}>
                  SEND US A MESSAGE
                </h3>
                <p style={{ fontSize: 12, color: "rgba(45,55,72,0.45)", marginBottom: 32, lineHeight: 1.7 }}>
                  Our team typically responds within 2 business hours.
                </p>

                <div className="form-2col">
                  {[
                    { ph: "Full Name",         type: "text" },
                    { ph: "Phone Number",      type: "tel" },
                    { ph: "Email Address",     type: "email" },
                    { ph: "Budget (Optional)", type: "text" },
                  ].map(({ ph, type }) => (
                    <input key={ph} type={type} placeholder={ph} className="form-field" />
                  ))}
                </div>

                <div className="form-2col">
                  <select className="form-field">
                    <option value="">Purpose of Enquiry</option>
                    <option>Buy Residential Property</option>
                    <option>Buy Commercial Property</option>
                    <option>Sell My Property</option>
                    <option>Rent / Lease</option>
                    <option>Schedule a Site Visit</option>
                    <option>Investment Advisory</option>
                    <option>Plot / Land Purchase</option>
                  </select>
                  <select className="form-field">
                    <option value="">Preferred Location</option>
                    <option>Sector 110, Noida</option>
                    <option>Sector 78, Noida</option>
                    <option>Noida Expressway</option>
                    <option>Greater Noida West</option>
                    <option>Yamuna Expressway</option>
                    <option>Open to Suggestions</option>
                  </select>
                </div>

                <textarea rows={5}
                  placeholder="Tell us about your ideal property — size, type, requirements..."
                  className="form-field"
                  style={{ resize: "none", marginBottom: 26, display: "block" }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                  <button className="submit-btn"
                    style={{ background: "#5d8f44", color: "#fff", border: "none", padding: "14px 32px",
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
        <section className="section-pad" style={{ background: "#fff" }}>
          <div className="section-inner">

            <div className="why-header-grid">
              <motion.div {...up()}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                  <span className="green-line" />
                  <span className="label-tag">Why Aryan Properties</span>
                </div>
                <h2 className="cg" style={{ fontSize: "clamp(26px,4vw,54px)", color: "#1A202C", lineHeight: 1.1, letterSpacing: "-0.3px" }}>
                  WHY BUYERS &amp;<br />INVESTORS TRUST US
                </h2>
              </motion.div>
              <motion.p {...up(0.12)}
                style={{ color: "rgba(45,55,72,0.6)", fontSize: 14, lineHeight: 1.9, alignSelf: "end" }}>
                14+ years of helping families and investors find the right property in Noida &amp; NCR.
                We combine local expertise with transparent dealings — every single time.
              </motion.p>
            </div>

            <div className="why-outer-grid">
              <div className="why-cards-grid">
                {WHY.map(({ icon: Icon, title, body }, i) => (
                  <motion.div key={title} {...up(i * 0.07)} className="why-card"
                    style={{ background: "#F4F7F4", border: "1px solid rgba(93,143,68,0.18)", padding: "28px",
                      borderTopLeftRadius: 0, borderTopRightRadius: 40,
                      borderBottomLeftRadius: 40, borderBottomRightRadius: 0 }}>
                    <div style={{ width: 42, height: 42, border: "1px solid rgba(93,143,68,0.3)",
                      display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                      <Icon size={15} color="#5d8f44" />
                    </div>
                    <h3 className="cg" style={{ fontSize: "clamp(16px,1.8vw,20px)", color: "#1A202C", marginBottom: 10 }}>{title}</h3>
                    <p style={{ fontSize: 13, color: "rgba(45,55,72,0.6)", lineHeight: 1.75 }}>{body}</p>
                  </motion.div>
                ))}
              </div>

              {/* Image stack — hidden on tablet/mobile via CSS */}
              <motion.div {...up(0.15)} className="why-image-stack"
                style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[IMG.villa1, IMG.farm1].map((src, i) => (
                  <div key={i} style={{ position: "relative", overflow: "hidden", flex: 1, minHeight: 220 }}>
                    <img src={src} alt="property"
                      style={{ width: "100%", height: "100%", objectFit: "cover",
                        transition: "transform 0.7s ease", display: "block" }}
                      onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                      onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0,
                      background: "linear-gradient(to top,rgba(26,32,44,0.85),transparent)", padding: "18px 18px 14px" }}>
                      <span style={{ color: "#5d8f44", fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase" }}>
                        {i === 0 ? "Premium Villas" : "Residential Projects"}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}