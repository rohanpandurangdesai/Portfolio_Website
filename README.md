# Rohan Desai — DevOps Portfolio

A world-class, production-ready personal portfolio for a **DevOps Engineer / SRE**, built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Dark-themed, fully responsive, SEO-optimized, and deployable on Vercel.

## ✨ Features

- Animated hero with typing effect, floating cloud particles, and orbiting tech badges
- Glassmorphism cards, gradient accents, and scroll-reveal animations throughout
- Animated skill counters, hover effects, and a modern loading screen
- Sections: Hero, About, Tech Stack, Experience, Projects, Certifications, Contact
- SEO: metadata, Open Graph, Twitter cards, JSON-LD (`Person`), `sitemap.xml`, `robots.txt`
- Accessibility: skip link, semantic landmarks, `prefers-reduced-motion` support
- Performance: static generation, `next/font`, optimized `next/image`

## 🧱 Tech Stack

React · Next.js · TypeScript · Tailwind CSS · Framer Motion · react-icons

## 📁 Project Structure

```
app/            # App Router: layout, page, globals, sitemap, robots
components/      # Section components (Hero, About, TechStack, …)
components/ui/   # Reusable primitives (Reveal, SectionHeading, TechIcon, …)
hooks/           # useCountUp, useTypewriter
lib/             # site config + content data
public/          # profile.png, resume.pdf, static assets
```

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## ✏️ Customize

- **Content / copy** → `lib/data.ts`
- **Personal info, social links, resume path, domain** → `lib/site.ts`
  - Update the LinkedIn and GitHub placeholders in `site.socials`.
  - Set `site.url` to your live domain (used by SEO + sitemap).
- **Resume** → replace `public/resume.pdf` with your real resume.
- **Profile photo** → replace `public/profile.png`.
- **Theme / colors** → `tailwind.config.ts`.

## ☁️ Deploy to Vercel

### Option A — Dashboard (recommended)
1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repository.
3. Framework preset auto-detects **Next.js** — no config needed.
4. Click **Deploy**. Add a custom domain under **Settings → Domains** if desired.

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel          # preview deploy (follow the prompts to link/create the project)
vercel --prod   # production deploy
```

After deploying, update `site.url` in `lib/site.ts` to your final domain and redeploy so SEO tags and the sitemap use the correct URL.

## 📝 License

Personal portfolio — feel free to use as a reference.
