import { 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Tag
} from 'lucide-react'
import { BUSINESS_INFO } from '../data/siteData'

// Authentic photos
import hugoTile from '../assets/image32.jpeg'
import hugoPlumbing from '../assets/image29.jpeg'
import finishedBath from '../assets/image22.jpeg'
import finishedKitchen from '../assets/image8.jpeg'

export default function AboutPage({ onOpenQuote }) {
  const steps = [
    {
      num: "01",
      title: "In-Home Assessment & Concept",
      desc: "Hugo Coronel personally meets with you at your Central Florida residence to review layouts, structural load walls, plumbing requirements, and aesthetic desires."
    },
    {
      num: "02",
      title: "Transparent, Fixed-Scope Estimate",
      desc: "No vague pricing. You receive a clear breakdown of materials, labor, timelines, and discounts—including our 10% repeat customer discount and referral rewards."
    },
    {
      num: "03",
      title: "Direct Owner-Led Craftsmanship",
      desc: "Our skilled tradesmen execute every task—framing, drywall, RedGard waterproofing, tile leveling, and carpentry—with obsessive attention to detail."
    },
    {
      num: "04",
      title: "Pristine Cleanup & Final Walkthrough",
      desc: "We vacuum, remove debris daily, and perform a joint final inspection with you to guarantee 100% satisfaction before project wrap-up."
    }
  ]

  const pillars = [
    {
      title: "Florida-Engineered Durability",
      desc: "Our subtropical climate demands specific solutions. We use mold-resistant drywall, multi-layer shower waterproofing membranes, and non-slip porcelain stone."
    },
    {
      title: "No Subcontractor Runarounds",
      desc: "Hugo Coronel oversees each project directly. You deal with the actual builder who is on your site, not a disconnected salesperson."
    },
    {
      title: "Respect for Your Home",
      desc: "We treat your property like our own. All working corridors are masked with heavy-duty surface protectors, and negative-air dust filters are utilized during demo."
    },
    {
      title: "Fair Pricing & Client Loyalty",
      desc: "We stand by our rates and reward repeat business with 10% off and pay $50 cash bonuses to clients who recommend our contracting services."
    }
  ]

  return (
    <div className="w-full">
      
      {/* PAGE HEADER */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>About H Coronel & Associates LLC</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Built on Integrity, Master Craftsmanship & Central Florida Pride
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Serving Altamonte Springs (FL 32714) and communities within 50 miles of Orlando with licensed, dedicated residential remodeling solutions.
            </p>
          </div>
        </div>
      </section>

      {/* MEET THE BUILDER / COMPANY STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                Our Story & Philosophy
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Authentic Craftsmanship You Can See In Every Grout Line & Miter Joint
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Founded by contractor <strong className="text-slate-900">Hugo Coronel</strong>, <strong>H Coronel & Associates LLC</strong> was established with a singular mission: to provide Central Florida homeowners with uncompromising construction quality, transparent communication, and genuine artisan skill.
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Too many Florida homeowners experience contractors who subcontract jobs to inexperienced crews, disappear for weeks, or deliver wavy drywall and uneven tile lippage. At H Coronel & Associates LLC, Hugo is on the tools and on the site—leveling porcelain slabs, measuring custom cabinet runs, framing structural partitions, and inspecting every finish.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span>Headquartered in Altamonte Springs, FL 32714</span>
                </div>
                <p className="text-xs text-slate-600">
                  Quick mobilization to Orlando, Clermont, Debary, Apopka, Mount Dora, and all communities within 50 miles.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  Schedule an In-Home Consultation
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>(321) 948-6358</span>
                </a>
              </div>
            </div>

            {/* Photo Collage of Hugo at Work */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src={hugoTile}
                    alt="Hugo Coronel installing wall tile with precision leveling wedges"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src={finishedBath}
                    alt="Finished luxury master bathroom freestanding tub"
                    className="w-full h-52 object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src={hugoPlumbing}
                    alt="Contractor Hugo Coronel roughing-in studs and plumbing"
                    className="w-full h-52 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src={finishedKitchen}
                    alt="Finished custom kitchen remodel with waterfall island"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Central Florida Homeowners Choose Us
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Our principles ensure your renovation is smooth, predictable, and structurally sound.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pil, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base">{pil.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-STEP WORKFLOW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Our Structured Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              From First Handshake to Final Polish
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              A transparent, step-by-step roadmap that keeps your project on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                <div className="text-3xl font-black text-cyan-600/60 font-mono">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS MENTION */}
      <section className="py-14 bg-gradient-to-r from-slate-900 to-cyan-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase">
                <Tag className="w-4 h-4" />
                <span>Our Loyalty Promise</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                10% Off Repeat Business & $50 For Every Referral
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                We take pride in word-of-mouth growth across Seminole, Orange, Lake, and Volusia counties.
              </p>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold rounded-xl text-sm shadow-lg transition-all shrink-0 cursor-pointer"
            >
              Get In Touch With Hugo
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
