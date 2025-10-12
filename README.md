# React Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations and an interactive design.

## Features

- Responsive design that works on all devices
- Smooth animations and transitions
- Interactive contact form with EmailJS integration
- Portfolio showcase section
- Firebase authentication and database integration
- Admin dashboard for portfolio management
- Interactive map using Leaflet
- Modern UI with SCSS styling

## Technologies Used

- **React 18** - Modern React with hooks
- **React Router** - For navigation
- **SCSS/Sass** - For styling
- **Firebase** - Authentication and database
- **EmailJS** - Contact form functionality
- **Leaflet** - Interactive maps
- **FontAwesome** - Icons
- **GSAP** - Animations
- **Animate.css** - CSS animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kitsakisGk/react-portfolio.git
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase (optional):
   - Create a Firebase project at https://firebase.google.com
   - Copy your Firebase configuration
   - Update `src/firebase.js` with your credentials

4. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to [Netlify](https://netlify.com)

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## License

MIT License - feel free to use this project for your own portfolio!
