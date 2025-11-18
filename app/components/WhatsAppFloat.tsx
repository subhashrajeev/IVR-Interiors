'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/918885575733?text=Hi,%20I'm%20interested%20in%20your%20interior%20design%20services"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 animate-glow"
    >
      <motion.div
        animate={{
          rotate: [0, 10, -10, 10, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10" />
      </motion.div>

      {/* Pulse effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
    </motion.a>
  );
};

export default WhatsAppFloat;
