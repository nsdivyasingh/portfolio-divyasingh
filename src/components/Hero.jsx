import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col justify-center min-h-screen">
        {/* Name appears first - after aurora is visible */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-10 lg:mb-12 text-off-white tracking-[0.05em] whitespace-nowrap overflow-hidden"
          style={{
            textShadow: '0 0 20px rgba(110, 231, 183, 0.2), 0 0 40px rgba(110, 231, 183, 0.08)',
          }}
        >
          NS Divya Singh
        </motion.h1>

        {/* Tagline appears second - after name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.9, ease: 'easeOut' }}
          className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-off-white/70 font-light mb-6 sm:mb-8 md:mb-12 px-4"
        >
        Drawn to patterns in chaos, to quiet hours spent understanding how things connect. <br />
        I’m learning how ideas gain weight, and how patience turns effort into meaning. <br />  
        and how patience turns effort into meaning. <br />
        </motion.p>

        {/* Buttons appear third */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5, ease: 'easeOut' }}
          className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center px-4"
        >
          <a
            href="mailto:naveensinghdivyasingh@gmail.com"
            className="px-4 sm:px-6 py-2 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm md:text-base bg-aurora-dark/50 border border-aurora-soft-green/30 rounded-lg text-off-white hover:border-aurora-soft-green/50 hover:bg-aurora-soft-green/10 transition-all duration-500 backdrop-blur-sm"
          >
            Contact Me
          </a>
          <a
            href="https://www.dropbox.com/scl/fi/yjh60ztps7zwy9c1grkv5/DivyaSingh.pdf?rlkey=ofjfqj2au3zd8o8b1f0zc7csf&st=d7l4xlah&dl=1"
            download
            className="px-4 sm:px-6 py-2 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm md:text-base bg-aurora-dark/50 border border-aurora-teal/30 rounded-lg text-off-white hover:border-aurora-teal/50 hover:bg-aurora-teal/10 transition-all duration-500 backdrop-blur-sm"
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/n-s-divya-singh-1a2889264/"
            target="_blank"
            className="px-4 sm:px-6 py-2 sm:py-2.5 md:px-8 md:py-3 text-xs sm:text-sm md:text-base bg-aurora-dark/50 border border-aurora-cyan/30 rounded-lg text-off-white hover:border-aurora-cyan/50 hover:bg-aurora-cyan/10 transition-all duration-500 backdrop-blur-sm"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
