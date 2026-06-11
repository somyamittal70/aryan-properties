import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  const phoneNumber = "+919654005400";

   const message =
    "Hi, I am interested in your services. Please share details.";
    
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
        type: "spring",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 md:bottom-5 md:right-5 lg:bottom-8 lg:right-8 z-[999] group"
    >
      
      {/* Button */}
      <div
        className="
          relative
          flex
          items-center
          justify-center
          w-12 h-12
          md:w-13 md:h-13
          lg:w-[70px] lg:h-[70px]
          rounded-full
          bg-[#25D366]
          text-white
        "
      >
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
      </div>

      {/* Tooltip */}
      <div
        className="
          hidden md:block
          absolute
          right-20
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
        Chat With Us
      </div>
    </motion.a>
  );
}