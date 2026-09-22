import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Shield, Star, ChevronRight, Tag } from 'lucide-react'
import { BUSINESS_INFO, SERVICES_DATA, LOCATIONS_DATA } from '../data/siteData'

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      {/* Pre-Footer Special Offers Callout Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border border-cyan-800/40 p-8 md:p-10 shadow-2xl overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-700/60 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5" />
                <span>Exclusive Client Savings</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                10% Off Repeat Business & $50 Referral Cash Reward
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Whether you’re embarking on your second home remodel or referring a friend or neighbor in Central Florida, H Coronel & Associates LLC rewards your loyalty.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={onOpenQuote}
                className="w-full py-3.5 px-6 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-cyan-500/25 transition-all text-center cursor-pointer"
              >
                Claim Offer & Free Estimate
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3.5 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call (321) 948-6358</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
                <img
                  src={BUSINESS_INFO.logo}
                  alt={BUSINESS_INFO.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              H Coronel & Associates LLC is your trusted Central Florida general contractor. Specializing in turnkey kitchen & bathroom remodeling, drywall, interior & exterior painting, custom cabinetry, flooring, and finished carpentry.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>5-Star Rated Contractor</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase text-xs text-cyan-400">
              Contractor Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services#${srv.id}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase text-xs text-cyan-400">
              Coverage Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              {LOCATIONS_DATA.map((loc) => (
                <li key={loc.id}>
                  <Link
                    to={`/locations#${loc.id}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{loc.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-xs text-slate-500 font-medium">
                + All areas within 50 miles of Orlando
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase text-xs text-cyan-400">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-start gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Call Us Anytime</div>
                  <div className="font-bold text-white text-base">{BUSINESS_INFO.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email Inquiries</div>
                  <div className="font-semibold text-slate-300 break-all">{BUSINESS_INFO.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Headquarters</div>
                  <div className="font-medium text-slate-300">{BUSINESS_INFO.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 text-slate-400">
                  <Clock className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Operating Hours</div>
                  <div className="text-xs text-slate-400 leading-tight">{BUSINESS_INFO.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Registered General Contractor in Florida.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">About Hugo Coronel</Link>
            <Link to="/services" className="hover:text-slate-300 transition-colors">Services</Link>
            <Link to="/locations" className="hover:text-slate-300 transition-colors">Service Areas</Link>
            <Link to="/gallery" className="hover:text-slate-300 transition-colors">Real Work Gallery</Link>
            <Link to="/blog" className="hover:text-slate-300 transition-colors">Remodeling Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
