"use client";

import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MapPin,
} from "lucide-react";

const Footer = () => {

return (
    <footer className="bg-black text-white py-12 px-6 border-t-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Excellent Michael(Prex)
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate Full-Stack Developer creating innovative digital solutions 
              with cutting-edge technologies and creative problem-solving.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Services', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/opemich" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/onaopemipo-michael-784147300/" },
                { icon: Twitter, href: "https://x.com/Priest077" },
                { icon: Mail, href: "mailto:excellentmichael2110@gmail.com" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Excellent Michael(Prex). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
