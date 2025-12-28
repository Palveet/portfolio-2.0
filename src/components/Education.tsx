'use client'

import { useEffect, useRef } from 'react'
import { education } from '@/data/content'

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="pt-20 pb-40 px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-section font-display font-semibold mb-12 text-balance"
        >
          Education
        </h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className="border-l-2 border-accent pl-8 py-2"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                <span className="text-muted font-light">{edu.period}</span>
              </div>
              <p className="text-xl text-foreground/70">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



