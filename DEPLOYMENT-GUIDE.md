# PICSTOL Website - Quick Deployment Guide

## 📦 Package Contents

Your website includes:
- 5 pages (Home, Services, Portfolio, Careers, Inquiry)
- Mobile-first responsive design with Tailwind CSS
- Custom animations and dark theme (#4031D4 primary color)
- Server-side includes for header/footer
- SEO-friendly structure

## 🚀 Quick Start (3 Steps)

### 1. Upload Files
Upload the entire `picstol-website` folder to your web server.

### 2. Configure Server
**Apache:** SSI is configured via .htaccess (already included)
**nginx:** Add this to your server block:
```nginx
location ~ \.shtml$ {
    ssi on;
    ssi_types text/html;
}
```

### 3. Add Your Content
- Replace placeholder images in `assets/images/`
- Add videos to `assets/videos/`
- Update contact info in `inquiry.shtml` and footer

## 📝 Essential Updates Before Going Live

### Contact Information
Update in these files:
- `inquiry.shtml` - Email, phone, addresses
- `includes/footer.html` - Footer contact details

### Add Real Content
Replace these placeholders:
```html
<!-- Current placeholder -->
<div class="img-placeholder w-full h-full"></div>

<!-- Replace with -->
<img src="assets/images/your-image.jpg" alt="Description" class="w-full h-full object-cover">
```

### Enable Contact Form
The form needs backend processing. Options:
1. **PHP** - Create `process-form.php`
2. **Formspree** - Add action URL to form
3. **Netlify Forms** - Add `data-netlify="true"` attribute

## 🌐 Hosting Options

### Traditional Hosting (cPanel, Apache)
1. Upload via FTP/SFTP
2. Point domain to folder
3. SSI works automatically with .htaccess

### nginx VPS
1. Upload to `/var/www/your-domain/`
2. Configure nginx (see above)
3. Restart nginx: `sudo systemctl restart nginx`

### Static Hosting (Netlify, Vercel)
**Note:** These don't support .shtml by default
1. Rename `.shtml` → `.html`
2. Manually copy header/footer into each page
3. Deploy normally

## ✅ Testing Checklist

- [ ] All pages load correctly
- [ ] Header/footer appear (SSI working)
- [ ] Mobile responsive on all devices
- [ ] Forms validate properly
- [ ] Contact information is correct
- [ ] Images load (no 404 errors)
- [ ] Links work (internal navigation)

## 🎨 Customization

### Change Colors
Find/replace `#4031D4` with your color in:
- `css/style.css`
- All `.shtml` files (Tailwind classes)

### Change Font
Update in each page's `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

And in style block:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

## 📊 Performance Tips

1. **Compress Images**
   - Use TinyPNG or similar
   - Target: <200KB per image

2. **Enable Caching**
   - Already configured in .htaccess
   - Test with PageSpeed Insights

3. **Use CDN** (Optional)
   - CloudFlare (free)
   - For faster global delivery

## 🔒 Security

Before going live:
1. Change any default passwords
2. Enable HTTPS (free via Let's Encrypt)
3. Update .htaccess security headers
4. Add rate limiting to contact form
5. Implement SPAM protection (reCAPTCHA)

## 📞 Support Resources

**Server Issues:**
- Apache: Check error logs in cPanel
- nginx: `sudo tail -f /var/log/nginx/error.log`

**Browser Issues:**
- Open Developer Console (F12)
- Check for JavaScript errors
- Verify file paths are correct

## 🎯 Next Steps

1. ✅ Deploy to staging environment
2. ✅ Test all functionality
3. ✅ Add real content (images, videos, text)
4. ✅ Configure contact form backend
5. ✅ Test on multiple devices
6. ✅ Deploy to production
7. ✅ Submit to search engines

## 📱 Mobile Testing

Test on:
- iOS Safari (iPhone)
- Chrome Android
- Various screen sizes (use Chrome DevTools)

## 🎬 Adding Videos

Hero section video example:
```html
<div class="hero-video-container">
  <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
    <source src="assets/videos/hero-video.mp4" type="video/mp4">
  </video>
</div>
```

## ⚡ Performance Targets

Aim for:
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s

Test with: [PageSpeed Insights](https://pagespeed.web.dev/)

---

Need help? Check the full README.md for detailed documentation.

**Ready to launch! 🚀**
