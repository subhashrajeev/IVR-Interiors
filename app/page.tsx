'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaAward, FaClock, FaUserCheck, FaKitchenSet, FaCouch, FaTv } from 'react-icons/fa6';
import { MdRoofing } from 'react-icons/md';
import { GiWoodBeam } from 'react-icons/gi';
import { BiCloset } from 'react-icons/bi';
import Testimonials from './components/Testimonials';

export default function Home() {
  const features = [
    {
      icon: FaAward,
      title: '15+ Years Experience',
      description: 'Trusted expertise in interior design and modular solutions',
    },
    {
      icon: FaUserCheck,
      title: 'Quality Craftsmanship',
      description: 'Premium materials and attention to every detail',
    },
    {
      icon: FaClock,
      title: 'Timely Delivery',
      description: 'On-schedule project completion guaranteed',
    },
  ];

  const services = [
    {
      icon: FaKitchenSet,
      title: 'Modular Kitchens',
      description: 'Custom designed kitchens that blend style with functionality',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&h=400&q=80',
    },
    {
      icon: BiCloset,
      title: 'Wardrobes',
      description: 'Spacious and elegant wardrobe solutions for every bedroom',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=400&q=80',
    },
    {
      icon: FaTv,
      title: 'TV Units',
      description: 'Modern entertainment units that enhance your living space',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&h=400&q=80',
    },
    {
      icon: MdRoofing,
      title: 'False Ceiling',
      description: 'Beautiful ceiling designs that add elegance to your interiors',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&h=400&q=80',
    },
    {
      icon: FaCouch,
      title: 'Interior Renovation',
      description: 'Complete home transformation with modern design aesthetics',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&h=400&q=80',
    },
    {
      icon: GiWoodBeam,
      title: 'Custom Carpentry',
      description: 'Bespoke furniture and fittings tailored to your needs',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=600&h=400&q=80',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1920&h=1080&q=80"
            alt="Modern Interior Design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-[var(--font-playfair)]">
              Transform Your Space Into
              <br />
              <span className="gradient-text">A Dream Home</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Premium Modular Kitchens & Wardrobes in Hyderabad
            <br />
            <span className="text-primary-400">15+ Years of Craftsmanship Excellence</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/portfolio"
              className="group bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              View Portfolio
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
          >
            <motion.div className="w-1 h-3 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-playfair)]">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive interior solutions tailored to your lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Icon className="w-10 h-10 mb-3 text-primary-400" />
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-200">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore All Services
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-playfair)]">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let&apos;s discuss your dream interior project today
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
