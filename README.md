# Giorgos Kitsakis - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Data Engineer and my expertise in AI/ML, ETL pipelines, and full-stack development.

**Live Site:** [https://kitsakisgk.github.io/Kitsakis-Georgios-Portfolio](https://kitsakisgk.github.io/Kitsakis-Georgios-Portfolio)

## Features

- **Animated 3D Cube**: Interactive spinning cube with technology icons on the home and contact pages
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean design with smooth animations and transitions
- **Portfolio Showcase**: Displays my key projects including BloodCall, Activity Recognition, and FreePass
- **Contact Form**: Integrated contact form for easy communication
- **About Me Section**: Comprehensive information about my skills, experience, education, and awards

## Technologies Used

- **React.js** - Frontend framework
- **SCSS** - Styling with advanced CSS features
- **React Router** - Navigation and routing
- **EmailJS** - Contact form functionality
- **Font Awesome** - Icons
- **React Loaders** - Loading animations
- **GitHub Pages** - Free hosting

## Color Scheme

- Primary: Green (#00A86B) - Data & Growth
- Accent: Orange (#FF6B35) - Energy & Creativity
- Background: Dark theme with gradient effects

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kitsakisGk/Kitsakis-Georgios-Portfolio.git
cd Kitsakis-Georgios-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## Deployment to GitHub Pages

### Initial Setup (Already Done)

The site is already deployed! But here's what was done:

1. **Installed gh-pages package:**
```bash
npm install --save-dev gh-pages
```

2. **Configured package.json** with:
```json
"homepage": "https://kitsakisgk.github.io/Kitsakis-Georgios-Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. **Fixed React Router** in `src/index.js`:
```javascript
<BrowserRouter basename="/Kitsakis-Georgios-Portfolio">
```

4. **Deployed:**
```bash
npm run deploy
```

---

## How to Update Your Live Site

### Using PowerShell / Command Prompt / Terminal

Whenever you make changes to your portfolio and want to update the live site:

```powershell
# 1. Navigate to your project folder
cd "c:\Users\admin\OneDrive\Υπολογιστής\Γιωργης Projects\Portfolio\react-portfolio"

# 2. Save your changes to git
git add .
git commit -m "Describe your changes here"
git push origin master:main

# 3. Deploy to live site (this updates the website)
npm run deploy
```

**Wait 1-2 minutes** after running `npm run deploy` for changes to appear on the live site.

---

## Quick Command Reference

| Task | Command |
|------|---------|
| **Test locally** | `npm start` |
| **Build for production** | `npm run build` |
| **Deploy changes to live site** | `npm run deploy` |
| **Check live site** | https://kitsakisgk.github.io/Kitsakis-Georgios-Portfolio |
| **Save to GitHub** | `git add . && git commit -m "message" && git push origin master:main` |

---

## Common Update Workflow

### Scenario 1: Fixing a typo or updating content

```bash
# 1. Make your changes in the code
# 2. Test locally
npm start

# 3. Deploy to live site
npm run deploy
```

### Scenario 2: Adding new projects or features

```bash
# 1. Make your changes in the code
# 2. Test locally
npm start

# 3. Save to GitHub
git add .
git commit -m "Add new project to portfolio"
git push origin master:main

# 4. Deploy to live site
npm run deploy
```

---

## Project Structure

```
src/
├── components/
│   ├── Home/          # Landing page with animated cube
│   ├── About/         # About me section with skills and experience
│   ├── Portfolio/     # Projects showcase
│   ├── Contact/       # Contact form and information
│   ├── Sidebar/       # Navigation sidebar
│   └── Layout/        # Main layout wrapper
├── assets/            # Images and static files
└── App.js            # Main application component
```

---

## Contact

- **Email**: kitsakisgk@gmail.com
- **LinkedIn**: [Georgios Kitsakis](https://www.linkedin.com/in/georgios-kitsakis-gr/)
- **GitHub**: [kitsakisGk](https://github.com/kitsakisGk)
- **Phone**: +30 6985774053

---

## License

This project is open source and available under the MIT License.

---

## Troubleshooting

### Site shows blank/black page
- Make sure `basename="/Kitsakis-Georgios-Portfolio"` is set in `src/index.js`
- Clear browser cache and hard refresh (Ctrl + Shift + R)

### Changes not appearing after deploy
- Wait 2-3 minutes for GitHub Pages to update
- Clear browser cache
- Check if deployment succeeded: `npm run deploy` should end with "Published"

### Development server won't start
- Make sure port 3000 is not already in use
- Try `npm install` again
- Delete `node_modules` folder and run `npm install`

---

Built with React and passion for clean code.
