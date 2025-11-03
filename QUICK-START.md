# GlowEdge Theme - Quick Start Guide

Get your store up and running in under 30 minutes! 🚀

---

## 📦 What You'll Need

- Shopify store (any plan)
- Theme files (this folder)
- Store logo (PNG, 300x150px recommended)
- Product images (800x800px minimum)
- ~30 minutes

---

## 🚀 5-Minute Setup

### Step 1: Upload Theme (2 minutes)

**Option A: Shopify Admin (Easiest)**
1. Zip the theme folder:
   ```bash
   zip -r glow-edge-theme.zip glow-edge-shopify/
   ```
2. Go to Shopify Admin → **Online Store** → **Themes**
3. Click **Add theme** → **Upload zip file**
4. Select `glow-edge-theme.zip`
5. Wait for upload (1-2 minutes)

**Option B: Shopify CLI (For Developers)**
```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Navigate to theme folder
cd glow-edge-shopify

# Connect to your store
shopify theme dev --store your-store.myshopify.com

# Push theme
shopify theme push
```

### Step 2: Choose a Preset (1 minute)

1. Click **Customize** on your new theme
2. In the Theme Editor, click **⚙️ Theme Settings**
3. Scroll to **Presets** section
4. Choose one:
   - **Vibrant** (Default) - Tech/Modern brands
   - **Minimalist** - Clean/Professional
   - **Bold** - Energetic/Youth
   - **Elegant** - Luxury/Premium
5. Click **Apply preset**

### Step 3: Upload Logo (1 minute)

1. Still in Theme Settings
2. Go to **Header** section
3. Click **Select image** under "Logo"
4. Upload your logo (or use text logo)
5. Adjust width slider (100-300px)

### Step 4: Preview & Publish (1 minute)

1. Click **👁️ Preview** (top right)
2. Check homepage looks good
3. Click **Save** (top right)
4. Click **Publish** to make live

**🎉 Your theme is now live!**

---

## ⚙️ 15-Minute Essential Customization

### Colors (3 minutes)

1. **Theme Settings** → **Colors**
2. Update:
   - **Primary Color**: Your main brand color
   - **Secondary Color**: Complementary color
   - **Accent Color**: Highlight color
3. **Save**

**Color Tips**:
- Use a color picker from your logo
- Keep contrast high (white text on dark bg)
- Test on mobile

### Homepage Setup (5 minutes)

1. Go back to **Theme Editor** main view
2. **Add sections** in this order:
   - ✅ **Hero** (already there)
   - ➕ **Features** (click "Add section")
   - ➕ **Product Grid**
   - ➕ **Image with Text**
   - ➕ **Testimonials**
   - ➕ **Newsletter**

3. **Configure Hero Section**:
   - Upload hero image or video
   - Edit title: "Your Brand Name"
   - Edit subtitle: "Your tagline"
   - Update button links

4. **Configure Product Grid**:
   - Select collection (or "All products")
   - Set products to show: 6-8
   - Toggle "Show descriptions": ON

**Save after each section!**

### Navigation (3 minutes)

1. **Online Store** → **Navigation**
2. **Main menu**:
   - Add "Home" → `/`
   - Add "Shop" → `/collections/all`
   - Add "About" → `/pages/about`
   - Add "Contact" → `/pages/contact`
3. Drag to reorder
4. **Save menu**

### Footer (4 minutes)

1. **Theme Editor** → **Footer** section
2. Update:
   - Company description
   - Social media links (Facebook, Instagram, etc.)
   - Contact info (email, phone)
3. **Save**

---

## 📱 10-Minute Product Setup

### Add Your First Product

1. **Products** → **Add product**
2. Fill in:
   - **Title**: Product name
   - **Description**: Benefits & features
   - **Price**: e.g., $99.00
   - **Compare at price**: (optional) $149.00 for sale badge
3. **Upload images**:
   - Main image: Front view
   - 2-3 additional: Angles, lifestyle shots
4. **Inventory**: Set quantity
5. **SEO**: Edit URL handle & meta description
6. **Save**

### Make Product Visible

**Important!** Products must be published to "Online Store":
1. Scroll down to **Sales channels**
2. Check ✅ **Online Store**
3. Set availability to "Active"
4. **Save**

### Create a Collection

1. **Products** → **Collections** → **Create collection**
2. **Title**: "All Products" or category name
3. **Type**: Automated
4. **Conditions**: "Product price is greater than 0"
5. Upload collection image
6. **Save**

---

## ✨ 5-Minute Visual Effects Setup

### Enable Effects

1. **Theme Settings** → **Visual Effects**
2. Toggle ON:
   - ✅ Enable Animations
   - ✅ Enable Scroll Animations
   - ✅ Enable Mouse Glow Effect
   - ✅ Animated Background Gradients
   - ✅ Parallax Scrolling

