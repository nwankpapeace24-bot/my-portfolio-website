"use client";

import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiCalendar,
  FiStar,
  FiArrowRight,
  FiBookOpen,
  FiChevronDown,
  FiChevronUp,
  FiUsers,
  FiMessageCircle,
} from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const portfolioItems = [
    // Featured Casino Reviews (kept as highlights)
    {
      id: 1,
      title: "Bao Casino Review",
      category: "crypto-gambling",
      type: "Casino Review",
      client: "CryptoManicks",
      description:
        "Comprehensive review of Bao Casino's crypto gambling features and bonuses.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75",
      date: "July 2025",
      tags: ["Featured", "Crypto", "5★ Rating"],
      featured: true,
      rating: 5.0,
      link: "https://cryptomaniaks.com/reviews/bao-casino",
    },
    {
      id: 2,
      title: "BetChain Casino Review 2025",
      category: "crypto-gambling",
      type: "Casino Review",
      client: "CryptoManicks",
      description:
        "Updated 2025 review of BetChain Casino's Bitcoin betting platform.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75",
      date: "June 2025",
      tags: ["Featured", "Bitcoin", "4.8★"],
      featured: true,
      rating: 4.8,
      link: "https://cryptomaniaks.com/reviews/betchain",
    },

    // Consolidated Esports Card
    {
      id: 3,
      title: "Esports News Hub",
      category: "esports",
      type: "News Portal",
      client: "Esports",
      description:
        "Your gateway to CS:GO roster changes, player retirements, and tournament coverage. Explore 50+ articles on esports betting insights.",
      image: "/Sami.jpeg", // Use a collage image of multiple games
      date: "2023-2025",
      tags: ["CS:GO", "Dota 2", "Apex Legends", "Overwatch"],
      featured: true,
      rating: 4.5,
      link: "https://esportbet.com/author/peace-nwankpa/", // Main esports portal
    },

    // Other Casino/Gambling Highlights
    {
      id: 4,
      title: "1xBit Casino Review",
      category: "crypto-gambling",
      type: "Casino Review",
      client: "Webopedia",
      description:
        "Analysis of 1xBit's 7 BTC welcome bonus and anonymous betting.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75",
      date: "April 2025",
      tags: ["Sports Betting", "Anonymous Play"],
      featured: false,
      rating: 4.6,
      link: "https://webopedia.com/reviews/1xbit",
    },
    {
      id: 5,
      title: "Best Crypto Jackpot Sites (2025)",
      category: "crypto-gambling",
      type: "Industry Guide",
      client: "Crypto2Community",
      description:
        "Curated guide to platforms like METAWIN ($700K prizes) and C.bet (130% BTC bonus).",
      image:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop&crop=entropy&auto=format&q=75",
      date: "June 2025",
      tags: ["Jackpots", "High Payouts"],
      featured: false,
      rating: 4.5,
      link: "https://crypto2community.com/crypto-gambling/boxing-sportsbooks-with-bitcoin/",
    },
    {
      id: 6,
      title: "OG Bench Taiga Ahead of TI12 Qualifiers",
      category: "esports",
      type: "News Article",
      client: "Esports",
      description:
        "OG's decision to bench Tommy 'Taiga' Le before The International 12 qualifiers.",
      image: "/dota.jpg",
      date: "August 2023",
      tags: ["Dota 2", "OG", "Roster Changes"],
      featured: false,
      rating: 4.3,
      link: "https://esportbet.com/author/peace-nwankpa/",
    },
  ];

  // Fixed the show more/less logic
  const itemsToShow = showAll ? portfolioItems.length : 6;
  const displayedItems = portfolioItems.slice(0, itemsToShow);
  const hasMoreItems = portfolioItems.length > 6;

  const handleReadMore = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-writer-sky-blue rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-writer-lavender rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-writer-cornflower rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center space-x-2 text-writer-deep-blue mb-4">
            <FiBookOpen className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase accent-text">
              Featured Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-writer-deep-blue leading-tight mb-6">
            Portfolio & <span className="text-gradient">Case Studies</span>
          </h2>

          <p className="text-base sm:text-lg text-writer-deep-blue leading-relaxed max-w-2xl mx-auto opacity-90">
            Explore some of my recent work and the measurable results achieved
            for clients across crypto, gaming, and tech industries.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          key={showAll ? "all" : "limited"} // Add key to force re-render
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 6} // Prioritize first 6 images
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-writer-deep-blue px-2 py-1 rounded-md text-xs font-medium">
                    {item.type}
                  </span>
                </div>

                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-writer-sky-blue text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                      <FiStar className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Date */}
                <div className="absolute bottom-3 right-3">
                  <div className="bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                    <FiCalendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                {/* Client */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-writer-sky-blue font-medium">
                    {item.client}
                  </span>
                  <div className="flex items-center space-x-1">
                    <FiStar className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-writer-cornflower">
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-writer-deep-blue mb-2 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-writer-deep-blue opacity-80 leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-writer-powder text-writer-deep-blue px-2 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(item.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div
                    onClick={() => handleReadMore(item.link)}
                    className="flex items-center space-x-1 text-writer-sky-blue hover:text-writer-deep-blue transition-colors duration-300 cursor-pointer"
                  >
                    <span className="text-sm font-medium">Read More</span>
                    <FiExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More/Less Button */}
        {hasMoreItems && (
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
                  ? `Show Less (Hide ${portfolioItems.length - 6} items)`
                  : `Show More (${portfolioItems.length - 6} more items)`}
              </span>
              {showAll ? (
                <FiChevronUp className="w-4 h-4 group-hover:translate-y-[-1px] transition-transform duration-300" />
              ) : (
                <FiChevronDown className="w-4 h-4 group-hover:translate-y-[1px] transition-transform duration-300" />
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-writer-deep-blue to-writer-sky-blue rounded-xl sm:rounded-2xl p-8 sm:p-10 text-white shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-base sm:text-lg opacity-90 mb-6 max-w-xl mx-auto">
              Join these successful clients who transformed their content
              strategy and achieved measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-writer-deep-blue px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FiUsers className="w-4 h-4" />
                  <span>Start Your Project</span>
                </motion.button>
              </Link>
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-writer-deep-blue transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FiMessageCircle className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
