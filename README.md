# E&M Carpentry - Professional Carpentry Services Website

A modern, responsive React website for E&M Carpentry, showcasing professional carpentry services including custom furniture, cabinetry, kitchen remodeling, and more.

## 🌟 Features

- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Modern UI/UX**: Clean, professional carpentry-themed design with warm, earthy tones
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling
- **Interactive Sections**:
  - Hero section with compelling CTA
  - About section with company information
  - Services showcase with detailed descriptions
  - Portfolio gallery with modal image viewer
  - Contact form with business information
  - Professional footer with quick links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/elvinhatamov/e-mcarpentery.git
cd e-mcarpentery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`
Deploys the app to GitHub Pages. Make sure you have built the app first using `npm run build`.

### `npm test`
Launches the test runner in interactive watch mode.

## 🌐 Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages:

1. Update the `homepage` field in `package.json` if needed:
```json
"homepage": "https://elvinhatamov.github.io/e-mcarpentery"
```

2. Build and deploy:
```bash
npm run deploy
```

This will create a production build and deploy it to the `gh-pages` branch.

### Automatic Deployment

You can also set up GitHub Actions for automatic deployment on push to main branch.

## 🎨 Customization

### Updating Content

- **Company Information**: Edit components in `src/components/`
- **Colors**: Modify CSS variables in component CSS files
- **Images**: Replace Unsplash placeholder images with your own in component files
- **Contact Details**: Update contact information in `Contact.js` and `Footer.js`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.js`
3. Update navigation in `Navigation.js`

## 🖼️ Images

The website uses placeholder images from Unsplash. For production:
1. Replace placeholder images with your own professional photos
2. Optimize images for web (recommended: WebP format, compressed)
3. Store images in `src/images/` or `public/images/`

## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces
- **CSS3**: Modern styling with animations and transitions
- **Google Fonts**: Playfair Display and Montserrat fonts
- **GitHub Pages**: Static site hosting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Alt text for all images
- Focus indicators

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

For questions or support, please contact:
- Email: info@emcarpentry.com
- Phone: (123) 456-7890

---

Made with ❤️ for E&M Carpentry
