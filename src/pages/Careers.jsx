import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';
import { UNSPLASH } from '../data/properties';
import { CTA } from '../components/sections/ContactSections';

const POSITIONS = [
  { title: 'Luxury Property Consultant', dept: 'Sales', loc: 'Gurugram', type: 'Full-time' },
  { title: 'Senior Investment Advisor', dept: 'Advisory', loc: 'Delhi', type: 'Full-time' },
  { title: 'Interior Design Specialist', dept: 'Turnkey', loc: 'Gurugram', type: 'Full-time' },
  { title: 'Digital Marketing Manager', dept: 'Marketing', loc: 'Remote', type: 'Full-time' },
  { title: 'Property Research Analyst', dept: 'Research', loc: 'Noida', type: 'Full-time' },
];

const PERKS = [
  'Industry-leading commissions', 'Luxury brand training', 'Global property exposure',
  'Premium office environment', 'Health & wellness benefits', 'Growth & mentorship',
];

const Careers = () => (
  <>
    <div className="h-20 bg-[#1A202C]" />
    <section className="relative h-56 flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={UNSPLASH.about} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1A202C]/75" />
      </div>
      <div className="relative z-10 max-w-[1380px] mx-auto px-8 pb-10 w-full">
        <h1 className="font-[Cormorant_Garamond] text-5xl font-light text-white">Careers at Aurum</h1>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-[1380px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase">Join Our Team</span>
          </div>
          <h2 className="font-[Cormorant_Garamond] text-4xl font-light text-[#1A202C] mb-5">
            Build a Career in<br /><span className="italic text-[#D4AF37]">Luxury Real Estate</span>
          </h2>
          <p className="text-[#2D3748]/70 font-[Jost] font-light text-base leading-relaxed mb-8">
            At Aurum Estates, we believe that exceptional people create exceptional experiences. Join a team of passionate professionals who are redefining luxury real estate in India's most dynamic markets.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {PERKS.map(p => (
              <div key={p} className="flex items-center gap-2 text-sm text-[#2D3748]/70">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shrink-0" />
                {p}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={UNSPLASH.about2} alt="Team" className="w-full h-[400px] object-cover" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }} />
        </div>
      </div>
    </section>

    <section className="py-16 bg-[#F7FAFC]">
      <div className="max-w-[1380px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-px bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase">Open Positions</span>
        </div>
        <div className="space-y-4">
          {POSITIONS.map((pos, i) => (
            <motion.div
              key={pos.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white border border-[#D4AF37]/20 p-6 flex flex-wrap items-center justify-between gap-4 hover:border-[#D4AF37]/60 transition-colors group cursor-pointer"
            >
              <div>
                <h3 className="font-[Cormorant_Garamond] text-xl font-medium text-[#1A202C] group-hover:text-[#D4AF37] transition-colors">{pos.title}</h3>
                <div className="flex items-center gap-4 mt-1 text-xs text-[#2D3748]/50">
                  <span className="flex items-center gap-1"><Briefcase size={10} className="text-[#D4AF37]" />{pos.dept}</span>
                  <span className="flex items-center gap-1"><MapPin size={10} className="text-[#D4AF37]" />{pos.loc}</span>
                  <span className="flex items-center gap-1"><Clock size={10} className="text-[#D4AF37]" />{pos.type}</span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#D4AF37] border border-[#D4AF37]/40 px-4 py-2 hover:bg-[#D4AF37] hover:text-[#1A202C] transition-colors">
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