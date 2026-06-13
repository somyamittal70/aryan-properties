import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import { CTA } from "../components/sections/ContactSections";

const POSITIONS = [
  {
    title: "Luxury Property Consultant",
    dept: "Sales",
    loc: "Gurugram",
    type: "Full-time",
  },
  {
    title: "Senior Investment Advisor",
    dept: "Advisory",
    loc: "Delhi",
    type: "Full-time",
  },
  {
    title: "Interior Design Specialist",
    dept: "Turnkey",
    loc: "Gurugram",
    type: "Full-time",
  },
  {
    title: "Digital Marketing Manager",
    dept: "Marketing",
    loc: "Remote",
    type: "Full-time",
  },
  {
    title: "Property Research Analyst",
    dept: "Research",
    loc: "Noida",
    type: "Full-time",
  },
];

const PERKS = [
  "Industry-leading commissions",
  "Luxury brand training",
  "Global property exposure",
  "Premium office environment",
  "Health & wellness benefits",
  "Growth & mentorship",
];

const STATS = [
  { num: "12+", label: "Years of Excellence" },
  { num: "200+", label: "Team Members" },
  { num: "₹5000Cr+", label: "Transactions Closed" },
];

const Careers = () => (
  <>
    <div className="h-20 bg-[#1A202C]" />

    {/* ── HERO ── */}
    <section className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A202C]/80 via-[#1A202C]/65 to-[#1A202C]/90" />
        {/* Gold shimmer line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5d8f44]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 w-full flex flex-col items-center text-center py-20 sm:py-28">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="w-8 sm:w-10 h-px bg-[#5d8f44]" />
          <span className="text-[#5d8f44] text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-[Jost]">
            Join Aurum Estates
          </span>
          <span className="w-8 sm:w-10 h-px bg-[#5d8f44]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-[Cormorant_Garamond] font-light text-white leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.6rem, 8vw, 6rem)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22 }}
        >
          Shape the Future of
          <br />
          <span className="italic text-[#5d8f44]">Luxury Real Estate</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="font-[Jost] font-light text-white/60 max-w-[520px] leading-relaxed mb-10"
          style={{ fontSize: "clamp(0.88rem, 2vw, 1.05rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.36 }}
        >
          We're building India's most respected luxury property team. If you're
          passionate, driven, and want to work at the pinnacle of real estate —
          your place is here.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
        >
          <a
            href="#positions"
            className="flex items-center gap-2 bg-[#5d8f44] text-[#1A202C] px-6 sm:px-8 py-3 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-[Jost] font-semibold hover:bg-[#c9a430] transition-colors"
          >
            View Open Roles <ArrowRight size={12} />
          </a>
          <a
            href="#why-aurum"
            className="flex items-center gap-2 border border-white/25 text-white/80 px-6 sm:px-8 py-3 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-[Jost] font-light hover:border-[#5d8f44]/60 hover:text-white transition-colors"
          >
            Why Aurum
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="flex flex-wrap justify-center gap-px w-full max-w-[640px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="flex-1 min-w-[120px] flex flex-col items-center gap-1 px-4 py-4 border-t border-[#5d8f44]/20"
            >
              <span
                className="font-[Cormorant_Garamond] font-light text-[#5d8f44]"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </span>
              <span className="font-[Jost] text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-white/40">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="font-[Jost] text-[8px] tracking-[0.2em] uppercase text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-[#5d8f44]/60" />
        </motion.div>
      </motion.div>
    </section>

    {/* ── WHY AURUM ── */}
    <section id="why-aurum" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-center">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#5d8f44]" />
            <span className="text-[#5d8f44] text-[10px] tracking-[0.25em] uppercase font-[Jost]">
              Join Our Team
            </span>
          </div>
          <h2
            className="font-[Cormorant_Garamond] font-light text-[#1A202C] mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.15 }}
          >
            Build a Career in
            <br />
            <span className="italic text-[#5d8f44]">Luxury Real Estate</span>
          </h2>
          <p className="text-[#2D3748]/70 font-[Jost] font-light text-[0.9rem] sm:text-base leading-relaxed mb-8">
            At Aurum Estates, we believe that exceptional people create
            exceptional experiences. Join a team of passionate professionals who
            are redefining luxury real estate in India's most dynamic markets.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PERKS.map((p) => (
              <div
                key={p}
                className="flex items-center gap-2 text-[0.82rem] sm:text-sm text-[#2D3748]/70 font-[Jost]"
              >
                <span className="w-1.5 h-1.5 bg-[#5d8f44] rounded-full shrink-0" />
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Image — clip-path removed on mobile to avoid cropping */}
        <div className="relative w-full">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=85"
            alt="Team"
            className="w-full object-cover"
            style={{
              height: "clamp(260px, 45vw, 420px)",
              clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
            }}
          />
        </div>
      </div>
    </section>

    {/* ── OPEN POSITIONS ── */}
    <section id="positions" className="py-14 sm:py-16 bg-[#F7FAFC]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <span className="w-10 h-px bg-[#5d8f44]" />
          <span className="text-[#5d8f44] text-[10px] tracking-[0.25em] uppercase font-[Jost]">
            Open Positions
          </span>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {POSITIONS.map((pos, i) => (
            <motion.div
              key={pos.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white border border-[#5d8f44]/20 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-[#5d8f44]/60 transition-colors group cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <h3
                  className="font-[Cormorant_Garamond] font-medium text-[#1A202C] group-hover:text-[#5d8f44] transition-colors"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}
                >
                  {pos.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-1 text-[10px] sm:text-xs text-[#2D3748]/50 font-[Jost]">
                  <span className="flex items-center gap-1">
                    <Briefcase size={10} className="text-[#5d8f44]" />
                    {pos.dept}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={10} className="text-[#5d8f44]" />
                    {pos.loc}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} className="text-[#5d8f44]" />
                    {pos.type}
                  </span>
                </div>
              </div>
              <button className="self-start sm:self-auto flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#5d8f44] border border-[#5d8f44]/40 px-4 py-2 hover:bg-[#5d8f44] hover:text-[#1A202C] transition-colors font-[Jost] whitespace-nowrap">
                Apply Now <ArrowRight size={10} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
  </>
);

export default Careers;
