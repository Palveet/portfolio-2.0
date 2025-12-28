'use client'

import { useEffect, useRef } from 'react'
import { research } from '@/data/content'

export default function Research() {
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

          itemsRef.current.forEach((item) => {
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
      id="research"
      ref={sectionRef}
      className="pt-20 pb-40 px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-section font-display font-semibold mb-12 text-balance"
        >
          Research
        </h2>

        <div className="space-y-16">
          {research.map((paper, index) => (
            <div
              key={paper.id}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className="border-l-2 border-accent pl-8 py-2"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-accent mb-2">
                    {paper.role} • {paper.publisher}
                  </p>
                  <h3 className="text-3xl font-bold mb-3">{paper.title}</h3>
                  <p className="text-lg text-foreground/70 mb-4">
                    {paper.conference}
                  </p>
                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      View Paper on IEEE Xplore
                    </a>
                  )}
                </div>

                <ul className="space-y-3 mt-6">
                  {paper.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-foreground/80 leading-relaxed"
                    >
                      <span className="text-accent flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

