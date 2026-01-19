"use client";

import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiCalendar,
  FiStar,
  FiBookOpen,
  FiChevronDown,
  FiChevronUp,
  FiUsers,
  FiMessageCircle,
} from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function PortfolioClient({ initialItems }: { initialItems: any[] }) {
  const [showAll, setShowAll] = useState(false);

  // Logic: 2 on mobile, 3 on desktop by default
  // We use a simple slice that defaults to 3 (desktop row). 
  // CSS will handle the 2-column mobile layout.
  const itemsToShow = showAll ? initialItems.length : 3;
  const displayedItems = initialItems.slice(0, itemsToShow);
  const hasMoreItems = initialItems.length > 3;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleReadMore = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const formatDate = (dateInput: any) => {
    if (!dateInput) return "Recent";
    const d = new Date(dateInput);
    return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-writer-sky-blue rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-writer-lavender rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-writer-cornflower rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div
          key={showAll ? "all" : "limited"}
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
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={item.image || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-writer-deep-blue px-2 py-1 rounded-md text-xs font-medium">
                    {item.type}
                  </span>
                </div>
                {item.featured && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-writer-sky-blue text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                      <FiStar className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-3 right-3">
                  <div className="bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                    <FiCalendar className="w-3 h-3" />
                    <span>{formatDate(item.createdAt || item.date)}</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-writer-sky-blue font-medium">{item.client}</span>
                  <div className="flex items-center space-x-1">
                    <FiStar className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-writer-cornflower">{item.rating.toFixed(1)}</span>
                  </div>
                </div>
                <h3 className="text-lg font-heading font-bold text-writer-deep-blue mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-writer-deep-blue opacity-80 leading-relaxed mb-4 line-clamp-3">{item.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {(item.tags || []).slice(0, 3).map((tag: string, tagIndex: number) => (
                    <span key={tagIndex} className="bg-writer-powder text-writer-deep-blue px-2 py-1 rounded-md text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={`w-3 h-3 ${i < Math.floor(item.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <div onClick={() => handleReadMore(item.link)} className="flex items-center space-x-1 text-writer-sky-blue hover:text-writer-deep-blue transition-colors duration-300 cursor-pointer">
                    <span className="text-sm font-medium">Read More</span>
                    <FiExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {hasMoreItems && (
          <motion.div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group bg-white border-2 border-writer-deep-blue text-writer-deep-blue hover:bg-writer-deep-blue hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md flex items-center space-x-2 mx-auto"
            >
              <span>{showAll ? "Show Less" : "View More Projects"}</span>
              {showAll ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-writer-deep-blue to-writer-sky-blue rounded-xl sm:rounded-2xl p-8 sm:p-10 text-white shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-base sm:text-lg opacity-90 mb-6 max-w-xl mx-auto">Join these successful clients who transformed their content strategy and achieved measurable results.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href="#contact">
                <button className="bg-white text-writer-deep-blue px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <FiUsers className="w-4 h-4" />
                  <span>Start Your Project</span>
                </button>
              </Link>
              <Link href="#contact">
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-writer-deep-blue transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto">
                  <FiMessageCircle className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}