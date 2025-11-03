# GlowEdge Shopify Theme - Complete Documentation

## 📚 Table of Contents
1. [Theme Overview](#theme-overview)
2. [Installation Guide](#installation-guide)
3. [Theme Settings](#theme-settings)
4. [Sections Guide](#sections-guide)
5. [Customization](#customization)
6. [App Integration](#app-integration)
7. [SEO & Performance](#seo--performance)
8. [Troubleshooting](#troubleshooting)
9. [Advanced Features](#advanced-features)

---

## Theme Overview

**GlowEdge** is a highly customizable, performance-optimized Shopify theme built with Online Store 2.0 features. It offers:

- ✨ **Visual Effects**: Mouse-follow glows, animated gradients, parallax scrolling
- 🎨 **4 Built-in Presets**: Minimalist, Bold, Elegant, Vibrant
- 🧩 **Modular Sections**: Drag-and-drop customization
- 🚀 **Performance Optimized**: Lazy loading, minified assets, fast load times
- ♿ **Accessibility**: WCAG compliant, keyboard navigation
- 📱 **Fully Responsive**: Mobile-first design
- 🔌 **App Ready**: Compatible with popular Shopify apps

---

## Installation Guide

### Method 1: Shopify Admin Upload

1. **Download the theme**:
   ```bash
   cd glow-edge-shopify
   zip -r glow-edge-theme.zip .
   ```

2. **Upload to Shopify**:
   - Go to **Online Store** → **Themes**
   - Click **Add theme** → **Upload zip file**
   - Select `glow-edge-theme.zip`
   - Click **Publish** when ready

### Method 2: Shopify CLI (Recommended)

1. **Install Shopify CLI**:
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Connect and push**:
   ```bash
   cd glow-edge-shopify
   shopify theme dev --store your-store.myshopify.com
   shopify theme push
   ```

---

## Theme Settings

Access theme settings via **Online Store** → **Themes** → **Customize**.

### Color Settings

| Setting | Purpose | Default |
|---------|---------|---------|
| Primary Color | Main brand color | #00e5ff |
| Secondary Color | Gradient color | #bf00ff |
| Accent Color | Special highlights | #ff00bf |
| Background Color | Page background | #000000 |
| Text Color | Main text | #ffffff |

**Pro Tip**: Use the color picker to match your brand. Changes apply instantly.

### Typography Settings

| Setting | Options | Default |
|---------|---------|---------|
| Heading Font | 100+ Google Fonts | Assistant |
| Body Font | 100+ Google Fonts | Assistant |
| Base Font Size | 14-20px | 16px |
| Heading Scale | 100-200% | 120% |
| Font Weight | Light to Extra Bold | Bold (700) |

**Best Practice**: Choose 2 fonts max - one for headings, one for body.

### Layout Settings

- **Container Max Width**: 1000-1600px (default: 1280px)
- **Section Spacing**: 40-160px (mobile/desktop)
- **Grid Gap**: 16-64px (default: 32px)
- **Product Grid Layout**: Grid, Masonry, or List view

### Visual Effects

#### Animations
- **Enable Animations**: Global toggle
- **Animation Speed**: 50-200% (default: 100%)
- **Scroll Animations**: Fade/slide on scroll

#### Glow Effects
- **Mouse Glow**: Interactive cursor follower
- **Glow Intensity**: 0-100% (default: 60%)
- **Glow Size**: 400-1200px (default: 800px)

#### Special Effects
- **Parallax Scrolling**: 3D depth effect
- **Gradient Animation**: Smooth color transitions
- **Glass Morphism**: Frosted glass cards
- **Hover Effects**: Product zoom/lift effects

**Performance Note**: Disable effects on slower devices.

---

## Sections Guide

### Available Sections

| Section | Purpose | Key Features |
|---------|---------|--------------|
| **Header** | Navigation bar | Sticky, transparent, mega menu |
| **Hero** | Homepage banner | Video support, animated text, CTAs |
| **Features** | Product highlights | Icon blocks, colored glows |
| **Product Grid** | Product display | Filterable, lazy loading, 2-4 columns |
| **Image with Text** | Content block | Side-by-side, feature lists |
| **Testimonials** | Social proof | Star ratings, customer photos |
| **FAQ** | Q&A accordion | Collapsible answers, search |
| **Collection List** | Category showcase | Image cards, product counts |
| **Newsletter** | Email signup | Split/centered layouts, validation |
| **Video** | Media embedding | YouTube, Vimeo, self-hosted |
| **Footer** | Site footer | Links, social, newsletter |

### Section Examples

#### Hero Section

**Settings**:
- Subtitle, Title, Model, Description
- Primary & Secondary buttons
- Hero video or image
- Background animations

**Best Practices**:
- Use high-quality 1920x1080px videos (under 10MB)
- Keep titles under 5 words
- Use clear CTAs ("Shop Now", "Learn More")

#### Product Grid

**Settings**:
- Collection selector
- Products per row (2-4)
- Number of products (3-12)
- Show/hide descriptions

**Customization**:
```liquid
{% comment %}
  Edit sections/product-grid.liquid
  Change line 19 to adjust product limit:
{% endcomment %}
{% for product in products_to_display limit: 12 %}
```

#### Testimonials

**Block Settings**:
- Quote text
- Star rating (show/hide)
- Author name, title, image
- Up to 12 testimonials

**Pro Tip**: Use real customer photos for authenticity.

---

## Customization

### Theme Presets

Choose from 4 pre-configured styles:

#### 1. Minimalist
- White/black color scheme
- Clean sans-serif fonts
- No glow effects
- Square buttons

**Use Case**: Professional/corporate stores

#### 2. Bold
- Vibrant red/orange/yellow
- Heavy fonts (Montserrat)
- Maximum glow intensity
- Pill-shaped buttons

**Use Case**: Youth-oriented, energetic brands

#### 3. Elegant
- Gold accents on dark background
- Serif headings (Playfair Display)
- Subtle glows
- Glass morphism enabled

**Use Case**: Luxury, high-end products

#### 4. Vibrant (Default)
- Cyan/purple/pink gradients
- Modern fonts
- Medium glow intensity
- Balanced animations

**Use Case**: Tech, electronics, modern brands

### Custom CSS

Add custom styles in **Theme Settings** → **Advanced** → **Custom CSS**:

```css
/* Example: Change button hover color */
.btn-primary:hover {
  background: linear-gradient(135deg, #ff0055, #ff6b00);
  box-shadow: 0 0 30px rgba(255, 0, 85, 0.8);
}

/* Example: Custom heading gradient */
h1, h2 {
  background: linear-gradient(90deg, #gold, #silver);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Custom JavaScript

Add interactivity in **Theme Settings** → **Advanced** → **Custom JavaScript**:

```javascript
// Example: Add custom event tracking
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Primary button clicked');
    // Add analytics code here
  });
});
```

### Metafields

Use metafields for custom product data:

1. **Create metafield**: Admin → Settings → Custom data
2. **Add to products**: Products → [Product] → Metafields
3. **Display in theme**:

```liquid
{% if product.metafields.custom.warranty %}
  <p class="warranty">{{ product.metafields.custom.warranty }}</p>
{% endif %}
```

**Common Metafields**:
- Product specs (size, weight, material)
- Badges (New, Sale, Limited)
- Custom icons/images
- Additional descriptions

---

## App Integration

### Recommended Apps

| App | Purpose | Integration |
|-----|---------|-------------|
| **Judge.me** | Product reviews | Auto-integrates |
| **Klaviyo** | Email marketing | Add embed code |
| **Yotpo** | UGC & reviews | Theme blocks |
| **ReCharge** | Subscriptions | Compatible |
| **Bold Subscriptions** | Recurring orders | Theme support |
| **Loox** | Photo reviews | Widget support |

### Integration Steps

#### Judge.me Reviews

1. Install from Shopify App Store
2. Go to **Theme Editor** → **Product Page**
3. Add block: **Apps** → **Judge.me Reviews**
4. Position below product description

#### Klaviyo Email

1. Install Klaviyo app
2. Get embed code from Klaviyo dashboard
3. Paste in **Newsletter Section** → **Form Code**
4. Style to match theme

#### Custom App Blocks

Add app placeholders:

```liquid
{% comment %} In sections/product.liquid {% endcomment %}
<div class="app-block-container">
  {% for block in section.blocks %}
    {% case block.type %}
      {% when 'app' %}
        {% render block %}
    {% endcase %}
  {% endfor %}
</div>
```

---

## SEO & Performance

### Built-in SEO Features

✅ **Schema Markup**: Automatic structured data
- Organization schema
- Breadcrumb navigation
- Product schema (reviews, price, availability)

✅ **Meta Tags**: Open Graph & Twitter Cards
- Auto-generated from product/page data
- Social sharing optimization

✅ **Semantic HTML**: Proper heading hierarchy

### Performance Optimizations

| Feature | Impact | Status |
|---------|--------|--------|
| Lazy Loading | Faster initial load | ✅ Enabled |
| Image Optimization | Smaller file sizes | ✅ Shopify CDN |
| Minified CSS/JS | Reduced bandwidth | ✅ Auto |
| Deferred JavaScript | Non-blocking | ✅ Enabled |
| Preconnect DNS | Faster fonts | ✅ Enabled |

### Lighthouse Scores

Target scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

**Tips to improve**:
- Compress images to WebP
- Use 1024x1024px max for products
- Enable lazy loading
- Limit video file sizes to 10MB

### Image Best Practices

| Type | Size | Format | Compression |
|------|------|--------|-------------|
| Hero | 1920x1080px | WebP/JPG | 80% quality |
| Products | 800x800px | WebP | 85% quality |
| Thumbnails | 300x300px | WebP | 80% quality |
| Logos | 300x150px | PNG | Lossless |

**Tools**:
- [TinyPNG](https://tinypng.com/) - Compression
- [Squoosh](https://squoosh.app/) - WebP conversion

---

## Troubleshooting

### Common Issues

#### Glows Not Showing

**Symptoms**: Mouse glow effect not visible

**Solutions**:
1. Check `mouse-glow.js` is loading (Console → Network tab)
2. Verify section has `data-mouse-glow` attribute
3. Increase glow intensity in Theme Settings
4. Check browser compatibility (requires modern browser)

#### Animations Lag

**Symptoms**: Choppy animations, slow scrolling

**Solutions**:
1. Reduce animation speed to 80%
2. Disable parallax on mobile
3. Lower glow size to 600px
4. Check device GPU acceleration

#### Products Not Displaying

**Symptoms**: Empty product grid

**Solutions**:
1. Ensure products published to "Online Store" sales channel
2. Check collection is not empty
3. Verify collection selected in section settings
4. Clear theme cache (Customize → Actions → Clear cache)

#### Header Overlaps Content

**Symptoms**: Sticky header covers page content

**Solutions**:
```css
/* Add to Custom CSS */
body {
  padding-top: 80px; /* Adjust to header height */
}
```

#### Slow Page Load

**Symptoms**: Long wait for page display

**Solutions**:
1. Optimize images (compress to WebP)
2. Limit products per page to 12
3. Remove unused apps
4. Enable lazy loading
5. Audit with Lighthouse

### Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| IE 11 | - | ❌ No |

**Fallbacks**: Theme gracefully degrades on older browsers (no glows/animations).

---

## Advanced Features

### Dark Mode Toggle

Add custom dark mode switch:

```javascript
// In Custom JavaScript
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', 
    document.body.classList.contains('light-mode') ? 'light' : 'dark'
  );
}

// Check preference on load
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
}
```

```css
/* In Custom CSS */
body.light-mode {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-primary: #0066cc;
}
```

### Custom Loading Animation

```liquid
{% comment %} In theme.liquid before </body> {% endcomment %}
<div class="page-loader" id="pageLoader">
  <div class="loader-animation"></div>
</div>

<script>
  window.addEventListener('load', () => {
    document.getElementById('pageLoader').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('pageLoader').style.display = 'none';
    }, 300);
  });
