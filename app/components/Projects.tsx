'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript } from 'react-icons/si';
//import { images } from '@/app/config/images'
import transport from '../../public/transport.png';
import anime from '../../public/animestore.png';
import eduford from '../../public/eduford.png';

const projects = [
  {
    name: 'JJ Transport',
    description: 'A modern web application for booking transport services',
    image: transport,
    github: 'https://github.com/KOlivier2119/JJ_Project',
    link: 'https://jj-transport.vercel.app',
    tags: ['React', 'Tailwind'],
    icons: [ FaReact, SiTailwindcss]
  },
  {
    name: 'Eduford',
    description: 'Web application of eduford university for education purpose.',
    image: eduford,
    github: 'https://github.com/KOlivier2119/Edoulf',
    link: 'https://edufordii.vercel.app',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    icons: [FaReact, FaNodeJs, SiMongodb, SiTailwindcss]
  },
  {
    name: 'Anime Store',
    description: 'Explore your favorite anime to watch on popular streaming platforms',
    image: anime,
    github: 'https://github.com/KOlivier2119/anime-store',
    link: 'https://animes-explore.vercel.app',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind'],
    icons: [SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss]
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950 border-r-2">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-800"
            >
              {/* Project Image */}
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Project Links - Appear on Hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/80 rounded-full backdrop-blur-sm hover:bg-gray-700/80 transition-all duration-300"
                  >
                    <BsGithub className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/80 rounded-full backdrop-blur-sm hover:bg-gray-700/80 transition-all duration-300"
                  >
                    <BsArrowUpRightSquare className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tech Icons */}
                <div className="flex space-x-3">
                  {project.icons.map((Icon, iconIdx) => (
                    <Icon
                      key={iconIdx}
                      className="w-6 h-6 text-gray-400 hover:text-primary transition-colors"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}