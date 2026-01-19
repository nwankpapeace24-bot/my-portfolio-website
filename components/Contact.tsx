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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: "nwankpapeace24@gmail.com",
      href: "mailto:nwankpapeace24@gmail.com",
      color: "from-[#664930] to-[#997E67]",
      description: "Drop me a line anytime",
    },
    {
      icon: FiLinkedin,
      label: "Linkedin",
      value: "Peace Nwankpa",
      href: "https://www.linkedin.com/in/peace-nwankpa",
      color: "from-[#997E67] to-[#CCBEB1]",
      description: "Quick chat or consultation",
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-writer-powder via-white to-writer-powder relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#CCBEB1] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#997E67] rounded-full blur-3xl"></div>
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
            <div className="space-y-8 order-2 lg:order-1">
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center space-x-2 text-writer-deep-blue mb-3">
                  <FiSend className="w-4 h-4" />
                  <span className="text-sm font-bold tracking-widest uppercase">
                    Let's Connect
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-writer-deep-blue leading-tight">
                  Ready to Start
                  <span className="block text-gradient">Your Project?</span>
                </h2>

                <p className="text-base lg:text-lg font-body text-writer-deep-blue/80 leading-relaxed">
                  I'm always excited to work on new projects and help businesses
                  tell their stories. Let's discuss how we can bring your vision to life.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <motion.div variants={itemVariants} className="space-y-4">
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-center space-x-4 p-5 bg-white rounded-2xl shadow-sm border border-writer-cornflower/30 hover:border-writer-sky-blue transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}
                    >
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-heading font-bold text-writer-deep-blue">
                          {method.label}
                        </h3>
                        <FiExternalLink className="w-3 h-3 text-writer-sky-blue" />
                      </div>
                      <p className="text-[#664930] font-medium text-sm">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 pt-8 border-t border-writer-cornflower/40"
              >
                {[
                  { val: "24h", label: "Response" },
                  { val: "1K+", label: "Projects" },
                  { val: "5★", label: "Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-bold text-writer-deep-blue">{stat.val}</div>
                    <div className="text-xs uppercase tracking-tighter text-writer-sky-blue font-bold">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-72 h-72 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden shadow-2xl border-[12px] border-white"
                >
                  <Image
                    src="/img-1.jpg"
                    alt="Peace Nwankpa"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#664930]/40 via-transparent to-transparent"></div>
                </motion.div>
                {/* Decorative ring */}
                <div className="absolute -inset-4 border-2 border-dashed border-[#CCBEB1] rounded-full animate-[spin_20s_linear_infinite] opacity-50"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Updated to deep espresso */}
      <footer className="bg-[#4a3523] text-writer-powder py-8">
        <div className="container mx-auto px-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <FiHeart className="w-4 h-4 text-[#CCBEB1]" />
              <span className="text-sm opacity-80">
                © 2026 Peace Nwankpa. Crafted for storytelling.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs uppercase tracking-widest opacity-60">Available for projects</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;