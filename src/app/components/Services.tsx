"use client";

import { Code, Database, Palette, Server, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingParticles } from "./FloatingParticules";

const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.",
      features: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Creating robust server-side applications with Node.js, Express, and database integration.",
      features: ["Node.js", "Express.js", "MongoDB", "JWT Auth"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing interfaces that prioritize user experience.",
      features: ["Figma", "Responsive Design", "User Research", "Prototyping"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, SEO, and scalability with best practices.",
      features: ["SEO", "Core Web Vitals", "Caching", "Bundle Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Ensuring perfect functionality across all devices with responsive design principles.",
      features: ["Responsive Design", "Mobile Optimization", "Cross-browser", "PWA"]
    },
    {
      icon: Database,
      title: "Full-Stack Solutions",
      description: "End-to-end application development from database design to deployment.",
      features: ["API Design", "Database Design", "Authentication", "Deployment"]
    }
  ];

const Services = () => {

return (
    <section id="service" className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-black relative">
      <FloatingParticles />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
