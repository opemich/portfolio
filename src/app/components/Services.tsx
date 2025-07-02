"use client";

import { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { CgSmartphone } from "react-icons/cg";
import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import { FaGauge } from "react-icons/fa6";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive, high-performance websites with modern web technologies like React.js and Next.js.",
    icon: <FaLaptopCode size={40} className="text-blue-500" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces for a seamless user experience.",
    icon: <FaPaintBrush size={40} className="text-blue-500" />,
  },
  {
    id: 3,
    title: "Frontend Optimization",
    description:
      "Optimizing frontend performance for faster load times, improved accessibility, and smooth user interactions.",
    icon: <FaCode size={40} className="text-blue-500" />,
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Improving website speed and performance. Implementing best practices for faster loading times and better user experience.",
    icon: <FaGauge size={40} className="text-blue-500" />,
  },
  {
    id: 5,
    title: "Responsive Design",
    description:
      "Ensuring your website looks great and functions perfectly on all devices, from desktops to smartphones.",
    icon: <CgSmartphone size={40} className="text-blue-500" />,
  },
  {
    id: 6,
    title: "Web Accessibility",
    description:
      "Creating inclusive websites that follow WCAG guidelines, ensuring your site is accessible to everyone.",
    icon: <BiGlobe size={40} className="text-blue-500" />,
  },
  {
    id: 7,
    title: "Backend API Development",
    description:
      "Designing secure and scalable backend APIs with Node.js, Express, and MongoDB, using best practices in REST architecture and token-based authentication.",
    icon: <FaCode size={40} className="text-blue-500" />,
  },
  {
    id: 8,
    title: "Full-Stack Application Development",
    description:
      "Delivering end-to-end web solutions by integrating frontend and backend technologies. Includes authentication, dashboard systems, and database integration.",
    icon: <FaLaptopCode size={40} className="text-blue-500" />,
  },
];


const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 px-6 md:px-20">
      <div className="text-center mb-10 text-black">
        <h2 className="text-4xl font-bold mb-4 animate-fadeInUp">
          Services
        </h2>
        <p className="mt-2 text-3xl">
          Professional solutions tailored to your project needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="bg-gray-800 p-6 rounded-lg shadow-md text-white text-center transition-transform duration-300 hover:scale-105 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
            <div
              className={`mt-4 transition-opacity duration-300 ${
                hoveredService === service.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <a
                href="#contact"
                className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center justify-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
