# Krishna's Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🎨 Design Theme

- **Primary Color**: Orange (#FF5722)
- **Dark Mode**: Deep dark background with vibrant orange accents
- **Light Mode**: Clean white background with orange highlights
- **Base Color Palette**: Zinc with CSS variables for easy theming

## 📁 Project Structure

```
krishna_portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles and theme variables
├── components/            # React components
│   └── ui/               # shadcn/ui components (auto-generated)
├── lib/                  # Utility functions
│   └── utils.ts          # Helper utilities (cn, etc.)
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── public/               # Static assets
│   ├── assets/          # General assets
│   └── images/          # Image files
└── ...config files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

Dependencies are already installed. To reinstall:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 🎨 Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add navigation-menu
# etc.
```

Components will be added to `components/ui/`.

## 📝 Customization

### Theme Colors

Edit `app/globals.css` to customize theme colors. The primary orange color is defined as:

```css
--primary: oklch(0.643 0.22 27.325); /* #FF5722 */
```

### Fonts

The project uses Geist Sans and Geist Mono fonts (configured in `app/layout.tsx`).

### Tailwind Configuration

Tailwind CSS v4 uses the new CSS-first configuration in `app/globals.css`.

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

MIT License - feel free to use this for your own portfolio!
