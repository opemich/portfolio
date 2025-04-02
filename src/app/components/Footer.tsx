"use client";

import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold">About Me</h2>
          <p className="mt-2 text-gray-400">
            Passionate Frontend Developer specializing in modern web
            technologies like Next.js, React, and Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/#about"
                className="hover:text-blue-500 transition-colors hover:underline hover:underline-offset-4"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="hover:text-blue-500 transition-colors hover:underline hover:underline-offset-4"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="hover:text-blue-500 transition-colors hover:underline hover:underline-offset-4"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-blue-500 transition-colors hover:underline hover:underline-offset-4"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold">Connect With Me</h2>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/opemich"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/onaopemipo-michael-784147300/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/Priest077"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100084169692839"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <BsInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center border-t border-gray-700 pt-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Excellent Michael. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
