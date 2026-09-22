import { useState } from 'react'
import { 
  MapPin,
  Phone, 
  CheckCircle2, 
  Navigation, 
  ArrowRight,
  Building2
} from 'lucide-react'
import { BUSINESS_INFO, LOCATIONS_DATA } from '../data/siteData'

export default function LocationsPage({ onOpenQuote }) {
  const [zipQuery, setZipQuery] = useState('')
  const [zipResult, setZipResult] = useState(null)

  const handleZipCheck = (e) => {
    e.preventDefault()
    if (!zipQuery.trim()) return

    // Central Florida common zip prefixes: 327, 328, 347, 321, 338
    const cleaned = zipQuery.trim()
    const isLocal = cleaned.startsWith('327') || cleaned.startsWith('328') || cleaned.startsWith('347') || cleaned.startsWith('321') || cleaned.startsWith('338')

    if (isLocal || cleaned.toLowerCase().includes('orlando') || cleaned.toLowerCase().includes('altamonte') || cleaned.toLowerCase().includes('clermont') || cleaned.toLowerCase().includes('debary') || cleaned.toLowerCase().includes('apopka') || cleaned.toLowerCase().includes('dora')) {
      setZipResult({
        covered: true,
        message: `Great news! "${cleaned}" is well within our 50-mile service radius. We offer free in-home consultations and rapid dispatch to your area.`
      })
    } else {
      setZipResult({
        covered: true,
        message: `We frequently travel across Central Florida for remodeling projects! Contact us directly at (321) 948-6358 to verify your exact neighborhood.`
      })
    }
  }

  return (
    <div className="w-full">
      
      {/* PAGE BANNER */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Service Area Hub</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Proudly Serving Altamonte Springs & Orlando + 50 Miles
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Based at Altamonte Springs, FL 32714, we deliver licensed contractor services across Seminole, Orange, Lake, and Volusia counties.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE RADIUS CHECKER TOOL */}
      <section className="bg-white py-10 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
              <Navigation className="w-5 h-5 text-cyan-600" />
              <span>Check If We Service Your ZIP Code or City</span>
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-5">
              Enter your Central Florida ZIP code (e.g. 32714, 32801, 34711, 32713, 32703, 32757) to verify immediate coverage.
            </p>

            <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter ZIP code or city name..."
                value={zipQuery}
                onChange={(e) => setZipQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-cyan-300 font-bold text-sm rounded-xl transition-all cursor-pointer"
              >
                Verify Area
              </button>
            </form>

            {zipResult && (
              <div className="mt-4 p-4 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs sm:text-sm font-medium animate-in fade-in duration-200 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>{zipResult.message}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DETAILED REGIONAL DIRECTORY */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Primary Communities We Serve
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Explore our local expertise in each of our key service corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOCATIONS_DATA.map((loc) => (
              <div
                key={loc.id}
                id={loc.id}
                className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                      {loc.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {loc.zip}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {loc.name}
                  </h3>

                  <div className="text-xs font-bold text-cyan-700 mb-3">
                    {loc.headline}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {loc.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Local Advantages:
                    </h4>
                    {loc.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-cyan-600 hover:text-white text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Schedule Free Estimate in {loc.name.split(',')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Call (321) 948-6358</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEADQUARTERS HIGHLIGHT BOX */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Altamonte Springs, FL 32714</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Centrally Headquartered for Rapid Dispatch
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Because we are based in Altamonte Springs at the intersection of I-4, SR 436, and SR 414, our work vans can be at your residence in Orlando, Clermont, Debary, Apopka, or Mount Dora quickly for on-site assessments and scheduled construction.
                </p>
                <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-cyan-300 font-semibold pt-2">
                  <span>✓ 10% Repeat Customer Discount</span>
                  <span>✓ $50 Referral Reward</span>
                  <span>✓ Licensed Florida Contractor</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="py-4 px-6 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-center shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (321) 948-6358</span>
                </a>
                <button
                  onClick={onOpenQuote}
                  className="py-4 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-center border border-slate-700 transition-all cursor-pointer"
                >
                  Request In-Home Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
