'use client'

import { useEffect, useRef } from 'react'
import { stats } from '@/data/content'

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<(HTMLDivElement | null)[]>([])
  const numbersRef = useRef<(HTMLDivElement | null)[]>([])

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

          const validStats = statsRef.current.filter((stat) => stat !== null)
          if (validStats.length > 0) {
            gsap.set(validStats, { opacity: 1 })
            gsap.from(validStats, {
              y: 60,
              duration: 1.5,
              stagger: 0.2,
              ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
              scrollTrigger: {
                trigger: validStats[0],
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            })
          }

          numbersRef.current.forEach((numberEl, index) => {
            if (!numberEl) return

            const stat = stats[index]
            const obj = { value: 0 }

            gsap.to(obj, {
              value: stat.value,
              duration: 2.5,
              ease: 'power2.out',
              onUpdate: () => {
                const formattedValue =
                  stat.value >= 1000
                    ? (obj.value / 1000).toFixed(1) + 'K'
                    : Math.round(obj.value).toString()
                numberEl.textContent = `${stat.prefix}${formattedValue}${stat.suffix}`
              },
              scrollTrigger: {
                trigger: numberEl,
                start: 'top 80%',
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
      id="skills"
      ref={sectionRef}
      className="pt-20 pb-40 px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-section font-display font-semibold mb-12 text-balance"
        >
          Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              ref={(el) => {
                statsRef.current[index] = el
              }}
              className="p-8 bg-white rounded-2xl border border-foreground/10 transition-all duration-400 hover:-translate-y-1"
            >
              <div
                ref={(el) => {
                  numbersRef.current[index] = el
                }}
                className="text-6xl md:text-7xl font-bold mb-4 text-foreground"
              >
                {stat.prefix}0{stat.suffix}
              </div>

              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>

              <p className="text-foreground/60 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

