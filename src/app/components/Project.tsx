"use client";

import Image from "next/image";
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "charcoal-game",
    title: "Charcoal Game",
    description:
      "Charcoal Game is an interactive spin machine game built with Next.js and Tailwind CSS, for a Telegram-bot-based application. It features smooth animations, responsive design, and a dynamic gaming experience. Players can engage with a visually appealing UI and enjoy a seamless gaming session.",
    image: "/images/Charcoal.png",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Telegram Bot"],
    link: "https://t.me/charcoal_gamebot",
    category: "Game Development",
  },
  {
    id: "clemsatd-travel",
    title: "Clemsatd Travel Agency",
    description:
      "Clemsatd Travel Agency is a modern, responsive travel booking website. It allows users to explore travel destinations, check flight and hotel availability, and make secure bookings. The site is optimized for performance, accessibility and responsive design.",
    image: "/images/clemsatd.jpg",
    techStack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "jQuery",
      "JavaScript",
      "Responsiveness",
    ],
    link: "https://clemsatd.com/",
    category: "Web Development",
  },
  {
    id: "weconnect",
    title: "WeConnect",
    description:
      "WeConnect is a full-stack user dashboard and authentication system built with TypeScript. It features secure login, JWT token validation, email-based password resets, and a customizable dashboard with settings, account management, and modern UI elements.",
    image: "/images/weconnect.jpeg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    link: "https://we-connect-front.vercel.app/",
    category: "Full Stack Development",
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    description:
      "A clean frontend clone of the Amazon homepage using NestJS and TypeScript. The project includes a carousel powered by Swiper, responsive layouts, category navigation, and a basic add-to-cart flow (without backend integration).",
    image: "/images/amazon.png",
    techStack: ["NestJS", "TypeScript", "Tailwind CSS", "Swiper", "Next.js"],
    link: "https://amazon-clone.empty.com",
    category: "Frontend Development",
  },
  {
  id: "luma-event-site",
  title: "Luma Event Site",
  description:
    "Full-stack events app where creators can save events as Draft or Publish, sell tickets via Flutterwave, issue email/NFT-style tickets with attendee check-in, and browse a vendor marketplace (photography, videography, planning, etc.). Includes an admin panel to manage events, users, vendors, services, and posts.",
  image: "/images/luma.png",
  techStack: ["Next.js", "React", "Flutterwave", "Tailwind CSS", "Clerk", "Node.js", "Express", "MongoDB", "Mongoose", "Nodemailer"],
  link: "https://luma-rouge-one.vercel.app/",
  category: "Full Stack Development",
}

];

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-white to-gray-50 "
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action for more projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Want to see more projects?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
          >
            Let&apos;s Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};


export default Project;
