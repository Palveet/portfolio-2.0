'use client'

import { personalInfo } from '@/data/content'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-foreground text-background py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-20">
          {/* Column 1 */}
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block text-lg hover:text-accent transition-colors duration-300 text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block text-lg hover:text-accent transition-colors duration-300 text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block text-lg hover:text-accent transition-colors duration-300 text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block text-lg hover:text-accent transition-colors duration-300 text-left"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('research')}
              className="block text-lg hover:text-accent transition-colors duration-300 text-left"
            >
              Research
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block text-lg hover:text-accent transition-colors duration-300 text-left"
            >
              Work
            </button>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection('skills')}
              className="block text-lg hover:text-accent transition-colors duration-300 text-left"
            >
              Impact
            </button>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="block text-lg hover:text-accent transition-colors duration-300"
            >
              {personalInfo.email}
            </a>
            <div className="flex items-center gap-2 text-lg">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{personalInfo.location}</span>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg hover:text-accent transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Large Name/Brand */}
        <div className="text-center mb-12">
          <h2 className="text-[clamp(4rem,15vw,12rem)] font-bold leading-none tracking-tight">
            {personalInfo.name.split(' ')[0].toUpperCase()}
          </h2>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/50 space-y-4 md:space-y-0">
          <p>
            {personalInfo.name} | Portfolio {new Date().getFullYear()}
          </p>
          <p>Built with Next.js & GSAP</p>
        </div>
      </div>
    </footer>
  )
}

