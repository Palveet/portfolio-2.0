'use client'

import { useEffect, useRef } from 'react'
import { experience } from '@/data/content'

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
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

          itemsRef.current.forEach((item, index) => {
            if (!item) return

            gsap.set(item, { opacity: 1 })
            gsap.from(item, {
              y: 60,
              duration: 1.5,
              ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
              scrollTrigger: {
                trigger: item,
                start: 'top 75%',
                toggleActions: 'play none none none',
              },
            })
          })
        }, sectionRef)

        return () => ctx.revert()
      })
    })
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="pt-20 pb-40 px-6 lg:px-8 bg-foreground text-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-section font-display font-semibold mb-12 text-balance"
        >
          Experience
        </h2>

        <div className="space-y-16">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className="relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="sticky top-32">
                    <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                    <p className="text-background/70 mb-1">{exp.position}</p>
                    <p className="text-sm text-background/50 mb-2">
                      {exp.location}
                    </p>
                    <p className="text-sm font-medium text-accent">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-background/80 leading-relaxed"
                      >
                        <span className="text-accent mt-1 flex-shrink-0">
                          →
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < experience.length - 1 && (
                <div className="mt-16 border-t border-background/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

