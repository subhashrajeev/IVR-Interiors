'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Metadata } from 'next';

const portfolioItems = [
  {
    id: 1,
    title: 'Modern L-Shaped Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Luxury Master Bedroom Wardrobe',
    category: 'Wardrobe',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Contemporary Living Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Island Kitchen Design',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Walk-in Wardrobe',
    category: 'Wardrobe',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Minimalist TV Unit',
    category: 'TV Unit',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Modular Kitchen with Breakfast Counter',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&h=600&fit=crop',
  },
  {
    id: 8,
    title: 'Contemporary False Ceiling',
    category: 'Ceiling',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
  },
  {
    id: 9,
    title: 'Kids Bedroom with Study',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop',
  },
  {
    id: 10,
    title: 'Elegant Dining Area',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=600&fit=crop',
  },
  {
    id: 11,
    title: 'U-Shaped Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
  },
  {
    id: 12,
    title: 'Custom Entertainment Unit',
    category: 'TV Unit',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
  },
];

const categories = ['All', 'Kitchen', 'Wardrobe', 'Living Room', 'TV Unit', 'Bedroom', 'Ceiling', 'Dining'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const lightboxSlides = filteredItems.map((item) => ({
    src: item.image,
    title: item.title,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-[var(--font-playfair)]">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of beautifully crafted interiors that showcase our commitment to
              excellence and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
      />

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
              Love What You See?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let&apos;s create something beautiful for your home
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
