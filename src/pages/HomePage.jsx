import { Link } from 'react-router-dom'
import { 
  Phone, 
  ChevronRight, 
  ShieldCheck, 
  Star, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Clock, 
  Sparkles, 
  ArrowRight,
  Hammer,
  BadgeCheck
} from 'lucide-react'
import { BUSINESS_INFO, SERVICES_DATA, LOCATIONS_DATA, TESTIMONIALS } from '../data/siteData'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import SpecialOffersBanner from '../components/SpecialOffersBanner'

// Action photos
import contractorWork1 from '../assets/image32.jpeg'
import contractorWork2 from '../assets/image29.jpeg'
import kitchenHero from '../assets/image8.jpeg'
import bathHero from '../assets/image37.jpeg'

export default function HomePage({ onOpenQuote }) {
  // Select top 6 preview services for home
  const previewServices = SERVICES_DATA.slice(0, 6)

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] bg-slate-950 text-white flex items-center overflow-hidden">
        {/* Background Layer with Dark Gradient & Atmospheric Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-950/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105"
          style={{ backgroundImage: `url(${kitchenHero})` }}
        />

        {/* Ambient Teal Radial Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none z-10" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-semibold shadow-inner">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Licensed & Insured General Contractor • Altamonte Springs, FL</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Master Quality Remodeling in <span className="text-gradient">Central Florida</span>
              </h1>

              {/* Subheadline with Authentic Details */}
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed">
                Transforming residential living spaces across <strong className="text-white font-bold">Orlando (+50 miles), Altamonte Springs, Clermont, Debary, Apopka & Mount Dora</strong>. We specialize in custom kitchens, luxury bathrooms, framing, drywall, painting, and architectural carpentry.
              </p>

              {/* Highlight Perks Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 p-2.5 rounded-xl">
                  <BadgeCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>10% Repeat Client Off</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 p-2.5 rounded-xl">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>$50 Referral Reward</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 p-2.5 rounded-xl col-span-2 sm:col-span-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                  <span>5-Star Craftsmanship</span>
                </div>
              </div>

              {/* Buttons: Direct Call & Free Estimate */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-extrabold text-base shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-5 h-5 text-slate-950" />
                  <span>CALL US: {BUSINESS_INFO.phoneDisplay}</span>
                </a>

                <button
                  onClick={onOpenQuote}
                  className="flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-base border border-slate-700 hover:border-cyan-500/50 shadow-md transition-all cursor-pointer"
                >
                  <span>Get Free Estimate</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Altamonte Springs, FL 32714 • Serving All Within 50 Miles</span>
              </div>
            </div>

            {/* Right Column: Hero Visual Card with Real Project Teaser */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-900">
                <img
                  src={bathHero}
                  alt="H Coronel & Associates Luxury Master Bathroom Remodel"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
                
                {/* Floating On-Image Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      Authentic Project Spotlight
                    </span>
                    <span className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> 5.0
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    Master Ensuite with Walk-In Shower & Custom Shaker Vanity
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Altamonte Springs / Greater Orlando Area
                  </div>
                </div>
              </div>

              {/* Floating Stat Widget */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white text-slate-900 p-4 rounded-2xl shadow-xl border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center font-extrabold text-lg">
                  15+
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Experience</div>
                  <div className="text-sm font-extrabold text-slate-900">Years of Remodeling</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS & CREDENTIALS STRIP */}
      <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {BUSINESS_INFO.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-2xl sm:text-4xl font-extrabold text-cyan-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS BANNER */}
      <SpecialOffersBanner onOpenQuote={onOpenQuote} />

      {/* SERVICES PREVIEW SECTION (WITH BUTTONS CLICK HERE TO VIEW MORE) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Hammer className="w-3.5 h-3.5 text-cyan-600" />
              <span>Full Contractor Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Craftsmanship Tailored to Every Room
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              From structural walls and electrical plumbing relocations to finish carpentry, H Coronel & Associates LLC handles your renovation from concept to immaculate completion.
            </p>
          </div>

          {/* Grid of Service Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Photo */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={service.featuredImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded-md backdrop-blur-xs">
                        {service.title}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Features list bullet points */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Explicit Click Here To View More Button as requested */}
                <div className="p-6 pt-0 border-t border-slate-100">
                  <Link
                    to={`/services#${service.id}`}
                    className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-800 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group-hover:bg-cyan-600 group-hover:text-white"
                  >
                    <span>Click here to view more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Link */}
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Explore All 7 Contractor Services</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* TRANSFORMATION SPOTLIGHT: INTERACTIVE BEFORE / AFTER SLIDER */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Verified Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              See the Quality for Yourself: Before & After
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Drag the interactive slider below to inspect our actual structural framing, drywall restoration, and luxury bathroom remodels.
            </p>
          </div>

          <BeforeAfterSlider />

          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 font-bold text-sm group"
            >
              <span>View our full gallery of 20+ completed projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* CONTRACTOR IN ACTION (AUTHENTICITY & TRUST) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Hammer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Genuine Hands-On Craftsmanship</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                No Subcontractor Runarounds. Direct Owner Supervision on Every Site.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Led by master contractor <strong className="text-white">Hugo Coronel</strong>, our crews do not cut corners. Whether we are applying RedGard waterproofing membranes behind shower tiles or laser-leveling 24x48 porcelain slabs, our team is on the job site daily ensuring exact execution.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Strict Moisture Protection</strong>
                    <span className="text-slate-400 text-xs">High-humidity engineering built specifically for Florida climate.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Clean & Respectful Job Sites</strong>
                    <span className="text-slate-400 text-xs">We mask your floors, control dust, and clean daily before packing up.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Transparent In-Home Quotes</strong>
                    <span className="text-slate-400 text-xs">Detailed material breakdowns, clear milestones, and zero hidden fees.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hugo: {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <Link
                  to="/about"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
                >
                  Read Our Story
                </Link>
              </div>
            </div>

            {/* Actual Photos of Hugo at work */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
                  <img
                    src={contractorWork1}
                    alt="Hugo Coronel installing large porcelain wall tiles with precision leveling clips"
                    className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300">
                  <span className="text-cyan-400 font-bold block">Precision Tile Spacing</span>
                  Active installation with leveling wedges for zero lippage.
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
                  <img
                    src={contractorWork2}
                    alt="Hugo Coronel framing wall studs and electrical rough-in"
                    className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300">
                  <span className="text-cyan-400 font-bold block">Structural Framing</span>
                  Demolition to studs and pipe rough-in on site.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LOCATIONS PREVIEW SECTION (WITH BUTTONS CLICK HERE TO VIEW MORE) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-600" />
              <span>Central Florida Service Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Serving Orlando & Surrounding 50-Mile Radius
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Headquartered at Altamonte Springs, FL 32714, we mobilize experienced remodeling teams across Central Florida.
            </p>
          </div>

          {/* Cards for key locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS_DATA.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
                      {loc.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {loc.zip}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                    {loc.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {loc.description}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                    {loc.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explicit Click here to view more button */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={`/locations#${loc.id}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-2 group-hover:bg-cyan-600 group-hover:text-white"
                  >
                    <span>Click here to view more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              <span>View All Service Areas & Radius Details</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* REAL HOMEOWNER TESTIMONIALS */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
              <span>Real Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Homeowners Across Central FL
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Read what your neighbors in Altamonte Springs, Orlando, Clermont, and Debary say about our remodeling standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((test) => (
              <div
                key={test.id}
                className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{test.name}</div>
                    <div className="text-xs text-cyan-700 font-medium">{test.location}</div>
                  </div>
                  <span className="text-[11px] text-slate-400">{test.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL HIGH-CONVERTING CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ready for Your In-Home Consultation?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let’s Build Something Exceptional Together
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Contact Hugo Coronel today for an honest, transparent estimate on your kitchen, bathroom, drywall, or complete home renovation. Don’t forget to mention our  <strong className="text-emerald-400">$50 referral reward</strong>!
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-base shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              <span>CALL (321) 948-6358</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Free In-Home Estimate</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          <div className="pt-4 text-xs text-slate-400">
            Altamonte Springs, FL 32714 • Licensed & Insured Contractor • hugocoronel@att.net
          </div>
        </div>
      </section>

    </div>
  )
}
