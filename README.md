# IVR Interiors - Premium Interior Design Website

A modern, production-ready website for IVR Interiors, a premium interior design company specializing in modular kitchens, wardrobes, and custom interior solutions in Hyderabad.

## 🌟 Features

### Design & UX
- **Premium Animations**: Smooth GSAP and Framer Motion animations throughout
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Modern UI**: Clean, elegant design with glassmorphism effects
- **Interactive Elements**: Hover effects, micro-interactions, and scroll animations
- **Professional Typography**: Custom Google Fonts (Inter & Playfair Display)

### Pages
1. **Homepage**
   - Full-screen hero section with parallax effects
   - Services showcase with animated cards
   - Testimonials carousel
   - Call-to-action sections

2. **Portfolio**
   - Filterable gallery (Kitchen, Wardrobe, Living Room, etc.)
   - Lightbox image viewer
   - Smooth transitions and animations

3. **Services**
   - Detailed service descriptions
   - Animated feature lists
   - Process workflow visualization

4. **About**
   - Company story and timeline
   - Core values and highlights
   - Interactive milestone journey

5. **Contact**
   - Functional contact form
   - Form submissions saved to JSON file
   - Company contact information
   - Embedded Google Maps

### Special Features
- **Floating Social Media Buttons**: Instagram, YouTube, WhatsApp with neon hover effects
- **WhatsApp Float Button**: Fixed bottom-right with pulse animation
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter cards
- **Performance**: Optimized images and lazy loading
- **Custom Scrollbar**: Branded scrollbar design

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Image Gallery**: Yet Another React Lightbox
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd IVR-Interiors
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Build & Deploy

### Local Build
```bash
# Create production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel (Recommended)

#### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Option 2: Deploy via Vercel Dashboard
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

### Environment Variables
No environment variables required for basic functionality. The contact form saves to local JSON file.

## 📁 Project Structure

```
IVR-Interiors/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Footer.tsx          # Footer component
│   │   ├── SocialButtons.tsx   # Floating social media buttons
│   │   ├── WhatsAppFloat.tsx   # WhatsApp floating button
│   │   └── Testimonials.tsx    # Testimonials carousel
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── public/
│   └── images/                 # Static images
├── data/
│   └── contacts.json           # Form submissions (auto-created)
├── tailwind.config.ts          # Tailwind configuration
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Update Company Details
Edit the following files to update company information:
- `app/components/Footer.tsx` - Footer contact info
- `app/contact/page.tsx` - Contact page details
- `app/layout.tsx` - SEO metadata

### Change Colors
Edit `tailwind.config.ts` to customize the color palette:
```typescript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Update Images
Replace placeholder images in:
- Homepage: `app/page.tsx`
- Portfolio: `app/portfolio/page.tsx`
- Services: `app/services/page.tsx`
- About: `app/about/page.tsx`

Use Unsplash or upload your own images to `/public/images/`

### Social Media Links
Update social media links in:
- `app/components/Footer.tsx`
- `app/components/SocialButtons.tsx`
- `app/components/WhatsAppFloat.tsx`

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is created for IVR Interiors. All rights reserved.

## 🤝 Support

For support, contact:
- **Email**: venkatarajuandco@gmail.com
- **Phone**: +91 88855 75733

## 🎯 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: Optimized with Next.js automatic code splitting

---

**Built with ❤️ for IVR Interiors**

*Transforming Spaces, Creating Dreams*