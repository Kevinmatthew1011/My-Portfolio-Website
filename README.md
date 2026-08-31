# Kevin Matthew — Portfolio Website V2

Personal portfolio website built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

**Production:** [portfolio-livid-tau-qf45962w1n.vercel.app](https://portfolio-livid-tau-qf45962w1n.vercel.app)

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Deployment**: [Vercel](https://portfolio-livid-tau-qf45962w1n.vercel.app)
- **SEO**: Canonical metadata, Open Graph/Twitter cards, sitemap, robots rules, and generated site icon

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── opengraph-image.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── TechStack.tsx
│       ├── Projects.tsx
│       ├── Achievements.tsx
│       ├── Education.tsx
│       └── Contact.tsx
├── data/
│   ├── achievements.ts
│   ├── profile.ts
│   ├── projects.ts
│   └── skills.ts
└── types/
    └── portfolio.ts
```

## 🛠️ Getting Started

```bash
# Install exact locked dependencies
npm ci

# Run the development server
npm run dev

# Build for production
npm run build
```

Run `npm run lint` and `npm run type-check` before opening a pull request.

## 🌐 Live Site

- **Live URL**: [portfolio-livid-tau-qf45962w1n.vercel.app](https://portfolio-livid-tau-qf45962w1n.vercel.app)
