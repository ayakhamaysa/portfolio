import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    // reducedMotion="user": no animations for visitors who turned motion off on their device
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
