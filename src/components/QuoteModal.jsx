import { useState } from 'react'
import { X, Phone, CheckCircle2, ShieldCheck, Tag, Send } from 'lucide-react'
import { BUSINESS_INFO, SERVICES_DATA } from '../data/siteData'

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Altamonte Springs, FL',
    service: 'Kitchen Remodeling',
    projectScope: 'Full Remodel',
    timeline: 'Within 2-4 weeks',
    referredBy: '',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submission
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={resetForm}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Licensed Contractor In-Home Estimate</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Request Your Free Project Estimate
          </h3>
          <p className="text-slate-300 text-sm mt-1 max-w-lg">
            No obligation. We evaluate your space in Altamonte Springs or anywhere within 50 miles of Orlando and provide an accurate, transparent proposal.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-cyan-300">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center gap-1.5 hover:text-white font-bold">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Or Call Directly: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Estimate Request Received!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name || 'valued client'}</span>. Hugo Coronel or a lead project supervisor will review your project details and contact you at <span className="font-semibold text-slate-900">{formData.phone || 'your phone'}</span> within 24 business hours to schedule your consultation.
              </p>
              {formData.referredBy && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <Tag className="w-4 h-4 text-emerald-600" />
                  <span>$50 Referral Reward noted for: {formData.referredBy}!</span>
                </div>
              )}
              <div className="pt-6">
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all"
                >
                  Close & Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Special offers banner in form */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-medium">
                  <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Were you referred by a friend or neighbor? They will receive a <strong>$50 cash reward</strong>!</span>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (321) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Email & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service Area / City *
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-slate-50/50"
                  >
                    <option value="Altamonte Springs, FL">Altamonte Springs, FL 32714 (HQ)</option>
                    <option value="Orlando Metro, FL">Orlando & 50-Mile Radius</option>
                    <option value="Clermont, FL">Clermont, FL</option>
                    <option value="Debary, FL">Debary, FL</option>
                    <option value="Apopka, FL">Apopka, FL</option>
                    <option value="Mount Dora, FL">Mount Dora (Montdora), FL</option>
                    <option value="Other Central Florida">Other Central FL Location</option>
                  </select>
                </div>
              </div>

              {/* Service Needed & Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Primary Service Needed *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-slate-50/50"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Whole House Remodel">Whole House Remodeling</option>
                    <option value="Multiple Services">Multiple Remodeling Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Estimated Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-slate-50/50"
                  >
                    <option value="Immediately">Immediately (Ready Now)</option>
                    <option value="Within 2-4 weeks">Within 2 to 4 weeks</option>
                    <option value="1-3 months">Next 1 to 3 months</option>
                    <option value="Planning / Budgeting">Planning / Budgeting Phase</option>
                  </select>
                </div>
              </div>

              {/* Referral Input */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Were you referred by someone? ($50 Cash Referral Reward)
                </label>
                <input
                  type="text"
                  placeholder="Referrer's name or phone number"
                  value={formData.referredBy}
                  onChange={(e) => setFormData({ ...formData, referredBy: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                />
                <p className="text-[11px] text-slate-500">
                  Your friend, family member, or neighbor will receive a $50 cash reward upon your signed project contract.
                </p>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Project Details or Special Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Tell us about dimensions, current conditions, materials you prefer, or your remodeling goals..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-slate-50/50"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Estimate Request</span>
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="sm:w-auto py-3.5 px-6 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm border border-slate-300 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-600" />
                  <span>Direct Call</span>
                </a>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                Privacy Guaranteed • Licensed & Insured Contractor • No Spam Ever
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
