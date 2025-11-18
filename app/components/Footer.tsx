'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Modular Kitchens',
    'Wardrobes',
    'TV Units',
    'False Ceiling',
    'Interior Renovation',
    'Custom Carpentry',
  ];

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4 font-[var(--font-playfair)]">
              IVR INTERIORS
            </h3>
            <p className="text-gray-400 mb-4">
              Crafting beautiful spaces with 15+ years of expertise in modular kitchens and wardrobes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-all duration-300 hover:scale-110"
              >
                <FaYoutube />
              </a>
              <a
                href="https://wa.me/918885575733"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 text-primary-500 flex-shrink-0" />
                <span className="text-sm">
                  Flat No. 204, Island Towers, KTR Colony, Balaji Nagar, Nizampet, Hyderabad – 500090
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="w-5 h-5 text-primary-500" />
                <a href="tel:+918885575733" className="hover:text-primary-500 transition-colors">
                  +91 88855 75733
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="w-5 h-5 text-primary-500" />
                <a href="mailto:venkatarajuandco@gmail.com" className="hover:text-primary-500 transition-colors text-sm">
                  venkatarajuandco@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} IVR Interiors. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed & Developed with ❤️ for IVR Interiors
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
