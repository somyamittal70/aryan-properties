import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { UNSPLASH } from '../../data/properties';

const Welcome = () => {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — editorial image composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative z-10 img-zoom-wrap" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 8% 100%)' }}>
              <img
                src={UNSPLASH.farmhouse1}
                alt="Luxury Farmhouse"
                className="w-full h-[520px] object-cover img-inner"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating second image */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 -right-8 w-52 h-48 border-4 border-white shadow-2xl z-20 img-zoom-wrap"
            >
              <img src={UNSPLASH.interior1} alt="Interior" className="w-full h-full object-cover img-inner" />
            </motion.div>

            {/* Green accent block */}
            <div className="absolute top-8 -left-6 w-12 h-40 bg-[#5d8f44]/12 z-0" />

            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-6 right-6 z-20 glass-dark p-4 text-center"
            >
              <div className="font-[Cormorant_Garamond] text-3xl text-[#5d8f44] font-medium">12+</div>
              <div className="text-white/60 text-[9px] tracking-widest uppercase mt-1">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#5d8f44]" />
              <span className="text-[#5d8f44] uppercase tracking-[0.25em] text-[10px] font-medium">About Aurum Estates</span>
            </div>

            <h2 className="font-[Cormorant_Garamond] text-5xl lg:text-6xl font-light text-black leading-tight mb-6">
              A Legacy of<br />
              <span className="italic text-[#5d8f44]">Exceptional Living</span>
            </h2>

            <p className="text-black/60 font-[Jost] font-light text-base leading-relaxed mb-6">
              Aurum Estates was founded on a singular belief: that the search for a luxury home should be as extraordinary as the home itself. We curate India's finest farmhouses, villas, and private estates, offering our clients not just property — but a gateway to an elevated way of life.
            </p>

            <p className="text-black/60 font-[Jost] font-light text-base leading-relaxed mb-10">
              From sprawling green farmhouses in Chhatarpur to architect-designed resort villas in the Aravalli Hills, our portfolio represents the pinnacle of luxury real estate in Delhi NCR.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                ['500+', 'Properties Transacted'],
                ['₹2000 Cr+', 'Total Transactions'],
                ['98%', 'Client Retention'],
                ['50+', 'Luxury Developments'],
              ].map(([val, label]) => (
                <div key={label} className="border-l-2 border-[#5d8f44] pl-4">
                  <div className="font-[Cormorant_Garamond] text-2xl font-medium text-black">{val}</div>
                  <div className="text-xs text-black/45 tracking-wide font-[Jost]">{label}</div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-3 text-black border-b-2 border-[#5d8f44] pb-1 text-[11px] tracking-widest uppercase font-medium hover:text-[#5d8f44] transition-colors group">
              Discover Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;