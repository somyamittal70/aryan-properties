import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { UNSPLASH } from '../data/properties';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    title: 'Sale',
    headline: 'Achieve the Best Value for Your Property',
    desc: 'We help property owners connect with qualified, serious buyers through strategic marketing and premium presentation. From professional property showcasing to expert negotiations, our team ensures maximum visibility and optimal returns on your villa or farmhouse.',
    items: [
      'Villa Resale',
      'Farmhouse Resale',
      'Property Valuation',
      'Access to Buyer Network',
    ],
    image: "https://i.pinimg.com/736x/fa/d1/d0/fad1d0ad7e159731aabe840e8f8e80c6.jpg",
    reverse: false,
  },
  {
    title: 'Purchase',
    headline: 'Own Your Dream Villa or Farmhouse',
    desc: 'Explore a curated collection of luxury villas and premium farmhouses in the most sought-after locations across Delhi NCR. Our team guides you through every step — from property selection and legal due diligence to negotiation and final possession.',
    items: [
      'Luxury Villas',
      'Premium Farmhouses',
      'Private Estates',
      'Exclusive Gated Communities',
    ],
    image: "https://i.pinimg.com/736x/ad/2e/32/ad2e327ecc7aa46ddced7da83739b1a7.jpg",
    reverse: true,
  },
  {
    title: 'Rent',
    headline: 'Luxury Living, On Your Terms',
    desc: 'Whether you need a weekend retreat, holiday escape, or long-term residence, we offer exceptional villa and farmhouse rentals. Each property is handpicked to deliver comfort, privacy, and a premium lifestyle experience for every guest and resident.',
    items: [
      'Villa Rentals',
      'Farmhouse Rentals',
      'Holiday Retreats',
      'Long-Term Leasing',
    ],
    image: UNSPLASH.aerial,
    reverse: false,
  },
  {
    title: 'Booking',
    headline: 'Reserve Your Property with Confidence',
    desc: "Secure your preferred villa or farmhouse quickly and effortlessly with our streamlined booking process. Whether it's a short stay, event booking, or locking in a purchase, we handle all formalities — documentation, token amounts, and scheduling — so you can focus on what matters.",
    items: [
      'Short-Stay Bookings',
      'Event & Occasion Reservations',
      'Purchase Token Processing',
      'Documentation Assistance',
    ],
    image: UNSPLASH.farmhouse2,
    reverse: true,
  },
];

const Services = () => (
  <>
    {/* ── HERO — Contact page style ── */}
    <section style={{
      position: 'relative',
      height: '80vh',
      minHeight: 480,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Background image */}
      <img
        src={UNSPLASH.villa2}
        alt="Services"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          animation: 'heroZoom 18s ease-in-out infinite alternate',
        }}
      />

      {/* Gradient overlay — same as Contact */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(26,32,44,0.95) 0%, rgba(26,32,44,0.75) 50%, rgba(26,32,44,0.3) 100%)',
      }} />

      {/* Left green border strip */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: 3, background: '#5d8f44',
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to top, #1A202C, transparent)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: 1380, margin: '0 auto',
        padding: 'clamp(0px,0px,0px) clamp(20px,5vw,64px)',
        width: '100%',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{
              display: 'inline-block', width: 40, height: 1,
              background: '#5d8f44', flexShrink: 0,
            }} />
            <span style={{
              fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase',
              fontFamily: 'Jost, sans-serif', fontWeight: 600, color: '#5d8f44',
            }}>
              Luxury Real Estate · NCR India
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 7vw, 96px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.05,
            marginBottom: 28,
            letterSpacing: '-0.5px',
          }}>
            OUR<br />
            <span style={{ color: '#5d8f44' }}>SERVICES</span>
          </h1>

          {/* Subtext */}
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 420, fontSize: 14,
            fontFamily: 'Jost, sans-serif',
            lineHeight: 1.8, marginBottom: 40,
          }}>
            Discover a complete suite of luxury real estate services tailored to discerning
            homeowners, investors, and developers across Delhi NCR.
          </p>

          {/* CTA buttons — same as Contact */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/contact">
              <button style={{
                background: '#5d8f44', color: '#fff',
                padding: '14px 32px', border: 'none',
                fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
                fontFamily: 'Jost, sans-serif', fontWeight: 700,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#4a7235'}
                onMouseLeave={e => e.currentTarget.style.background = '#5d8f44'}
              >
                Get In Touch <ArrowRight size={12} />
              </button>
            </Link>
            <Link to="/properties">
              <button style={{
                background: 'transparent', color: '#fff',
                padding: '14px 32px',
                border: '1px solid rgba(255,255,255,0.25)',
                fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
                fontFamily: 'Jost, sans-serif', fontWeight: 500, cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'}
              >
                View Properties
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.07); }
        }
      `}</style>
    </section>

    {/* ── SERVICE SECTIONS ── */}
    {SERVICES.map((srv, i) => (
      <section key={srv.title} className={`py-14 sm:py-18 lg:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F4F7F2]'}`}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col gap-10 lg:gap-16 lg:items-center
            ${srv.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: srv.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 relative overflow-hidden"
              style={{ borderTopRightRadius: 60, borderBottomLeftRadius: 60 }}
            >
              <div className="img-zoom-wrap">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover img-inner"
                  style={{ borderTopRightRadius: 60, borderBottomLeftRadius: 60 }}
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: srv.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="w-8 sm:w-10 h-px bg-[#5d8f44]" />
                <span className="text-[#5d8f44] text-[10px] tracking-[0.25em] uppercase font-[Jost]">{srv.title}</span>
              </div>
              <h2 className="font-[Cormorant_Garamond] text-2xl sm:text-3xl font-semibold text-black mb-4 sm:mb-5 uppercase">
                {srv.headline}
              </h2>
              <p className="text-black/60 font-[Jost] font-light text-sm sm:text-base leading-relaxed mb-6 sm:mb-7">
                {srv.desc}
              </p>
              <ul className="space-y-2 mb-7 sm:mb-8">
                {srv.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-black/60 font-[Jost]">
                    <span className="w-1.5 h-1.5 bg-[#5d8f44] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <button className="flex items-center gap-2 border-b-2 border-[#5d8f44] pb-1 text-[10px] tracking-widest uppercase text-black hover:text-[#5d8f44] transition-colors group font-[Jost]">
                  Enquire Now
                  <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    ))}
  </>
);

export default Services;