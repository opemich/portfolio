"use client";

import { motion } from "framer-motion";
import { Smartphone, Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const mobileProjects = [
  {
    id: "chatnest",
    title: "ChatNest",
    description:
      "Enterprise-grade real-time messaging platform with voice/video calls, social stories, and media sharing. Available on iOS, Android, and web.",
    image: "/images/chatnest.png",
    features: ["Real-time messaging", "Voice/Video calls", "Social stories"],
    hasAPK: true,
  },
];

export default function MobileProjects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6"
          >
            <Smartphone size={32} />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Mobile Apps</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Download and explore our mobile applications built with React Native
            and cutting-edge technologies
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {mobileProjects.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-12">
            {mobileProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-80 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6 space-y-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Download Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/projects/${project.id}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        <Download size={20} />
                        Download & View Details
                        <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Smartphone size={64} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              No Mobile Projects Yet
            </h2>
            <p className="text-gray-600 mb-8">
              Check back soon for our mobile app releases
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
