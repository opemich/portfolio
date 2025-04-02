"use client";

import { useState, useEffect } from "react";
import { FaRegImages, FaUserTie, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaGithub, FaTools } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiHome9Line, RiMenu3Line } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const sections = [
  { id: "home", label: "Home", icon: <RiHome9Line size={25} /> },
  { id: "about", label: "About", icon: <FaUserTie size={25} /> },
  { id: "project", label: "Projects", icon: <FaRegImages size={25} /> },
  { id: "service", label: "Services", icon: <FaTools size={25} /> },
  { id: "contact", label: "Contact", icon: <TfiEmail size={25} /> },
];

const socialLinks = [
  { href: "https://x.com/Priest077", icon: <FaXTwitter />, name: "Twitter" },
  {
    href: "https://web.facebook.com/profile.php?id=100084169692839",
    icon: <FaFacebook />,
    name: "Facebook",
  },
  { href: "/instagram", icon: <IoLogoInstagram />, name: "Instagram" },
  { href: "https://github.com/opemich", icon: <FaGithub />, name: "GitHub" },
  {
    href: "https://www.linkedin.com/in/onaopemipo-michael-784147300/",
    icon: <FaLinkedin />,
    name: "LinkedIn",
  },
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
        threshold: [0.4],
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

  const handleClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (isOpen) {
      setIsOpen(false); // Close the menu on link click
    }
  };

  return (
    <nav className="relative h-screen bg-gray-900">
      {/* Desktop Menu - changed from md:flex to lg:flex */}
      <div className="hidden p-4 lg:flex flex-col items-center h-full">
        {/* Profile Section */}
        <div className="bg-gray-800 p-2 rounded-full">
          <Image
            src="/images/me.jpg"
            alt="Excellent"
            className="rounded-full"
            width={130}
            height={50}
          />
        </div>
        <p className="text-white text-2xl mt-3">Excellent Michael</p>

        {/* Social Links */}
        <div className="mt-2 flex space-x-3">
          {socialLinks.map(({ href, icon, name }) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gray-800 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                {icon}
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col w-full mt-5 space-y-4">
          {sections.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group"
              onClick={(e) => {
                e.preventDefault();
                handleClick(id);
              }}
            >
              <div
                className={`flex items-center gap-4 text-[18px] p-2 rounded-md cursor-pointer transition-all 
                ${
                  activeSection === id
                    ? "text-white font-bold"
                    : "text-[#ffffffa2] hover:text-white"
                }`}
              >
                <span
                  className={`transition-colors ${
                    activeSection === id
                      ? "text-blue-500"
                      : "text-[#ffffffa2] group-hover:text-blue-500"
                  }`}
                >
                  {icon}
                </span>
                <span className="transition-colors">{label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button - changed from md:hidden to lg:hidden */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="lg:hidden bg-blue-500 text-white rounded-2xl p-2 focus:outline-none cursor-pointer absolute top-4 right-5 z-50"
      >
        {isOpen ? <IoClose size={28} /> : <RiMenu3Line size={28} />}
      </button>

      {/* Mobile Menu - changed from md:hidden to lg:hidden */}
      <div
        className={`lg:hidden p-4 w-screen h-screen flex flex-col items-center bg-gray-900 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Profile Section */}
        <div className="bg-gray-800 p-2 rounded-full">
          <Image
            src="/images/me.jpg"
            alt="Excellent"
            className="rounded-full"
            width={130}
            height={50}
          />
        </div>
        <p className="text-white text-2xl mt-3">Excellent Michael</p>

        {/* Social Links */}
        <div className="mt-2 flex space-x-3">
          {socialLinks.map(({ href, icon, name }) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gray-800 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                {icon}
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center w-full mt-5 gap-5">
          {sections.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group"
              onClick={(e) => {
                e.preventDefault();
                handleClick(id);
              }}
            >
              <div
                className={`flex items-center gap-6 text-[18px] p-2 rounded-md cursor-pointer transition-all 
                ${
                  activeSection === id
                    ? "text-white font-bold underline underline-offset-4"
                    : "text-[#ffffffa2] hover:text-white"
                }`}
              >
                <span
                  className={`transition-colors ${
                    activeSection === id
                      ? "text-blue-500"
                      : "text-[#ffffffa2] group-hover:text-blue-500"
                  }`}
                >
                  {icon}
                </span>
                <span className="transition-colors">{label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;