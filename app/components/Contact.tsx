"use client";

import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";
import { BsGithub, BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Get In Touch
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m currently looking for new opportunities. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className="flex space-x-4">
              <Link
                href="mailto:kwizeraolivier2119@gmail.com"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <FiMail size={20} />
              </Link>
              <Link
                href="https://github.com/KOlivier2119"
                target="_blank"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <BsGithub size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/k_o.l.i.v.i.e.r/"
                target="_blank"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <BsInstagram size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="form-input"
                  placeholder="Your message here..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}