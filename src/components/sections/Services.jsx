import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { UNSPLASH } from '../../data/properties';

const SERVICES = [
  {
    title: 'Buy',
    subtitle: 'Luxury Properties',
    desc: 'Exclusive farmhouses, resort villas, and private estates across Delhi NCR\'s most sought-after locations.',
    image: UNSPLASH.farmhouse1,
    link: '/services',
  },
  {
    title: 'Rent',
    subtitle: 'Premium Spaces',
    desc: 'Short and long-term luxury rentals for those who seek the finest without permanence.',
    image: UNSPLASH.villa2,
    link: '/services',
  },
  {
    title: 'Turnkey',
    subtitle: 'Design & Build',
    desc: 'Complete design, architecture, construction, and interior services under one roof.',
    image: UNSPLASH.interior1,
    link: '/services',
  },
  {
    title: 'Invest',
    subtitle: 'Farmhouse Returns',
    desc: 'Strategic farmhouse and villa investments with proven capital appreciation potential.',
    image: UNSPLASH.aerial,
    link: '/services',
  },
];

const Services = () => {
  return (
    <section className="section-pad bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5d8f44]/40 to-transparent" />

      <div className="max-w-[1380px] mx-auto px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title={<>Our Signature<br /><span className="italic">Services</span></>}
          subtitle="Comprehensive luxury real estate solutions crafted for the discerning few."
          light
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((srv, i) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden cursor-pointer img-zoom-wrap"
              style={{ height: '420px' }}
            >
              <img
                src={srv.image}
                alt={srv.title}
                className="img-inner absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:via-black/60 transition-all duration-500" />

              {/* Number */}
              <div className="absolute top-5 right-5 font-[Cormorant_Garamond] text-5xl font-light text-white/10 group-hover:text-[#5d8f44]/25 transition-colors duration-500">
                0{i + 1}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#5d8f44] text-[9px] tracking-[0.3em] uppercase mb-1">{srv.subtitle}</p>
                <h3 className="font-[Cormorant_Garamond] text-2xl font-medium text-white mb-0 group-hover:mb-3 transition-all duration-300">{srv.title}</h3>
                <p className="text-white/60 text-xs font-[Jost] font-light leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-400">
                  {srv.desc}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[#5d8f44] text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight size={10} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;