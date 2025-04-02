"use client";

import Image from "next/image";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Framer Motion", level: 75 },
  { name: "Git & GitHub", level: 85 },
  { name: "UI/UX Design", level: 80 },
];

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-20">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-black mb-10 animate-fadeInUp">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-48 h-48 md:w-60 md:h-60 overflow-hidden animate-scaleUp">
          <Image
            src="/images/me.jpg"
            alt="Profile Picture"
            width={240}
            height={240}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Description */}
        <div className="flex-1 text-black text-lg animate-fadeInLeft">
          <p className="mb-4">
            Hi, I&apos;m <span className="text-blue-500 font-semibold">Excellent Michael</span>,  
            a passionate <span className="text-blue-500 font-semibold">Frontend Developer </span>  
            dedicated to crafting stunning and high-performance web applications.  
            With a strong foundation in <span className="text-blue-500">HTML, CSS, JavaScript, and modern frameworks</span>,  
            I create seamless user experiences with clean, maintainable code.
          </p>
          <p className="mb-4">
            My expertise includes **responsive design, component-based architecture, and animations**  
            using **React.js, Next.js, and CSS**.  
            I thrive on building **fast, accessible, and visually appealing interfaces**  
            while keeping up with the latest trends in web development.
          </p>
          <p className="mb-4">
            Whether it&apos;s **developing web applications, optimizing performance, or integrating APIs**,  
            I bring creativity and technical expertise to deliver high-quality digital experiences.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <h3 className="text-3xl font-bold text-center text-black mt-12 mb-6 animate-fadeInUp">
        Skills
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="w-full animate-fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex justify-between text-black text-lg font-medium">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full mt-1">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${skill.level}%`, transition: "width 1s ease" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
