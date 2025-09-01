"use client";

import { useState, useEffect } from "react";
import { FaRegImages, FaUserTie } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { RiHome9Line } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import Image from "next/image";
import {
  ChevronRight,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: RiHome9Line },
  { id: "about", label: "About", icon: FaUserTie },
  { id: "service", label: "Services", icon: FaTools },
  { id: "project", label: "Projects", icon: FaRegImages },
  { id: "contact", label: "Contact", icon: TfiEmail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // More precise scrollspy with Intersection Observer
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When a section is at least 40% visible in the viewport
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // root: null means the viewport
        root: null,
        // rootMargin adds margin around the viewport for earlier/later detection
        rootMargin: "0px",
        // threshold is the percentage of the element that needs to be visible
        threshold: [0.3, 0.4, 0.5],
      }
    );

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    // Fallback scroll listener for browsers that don't support Intersection Observer
    const handleScroll = () => {
      // Only use this if IntersectionObserver is not available or as a backup
      const scrollPosition = window.scrollY + 100; // Adding offset to improve accuracy

      // Find the current section based on scroll position
      let currentSection = sections[0].id;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Add scroll event as a backup
    window.addEventListener("scroll", handleScroll);

    // Initial check when page loads
    handleScroll();

    // Cleanup function
    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          sectionObserver.unobserve(element);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="relative h-screen bg-gray-900">
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="hidden lg:flex fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border-r border-white/10 z-40"
      >
        <div className="flex flex-col items-center justify-center w-full p-8">
          {/* Profile Section */}
          <motion.div whileHover={{ scale: 1.05 }} className="mb-8 text-center">
            <div className="relative mb-4">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  <Image
                    src="/images/me.jpg"
                    alt="Excellent"
                    className="rounded-full"
                    width={130}
                    height={50}
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900"></div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Excellent Michael
            </h2>
            <p className="text-blue-400 text-sm">Full-Stack Developer</p>
          </motion.div>

          {/* Navigation Links */}
          <div className="space-y-4 w-full">
            {sections.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveSection(item.id);
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 bg-blue-500 rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-4">
            {[
              {
                icon: Github,
                href: "https://github.com/opemich",
                color: "hover:text-gray-400",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/onaopemipo-michael-784147300/",
                color: "hover:text-blue-400",
              },
              {
                icon: Twitter,
                href: "https://x.com/Priest077",
                color: "hover:text-sky-400",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/prie_st0/",
                color: "hover:text-sky-400",
              },
              {
                icon: Facebook,
                href: "https://web.facebook.com/profile.php?id=100084169692839",
                color: "hover:text-blue-400",
              },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors ${social.color}`}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-xl z-40"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black p-8"
            >
              <div className="flex flex-col items-center mt-16">
                <div className="mb-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 mb-4 mx-auto">
                    <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      <Image
                        src="/images/me.jpg"
                        alt="Excellent"
                        className="rounded-full"
                        width={130}
                        height={50}
                      />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    Excellent Michael
                  </h2>
                </div>

                <div className="space-y-4 w-full">
                  {sections.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setActiveSection(item.id);
                          setIsOpen(false);
                          document
                            .getElementById(item.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="w-full flex items-center gap-4 p-4 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                        <ChevronRight size={16} className="ml-auto" />
                      </motion.button>
                    );
                  })}
                </div>

                {/* Mobile Social Links */}
                <div className="mt-4 flex gap-4 lg:hidden">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/opemich",
                      color: "hover:text-gray-400",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/onaopemipo-michael-784147300/",
                      color: "hover:text-blue-400",
                    },
                    {
                      icon: Twitter,
                      href: "https://x.com/Priest077",
                      color: "hover:text-sky-400",
                    },
                    {
                      icon: Instagram,
                      href: "https://www.instagram.com/prie_st0/",
                      color: "hover:text-sky-400",
                    },
                    {
                      icon: Facebook,
                      href: "https://web.facebook.com/profile.php?id=100084169692839",
                      color: "hover:text-blue-400",
                    },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        whileHover={{ scale: 1.2, y: -2 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 transition-colors ${social.color}`}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="lg:hidden fixed top-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg backdrop-blur-sm"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
    </nav>
  );
};

export default Navbar;
