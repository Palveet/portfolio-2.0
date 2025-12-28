'use client'

import { useEffect, useRef, useState } from 'react'
import { personalInfo } from '@/data/content'

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!navRef.current) return

    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        
        const showAnim = gsap.from(navRef.current!, {
          yPercent: -100,
          paused: true,
          duration: 0.3,
          ease: 'power2.inOut',
        }).progress(1)

        ScrollTrigger.create({
          start: 'top top',
          end: 99999,
          onUpdate: (self) => {
            if (self.direction === -1) {
              showAnim.play()
            } else {
              showAnim.reverse()
            }
          },
        })

        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
      })
    })
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Desktop Navigation - Full Width Distribution */}
        <div className="hidden md:flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-3xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            {personalInfo.name.split(' ')[0].toUpperCase()}
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="text-lg font-normal hover:opacity-70 transition-opacity"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection('experience')}
            className="text-lg font-normal hover:opacity-70 transition-opacity"
          >
            Experience
          </button>

          <button
            onClick={() => scrollToSection('education')}
            className="text-lg font-normal hover:opacity-70 transition-opacity"
          >
            Education
          </button>

          <button
            onClick={() => scrollToSection('research')}
            className="text-lg font-normal hover:opacity-70 transition-opacity"
          >
            Research
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="text-lg font-normal hover:opacity-70 transition-opacity"
          >
            Work
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            {personalInfo.name.split(' ')[0].toUpperCase()}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-foreground/10">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-base font-medium hover:text-accent transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-base font-medium hover:text-accent transition-colors py-2"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-left text-base font-medium hover:text-accent transition-colors py-2"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('research')}
                className="text-left text-base font-medium hover:text-accent transition-colors py-2"
              >
                Research
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-base font-medium hover:text-accent transition-colors py-2"
              >
                Work
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
