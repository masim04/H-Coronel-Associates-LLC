import { Phone, Calendar } from 'lucide-react'
import { BUSINESS_INFO } from '../data/siteData'

export default function FloatingCallBar({ onOpenQuote }) {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 items-end">
      {/* Floating Call & Quote Buttons */}
      <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md p-1.5 rounded-2xl shadow-2xl border border-slate-700/80">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          aria-label="Call H Coronel & Associates LLC at (321) 948-6358"
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span className="hidden sm:inline">Call (321) 948-6358</span>
          <span className="sm:hidden">Call Now</span>
        </a>

        <button
          onClick={onOpenQuote}
          aria-label="Request a Free Estimate"
          className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-600 transition-all cursor-pointer active:scale-95"
        >
          <Calendar className="w-4 h-4 text-cyan-400" />
          <span>Free Estimate</span>
        </button>
      </div>
    </aside>
  )
}
