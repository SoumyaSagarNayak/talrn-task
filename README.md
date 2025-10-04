# Talrn Clone - iOS Developer Hiring Platform

A fully responsive, modern React website inspired by Talrn.com. This platform connects companies with pre-vetted iOS developers from around the world.

## Features

- **Home Page**: Hero section with email input, featured developer cards, stats, and client testimonials
- **Why Page**: Benefits of using Talrn, process overview, and statistics
- **Industries Page**: Grid showcase of industries served with icons and descriptions
- **Find iOS Dev Page**: Search and filter interface to browse developer profiles by name, country, and experience
- **Apply as Vendor Page**: Application form for developers to join the platform
- **Hire iOS Dev Page**: Request form for companies to hire developers
- **Login/Register Page**: Authentication UI with toggle between login and registration

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Design System

### Colors
- Primary: `#4169E1` (Royal Blue)
- Secondary: `#0F172A` (Dark Navy)
- Background: `#FFFFFF` (White)
- Accent: Light gray for cards and shadows

### Typography
- Font Family: Inter
- Weights: 400, 500, 600, 700, 800, 900

### Components
- Rounded card corners with soft shadows
- Smooth hover animations and transitions
- Mobile-responsive flex/grid layouts

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd talrn-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## Project Structure

```
talrn-clone/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Banner.jsx      # Top announcement banner
│   │   ├── DeveloperCard.jsx  # Developer profile card
│   │   ├── Footer.jsx      # Site footer
│   │   ├── Header.jsx      # Navigation header
│   │   └── HireModal.jsx   # Hire developer modal
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── Why.jsx         # Why Talrn page
│   │   ├── Industries.jsx  # Industries page
│   │   ├── FindIOSDev.jsx  # Developer search page
│   │   ├── ApplyAsVendor.jsx  # Developer application
│   │   ├── HireIOSDev.jsx  # Hire form page
│   │   └── Login.jsx       # Login/Register page
│   ├── data/               # Mock data
│   │   └── developers.json # Sample developer profiles
│   ├── App.jsx             # Main app component with routing
│   ├── index.css           # Global styles and Tailwind imports
│   └── main.jsx            # App entry point
├── public/                 # Static assets
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

**Or use Vercel Dashboard:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

**Or use Netlify Dashboard:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

## Mock Data

The project includes 15 sample developer profiles in `src/data/developers.json` with:
- Names and titles
- Company experience
- Technical skills (Swift, UIKit, SwiftUI, etc.)
- Years of experience
- Countries
- Profile images (from Pexels)

## Functionality

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Smooth Animations**: Page transitions and hover effects using Framer Motion
- **Search & Filter**: Filter developers by name, skills, country, and experience level
- **Form Validation**: Client-side validation for all forms
- **Modal Interactions**: Hire modal with email capture
- **Mobile Menu**: Collapsible navigation for mobile devices

## Accessibility

- ARIA labels for interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Color contrast ratios meet WCAG standards
- Alt text for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## License

This project is for educational purposes only.

## Acknowledgments

- Design inspired by [Talrn.com](https://talrn.com)
- Stock photos from [Pexels](https://pexels.com)
- Icons from [Lucide](https://lucide.dev)
