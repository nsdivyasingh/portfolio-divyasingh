import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'FOSYS – AI-Powered Workspace Management Platform',
      description: 'An intelligent platform designed to streamline workspace operations using data-driven insights, automation, and role-based system design.',
      tech: ['AI Systems', 'Full-Stack', 'Workspace'],
      link: 'https://github.com/nsdivyasingh/fosys-ai-powered-workspace-management-platform',
      color: 'from-aurora-green/20 to-aurora-soft-green/20',
      glowColor: 'rgba(110, 231, 183, 0.3)',
    },
    {
      title: 'VisionAstraa Group of Companies - Website',
      description: 'Designed, developed the websites for VisionAstraa Group of Companies, contributing to ensuring responsiveness and a seamless user experience.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://github.com/nsdivyasingh/visionastraa-website',
      color: 'from-aurora-teal/20 to-aurora-cyan/20',
      glowColor: 'rgba(45, 212, 191, 0.3)',
    },
    {
      title: 'MazeRunner – Interactive Path-Finding Agent',
      description: 'A real-time web application visualizing exhaustive A* Search exploration with confidence-based heatmaps to demonstrate shortest-path discovery and algorithm behavior.',
      tech: ['React', 'A* Search', 'Visualization'],
      link: 'https://github.com/nsdivyasingh/AlgoArena_Hackathon/tree/main/Maze%20runner',
      color: 'from-aurora-soft-green/20 to-aurora-teal/20',
      glowColor: 'rgba(110, 231, 183, 0.3)',
    },
    {
      title: 'SpotFix – Civic-Tech Reporting Platform',
      description: 'A web and Android platform enabling citizens to report, map, and track civic issues using geolocation and image uploads for community-driven problem solving.',
      tech: ['React', 'Geolocation', 'Civic-Tech'],
      link: 'https://github.com/nsdivyasingh/spotfix',
      color: 'from-aurora-green/20 to-aurora-soft-green/20',
      glowColor: 'rgba(110, 231, 183, 0.3)',
    },
    {
      title: 'Fake News Detector',
      description: 'A Python app using Google Gemini API to classify news articles as real or fake, with explanations and text/image extraction and speech recognition features.',
      tech: ['Python', 'OCR/Vosk', 'Gemini 1.5'],
      link: 'https://github.com/nsdivyasingh/fake-news-detection',
      color: 'from-aurora-green/20 to-aurora-soft-green/20',
      glowColor: 'rgba(110, 231, 183, 0.3)',
    },
    {
      title: 'PixelBooth – Web-Based Photo Booth App',
      description: 'An interactive photo booth application featuring filters, overlays, and polaroid-style photo strip generation with a focus on clean UI and user experience.',
      tech: ['React', 'Image Processing', 'UI/UX'],
      link: 'https://github.com/nsdivyasingh/PixelBooth',
      color: 'from-aurora-green/20 to-aurora-soft-green/20',
      glowColor: 'rgba(110, 231, 183, 0.3)',
    },

  ]

  return (
    <section id="projects" ref={ref} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-aurora-soft-green px-4"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Soft green halo */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} blur-2xl opacity-30 transition-opacity duration-700 ${
                  hoveredIndex === index ? 'opacity-50' : ''
                }`}
                style={{
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: hoveredIndex === index ? `0 0 40px ${project.glowColor}` : `0 0 20px ${project.glowColor}`,
                }}
              />

              {/* Project card */}
              <div className="relative bg-[#1a1a1f]/90 border border-aurora-soft-green/20 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm hover:border-aurora-soft-green/40 transition-all duration-500 h-full">
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 md:mb-4 text-off-white">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-aurora-soft-green transition-colors duration-500"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-off-white/70 mb-4 md:mb-6 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 md:px-3 md:py-1 bg-[#1a1a1f]/90 border border-aurora-teal/20 rounded-full text-xs text-off-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

