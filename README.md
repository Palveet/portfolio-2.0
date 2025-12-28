# Portfolio 2.0

A modern, animated portfolio website. Built with Next.js 14, TypeScript, Tailwind CSS, and GSAP animations.

## Features

- 🎨 Modern, minimalist design inspired by Fluke
- ✨ Smooth scroll animations powered by GSAP
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 (App Router)
- 🎯 TypeScript for type safety
- 🎭 Split-text animations and parallax effects
- 📊 Animated statistics counters
- 💼 Project showcase with interactive cards
- 📬 Contact form with validation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio-2.0/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout with navigation
│   │   ├── page.tsx      # Main page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── lib/             # Utility functions
│   │   └── animations.ts # GSAP animation helpers
│   └── data/            # Content data
│       └── content.ts   # Portfolio content
├── public/
│   └── images/          # Project images
└── package.json
```

## Customization

### Update Content

Edit the content in `src/data/content.ts`:

- Personal information
- Hero section text
- Services/skills
- Work experience
- Projects
- Statistics
- Contact information

### Add Project Images

Place your project screenshots in `public/images/`:

- `faith.jpg` - Faith iOS app
- `flik.jpg` - Flik AI platform
- `helix.jpg` - Helix recruiting assistant

### Modify Animations

Animation utilities are in `src/lib/animations.ts`. You can adjust:

- Animation duration
- Easing functions
- Scroll trigger points
- Stagger timing

### Change Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  background: '#F5F5F5',  // Off-white
  foreground: '#000000',  // Black
  accent: '#E63946',      // Red
}
```

## Animations

The portfolio includes several GSAP-powered animations:

1. **Hero Text Reveal**: Letter-by-letter split-text animation
2. **Scroll Triggers**: Sections fade in as you scroll
3. **Stagger Animations**: Cards animate in sequence
4. **Number Counters**: Stats count up when visible
5. **Navigation**: Hides on scroll down, shows on scroll up
6. **Hover Effects**: Smooth scale and color transitions

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm run start
```

## Performance

- Optimized for Core Web Vitals
- Lazy loading for images
- GSAP animations run at 60fps
- Next.js automatic code splitting
- Image optimization with Next.js Image component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

- Design inspiration: [Fluke by Kitpro Studio](https://kitpro-fluke.webflow.io/)
- Built by Palveet Saluja
- Animations: GSAP (GreenSock)
- Framework: Next.js by Vercel

## Contact

- Email: palveetkaursaluja@gmail.com
- GitHub: [@palveet](https://github.com/Palveet)
- Location: San Jose, CA
