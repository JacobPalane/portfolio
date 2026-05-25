# Portfolio Website Setup & Development Guide

## 🎯 Project Overview

This is a professional portfolio website built with **Next.js** and **Tailwind CSS** showcasing:
- MSc Chemistry Research at University of the Free State
- Expertise in Rare Earth Elements (REEs) and Hydrometallurgy
- Analytical Chemistry & Laboratory Skills
- Python Data Analysis & Scientific Computing

## 📦 Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
- Site runs at: http://localhost:3000
- Hot reload enabled - changes appear instantly

### 3. Build Production Site
```bash
npm run build
```
- Creates optimized static site in `/out` directory
- Ready for GitHub Pages deployment

### 4. Deploy to GitHub Pages
The workflow is automated via GitHub Actions:
- Every push to `main` branch triggers automatic deployment
- Site published to: https://jacobpalane.github.io

## 📝 How to Update Content

### Update Home Page
**File**: `src/app/page.tsx`
- Hero section with your name and headline
- Feature highlights
- Call-to-action buttons

### Update About Section  
**File**: `src/app/about/page.tsx`
- Research background and journey
- Laboratory expertise
- Career goals and interests
- Quick statistics

### Update Research & Experience
**File**: `src/app/research/page.tsx`
- MSc research role details
- Research activities and focus
- Instrumentation experience
- Research impact

### Update Skills
**File**: `src/app/skills/page.tsx`
- Technical skills list (appears as badges)
- Tools and software proficiency
- Soft skills
- Instrumentation expertise breakdown

### Update Projects
**File**: `src/app/projects/page.tsx`
- Featured projects with descriptions
- Research highlights and publications
- GitHub links
- Skills demonstrated

### Update Navigation & Footer
**Files**: 
- `src/components/Navigation.tsx` - Top navigation menu
- `src/components/Footer.tsx` - Footer with contact links

Update social media URLs in Footer:
```typescript
// Update these links with your actual profiles
<a href="https://github.com/JacobPalane" ...>GitHub</a>
<a href="https://www.linkedin.com/in/jacob-palane-37b44316a/" ...>LinkedIn</a>
<a href="mailto:palanejacob@gmail.com" ...>Email</a>
```

## 🎨 Styling & Customization

### Colors
Edit `tailwind.config.ts` to change theme colors:
```typescript
colors: {
  primary: '#1a3a52',    // Main blue (headers, buttons)
  accent: '#0066cc',     // Bright blue (highlights)
  light: '#f5f7fa',      // Light gray (backgrounds)
}
```

### Fonts & Typography
- Add custom fonts in `src/app/layout.tsx`
- Modify text sizes in Tailwind classes (e.g., `text-3xl`)

### Global Styles
- Edit `src/app/globals.css` for custom CSS classes
- All components use Tailwind utilities

## 🌐 Deployment Checklist

- [ ] Content is accurate and up-to-date
- [ ] All links (GitHub, LinkedIn, Email) are correct
- [ ] Images/assets are optimized
- [ ] Tested locally with `npm run dev`
- [ ] No TypeScript errors: `npm run lint`
- [ ] GitHub Pages is enabled in repository settings
- [ ] Workflow file exists at `.github/workflows/deploy.yml`

## 📱 Testing

### Test locally
```bash
npm run dev
```
- Opens at http://localhost:3000
- Test all pages and links

### Test on mobile
- Use Chrome DevTools (F12) → Toggle device toolbar
- Test all responsive breakpoints

### Test production build
```bash
npm run build
npx http-server out
```

## 🔧 Common Updates

### Add a New Project
Edit `src/app/projects/page.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Brief description of what you did',
    tags: ['Python', 'Data Analysis'],
    link: 'https://github.com/yourproject',
  },
  // Add more projects here
]
```

### Update Skills
Edit `src/app/skills/page.tsx`:
```typescript
const technicalSkills = [
  'New Skill',
  'Another Skill',
  // etc...
]
```

### Add New Page
1. Create folder: `src/app/newpage/`
2. Create file: `src/app/newpage/page.tsx`
3. Add to navigation: `src/components/Navigation.tsx`

## 🚀 Git Workflow

```bash
# Make changes locally
npm run dev

# Test everything works
# Commit changes
git add .
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main

# GitHub Actions automatically deploys
# Site updates within 2-5 minutes
```

## 📊 Performance Tips

- Images should be optimized (use WebP format where possible)
- Keep bundle size small
- Test with Lighthouse: https://pagespeed.web.dev

## 🔗 Important Links

- **Portfolio**: https://jacobpalane.github.io
- **GitHub**: https://github.com/JacobPalane
- **LinkedIn**: https://www.linkedin.com/in/jacob-palane-37b44316a/
- **Email**: palanejacob@gmail.com

## 📚 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Test locally: `npm run dev`
3. ✅ Verify content accuracy
4. ✅ Push to GitHub: `git push origin main`
5. ✅ Monitor deployment (check GitHub Actions tab)
6. ✅ Visit your live site!

## ❓ Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### TypeScript errors
- Check file: `src/app/layout.tsx` for import issues
- Ensure all components are properly exported

### GitHub Pages not updating
- Check `.github/workflows/deploy.yml` exists
- Verify GitHub Pages is set to "GitHub Actions" in Settings
- Check "Actions" tab for workflow status

---

**Happy coding!** 🎉
