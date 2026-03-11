# blurrysadgirl - Custom LinkTree

A beautiful, custom LinkTree-style website built with React and Vite.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Features

- **Profile Section**: Avatar, name, and bio
- **Social Links**: Direct links to all your social media platforms
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop
- **Smooth Animations**: Fade-in effects and hover interactions
- **Modern Styling**: Purple gradient background with clean white buttons

## 🔗 Links Included

- YouTube
- Instagram
- TikTok
- Twitter/X
- Facebook
- Email

## 📝 Customization

### Update Profile Picture

Replace the placeholder image URL in `src/App.jsx`:

```jsx
<img src="https://via.placeholder.com/120" alt="Profile" />
```

### Change Colors

Edit the gradient and colors in `src/App.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Update Links

Modify the `socialLinks` array in `src/App.jsx` to update URLs or add new platforms.

## 🌐 Deployment

You can deploy this site to:
- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions with the build output

## 📱 Mobile Responsive

The site is fully responsive with breakpoints at:
- Desktop: > 768px
- Tablet: 480px - 768px
- Mobile: < 480px

---

Built with ❤️ by blurrysadgirl
