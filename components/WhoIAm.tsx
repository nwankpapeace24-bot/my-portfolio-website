"use client";

import { motion } from "framer-motion";
import {
  FiTrendingUp,
  FiMonitor,
  FiEdit3,
  FiTarget,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import Image from "next/image";

const WhoIAm = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: FiMonitor,
      title: "iGaming Content Expert",
      description:
        "Supplies helpful, and insightful iGaming reviews and guides to keep players informed and engaged.",
    },
    {
      icon: FiTrendingUp,
      title: "Crypto Native",
      description:
        "Churns out well-researched cryptocurrency news backed by a deep understanding of blockchain, DeFi and digital assets.",
    },
    {
      icon: FiEdit3,
      title: "Content Strategist",
      description:
        "Creates narratives that connects complex systems to audiences across different experience levels.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-writer-sky-blue rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-writer-cornflower rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content - Image (now on left) */}
          <motion.div variants={imageVariants} className="relative order-first">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main image container */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-white p-2 sm:p-3 transform transition-all duration-500"
              >
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src="/img-5.jpg"
                    alt="Peace Nwankpa - Professional Writer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-writer-deep-blue/20 via-transparent to-transparent"></div>

                  {/* Floating badges */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <FiMonitor className="w-4 h-4 text-writer-sky-blue" />
                      <span className="text-xs font-medium text-writer-deep-blue">
                        iGaming Expert
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                    className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <FiTrendingUp className="w-4 h-4 text-writer-sky-blue" />
                      <span className="text-xs font-medium text-writer-deep-blue">
                        Crypto Native
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  rotate: [0, -2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-writer-sky-blue to-writer-cornflower rounded-2xl sm:rounded-3xl -z-10 opacity-20"
              />

              <motion.div
                animate={{
                  rotate: [0, 1, 0],
                  scale: [1.02, 1, 1.02],
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tr from-writer-deep-blue to-writer-lavender rounded-2xl sm:rounded-3xl -z-20 opacity-15"
              />
            </div>
          </motion.div>

          {/* Right Content - Text (now on right) */}
          <div className="space-y-8 order-last">
            {/* Section Header */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2 text-writer-deep-blue mb-4">
                <FiUsers className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wider uppercase accent-text">
                  About Me
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-writer-deep-blue leading-tight">
                Who I Am
              </h2>
            </motion.div>

            {/* Main Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg sm:text-xl text-writer-deep-blue leading-relaxed">
                A{" "}
                <span className="font-semibold text-writer-sky-blue">
                  Crypto & iGaming Content Specialist
                </span>{" "}
                with a{" "}
                <span className="font-semibold text-writer-sky-blue">
                  gambler's insight & a gamer's edge
                </span>
                . From slot strategies to Bitcoin casinos, From slot strategies
                to Bitcoin casinos, I study ever-changing trends and spin
                compelling stories that drive action.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Whether crafting guides for crypto betting sites or reviews for
                high-stakes poker platforms, I write to{" "}
                <span className="font-semibold text-writer-deep-blue">
                  engage
                </span>
                ,{" "}
                <span className="font-semibold text-writer-deep-blue">
                  educate
                </span>
                , and{" "}
                <span className="font-semibold text-writer-deep-blue">
                  convert
                </span>
                .
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-1 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ x: -5 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-writer-powder/30 hover:bg-writer-powder/50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-writer-sky-blue/10 rounded-lg flex items-center justify-center group-hover:bg-writer-sky-blue/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-writer-sky-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-writer-deep-blue mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between pt-6 border-t border-writer-powder"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-writer-deep-blue">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-writer-cornflower font-medium">
                  Years in <span className="max-md:hidden">Crypto & </span>
                  iGaming
                </div>
              </div>
              <div className="w-px h-12 bg-writer-cornflower/30"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-writer-deep-blue">
                  1K+
                </div>
                <div className="text-xs sm:text-sm text-writer-cornflower font-medium">
                  Gaming Articles
                </div>
              </div>
              <div className="w-px h-12 bg-writer-cornflower/30"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-writer-deep-blue">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-writer-cornflower font-medium">
                  Happy Clients
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIAm;
