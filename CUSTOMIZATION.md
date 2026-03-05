# Women's Day Website - Customization Guide

Welcome to the Women's Day Celebration website! This guide will help you customize the website with real student data, photos, and personalized messages for their moms.

## Overview

This is a vibrant, animated cartoon-style website celebrating Women's Day with student tributes to their moms. The website features:

- **Hero Section**: Eye-catching banner with celebration graphics
- **Student Cards Grid**: Interactive cards with student photos
- **Slideshow**: Beautiful image slideshow for each student
- **Letter Section**: Heartfelt messages from students to their moms
- **Playful Animations**: Bouncing cards, floating elements, and confetti effects
- **Responsive Design**: Works beautifully on all devices

## Design Philosophy

The website uses a **Vibrant Cartoon Celebration** aesthetic with:

- **Colors**: Hot pink (#FF69B4), magenta (#FF1493), sunny yellow (#FFD700)
- **Typography**: Fredoka One (playful headings), Quicksand (readable body), Caveat (personal touches)
- **Animations**: Bouncy, celebratory movements that feel joyful and energetic
- **Decorative Elements**: Floating hearts, stars, flowers, and confetti

## How to Add Students

### 1. Edit the Student Data

Open `client/src/pages/Home.tsx` and locate the `students` array (around line 30). Each student object should have:

```typescript
{
  id: "unique-id",           // Unique identifier (1, 2, 3, etc.)
  name: "Student Name",      // Student's full name
  image: "photo-url",        // URL to student's photo (400x400px recommended)
  letter: "Message text",    // Heartfelt message for mom
  slideImages: [             // Array of images for slideshow
    "image-url-1",
    "image-url-2",
  ],
}
```

### 2. Add the Same Student Data to StudentTribute.tsx

Open `client/src/pages/StudentTribute.tsx` and update the `students` array with the same data. This ensures the tribute page has access to all student information.

### 3. Example with Real Data

```typescript
{
  id: "1",
  name: "Sarah",
  image: "https://example.com/sarah-photo.jpg",
  letter: "Dear Mom, Thank you for all your love and support. You are my inspiration every single day. Happy Women's Day!",
  slideImages: [
    "https://example.com/sarah-slide-1.jpg",
    "https://example.com/sarah-slide-2.jpg",
    "https://example.com/sarah-slide-3.jpg",
  ],
}
```

## Getting Photos

### Option 1: Upload Your Own Photos

1. Take photos of students or use existing photos
2. Resize to appropriate dimensions:
   - Student card image: 400x400px (square)
   - Slideshow images: 600x600px or larger (square or landscape)
3. Upload to a cloud service (Google Drive, Dropbox, Imgur, etc.)
4. Get the public URL and add to the student data

### Option 2: Use Stock Photos

For testing or placeholder purposes, you can use free stock photo services:

- **Unsplash**: https://unsplash.com (high quality, free)
- **Pexels**: https://www.pexels.com (free stock photos)
- **Pixabay**: https://pixabay.com (free images)

Search for "portrait", "woman", "celebration", etc.

## Customizing the Messages

### Letter Content

Edit the `letter` field in each student object. This is the heartfelt message that appears in the letter section. Keep it personal and meaningful!

### Hero Section

To change the hero banner image, edit the URL in `client/src/pages/Home.tsx` around line 140:

```tsx
<img
  src="https://your-custom-banner-url.jpg"
  alt="Happy Women's Day"
  className="w-full h-auto object-cover"
/>
```

## Customizing Colors

### Primary Colors

Edit `client/src/index.css` in the `:root` section:

```css
:root {
  --primary: #FF69B4;           /* Hot pink */
  --secondary: #FF1493;         /* Magenta */
  --accent: #FFD700;            /* Sunny yellow */
  --background: #FFFACD;        /* Light yellow background */
  --foreground: #4B0082;        /* Deep purple text */
}
```

### Suggested Color Palettes

**Warm & Celebratory** (Current):
- Pink: #FF69B4, Magenta: #FF1493, Yellow: #FFD700

**Cool & Elegant**:
- Purple: #9D4EDD, Pink: #E0AAFF, Lavender: #C8B6FF

**Soft & Romantic**:
- Rose: #E85D75, Blush: #FFD6E8, Cream: #FFFACD

## Customizing Text

### Page Titles

Edit the main heading in `client/src/pages/Home.tsx`:

```tsx
<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold ...">
  Celebrating Our Moms  {/* Change this text */}
</h1>
```

### Descriptions

Update the subtitle and description text in the same section to match your event or school.

### Footer

Customize the footer message in `client/src/pages/Home.tsx`:

```tsx
<p className="text-lg text-purple-800 mb-6">
  To all the incredible women who inspire us... {/* Edit this */}
</p>
```

## Adding More Animations

### Floating Elements

The website uses several animation utilities. Add to any element:

- `animate-float` - Gentle up-and-down floating
- `animate-bounce-in` - Bouncy entrance animation
- `animate-spin-slow` - Slow rotation
- `animate-pulse-glow` - Glowing pulse effect

Example:

```tsx
<div className="animate-float">✨</div>
```

### Confetti Effects

Confetti automatically appears when:
- Page first loads (Home page)
- User navigates slides (StudentTribute page)

To add confetti to other events, import and use:

```tsx
import Confetti from "@/components/Confetti";

// In your component:
const [showConfetti, setShowConfetti] = useState(false);

return (
  <>
    {showConfetti && <Confetti />}
    {/* Your content */}
  </>
);
```

## Mobile Responsiveness

The website is fully responsive and looks great on:

- **Desktop**: Full 3-column grid of student cards
- **Tablet**: 2-column grid
- **Mobile**: Single column, optimized for touch

Test on different devices using your browser's developer tools (F12).

## Deployment

The website is ready to deploy! To publish:

1. Click the **Publish** button in the Manus UI
2. Choose your domain (auto-generated or custom)
3. Share the link with students, teachers, and parents

## Troubleshooting

### Photos Not Showing

- Verify the URL is correct and publicly accessible
- Check that the image format is supported (JPG, PNG, WebP)
- Ensure the URL doesn't have CORS restrictions

### Text Overlapping

- Adjust font sizes in the CSS if needed
- Ensure student names are reasonably short
- Test on mobile devices to verify layout

### Animations Not Working

- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try a different browser
- Check browser console for errors (F12)

## File Structure

```
client/src/
├── pages/
│   ├── Home.tsx              # Main landing page with student cards
│   └── StudentTribute.tsx    # Individual tribute page with slideshow
├── components/
│   ├── Confetti.tsx          # Confetti animation component
│   └── FloatingHearts.tsx    # Floating hearts decoration
├── App.tsx                   # Router and main app structure
└── index.css                 # Global styles and theme colors
```

## Support

For technical issues or questions about customization:

1. Check this guide first
2. Review the code comments in the relevant files
3. Test in different browsers
4. Clear cache and reload

## Tips for Best Results

- **Use high-quality photos**: Clear, well-lit images work best
- **Keep messages concise**: Shorter messages display better
- **Test on mobile**: Always preview on a phone or tablet
- **Use consistent image sizes**: Square images (400x400) work best for cards
- **Personal touches**: Add specific details about each student's relationship with their mom

---

**Happy Women's Day! 🌸💕✨**

This website celebrates the incredible women in our lives and the students who honor them.
