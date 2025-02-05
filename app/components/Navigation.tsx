"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../../public/logo.png";
import Image from "next/image"

const NAV_ITEMS = [
  { label: "Home", page: "#home" },
  { label: "About", page: "#about" },
  { label: "Skills", page: "#skills" },
  { label: "Projects", page: "#projects" },
  { label: "Contact", page: "#contact" },
]

export default function Navigation() {
  const [navbar, setNavbar] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className={`w-full transition-all duration-300 ${
        isScrolled ? 'bg-nav shadow-lg' : 'bg-nav-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div 
                className="relative flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Image src={logo} alt="Logo" width={60} height={60} className="rounded-full object-cover" />
                
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.page}
                  className="nav-link text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setNavbar(!navbar)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                {navbar ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {navbar && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-3">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.page}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setNavbar(false)}
                      className="block px-4 py-2 text-foreground/80 hover:text-white hover:bg-muted rounded-lg transition-all duration-300"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  )
}