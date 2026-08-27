# Rohan Desai — DevOps Portfolio Website

A modern, dark-themed personal portfolio for a **DevOps Engineer / SRE**, built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It's fully responsive, SEO-optimized, and hosted for free on **Vercel**.

🌐 **Live site:** https://rohanpdesai.vercel.app

> **New to all this?** No problem. This README explains every step in plain language — from running the site on your own computer to putting it live on the internet. Just follow the sections in order.

---

## 📑 Table of Contents

1. [What you need first (prerequisites)](#1-what-you-need-first-prerequisites)
2. [Run the website on your computer](#2-run-the-website-on-your-computer)
3. [Project structure (what each folder does)](#3-project-structure-what-each-folder-does)
4. [Customize it with your own details](#4-customize-it-with-your-own-details)
5. [Save your changes with Git](#5-save-your-changes-with-git)
6. [Push your code to GitHub](#6-push-your-code-to-github)
7. [Put it live on the internet (Vercel)](#7-put-it-live-on-the-internet-vercel)
8. [Make the live site public](#8-make-the-live-site-public)
9. [Give it a nicer web address (domain)](#9-give-it-a-nicer-web-address-domain)
10. [Auto-deploy: update the site anytime](#10-auto-deploy-update-the-site-anytime)
11. [Troubleshooting](#11-troubleshooting)

---

## 1. What you need first (prerequisites)

Install these free tools on your computer:

| Tool | What it's for | Where to get it |
|------|---------------|-----------------|
| **Node.js** (v18 or newer) | Runs the website code | https://nodejs.org (download the "LTS" version) |
| **Git** | Tracks your code changes | https://git-scm.com |
| **A code editor** | Editing files (VS Code is popular) | https://code.visualstudio.com |
| **A GitHub account** | Stores your code online | https://github.com |
| **A Vercel account** | Hosts your live site for free | https://vercel.com (sign up with GitHub) |

**Check that Node.js and Git installed correctly.** Open a terminal (Terminal on Mac, or Git Bash on Windows) and run:

```bash
node --version    # should print something like v20.x.x
git --version     # should print something like git version 2.x.x
```

If you see version numbers, you're good to go.

---

## 2. Run the website on your computer

"Running it locally" means viewing the site on your own machine before putting it online.

```bash
# 1. Go into the project folder
cd Website_Rohan

# 2. Install all the code libraries the project needs (one-time, takes a minute)
npm install

# 3. Start the site in development mode
npm run dev
```

Now open your web browser and go to **http://localhost:3000**. You'll see your portfolio. As you edit files and save, the browser updates automatically.

To stop the server, press **Ctrl + C** in the terminal.

**Other useful commands:**

```bash
npm run build   # builds the final, optimized version (also checks for errors)
npm start       # runs that optimized build locally
npm run lint    # checks your code for common mistakes
```

> 💡 Always run `npm run build` before deploying. If it finishes without errors, your site is safe to publish.

---

## 3. Project structure (what each folder does)

```
Website_Rohan/
├── app/                  # The pages and global settings
│   ├── layout.tsx        # Wraps every page — sets fonts, SEO tags, page title
│   ├── page.tsx          # The homepage — lists all the sections in order
│   ├── globals.css       # Global styles (colors, scrollbar, effects)
│   ├── sitemap.ts        # Auto-generates sitemap.xml (helps Google find you)
│   └── robots.ts         # Auto-generates robots.txt (tells search engines what to crawl)
│
├── components/           # The building blocks (each section of the page)
│   ├── Navbar.tsx        # Top navigation bar
│   ├── Hero.tsx          # The big intro section with your photo
│   ├── About.tsx         # About + skills
│   ├── TechStack.tsx     # Technology logos
│   ├── Experience.tsx    # Work history
│   ├── Projects.tsx      # Featured project
│   ├── Certifications.tsx# Certificates
│   ├── Contact.tsx       # Contact links
│   ├── Footer.tsx        # Bottom of the page
│   ├── Loader.tsx        # The loading animation shown on first visit
│   └── ui/               # Small reusable pieces (buttons, icons, animations)
│
├── hooks/                # Reusable animation logic
│   ├── useCountUp.ts     # The animated number counters
│   └── useTypewriter.ts  # The typing effect in the hero
│
├── lib/                  # ⭐ YOUR CONTENT LIVES HERE
│   ├── site.ts           # Your name, role, email, phone, links, resume, site URL
│   └── data.ts           # All the text: skills, experience, projects, certs
│
├── public/               # Files served directly (images, resume)
│   ├── profile.png       # Your photo
│   └── resume.pdf         # Your resume (downloadable)
│
├── package.json          # Lists the project's libraries and commands
├── tailwind.config.ts    # Theme colors, fonts, custom animations
└── next.config.js        # Next.js framework settings
```

**The two files you'll edit most are `lib/site.ts` and `lib/data.ts`.**

---

## 4. Customize it with your own details

You don't need to touch the design code — just edit these files.

### a) Your personal info → `lib/site.ts`

Open `lib/site.ts` and change the values inside the quotes:

```ts
name: "Rohan Desai",
role: "DevOps Engineer | Site Reliability Engineer",
email: "rohandesai216@gmail.com",
phone: "+91 8970143354",
url: "https://rohanpdesai.vercel.app",       // your live site address
resume: "/resume.pdf",                         // leave as-is (see below)
socials: {
  linkedin: "https://www.linkedin.com/in/rohan-desai-248592202/",
  github: "https://github.com/rohanpandurangdesai",
},
```

> 🔗 **Tip for the LinkedIn link:** open your LinkedIn profile, copy the address from your browser's address bar (it looks like `https://www.linkedin.com/in/your-name/`), and paste it here. Don't copy it from the "contact info" popup — that version sometimes doesn't work for visitors.

### b) All the text content → `lib/data.ts`

This file holds your skills, work experience, project details, and certifications. Change the text inside the quotes to match your background.

### c) Your photo → `public/profile.png`

Replace `public/profile.png` with your own photo. Keep the same filename (`profile.png`), or if you use a different name, update the `src` in `components/Hero.tsx`.

### d) Your resume → `public/resume.pdf`

Replace `public/resume.pdf` with your real resume. Keep the filename `resume.pdf`. The "Download Resume" button automatically links to it.

```bash
# Example: copy your resume into the project (Mac/Linux)
cp ~/Documents/MyResume.pdf public/resume.pdf
```

### e) Colors and theme → `tailwind.config.ts`

Want different accent colors? Edit the `brand` colors near the top of `tailwind.config.ts`.

**After any change**, check it locally with `npm run dev`, then build with `npm run build` to make sure nothing broke.

---

## 5. Save your changes with Git

Git takes "snapshots" (called *commits*) of your work. Do this after making changes:

```bash
git add .                              # stage all your changes
git commit -m "Describe what you changed"   # save a snapshot with a message
```

Example messages: `"Update resume"`, `"Add new project"`, `"Change email address"`.

---

## 6. Push your code to GitHub

"Pushing" uploads your commits to GitHub so they're backed up and ready to deploy.

**First time only** — connect your local project to your GitHub repository:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
```
*(This project uses `https://github.com/rohanpandurangdesai/Portfolio_Website.git`.)*

**Then push:**

```bash
git push origin main
```

You'll be asked to log in. GitHub no longer accepts your account password here — you need a **Personal Access Token (PAT)** as the password:

1. Go to **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**.
2. Click **Generate new token (classic)**, tick the **`repo`** checkbox, and generate it.
3. Copy the token and paste it when Git asks for your password.

> 🔒 **Security:** A token is like a password. Never share it or commit it into your code. If it ever gets exposed, delete it immediately from the same GitHub settings page and create a new one.

> 💡 Easier alternative: install the **GitHub CLI** (`gh`) from https://cli.github.com, run `gh auth login` once, and Git will handle logins for you automatically.

---

## 7. Put it live on the internet (Vercel)

Vercel hosts Next.js sites for free. The easiest way is through their website — **no commands needed**:

1. Go to **https://vercel.com/new** and sign in with your GitHub account.
2. Find **Portfolio_Website** in the list and click **Import**.
3. Vercel automatically detects it's a Next.js project — **don't change any settings**.
4. Click **Deploy** and wait 1–2 minutes.
5. You'll get a live web address like `https://portfolio-website-xxxx.vercel.app`. 🎉

**Prefer the command line?** You can also deploy with the Vercel CLI:

```bash
npm install -g vercel     # install the Vercel tool (one-time)
vercel login              # log in (opens your browser)
vercel --prod             # deploy the live/production version
```

---

## 8. Make the live site public

By default, Vercel may lock new sites behind a login screen (this is called **Deployment Protection**). If visitors see a Vercel login page instead of your portfolio, turn it off:

1. Open your project on **vercel.com**.
2. Go to **Settings → Deployment Protection**.
3. Set **Vercel Authentication** to **Disabled** (or "Standard Protection" off).
4. Save. Your site is now visible to everyone.

---

## 9. Give it a nicer web address (domain)

The default address (`portfolio-website-xxxx.vercel.app`) works but looks messy. You have two options:

### Option A — Free, cleaner Vercel address (recommended to start)

You can claim a nicer **`.vercel.app`** name for free (for example `rohanpdesai.vercel.app`):

1. On **vercel.com**, open your project → **Settings → Domains**.
2. Type the name you want, e.g. `rohanpdesai.vercel.app`, and click **Add**.
3. If it's available, it's yours instantly and free.

> ⚠️ Note: Only `.vercel.app` is free. **`.vercel.com` is NOT available** — that's Vercel's own company address, nobody can use it.

After claiming it, update the `url` in `lib/site.ts` to match, then commit and push (see [section 10](#10-auto-deploy-update-the-site-anytime)).

### Option B — A real custom domain like `yourname.com` (paid)

A `.com` (or `.in`, `.dev`, etc.) is **not free** — you buy it for roughly **$10–15 per year** from a registrar such as [Namecheap](https://www.namecheap.com), [Cloudflare](https://www.cloudflare.com), or [Porkbun](https://porkbun.com).

Once you've bought it:

1. On **vercel.com**, open your project → **Settings → Domains** → add your domain (e.g. `rohanpdesai.com`).
2. Vercel shows you the DNS record(s) to add. At your registrar, create:
   | Type | Name | Value |
   |------|------|-------|
   | `A` | `@` | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |
3. Wait a few minutes — Vercel verifies it and adds a free SSL certificate (the padlock 🔒) automatically.
4. Update `url` in `lib/site.ts` to your new domain, then commit and push.

---

## 10. Auto-deploy: update the site anytime

Once your GitHub repo is connected to Vercel, **every push automatically updates the live site** — no manual deploy needed. The full loop:

```bash
# 1. Make your edits in lib/site.ts, lib/data.ts, etc.

# 2. Preview locally
npm run dev

# 3. Make sure it builds cleanly
npm run build

# 4. Save and upload
git add .
git commit -m "Describe your change"
git push origin main
```

Within a minute or two, Vercel builds and publishes the new version automatically. You can watch progress on your Vercel dashboard.

---

## 11. Troubleshooting

**"My name / text looks black instead of white"**
The site is dark-themed and text is white in the code. If it looks wrong, it's almost always your **browser cache**. Hard-refresh with **Cmd + Shift + R** (Mac) or **Ctrl + Shift + R** (Windows), or open the site in a **private/incognito window**. Also check you don't have a dark-mode browser extension (like Dark Reader) inverting the colors.

**"My LinkedIn button says page not found"**
The website link is fine — LinkedIn hides profiles that aren't public. On LinkedIn: **Profile → Edit public profile & URL → turn on "Your profile's public visibility"**. Test the link in an incognito window to confirm strangers can see it.

**"`npm install` or `npm run build` fails"**
Delete the temporary files and try again:
```bash
rm -rf node_modules package-lock.json
npm install
```
Make sure your Node.js version is 18 or newer (`node --version`).

**"`git push` is rejected / permission denied"**
Your saved login is probably for the wrong GitHub account. Generate a fresh Personal Access Token (see [section 6](#6-push-your-code-to-github)) for the correct account, or use `gh auth login` with the GitHub CLI.

**"The live site shows a Vercel login screen"**
Deployment Protection is on — see [section 8](#8-make-the-live-site-public).

---

## 🛠️ Tech Stack

React · Next.js · TypeScript · Tailwind CSS · Framer Motion · react-icons — hosted on Vercel.

## 📄 License

Personal portfolio. Feel free to use it as a learning reference.
