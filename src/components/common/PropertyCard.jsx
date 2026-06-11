import { motion } from 'framer-motion';
import { Bed, Bath, Maximize, MapPin, Trees, Waves } from 'lucide-react';

const PropertyCard = ({ property, index = 0 }) => {
  const { title, type, location, price, area, beds, baths, pool, garden, image, tag, tagColor } = property;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group luxury-card gold-border-card rounded-none overflow-hidden bg-white cursor-pointer"
    >
      {/* Image */}
      <div className="img-zoom-wrap relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="img-inner w-full h-full object-cover"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        
        {/* Tag */}
        {tag && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 text-[10px] tracking-widest uppercase font-medium ${
              tagColor === 'gold'
                ? 'bg-[#D4AF37] text-[#1A202C]'
                : 'bg-[#1A202C] text-white'
            }`}
          >
            {tag}
          </div>
        )}

        {/* Price on hover */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <span className="font-[Cormorant_Garamond] text-2xl font-medium text-white">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-medium mb-1">{type}</p>
            <h3 className="font-[Cormorant_Garamond] text-xl font-medium text-[#1A202C]">{title}</h3>
          </div>
          <span className="font-[Cormorant_Garamond] text-lg font-semibold text-[#1A202C]">{price}</span>
        </div>

        <div className="flex items-center gap-1 text-[#2D3748]/60 mt-2 mb-4">
          <MapPin size={12} />
          <span className="text-xs">{location}</span>
        </div>

        <div className="h-px bg-[#D4AF37]/20 mb-4" />

        <div className="flex items-center gap-4 text-[#2D3748]/70 text-xs">
          <div className="flex items-center gap-1.5">
            <Bed size={13} className="text-[#D4AF37]" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath size={13} className="text-[#D4AF37]" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize size={13} className="text-[#D4AF37]" />
            <span>{area}</span>
          </div>
          {pool && (
            <div className="flex items-center gap-1.5">
              <Waves size={13} className="text-[#D4AF37]" />
              <span>Pool</span>
            </div>
          )}
          {garden && (
            <div className="flex items-center gap-1.5">
              <Trees size={13} className="text-[#D4AF37]" />
              <span>Garden</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;