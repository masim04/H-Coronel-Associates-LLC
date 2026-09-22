import { useState } from 'react'
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  Phone, 
  ShieldCheck
} from 'lucide-react'
import { BUSINESS_INFO, BLOG_POSTS } from '../data/siteData'

export default function BlogPage({ onOpenQuote }) {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <div className="w-full">
      
      {/* PAGE BANNER */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Contractor Advice & Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Florida Remodeling Guides & Insights
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Authentic tips, material recommendations, and waterproofing guides written specifically for Central Florida homeowners dealing with heat, moisture, and local building codes.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-xs sm:text-sm font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-xs font-semibold text-slate-400">
                    By Hugo Coronel
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FULL ARTICLE READER MODAL */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 pb-4 border-b border-slate-100 bg-slate-50 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                  <span className="font-bold text-cyan-700 uppercase bg-cyan-100/60 px-2.5 py-0.5 rounded-md">
                    {selectedPost.category}
                  </span>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {selectedPost.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className="w-9 h-9 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scrollable Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 bg-slate-100 mb-6">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 whitespace-pre-line text-slate-800">
                {selectedPost.content}
              </div>

              {/* In-Article Call to Action */}
              <div className="p-6 rounded-2xl bg-cyan-50 border border-cyan-200 mt-8 space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-600" />
                  <span>Have questions about this for your Central Florida home?</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Hugo Coronel and our team are happy to inspect your bathroom, kitchen, or drywall in Altamonte Springs, Orlando, Clermont, Debary, Apopka, or Mount Dora.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setSelectedPost(null)
                      onOpenQuote()
                    }}
                    className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
                  >
                    Request Free In-Home Consultation
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm rounded-xl border border-slate-200 transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-600" />
                    <span>(321) 948-6358</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 sm:px-8 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
              <span>H Coronel & Associates LLC • Contractor Education</span>
              <button
                onClick={() => setSelectedPost(null)}
                className="font-bold text-slate-700 hover:text-slate-900"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
