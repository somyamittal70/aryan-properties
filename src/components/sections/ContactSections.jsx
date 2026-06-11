import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export const ContactSection = () => {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-[1380px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title={<>Let's Find Your<br /><span className="italic text-[#5d8f44]">Perfect Estate</span></>}
              align="left"
              subtitle="Our luxury real estate consultants are available 7 days a week to guide you through our exclusive portfolio."
              className="mb-10"
            />

            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Phone', val: '+91 98765 43210' },
                { icon: Mail, label: 'Email', val: 'hello@aurum.estates' },
                { icon: MapPin, label: 'Office', val: 'Level 12, DLF Cyber Hub, Gurugram, Haryana' },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#5d8f44]/40 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#5d8f44]" />
                  </div>
                  <div>
                    <div className="text-[9px] tracking-widest uppercase text-black/40 mb-0.5">{label}</div>
                    <div className="text-sm text-black font-[Jost]">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7 }}
            className="border border-[#5d8f44]/25 p-8"
          >
            <h3 className="font-[Cormorant_Garamond] text-2xl font-medium text-black mb-6">Send an Enquiry</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {['Full Name', 'Phone Number'].map((ph) => (
                <input key={ph} type="text" placeholder={ph}
                  className="border border-black/15 px-4 py-3 text-sm text-black placeholder-black/35 focus:border-[#5d8f44]/70 focus:outline-none transition-colors w-full"
                />
              ))}
            </div>
            <input type="email" placeholder="Email Address"
              className="border border-black/15 px-4 py-3 text-sm text-black placeholder-black/35 focus:border-[#5d8f44]/70 focus:outline-none transition-colors w-full mb-4"
            />
            <select className="border border-black/15 px-4 py-3 text-sm text-black/55 focus:border-[#5d8f44]/70 focus:outline-none transition-colors w-full mb-4 bg-white">
              <option>I'm interested in...</option>
              <option>Luxury Farmhouse</option>
              <option>Resort Villa</option>
              <option>Private Estate</option>
              <option>Weekend Home</option>
              <option>Commercial Property</option>
            </select>
            <textarea placeholder="Tell us about your requirements..." rows={4}
              className="border border-black/15 px-4 py-3 text-sm text-black placeholder-black/35 focus:border-[#5d8f44]/70 focus:outline-none transition-colors w-full mb-6 resize-none"
            />
            <button className="w-full bg-[#5d8f44] text-white py-3.5 text-[10px] tracking-widest uppercase font-semibold hover:bg-[#4d7a38] transition-colors flex items-center justify-center gap-2">
              Submit Enquiry
              <ArrowRight size={12} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const CTA = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      {/* Subtle green grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background: 'repeating-linear-gradient(-45deg, #5d8f44 0, #5d8f44 1px, transparent 0, transparent 40px)',
          backgroundSize: '60px 60px'
        }}
      />
      {/* Green glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-[#5d8f44]/40" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#5d8f44] text-[10px] tracking-[0.35em] uppercase mb-4">Begin Your Journey</p>
          <h2 className="font-[Cormorant_Garamond] text-5xl md:text-6xl font-light text-white mb-6">
            Find Your Dream Farmhouse Today
          </h2>
          <p className="text-white/50 font-[Jost] font-light text-base max-w-xl mx-auto mb-10">
            Explore Delhi NCR's most exclusive collection of luxury farmhouses, resort villas, and private estates. Your perfect estate awaits.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="bg-[#5d8f44] text-white px-10 py-4 text-[10px] tracking-widest uppercase font-medium hover:bg-[#4d7a38] transition-colors flex items-center gap-2">
              Explore Properties
              <ArrowRight size={12} />
            </button>
            <button className="border border-[#5d8f44]/60 text-white px-10 py-4 text-[10px] tracking-widest uppercase font-medium hover:border-[#5d8f44] hover:bg-[#5d8f44]/10 transition-colors">
              Schedule Site Visit
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-[#5d8f44]/40" />
    </section>
  );
};