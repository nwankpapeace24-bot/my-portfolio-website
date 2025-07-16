"use client";

import { motion } from "framer-motion";
import {
  FiDollarSign,
  FiMonitor,
  FiTrendingUp,
  FiCode,
  FiFileText,
  FiEdit3,
  FiTarget,
  FiUsers,
  FiBook,
  FiArrowRight,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
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

  const services = [
    {
      icon: FiMonitor,
      title: "iGaming Content",
      description:
        "High quality content ranging from casino and sportsbook reviews, to how-to guides, news articles and slot reviews to keep players engaged and informed.",
      image: "/gaming-content.jpg",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: FiDollarSign,
      title: "Crypto Content",
      description:
        "Expert blockchain and cryptocurrency content that demystifies complex concepts for your audience.",
      image: "/image-2.jpg", // You'll need to add these images
      color: "from-yellow-400 to-orange-500",
    },

    {
      icon: FiTrendingUp,
      title: "Content Strategy",
      description:
        "Strategic content planning that boosts visibility, engagement, and converts readers into customers.",
      image: "/content-strategy.jpg",
      color: "from-green-400 to-blue-500",
    },
    {
      icon: FiCode,
      title: "Technical Writing",
      description:
        "Clear, comprehensive technical documentation that makes complex systems accessible to everyone.",
      image: "/technical-writing.jpg",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: FiFileText,
      title: "Copywriting",
      description:
        "Persuasive copy that captures attention, builds trust, and drives action across all platforms.",
      image: "/copywriting.jpg",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: FiEdit3,
      title: "Content Editing",
      description:
        "Professional editing services that polish your content to perfection and enhance readability.",
      image: "/content-editing.jpg",
      color: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-writer-powder rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-writer-lavender rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-writer-cornflower rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center space-x-2 text-writer-deep-blue mb-4">
            <FiTarget className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase accent-text">
              What I Do
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-writer-deep-blue leading-tight mb-6">
            My Writing
            <span className="block text-gradient">Services</span>
          </h2>

          <p className="text-lg lg:text-xl font-body text-writer-deep-blue leading-relaxed max-w-3xl mx-auto opacity-90">
            I specialize in creating impactful content for fast-moving
            industries, from blockchain to gaming—driving engagement, education,
            and conversion.
          </p>
        </motion.div>

        {/* Services Grid - 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Image Section - Upper Row */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-writer-powder to-writer-lavender"></div>
                {/* Placeholder for now - you can replace with actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Circular Icon Separator */}
              <div className="relative flex justify-center -mt-6 mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content Section - Bottom Row */}
              <div className="px-6 pb-8">
                <h3 className="text-xl font-heading font-bold text-writer-deep-blue mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-sm font-body text-writer-deep-blue opacity-80 leading-relaxed text-center">
                  {service.description}
                </p>

                {/* CTA */}
                <motion.div
                  className="mt-6 flex justify-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="inline-flex items-center space-x-2 text-writer-sky-blue hover:text-writer-deep-blue transition-colors duration-300 font-medium">
                    <span className="text-sm">Learn More</span>
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-writer-powder to-writer-lavender rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-writer-deep-blue mb-6">
              Ready to Elevate Your Content?
            </h3>
            <p className="text-lg font-body text-writer-deep-blue opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how my expertise can help you create compelling
              content that drives results and builds your brand authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full mx-auto items-center justify-center">
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <FiUsers className="w-5 h-5" />
                  <span>Start a Project</span>
                </motion.button>
              </Link>
              <Link href="#portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <FiBook className="w-5 h-5" />
                  <span>View Portfolio</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
