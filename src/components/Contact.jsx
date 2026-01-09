import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24 border-t border-white/5"
    >
      <div className="text-center max-w-2xl mx-auto">

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-xl sm:text-2xl md:text-3xl 
                     text-aurora-soft-green 
                     font-light 
                     mb-8 md:mb-12"
        >
          If It Resonates, Let’s Connect.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative inline-block"
        >
          {/* Pulsing star */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-4 h-4 bg-aurora-soft-green rounded-full blur-sm" />
          </motion.div>

          <motion.a
            href="mailto:naveensinghdivyasingh@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative block 
                       px-8 py-4 md:px-10 md:py-5 
                       bg-[#1a1a1f]/90 
                       border border-aurora-soft-green/40 
                       rounded-xl 
                       backdrop-blur-sm 
                       hover:border-aurora-soft-green/70 
                       hover:shadow-[0_0_25px_rgba(110,231,183,0.18)] 
                       transition-all duration-500 
                       text-sm sm:text-base"
          >
            {isHovered ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-aurora-soft-green font-mono break-all"
              >
                naveensinghdivyasingh@gmail.com
              </motion.span>
            ) : (
              <span className="text-off-white/70 tracking-wide">
                Send Signal
              </span>
            )}
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center gap-4 md:gap-6 mt-6 md:mt-8"
        >
          {[
            { name: 'LinkedIn', href: 'https://www.linkedin.com/in/n-s-divya-singh-1a2889264/' },
            { name: 'GitHub', href: 'https://github.com/nsdivyasingh' },
            { name: 'Instagram', href: 'https://www.instagram.com/idiv_yasingh/' },
          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 
                         text-sm md:text-base 
                         text-off-white/60 
                         hover:text-aurora-soft-green 
                         border border-aurora-soft-green/20 
                         hover:border-aurora-soft-green/40 
                         rounded-lg 
                         transition-all duration-500"
            >
              {social.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-white/70 text-xs tracking-wide mt-10 md:mt-12"
        >
          © 2026 NS Divya Singh. Made with 🌌. All Rights Reserved.        </motion.p>

      </div>
    </section>
  )
}

export default Contact
