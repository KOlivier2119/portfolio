'use client';
import { motion } from 'framer-motion';
//import Image from 'next/image';
import { HiAcademicCap, HiCode } from "react-icons/hi"

const EDUCATION = [
  {
    period: "2023 - Present",
    school: "Rwanda Coding Academy",
    degree: "Software Programming and Embedded Systems",
    description: "Currently studying software development and embedded systems, focusing on practical programming skills and hardware integration."
  },
  {
    period: "2020 - 2023",
    school: "Groupe Scolaire Officiel de Butare",
    degree: "O Level Education",
    description: "Completed O Level education with strong academic performance and developed foundation in sciences and mathematics."
  }
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          About Me
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <HiCode className="w-6 h-6 mr-2 text-primary" />
              Professional Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am KWIZERA Olivier, a passionate software developer with a strong focus on creating innovative and efficient solutions. My journey in technology started with a deep curiosity about how things work, which led me to pursue software development.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently specializing in full-stack development, I combine creativity with technical expertise to build engaging and functional applications. I&apos;m constantly learning and adapting to new technologies to stay at the forefront of development practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <HiAcademicCap className="w-6 h-6 mr-2 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  className="border-l-4 border-primary pl-4 hover:border-accent transition-colors"
                >
                  <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                  <h4 className="font-semibold text-lg">{edu.school}</h4>
                  <p className="text-primary dark:text-primary-dark font-medium">{edu.degree}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}