import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CallNowFloat() {
  const phoneNumber = "+919654005400";

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      aria-label="Call Now"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
        type: "spring",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 left-4 md:bottom-5 md:left-5 lg:bottom-8 lg:left-8 z-[999] group"
    >
      
      {/* Button */}
      <div
        className="
          relative
          flex
          items-center
          justify-center
          w-12 h-12
          md:w-16 md:h-16
          lg:w-[70px] lg:h-[70px]
          rounded-full
          bg-[#ee1e0b]
          text-white
          
        "
      >
        <FaPhoneAlt className="w-6 h-6 md:w-7 md:h-7" />
      </div>

      {/* Tooltip */}
      <div
        className="
          hidden md:block
          absolute
          left-20
          top-1/2
          -translate-y-1/2
          whitespace-nowrap
          bg-[#0D1B3E]
          text-white
          text-sm
          px-4
          py-2
          rounded-xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          pointer-events-none
          shadow-xl
        "
      >
        Call Now
      </div>
    </motion.a>
  );
}