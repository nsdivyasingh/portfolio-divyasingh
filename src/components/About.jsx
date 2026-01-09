import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Internshala ISP Program',
      duration: 'March 2025',
      description: "Promoted Internshala's services through strategic outreach and workshops, successfully onboarding new users and boosting platform engagement.",
    },
    {
      title: 'VisionAstraa Startup Academy',
      duration: 'Aug 2024 - Present',
      description: 'Collaborated in the development and implementation of company websites, focusing on design, responsiveness, and user experience to enhance digital presence.',
    },
    {
      title: 'AMC Math Club',
      duration: 'July 2024 - Present',
      description: 'Delivered an engaging and insightful session on the mathematical constant Pi (π), exploring its fascinating history, from ancient civilizations to its modern-day applications.',
    },
  ]

  const techStack = [
    'Python', 'Java', 'HTML5', 'CSS3', 'JavaScript', 'TensorFlow', 'API',
    'Flask', 'MongoDB', 'MySQL', 'Supabase', 'Firebase', 'Figma',
    'Visual Studio Code', 'GitHub', 'PowerBI', 'Tableau'
  ]

  return (
    <section id="about" ref={ref} className="relative pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-aurora-soft-green px-4">
            About
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-off-white/60 max-w-5xl mx-auto leading-relaxed px-4">
          I am a final-year undergraduate specializing in Artificial Intelligence and Machine Learning, with a strong interest in applying research-driven ideas to real-world systems. My experience across research, full-stack development, and open-source work has shaped a clear, practical approach to solving complex problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-20 place-items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="center"
          >
            <h3 className="font-serif text-2xl sm:text-3xl mb-4 md:mb-6 text-aurora-soft-green">
              Experience
            </h3>

            <div className="space-y-4 md:space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-[#1a1a1f]/90 border border-aurora-soft-green/20 rounded-lg p-4 md:p-6 backdrop-blur-sm hover:border-aurora-soft-green/40 transition-all duration-500"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h4 className="font-semibold text-sm sm:text-base text-off-white">{exp.title}</h4>
                    <span className="text-xs text-aurora-soft-green bg-aurora-soft-green/10 px-3 py-1 rounded-full w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-off-white/60 text-xs sm:text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl mb-4 md:mb-6 text-aurora-soft-green">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1a1a1f]/90 border border-aurora-teal/20 rounded-full text-xs sm:text-sm text-off-white/80 hover:border-aurora-teal/50 hover:text-aurora-teal transition-all duration-500 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

