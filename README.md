# PICSTOL Website

A modern, minimal dark-themed website for PICSTOL VFX Studio featuring VFX, 3D Modeling, and Motion Graphics services.

## Features

- ✨ Modern, minimal dark design with #4031D4 primary color
- 📱 Mobile-first responsive design
- 🎨 Custom animations and transitions
- 🔄 Server-side includes (.shtml) for common components
- ⚡ Tailwind CSS for rapid styling
- 🎯 SEO-friendly structure
- ♿ Accessible markup

## Project Structure

```
picstol-website/
├── index.shtml           # Homepage
├── services.shtml        # Services page
├── portfolio.shtml       # Portfolio showcase
├── careers.shtml         # Careers/jobs page
├── inquiry.shtml         # Contact/inquiry form
├── css/
│   └── style.css         # Custom styles and animations
├── js/
│   └── main.js          # JavaScript functionality
├── assets/
│   ├── images/          # Image files (logos included)
│   │   ├── logo-white.svg
│   │   └── logo-dark.svg
│   └── videos/          # Video files (add your content here)
└── includes/
    ├── header.html      # Common header navigation
    └── footer.html      # Common footer
```

## Setup Instructions

### 1. Local Development

To test locally, you'll need a web server that supports Server Side Includes (SSI):

**Using Apache:**
1. Enable SSI module: `a2enmod include`
2. Configure .shtml handling in Apache config
3. Restart Apache

**Using nginx:**
1. Configure SSI in nginx.conf:
   ```nginx
   location / {
       ssi on;
       ssi_types text/html;
   }
   ```
2. Restart nginx

**Using Python (Quick Test):**
```bash
python -m http.server 8000
```
Note: Python's simple server doesn't support SSI, so includes won't work.

### 2. Deployment

#### Option A: Apache Server
1. Upload all files to your web root directory
2. Ensure Apache SSI is enabled
3. Configure `.htaccess` if needed:
```apache
AddType text/html .shtml
AddHandler server-parsed .shtml
Options +Includes
```

#### Option B: nginx Server
1. Upload all files to your web root
2. Configure nginx to handle SSI:
```nginx
server {
    location ~ \.shtml$ {
        ssi on;
        ssi_types text/html;
    }
}
```

#### Option C: Static Hosting (Netlify, Vercel, etc.)
For static hosting without SSI support:
1. Convert .shtml files to .html
2. Use a build process to inline the includes
3. Or manually copy header/footer into each page

### 3. Adding Content

#### Images/Videos
- Add images to `assets/images/`
- Add videos to `assets/videos/`
- Update placeholder divs with actual content:
  ```html
  <!-- Replace this -->
  <div class="img-placeholder w-full h-full"></div>
  
  <!-- With this -->
  <img src="assets/images/your-image.jpg" alt="Description" class="w-full h-full object-cover">
  ```

#### Update Contact Information
Edit `inquiry.shtml` and `includes/footer.html` with your actual:
- Email address
- Phone number
- Physical addresses
- Social media links

## Customization

### Colors
Primary color is defined in:
- `css/style.css` (CSS variables)
- Tailwind classes: `bg-[#4031D4]`, `text-[#4031D4]`, etc.

To change the primary color, find and replace `#4031D4` with your color.

### Typography
Current font: **Outfit** from Google Fonts

To change:
1. Update Google Fonts link in `<head>` of each page
2. Update `body { font-family: 'Your Font', sans-serif; }` in style block

### Animations
Custom animations are in `css/style.css`:
- `fadeInUp`, `fadeIn`, `slideInLeft`, `slideInRight`, `scaleIn`, `float`
- Delay classes: `.delay-100` through `.delay-700`

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Tips

1. **Optimize Images:**
   - Use WebP format with fallbacks
   - Compress images before upload
   - Use appropriate sizes for different viewports

2. **Lazy Loading:**
   - Images with `data-src` attribute will lazy load
   - Add `data-src` to images below the fold

3. **Minify Assets:**
   - Minify CSS and JS for production
   - Consider using a CDN for Tailwind CSS

## File Form Submissions

The contact form in `inquiry.shtml` currently uses JavaScript validation. To make it functional:

1. **Add Backend Processing:**
   - PHP: Add form action to a PHP script
   - Node.js: Set up an Express endpoint
   - Services: Use Formspree, Netlify Forms, or similar

2. **Example PHP Integration:**
```html
<form id="contact-form" action="process-form.php" method="POST">
```

Create `process-form.php`:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    // Process and send email
}
?>
```

## Security Considerations

1. Validate and sanitize all form inputs on the server
2. Implement CSRF protection for forms
3. Use HTTPS in production
4. Set appropriate security headers
5. Implement rate limiting on contact forms

## Maintenance

### Regular Updates:
- Update portfolio with new projects
- Add new job openings to careers page
- Keep service descriptions current
- Update team size/stats as needed

### Content Updates:
All text content is in the HTML files - no CMS required. Simply edit the .shtml files directly.

## Support

For issues or questions:
- Check browser console for errors
- Verify SSI is working (view source, includes should be rendered)
- Ensure all file paths are correct
- Test on different devices and browsers

## License

This website design is proprietary to PICSTOL.

---

**Built with ❤️ for PICSTOL VFX Studio**
