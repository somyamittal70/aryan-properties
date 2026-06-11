import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Shield, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { UNSPLASH } from '../../data/properties';

const INVESTMENTS = [
  {
    icon: TrendingUp,
    title: 'Farmhouse Investment',
    stat: '25–40%',
    statLabel: 'Appreciation in 3 Years',
    desc: 'Delhi NCR farmhouses near Chhatarpur, Rajokri, and Chhawla have consistently delivered exceptional capital gains while offering an unmatched lifestyle quotient.',
  },
  {
    icon: BarChart3,
    title: 'Villa Investment',
    stat: '8–12%',
    statLabel: 'Annual Rental Yield',
    desc: 'Luxury villas in Gurugram and Noida command premium rentals, often leased to MNC executives and diplomats seeking curated residential experiences.',
  },
  {
    icon: Shield,
    title: 'Weekend Homes',
    stat: '₹50L–3Cr',
    statLabel: 'Entry Range',
    desc: 'Weekend homes near Sohna, Manesar, and Faridabad offer an accessible entry into luxury real estate with significant lifestyle and investment benefits.',
  },
];

const WhyInvest = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={UNSPLASH.aerial} alt="Aerial Estate" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/92" />
      </div>

      {/* Subtle green diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ background: 'repeating-linear-gradient(45deg, #5d8f44 0, #5d8f44 1px, transparent 0, transparent 50%)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-8">
        <SectionHeading
          eyebrow="Investment Opportunity"
          title={<>Invest in<br /><span className="italic text-[#5d8f44]">Luxury Real Estate</span></>}
          subtitle="Delhi NCR's luxury farmhouses and villas are amongst India's most rewarding long-term investments."
          light
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INVESTMENTS.map((inv, i) => (
            <motion.div
              key={inv.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border border-[#5d8f44]/25 p-8 hover:border-[#5d8f44]/60 transition-colors duration-400 group cursor-default"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center border border-[#5d8f44]/30 bg-[#5d8f44]/10">
                  <inv.icon size={18} className="text-[#5d8f44]" />
                </div>
                <h3 className="font-[Cormorant_Garamond] text-xl font-medium text-white">{inv.title}</h3>
              </div>

              <div className="mb-5">
                <div className="font-[Cormorant_Garamond] text-4xl font-light text-[#5d8f44]">{inv.stat}</div>
                <div className="text-[9px] tracking-widest uppercase text-white/40 mt-1">{inv.statLabel}</div>
              </div>

              <p className="text-white/60 text-sm font-[Jost] font-light leading-relaxed mb-6">{inv.desc}</p>

              <button className="flex items-center gap-2 text-[#5d8f44] text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight size={10} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;