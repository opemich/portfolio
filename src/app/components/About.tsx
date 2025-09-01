"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", level: 85, color: "from-green-600 to-green-800" },
  { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Next.js", level: 85, color: "from-green-600 to-green-800" },
  { name: "Tailwind CSS", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "Motion (for animation)", level: 75, color: "from-gray-700 to-gray-900" },
  { name: "Node.js", level: 85, color: "from-green-600 to-green-800" },
  { name: "Express.js", level: 80, color: "from-green-500 to-green-700" },
  { name: "MongoDB", level: 80, color: "from-green-500 to-green-700" },
  { name: "JWT Auth", level: 80, color: "from-green-500 to-green-700" },
  { name: "Git & GitHub", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "UI/UX Design", level: 80, color: "from-green-500 to-green-700" },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold  mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Desktop: two columns (image | about). Mobile: single column in DOM order */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-1">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-200">
                <Image
                  src="/images/me.jpg"
                  alt="Excellent"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating achievement cards */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Projects Done</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: About text (no skills here on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Hi, I&apos;m{" "}
                <span className="font-bold text-blue-600">Excellent Michael(Prex)</span>, a passionate{" "}
                <span className="font-bold text-purple-600">Full-Stack Developer</span>{" "}
                dedicated to building stunning, high-performance web applications from front to back.
              </p>
              <p>
                With a solid foundation in both frontend and backend technologies, I craft seamless digital
                experiences that are scalable, fast, and user-focused.
              </p>
              <p>
                My expertise spans responsive design, component-based architecture, RESTful APIs, authentication
                systems, and modern databases.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="relative"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
