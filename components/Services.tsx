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
import Link from "next/link";

const Services = () => {
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
      color: "from-writer-sky-blue to-writer-deep-blue",
    },
    {
      icon: FiDollarSign,
      title: "Crypto Content",
      description:
        "Expert blockchain and cryptocurrency content that demystifies complex concepts for your audience.",
      color: "from-writer-deep-blue to-primary-400",
    },
    {
      icon: FiTrendingUp,
      title: "Content Strategy",
      description:
        "Strategic content planning that boosts visibility, engagement, and converts readers into customers.",
      color: "from-writer-sky-blue to-writer-cornflower",
    },
    {
      icon: FiCode,
      title: "Technical Writing",
      description:
        "Clear, comprehensive technical documentation that makes complex systems accessible to everyone.",
      color: "from-primary-200 to-writer-deep-blue",
    },
    {
      icon: FiFileText,
      title: "Copywriting",
      description:
        "Persuasive copy that captures attention, builds trust, and drives action across all platforms.",
      color: "from-writer-deep-blue to-primary-300",
    },
    {
      icon: FiEdit3,
      title: "Content Editing",
      description:
        "Professional editing services that polish your content to perfection and enhance readability.",
      color: "from-writer-cornflower to-writer-sky-blue",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-writer-powder/20 to-white relative overflow-hidden"
    >
      {/* Background decorative elements - Aligned to Bronze palette */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
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
              Expertise & Solutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-writer-deep-blue leading-tight mb-6">
            My Writing
            <span className="block text-gradient">Services</span>
          </h2>

          <p className="text-lg lg:text-xl font-body text-writer-deep-blue leading-relaxed max-w-3xl mx-auto opacity-90">
            I specialize in creating impactful content for fast-moving
            industries—driving engagement, education, and conversion.
          </p>
        </motion.div>

        {/* Services Grid - All cards rendered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-writer-cornflower/20"
            >
              {/* Image Section Header */}
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-writer-powder to-writer-lavender"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>

              {/* Circular Icon Separator */}
              <div className="relative flex justify-center -mt-6 mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="px-6 pb-8">
                <h3 className="text-xl font-heading font-bold text-writer-deep-blue mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-sm font-body text-writer-deep-blue opacity-80 leading-relaxed text-center min-h-[60px]">
                  {service.description}
                </p>

                {/* CTA Link */}
                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center space-x-2 text-writer-sky-blue hover:text-writer-deep-blue transition-colors duration-300 font-medium cursor-pointer group/link">
                    <span className="text-sm">Learn More</span>
                    <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="bg-gradient-to-r from-writer-deep-blue to-writer-sky-blue rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <h3 className="text-2xl sm:text-4xl font-heading font-bold mb-4 relative z-10">
              Ready to Elevate Your Content?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto relative z-10">
              Let's collaborate to build your brand authority with expert content 
              tailored for your specific audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <Link href="#contact" className="w-full sm:w-auto">
                <button className="bg-white text-writer-deep-blue px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 w-full">
                  <FiUsers className="w-5 h-5" />
                  <span>Start Your Project</span>
                </button>
              </Link>
              <Link href="#portfolio" className="w-full sm:w-auto">
                <button className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-writer-deep-blue hover:border-white transition-all duration-300 flex items-center justify-center space-x-2 w-full">
                  <FiBook className="w-5 h-5" />
                  <span>View My Work</span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;