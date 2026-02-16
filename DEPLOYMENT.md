# Deployment Guide - forkvswall.xyz

## 🚀 Static Export Deployment

This project is configured for static export, making it easy to deploy to any static hosting service.

### Build for Production

```bash
npm run build
```

This will create an `out` directory with all static files.

### Deployment Options

#### 1. Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

#### 2. Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=out
```

Or drag and drop the `out` folder to Netlify's web interface.

#### 3. GitHub Pages

1. Build the project: `npm run build`
2. Push the `out` directory to your `gh-pages` branch
3. Enable GitHub Pages in repository settings

#### 4. Cloudflare Pages

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Deploy

#### 5. Any Static Host

Simply upload the contents of the `out` directory to your hosting provider.

### Custom Domain Setup

1. **DNS Configuration** for `forkvswall.xyz`:
   - Add an A record pointing to your hosting provider's IP
   - Or add a CNAME record pointing to your hosting provider's domain

2. **SSL Certificate**:
   - Most modern hosting providers (Vercel, Netlify, Cloudflare) provide free SSL automatically

### Environment Variables

This project doesn't require any environment variables as it's purely static.

### Performance Tips

- The site is already optimized with:
  - Static export
  - Tailwind CSS purging
  - Next.js image optimization (unoptimized for static export)
  - Minimal JavaScript bundle

### Testing Production Build Locally

```bash
# Build
npm run build

# Serve the out directory
npx serve out

# Or use any static server
python3 -m http.server 8000 -d out
```

## 📊 Build Output

Expected build size:
- Total: ~500KB (including images)
- JavaScript: ~150KB
- CSS: ~10KB
- Images: ~150KB

## 🔧 Troubleshooting

### Images not loading
- Make sure `fork-logo.png` is in the `public` directory
- Check that `next.config.js` has `images.unoptimized: true`

### 404 on routes
- Ensure `trailingSlash: true` is set in `next.config.js`
- Configure your hosting provider to serve `index.html` for all routes

### Build fails
- Clear `.next` directory: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Try again: `npm run build`

## 📝 Notes

- This is a single-page application (SPA)
- All content is static HTML/CSS/JS
- No server-side rendering required
- No API routes or backend needed
- Perfect for CDN distribution

---

**Domain**: forkvswall.xyz  
**Built with**: Next.js 16 + TypeScript + Tailwind CSS
