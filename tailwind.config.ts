import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        foreground: '#0A0A0A',
        accent: '#E63946',
        muted: 'rgba(0,0,0,0.4)',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '0.95', fontWeight: '700' }],
        'section': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', fontWeight: '600' }],
        'body-large': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config

