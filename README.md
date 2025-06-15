# Akhib Umear - Portfolio Timeline

A beautiful, responsive portfolio website built with React.js, Framer Motion, and TailwindCSS, showcasing my journey as a Full Stack Developer and AI/ML Engineer through an interactive timeline.

## 🚀 Features

- **Interactive Timeline**: Vertical timeline layout with smooth scroll animations
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Tech Stack Badges**: Interactive technology badges with hover effects
- **Expandable Projects**: Click-to-expand project views with detailed information
- **Contact Form**: Functional contact form with form validation
- **Modern UI**: Glassmorphism effects and gradient backgrounds

## 🛠️ Technologies Used

- **Frontend**: React.js 18
- **Animations**: Framer Motion
- **Styling**: TailwindCSS
- **Icons**: React Icons
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Header with navigation and theme toggle
│   ├── Timeline.js        # Main timeline container
│   ├── TimelineItem.js    # Individual timeline items
│   └── Contact.js         # Contact section with form
├── context/
│   └── ThemeContext.js    # Theme management context
├── data/
│   └── timelineData.js    # Timeline content and project data
├── App.js                 # Main application component
├── index.js              # React DOM entry point
└── index.css             # Global styles and TailwindCSS imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd akhib-portfolio-timeline
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🎨 Customization

### Timeline Content

Edit `src/data/timelineData.js` to update timeline content:

```javascript
export const timelineData = [
  {
    id: 1,
    title: "Your Title",
    date: "Date Range",
    description: "Your description",
    tech: ["Technology1", "Technology2"],
    projects: ["Project 1", "Project 2"],
    color: "from-blue-400 to-blue-600"
  },
  // Add more items...
];
```

### Styling

- **Theme Colors**: Update `tailwind.config.js` for custom color schemes
- **Animations**: Modify Framer Motion variants in component files
- **Layout**: Adjust responsive breakpoints and spacing in component classes

### Contact Information

Update contact details in `src/components/Header.js` and `src/components/Contact.js`:

- Email addresses
- Social media links
- Phone numbers
- Location information

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

The theme system automatically detects user preference and provides a toggle for manual switching. Theme preference is saved in localStorage for consistency across sessions.

## 🎯 Performance Features

- **Lazy Loading**: Components load as they enter the viewport
- **Optimized Animations**: Hardware-accelerated animations with Framer Motion
- **Code Splitting**: Automatic code splitting with Create React App
- **Image Optimization**: Responsive images with proper sizing


## 📞 Contact

**Akhib Umear**
- Email: akhibumearshaik@gmail.com

