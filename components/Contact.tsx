"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiFacebook,
  FiExternalLink,
  FiHeart,
  FiSend,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
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

  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: "nwankpapeace24@gmail.com",
      href: "mailto:nwankpapeace24@gmail.com",
      color: "from-blue-500 to-blue-600",
      description: "Drop me a line anytime",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+234 814 802 5837",
      href: "https://wa.me/2348148025837",
      color: "from-green-500 to-green-600",
      description: "Quick chat or consultation",
    },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/peacenwankpa",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: FiTwitter,
      label: "Twitter",
      href: "https://twitter.com/peacenwankpa",
      color: "from-gray-700 to-gray-800",
    },
    {
      icon: FiInstagram,
      label: "Instagram",
      href: "https://instagram.com/peacenwankpa",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: FiFacebook,
      label: "GitHub",
      href: "https://facebook.com/peacenwankpa",
      color: "from-sky-800 to-sky-900",
    },
  ];

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-writer-powder via-white to-writer-lavender relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 bg-writer-sky-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-writer-cornflower rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-writer-deep-blue rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center space-x-2 text-writer-deep-blue mb-3">
                  <FiSend className="w-4 h-4" />
                  <span className="text-sm font-medium tracking-wider uppercase accent-text">
                    Let's Connect
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-writer-deep-blue leading-tight">
                  Ready to Start
                  <span className="block text-gradient">Your Project?</span>
                </h2>

                <p className="text-base lg:text-lg font-body text-writer-deep-blue leading-relaxed opacity-90">
                  I'm always excited to work on new projects and help businesses
                  tell their stories through compelling content. Let's discuss
                  how we can bring your vision to life.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <motion.div variants={itemVariants} className="space-y-3">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center space-x-4 p-4 sm:p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-writer-sky-blue"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-heading font-semibold text-writer-deep-blue text-base">
                          {method.label}
                        </h3>
                        <FiExternalLink className="w-3 h-3 text-writer-cornflower group-hover:text-writer-sky-blue transition-colors duration-300" />
                      </div>
                      <p className="text-writer-sky-blue font-medium text-sm">
                        {method.value}
                      </p>
                      <p className="text-xs text-writer-cornflower">
                        {method.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 pt-4 border-t border-writer-powder"
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-writer-deep-blue">
                    24h
                  </div>
                  <div className="text-xs text-writer-cornflower">
                    Response Time
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-writer-deep-blue">
                    1K+
                  </div>
                  <div className="text-xs text-writer-cornflower">
                    Projects Done
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-writer-deep-blue">
                    5★
                  </div>
                  <div className="text-xs text-writer-cornflower">
                    Client Rating
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              variants={imageVariants}
              className="relative order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Main circular image container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative lg:ml-10 w-80 h-80 sm:w-96 sm:h-96 lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden shadow-2xl border-8 border-white"
                >
                  <Image
                    src="/img-1.jpg"
                    alt="Peace Nwankpa - Content Creator"
                    fill
                    className="object-cover object-top"
                    priority
                  />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-writer-deep-blue/10 via-transparent to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-writer-deep-blue text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-3 sm:mb-0"
            >
              <FiHeart className="w-4 h-4 text-red-400" />
              <span className="font-body text-sm">
                © 2025 Peace Nwankpa. Crafted with passion for storytelling.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-writer-lavender text-sm">
                Available for freelance projects
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
