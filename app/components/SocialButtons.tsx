'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const SocialButtons = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: '#',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: 'https://wa.me/918885575733',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      href: '#',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col space-y-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            whileHover={{ scale: 1.2, rotate: 360 }}
            className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.color} ${social.hoverColor} flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 animate-bounce-slow`}
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialButtons;
