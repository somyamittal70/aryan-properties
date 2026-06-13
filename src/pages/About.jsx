import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Home, MapPin, Lock, Leaf, Sparkles, HeadphonesIcon,
  ArrowRight, Star, Globe, Shield, Award, PhoneCall,
  CalendarDays, ChevronRight, Key, TrendingUp, Users,
  CheckCircle, Building2, Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── fonts ── */
const FF_HEAD = { fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 };
const FF_BODY = { fontFamily: "'Jost', sans-serif" };

/* ── colors ── */
const G = {
  green: "#5d8f44",
  greenDark: "#3a6b25",
  greenDeep: "#1a3a0a",
  greenLight: "rgba(93,143,68,0.1)",
  greenBorder: "rgba(93,143,68,0.2)",
  greenBorderMid: "rgba(93,143,68,0.35)",
};

/* ── images ── */
const IMG = {
  heroBg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=85",
  about1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85",
  about2: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85",
  team1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=85",
  property1: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=85",
  property2: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80",
  property3: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  cta: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=85",
};

const serviceCards = [
  {
    img: IMG.property1,
    dividerColor: G.green,
    desc: "Residential properties — flats, villas, and bungalows across Noida and Greater Noida. We help you find, evaluate, and close on your ideal home with full legal and financial support.",
  },
  {
    img: IMG.property2,
    dividerColor: G.greenDark,
    desc: "Commercial spaces — office units, retail shops, and showrooms in high-footfall sectors. Whether buying or leasing, our team ensures the best deal for your business needs.",
  },
  {
    img: IMG.property3,
    dividerColor: G.greenDeep,
    desc: "Plots and land — residential and agricultural plots along major corridors like Yamuna Expressway and Greater Noida West. Ideal for builders, investors, and long-term wealth creation.",
  },
];

/* ── FadeUp ── */
function FadeUp({ children, delay = 0, className = "", style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <span
      style={{ ...FF_BODY, color: light ? "#8ec96e" : G.green }}
      className="inline-block text-[0.65rem] font-semibold tracking-[0.22em] uppercase mb-2"
    >
      {children}
    </span>
  );
}

