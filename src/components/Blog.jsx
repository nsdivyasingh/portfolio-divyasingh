import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" ref={ref} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-aurora-soft-green px-4"
        >
          Blog
        </motion.h2>

        <a
  href="https://thebetterversions.wordpress.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="block group"
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative bg-[#1a1a1f]/90 
               border border-aurora-soft-green/20 
               rounded-xl md:rounded-2xl 
               p-6 md:p-8 
               backdrop-blur-sm 
               transition-all duration-500 
               hover:border-aurora-soft-green/40 
               hover:shadow-[0_0_30px_rgba(110,231,183,0.08)]
               hover:scale-[1.01]
               cursor-pointer"
  >
    {/* Top-right label */}
    <span
      className="absolute top-5 right-5 
                 text-[12px] sm:text-sm 
                 text-aurora-soft-green/70 
                 transition-all duration-500 
                 group-hover:text-aurora-soft-green 
                 group-hover:tracking-wide"
    >
      Writing
    </span>

    <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 md:mb-4 text-off-white pr-24">
      The Better Versions
    </h3>

    <p className="text-off-white/70 mb-4 md:mb-6 text-sm sm:text-base leading-relaxed">
      A space for reflection, growth, and the quiet rewrites of life. 
      Not a pursuit of perfection, but a journey through clarity, questions, and becoming.
    </p>

    <h4 className="font-serif text-lg md:text-xl font-semibold mb-2 md:mb-3 text-aurora-teal">
      Featured Series: “12 Lessons Before 21”
    </h4>

    <p className="text-off-white/60 text-xs sm:text-sm leading-relaxed">
      A reflective series on lessons learned the hard way — written from personal experience.
    </p>
  </motion.div>
</a>

      </div>
    </section>
  )
}

export default Blog

