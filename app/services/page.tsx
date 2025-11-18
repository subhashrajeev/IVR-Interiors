'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaKitchenSet, FaArrowRight } from 'react-icons/fa6';
import { BiCloset } from 'react-icons/bi';
import { FaTv, FaCouch, FaCheckCircle } from 'react-icons/fa';
import { MdRoofing } from 'react-icons/md';
import { GiWoodBeam } from 'react-icons/gi';

const services = [
  {
    icon: FaKitchenSet,
    title: 'Modular Kitchens',
    description:
      'Experience the perfect blend of style, functionality, and innovation with our custom-designed modular kitchens. We create spaces that inspire culinary creativity.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&h=600&q=80',
    features: [
      'Custom design to match your lifestyle',
      'Premium quality materials and fittings',
      'Space optimization solutions',
      'Easy maintenance and durability',
      'Soft-close mechanisms',
      'Modern storage solutions',
    ],
  },
  {
    icon: BiCloset,
    title: 'Wardrobes',
    description:
      'Transform your bedroom with our elegant and spacious wardrobe solutions. From walk-in closets to sliding door wardrobes, we design storage that complements your style.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=600&q=80',
    features: [
      'Customized to your space and needs',
      'Variety of finishes and materials',
      'Intelligent storage organization',
      'Sliding and hinged door options',
      'Mirror and lighting integration',
      'Drawer and shelf customization',
    ],
  },
  {
    icon: FaTv,
    title: 'TV Units',
    description:
      'Create the perfect entertainment hub with our modern TV unit designs. Functional, stylish, and tailored to your living room aesthetics.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&h=600&q=80',
    features: [
      'Contemporary and classic designs',
      'Cable management solutions',
      'Storage for media devices',
      'Wall-mounted and floor-standing options',
      'LED lighting integration',
      'Customizable compartments',
    ],
  },
  {
    icon: MdRoofing,
    title: 'False Ceiling',
    description:
      'Add elegance and sophistication to your interiors with our beautiful false ceiling designs. Perfect for hiding imperfections while adding aesthetic value.',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&h=600&q=80',
    features: [
      'Gypsum and POP ceiling options',
      'Integrated lighting solutions',
      'Acoustic insulation benefits',
      'Modern and traditional patterns',
      'Durable and long-lasting',
      'Easy to maintain',
    ],
  },
  {
    icon: FaCouch,
    title: 'Interior Renovation',
    description:
      'Give your home a complete makeover with our comprehensive interior renovation services. From concept to completion, we transform spaces into dream homes.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&h=600&q=80',
    features: [
      'Complete home transformation',
      'Modern design aesthetics',
      'Quality workmanship guaranteed',
      'Timely project completion',
      'Budget-friendly solutions',
      'End-to-end project management',
    ],
  },
  {
    icon: GiWoodBeam,
    title: 'Custom Carpentry',
    description:
      'Bring your unique ideas to life with our custom carpentry services. We create bespoke furniture and fittings tailored to your exact specifications.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&h=600&q=80',
    features: [
      'Bespoke furniture design',
      'Expert craftsmanship',
      'Premium wood selection',
      'Detailed finishing work',
      'Custom dimensions and styles',
      'Personalized solutions',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[var(--font-playfair)]">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive interior design solutions crafted to perfection. From modular kitchens to
              complete home renovations, we bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-7xl mx-auto space-y-24"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)]">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <FaCheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      Get a Quote
                      <FaArrowRight />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Process Section */}
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
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From consultation to completion, we ensure a seamless experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We understand your vision, requirements, and budget',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team creates detailed designs and 3D visualizations',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Expert craftsmen bring the design to life with precision',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Quality check and timely handover of your dream space',
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[var(--font-playfair)]">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let&apos;s discuss your project and create something extraordinary together
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
