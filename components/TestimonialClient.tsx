"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FiStar, FiTrendingUp, FiAward, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaStarHalfAlt } from "react-icons/fa";

type Testimonial = {
  id: string;
  name: string;
  role?: string;
  company?: string;
  testimonial: string;
  rating: number;
  metric?: string;
  featured: boolean;
};

export default function TestimonialsClient({ testimonials }: { testimonials: Testimonial[] }) {
  const [showAll, setShowAll] = useState(false);

  // Logic: 2 on mobile, 2 on desktop (1 row) by default
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 2);
  const hasMore = testimonials.length > 2;

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FiStar key={i} className="w-3 h-3 text-yellow-400 fill-current" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="w-3 h-3 text-yellow-400" />);
      } else {
        stars.push(<FiStar key={i} className="w-3 h-3 text-gray-200" />);
      }
    }
    return stars;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-writer-powder via-white to-writer-lavender relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-writer-sky-blue rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-writer-lavender rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 text-writer-deep-blue mb-4">
            <BiSolidQuoteAltLeft className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">
              Client Success Stories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-writer-deep-blue leading-tight mb-6">
            What Clients Say About <span className="text-gradient">My Work</span>
          </h2>

          <div className="inline-flex items-center space-x-2 bg-writer-powder px-4 py-2 rounded-full text-sm text-writer-deep-blue">
            <FiStar className="w-4 h-4 text-writer-sky-blue" />
            <span className="font-medium">A selection of recent client feedback</span>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {displayedTestimonials.map((t, index) => (
            <motion.div
              layout
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-6 sm:p-8 flex flex-col h-full border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-writer-sky-blue to-writer-cornflower rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <BiSolidQuoteAltLeft className="w-5 h-5 text-white" />
                  </div>
                  {t.featured && (
                    <div className="bg-writer-sky-blue/10 text-writer-sky-blue px-2 py-1 rounded-md text-[10px] font-black flex items-center space-x-1 uppercase tracking-wider">
                      <FiAward className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-0.5 bg-gray-50 px-2 py-1 rounded-lg">
                  {renderStars(t.rating)}
                </div>
              </div>

              <blockquote className="text-writer-deep-blue leading-relaxed mb-6 text-sm flex-grow italic opacity-90">
                "{t.testimonial}"
              </blockquote>

              {t.metric && (
                <div className="bg-gradient-to-r from-writer-powder to-writer-lavender rounded-xl p-3 mb-6 border border-writer-sky-blue/10">
                  <div className="flex items-center space-x-2">
                    <FiTrendingUp className="w-4 h-4 text-writer-sky-blue" />
                    <span className="text-xs font-bold text-writer-deep-blue">
                      {t.metric}
                    </span>
                  </div>
                </div>
              )}

              <div className="border-t border-gray-50 pt-5 mt-auto">
                <h4 className="font-heading font-bold text-writer-deep-blue text-sm">
                  {t.name}
                </h4>
                {(t.role || t.company) && (
                  <p className="text-gray-400 text-[11px] font-medium mt-0.5">
                    {[t.role, t.company].filter(Boolean).join(" @ ")}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group bg-white border-2 border-writer-deep-blue text-writer-deep-blue hover:bg-writer-deep-blue hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md flex items-center space-x-2 mx-auto"
            >
              <span>{showAll ? "Show Less" : "View More Testimonials"}</span>
              {showAll ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}