<div align="center">
  <img src="public/logo.svg" alt="Apple Logo" width="60" height="60">
  
  # 🍎 Apple MacBook Pro Website Clone
  
  <p align="center">
    A stunning, pixel-perfect recreation of Apple's MacBook Pro landing page featuring immersive 3D models, smooth animations, and responsive design.
  </p>

  ![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Three.js](https://img.shields.io/badge/Three.js-0.180.0-000000?style=for-the-badge&logo=three.js&logoColor=white)
  ![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)

  [View Demo](#) · [Report Bug](#) · [Request Feature](#)
</div>

---

## ✨ Features

- 🎨 **Pixel-Perfect Design** - Meticulously crafted to match Apple's aesthetic
- 🎭 **3D Product Viewer** - Interactive MacBook models (14", 16") with Three.js
- 🎬 **Smooth Animations** - GSAP-powered scroll-triggered animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎮 **Interactive Elements** - Engaging hover effects and transitions
- 🎯 **Modern Architecture** - Component-based structure with state management

---

## 🎬 Showcase

The website features multiple immersive sections:

- **Hero Section** - Eye-catching video background with MacBook Pro introduction
- **3D Product Viewer** - Interactive 3D models with smooth camera controls
- **Performance Section** - Animated graphics showcasing M4 chip capabilities
- **Features Gallery** - Video-based feature demonstrations
- **Highlights** - Key product specifications and benefits
- **Responsive Footer** - Complete navigation and legal information

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.1** - Latest React with improved performance
- **Vite 7.1** - Next-generation frontend tooling

### 3D Graphics & Animation
- **Three.js 0.180.0** - WebGL-powered 3D rendering
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **GSAP 3.13** - Professional-grade animation library
- **ScrollTrigger** - Scroll-based animation triggers

### Styling & UI
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Custom Fonts** - Apple's SF Pro font family

### State Management
- **Zustand** - Lightweight state management

### Utilities
- **React Responsive** - Media query hooks for responsive design
- **clsx** - Utility for constructing className strings

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/apple-website.git
   cd apple-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the website in action.

### Build for Production

```bash
npm run build
```

The optimized build will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
apple-website/
├── public/
│   ├── models/          # 3D MacBook models (.glb files)
│   ├── videos/          # Feature and hero videos
│   ├── fonts/           # Apple SF Pro font family
│   └── *.png, *.svg     # Images and icons
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with video
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── ProductViewer.jsx  # 3D model viewer
│   │   ├── Showcase.jsx       # Product showcase
│   │   ├── Performance.jsx    # Performance section
│   │   ├── Features.jsx       # Features gallery
│   │   ├── Highligths.jsx     # Product highlights
│   │   ├── Footer.jsx         # Footer component
│   │   ├── models/            # 3D model components
│   │   └── three/             # Three.js utilities
│   ├── constants/
│   │   └── index.js           # App constants and data
│   ├── store/
│   │   └── index.js           # Zustand store
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎯 Key Components

### Hero
The landing section with a cinematic video background and call-to-action.

### ProductViewer
Interactive 3D viewer allowing users to explore MacBook models from all angles.

### Performance
Animated section showcasing the M4 chip's graphics capabilities with scroll-triggered effects.

### Features
Video-based feature demonstrations with smooth transitions.

### Highlights
Key product specifications and benefits in an elegant layout.

---

## 🎨 Customization

### Modifying Colors
Update the Tailwind configuration in `tailwind.config.js` to customize the color palette.

### Adding New Sections
Create new components in `src/components/` and import them in `App.jsx`.

### Updating Content
Edit the constants in `src/constants/index.js` to update text, images, and data.

---

## 📈 Performance Optimization

- ✅ Lazy loading for 3D models
- ✅ Optimized video compression
- ✅ Image optimization
- ✅ Code splitting
- ✅ Tree shaking with Vite
- ✅ Responsive media queries

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is for educational purposes only. All Apple trademarks, logos, and content are property of Apple Inc.

---

## 🙏 Acknowledgments

- Design inspiration from [Apple.com](https://www.apple.com)
- 3D models and assets for educational demonstration
- React Three Fiber community
- GSAP animation library

---

## 📧 Contact

X: [@da_oceam](https://twitter.com/da_oceam)

Project Link: [https://github.com/yourusername/apple-website](https://github.com/ocreamer888/apple-website)

---

<div align="center">
  Made with ❤️ and ☕
  
  ⭐ Star this repo if you find it helpful!
  
  ---
  
  🌐 [ocreamer.studio](https://ocreamer.studio)
</div>
