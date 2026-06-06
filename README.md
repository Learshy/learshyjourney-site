# learshyjourney-site

Premium landing page for the Telegram channel [@learshyjourney](https://t.me/learshyjourney).

Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The site is static-export compatible and ready for GitHub Pages deployment.

## Features

- Dark futuristic landing page for crypto, AI, and tools content
- Sticky navbar with active section indicator
- Smooth scroll reveal animations
- Animated hero, background grid, subtle glow, and light glassmorphism
- Telegram-style content preview
- Responsive mobile-first layout
- SEO metadata, OpenGraph image, robots, and sitemap
- GitHub Actions workflow for automatic GitHub Pages deploy

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a local HTTPS preview:

```bash
mkdir -p certificates
openssl req -x509 -newkey rsa:2048 -sha256 -days 365 -nodes \
  -keyout certificates/localhost-key.pem \
  -out certificates/localhost.pem \
  -subj "/CN=localhost" \
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1,IP:0.0.0.0,IP:::1"
npm run dev:https
```

Open `https://localhost:3000`. The browser may still ask to trust the local development certificate. Production GitHub Pages uses real HTTPS automatically.

## Production Build

```bash
npm run build
```

For GitHub Pages static export with repository base path:

```bash
npm run deploy
```

The exported site is generated in `out/`.

## GitHub Pages Deployment

The workflow lives at `.github/workflows/deploy.yml`.

1. Push this folder to a GitHub repository.
2. In GitHub, open `Settings > Pages`.
3. Set the source to `GitHub Actions`.
4. Push to the `main` branch.

The workflow builds the static site and deploys it over HTTPS with GitHub Pages.

## Editing Content

Main content and links are centralized in:

```txt
data/site.ts
```

Main landing page sections live in:

```txt
app/page.tsx
```
