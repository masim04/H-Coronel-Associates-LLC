import { Gift, CheckCircle2, ArrowRight } from 'lucide-react'
import { SPECIAL_OFFERS } from '../data/siteData'

export default function SpecialOffersBanner({ onOpenQuote }) {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Gift className="w-3.5 h-3.5 text-cyan-600" />
            <span>Exclusive Homeowner Savings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Special Discounts & Rewards
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            We value returning clients and word-of-mouth recommendations throughout Central Florida.
          </p>
        </div>

        {/* 2 Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-cyan-100 hover:border-cyan-400 shadow-lg shadow-slate-200/50 hover:shadow-cyan-500/10 transition-all group flex flex-col justify-between overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                    {offer.badge}
                  </span>
                  {offer.id === 'repeat-client' ? (
                    <span className="text-xl font-extrabold text-cyan-600 bg-cyan-100/60 px-3 py-1 rounded-xl">
                      10% OFF
                    </span>
                  ) : (
                    <span className="text-xl font-extrabold text-emerald-600 bg-emerald-100/60 px-3 py-1 rounded-xl">
                      $50 CASH
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {offer.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-6">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>{offer.terms}</span>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-3 px-5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-cyan-600 text-white transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>{offer.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
