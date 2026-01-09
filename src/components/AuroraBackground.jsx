import { useEffect, useRef, useState } from 'react'

const AuroraBackground = () => {
  const canvasRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 800

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()

    let time = 0
    let animationFrameId

    const drawAurora = () => {
      // Calculate fade based on scroll - aurora fades slowly until end of page
      const currentIsMobile = window.innerWidth < 768
      
      // Get total page height for fade calculation (recalculate each frame)
      const totalPageHeight = Math.max(
        document.documentElement.scrollHeight || 0,
        document.body.scrollHeight || 0,
        window.innerHeight || 0
      )
      
      // Aurora fades smoothly over the entire page scroll
      // Start fading after hero section, keep slight tint till end (never completely black)
      const fadeStartPoint = heroHeight * 0.3
      const fadeEndPoint = totalPageHeight * 0.95 // Fade to minimum at 95% of page
      const fadeRange = Math.max(1, fadeEndPoint - fadeStartPoint)
      
      // Calculate opacity: full at start, gradually fade but keep minimum 0.15 tint at end
      let auroraOpacity = 1
      if (scrollY > fadeStartPoint) {
        const fadeProgress = Math.min(1, (scrollY - fadeStartPoint) / fadeRange)
        // Smooth easing function for very smooth transition
        const easedProgress = fadeProgress * fadeProgress * (3 - 2 * fadeProgress) // Smoothstep
        auroraOpacity = Math.max(0.15, 1 - easedProgress * 0.85) // Keep 15% minimum tint
      }

      // Deep black background
      ctx.fillStyle = '#0a0a0f'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Subtle curved horizon at bottom
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)
      ctx.quadraticCurveTo(canvas.width / 2, canvas.height - 50, canvas.width, canvas.height)
      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()
      ctx.fillStyle = '#0f1419'
      ctx.fill()

      // Always draw aurora (it will fade based on opacity)

      // On mobile, use fewer layers with wider spread - MUCH SOFTER
      const layerCount = currentIsMobile ? 2 : 3
      const layers = currentIsMobile
        ? [
            { speed: 0.006, waveSpeed: 0.002, amplitude: 80, yOffset: canvas.height * 0.3, opacity: auroraOpacity * 0.25, width: 400 },
            { speed: 0.008, waveSpeed: 0.003, amplitude: 100, yOffset: canvas.height * 0.35, opacity: auroraOpacity * 0.3, width: 450 },
          ]
        : [
            { speed: 0.006, waveSpeed: 0.002, amplitude: 60, yOffset: canvas.height * 0.25, opacity: auroraOpacity * 0.2, width: 300 },
            { speed: 0.008, waveSpeed: 0.003, amplitude: 80, yOffset: canvas.height * 0.3, opacity: auroraOpacity * 0.25, width: 350 },
            { speed: 0.010, waveSpeed: 0.004, amplitude: 100, yOffset: canvas.height * 0.35, opacity: auroraOpacity * 0.3, width: 400 },
          ]

      time += 0.006 // Slower time increment for smoother, more continuous motion

      layers.forEach((layer, layerIndex) => {
        // Horizontal movement (right to left) - seamless loop
        const xOffset = (time * layer.speed * canvas.width) % (canvas.width * 1.5) - canvas.width * 0.5

        // Create gradient for this layer - wider on mobile, very soft
        const gradientWidth = layer.width || 300
        const gradient = ctx.createLinearGradient(
          xOffset,
          layer.yOffset - gradientWidth / 2,
          xOffset,
          layer.yOffset + gradientWidth / 2
        )

        // Aurora colors: green primary, VERY muted teal accents
        const greenR = 110
        const greenG = 231
        const greenB = 183

        // Very soft, eye-friendly opacity values
        gradient.addColorStop(0, `rgba(${greenR}, ${greenG}, ${greenB}, 0)`)
        gradient.addColorStop(0.2, `rgba(${greenR}, ${greenG}, ${greenB}, ${layer.opacity * 0.15})`)
        gradient.addColorStop(0.4, `rgba(${greenR}, ${greenG}, ${greenB}, ${layer.opacity * 0.25})`)
        gradient.addColorStop(0.5, `rgba(${greenR}, ${greenG}, ${greenB}, ${layer.opacity * 0.35})`)
        gradient.addColorStop(0.6, `rgba(${greenR}, ${greenG}, ${greenB}, ${layer.opacity * 0.25})`)
        gradient.addColorStop(0.8, `rgba(${greenR}, ${greenG}, ${greenB}, ${layer.opacity * 0.15})`)
        gradient.addColorStop(1, `rgba(${greenR}, ${greenG}, ${greenB}, 0)`)

        // Draw wavy aurora band
        ctx.beginPath()
        ctx.moveTo(0, layer.yOffset)

        // Create soft wave distortion
        const stepSize = currentIsMobile ? 5 : 3
        for (let x = 0; x <= canvas.width; x += stepSize) {
          const wave = Math.sin((x / canvas.width) * Math.PI * 3 + time * layer.waveSpeed + layerIndex) * layer.amplitude
          const breathing = Math.sin(time * 0.3 + layerIndex) * 15
          ctx.lineTo(x, layer.yOffset + wave + breathing)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        ctx.fillStyle = gradient
        ctx.fill()

        // Heavy blur for diffused, fog-like edges (less blur on mobile for performance)
        ctx.filter = currentIsMobile ? 'blur(60px)' : 'blur(100px)'
        ctx.fill()
        ctx.filter = 'none'
      })

      // Very subtle teal accents
      if (!currentIsMobile) {
        const accentGradient = ctx.createLinearGradient(
          canvas.width / 2 + Math.sin(time * 0.2) * 80,
          canvas.height * 0.3,
          canvas.width / 2 + Math.sin(time * 0.2) * 80,
          canvas.height * 0.4
        )

        accentGradient.addColorStop(0, 'rgba(45, 212, 191, 0)')
        accentGradient.addColorStop(0.5, `rgba(45, 212, 191, ${auroraOpacity * 0.02})`)
        accentGradient.addColorStop(1, 'rgba(45, 212, 191, 0)')

        ctx.fillStyle = accentGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.filter = 'blur(120px)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.filter = 'none'
      }

      animationFrameId = requestAnimationFrame(drawAurora)
    }

    // Start aurora immediately - continuous and smooth
    drawAurora()

    const handleResize = () => {
      updateCanvasSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [scrollY, heroHeight])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ display: 'block' }}
    />
  )
}

export default AuroraBackground
