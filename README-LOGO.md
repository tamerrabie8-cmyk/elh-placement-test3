# ELH Animated Logo - English Learning Hub

A professional, fully animated logo for the English Learning Hub platform with multiple implementation options.

## 🎨 Features

- **Smooth Animations**: 
  - Rotating outer circle
  - Floating speech bubbles
  - Pulsing world map
  - Shining text effects
  - Slide-in text entrance

- **Multiple Implementations**:
  - Pure HTML/CSS (standalone)
  - React component (for modern web apps)
  - Customizable sizes and animations

- **Responsive Design**: Works perfectly on all screen sizes

- **Accessibility**: Respects `prefers-reduced-motion` for users who prefer less motion

- **Dark Mode Support**: Optimized shadows and contrast

## 📁 Files

### 1. `animated-logo.html`
Standalone HTML file with embedded CSS. Perfect for:
- Quick integration
- Static websites
- Email marketing
- Documentation

**Usage**:
```html
<!-- Simply open in browser or embed -->
<iframe src="animated-logo.html" width="400" height="400"></iframe>
```

### 2. `logo-component.jsx`
React component for modern JavaScript applications.

**Usage**:
```jsx
import ELHLogo from './logo-component';

// In your component
<ELHLogo size="medium" animated={true} />

// Available sizes: 'small' (100px), 'medium' (200px), 'large' (300px)
// Toggle animations: animated={true/false}
```

### 3. `logo-component.css`
Companion CSS file for the React component with all animations and styling.

## 🎯 Use Cases

- Website header/footer
- Loading screens
- Social media graphics
- Favicon animation
- Email signatures
- Marketing materials
- Presentation slides
- Mobile app splash screens

## 🎬 Animation Details

| Animation | Duration | Effect |
|-----------|----------|--------|
| Outer Circle | 20s | Continuous smooth rotation |
| Speech Bubbles | 3s | Gentle floating motion |
| World Map | 2s | Subtle pulse and scale |
| ELH Text | 3s | Brightness shine effect |
| Text Entrance | 1s | Slide up fade in |

## 🎨 Color Scheme

- **Primary Blue**: `#003d99` (Dark Blue)
- **Secondary Blue**: `#1a5bbf` (Medium Blue)
- **Accent Yellow**: `#ffc107` (Gold Yellow)
- **Outline**: `#ffffff` (White)
- **Background**: `#000000` (Black)

## ♿ Accessibility

The logo respects user preferences:
- Animations disable for users with `prefers-reduced-motion`
- High contrast colors for visibility
- Semantic SVG structure
- Proper text anchoring

## 📱 Responsive Breakpoints

- **Desktop**: Full size (300px x 300px)
- **Tablet**: Medium size (200px x 200px)
- **Mobile**: Small size (100px x 100px)

## 🚀 Performance

- Lightweight SVG-based design
- CSS animations (GPU-accelerated)
- No external dependencies
- Minimal file size (~6KB HTML, ~3KB CSS, ~2KB JSX)

## 💡 Customization Tips

### Change Colors
Find these values in the CSS/SVG:
- `#003d99` - Change primary blue
- `#ffc107` - Change gold accent
- `#ffffff` - Change outline

### Adjust Animation Speed
Modify these values in CSS:
- `20s` - Outer circle rotation speed
- `3s` - Bubble floating speed
- `2s` - World map pulse speed

### Scale SVG Elements
Adjust the `viewBox` and `<circle>` `r` attributes to scale proportions.

## 🔧 Integration Examples

### HTML
```html
<!DOCTYPE html>
<html>
<body>
  <iframe src="animated-logo.html" width="300" height="300" frameborder="0"></iframe>
</body>
</html>
```

### React
```jsx
import ELHLogo from './logo-component';

export default function App() {
  return (
    <div>
      <header>
        <ELHLogo size="large" animated={true} />
      </header>
    </div>
  );
}
```

### Different Sizes
```jsx
<div>
  <ELHLogo size="small" />
  <ELHLogo size="medium" />
  <ELHLogo size="large" />
</div>
```

### Without Animations
```jsx
<ELHLogo size="medium" animated={false} />
```

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Free to use for the English Learning Hub project.

---

**Last Updated**: 2026-06-10  
**Version**: 1.0.0  
**Created by**: GitHub Copilot
