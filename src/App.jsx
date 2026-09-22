import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import FloatingCallBar from './components/FloatingCallBar'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import LocationsPage from './pages/LocationsPage'
import GalleryPage from './pages/GalleryPage'
import BlogPage from './pages/BlogPage'

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  const handleOpenQuote = () => setIsQuoteOpen(true)
  const handleCloseQuote = () => setIsQuoteOpen(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
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
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<HomePage onOpenQuote={handleOpenQuote} />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer onOpenQuote={handleOpenQuote} />

        {/* Interactive Quote & Consultation Modal */}
        <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />

        {/* Persistent Floating Quick Call & Quote Bar */}
        <FloatingCallBar onOpenQuote={handleOpenQuote} />

      </div>
    </BrowserRouter>
  )
}
