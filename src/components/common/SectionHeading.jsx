import { motion } from 'framer-motion';

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  const textColor = light ? 'text-white' : 'text-[#1A202C]';
  const subColor = light ? 'text-white/70' : 'text-[#2D3748]/70';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex flex-col ${alignClass} ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-10 h-px bg-[#D4AF37]" />
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-[11px] font-medium font-[Jost]">
            {eyebrow}
          </span>
          <span className="block w-10 h-px bg-[#D4AF37]" />
        </div>
      )}
      <h2
        className={`font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-6xl font-light leading-tight ${textColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-xl text-base font-[Jost] font-light leading-relaxed ${subColor} ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;