</script>

<style>
  .page-loader {
    position: fixed;
    inset: 0;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    transition: opacity 0.3s;
  }

  .loader-animation {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(0, 229, 255, 0.3);
    border-top-color: #00e5ff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
```

### Conditional Content

Show/hide based on customer tags:

```liquid
{% if customer.tags contains 'VIP' %}
  <div class="vip-banner">
    Exclusive VIP Offer: 20% off your order!
  </div>
{% endif %}
```

### Multi-Currency

Enable Shopify Payments multi-currency:

1. **Setup**: Admin → Settings → Payments → Manage
2. **Display**: Theme automatically shows selected currency
3. **Converter**: Use app like "BEST Currency Converter"

### Multi-Language

Use Shopify's native translation:

1. **Enable**: Admin → Settings → Languages
2. **Translate**: Online Store → Themes → Actions → Edit languages
3. **Display**: Language picker in header (optional app)

---

## Support & Resources

### Documentation
- **This Guide**: Complete theme documentation
- **Shopify Docs**: https://help.shopify.com
- **Liquid Reference**: https://shopify.dev/docs/themes/liquid

### Community
- **Discord**: [Join our community](#)
- **Support Email**: support@rimfya.com
- **Updates**: Follow @rimfya on social media

### Changelog

**v2.0.0** (Current)
- Added 4 theme presets
- 10+ new customizable sections
- Enhanced SEO schema
- Performance improvements
- Accessibility upgrades

**v1.0.0**
- Initial release
- Basic sections
- Visual effects

---

## Quick Reference

### Keyboard Shortcuts (Theme Editor)
- `Cmd/Ctrl + S`: Save changes
- `Cmd/Ctrl + Z`: Undo
- `Cmd/Ctrl + Shift + Z`: Redo
- `Esc`: Close modals

### Liquid Filters
- `{{ product.price | money }}` - Format currency
- `{{ image | img_url: '300x300' }}` - Resize image
- `{{ string | truncate: 100 }}` - Limit characters
- `{{ date | date: "%B %d, %Y" }}` - Format date

### Color Codes
- Primary: `#00e5ff` (Cyan)
- Secondary: `#bf00ff` (Purple)
- Accent: `#ff00bf` (Pink)
- Background: `#000000` (Black)

---

**© 2025 RIMFYA. All rights reserved.**

*Theme Version 2.0.0 | Last Updated: 2025*
