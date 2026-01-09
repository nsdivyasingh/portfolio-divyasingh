import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Blog', href: '#blog' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 3.2, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-aurora-dark/40 backdrop-blur-lg border-b border-aurora-soft-green/10'
          : 'bg-aurora-dark/20 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex justify-between items-center">
        <motion.div
          className="flex items-center gap-2 md:gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-aurora-soft-green/30 to-aurora-teal/30 flex items-center justify-center border border-aurora-soft-green/30">
            <span className="text-aurora-soft-green font-mono font-bold text-xs md:text-sm">NSDS</span>
          </div>
          <span className="text-off-white font-serif text-base md:text-lg hidden sm:block">NS Divya Singh</span>
        </motion.div>

        <div className="hidden md:flex gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-off-white/70 hover:text-aurora-soft-green transition-colors duration-500 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-aurora-soft-green transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-off-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-aurora-dark/95 backdrop-blur-md border-t border-aurora-soft-green/20 p-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-off-white/70 hover:text-aurora-soft-green transition-colors duration-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar

