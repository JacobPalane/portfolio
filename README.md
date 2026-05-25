# Jacob Palane - Portfolio Website

Professional portfolio website for **Jacob Bolai Palane**, MSc Chemistry Researcher specializing in Rare Earth Elements, Hydrometallurgy, and Analytical Chemistry.

## 🌐 Live Site

The portfolio is deployed on GitHub Pages: [jacobpalane.github.io](https://jacobpalane.github.io)

## 📋 Features

- **Modern Next.js Framework** - Fast, SEO-friendly static site generation
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Professional Layout** - Based on industry-standard portfolio design
- **Multiple Sections**:
  - Home/Hero section with call-to-action
  - About page with research background
  - Research & Experience details
  - Technical Skills showcase
  - Featured Projects & Publications
  - Contact information

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/JacobPalane/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site locally.

### Build for Production

```bash
# Build static site
npm run build

# The output goes to /out directory
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── about/page.tsx      # About page
│   │   ├── research/page.tsx   # Research & Experience
│   │   ├── skills/page.tsx     # Technical skills
│   │   └── projects/page.tsx   # Featured projects
│   └── components/
│       ├── Navigation.tsx      # Navigation bar
│       └── Footer.tsx          # Footer component
├── public/                     # Static assets
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS config
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies
```

## 🎨 Customization

### Colors
Edit the theme colors in `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#1a3a52',   // Main color
      accent: '#0066cc',    // Accent color
      light: '#f5f7fa',     // Light background
    },
  },
}
```

### Content
Update content in individual page files:
- **Home**: `src/app/page.tsx`
- **About**: `src/app/about/page.tsx`
- **Research**: `src/app/research/page.tsx`
- **Skills**: `src/app/skills/page.tsx`
- **Projects**: `src/app/projects/page.tsx`

### Contact Links
Update your contact information in:
- `src/components/Footer.tsx` - Social links
- `src/app/page.tsx` - Hero section links

## 🚢 Deployment to GitHub Pages

This portfolio is configured for automatic deployment via GitHub Actions.

### Setup Instructions

1. **Ensure GitHub Pages is enabled**:
   - Go to repository Settings → Pages
   - Set "Source" to "GitHub Actions"

2. **Automatic Deployment**:
   - Every push to `main` branch triggers automatic build and deployment
   - Site is published to `https://github.com/JacobPalane`

3. **Manual Build & Deploy**:
```bash
npm run build  # Creates static files in /out
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🔍 SEO

The site includes:
- Meta tags for description and keywords
- Open Graph tags (can be enhanced)
- Semantic HTML structure
- Mobile-friendly design
- Fast page load times

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **UI Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📝 Content Sections

### Professional Summary
- Headline: "MSc Chemistry Researcher | Rare Earth Elements | Hydrometallurgy"
- Expertise in: REE recovery, biomining, analytical chemistry, Python data analysis

### Research Focus
- Hydrometallurgical process optimization
- Rare Earth Element recovery from mine tailings
- Solvent extraction and selective precipitation
- Analytical characterization

### Technical Skills
- Analytical Instrumentation: ICP-OES, XRD, SEM-EDS, UV-Vis, FTIR, TGA/DSC
- Laboratory Methods: Acid leaching, solvent extraction, sample preparation
- Programming: Python, Jupyter Notebook
- Data Analysis: Statistical modeling, visualization

### Projects
- REE recovery process optimization
- Analytical data visualization dashboards
- Solvent extraction modeling
- Laboratory data management systems

## 🤝 Contributing

To update content or make improvements:
1. Edit relevant files
2. Test locally with `npm run dev`
3. Push changes to GitHub
4. GitHub Actions will automatically deploy

## 📞 Contact

- **Email**: palanejacob@gmail.com
- **LinkedIn**: [Jacob Palane](https://www.linkedin.com/in/jacob-palane-37b44316a/)
- **GitHub**: [JacobPalane](https://github.com/JacobPalane)

## 📄 License

This portfolio website is personal and proprietary. The design and code are available for reference, but content should not be reproduced without permission.

---

**Last Updated**: May 2026