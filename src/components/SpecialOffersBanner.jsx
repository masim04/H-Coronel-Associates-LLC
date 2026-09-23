import { Gift, CheckCircle2, ArrowRight } from 'lucide-react'
import { SPECIAL_OFFERS } from '../data/siteData'

export default function SpecialOffersBanner({ onOpenQuote }) {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Gift className="w-3.5 h-3.5 text-emerald-600" />
            <span>Client Loyalty Reward</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            $50 Referral Reward Program
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            We value word-of-mouth recommendations from satisfied homeowners throughout Central Florida.
          </p>
        </div>

        {/* Offer Card */}
        <div className="max-w-2xl mx-auto">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 hover:border-emerald-400 shadow-lg shadow-slate-200/50 hover:shadow-emerald-500/10 transition-all group flex flex-col justify-between overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-emerald-400/15 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {offer.badge}
                  </span>
                  <span className="text-xl font-extrabold text-emerald-600 bg-emerald-100/70 px-3.5 py-1 rounded-xl">
                    $50 CASH
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  {offer.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-6">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{offer.terms}</span>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-emerald-600 text-white transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
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
