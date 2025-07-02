"use client";
import { useTypewriter } from "../../hooks/useTypewriter";

const Landing = () => {
  const text = useTypewriter(
    "I'm a full-stack web developer specializing in modern frontend and backend development.",
    100
  );

  return (
    <section className="relative py-12 bg-[url('/images/me.jpg')] bg-cover bg-center h-screen w-full">
      <div className="ms-2 absolute md:bottom-24 bottom-3">
        <h1
          className="text-5xl font-bold text-white"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          Excellent Michael
        </h1>
        <div
          className="mt-3 text-lg text-white"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          {text}
          <span
            className="animate-blink text-white"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            |
          </span>
        </div>
      </div>
    </section>
  );
};

export default Landing;
