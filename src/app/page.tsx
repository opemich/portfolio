"use client";

import { motion } from "framer-motion";
import Landing from "./components/Landing";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="lg:ml-80 overflow-x-hidden"
      >
        <section id="home">
          <Landing />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="service">
          <Services />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
      </motion.div>
    </div>
  );
}
