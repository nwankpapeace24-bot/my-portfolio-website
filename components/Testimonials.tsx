"use client";

import { motion } from "framer-motion";
import {
  FiStar,
  FiTrendingUp,
  FiAward,
  FiUsers,
  FiMessageCircle,
} from "react-icons/fi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

const Testimonials = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
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

  const testimonials = [
    {
      id: 1,
      name: "Senior Editor - Find.co",
      role: "Head of Content",
      company: "CryptoManiaks",
      testimonial:
        "Peace was a pleasure to work with; she was consistently punctual, professional, and receptive to feedback. Her writing was accurate and clear, and she always met deadlines without issue. I truly appreciated her reliability and collaborative spirit throughout our work together",
      rating: 5,
      metric: "40% Higher Engagement",
      category: "Crypto Gambling",
      featured: true,
    },
    {
      id: 2,
      name: "iGaming Sourcing Specialist",
      role: "Marketing Director",
      company: "Esportbet",
      testimonial:
        "It's always a pleasure working with Peace, she delivers high-quality casino reviews on time and communication is always smooth, making the entire process easy and efficient.",
      rating: 5,
      metric: "3x Social Shares",
      category: "iGaming",
      featured: true,
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? testimonials.length : 3;
  const displayedTestimonials = testimonials.slice(0, itemsToShow);
  const hasMoreItems = testimonials.length > 3;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-writer-powder via-white to-writer-lavender relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 w-40 h-40 bg-writer-sky-blue rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-writer-deep-blue rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 4,
          }}
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-writer-cornflower rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center space-x-2 text-writer-deep-blue mb-4">
              <BiSolidQuoteAltLeft className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wider uppercase accent-text">
                Client Success Stories
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-writer-deep-blue leading-tight mb-6">
              What Clients Say About{" "}
              <span className="text-gradient">My Work</span>
            </h2>

            {/* <p className="text-base sm:text-lg text-writer-deep-blue leading-relaxed max-w-2xl mx-auto opacity-90 mb-4">
              Trusted by leading iGaming, crypto, and esports brands to deliver
              content that drives engagement, builds authority, and converts
              readers into customers.
            </p> */}

            {/* Small selection indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-writer-powder px-4 py-2 rounded-full text-sm text-writer-deep-blue"
            >
              <FiStar className="w-4 h-4 text-writer-sky-blue" />
              <span className="font-medium">
                A small selection of client testimonials
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={showAll ? "all" : "limited"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 justify-items-center"
          >
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(testimonial.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden p-6 sm:p-8 w-full max-w-lg"
              >
                {/* Gradient border effect on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-writer-sky-blue via-writer-cornflower to-writer-deep-blue rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ padding: "2px" }}
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl w-full h-full"></div>
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <motion.div
                        animate={
                          hoveredCard === testimonial.id ? { rotate: 360 } : {}
                        }
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 bg-gradient-to-r from-writer-sky-blue to-writer-cornflower rounded-full flex items-center justify-center"
                      >
                        <BiSolidQuoteAltLeft className="w-5 h-5 text-white" />
                      </motion.div>
                      {testimonial.featured && (
                        <div className="bg-writer-sky-blue text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                          <FiAward className="w-3 h-3" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-writer-deep-blue leading-relaxed mb-6 text-sm sm:text-base">
                    "{testimonial.testimonial}"
                  </blockquote>

                  {/* Metric Highlight */}
                  <div className="bg-gradient-to-r from-writer-powder to-writer-lavender rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <FiTrendingUp className="w-4 h-4 text-writer-deep-blue" />
                      <span className="text-sm font-semibold text-writer-deep-blue">
                        {testimonial.metric}
                      </span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-heading font-bold text-writer-deep-blue text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <motion.div
                    animate={
                      hoveredCard === testimonial.id
                        ? { scale: 1.2, rotate: 45 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 w-2 h-2 bg-writer-sky-blue rounded-full opacity-30"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Show More/Less Button */}
        {hasMoreItems && (
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-10"
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white border-2 border-writer-deep-blue text-writer-deep-blue hover:bg-writer-deep-blue hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 mx-auto"
              >
                <span>
                  {showAll
                    ? `Show Less`
                    : `View All Testimonials (${testimonials.length - 3} more)`}
                </span>
                <FiUsers className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 lg:mt-20"
          >
            <div className="bg-gradient-to-r from-writer-deep-blue to-writer-sky-blue rounded-xl sm:rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-xl"></div>
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <FiStar className="w-8 h-8 text-yellow-400 fill-current" />
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
                  Ready to Join These Success Stories?
                </h3>
                <p className="text-base sm:text-lg opacity-90 mb-6 max-w-xl mx-auto">
                  Let's discuss how my proven content strategy can drive similar
                  results for your brand and boost your engagement and
                  conversions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link href="#contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white text-writer-deep-blue px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FiMessageCircle className="w-4 h-4" />
                      <span>Get Your Quote</span>
                    </motion.button>
                  </Link>
                  <Link href="#portfolio">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-writer-deep-blue transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FiTrendingUp className="w-4 h-4" />
                      <span>View Case Studies</span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
