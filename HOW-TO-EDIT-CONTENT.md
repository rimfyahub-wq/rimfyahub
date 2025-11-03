# 📝 How to Edit Text & Upload Images in Your Shopify Theme

## 🚨 Important Understanding

**You CANNOT edit content directly in these code files!** 

These are **template files** that define the structure. To edit actual content (text, images, products), you need to:

1. Upload the theme to Shopify
2. Use the Shopify admin interface
3. Edit through the Theme Customizer

---

## 📦 Step 1: Upload Theme to Shopify (5 Minutes)

### Method 1: Upload ZIP File (Easiest)

1. **Locate the ZIP file**:
   ```
   /Users/ahmed/GlowEdge/glow-edge-shopify/glow-edge-theme-v2.zip
   ```

2. **Go to Shopify Admin**:
   - Log in to your Shopify store: `your-store.myshopify.com/admin`

3. **Navigate to Themes**:
   - Click **Online Store** → **Themes**

4. **Upload Theme**:
   - Scroll down to "Theme library"
   - Click **Add theme** → **Upload zip file**
   - Select `glow-edge-theme-v2.zip`
   - Wait for upload to complete

5. **Preview or Publish**:
   - Click **Customize** to start editing
   - OR click **Actions** → **Publish** to make it live

---

## ✏️ Step 2: Edit Text & Content (Theme Customizer)

Once theme is uploaded, click **Customize**. You'll see:

### A. Edit Section Content

**Example: Editing Hero Section Text**

1. Click on the **Hero section** on your homepage
2. On the right sidebar, you'll see fields like:
   ```
   ┌─────────────────────────────┐
   │ Heading: [Type your text]  │
   │ Subheading: [Type text]    │
   │ Button text: [Type text]   │
   │ Button link: [/collections]│
   └─────────────────────────────┘
   ```
3. Simply **type your new text** in these fields
4. Changes appear **instantly** in the preview

**Example: Editing Features Section**

1. Click **Features** section
2. You'll see blocks like:
   ```
   ┌─────────────────────────────┐
   │ ✓ Feature 1                │
   │   - Title: [Type here]     │
   │   - Description: [Type]    │
   │   - Icon: [Choose icon]    │
   │ ✓ Feature 2                │
   │ ✓ Feature 3                │
   │ + Add feature              │
   └─────────────────────────────┘
   ```
3. Edit each field directly
4. Click **+ Add feature** for more

---

## 🖼️ Step 3: Upload & Replace Images

### A. Upload Logo

1. In Theme Customizer, go to **Theme settings** (bottom left)
2. Click **Logo**
3. You'll see:
   ```
   ┌─────────────────────────────┐
   │ Logo image                 │
   │ [Upload image]  [⚙️ Replace]│
   │                            │
   │ Logo width: [120] px       │
   └─────────────────────────────┘
   ```
4. Click **Upload image**
5. Select your logo file (PNG, JPG, SVG)
6. Adjust logo width with slider

### B. Upload Section Images

**Example: Hero Section Background**

1. Click **Hero section**
2. Find the image field:
   ```
   ┌─────────────────────────────┐
   │ Background image           │
   │ [Upload image]  [⚙️ Replace]│
   │                            │
   │ Or use video: [URL]        │
   └─────────────────────────────┘
   ```
3. Click **Upload image**
4. Select image from your computer
5. Image replaces instantly

**Example: Product Images**

1. Go to **Products** → **All products**
2. Click on a product
3. In the "Media" section:
   ```
   ┌─────────────────────────────┐
   │ Media                      │
   │ [📤 Add media]             │
   │                            │
   │ Drag images to reorder     │
   └─────────────────────────────┘
   ```
4. Click **Add media**
5. Upload product photos
6. Drag to reorder (first = main image)

### C. Upload Collection Images

1. Go to **Products** → **Collections**
2. Click on a collection
3. Find "Collection image":
   ```
   ┌─────────────────────────────┐
   │ Collection image           │
   │ [Upload image]             │
   │                            │
   │ This appears in collection │
   │ list sections              │
   └─────────────────────────────┘
   ```
4. Upload image
5. Image shows in Collection List section

---

## 🎨 Step 4: Customize Colors & Fonts

### A. Change Colors

1. Go to **Theme settings** → **Colors**
2. You'll see all color options:
   ```
   ┌─────────────────────────────┐
   │ Primary color     [🎨 #FF0]│
   │ Secondary color   [🎨 #00F]│
   │ Accent color      [🎨 #F0F]│
   │ Background        [🎨 #FFF]│
   │ Text color        [🎨 #000]│
   └─────────────────────────────┘
   ```
3. Click color picker
4. Choose new color
5. Changes apply site-wide instantly

### B. Change Fonts

1. Go to **Theme settings** → **Typography**
2. You'll see font pickers:
   ```
   ┌─────────────────────────────┐
   │ Heading font              │
   │ [Montserrat ▼]            │
   │                            │
   │ Body font                 │
   │ [Open Sans ▼]             │
   │                            │
   │ Font size: [16] px        │
   └─────────────────────────────┘
   ```
3. Click dropdown → Choose font
4. Adjust size with slider

---

## 🎯 Step 5: Add/Remove/Reorder Sections

### Add New Section

1. In Theme Customizer, click **Add section** (between sections)
2. Choose from available sections:
   ```
   ┌─────────────────────────────┐
   │ 📋 Available sections:     │
   │                            │
   │ • Hero                     │
   │ • Features                 │
   │ • Product Grid             │
   │ • Collection List          │
   │ • Image with Text          │
   │ • Testimonials             │
   │ • FAQ                      │
   │ • Newsletter               │
   │ • Video                    │
   └─────────────────────────────┘
   ```
