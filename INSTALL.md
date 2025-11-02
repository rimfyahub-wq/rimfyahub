# Quick Start Guide - Glow Edge Shopify Theme

## 🎯 What You Need

- Shopify store (any plan)
- Your logo image (PNG, transparent background recommended)
- Product images (800x800px minimum)
- Optional: Hero video (MP4, under 10MB)

## 📦 Installation Steps

### Option 1: Quick Upload (5 minutes)

1. **Create ZIP file:**
   ```bash
   cd /Users/ahmed/GlowEdge/glow-edge-shopify
   zip -r glow-edge-theme.zip ./*
   ```

2. **Upload to Shopify:**
   - Login to your Shopify Admin
   - Go to: **Online Store** → **Themes**
   - Click: **Add theme** → **Upload zip file**
   - Select: `glow-edge-theme.zip`
   - Wait for upload to complete

3. **Publish:**
   - Click **Actions** → **Publish** on your new theme

### Option 2: Shopify CLI (Recommended for developers)

1. **Install Shopify CLI:**
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Login to Shopify:**
   ```bash
   shopify login --store your-store.myshopify.com
   ```

3. **Push theme:**
   ```bash
   cd /Users/ahmed/GlowEdge/glow-edge-shopify
   shopify theme push
   ```

## ⚡ First-Time Setup

### 1. Upload Your Logo

- Go to: **Theme Customizer** → **Header**
- Click: **Select image** under "Logo Image"
- Upload: `/Users/ahmed/GlowEdge/glow-edge-frame/src/assets/2.png`
- Save

### 2. Configure Hero Section

- Click on **Hero** section
- Add your subtitle, title, description
- **Upload hero video** (optional):
  - Click "Select video"
  - Upload MP4 file
  - Video will auto-loop with smooth fade

### 3. Add Features

For each of your 6 features:

1. Click **Add block** → **Feature**
2. Fill in:
   - **Title**: "Easy Setup"
   - **Description**: Feature description
   - **Icon SVG**: Paste SVG code (see icons below)
   - **Icon Color**: Choose from palette
   - **Glow Color**: `rgba(0, 229, 255, 0.9)` (see color guide)

**Recommended Glow Colors:**
```
Feature 1 (Cyan):   rgba(0, 229, 255, 0.9)
Feature 2 (Purple): rgba(191, 0, 255, 0.9)
Feature 3 (Pink):   rgba(255, 0, 191, 0.9)
Feature 4 (Green):  rgba(0, 255, 128, 0.9)
Feature 5 (Yellow): rgba(255, 200, 0, 0.9)
Feature 6 (Red):    rgba(255, 100, 100, 0.9)
```

**Icon SVG Examples:**

Zap Icon:
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
```

Smartphone Icon:
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
  <line x1="12" y1="18" x2="12.01" y2="18"></line>
</svg>
```

### 4. Add Products

- Go to: **Products** → **Add product**
- Add product details
- Upload images (800x800px recommended)
- Set prices
- Save

### 5. Footer Setup

- Go to **Footer** section
- Add:
  - Logo (optional)
  - Company description
  - Social media links
  - Contact information

## ✅ Testing Checklist

- [ ] Logo displays correctly
- [ ] Hero video plays and loops smoothly
- [ ] Mouse glow follows cursor
- [ ] Feature cards have colored glows
- [ ] Products show in grid
- [ ] Add to Cart works
- [ ] Footer links work
- [ ] Mobile responsive

## 🎨 Visual Effects Verification

**Mouse Glow:**
- Move your mouse over Hero, Features, Products sections
- You should see a colorful gradient following your cursor

**Background Animation:**
- Hero section background should smoothly transition between colors every 8 seconds

**Scroll Animations:**
- Scroll down the page
- Feature cards should fade in and slide up
- Product cards should appear with stagger effect

## 📱 Mobile Testing

1. Open theme preview
2. Click device icon (top right)
3. Test on: Mobile, Tablet, Desktop views
4. Verify:
   - Header cart button visible
   - Content stacks properly
   - Images load correctly

## 🔧 Common Customizations

### Change Primary Color

Edit `assets/theme.css`:
```css
:root {
  --color-primary: hsl(193, 100%, 65%); /* Change these values */
}
```

### Adjust Mouse Glow Size

Edit `assets/mouse-glow.js`:
```javascript
// Line ~35: Change 800px to your preferred size
circle 800px at ${x}% ${y}%
```

### Change Animation Timing

Edit `assets/animations.js`:
```javascript
// Line ~95: Change 8000 to milliseconds
setInterval(cycleGradients, 8000);
```

## 🆘 Troubleshooting

**Glows not showing?**
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check Theme Customizer → Effects → "Enable Mouse Glow Effect" is ON

**Animations not working?**
- Verify JavaScript files loaded (check browser console)
- Ensure "Enable Scroll Animations" is ON in settings

**Video not playing?**
- Ensure video is MP4 format
- Check file size (< 10MB recommended)
- Try different video

## 📞 Need Help?

- Check README.md for detailed documentation
- Email: support@rimfya.com

---

**Ready to Go Live?**

Once you're happy with the theme:
1. Click **Publish** in Theme Customizer
2. Your theme is now live! 🎉
