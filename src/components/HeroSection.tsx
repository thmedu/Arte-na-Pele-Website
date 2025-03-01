import React, { useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  tagline?: string;
  backgroundImage?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Arte na Pele",
  tagline = "Transformando ideias em arte única na sua pele",
  backgroundImage = "https://images.unsplash.com/photo-1607461194891-3f736169b515?q=80&w=2070&auto=format&fit=crop",
  ctaText = "Agende sua consulta",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section
      ref={ref}
      className="relative w-full h-[700px] bg-zinc-900 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        animate={controls}
        variants={bannerVariants}
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={backgroundImage}
          alt="Tattoo art background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Banner overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <div className="max-w-2xl">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={titleVariants}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {title}
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={taglineVariants}
          >
            <p className="text-xl md:text-2xl text-zinc-200 mb-8">{tagline}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={buttonVariants}
            whileHover="hover"
          >
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-medium text-lg px-8 py-6 h-auto rounded-md transition-all duration-300 shadow-lg hover:shadow-red-600/20"
            >
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-900 to-transparent z-10" />

      {/* Animated Floating design elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-red-500/10 blur-3xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default HeroSection;
