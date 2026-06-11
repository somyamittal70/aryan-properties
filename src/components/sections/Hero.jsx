import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ArrowRight, Home, Building2, Trees } from 'lucide-react';
import { UNSPLASH } from '../../data/properties';

const STATS = [
  { value: '500+', label: 'Properties Sold' },
  { value: '₹2000Cr+', label: 'Transactions' },
  { value: '12+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

const TABS = ['Farmhouses', 'Villas', 'Residential', 'Commercial'];

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Farmhouses');

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={UNSPLASH.hero}
          alt="Luxury Villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
      </div>

      {/* Floating green lines */}
      <div className="absolute top-1/4 left-12 w-px h-24 bg-gradient-to-b from-transparent via-[#5d8f44]/50 to-transparent" />
      <div className="absolute top-1/3 right-12 w-px h-24 bg-gradient-to-b from-transparent via-[#5d8f44]/50 to-transparent" />

      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-8 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-10 h-px bg-[#5d8f44]" />
          <span className="text-[#5d8f44] tracking-[0.3em] text-[10px] uppercase">Delhi NCR's Premier Luxury Real Estate</span>
          <span className="w-10 h-px bg-[#5d8f44]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-[Cormorant_Garamond] text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] tracking-tight mb-2"
        >
          Discover Your
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-[Cormorant_Garamond] text-5xl md:text-7xl lg:text-8xl font-light text-[#5d8f44] italic leading-[0.95] tracking-tight mb-6"
        >
          Dream Estate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white/60 font-[Jost] font-light text-base max-w-lg mb-10 leading-relaxed"
        >
          Curated luxury farmhouses, resort villas, private estates, and weekend homes across Delhi NCR's most coveted locations.
        </motion.p>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-dark rounded-none w-full max-w-3xl p-1 mb-10"
        >
          {/* Tabs */}
          <div className="flex border-b border-white/10 mb-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-[10px] tracking-widest uppercase transition-all ${
                  activeTab === tab
                    ? 'text-[#5d8f44] border-b-2 border-[#5d8f44] -mb-px'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {tab === 'Farmhouses' ? <Trees size={11} /> : tab === 'Villas' ? <Home size={11} /> : <Building2 size={11} />}
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 p-2">
            <input
              type="text"
              placeholder={`Search ${activeTab} in Delhi NCR...`}
              className="flex-1 bg-white/5 border border-white/10 text-white px-4 py-3 text-sm placeholder-white/40 focus:border-[#5d8f44]/60 focus:outline-none transition-colors"
            />
            <select className="bg-white/5 border border-white/10 text-white/60 px-4 py-3 text-xs focus:border-[#5d8f44]/60 focus:outline-none transition-colors">
              <option>Budget</option>
              <option>Under ₹2 Cr</option>
              <option>₹2–5 Cr</option>
              <option>₹5–10 Cr</option>
              <option>Above ₹10 Cr</option>
            </select>
            <button className="bg-[#5d8f44] text-white px-6 py-3 flex items-center gap-2 text-[11px] tracking-widest uppercase font-semibold hover:bg-[#4d7a38] transition-colors whitespace-nowrap">
              <Search size={13} />
              Search
            </button>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center gap-4 mb-14"
        >
          <button className="bg-[#5d8f44] text-white px-8 py-3.5 text-[10px] tracking-widest uppercase font-semibold hover:bg-[#4d7a38] transition-colors flex items-center gap-2">
            Explore Properties
            <ArrowRight size={12} />
          </button>
          <button className="border border-white/30 text-white px-8 py-3.5 text-[10px] tracking-widest uppercase hover:border-[#5d8f44] hover:text-[#5d8f44] transition-colors">
            Book Site Visit
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-0 border border-white/10 divide-x divide-white/10 bg-black/40 backdrop-blur-sm"
        >
          {STATS.map((s) => (
            <div key={s.label} className="px-8 py-4 text-center">
              <div className="font-[Cormorant_Garamond] text-2xl font-medium text-[#5d8f44]">{s.value}</div>
              <div className="text-[10px] tracking-widest text-white/50 uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} className="text-[#5d8f44]" />
      </motion.div>
    </section>
  );
};

export default Hero;