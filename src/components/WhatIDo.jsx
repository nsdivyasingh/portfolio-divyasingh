import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WhatIDo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      title: 'Frontend Dev',
      description: 'Building modern, responsive interfaces with React',
      color: 'from-aurora-green/10 to-aurora-soft-green/10',
      borderColor: 'border-aurora-soft-green/20',
    },
    {
      title: 'Backend Dev',
      description: 'Creating fast, secure APIs and database systems',
      color: 'from-aurora-teal/10 to-aurora-cyan/10',
      borderColor: 'border-aurora-teal/20',
    },
    {
      title: 'Generative AI',
      description: 'Implementing AI solutions for automated applications',
      color: 'from-aurora-soft-green/10 to-aurora-teal/10',
      borderColor: 'border-aurora-soft-green/20',
    },
    {
      title: 'Design To Code',
      description: 'Converting Figma designs into exact code replicas',
      color: 'from-aurora-cyan/10 to-aurora-teal/10',
      borderColor: 'border-aurora-cyan/20',
    },
    {
      title: 'Research & Development',
      description: 'Building modern, responsive interfaces with React and developing AI solutions for automated applications',
      color: 'from-aurora-green/10 to-aurora-soft-green/10',
      borderColor: 'border-aurora-soft-green/20',
    },
  ]

  return (
    <section id="work" ref={ref} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-aurora-soft-green px-4"
        >
          What I Do
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-[#1a1a1f]/90 border ${service.borderColor} rounded-xl p-4 md:p-6 backdrop-blur-sm hover:border-opacity-40 transition-all duration-500`}
            >
              <h3 className="font-semibold text-lg md:text-xl mb-2 text-off-white">{service.title}</h3>
              <p className="text-off-white/60 text-xs sm:text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo

