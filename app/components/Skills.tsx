'use client';
import { motion } from 'framer-motion';
import { HiCode, HiDatabase, HiDesktopComputer, HiColorSwatch } from "react-icons/hi"

const SKILLS_DATA = {
  frontend: {
    icon: HiCode,
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
  },
  backend: {
    icon: HiDesktopComputer,
    title: "Backend Development",
    skills: ["Node.js", "Express", "Python", "Java", "RESTful APIs"]
  },
  database: {
    icon: HiDatabase,
    title: "Database & DevOps",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Git", "Docker"]
  },
  design: {
    icon: HiColorSwatch,
    title: "Design & Tools",
    skills: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles"]
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Technical Skills
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(SKILLS_DATA).map(([key, section], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <section.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}