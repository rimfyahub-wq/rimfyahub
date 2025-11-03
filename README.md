# GlowEdge - Premium Shopify Theme v2.0

<div align="center">

![GlowEdge Theme](https://img.shields.io/badge/Version-2.0.0-00e5ff?style=for-the-badge)
![Shopify](https://img.shields.io/badge/Shopify-Online%20Store%202.0-96bf48?style=for-the-badge&logo=shopify)
![License](https://img.shields.io/badge/License-Proprietary-bf00ff?style=for-the-badge)

**A highly customizable, performance-optimized Shopify theme with stunning visual effects**

[Features](#-features) • [Installation](#-installation) • [Documentation](#-documentation) • [Support](#-support)

</div>

---

## ✨ Features

### 🎨 **Highly Customizable**
- **4 Built-in Presets**: Minimalist, Bold, Elegant, Vibrant
- **150+ Theme Settings**: Colors, typography, layouts, effects
- **Drag & Drop Sections**: Full Online Store 2.0 support
- **Custom CSS/JS**: Advanced customization without code conflicts

### 🚀 **Performance Optimized**
- **Lazy Loading**: Images load as you scroll
- **Minified Assets**: Reduced file sizes for faster loading
- **CDN Delivery**: All assets served from Shopify's global CDN
- **Target Lighthouse Score**: 90+ performance

### 🎭 **Visual Effects**
- **Mouse Glow Effect**: Interactive radial gradients follow cursor
- **Animated Gradients**: Smooth color transitions in hero sections
- **Parallax Scrolling**: 3D depth effects on scroll
- **Glass Morphism**: Modern frosted glass card designs
- **Scroll Animations**: Elements fade and slide into view

### 📱 **Fully Responsive**
- **Mobile-First Design**: Optimized for all screen sizes
- **Touch-Optimized**: Smooth interactions on mobile devices
- **Adaptive Layouts**: Automatic grid adjustments

### ♿ **Accessibility**
- **WCAG AA Compliant**: Proper color contrasts
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Ready**: Semantic HTML & ARIA labels
- **Skip to Content**: Quick navigation for assistive tech

### 🔌 **App Compatible**
Pre-integrated support for popular Shopify apps:
- Judge.me & Yotpo (Reviews)
- Klaviyo (Email Marketing)
- ReCharge & Bold (Subscriptions)
- Loox (Photo Reviews)
- PageFly (Page Builder)

---

## 📦 What's Included

```
glow-edge-shopify/
├── 📁 assets/              # CSS, JavaScript, images
│   ├── theme.css           # Main stylesheet
│   ├── theme.js            # Core functionality
│   ├── mouse-glow.js       # Mouse glow effects
│   └── animations.js       # Scroll animations
├── 📁 config/              # Theme configuration
│   ├── settings_schema.json # 150+ theme settings
│   ├── settings_data.json   # Default values
│   └── 📁 presets/          # 4 theme presets
├── 📁 layout/              # Core layout
│   └── theme.liquid         # Main template
├── 📁 sections/            # Reusable sections (14 total)
│   ├── header.liquid        # Navigation
│   ├── hero.liquid          # Homepage banner
│   ├── features.liquid      # Feature highlights
│   ├── product-grid.liquid  # Product display
│   ├── testimonials.liquid  # Customer reviews
│   ├── faq.liquid           # Q&A accordion
│   ├── newsletter.liquid    # Email signup
│   ├── video.liquid         # Video embed
│   ├── collection-list.liquid
│   ├── image-with-text.liquid
│   └── footer.liquid
├── 📁 snippets/            # Reusable components
│   ├── product-card.liquid  # Product tile
│   ├── cart-drawer.liquid   # Shopping cart
│   ├── social-share.liquid  # Share buttons
│   ├── search-modal.liquid  # Search popup
│   └── schema-*.liquid      # SEO markup
├── 📁 templates/           # Page templates
│   ├── index.json           # Homepage
│   ├── product.json         # Product page
│   ├── collection.json      # Collection page
│   └── 404.json             # Error page
└── 📁 locales/             # Translations
    └── en.default.json      # English
```

---

## 🚀 Installation

### Quick Install (5 minutes)

1. **Download the theme**:
   ```bash
   cd glow-edge-shopify
   zip -r glow-edge-theme.zip .
   ```

2. **Upload to Shopify**:
   - Go to **Online Store** → **Themes**
   - Click **Add theme** → **Upload zip file**
   - Select `glow-edge-theme.zip`
   - Click **Publish**

### Developer Install (Using Shopify CLI)

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Navigate to theme directory
cd glow-edge-shopify

# Connect to your store
shopify theme dev --store your-store.myshopify.com

# Push theme to Shopify
shopify theme push
```

**📖 Detailed Guide**: See [QUICK-START.md](QUICK-START.md)

---

## 🎨 Theme Presets

Choose a pre-configured style to get started quickly:

### 1. **Vibrant** (Default)
- Cyan/Purple/Pink gradients
- Modern fonts
- Full visual effects
- Best for: Tech, Electronics, Modern brands

### 2. **Minimalist**
- Black & White color scheme
- Clean sans-serif fonts
- No glow effects
- Best for: Professional, Corporate stores

### 3. **Bold**
- Red/Orange/Yellow palette
- Heavy typography
- Maximum glow intensity
- Best for: Youth brands, Energetic products

### 4. **Elegant**
- Gold accents on dark background
- Serif headings
- Subtle glows & glass morphism
- Best for: Luxury, Premium products

**How to Apply**: Theme Editor → Theme Settings → Presets → Select → Apply

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| **[QUICK-START.md](QUICK-START.md)** | 30-minute setup guide |
| **[THEME-DOCUMENTATION.md](THEME-DOCUMENTATION.md)** | Complete feature reference |
| **[DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md)** | Pre-launch checklist |
| **[SETUP.md](SETUP.md)** | Detailed setup instructions |
| **[OPTIMIZATION-CHECKLIST.md](OPTIMIZATION-CHECKLIST.md)** | Performance optimization |

---

## ⚙️ Configuration

### Essential Settings

#### 1. **Colors** (Theme Settings → Colors)
- Primary Color: `#00e5ff` (Cyan)
- Secondary Color: `#bf00ff` (Purple)
- Accent Color: `#ff00bf` (Pink)

#### 2. **Typography** (Theme Settings → Typography)
- Heading Font: Choose from 100+ Google Fonts
- Body Font: Optimized for readability
- Font Size: 14-20px (default: 16px)

#### 3. **Layout** (Theme Settings → Layout)
- Container Max Width: 1000-1600px
- Section Spacing: Mobile & Desktop
- Grid Columns: 2-4 products per row

#### 4. **Visual Effects** (Theme Settings → Visual Effects)
- Enable/Disable: Animations, Glows, Parallax
- Intensity: Adjust glow strength
- Speed: Control animation timing

---

## 🧩 Sections Overview

### Header
- Sticky navigation
- Transparent option (homepage)
- Mega menu support
- Search, account, cart icons

### Hero
- Video or image background
- Animated text & gradients
- Dual CTAs
- Key statistics display

### Features
- Icon + text blocks
- Custom glow colors per feature
- Lifestyle images
- Up to 12 feature blocks

### Product Grid
- Collection selection
- 2-4 column layouts
- Hover effects (zoom, glow)
- Lazy loading images

### Testimonials
- Customer reviews
- 5-star ratings
- Author photos
- 1-4 column layouts

### FAQ
- Accordion-style Q&A
- Auto-collapse on click
- Contact CTA at bottom
- Up to 20 questions

### Newsletter
- Email signup form
- Centered or split layouts
- Success/error messages
- Privacy notice

### Video
- YouTube/Vimeo embed
- Self-hosted video support
- Autoplay options
- Responsive aspect ratio

---

## 🔌 App Integration

### Pre-Configured For:

| App | Integration Method | Notes |
|-----|-------------------|-------|
| **Judge.me** | Theme blocks | Auto-detects |
| **Klaviyo** | Snippet/Form | Paste embed code |
| **Yotpo** | App blocks | Drag & drop |
| **ReCharge** | Compatible | No modifications needed |
| **Loox** | Widget support | Add to product page |
| **PageFly** | Fully compatible | Use with theme sections |

**How to Add**: Theme Editor → Product Page → Add Block → Apps → [Select App]

---

## 📊 Performance

### Lighthouse Targets

| Metric | Target | Typical Score |
|--------|--------|---------------|
| Performance | 90+ | 92-95 |
| Accessibility | 95+ | 98-100 |
| Best Practices | 95+ | 100 |
| SEO | 95+ | 100 |

### Optimization Features

- ✅ Lazy loading images
- ✅ Minified CSS & JavaScript
- ✅ Deferred script loading
- ✅ Shopify CDN delivery
- ✅ WebP image format support
- ✅ Preconnect to critical domains

---

## 🛠️ Customization

### Custom CSS

Add via **Theme Settings → Advanced → Custom CSS**:

```css
/* Example: Custom button styles */
.btn-primary {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
  border-radius: 50px;
}

/* Example: Change heading colors */
h1, h2, h3 {
  color: #your-brand-color;
}
```

### Custom JavaScript

Add via **Theme Settings → Advanced → Custom JavaScript**:

```javascript
// Example: Track button clicks
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', () => {
    console.log('Button clicked!');
    // Add your analytics code
  });
});
```

### Metafields

Use for custom product data:
- Product specs (dimensions, materials)
- Custom badges (New, Bestseller)
- Additional images/videos
- Technical documentation

**Setup**: Admin → Settings → Custom data → Products → Add definition

---

## 🆘 Support

### Getting Help

- **📖 Documentation**: Check [THEME-DOCUMENTATION.md](THEME-DOCUMENTATION.md)
- **🐛 Troubleshooting**: See documentation Section 8
- **📧 Email**: support@rimfya.com
- **🌐 Help Center**: https://rimfya.com/docs

### Common Issues

| Issue | Solution |
|-------|----------|
| Products not showing | Publish to "Online Store" sales channel |
| Glow effect not working | Enable in Theme Settings → Visual Effects |
| Slow loading | Compress images, reduce glow intensity |
| Header overlaps content | Add padding-top to body in Custom CSS |

---

## 📋 Requirements

- **Shopify Plan**: Any (Basic, Shopify, Advanced, Plus)
- **Browser Support**: Chrome 90+, Safari 14+, Firefox 88+, Edge 90+
- **Recommended**: Online Store 2.0 compatible (Shopify)

---

## 🚀 What's New in v2.0

### Major Features
- ✨ 4 customizable theme presets
- 🎨 150+ theme settings (up from 15)
- 📦 10 new sections (14 total)
- 🔧 Advanced customization options
- ⚡ Performance improvements
- ♿ Enhanced accessibility
- 📱 Better mobile experience

### New Sections
- FAQ accordion
- Collection list
- Newsletter signup
- Video embed
- Image with text (enhanced)
- Testimonials (enhanced)

### Enhanced Features
- Dynamic CSS variables from settings
- Custom font loading
- Glass morphism option
- High contrast mode
- Loading animations
- Advanced SEO schema

---

## 📄 License

© 2025 RIMFYA. All rights reserved.

This theme is proprietary software. Unauthorized copying, modification, or distribution is prohibited.

**Allowed**:
- Use on unlimited Shopify stores you own
- Customize for your brand
- Modify code for your needs

**Not Allowed**:
- Resell or redistribute
- Share with others
- Claim as your own work

---

## 🤝 Credits

### Built With
- Shopify Liquid templating
- Vanilla JavaScript (no jQuery)
- CSS3 animations
- Online Store 2.0 architecture

### Fonts
- Google Fonts integration
- 100+ font families available

### Icons
- Custom SVG icons
- Optimized for performance

---

## 📞 Contact

- **Developer**: RIMFYA
- **Email**: support@rimfya.com
- **Website**: https://rimfya.com
- **Documentation**: https://rimfya.com/docs

---

## 🗺️ Roadmap

### Upcoming Features
- [ ] Product quick view modal
- [ ] Wishlist functionality  
- [ ] Color/size variant swatches
- [ ] Product comparison tool
- [ ] AR product viewer
- [ ] Dark/Light mode toggle
- [ ] Multi-language improvements

---

<div align="center">

**Made with ❤️ by RIMFYA**

[Documentation](THEME-DOCUMENTATION.md) • [Quick Start](QUICK-START.md) • [Support](mailto:support@rimfya.com)

</div>

## ⚙️ Configuration

### Logo Setup

1. Go to **Theme Settings** → **Header Section**
2. Upload your logo image (recommended: PNG with transparent background)
3. Logo will automatically scale to fit

### Hero Section

1. Edit the **Hero Section** in Theme Customizer
2. **Add Hero Video:**
   - Upload MP4 video file
   - Video will auto-loop with fade transitions
3. **Customize Text:**
   - Subtitle: "Transform Your Viewing Experience"
   - Title: "Glow Edge"
   - Model: "F1"
   - Description

### Features Section

1. **Add Feature Blocks:**
   - Click "Add block" → "Feature"
   - Set title and description
   - Paste SVG icon code
   - Choose icon color
   - **Set glow color** (e.g., `rgba(0, 229, 255, 0.9)`)

2. **Recommended Glow Colors:**
   - Cyan: `rgba(0, 229, 255, 0.9)`
   - Purple: `rgba(191, 0, 255, 0.9)`
   - Pink: `rgba(255, 0, 191, 0.9)`
   - Green: `rgba(0, 255, 128, 0.9)`
   - Yellow: `rgba(255, 200, 0, 0.9)`
   - Red: `rgba(255, 100, 100, 0.9)`

3. **Add Lifestyle Images:**
   - Enable "Show Lifestyle Images"
   - Upload 2 lifestyle images (recommended: 800x600px)

### Footer Section

1. **Company Info:**
   - Upload footer logo
   - Add company description
   - Add social media URLs

2. **Contact Information:**
   - Email address
   - Phone number
   - Physical address

## 🎨 Customization

### Adjusting Colors

Edit CSS variables in `assets/theme.css`:

```css
:root {
  --color-primary: hsl(193, 100%, 65%);      /* Cyan */
  --color-secondary: hsl(280, 100%, 70%);    /* Purple */
  --color-accent: hsl(330, 100%, 70%);       /* Pink */
}
```

### Mouse Glow Intensity

Edit `assets/mouse-glow.js`:

```javascript
// Change circle size: 800px → your value
// Change opacity: 0.6 → your value (0-1)
overlay.style.background = `
  radial-gradient(
    circle 800px at ${x}% ${y}%, 
    hsla(193, 100%, 65%, 0.6) 0%, 
    ...
  )
`;
```

### Animation Speed

Edit `assets/animations.js`:

```javascript
// Change interval: 8000 → your value (milliseconds)
setInterval(cycleGradients, 8000);
```

## 🎬 Adding Products

1. **Create Products:**
   - Go to **Products** → "Add product"
   - Upload product images
   - Set prices and descriptions

2. **Products Display:**
   - Homepage shows 6 most recent products
   - To change: Edit `templates/index.liquid`
   - Modify `limit: 6` to your preferred number

## 📱 Responsive Behavior

- **Mobile (< 768px):**
  - Navigation menu hidden (shows cart only)
  - Single column layouts
  - Touch-optimized

- **Tablet (768px - 1024px):**
  - 2-column grids
  - Simplified animations

- **Desktop (> 1024px):**
  - Full navigation menu
  - 3-4 column grids
  - All effects enabled

## 🔧 Troubleshooting

### Glows Not Showing

1. Check if mouse-glow.js is loading (inspect console)
2. Verify `data-mouse-glow` attribute exists on sections
3. Check opacity values in CSS

### Animations Not Working

1. Verify animations.js is loading
2. Check browser console for errors
3. Ensure `data-animate-on-scroll` attributes are present

### Video Not Playing

1. Ensure video is MP4 format (H.264 codec)
2. Check file size (recommend < 10MB)
3. Verify video has `autoplay`, `loop`, `muted` attributes

## 📊 Performance

- **Lighthouse Score:** 90+ (optimized)
- **Load Time:** < 2s (with optimized images)
- **Image Recommendations:**
  - Hero images: 1920x1080px, WebP format
  - Product images: 800x800px, WebP format
  - Logos: PNG with transparency

## 🆘 Support

For issues or questions:
- Email: support@rimfya.com
- Documentation: https://rimfya.com/docs

## 📄 License

© 2025 RIMFYA. All rights reserved.

---

**Note:** This theme is converted from a React/Vite application. All visual effects (mouse glows, animations, parallax) have been recreated using vanilla JavaScript and CSS for optimal Shopify performance.
