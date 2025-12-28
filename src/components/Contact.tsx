'use client'

import { useEffect, useRef, useState } from 'react'
import { personalInfo } from '@/data/content'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

          if (contentRef.current) {
            gsap.set(contentRef.current, { opacity: 1 })
            gsap.from(contentRef.current, {
              y: 50,
              duration: 1.5,
              delay: 0.2,
              ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
              scrollTrigger: {
                trigger: contentRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            })
          }
        }, sectionRef)

        return () => ctx.revert()
      })
    })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-40 px-6 lg:px-8 bg-foreground text-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-section font-display font-semibold mb-24 text-balance"
        >
          Let's work together
        </h2>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
              <p className="text-background/70 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 text-lg hover:text-accent transition-colors group"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="group-hover:underline">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 text-lg hover:text-accent transition-colors group"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="group-hover:underline">{personalInfo.phone}</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-accent transition-colors group"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="group-hover:underline">
                  github.com/{personalInfo.githubUsername}
                </span>
              </a>

              <div className="flex items-center gap-4 text-lg">
                <svg
                  className="w-6 h-6"
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
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg focus:outline-none focus:border-accent transition-colors text-background placeholder-background/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg focus:outline-none focus:border-accent transition-colors text-background placeholder-background/50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg focus:outline-none focus:border-accent transition-colors text-background placeholder-background/50 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </button>

              {status === 'success' && (
                <p className="text-accent text-center">
                  Opening your email client...
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

