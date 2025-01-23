'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="bg-gradient-to-b from-[#0a192f] to-[#112240] text-gray-100 min-h-screen h-full"
    >
      <Navigation />
      <div className="relative">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </motion.main>
  );
}