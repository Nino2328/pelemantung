# Dusun Pelemantung Website - Deployment & Operations Guide

**Document Version**: 1.0  
**Last Updated**: Today  
**Status**: ✅ READY FOR DEPLOYMENT

---

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Deployment Options](#deployment-options)
3. [Environment Setup](#environment-setup)
4. [Deployment Steps](#deployment-steps)
5. [Post-Deployment Verification](#post-deployment-verification)
6. [Monitoring & Maintenance](#monitoring--maintenance)
7. [Troubleshooting](#troubleshooting)
8. [Rollback Procedures](#rollback-procedures)

---

## Pre-Deployment Checklist

### Build Validation ✅

- [x] `npm run lint` - No errors or warnings
- [x] `npm run build` - Successfully built in 1.35s
- [x] Production bundle created in `dist/` directory
- [x] All assets optimized (CSS: 42.67 kB, JS modules code-split)
- [x] No console errors in development build

### Code Quality ✅

- [x] Real household data integrated (589 jiwa, 208 KK)
- [x] All data arrays verified against source
- [x] CSS premium polish applied and verified
- [x] Responsive breakpoints tested (1100px, 900px, 640px, 480px)
- [x] No known bugs or issues

### Data Verification ✅

- [x] Total population: 589 (290M + 299F)
- [x] Households: 208 KK
- [x] Age distribution: 113+78+157+120+121 = 589 ✓
- [x] RTs: 4 (001, 002, 003, 004)

---

## Deployment Options

### Option 1: Vercel (Recommended for React/Vite)

**Pros**:

- Automatic deployments from Git
- Zero-config for Vite projects
- Global CDN
- Free tier with generous limits

**Steps**:

1. Push code to GitHub
2. Sign up at vercel.com
3. Import project from GitHub
4. Deploy automatically on push

### Option 2: Netlify

**Pros**:

- Simple drag-and-drop deployment
- Automatic HTTPS
- Environment variables support
- Free tier available

**Steps**:

1. Build locally: `npm run build`
2. Upload `dist/` folder to netlify.com
3. OR connect GitHub for auto-deployments

### Option 3: Traditional Server (VPS/Shared Hosting)

**Pros**:

- Full control
- Custom domain setup
- Potential cost savings long-term

**Requirements**:

- Node.js runtime (if using Node server)
- OR static file server (nginx, Apache)
- SSL certificate (Let's Encrypt)

### Option 4: AWS S3 + CloudFront

**Pros**:

- Scalable
- Global distribution
- Affordable
- Professional setup

**Requirements**:

- AWS account
- S3 bucket configuration
- CloudFront distribution setup

---

## Environment Setup

### Prerequisites

```bash
# Verify Node.js version (14+ required, 18+ recommended)
node --version  # Should be v18+

# Verify npm version
npm --version   # Should be v8+
```

### Local Setup for Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Expected output:
# ➜  Local:   http://localhost:5174/
# ➜  press h to show help
```

### Build for Production

```bash
# Run lint check first
npm run lint    # Should pass with no errors

# Build production bundle
npm run build   # Creates dist/ folder

# Verify dist folder exists
ls -la dist/    # Should see assets/, index.html, favicon.svg
```

---

## Deployment Steps

### Step 1: Prepare for Deployment

```bash
# 1. Ensure clean git state
git status

# 2. Create deployment branch (optional)
git checkout -b deployment

# 3. Verify latest code
git log --oneline -5
```

### Step 2: Build Production Assets

```bash
# From project root: c:\React\Pelemantung\pelemantung

# Install latest dependencies
npm install

# Run lint to catch any issues
npm run lint

# Build for production
npm run build

# Verify dist folder
ls dist/assets/  # Should contain ~17 files
```

### Step 3: Deployment via Vercel (Quickest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Project name: pelemantung
# - Directory to publish: ./dist
# - Build settings: Skip (already built)

# Get deployment URL from output
```

### Step 4: Deployment via Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist

# Verify deployment completed
```

### Step 5: Custom Domain Setup

**For Vercel**:

1. Go to Project Settings
2. Domain section
3. Add custom domain
4. Follow DNS setup instructions

**For Netlify**:

1. Go to Domain settings
2. Add custom domain
3. Update DNS records

**For Traditional Server**:

1. Update DNS A record to server IP
2. Configure web server (nginx/Apache)
3. Setup SSL certificate
4. Configure reverse proxy to serve dist/

---

## Post-Deployment Verification

### Immediate Checks (First 5 minutes)

```bash
# 1. Verify site is live
curl https://yourdomain.com

# 2. Check HTTP status
curl -I https://yourdomain.com
# Expected: 200 OK

# 3. Verify HTTPS works
# Visit https://yourdomain.com in browser

# 4. Check for redirect loops
# Ensure HTTP redirects to HTTPS properly
```

### Browser Testing Checklist

- [ ] Homepage loads completely
- [ ] Hero section displays background image
- [ ] Navigation menu works (desktop & mobile)
- [ ] All sections load with smooth scroll navigation
- [ ] Statistics display correct data (589 jiwa)
- [ ] Charts render properly
- [ ] Buttons are clickable and functional
- [ ] No console errors (F12 → Console tab)
- [ ] Responsive on mobile (DevTools → Device toolbar)
- [ ] Page load time is reasonable (<3 seconds)

### Performance Checks

```bash
# Check CSS file size
# Expected: ~42 KB (8.5 KB gzipped)

# Check JavaScript bundle
# Expected: Main ~216 KB, Statistics ~392 KB (lazy loaded)

# Total assets should be < 20 MB (hero image is large)
```

### Monitoring Setup

1. **Google Analytics** (Optional):
   - Add Google Analytics tracking code
   - Monitor visitor behavior
   - Track section popularity

2. **Uptime Monitoring**:
   - Use uptimerobot.com or similar
   - Set alerts for downtime

3. **Error Tracking**:
   - Consider Sentry.io for error tracking
   - Monitor console errors in production

---

## Monitoring & Maintenance

### Weekly Tasks

- [ ] Check website loads correctly
- [ ] Verify all data displays accurately
- [ ] Monitor analytics for unusual traffic
- [ ] Check for broken links

### Monthly Tasks

- [ ] Review error logs
- [ ] Update dependencies (npm update)
- [ ] Test all navigation paths
- [ ] Verify mobile responsiveness
- [ ] Check SSL certificate expiration

### Quarterly Tasks

- [ ] Performance audit
- [ ] Security scan
- [ ] Backup verification
- [ ] Update strategy review

### Annual Tasks

- [ ] Update household data from new KK registry
- [ ] Major version updates review
- [ ] Accessibility audit
- [ ] SEO review and optimization

---

## Troubleshooting

### Issue: Page Not Loading

**Symptoms**: Blank page or 404 error

**Solutions**:

```bash
# 1. Check if dist folder exists
ls -la dist/

# 2. Verify index.html is present
cat dist/index.html | head -10

# 3. Check file permissions (if on server)
chmod -R 755 dist/

# 4. Verify web server is serving static files correctly
# (Ask hosting provider)
```

### Issue: Styles Not Loading

**Symptoms**: Page loads but without CSS styling

**Solutions**:

```bash
# 1. Check CSS file hash in index.html
cat dist/index.html | grep -i css

# 2. Verify CSS file exists
ls -la dist/assets/index-*.css

# 3. Check web server MIME types for CSS
# (Server should serve .css as text/css)

# 4. Clear browser cache (Ctrl+Shift+Delete)
```

### Issue: Charts Not Displaying

**Symptoms**: Statistics section shows but charts are empty

**Solutions**:

1. Open browser DevTools (F12)
2. Check Console tab for JavaScript errors
3. Check Network tab for failed requests
4. Verify Recharts library loaded correctly
5. Check browser console for warnings

### Issue: Mobile Menu Not Working

**Symptoms**: Hamburger menu doesn't open on mobile

**Solutions**:

1. Clear browser cache
2. Test in incognito/private mode
3. Check browser console for JavaScript errors
4. Verify viewport meta tag in index.html
5. Test on different mobile device

### Issue: Slow Page Load

**Symptoms**: Page takes > 5 seconds to load

**Solutions**:

```bash
# 1. Check hero image size (known to be 17.9 MB)
# Consider converting to WebP format

# 2. Enable gzip compression on server
# (Most servers do this automatically)

# 3. Check if CDN is configured
# Use Vercel/Netlify for automatic CDN

# 4. Minify assets (npm run build does this)

# 5. Lazy load chart component
# (Already implemented in code)
```

---

## Rollback Procedures

### Quick Rollback (Last Hour)

If deployment causes critical issues:

**Vercel**:

1. Go to Deployments section
2. Find previous successful deployment
3. Click "Promote to Production"

**Netlify**:

1. Go to Deploys section
2. Find previous successful deploy
3. Click "Restore"

### Full Rollback (Previous Version)

```bash
# If deployed from Git:

# 1. Identify previous working commit
git log --oneline -10

# 2. Checkout previous version
git checkout [commit-hash]

# 3. Push to deploy
git push

# 4. Redeploy via Vercel/Netlify
# (Auto-deploys on push)
```

### Data Rollback

If data was corrupted:

```bash
# Statistics data is in src/components/Statistics.jsx
# Raw source is in parse_kk.py script output

# To restore:
# 1. Re-run: python parse_kk.py
# 2. Verify output in kk_stats.json
# 3. Update Statistics.jsx with correct values
# 4. Rebuild and redeploy
```

---

## Security Recommendations

### Before Going Live

- [ ] Remove debug console.log statements
- [ ] Update meta descriptions and keywords
- [ ] Configure HTTPS/SSL (automatic on Vercel/Netlify)
- [ ] Setup rate limiting (if using custom backend)
- [ ] Configure CORS headers (if needed)

### Ongoing Security

- [ ] Keep dependencies updated: `npm audit fix`
- [ ] Monitor for security vulnerabilities: `npm audit`
- [ ] Use strong hosting provider security
- [ ] Enable 2FA on hosting account
- [ ] Backup data regularly

### Privacy Considerations

The website displays:

- Aggregate population statistics (OK to share)
- Age distribution (OK to share)
- Organization structure (OK to share)
- Gallery images (verify permissions)

**Important**: Do NOT display individual household names or personal data

---

## Optimization Tips

### Current Performance Metrics

- CSS: 42.67 kB (8.52 kB gzipped) ✓
- Main JS: 216.58 kB (67.05 kB gzipped) ✓
- Statistics JS: 392.02 kB (111.68 kB gzipped) - lazy loaded ✓
- Hero Image: 17,952.68 kB ⚠️ (Consider WebP conversion)

### Recommended Optimizations

1. **Convert Hero Image to WebP**:

   ```bash
   # Install ImageMagick or use online converter
   convert hero.png -quality 90 hero.webp
   ```

2. **Enable Service Worker**:
   - Add offline capability
   - Cache static assets
   - Improve repeat visit performance

3. **Add DNS Prefetch**:

   ```html
   <link rel="dns-prefetch" href="//fonts.googleapis.com" />
   ```

4. **Implement Image Lazy Loading**:
   - Already done for React components via Suspense
   - Consider for gallery images

---

## Support & Contact

For deployment support:

1. Check Vercel/Netlify documentation
2. Review error logs in hosting provider dashboard
3. Contact hosting provider support
4. Check GitHub repository issues

---

## Deployment Checklist (Final)

Before clicking "Deploy":

**Code Quality**:

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] No known bugs

**Data Validation**:

- [ ] Real household data integrated
- [ ] Statistics match source document
- [ ] All sections tested

**Performance**:

- [ ] Page loads in < 5 seconds
- [ ] Charts render correctly
- [ ] Mobile responsive verified

**Security**:

- [ ] No debug code in production build
- [ ] HTTPS enabled
- [ ] No sensitive data exposed

**Deployment**:

- [ ] Hosting account ready
- [ ] Domain configured
- [ ] DNS records set
- [ ] SSL certificate ready

**Post-Launch**:

- [ ] Monitor uptime
- [ ] Check analytics
- [ ] Gather user feedback
- [ ] Plan maintenance schedule

---

**✅ ALL SYSTEMS GO FOR DEPLOYMENT**

Website is production-ready with real data, premium styling, and responsive design.

**Expected Timeline**:

- Deployment: 5-15 minutes
- Domain propagation: 24-48 hours
- Full optimization: 1 week monitoring

---

_For technical assistance, contact the development team._
