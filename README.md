# Mohammed Zaki Bhojani | Portfolio

Source code for my personal portfolio: **https://mzb2599.github.io/myportfolio/**

I'm a full-stack engineer (React, TypeScript, Node.js) with 4+ years of experience building data-heavy web apps and LLM-powered tools. This site collects my projects, experience and writing in one place.

<!-- TODO: add a screenshot. Save it as public/screenshot.png (1200x630 works well) and keep the line below. -->
![Portfolio preview](public/screenshot.png)

## What's on the site

- **Hero and quick links:** who I am, what I build, and direct links to my resume, email and LinkedIn
- **Projects:** short case studies covering the problem, my approach and the result
- **Experience:** roles and measurable outcomes
- **Skills, certifications and awards**
- **Writing:** links to my articles on [Medium](https://medium.com/@mzaki2599)

<!-- TODO: edit this list so it matches the sections that actually exist on the live site. -->

## Featured projects

| Project | What it does | Stack |
|---|---|---|
| **Document Intelligence Dashboard** | Upload documents and ask questions in plain English. Extracts structured insights with LLMs and a chat interface. | React, Azure, LLM APIs |
| **AI Agent Studio** | Multi-agent system that automates document analysis, with specialised agents coordinating over REST APIs. | LangChain, Python, REST |
| **Customer Insights Dashboard** | Interactive dashboard with filtering, credit lock, reporting and email notifications. | React, Node.js, Express, MongoDB |
| **Nahjul Balagha AI App** | Summarises sermons using NLP and generative AI. | React, TypeScript, GenAI |

<!-- TODO: link each project to its repo or live demo, e.g. [Demo](...) · [Code](...) -->
<!-- TODO: add one result per project (users, time saved, accuracy) where you can defend the number. -->

## Tech stack

**This site:** React, Vite, Tailwind CSS, ESLint, deployed with GitHub Actions to GitHub Pages
<!-- TODO: confirm TypeScript is used in src/ and add it here if so. -->

**What I work with day to day**

| Area | Tools |
|---|---|
| Frontend | React, TypeScript, HTML5, CSS3, Tailwind, Storybook, React Testing Library |
| Backend | Node.js, Express, REST APIs, Microservices, MongoDB, PostgreSQL, Python |
| AI | Generative AI, LangChain, Prompt Engineering, Computer Vision |
| Cloud and DevOps | Azure, AWS (EC2, S3, Lambda), Azure Pipelines, GitHub Actions |
| Testing | Playwright, Jest, React Testing Library |

## Run it locally

Requires Node.js 18 or later.

```bash
git clone https://github.com/mzb2599/myportfolio.git
cd myportfolio
npm install
npm run dev
```

Vite serves the site at `http://localhost:5173`. Because the site is hosted under `/myportfolio/`, make sure `base: '/myportfolio/'` is set in `vite.config.js`.

Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Deployment

Pushes to `master` trigger the workflow in `.github/workflows/`, which builds the site and publishes it to GitHub Pages.

## Project structure

```
├── .github/workflows/   # CI/CD for GitHub Pages
├── public/              # static assets (images, resume PDF)
├── src/                 # components, sections, styles
├── index.html           # entry HTML (meta tags, Open Graph)
├── tailwind.config.ts
└── vite.config.js
```

## Contact

I'm open to full-stack, frontend and AI-focused roles at product teams and startups.

- Email: [mohammedzakibhojani@gmail.com](mailto:mohammedzakibhojani@gmail.com)
- LinkedIn: [linkedin.com/in/mzakibhojani](https://www.linkedin.com/in/mzakibhojani)
- GitHub: [github.com/mzb2599](https://github.com/mzb2599)
- Medium: [medium.com/@mzaki2599](https://medium.com/@mzaki2599)
- Location: Pune, India
