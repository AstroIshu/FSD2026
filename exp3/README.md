# Multi-Page SPA with React Router

A modern, full-screen Single Page Application (SPA) built with React and React Router, featuring a Stripe-inspired design aesthetic.

## 🎯 Aim

To create a multi-page SPA using client-side routing with a professional, modern design.

## ✨ Features

- **Client-Side Routing** - Seamless navigation without page reloads using React Router DOM
- **Stripe-Inspired Design** - Professional dark theme with glass-morphism effects
- **Responsive Layout** - Fully responsive design that works on all devices
- **Interactive Components** - Animated charts, progress bars, and hover effects
- **Modern Tech Stack** - Built with React 19, Vite, and React Router DOM 7
<img width="1919" height="1154" alt="Screenshot 2026-01-29 153118" src="https://github.com/user-attachments/assets/0e56f833-37ac-4a00-aa0a-4d0b3ea89e37" />
<img width="1659" height="1153" alt="Screenshot 2026-01-29 153132" src="https://github.com/user-attachments/assets/cb3cf0f9-9dd5-41ec-86a2-afcbbb065857" />
<img width="1919" height="1152" alt="Screenshot 2026-01-29 153141" src="https://github.com/user-attachments/assets/9bdc8987-d27a-41fa-b39a-e235096fdb69" />

## 📄 Pages

### Home (`/`)
- Hero section with welcome message
- Call-to-action buttons linking to Profile and Dashboard
- Clean, centered layout with gradient accents

### Profile (`/profile`)
- Professional avatar with gradient background
- Personal information and contact details
- Skills and interests with interactive tags
- Work experience timeline
- Glass-morphism card design with hover effects

### Dashboard (`/dashboard`)
- **Stats Overview** - 4 animated stat cards showing key metrics
- **Skills Section** - Progress bars for 6 different technologies
- **Learning Progress Chart** - Interactive bar chart showing 6-month progress
- **Recent Activity Feed** - Timeline of recent achievements and activities

### About (`/about`)
- Project information and features
- Technology stack details
- Clean layout with gradient accents

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **React Router DOM 7.13.0** - Client-side routing
- **Vite 7.3.1** - Build tool and dev server
- **CSS3** - Custom styling with modern features

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd exp3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📁 Project Structure

```
exp3/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main app component with routing
│   ├── App.css         # App and navigation styles
│   ├── Profile.jsx     # Profile page component
│   ├── Profile.css     # Profile page styles
│   ├── Dashboard.jsx   # Dashboard page component
│   ├── Dashboard.css   # Dashboard page styles
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0a2540` (Dark Navy)
- **Primary Gradient**: `#6366f1` → `#a855f7` (Indigo to Purple)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `rgba(255, 255, 255, 0.7)` (White with 70% opacity)
- **Borders**: `rgba(255, 255, 255, 0.08)` (Subtle white borders)

### Key Features
- Glass-morphism effects with backdrop blur
- Smooth transitions and hover animations
- Gradient accents on interactive elements
- Professional typography with proper hierarchy
- Responsive grid layouts

## 🧪 Testing Navigation

1. Click on navigation links in the header
2. Use the CTA buttons on the home page
3. Verify smooth page transitions without reloads
4. Test responsive behavior on different screen sizes

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Learning Objectives Achieved

✅ Created multiple React components  
✅ Implemented client-side routing with React Router  
✅ Mapped each component to a specific route  
✅ Tested navigation between pages  
✅ Applied modern design principles  
✅ Built responsive, accessible UI components  

## 👨‍💻 Ishant

Built as part of Full Stack Development coursework.

---
