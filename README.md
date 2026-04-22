# Adam Shao Personal Portfolio

Premium personal branding website for 邵剑波 / Adam Shao, built with Next.js, React, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Local Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

For production metadata and social sharing, set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Editable Content

Most website copy and factual content lives in:

```text
lib/content.ts
```

Update this file to change:

- Hero copy
- About highlights
- Academic experience
- Competition experience
- Project experience
- Research interests
- Contact details

## Assets

```text
public/images/adam-shao-portrait.png
public/resume/adam-shao-resume.pdf
```

The resume PDF was used as the factual source for academic background, projects, honors, skills, and competition details. Do not add new achievements unless they are first verified and added to the resume/content source.

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  About.tsx
  Academic.tsx
  Competition.tsx
  Contact.tsx
  Footer.tsx
  Header.tsx
  Hero.tsx
  Projects.tsx
  Research.tsx
  Resume.tsx
  Reveal.tsx
  SectionHeader.tsx
lib/
  content.ts
public/
  images/
  resume/
docs/
  design-language.md
```

## Deployment

The project is ready for Vercel or any platform that supports Next.js.

For Vercel:

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Deploy.
