import { useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { BUSINESS_INFO } from '../data/siteData'

export default function ContactPage() {
  useEffect(() => {
    // Dynamically load the form embed script if not already present
    const scriptSrc = 'https://links.magnivodigital.com/js/form_embed.js'
    const existing = document.querySelector(`script[src="${scriptSrc}"]`)
    if (!existing) {
      const script = document.createElement('script')
      script.src = scriptSrc
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Get In Touch With H Coronel & Associates LLC</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Request Your Free In-Home Estimate & Consultation
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Serving Altamonte Springs, Orlando, Clermont, Debary, Apopka, Mount Dora, and all Central Florida communities within 50 miles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section with Info & Embedded Form */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Info & Benefits */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Contact Information
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ready to start your kitchen, bathroom, drywall, painting, or flooring project? Reach out directly or fill out our project consultation form.
                </p>

                <div className="space-y-5 pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-cyan-50/50 border border-slate-200 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Call Us Anytime</span>
                      <p className="text-lg font-extrabold text-slate-900 group-hover:text-cyan-700 transition-colors">
                        {BUSINESS_INFO.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-cyan-50/50 border border-slate-200 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Us</span>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                        {BUSINESS_INFO.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Headquarters & Service Area</span>
                      <p className="text-sm font-bold text-slate-900">
                        {BUSINESS_INFO.address}
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Serving Orlando + 50 Mile Radius
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Business Hours</span>
                      <p className="text-sm font-bold text-slate-900">
                        Mon – Sat: 7:00 AM – 6:00 PM
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect card */}
              <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-white">What Happens Next?</h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Rapid review of your project details within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Free on-site consultation with Hugo Coronel</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Transparent, fixed-scope estimate with zero hidden fees</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Embedded Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                    Secure Project Form
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-2">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Please provide your contact details and project requirements below.
                  </p>
                </div>

                {/* Embedded Form Iframe */}
                <div className="w-full min-h-[907px] relative">
                  <iframe
                    src="https://links.magnivodigital.com/widget/form/cTeiK7OUANZNBqT293wl"
                    style={{ width: '100%', height: '907px', border: 'none', borderRadius: '8px' }}
                    id="inline-cTeiK7OUANZNBqT293wl"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="website contact us form"
                    data-height="907"
                    data-layout-iframe-id="inline-cTeiK7OUANZNBqT293wl"
                    data-form-id="cTeiK7OUANZNBqT293wl"
                    data-cookie-consent="true"
                    data-cookie-consent-provider="auto"
                    title="website contact us form"
                  >
                  </iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
