import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, Mail, MapPin, Menu, X, Tag, ShieldCheck, ChevronRight } from 'lucide-react'
import { BUSINESS_INFO } from '../data/siteData'

export default function Header({ onOpenQuote }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Service Areas', path: '/locations' },
    { name: 'Project Gallery', path: '/gallery' },
    { name: 'Blog & Tips', path: '/blog' }
  ]

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 border-b border-slate-800 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>CALL US: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{BUSINESS_INFO.address} • Serving Orlando + 50 Mi</span>
            </span>
          </div>

          {/* Promotion & Trust */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="flex items-center gap-1 bg-cyan-950/80 text-cyan-300 border border-cyan-700/50 px-2.5 py-0.5 rounded-full text-xs font-medium">
              <Tag className="w-3.5 h-3.5 text-cyan-400" />
              <span>10% Off Repeat • $50 Referral</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-slate-300 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-shadow duration-300 border-b border-slate-200 ${
          isScrolled ? 'shadow-lg shadow-slate-900/5 py-2' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 group">
            <img
              src={BUSINESS_INFO.logo}
              alt={BUSINESS_INFO.name}
              className="h-11 sm:h-14 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-700 bg-cyan-50 font-bold'
                      : 'text-slate-700 hover:text-cyan-700 hover:bg-slate-100/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span>(321) 948-6358</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all active:scale-98 cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="sm:hidden bg-cyan-600 text-white text-xs font-bold px-3 py-2 rounded-lg"
            >
              Free Estimate
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl text-base font-semibold ${
                    isActive
                      ? 'bg-cyan-50 text-cyan-700 font-bold border-l-4 border-cyan-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call (321) 948-6358</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onOpenQuote()
                }}
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-xl font-bold text-sm shadow-md shadow-cyan-500/20"
              >
                Request Free In-Home Estimate
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
