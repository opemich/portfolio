// import Landing from "./components/Landing";
// import Project from "./components/Project";
// // import Blog from "./components/Blog";
// import Contact from "./components/Contact";
// import Navbar from "./components/NavBar";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar Navbar */}
//       <div className="w-1/4">
//         <Navbar />
//       </div>

//       {/* Main Content */}
//       <div className="w-3/4">
//         <Landing />
//         <Project />
//         <Contact />
//       </div>
//     </div>
//   );
// }

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
        className="lg:w-1/5 h-screen lg:bg-gray-900 fixed lg:left-0 lg:top-0 right-0 top-0 z-50"
      >
        <Navbar />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="lg:w-3/3 lg:ml-[20%] overflow-y-auto h-screen"
      >
        <section id="home">
          <Landing />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="service">
          <Services />
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
