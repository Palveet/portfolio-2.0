'use client'

import { useEffect, useRef, useState } from 'react'
import { aboutServices } from '@/data/content'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        
        const ctx = gsap.context(() => {
          if (titleRef.current) {
            gsap.set(titleRef.current, { opacity: 1 })
            gsap.from(titleRef.current, {
              y: 50,
              duration: 1.4,
              ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
              scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            })
          }

          const validCards = cardsRef.current.filter((card) => card !== null)
          if (validCards.length > 0 && cardsContainerRef.current) {
            gsap.set(validCards, { opacity: 1 })
            gsap.from(validCards, {
              y: 60,
              duration: 1.4,
              ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: 'top 70%',
                toggleActions: 'play none none none',
              },
            })
          }
        }, sectionRef)

        return () => ctx.revert()
      })
    })
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="pt-20 pb-40 px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-section font-display font-semibold mb-12 text-balance"
        >
          Expertise
        </h2>

        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {aboutServices.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group p-8 bg-background rounded-2xl transition-all duration-400 cursor-pointer hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl font-bold text-foreground/10 group-hover:text-accent/20 transition-colors">
                  {String(service.id).padStart(2, '0')}.
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-white rounded-full text-foreground/80 border border-foreground/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

