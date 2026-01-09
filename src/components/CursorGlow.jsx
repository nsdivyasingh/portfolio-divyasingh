import { useEffect, useRef, useState } from 'react'

const CursorGlow = ({ mousePosition }) => {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    cursor.style.left = `${mousePosition.x}px`
    cursor.style.top = `${mousePosition.y}px`

    // Check if hovering over interactive elements
    const elementBelow = document.elementFromPoint(mousePosition.x, mousePosition.y)
    const isInteractive = elementBelow?.closest('a, button, [role="button"]')
    setIsHovering(!!isInteractive)
  }, [mousePosition])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-aurora-soft-green"
        style={{
          transform: 'translate(-50%, -50%)',
          boxShadow: isHovering 
            ? '0 0 20px rgba(110, 231, 183, 0.6)' 
            : '0 0 15px rgba(110, 231, 183, 0.4)',
          transition: 'all 0.3s ease-out',
          scale: isHovering ? 1.3 : 1,
        }}
      />
      {/* Subtle trail effect */}
      <div
        className="fixed pointer-events-none z-40 w-1 h-1 rounded-full bg-aurora-teal opacity-30"
        style={{
          left: `${mousePosition.x - 20}px`,
          top: `${mousePosition.y - 20}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out',
        }}
      />
    </>
  )
}

export default CursorGlow

