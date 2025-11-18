'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaAward, FaClock, FaUserCheck, FaHeart, FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function About() {
  const highlights = [
    {
      icon: FaAward,
      title: '15+ Years Experience',
      description: 'Over a decade of excellence in interior design and modular solutions',
      stats: '500+ Projects',
    },
    {
      icon: FaUserCheck,
      title: 'Quality Craftsmanship',
      description: 'Premium materials and meticulous attention to every detail',
      stats: '100% Satisfaction',
    },
    {
      icon: FaClock,
      title: 'On-time Delivery',
      description: 'Committed to completing projects within agreed timelines',
      stats: '95% On-time',
    },
  ];

  const values = [
    {
      icon: FaHeart,
      title: 'Passion',
      description:
        'We are passionate about creating beautiful spaces that bring joy to our clients every day.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description:
        'Constantly exploring new designs, materials, and techniques to deliver cutting-edge solutions.',
    },
    {
      icon: FaHandshake,
      title: 'Trust',
      description:
        'Building lasting relationships through transparency, honesty, and exceptional service.',
    },
  ];

  const milestones = [
    { year: '2008', event: 'IVR Interiors Founded', description: 'Started with a vision to transform homes' },
    { year: '2012', event: '100+ Projects Completed', description: 'Milestone achievement in quality delivery' },
    { year: '2016', event: 'Expanded Services', description: 'Added complete interior renovation services' },
    { year: '2020', event: '500+ Happy Clients', description: 'Trust and satisfaction milestone reached' },
    { year: '2024', event: 'Industry Leader', description: 'Recognized as top interior designers in Hyderabad' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[var(--font-playfair)]">
                About <span className="gradient-text">IVR Interiors</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Crafting dream spaces for over 15 years with passion, precision, and perfection.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Founded by <strong>I. Venkata Raju (IVR)</strong>, IVR Interiors has been transforming
                houses into homes since 2008. With a commitment to quality craftsmanship and innovative
                design, we specialize in creating modular kitchens, wardrobes, and complete interior
                solutions that reflect your unique style and lifestyle.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&h=1000&q=80"
                  alt="IVR Interiors Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6"
              >
                <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6"
              >
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-playfair)]">
              Why Choose <span className="gradient-text">Us</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three pillars that make us the preferred choice for interior design in Hyderabad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
                    <p className="text-gray-600 mb-4">{highlight.description}</p>
                    <div className="text-3xl font-bold gradient-text">{highlight.stats}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[var(--font-playfair)]">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestones that mark our growth and commitment to excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-700 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-3xl font-bold gradient-text mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg hidden md:flex">
                    {index + 1}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
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
              Let&apos;s Create Something Beautiful Together
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Experience the IVR Interiors difference. Contact us today for a free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
