import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const HeroSection = ({
  title = "Arte na Pele",
  tagline = "Transformando ideias em arte única na sua pele",
  backgroundImage = "/hero/hero3.jpg", 
  ctaText = "Agende sua consulta",
  onCtaClick = () => console.log("CTA clicked"),
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated grain texture */}
      <div className="absolute inset-0 opacity-50 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] animate-grain" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
              {title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            {tagline}
          </motion.p>

          <motion.button
            onClick={onCtaClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black px-8 py-4 text-lg font-medium rounded-full 
                     hover:bg-opacity-90 transition-all duration-300
                     shadow-[0_0_20px_rgba(255,255,255,0.3)]
                     hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            {ctaText}
          </motion.button>
        </div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-purple-500/20 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-red-500/20 to-transparent blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4,
        }}
      />
    </section>
  );
};

export default HeroSection;