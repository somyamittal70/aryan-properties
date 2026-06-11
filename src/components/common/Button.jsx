import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'gold',
  size = 'md',
  onClick,
  className = '',
  icon,
  ...props
}) => {
  const base =
    'inline-flex items-center gap-2 font-[Jost] font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer';

  const variants = {
    gold: 'bg-[#D4AF37] text-[#1A202C] hover:bg-[#C49B2A] shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.5)]',
    outline: 'bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A202C]',
    outlineWhite: 'bg-transparent border border-white text-white hover:bg-white hover:text-[#1A202C]',
    dark: 'bg-[#1A202C] text-white hover:bg-[#2D3748] border border-[#2D3748]',
    ghost: 'bg-transparent text-[#D4AF37] hover:underline p-0 tracking-widest',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-[10px]',
    md: 'px-7 py-3.5 text-[11px]',
    lg: 'px-10 py-4.5 text-[11px]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span>{icon}</span>}
    </motion.button>
  );
};

export default Button;