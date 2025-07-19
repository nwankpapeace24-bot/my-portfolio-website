"use client";

import { motion } from "framer-motion";
import { FiTrendingUp, FiGlobe } from "react-icons/fi";
import Image from "next/image";

const Brands = () => {
  // Brand logos array
  const brands = [
    { id: 1, name: "Brand 1", image: "/t-1.jpg" },
    { id: 2, name: "Brand 2", image: "/t-2.jpg" },
    { id: 3, name: "Brand 3", image: "/t-3.jpg" },
    { id: 4, name: "Brand 4", image: "/t-4.jpg" },
    { id: 5, name: "Brand 5", image: "/t-5.jpg" },
    { id: 6, name: "Brand 6", image: "/t-6.jpg" },
    { id: 7, name: "Brand 7", image: "/t-7.jpg" },
    { id: 8, name: "Brand 8", image: "/t-8.jpg" },
    { id: 9, name: "Brand 9", image: "/t-9.jpg" },
    { id: 10, name: "Brand 10", image: "/t-10.jpg" },
    { id: 11, name: "Brand 11", image: "/t-11.jpg" },
    { id: 12, name: "Brand 12", image: "/t-12.jpg" },
    { id: 13, name: "Brand 13", image: "/t-13.jpg" },
    { id: 14, name: "Brand 14", image: "/t-14.jpg" },
  ];

  // Triple the brands for ultra-smooth infinite scroll
  const triplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-writer-powder to-writer-lavender relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-10 left-1/4 w-64 h-64 bg-writer-sky-blue rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: 3,
          }}
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-writer-deep-blue rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 text-writer-deep-blue mb-4">
              <FiGlobe className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wider uppercase accent-text">
                Trusted Partnerships
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-writer-deep-blue leading-tight mb-6">
              Brands That <span className="text-gradient">Trust My Work</span>
            </h2>

            {/* <p className="text-base sm:text-lg text-writer-deep-blue leading-relaxed max-w-2xl mx-auto opacity-90">
              Collaborating with industry leaders across iGaming, crypto, and
              esports to deliver content that drives results and builds lasting
              partnerships.
            </p> */}
          </motion.div>
        </div>

        {/* Infinite Scrolling Brands */}
        <div className="w-full overflow-hidden">
          {/* First Row - Left to Right (Slower) */}
          <div className="relative mb-8 sm:mb-12">
            <motion.div
              animate={{
                x: [0, -100 / 3 + "%"],
              }}
              transition={{
                duration: 60, // Much slower - 60 seconds
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex space-x-8 sm:space-x-12 lg:space-x-16 will-change-transform"
              style={{ width: "300%" }}
            >
              {triplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`row1-${brand.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-32 sm:w-40 lg:w-48 h-16 sm:h-20 lg:h-24 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                      sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-writer-sky-blue/10 to-writer-cornflower/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left (Slightly Different Speed) */}
          <div className="relative">
            <motion.div
              animate={{
                x: [-100 / 3 + "%", 0],
              }}
              transition={{
                duration: 70, // Slightly different speed for visual interest
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex space-x-8 sm:space-x-12 lg:space-x-16 will-change-transform"
              style={{ width: "300%" }}
            >
              {[...triplicatedBrands].reverse().map((brand, index) => (
                <motion.div
                  key={`row2-${brand.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05 + 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-32 sm:w-40 lg:w-48 h-16 sm:h-20 lg:h-24 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                      sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-writer-cornflower/10 to-writer-deep-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-writer-deep-blue to-writer-sky-blue rounded-xl sm:rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-xl"></div>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-heading font-bold">
                    50+
                  </div>
                  <div className="text-sm sm:text-base opacity-90">
                    Brands Served
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-heading font-bold">
                    95%
                  </div>
                  <div className="text-sm sm:text-base opacity-90">
                    Client Retention
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-heading font-bold flex items-center justify-center space-x-1">
                    <span>4.5</span>
                    <FiTrendingUp className="w-6 h-6" />
                  </div>
                  <div className="text-sm sm:text-base opacity-90">
                    Average Rating
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
                  Join these industry leaders who trust my expertise to elevate
                  their content strategy and drive measurable results.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
