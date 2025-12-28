'use client'

import { useEffect, useRef } from 'react'
import { heroContent } from '@/data/content'
import { customEase } from '@/lib/animations'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: customEase.smooth } })

        if (headlineRef.current) {
          gsap.set(headlineRef.current, { opacity: 1 })
          tl.from(headlineRef.current, {
            y: 60,
            duration: 1.4,
            ease: customEase.smooth,
          }, 0.3)
        }

        if (subtitleRef.current) {
          gsap.set(subtitleRef.current, { opacity: 1 })
          tl.from(
            subtitleRef.current,
            {
              y: 40,
              duration: 1.2,
              ease: customEase.smooth,
            },
            '-=0.8'
          )
        }

      }, heroRef)

      return () => ctx.revert()
    })
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 py-20"
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        <div className="space-y-8">
          <h1
            ref={headlineRef}
            className="text-hero font-display font-bold leading-none"
          >
            Software that scales
          </h1>
          
          <div ref={subtitleRef} className="max-w-2xl mx-auto">
            <p className="text-body-large text-muted font-light leading-relaxed">
              {heroContent.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
