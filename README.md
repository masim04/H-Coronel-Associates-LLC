# H Coronel & Associates LLC — Official Website

> **Premier General Contractor & Home Remodeling in Central Florida**  
> Serving Orlando (+ 50-mile radius), Altamonte Springs, Clermont, Debary, Apopka, and Mount Dora.


## 🏗️ About The Project

This repository contains the complete, modern, high-performance web application for **H Coronel & Associates LLC**, a licensed and insured general contractor headquartered in **Altamonte Springs, FL 32714**.

The application is built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router DOM**, designed with rich aesthetics (navy/cyan brand palette, glassmorphism, micro-animations, and responsive layouts). It showcases authentic on-site craftsmanship, genuine before-and-after project comparisons, filterable photo galleries, and streamlined quote request workflows.

---

## 🌟 Key Features

- **Multi-Page Routing**: Seamless navigation across 6 distinct pages:
  - **Home (`/`)**: Hero banner, special offers callouts, service cards with *"Click here to view more"*, interactive Before & After slider, location cards with *"Click here to view more"*, customer reviews, and high-converting CTA.
  - **About Us (`/about`)**: Story of master contractor Hugo Coronel, core values, on-site action photos, and the 4-step renovation process.
  - **Services (`/services`)**: In-depth breakdowns, specifications, and photo galleries for all 7 core services.
  - **Service Areas (`/locations`)**: Interactive 50-mile ZIP code radius checker and regional guides for Orlando, Altamonte Springs, Clermont, Debary, Apopka, and Mount Dora.
  - **Project Gallery (`/gallery`)**: Filterable portfolio (All, Kitchen, Bathroom, Drywall, Flooring, Craftsmanship) with full-screen Lightbox modal.
  - **Blog & Guides (`/blog`)**: Authentic Florida home improvement articles (waterproofing, kitchen ROI, drywall leaks, exterior painting) with an interactive modal reader.
- **Interactive Before & After Slider**: Touch- and mouse-draggable split-screen slider comparing real construction phases (drywall framing to finished archway, dated bathtub to walk-in porcelain shower).
- **Interactive Free Estimate Modal**: Multi-step project inquiry form with service selection, location picker, timeline estimator, and automatic 10% repeat discount / referral claim.
- **Floating Call & Quote Bar**: Quick one-tap phone call (`(321) 948-6358`) and estimate request buttons for mobile and desktop users.
- **Special Offers & Loyalty Rewards**:
  - **10% OFF for Repeat Business**
  - **$50 Referral Cash Reward**
- **100% Authentic Content**: Zero Lorem Ipsum; all text, service features, and building guidelines are tailored specifically for Central Florida homeowners.

---

## 🛠️ Core Services Covered

1. **Kitchen Remodeling** — Custom shaker cabinetry, quartz & marble waterfall islands, backsplashes, and open-concept reconfigurations.
2. **Bathroom Remodeling** — Spa-grade walk-in tile showers, frameless glass doors, freestanding soaking tubs, and RedGard waterproofing.
3. **Drywall & Structural Framing** — Metal/wood stud framing, demolition, drywall hanging, taping, 3-coat mudding, and Level 5 smooth finishes.
4. **Painting (Exterior + Interior)** — Florida UV/mildew-resistant exterior coatings and premium low-VOC interior paints.
5. **Flooring Installation** — Large-format porcelain tile, natural travertine pool decks, luxury vinyl plank (LVP), and pebble mosaics.
6. **Custom Cabinets & Vanities** — Solid wood shaker cabinets, pantry storage, floating vanities, and soft-close hardware.
7. **Finished Carpentry** — Architectural crown moulding, 5-1/4" baseboards, window casings, custom archways, and built-in niches.

---

## 📍 Business & Contact Details

- **Company Name**: H Coronel & Associates LLC
- **Business Type**: Licensed & Insured General Contractor
- **Headquarters**: Altamonte Springs, FL 32714
- **Phone**: [(321) 948-6358](tel:3219486358)
- **Email**: [hugocoronel@att.net](mailto:hugocoronel@att.net)
- **Operating Hours**: Monday – Saturday: 7:00 AM – 6:00 PM | Sunday: By Appointment
- **Service Radius**: Orlando + 50 Miles (Altamonte Springs, Clermont, Debary, Apopka, Mount Dora, etc.)

---

## 💻 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` and glassmorphism utilities
- **Routing**: [React Router DOM](https://reactrouter.com/) (v7)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts (Plus Jakarta Sans & Outfit)](https://fonts.google.com/)
- **Linting**: [ESLint](https://eslint.org/)

---

## 📂 Project Structure

```text
H-Coronel-LLC/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Brand logo and authentic project photos
│   │   ├── logo.png            # Official company logo
│   │   ├── image4.jpeg - image37.jpeg  # Genuine project gallery photos
│   │   └── ...
│   ├── components/             # Reusable UI components
│   │   ├── BeforeAfterSlider.jsx # Interactive before/after comparison slider
│   │   ├── FloatingCallBar.jsx   # Sticky mobile & desktop quick-call bar
│   │   ├── Footer.jsx            # Detailed footer with links & contact info
│   │   ├── Header.jsx            # Announcement bar & navigation menu
│   │   ├── QuoteModal.jsx        # Free estimate inquiry & discount modal
│   │   ├── ScrollToTop.jsx       # Route change scroll reset
│   │   └── SpecialOffersBanner.jsx # 10% repeat & $50 referral callout
│   ├── data/
│   │   └── siteData.js           # Centralized business info, services, areas, blog & gallery
│   ├── pages/
│   │   ├── HomePage.jsx          # Hero, preview cards, testimonials, CTA
│   │   ├── AboutPage.jsx         # Hugo Coronel background & 4-step workflow
│   │   ├── ServicesPage.jsx      # Deep dives for all 7 contractor services
│   │   ├── LocationsPage.jsx     # Central FL areas & interactive ZIP checker
│   │   ├── GalleryPage.jsx       # Filterable 25+ photo portfolio & lightbox
│   │   └── BlogPage.jsx          # 4 Florida remodeling guides & reader modal
│   ├── App.css
│   ├── App.jsx                   # Main layout & React Router configuration
│   ├── index.css                 # Tailwind CSS v4 imports & utilities
│   └── main.jsx                  # Application entry point
├── index.html                  # SEO metadata, OpenGraph tags, Google Fonts
├── package.json                # Dependencies and build scripts
├── vite.config.js              # Vite configuration with Tailwind CSS plugin
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/H-Coronel-LLC.git
   cd H-Coronel-LLC
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Development Server

Run the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

### Code Quality & Linting

Validate code correctness and formatting with ESLint:

```bash
npm run lint
```

### Production Build

Compile and bundle the application for production:

```bash
npm run build
```

The optimized static output will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

The project can be deployed seamlessly to any static hosting service:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
Connect your GitHub repository to Netlify and configure:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- For client-side routing on Netlify, add a `_redirects` file in `public/` containing: `/* /index.html 200`.

---

## 📄 License & Ownership

Copyright &copy; 2026 **H Coronel & Associates LLC**. All Rights Reserved.  
Licensed General Contractor in the State of Florida.
