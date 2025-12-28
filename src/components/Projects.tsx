'use client'

import { useEffect, useRef } from 'react'
import { projects } from '@/data/content'
import flik from '../../public/images/flik.png'
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const projectsRef = useRef<(HTMLDivElement | null)[]>([])

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

          projectsRef.current.forEach((project) => {
            if (!project) return

            gsap.set(project, { opacity: 1 })
            gsap.from(project, {
              y: 80,
              duration: 1.6,
              ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
              scrollTrigger: {
                trigger: project,
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
      id="projects"
      ref={sectionRef}
      className="pt-20 pb-40 px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-section font-display font-semibold mb-12 text-balance"
        >
          Selected Work
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectsRef.current[index] = el
              }}
              className="group transition-transform duration-400 hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="relative bg-background rounded-2xl overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
                    <img src={project.image} alt={project.title} className="w-full h-auto"/>
                  </div>
                </div>

                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-accent mb-2">
                        {project.subtitle}
                      </p>
                      <h3 className="text-4xl font-bold mb-4">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-lg text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-background rounded-full text-foreground/70 border border-foreground/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View Code
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
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
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

