import { motion } from 'framer-motion';
import { Shield, Award, Clock, HeartHandshake, TrendingUp, Key } from 'lucide-react';

const FEATURES = [
  { icon: Award, title: 'Curated Luxury', desc: 'Every listing hand-selected for quality, exclusivity, and investment potential.' },
  { icon: Shield, title: 'Trusted Advisory', desc: 'Transparent dealings backed by 12+ years of Delhi NCR real estate expertise.' },
  { icon: TrendingUp, title: 'High ROI Focus', desc: 'Farmhouse and villa investments with proven capital appreciation.' },
  { icon: Clock, title: 'Concierge Service', desc: '24/7 dedicated relationship managers for a seamless experience.' },
  { icon: HeartHandshake, title: 'End-to-End Support', desc: 'From search to possession — legal, financial, and interior guidance.' },
  { icon: Key, title: 'Exclusive Access', desc: 'Off-market properties and first-access to premium new launches.' },
];

const Features = () => {
  return (
    <section className="py-24 bg-[#f5f7f4] relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5d8f44]/40 to-transparent" />
      {/* Soft green glow blobs */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#5d8f44]/6 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[#0a0a0a]/5 blur-3xl" />

      <div className="max-w-[1380px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-8 border transition-all duration-400 cursor-default
                ${i % 3 === 1 ? 'md:translate-y-6' : ''}
                ${i % 2 === 0 ? 'border-[#5d8f44]/20 hover:border-[#5d8f44]/50' : 'border-[#5d8f44]/15 hover:border-[#5d8f44]/40'}
              `}
              style={{ background: i % 2 === 0 ? '#ffffff' : '#0a0a0a' }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center mb-6 border transition-colors duration-300
                ${i % 2 === 0
                  ? 'border-[#5d8f44]/30 bg-[#5d8f44]/6 group-hover:bg-[#5d8f44]/12'
                  : 'border-[#5d8f44]/25 bg-[#5d8f44]/10 group-hover:bg-[#5d8f44]/18'
                }`}>
                <feat.icon size={20} className="text-[#5d8f44]" />
              </div>

              <h3 className={`font-[Cormorant_Garamond] text-xl font-medium mb-3 ${i % 2 === 0 ? 'text-[#0a0a0a]' : 'text-white'}`}>
                {feat.title}
              </h3>
              <p className={`text-sm font-[Jost] font-light leading-relaxed ${i % 2 === 0 ? 'text-black/55' : 'text-white/55'}`}>
                {feat.desc}
              </p>

              {/* Hover green accent bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5d8f44] to-[#4d7a38] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5d8f44]/40 to-transparent" />
    </section>
  );
};

export default Features;