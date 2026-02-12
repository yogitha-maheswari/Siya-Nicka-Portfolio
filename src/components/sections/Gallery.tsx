"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  galleryImages,
  galleryCategories,
  type GalleryCategory,
  type GalleryImage,
} from "@/data/galleryData";

const Gallery = () => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("All");
  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages.filter((img) => img.showInAll)
      : galleryImages.filter(
          (img) => img.category === activeCategory
        );

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary-force">
            Portfolio
          </p>

          <h2 className="text-editorial text-4xl font-light md:text-5xl lg:text-6xl">
            Selected Work
          </h2>

          <div className="section-divider mt-6" />
        </motion.div>

        {/* CATEGORY FILTER */}
        <motion.div
          className="mb-16 flex flex-wrap justify-center 
                     gap-5 sm:gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {galleryCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`underline-animation text-xs uppercase tracking-[0.2em] font-light transition-colors duration-300 ${
                  isActive ? "text-primary-force" : "nav-text"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="cinematic-hover relative aspect-3/4 overflow-hidden bg-secondary">
                  <img
                    src={
                      typeof image.src === "string"
                        ? image.src
                        : image.src.src
                    }
                    alt={image.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Hover text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs uppercase tracking-[0.2em] text-primary-force">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div className="relative flex max-h-[90vh] max-w-5xl flex-col items-start">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 -mt-10 p-2 nav-text hover:text-primary-force"
              >
                <X className="h-6 w-6" />
              </button>

              <img
                src={
                  typeof selectedImage.src === "string"
                    ? selectedImage.src
                    : selectedImage.src.src
                }
                alt={selectedImage.alt}
                className="max-h-[80vh] w-auto object-contain"
              />

              <span className="mt-4 text-xs uppercase tracking-[0.2em] nav-text">
                {selectedImage.alt}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
