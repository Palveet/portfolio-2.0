import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Custom easing functions for refined motion
export const customEase = {
  smooth: 'cubic-bezier(0.65, 0, 0.35, 1)',     // Main ease - smooth and refined
  slowIn: 'cubic-bezier(0.85, 0, 0.15, 1)',     // Slow start, fast end
  slowOut: 'cubic-bezier(0.33, 1, 0.68, 1)',    // Fast start, slow end
  elegant: 'cubic-bezier(0.4, 0, 0.2, 1)',      // Elegant, confident
}

export const fadeInUp = (element: HTMLElement | null, delay = 0) => {
  if (!element) return null

  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}

export const fadeIn = (element: HTMLElement | null, delay = 0) => {
  if (!element) return null

  return gsap.from(element, {
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}

export const staggerFadeInUp = (elements: HTMLElement[] | null, stagger = 0.1) => {
  if (!elements || elements.length === 0) return null

  return gsap.from(elements, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}

export const splitTextReveal = (element: HTMLElement | null, delay = 0) => {
  if (!element) return null

  const text = element.textContent || ''
  const chars = text.split('')
  
  element.innerHTML = chars
    .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('')

  const spans = element.querySelectorAll('span')

  return gsap.from(spans, {
    y: 100,
    opacity: 0,
    rotationX: -90,
    stagger: 0.02,
    duration: 0.8,
    delay,
    ease: 'power4.out',
  })
}

export const scaleIn = (element: HTMLElement | null, delay = 0) => {
  if (!element) return null

  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}

export const parallaxEffect = (element: HTMLElement | null, speed = 0.5) => {
  if (!element) return null

  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}

export const pinSection = (element: HTMLElement | null, endTrigger?: string) => {
  if (!element) return null

  return ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    end: endTrigger || '+=100%',
    pin: true,
    pinSpacing: true,
  })
}

export const counterAnimation = (element: HTMLElement | null, endValue: number, duration = 2) => {
  if (!element) return null

  const obj = { value: 0 }

  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toLocaleString()
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}

export const hoverScale = (element: HTMLElement | null, scale = 1.05) => {
  if (!element) return

  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      scale,
      duration: 0.3,
      ease: 'power2.out',
    })
  })

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  })
}

export const slideInFromLeft = (element: HTMLElement | null, delay = 0) => {
  if (!element) return null

  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}

export const slideInFromRight = (element: HTMLElement | null, delay = 0) => {
  if (!element) return null

  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}

export const morphWords = (element: HTMLElement | null, duration = 0.8) => {
  if (!element) return null

  return gsap.to(element, {
    opacity: 0,
    scale: 0.95,
    duration,
    ease: customEase.smooth,
  })
}

export const parallaxScroll = (element: HTMLElement | null, speed = 0.3) => {
  if (!element) return null

  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })
}

export const subtleHover = (element: HTMLElement | null) => {
  if (!element) return

  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      y: -4,
      duration: 0.4,
      ease: customEase.smooth,
    })
  })

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      y: 0,
      duration: 0.4,
      ease: customEase.smooth,
    })
  })
}

