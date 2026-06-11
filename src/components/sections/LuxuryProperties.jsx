import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import PropertyCard from '../common/PropertyCard';
import { PROPERTIES } from '../../data/properties';

const FILTERS = ['All', 'Farmhouses', 'Villas', 'Estates', 'Weekend Homes'];

const LuxuryProperties = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? PROPERTIES
    : PROPERTIES.filter(p =>
        p.type.toLowerCase().includes(active.toLowerCase().replace('s', ''))
      );

  return (
    <section className="section-pad bg-[#f5f7f4]">
      <div className="max-w-[1380px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Portfolio"
            title={<>Farmhouses &amp; Villas<br /><span className="italic text-[#5d8f44]">Exclusively Curated</span></>}
            align="left"
            className="max-w-md"
          />
          <Link
            to="/properties"
            className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-black border-b border-[#5d8f44] pb-1 hover:text-[#5d8f44] transition-colors group self-start lg:self-auto"
          >
            View All Properties
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 text-[10px] tracking-widest uppercase transition-all duration-200 ${
                active === f
                  ? 'bg-[#5d8f44] text-white font-semibold'
                  : 'border border-black/20 text-black/50 hover:border-[#5d8f44] hover:text-[#5d8f44]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prop, i) => (
            <PropertyCard key={prop.id} property={prop} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryProperties;