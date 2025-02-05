"use client";

import Image from "next/image";
//import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";
//import { images } from '@/app/config/images'
import image from '../../public/OLIVIER.webp';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={image}
              alt="KWIZERA Olivier"
              width={300}
              height={300}
              className="rounded-full shadow-2xl"
            />
          </motion.div>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">Hi, I&#39;m KWIZERA Olivier!</h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              I&#39;m a{" "}
              <span className="font-semibold text-primary">
                Full Stack Developer{" "}
              </span>
              based in Rwanda. Working towards creating software that makes life easier and more meaningful.
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-neutral-100 font-semibold px-6 py-3 bg-primary rounded shadow hover:bg-primary/80 cursor-pointer"
            >
              Projects
            </button>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <button
          onClick={() => scrollToSection('about')}
          className="cursor-pointer"
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}