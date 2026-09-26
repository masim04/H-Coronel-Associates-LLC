import { useState } from 'react'
import { 
  Hammer, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Maximize2
} from 'lucide-react'
import { BUSINESS_INFO, SERVICES_DATA } from '../data/siteData'

export default function ServicesPage({ onOpenQuote }) {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES_DATA[0].id)
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <div className="w-full">
      
      {/* PAGE BANNER */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Hammer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full Contractor Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Comprehensive Remodeling & Construction Solutions
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Serving Orlando (+50 miles), Altamonte Springs, Clermont, Debary, Apopka, and Mount Dora with turnkey kitchen, bathroom, drywall, painting, flooring, cabinetry, and carpentry craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK JUMP NAVIGATION BAR */}
      <div className="sticky top-[69px] sm:top-[77px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {SERVICES_DATA.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedServiceId === service.id
                    ? 'bg-slate-900 text-cyan-300 shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* DETAILED SERVICES SECTIONS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 !== 0

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-36 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Service Text Details */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                        Service 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                        {service.title}
                      </h2>
                      <div className="text-sm font-semibold text-cyan-700 mt-1">
                        {service.headline}
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.details}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        What We Provide:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service CTA */}
                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        onClick={onOpenQuote}
                        className="py-3 px-6 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Estimate for {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                      >
                        <Phone className="w-3.5 h-3.5 text-cyan-600" />
                        <span>(321) 948-6358</span>
                      </a>
                    </div>
                  </div>

                  {/* Service Photo Gallery Grid */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-3">
                      {/* Main Featured Photo */}
                      <div
                        onClick={() => setLightboxImage(service.featuredImage)}
                        className="relative h-72 sm:h-88 rounded-2xl overflow-hidden border border-slate-200 shadow-md group cursor-pointer bg-slate-100"
                      >
                        <img
                          src={service.featuredImage}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                        <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-950/80 text-white text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View Full</span>
                        </div>
                      </div>

                      {/* Sub-gallery thumbnails */}
                      {service.gallery && service.gallery.length > 1 && (
                        <div className="grid grid-cols-3 gap-3">
                          {service.gallery.slice(0, 3).map((img, idx) => (
                            <div
                              key={idx}
                              onClick={() => setLightboxImage(img)}
                              className="h-24 sm:h-28 rounded-xl overflow-hidden border border-slate-200 shadow-xs group cursor-pointer bg-slate-100"
                            >
                              <img
                                src={img}
                                alt={`${service.title} example ${idx + 1}`}
                                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </section>

    

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={lightboxImage}
              alt="Full resolution preview"
              className="max-h-[85vh] w-auto rounded-2xl shadow-2xl object-contain"
            />
            <div className="text-center text-xs text-slate-400 mt-2">
              Click anywhere to close preview
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
