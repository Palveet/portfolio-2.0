'use client'

import { useEffect, useRef } from 'react'

interface BackgroundTextProps {
  text: string
}

export default function BackgroundText({ text }: BackgroundTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)

        if (textRef.current) {
          gsap.to(textRef.current, {
            y: () => window.innerHeight * 0.3,
            ease: 'none',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          })
        }
      })
    })
  }, [])

  return (
    <div
      ref={textRef}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <span
        className="font-display font-bold text-foreground whitespace-nowrap"
        style={{
          fontSize: 'clamp(15rem, 25vw, 30rem)',
          opacity: 0.03,
          lineHeight: 1,
        }}
      >
        {text}
      </span>
    </div>
  )
}

