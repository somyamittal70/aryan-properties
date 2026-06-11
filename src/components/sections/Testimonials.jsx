import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { TESTIMONIALS } from '../../data/properties';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section className="section-pad bg-[#f5f7f4] relative overflow-hidden">
      {/* Green watermark circles */}
      <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full border border-[#5d8f44]/10" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-[#5d8f44]/5" />

      <div className="max-w-[1380px] mx-auto px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title={<>Words From Our<br /><span className="italic text-[#5d8f44]">Valued Clients</span></>}
          className="mb-14"
        />

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-4xl mx-auto">
          {/* Client photo */}
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative shrink-0"
          >
            <div className="w-48 h-56 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 12% 100%)' }}>
              <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
            </div>
            {/* Green frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#5d8f44]/30" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 12% 100%)' }} />
          </motion.div>

          {/* Quote */}
          <div className="flex-1">
            <Quote size={36} className="text-[#5d8f44]/30 mb-4" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-[Cormorant_Garamond] text-2xl font-light text-black leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} fill="#5d8f44" className="text-[#5d8f44]" />
                  ))}
                </div>
                <div>
                  <div className="font-[Jost] font-medium text-black text-sm">{t.name}</div>
                  <div className="text-[#5d8f44] text-[10px] tracking-widest uppercase mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav */}
            <div className="flex items-center gap-4 mt-8">
              <button onClick={prev} className="w-10 h-10 border border-black/20 flex items-center justify-center hover:border-[#5d8f44] hover:text-[#5d8f44] transition-colors">
                <ChevronLeft size={16} />
              </button>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1 transition-all duration-300 ${i === current ? 'w-8 bg-[#5d8f44]' : 'w-4 bg-black/15'}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 border border-black/20 flex items-center justify-center hover:border-[#5d8f44] hover:text-[#5d8f44] transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;