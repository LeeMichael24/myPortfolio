# Lee Michael Fuentes - Computer Engineer Portfolio

A modern, minimalist portfolio website built with Next.js, showcasing the professional experience, projects, and technical skills of Lee Michael Fuentes, Computer Engineer and Full Stack Developer.

## Features

- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎨 Clean, minimalist UI with Tailwind CSS
- 📧 Contact form
- 🔗 Social media links
- 📄 Professional experience showcase
- 💼 Project portfolio
- 🛠️ Technical skills display
- 🎓 Computer Engineering background highlight

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **TypeScript**: Full type safety
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd lee-michael-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the build settings from `netlify.toml`
3. The site will build and deploy automatically

### Manual Deployment

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. The built files will be in the `out` directory
3. Upload the `out` directory to your hosting provider

## Customization

### Content Updates

- Update personal information in each component file
- Modify the experience data in `components/experience.tsx`
- Update projects in `components/projects.tsx`
- Change skills in `components/skills.tsx`
- Update education and awards in `components/education.tsx`

### Styling

- Modify colors in `app/globals.css`
- Update Tailwind configuration in `tailwind.config.ts`
- Customize component styles in individual component files

### Adding New Sections

1. Create a new component in the `components` directory
2. Import and add it to `app/page.tsx`
3. Add navigation links in the header

## Project Structure

\`\`\`
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── about.tsx
│   ├── contact.tsx
│   ├── education.tsx
│   ├── experience.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── utils.ts
├── netlify.toml
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
\`\`\`

## Contact

- **Email**: leemichaeln24@gmail.com
- **Phone**: +503 6208-7916
- **Location**: Antiguo Cuscatlán, El Salvador

## License

This project is open source and available under the [MIT License](LICENSE).
\`\`\`

\`\`\`gitignore file=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
Thumbs.db

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt
dist

# Storybook build outputs
.out
.storybook-out

# Temporary folders
tmp/
temp/
