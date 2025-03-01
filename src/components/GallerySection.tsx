import React, { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
  images?: string[];
}

const GallerySection = ({
  title = "Nossa Galeria",
  subtitle = "Conheça alguns dos nossos melhores trabalhos e deixe-se inspirar para sua próxima tatuagem",
  images = [
    "https://images.unsplash.com/photo-1581342878583-5f71d2dac3d7?q=80&w=1000",
    "https://images.unsplash.com/photo-1590246814883-351321987df1?q=80&w=1000",
    "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=1000",
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1000",
    "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1000",
    "https://images.unsplash.com/photo-1542727365-19732a80dcfd?q=80&w=1000",
    "https://images.unsplash.com/photo-1612316713082-fcb189271ca5?q=80&w=1000",
    "https://images.unsplash.com/photo-1561120589-7d6730102dc0?q=80&w=1000",
  ],
}: GallerySectionProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setSelectedImageIndex(
        selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1,
      );
    } else {
      setSelectedImageIndex(
        selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0,
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Banner */}
        <motion.div
          className="relative w-full h-40 md:h-60 mb-12 overflow-hidden rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1543059080-f9b1272213d5?q=80&w=2000&auto=format&fit=crop"
            alt="Tattoo studio banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="px-8 md:px-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Arte Exclusiva
              </h3>
              <p className="text-zinc-300 max-w-md">
                Cada tatuagem é uma obra de arte única, criada especialmente
                para você
              </p>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image}
                alt={`Tattoo artwork ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Ver detalhes
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        <ImageModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          images={images}
          currentIndex={selectedImageIndex}
          onNavigate={handleNavigate}
        />
      </div>
    </section>
  );
};

export default GallerySection;
