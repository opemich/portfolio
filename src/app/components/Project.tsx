"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Smartphone } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen py-28 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-600">
              Selected Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-5xl md:text-7xl font-black text-gray-900 leading-none tracking-tight"
            >
              Projects
            </h2>
            <p className="text-gray-600 text-base max-w-xs md:text-right leading-relaxed">
              A curated selection of things I&apos;ve built — click any to explore.
            </p>
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={
                // Make first card span 2 cols on xl for visual hierarchy
                index === 0 ? "xl:col-span-2" : ""
              }
            >
              <Link href={`/projects/${project.id}`} className="group block">
                <div
                  className="relative overflow-hidden rounded-2xl *:bg-gradient-to-br *:from-gray-200 *:to-gray-300"
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? "h-72 md:h-80" : "h-52 md:h-60"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Dark overlay */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(5,5,16,0.1) 0%, rgba(5,5,16,0.55) 100%)",
                      }}
                    />
                    {/* Accent color wash on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${project.accentColor}22 0%, transparent 70%)`,
                      }}
                    />

                    {/* Mobile badge */}
                    {project.type === "mobile" && (
                      <div
                        className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{
                          background: `${project.accentColor}25`,
                          border: `1px solid ${project.accentColor}50`,
                          color: project.accentColor,
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <Smartphone size={11} />
                        Mobile
                      </div>
                    )}
                  </div>

                  {/* Bottom info bar */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-4">
                      {/* Accent dot */}
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: project.accentColor }}
                      />
                      <div>
                        <p className="text-gray-900 font-bold text-sm leading-tight">
                          {project.title}
                        </p>
                        <p className="text-gray-600 text-xs mt-0.5">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    {/* Arrow icon - animates on hover */}
                    <motion.div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight
                        size={16}
                        className="text-gray-500   group-hover:text-gray-900 transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{
                          transform: "translateX(0) translateY(0)",
                          transition: "transform 0.3s ease, color 0.3s ease",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Bottom accent line — slides in from left on hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-2xl"
                    style={{ background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}00)` }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16 flex items-center justify-between"
        >
          <div className="h-px flex-1 bg-gray-400" />
          <motion.button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="mx-6 px-6 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:text-gray-900 transition-all duration-300 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20"
          >
            Let&apos;s build something together →
          </motion.button>
          <div className="h-px flex-1 bg-gray-400" />
        </motion.div>

      </div>
    </section>
  );
};

export default Project;