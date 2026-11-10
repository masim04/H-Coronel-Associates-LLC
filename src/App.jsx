import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import LocationsPage from './pages/LocationsPage'
import GalleryPage from './pages/GalleryPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function MainApp() {
  const navigate = useNavigate()
  const handleOpenQuote = () => {
    navigate('/contact')
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      {/* Persistent Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Content Router */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />
          <Route path="/about" element={<AboutPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/locations" element={<LocationsPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/gallery" element={<GalleryPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/blog" element={<BlogPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<HomePage onOpenQuote={handleOpenQuote} />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer onOpenQuote={handleOpenQuote} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainApp />
    </BrowserRouter>
  )
}
