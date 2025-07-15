"use client";

import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiBookOpen,
  FiPenTool,
  FiStar,
  FiHeart,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Background decorations with delayed animation
  const backgroundDecorationVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 1.5, // Delay background decorations by 1.5 seconds
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-writer-powder via-writer-lavender to-writer-cornflower relative overflow-hidden flex items-center">
      {/* Background decorative elements - Now with delayed animation */}
      <motion.div 
        className="absolute inset-0"
        variants={backgroundDecorationVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            delay: 2, // Additional delay for the animation loop
          }}
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-writer-sky-blue rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            delay: 2.2, // Staggered delay for natural appearance
          }}
          className="absolute top-20 sm:top-40 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-writer-deep-blue rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            delay: 2.4, // Staggered delay for natural appearance
          }}
          className="absolute -bottom-10 sm:-bottom-20 left-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-writer-cornflower rounded-full mix-blend-multiply filter blur-xl"
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-20 pb-8 sm:pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)] lg:min-h-[80vh]"
        >
          {/* Left Content - Hero Text */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-writer-deep-blue mb-3 sm:mb-4">
                <FiPenTool className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase accent-text">
                  iGaming • Crypto • Esports Writer
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-writer-deep-blue leading-tight">
                Meet
                <span className="block text-gradient">Peace Nwankpa</span>
              </h1>
              <motion.div
                className="mono-text text-xs sm:text-sm text-writer-cornflower opacity-80"
                variants={itemVariants}
              >
                ✍️ Writer | Crypto Analyst | Gaming Aficionado
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-body text-writer-deep-blue leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              I craft high-impact content that simplifies blockchain, energizes
              gaming communities, and builds brand credibility. With a passion
              for immersive storytelling and sharp industry insight, I deliver
              results that engage, educate, and convert.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link href="#portfolio">
                <button className="group btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <FiBookOpen className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="font-heading text-sm sm:text-base">
                    Explore My Work
                  </span>
                </button>
              </Link>
              <Link href="#contact">
                <button className="group btn-secondary font-heading text-sm sm:text-base w-full sm:w-auto">
                  Hire Me for Content Strategy
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Image Card */}
          <motion.div
            variants={imageVariants}
            className="relative order-1 lg:order-2 px-4 sm:px-0"
          >
            <div className="relative max-w-sm sm:max-w-md lg:max-w-none mx-auto">
              {/* Main image card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl bg-white p-3 sm:p-6 mt-10 transform transition-all duration-500"
              >
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src="/img-4.jpg"
                    alt="Peace Nwankpa - iGaming, Crypto & Esports Writer"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Floating elements on image - Responsive sizing */}
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-3 sm:top-6 left-3 sm:left-6 text-white drop-shadow-lg z-10"
                  >
                    <FiStar className="w-4 sm:w-5 h-4 sm:h-5" />
                  </motion.div>
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "1s" }}
                    className="absolute top-3 sm:top-6 right-3 sm:right-6 text-white drop-shadow-lg z-10"
                  >
                    <FiHeart className="w-3 sm:w-4 h-3 sm:h-4" />
                  </motion.div>
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "2s" }}
                    className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white drop-shadow-lg z-10"
                  >
                    <FiPenTool className="w-3 sm:w-4 h-3 sm:h-4" />
                  </motion.div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-writer-deep-blue/30 via-transparent to-transparent"></div>
                </div>

                {/* Card content */}
                <div className="mt-3 sm:mt-4 text-center">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-writer-deep-blue">
                    Peace Nwankpa
                  </h3>
                  <p className="text-xs sm:text-sm accent-text text-writer-cornflower mt-1">
                    Expert Content Creator
                  </p>
                </div>
              </motion.div>

              {/* Decorative elements around card - Responsive */}
              <motion.div
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-full h-full bg-writer-sky-blue rounded-2xl sm:rounded-3xl -z-10 opacity-20"
              />
              <motion.div
                animate={{ rotate: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-full h-full bg-writer-deep-blue rounded-2xl sm:rounded-3xl -z-20 opacity-10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Bottom Edge */}
      <div className="absolute -bottom-6 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[60px] sm:h-[80px] lg:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,120 L0,60 Q100,20 200,60 Q300,100 400,60 Q500,20 600,60 Q700,100 800,60 Q900,20 1000,60 Q1100,100 1200,60 L1200,120 Z"
            fill="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