3. Click desired section
4. Section appears on page
5. Edit content in right sidebar

### Reorder Sections

1. Hover over section name in left sidebar
2. You'll see **≡** (drag handle)
3. Click and drag to new position
4. Release to drop

### Remove Section

1. Click section to select
2. Click **Remove section** at bottom of sidebar
3. Confirm removal

---

## 📱 Step 6: Preview on Mobile

1. In Theme Customizer, click **📱 Mobile** icon (top)
2. Preview switches to mobile view
3. All edits work the same way
4. Switch back with **🖥️ Desktop** icon

---

## 💾 Step 7: Save & Publish

### Save Changes

1. Click **Save** button (top right)
2. Wait for "Saved" confirmation
3. Changes are saved but NOT live yet

### Publish Theme

1. Exit customizer
2. Go to **Online Store** → **Themes**
3. Find your theme in "Theme library"
4. Click **Actions** → **Publish**
5. Confirm - theme goes live!

---

## 🔄 Quick Edit Workflow

### Typical Editing Session:

1. **Go to Customizer**: Shopify Admin → Online Store → Themes → Customize
2. **Edit content**: Click section → Edit fields on right
3. **Upload images**: Click image field → Upload
4. **Preview**: Check desktop + mobile views
5. **Save**: Click Save button
6. **Publish**: When ready, publish theme

---

## 📋 Common Edits Checklist

Before launching your store, edit these:

### ✅ Branding
- [ ] Upload logo (Theme settings → Logo)
- [ ] Upload favicon (Theme settings → Advanced → Favicon)
- [ ] Set brand colors (Theme settings → Colors)
- [ ] Choose fonts (Theme settings → Typography)

### ✅ Homepage
- [ ] Edit hero headline & subheading
- [ ] Upload hero background image/video
- [ ] Edit features (title, description, icons)
- [ ] Add products to product grid
- [ ] Customize testimonials
- [ ] Set up FAQ questions

### ✅ Navigation
- [ ] Create menu (Navigation → Main menu)
- [ ] Add footer links (Footer section)
- [ ] Set up social media links (Theme settings → Social)

### ✅ Products
- [ ] Add products with images
- [ ] Create collections
- [ ] Upload collection images
- [ ] Set product prices

### ✅ Pages
- [ ] Create About page
- [ ] Create Contact page
- [ ] Add legal pages (Privacy, Terms, Refunds)

### ✅ Settings
- [ ] Enable visual effects (Theme settings → Visual Effects)
- [ ] Set up newsletter (Newsletter section)
- [ ] Configure header (sticky, transparent, etc.)
- [ ] Set up footer (payment icons, copyright)

---

## 🎥 Where Are These Settings?

### In Theme Code Files (Current Location)
```
❌ You're here - can't edit content
└── These are TEMPLATES (structure only)
    ├── settings_schema.json → Defines WHAT settings exist
    ├── sections/*.liquid → Defines section STRUCTURE
    └── You edit: Liquid code, CSS, JavaScript
```

### In Shopify Admin (Where You Need to Be)
```
✅ Go here to edit content
└── Shopify Admin → Online Store → Themes → Customize
    ├── Edit text directly in fields
    ├── Upload images with buttons
    ├── Drag & drop to reorder
    └── See changes instantly
```

---

## 🚀 Quick Start (Right Now!)

### 1. Open Shopify Admin
```
https://your-store-name.myshopify.com/admin
```

### 2. Upload Theme
- Online Store → Themes
- Add theme → Upload zip file
- Select: `glow-edge-theme-v2.zip`

### 3. Start Customizing
- Click **Customize** on uploaded theme
- Click any section → Edit in right sidebar
- Upload images with image fields
- **Save** when done

### 4. Choose a Preset (Optional)
- Theme settings (bottom left)
- Click "Change theme style"
- Choose: Minimalist, Bold, Elegant, or Vibrant
- Apply preset

---

## 💡 Pro Tips

1. **Use Presets First**: Choose a preset (Minimalist/Bold/Elegant/Vibrant) before customizing - saves time!

2. **Test on Mobile**: Always check mobile view before publishing

3. **Save Often**: Click Save frequently to avoid losing work

4. **Duplicate Theme**: Before major changes, duplicate theme as backup (Actions → Duplicate)

5. **Use High-Quality Images**: 
   - Logo: PNG with transparent background, 400-600px wide
   - Hero: 1920x1080px or larger
   - Products: Square (1000x1000px), white background

6. **Preview Before Publishing**: Use preview mode to test with real products

---

## 🆘 Troubleshooting

### "I don't see the customize button"
- Make sure theme is uploaded to Shopify first
- Refresh the Themes page

### "My changes aren't showing on live site"
- Did you click Save?
- Did you Publish the theme?
- Clear browser cache (Cmd+Shift+R)

### "Image upload isn't working"
- Check file size (max 20MB for images)
- Use JPG or PNG format
- Try resizing image first

### "Section settings are missing"
- Make sure you're using the v2 theme
- Re-upload `glow-edge-theme-v2.zip`

---

## 📞 Need Help?

1. **Theme Documentation**: Read `THEME-DOCUMENTATION.md` (in theme folder)
2. **Quick Start**: Follow `QUICK-START.md` (30-minute guide)
3. **Shopify Help**: https://help.shopify.com/manual/online-store/themes
4. **Support**: support@rimfya.com

---

**Remember**: The code files you're looking at are TEMPLATES. To edit content (text, images), you must upload to Shopify and use the Theme Customizer! 🎨