3. Adjust sliders:
   - **Animation Speed**: 100% (default)
   - **Glow Intensity**: 60% (default)
   - **Glow Size**: 800px (default)

4. **Save**

**Performance Note**: Disable effects if your site feels slow.

---

## 🎨 Customize Your Theme

### Quick Customizations

#### Change Button Style
1. **Theme Settings** → **Buttons & Forms**
2. **Button Style**: Choose Rounded/Pill/Square
3. Toggle **Glow Effect on Hover**

#### Adjust Typography
1. **Theme Settings** → **Typography**
2. Pick **Heading Font** from 100+ options
3. Pick **Body Font**
4. Adjust **Font Size**: 14-20px

#### Layout Options
1. **Theme Settings** → **Layout**
2. **Container Max Width**: 1280px (default)
3. **Section Spacing**: Adjust mobile/desktop padding
4. **Product Grid Layout**: Grid/Masonry/List

---

## 📄 Create Essential Pages

### About Page (3 minutes)

1. **Online Store** → **Pages** → **Add page**
2. **Title**: "About Us"
3. **Content**: Write your brand story
4. Add image (team photo, workspace, etc.)
5. **Save**

### Contact Page (2 minutes)

1. **Pages** → **Add page**
2. **Title**: "Contact Us"
3. **Template**: Select "page.contact" (if available)
4. Or use default template and add contact form snippet
5. **Save**

### Legal Pages (Use Templates)

1. **Settings** → **Legal**
2. Click "Create from template" for:
   - Privacy Policy
   - Terms of Service
   - Refund Policy
3. Customize with your info
4. **Save**

---

## 🔧 Advanced Setup (Optional)

### SEO Optimization

1. **Online Store** → **Preferences**
2. **Homepage title**: "Your Store Name | Tagline"
3. **Meta description**: 150-character description
4. **Save**

### Social Sharing

1. Upload **Share image** (1200x630px)
2. This appears when sharing on Facebook/Twitter

### Google Analytics

1. Get tracking ID from Google Analytics
2. **Online Store** → **Preferences**
3. Paste in **Google Analytics** field
4. **Save**

### Apps to Install

Recommended for full functionality:

| App | Purpose | Cost |
|-----|---------|------|
| **Judge.me** | Product reviews | Free plan available |
| **Klaviyo** | Email marketing | Free up to 250 contacts |
| **Loox** | Photo reviews | Paid (14-day trial) |
| **PageFly** | Page builder | Free plan available |

---

## 🎯 Launch Checklist

Before going live:

- [ ] Logo uploaded
- [ ] At least 3 products added
- [ ] Homepage sections configured
- [ ] Navigation menu set up
- [ ] Footer info added
- [ ] Legal pages created
- [ ] Contact page added
- [ ] Favicon uploaded
- [ ] Test checkout process
- [ ] Mobile preview checked

---

## 🆘 Troubleshooting

### Products Not Showing?
**Fix**: Products → Select product → Scroll to "Sales channels" → Check ✅ Online Store

### Glow Effect Not Working?
**Fix**: Theme Settings → Visual Effects → Enable Mouse Glow Effect → Increase Glow Intensity

### Slow Loading?
**Fix**: 
1. Compress images to WebP
2. Reduce glow effect intensity
3. Disable parallax on mobile

### Header Overlaps Content?
**Fix**: Add to Theme Settings → Advanced → Custom CSS:
```css
body {
  padding-top: 80px;
}
```

---

## 📚 Next Steps

### Learn More
- Read full docs: `THEME-DOCUMENTATION.md`
- Check setup guide: `SETUP.md`
- Review optimization: `OPTIMIZATION-CHECKLIST.md`

### Get Support
- Email: support@rimfya.com
- Discord: [Community link]
- Docs: https://rimfya.com/docs

### Advanced Features
- Set up product metafields
- Create custom sections
- Add third-party app integrations
- Enable multi-currency
- Set up translations

---

## 🎓 Pro Tips

1. **Use Presets**: Start with a preset, then customize colors
2. **Test Mobile First**: 70%+ traffic is mobile
3. **Optimize Images**: Compress before uploading (use TinyPNG.com)
4. **Less is More**: Don't overcrowd homepage with sections
5. **Fast Shipping**: Free shipping badges increase conversions
6. **Social Proof**: Add customer testimonials ASAP
7. **Clear CTAs**: Use action words like "Shop Now", "Get Started"
8. **High-Quality Photos**: Invest in good product photography

---

## ✅ You're Ready!

Your GlowEdge theme is now set up and ready to sell! 

**Remember**: 
- Save often while customizing
- Preview before publishing
- Test checkout with test order
- Monitor analytics after launch

**Questions?** Check the full documentation or contact support.

---

**Happy selling! 🛍️**

*Last updated: November 2025 | Theme v2.0.0*
