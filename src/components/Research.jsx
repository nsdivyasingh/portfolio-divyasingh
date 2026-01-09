import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Research = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="research" ref={ref} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16  space-y-8 md:space-y-10 text-aurora-soft-green px-4"
        >
          Research & Publications
        </motion.h2>

        <a
          href="https://www.jetir.org/view?paper=JETIR2506313"
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
            {/* Top-right Paper ID */}
            <span
              className="absolute top-10 right-5  
                        text-[14px] sm:text-m
                        text-aurora-soft-green/70
                        transition-all duration-500 
                        group-hover:text-aurora-soft-green 
                        group-hover:tracking-wide"
            >
              JETIR2506313
            </span>

            <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 md:mb-4 text-off-white pr-20">
              Fake News Detection: An AI-based Approach
            </h3>

            <p className="text-off-white/70 mb-3 md:mb-4 text-sm sm:text-base leading-relaxed">
              Published in Journal of Emerging Technologies and Innovative Research (JETIR)
              <br />
              Volume 12, Issue 6, June 2025
            </p>

            <p className="text-off-white/60 text-xs sm:text-sm">
              <span className="text-aurora-soft-green/70 font-medium">
                Published Research
              </span>
            </p>
          </motion.div>
        </a>

        <a
          href="https://drive.google.com/file/d/1HETn2hL4AYqCEzqSFwYXLooglj7woj-c/view"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
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
            {/* Top-right Status */}
            <span
              className="absolute top-10 right-5  
                        text-[14px] sm:text-m
                        text-aurora-soft-green/70
                        transition-all duration-500 
                        group-hover:text-aurora-soft-green 
                        group-hover:tracking-wide"
            >
              Forthcoming
            </span>

            <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 md:mb-4 text-off-white pr-24">
              FOSYS: An AI-Based Workflow Automation System for SCRUM <br/>
              and Software Development Teams
            </h3>

            <p className="text-off-white/70 mb-3 md:mb-4 text-sm sm:text-base leading-relaxed">
              To be published in <span className="italic">Hinweis Research</span>.  
              Presented at IC-AISMART 2025.
            </p>

            <p className="text-off-white/60 text-xs sm:text-sm">
              <span className="text-aurora-soft-green/70 font-medium">
                Best Paper Award — IC-AISMART ’25
              </span>
            </p>
          </motion.div>
        </a>



      </div>
    </section>
  )
}

export default Research

