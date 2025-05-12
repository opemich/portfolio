"use client";

import Image from "next/image";

const projects = [
  {
    id: "charcoal-game",
    title: "Charcoal Game",
    description:
      "Charcoal Game is an interactive spin machine game built with Next.js and Tailwind CSS, for a Telegram-bot-based application. It features smooth animations, responsive design, and a dynamic gaming experience. Players can engage with a visually appealing UI and enjoy a seamless gaming session.",
    image: "/images/Charcoal.png",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Telegram Bot"],
    link: "https://t.me/charcoal_gamebot",
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
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(
            ({ id, title, description, image, techStack, link }) => (
              <div
                key={id}
                className="bg-gray-800 p-5 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="w-full h-64 relative mb-4">
                  <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                {/* Project Info */}
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-gray-300">{description}</p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500 text-white text-sm px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  View Project
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