function Divider({ center = false }) {
  return (
    <div
      className={`w-14 h-[2px] my-3 ${center ? "mx-auto" : ""}`}
      style={{ background: G.green }}
    />
  );
}

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden text-[#1E2D1A]" style={{ background: "#F0F5ED" }}>

      {/* ════ HERO ════ */}
      <section
        id="about"
        className="relative flex items-center justify-center text-center min-h-[100svh] px-4 sm:px-6 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img src={IMG.heroBg} alt="" className="w-full h-full object-cover block" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg,rgba(10,31,5,.90) 0%,rgba(26,58,10,.75) 50%,rgba(10,31,5,.85) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-[680px] mx-auto py-16 sm:py-20">
          <FadeUp delay={0.05}>
            <Eyebrow light>Est. 2010 · Trusted Real Estate</Eyebrow>
          </FadeUp>

          <FadeUp delay={0.18}>
            <h1
              style={{
                ...FF_HEAD,
                fontSize: "80px",
                letterSpacing: ".04em",
                textTransform: "uppercase",
                lineHeight: 1.05,
              }}
              className="text-white mt-2 mb-5"
            >
              TURNING YOUR<br />DREAM HOME<br />
              <span style={{ color: G.green, textTransform: "none" }}>Into Reality</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.28}>
            <Divider center />
          </FadeUp>

          <FadeUp delay={0.3}>
            <p
              style={FF_BODY}
              className="text-[0.86rem] sm:text-[0.9rem] leading-[1.82] text-[rgba(255,255,255,0.7)] max-w-[460px] text-center mx-auto px-2"
            >
              Aryan Properties has been helping families and investors find their perfect
              properties across Noida and Greater Noida since 2010. Honest advice. Verified
              listings. Best deals.
            </p>
          </FadeUp>

          <FadeUp delay={0.42}>
            <div className="flex justify-center gap-3 flex-wrap mt-7">
              <Link to="/properties">
                <motion.button
                  style={{ ...FF_BODY, background: G.green }}
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 text-white text-[0.75rem] sm:text-[0.78rem] font-semibold tracking-[0.1em] uppercase rounded-full border-none cursor-pointer"
                  whileHover={{ scale: 1.04, backgroundColor: G.greenDark }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ChevronRight size={14} /> Explore Properties
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  style={{
                    ...FF_BODY,
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.22)",
                  }}
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 text-[rgba(255,255,255,0.85)] text-[0.75rem] sm:text-[0.78rem] font-medium tracking-[0.07em] rounded-full cursor-pointer"
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.16)", color: "#fff" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.55}>
            <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap mt-8">
              {[
                { Icon: Star, text: "4.9 / 5 Client Rating", fill: true },
                { Icon: Building2, text: "Noida & Greater Noida", fill: false },
                { Icon: Award, text: "Trusted Since 2010", fill: false },
              ].map(({ Icon, text, fill }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[0.4rem]"
                  style={{
                    ...FF_BODY,
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    color: "#fff",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full inline-block flex-shrink-0"
                    style={{ background: G.green }}
                  />
                  <Icon size={13} color={G.green} fill={fill ? G.green : "none"} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════ WHY CHOOSE US ════ */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-10 py-14 sm:py-20 lg:py-28">
        <FadeUp className="text-center mb-10 sm:mb-14">
          <Eyebrow>Why Choose Us</Eyebrow>
          <Divider center />
          <h2
            style={{
              ...FF_HEAD,
              fontSize: "clamp(1.4rem,4vw,3.2rem)",
              textTransform: "uppercase",
              letterSpacing: ".06em",
              lineHeight: 1.1,
            }}
            className="text-[#1E2D1A]"
          >
            THE ARYAN PROPERTIES DIFFERENCE —<br className="hidden sm:block" />
            FELT FROM THE VERY FIRST CALL.
          </h2>
          <p
            style={FF_BODY}
            className="text-[0.86rem] text-[#7A9B72] mt-3 max-w-[440px] mx-auto leading-[1.74]"
          >
            We don't just sell properties. We help you find a home you'll be proud of for years.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {[
            {
              Icon: Home,
              title: "Verified Listings Only",
              desc: "Every property is site-verified, legally cleared, and builder-approved before it appears in our portfolio.",
              tag: "Verified",
            },
            {
              Icon: MapPin,
              title: "Noida Specialists",
              desc: "14+ years of deep local knowledge across all sectors of Noida, Greater Noida, and Yamuna Expressway corridor.",
              tag: "Local Expert",
            },
            {
              Icon: Handshake,
              title: "Best Deal Guarantee",
              desc: "We negotiate hard on your behalf to ensure you always get maximum value — whether buying, selling, or renting.",
              tag: "Best Price",
            },
            {
              Icon: Star,
              title: "1000+ Families Served",
              desc: "A decade of trust, with over a thousand satisfied clients who keep coming back and referring their loved ones.",
              tag: "Trusted",
            },
            {
              Icon: Shield,
              title: "Legal Due Diligence",
              desc: "Our legal team ensures every transaction is clean, transparent, and properly documented for your total protection.",
              tag: "Secure",
            },
            {
              Icon: HeadphonesIcon,
              title: "7-Day Support",
              desc: "Our team is available every day of the week — for site visits, document queries, and post-sale assistance.",
              tag: "Always On",
            },
          ].map((c, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <motion.div
                className="bg-white border rounded-[4px_48px_4px_48px] p-5 sm:p-7 text-left shadow-[0_4px_28px_rgba(30,45,26,0.07)] flex flex-col h-full cursor-default"
                style={{ borderColor: G.greenBorder }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 56px rgba(93,143,68,0.16)",
                  borderColor: G.greenBorderMid,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-[12px] flex items-center justify-center flex-shrink-0"
                    style={{ background: G.greenLight, border: `1px solid ${G.greenBorder}` }}
                  >
                    <c.Icon size={18} color={G.green} strokeWidth={1.5} />
                  </div>
                  <span
                    style={{
                      ...FF_BODY,
                      color: G.green,
                      background: G.greenLight,
                      border: `1px solid ${G.greenBorder}`,
                    }}
                    className="text-[0.55rem] sm:text-[0.58rem] font-semibold tracking-[0.14em] uppercase rounded-full px-2 sm:px-3 py-1"
                  >
                    {c.tag}
                  </span>
                </div>
                <h3
                  style={{
                    ...FF_HEAD,
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    fontSize: "clamp(0.88rem,2vw,1.05rem)",
                  }}
                  className="text-[#1E2D1A] mb-2"
                >
                  {c.title}
                </h3>
                <p
                  style={FF_BODY}
                  className="text-[0.82rem] sm:text-[0.84rem] leading-[1.75] text-[#7A9B72] flex-1"
                >
                  {c.desc}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ════ OUR STORY ════ */}
      <section style={{ background: "#fff" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-10 py-14 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">

          {/* Image column */}
          <FadeUp delay={0} className="relative w-full">
            {/* Decorative border frame */}
            <div
              className="absolute -top-3 -left-3 right-3 bottom-3 rounded-[4px_80px_80px_80px] pointer-events-none z-0 hidden sm:block"
              style={{ border: `1px solid ${G.greenBorder}` }}
            />
            <div className="relative z-10 rounded-[4px_72px_72px_72px] overflow-hidden shadow-[0_24px_64px_rgba(30,45,26,0.16)]">
              <img
                src={IMG.about1}
                alt="Aryan Properties Office"
                className="block w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                style={{ height: "clamp(260px,50vw,520px)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top,rgba(10,31,5,0.35) 0%,transparent 50%)",
                }}
              />
              <span
                style={{ ...FF_BODY, background: G.green }}
                className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 text-white text-[0.6rem] sm:text-[0.62rem] font-semibold tracking-[0.16em] uppercase px-3 sm:px-4 py-[0.38rem] rounded-full"
              >
                Since 2010
              </span>
            </div>

            {/* Small circle image — hidden on very small screens to prevent overflow */}
            <div
              className="absolute -bottom-5 -right-2 sm:-right-6 w-[80px] sm:w-[110px] lg:w-[130px] h-[80px] sm:h-[110px] lg:h-[130px] rounded-full overflow-hidden border-4 border-white z-20"
              style={{
                boxShadow: `0 8px 28px rgba(30,45,26,0.18), 0 0 0 1.5px ${G.greenBorder}`,
              }}
            >
              <img src={IMG.about2} alt="Property" className="w-full h-full object-cover" />
            </div>

            {/* Float badge */}
            <motion.div
              className="absolute top-4 sm:top-7 right-0 sm:-right-4 lg:-right-5 bg-white rounded-[18px] p-3 sm:p-4 flex items-center gap-2 sm:gap-3 z-30"
              style={{
                border: `1px solid ${G.greenBorder}`,
                boxShadow: `0 8px 36px rgba(93,143,68,0.18)`,
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Home size={14} color={G.green} strokeWidth={1.5} />
              <div>
                <p
                  style={{ ...FF_HEAD, fontSize: "clamp(1.1rem,3vw,1.55rem)", color: G.green, lineHeight: 1 }}
                >
                  1000+
                </p>
                <p
                  style={FF_BODY}
                  className="text-[0.55rem] sm:text-[0.58rem] font-semibold tracking-[0.12em] uppercase text-[#7A9B72]"
                >
                  Deals Closed
                </p>
              </div>
            </motion.div>
          </FadeUp>

          {/* Text column */}
          <FadeUp delay={0.2} className="flex flex-col items-start">
            <Eyebrow>Our Story</Eyebrow>
            <Divider />
            <h2
              style={{
                ...FF_HEAD,
                fontSize: "clamp(1.8rem,4vw,3.4rem)",
                textTransform: "uppercase",
                letterSpacing: ".05em",
                lineHeight: 1.05,
              }}
              className="text-[#1E2D1A] mb-1"
            >
              ABOUT ARYAN <br /> PROPERTIES
            </h2>
            <p
              style={FF_BODY}
              className="text-[0.86rem] sm:text-[0.88rem] leading-[1.84] text-[#7A9B72] mt-4 max-w-[440px]"
            >
              Aryan Properties was founded in 2010 with one mission — to make property buying,
              selling, and renting a simple, transparent, and rewarding experience for every
              client. Based at Shop No-16, VDS Market, Sector 110, Noida, we serve thousands of
              families and investors across the entire Delhi NCR region.
            </p>

            {/* Stats strip */}
            <div
              className="flex items-center gap-3 sm:gap-5 mt-7 p-4 sm:p-5 bg-white rounded-[14px] w-full"
              style={{ border: `1px solid ${G.greenBorder}` }}
            >
              {[
                { num: "14+", lbl: "Years" },
                null,
                { num: "1000+", lbl: "Clients" },
                null,
                { num: "98%", lbl: "Retention" },
              ].map((s, i) =>
                s === null ? (
                  <div
                    key={i}
                    className="w-px h-8 flex-shrink-0"
                    style={{ background: G.greenBorder }}
                  />
                ) : (
                  <div key={i} className="flex flex-col gap-1 flex-1 min-w-0">
                    <span
                      style={{
                        ...FF_HEAD,
                        fontSize: "clamp(1.05rem,3vw,1.45rem)",
                        color: G.green,
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </span>
                    <span
                      style={FF_BODY}
                      className="text-[0.55rem] sm:text-[0.58rem] font-semibold tracking-[0.1em] uppercase text-[#7A9B72] truncate"
                    >
                      {s.lbl}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Bullet points */}
            <div className="flex flex-col gap-3 mt-5 w-full">
              {[
                { Icon: CheckCircle, text: "Verified, legally cleared listings only" },
                { Icon: Handshake, text: "Best price negotiation on every deal" },
                { Icon: Shield, text: "End-to-end legal & documentation support" },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0"
                    style={{ background: G.greenLight, border: `1px solid ${G.greenBorder}` }}
                  >
                    <Icon size={14} color={G.green} strokeWidth={1.5} />
                  </div>
                  <span
                    style={FF_BODY}
                    className="text-[0.83rem] sm:text-[0.85rem] font-medium text-[#4A6741]"
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════ OUR PROMISE — DARK ════ */}
      <section style={{ background: G.greenDeep }} className="py-14 sm:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-10 text-center">
          <FadeUp>
            <Eyebrow light>Our Promise</Eyebrow>
            <Divider center />
            <h2
              style={{
                ...FF_HEAD,
                fontSize: "clamp(1.4rem,4vw,3.2rem)",
                textTransform: "uppercase",
                letterSpacing: ".06em",
                lineHeight: 1.1,
              }}
              className="text-white"
            >
              HONEST. TRANSPARENT. TRUSTED.
            </h2>
            <p
              style={FF_BODY}
              className="text-[0.86rem] sm:text-[0.88rem] leading-[1.78] text-[rgba(255,255,255,0.6)] mt-3 max-w-[500px] mx-auto"
            >
              Every client at Aryan Properties gets the same honest guidance, verified listings,
              and dedicated support — whether buying your first home or your tenth investment.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12">
            {[
              {
                Icon: Home,
                title: "Residential Expertise",
                desc: "Flats, villas, bungalows — we know every society, builder, and layout across Noida and Greater Noida to find your perfect match.",
                iconColor: G.green,
                iconBg: G.greenLight,
              },
              {
                Icon: TrendingUp,
                title: "Investment Returns",
                desc: "Our investment advisory helps you identify high-growth zones, calculate returns, and choose properties that appreciate over time.",
                iconColor: "#8ec96e",
                iconBg: "rgba(142,201,110,0.1)",
              },
              {
                Icon: Users,
                title: "Post-Sale Support",
                desc: "Our relationship doesn't end at registration. We help with possession, interiors, tenant placement, and resale — whenever you need us.",
                iconColor: "#fff",
                iconBg: "rgba(255,255,255,0.06)",
              },
            ].map((c, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <motion.div
                  className="rounded-[4px_64px_4px_64px] p-6 sm:p-9 text-left flex flex-col h-full cursor-default"
                  style={{ background: "#0F2808", border: `1px solid ${G.greenBorder}` }}
                  whileHover={{ y: -7, borderColor: G.greenBorderMid }}
                  transition={{ type: "spring", stiffness: 280 }}
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0"
                    style={{ background: c.iconBg }}
                  >
                    <c.Icon size={20} color={c.iconColor} strokeWidth={1.5} />
                  </div>
                  <h3
                    style={{
                      ...FF_HEAD,
                      fontSize: "clamp(1rem,2.5vw,1.15rem)",
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                    className="text-white mb-3"
                  >
                    {c.title}
                  </h3>
                  <p
                    style={FF_BODY}
                    className="text-[0.82rem] sm:text-[0.84rem] leading-[1.75] text-[rgba(255,255,255,0.58)] flex-1"
                  >
                    {c.desc}
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════ WHAT WE OFFER ════ */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-10 py-14 sm:py-20 lg:py-28">
        <FadeUp className="mb-8 sm:mb-10">
          <Eyebrow>Our Services</Eyebrow>
          <Divider />
          <h2
            style={{
              ...FF_HEAD,
              fontSize: "clamp(2rem,5vw,4.5rem)",
              textTransform: "uppercase",
              letterSpacing: ".04em",
              lineHeight: 1,
            }}
            className="text-[#1E2D1A]"
          >
            BUY · SELL · RENT
            <br />
            <span style={{ color: G.green }}>BOOK.</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12">
          {serviceCards.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white overflow-hidden shadow-lg rounded-[4px_40px_4px_40px]"
              style={{ border: `1px solid ${G.greenBorder}` }}
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full h-[4px]" style={{ backgroundColor: item.dividerColor }} />
              <div className="p-5 sm:p-6">
                <p style={FF_BODY} className="text-[#7A9B72] text-[0.84rem] leading-[1.75]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════ CTA — DARK ════ */}
      <section
        style={{ background: G.greenDeep }}
        className="relative overflow-hidden py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-10"
      >
        {/* Decorative glow */}
        <div
          className="absolute pointer-events-none z-0 rounded-full"
          style={{
            background: "radial-gradient(circle,rgba(93,143,68,0.12) 0%,transparent 70%)",
            width: "560px",
            height: "560px",
            bottom: "-200px",
            right: "-200px",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg,transparent,${G.green}66,transparent)`,
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">
          {/* CTA text */}
          <FadeUp className="flex flex-col items-start" delay={0.05}>
            <Eyebrow light>Get In Touch</Eyebrow>
            <Divider />
            <h2
              style={{
                ...FF_HEAD,
                fontSize: "clamp(1.8rem,4vw,3.2rem)",
                textTransform: "uppercase",
                letterSpacing: ".05em",
                lineHeight: 1.05,
              }}
              className="text-white"
            >
              YOUR DREAM PROPERTY<br />IS CLOSER THAN<br />YOU THINK.
            </h2>
            <p
              style={FF_BODY}
              className="text-[0.86rem] sm:text-[0.88rem] leading-[1.82] text-[rgba(255,255,255,0.6)] mt-4 max-w-[400px]"
            >
              Schedule a free consultation with our property advisors. We'll understand your
              needs and match you with the best options — no obligations, total transparency.
            </p>

            <div className="flex flex-col gap-3 mt-7 sm:mt-8 w-full max-w-[440px]">
              <Link to="/contact">
                <motion.button
                  style={{
                    ...FF_BODY,
                    background: G.green,
                    boxShadow: "0 8px 28px rgba(93,143,68,0.35)",
                  }}
                  className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-[14px] cursor-pointer text-left text-white border-none w-full"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 12px 40px rgba(93,143,68,0.5)",
                    backgroundColor: G.greenDark,
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <CalendarDays size={17} className="flex-shrink-0" />
                  <div className="flex-1 flex flex-col min-w-0">
                    <span className="text-[0.82rem] sm:text-[0.85rem] font-semibold tracking-[0.02em]">
                      Book a Site Visit
                    </span>
                    <span className="text-[0.68rem] sm:text-[0.7rem] opacity-70 tracking-[0.02em]">
                      Available Mon–Sat, 9am–7pm
                    </span>
                  </div>
                  <ArrowRight size={15} className="flex-shrink-0" />
                </motion.button>
              </Link>

              <motion.button
                style={{
                  ...FF_BODY,
                  background: "#0F2808",
                  borderColor: G.greenBorder,
                }}
                className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-[14px] cursor-pointer text-left border text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] w-full"
                whileHover={{ scale: 1.03, borderColor: G.green }}
                whileTap={{ scale: 0.97 }}
              >
                <PhoneCall size={17} color={G.green} className="flex-shrink-0" />
                <div className="flex-1 flex flex-col min-w-0">
                  <span className="text-[0.82rem] sm:text-[0.85rem] font-semibold tracking-[0.02em]">
                    Call Us Directly
                  </span>
                  <span className="text-[0.68rem] sm:text-[0.7rem] text-[rgba(255,255,255,0.45)] tracking-[0.02em]">
                    099534 44307
                  </span>
                </div>
              </motion.button>
            </div>

            <div
              style={FF_BODY}
              className="flex items-center gap-2 mt-4 text-[0.65rem] sm:text-[0.68rem] text-[rgba(255,255,255,0.4)]"
            >
              <Shield size={12} color={G.green} className="flex-shrink-0" />
              <span>100% transparent · No hidden charges · RERA registered</span>
            </div>
          </FadeUp>

          {/* CTA image */}
          <FadeUp
            className="relative overflow-hidden shadow-[0_24px_72px_rgba(30,45,26,0.25)]"
            style={{ borderRadius: "28px 6px 28px 6px" }}
            delay={0.22}
          >
            <img
              src={IMG.cta}
              alt="Premium Property"
              className="block w-full object-cover transition-transform duration-[600ms] hover:scale-[1.04]"
              style={{ height: "clamp(220px,45vw,480px)", borderRadius: "inherit" }}
            />
            <div
              style={{ ...FF_BODY, backdropFilter: "blur(8px)" }}
              className="absolute top-4 sm:top-5 right-4 sm:right-5 border rounded-full px-3 sm:px-4 py-[0.3rem] sm:py-[0.38rem] text-[0.58rem] sm:text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-white"
              style={{
                ...FF_BODY,
                background: "rgba(10,31,5,0.88)",
                borderColor: G.greenBorder,
                backdropFilter: "blur(8px)",
              }}
            >
              Verified &amp; Trusted
            </div>

            <motion.div
              className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 rounded-[18px] p-3 sm:p-4 max-w-[200px] sm:max-w-[240px]"
              style={{
                background: "rgba(10,31,5,0.92)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${G.greenBorder}`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} fill={G.green} color={G.green} />
                ))}
              </div>
              <p
                style={{
                  ...FF_HEAD,
                  fontStyle: "italic",
                  fontSize: "clamp(0.75rem,2vw,.82rem)",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.55,
                  marginBottom: ".5rem",
                }}
              >
                "Aryan Properties found us our dream flat in Sector 78 within a week. Absolutely
                trusted."
              </p>
              <p
                style={{ ...FF_BODY, color: G.green }}
                className="text-[0.62rem] sm:text-[0.65rem] font-semibold tracking-[0.06em]"
              >
                — Rahul S., Noida
              </p>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* ════ FOUNDER ════ */}
      <section
        style={{ background: "#F0F5ED" }}
        className="py-14 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-10"
      >
        <div className="max-w-[1200px] mx-auto">
          <FadeUp className="text-center mb-12 sm:mb-16">
            <Eyebrow>The Visionary</Eyebrow>
            <Divider center />
            <h2
              style={{
                ...FF_HEAD,
                fontSize: "clamp(1.8rem,4vw,3.2rem)",
                textTransform: "uppercase",
                letterSpacing: ".06em",
              }}
              className="text-[#1E2D1A]"
            >
              MEET THE FOUNDER
            </h2>
            <p
              style={FF_BODY}
              className="text-[0.86rem] sm:text-[0.88rem] text-[#7A9B72] mt-3 max-w-[400px] mx-auto leading-[1.7]"
            >
              The person behind 14 years of honest dealings and a mission to make real estate
              simple for everyone.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 sm:gap-16 lg:gap-24 items-center">
            {/* Founder image */}
            <FadeUp delay={0} className="relative max-w-[420px] mx-auto w-full lg:max-w-none lg:mx-0">
              <div
                className="absolute -top-3 -left-3 right-3 bottom-3 rounded-[4px_80px_80px_80px] pointer-events-none z-0 hidden sm:block"
                style={{ border: `1px solid ${G.greenBorder}` }}
              />
              <div className="relative z-10 rounded-[4px_72px_72px_72px] overflow-hidden shadow-[0_24px_64px_rgba(30,45,26,0.16)]">
                <img
                  src={IMG.team1}
                  alt="Founder"
                  className="block w-full object-cover object-top"
                  style={{ height: "clamp(300px,55vw,560px)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top,rgba(10,31,5,0.3) 0%,transparent 50%)",
                  }}
                />
              </div>

              {/* Stats badge — clamped to stay within card on mobile */}
              <motion.div
                className="absolute bottom-4 sm:bottom-7 right-0 sm:-right-4 lg:-right-5 z-20 bg-white rounded-[20px] p-3 sm:p-4 shadow-[0_8px_36px_rgba(93,143,68,0.2)]"
                style={{
                  border: `1px solid ${G.greenBorder}`,
                  maxWidth: "160px",
                }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                <div className="mb-3 pb-3" style={{ borderBottom: `1px solid ${G.greenBorder}` }}>
                  <p
                    style={{
                      ...FF_HEAD,
                      fontSize: "clamp(1.15rem,3vw,1.6rem)",
                      color: G.green,
                      lineHeight: 1,
                    }}
                  >
                    14+
                  </p>
                  <p
                    style={FF_BODY}
                    className="text-[0.55rem] sm:text-[0.58rem] font-semibold tracking-[0.12em] uppercase text-[#7A9B72] mt-1"
                  >
                    Years of Trust
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      ...FF_HEAD,
                      fontSize: "clamp(1rem,2.5vw,1.2rem)",
                      color: G.green,
                      lineHeight: 1,
                    }}
                  >
                    1,000+
                  </p>
                  <p
                    style={FF_BODY}
                    className="text-[0.55rem] sm:text-[0.58rem] font-semibold tracking-[0.12em] uppercase text-[#7A9B72] mt-1"
                  >
                    Happy Clients
                  </p>
                </div>
              </motion.div>
            </FadeUp>

            {/* Founder text */}
            <FadeUp delay={0.2} className="flex flex-col items-start">
              <Eyebrow>Founder &amp; Director</Eyebrow>
              <h3
                style={{
                  ...FF_HEAD,
                  fontSize: "clamp(2rem,5vw,3.4rem)",
                  textTransform: "uppercase",
                  letterSpacing: ".05em",
                  lineHeight: 1,
                }}
                className="text-[#1E2D1A]"
              >
                ARYAN<br />SHARMA
              </h3>
              <p
                style={{ ...FF_BODY, color: G.green }}
                className="text-[0.62rem] sm:text-[0.65rem] font-semibold tracking-[0.18em] uppercase mt-2 mb-5"
              >
                Founder · Director · Property Consultant
              </p>

              <blockquote
                style={{
                  ...FF_HEAD,
                  fontStyle: "italic",
                  fontSize: "clamp(1rem,2.5vw,1.5rem)",
                  lineHeight: 1.45,
                  borderLeft: `3px solid ${G.green}`,
                  paddingLeft: "1.2rem",
                  color: "#1E2D1A",
                  margin: "0 0 1.5rem",
                }}
              >
                "Real estate is not just about property. It's about helping people build their
                future."
              </blockquote>

              <p
                style={FF_BODY}
                className="text-[0.85rem] sm:text-[0.87rem] leading-[1.84] text-[#7A9B72] mb-3"
              >
                Aryan Sharma founded Aryan Properties in 2010 after years of experience in the
                Noida real estate market. Driven by a belief that property buyers deserve honest
                advice and full transparency, he built a consultancy that puts clients first —
                always.
              </p>
              <p
                style={FF_BODY}
                className="text-[0.85rem] sm:text-[0.87rem] leading-[1.84] text-[#7A9B72] mb-5"
              >
                Starting with a small office in Sector 110, Noida, Aryan Properties has grown
                into a trusted name across the entire Delhi NCR region — with over 1000 families
                served and a 98% client retention rate.
              </p>

              <div className="flex flex-col gap-3 mb-6 w-full">
                {[
                  { Icon: Shield, text: "Transparency as a founding principle" },
                  { Icon: Home, text: "Deep expertise in Noida residential market" },
                  { Icon: Handshake, text: "14+ years of trusted client relationships" },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0"
                      style={{ background: G.greenLight, border: `1px solid ${G.greenBorder}` }}
                    >
                      <Icon size={14} color={G.green} strokeWidth={1.5} />
                    </div>
                    <span
                      style={FF_BODY}
                      className="text-[0.83rem] sm:text-[0.85rem] font-medium text-[#4A6741]"
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {["RERA Registered · UP", "1000+ Clients · 2010–2024", "Sector 110, Noida"].map(
                  (award, i) => (
                    <span
                      key={i}
                      style={{
                        ...FF_BODY,
                        color: G.green,
                        background: G.greenLight,
                        border: `1px solid ${G.greenBorder}`,
                      }}
                      className="text-[0.58rem] sm:text-[0.6rem] font-semibold tracking-[0.1em] uppercase rounded-full px-3 py-[0.32rem]"
                    >
                      {award}
                    </span>
                  )
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}