import { useState, useRef, useEffect, useCallback } from 'react'
import { MoveHorizontal, CheckCircle2, Hammer, Sparkles } from 'lucide-react'
import { BEFORE_AFTER_PROJECTS } from '../data/siteData'

export default function BeforeAfterSlider() {
  const [selectedProjectId, setSelectedProjectId] = useState(BEFORE_AFTER_PROJECTS[0].id)
  const [sliderPosition, setSliderPosition] = useState(50) // percentage
  const [containerWidth, setContainerWidth] = useState(800)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const activeProject = BEFORE_AFTER_PROJECTS.find(p => p.id === selectedProjectId) || BEFORE_AFTER_PROJECTS[0]

  // Track container width safely via ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
    }
    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(position)
  }, [])

  const handleTouchMove = useCallback((e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }, [handleMove])

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }, [isDragging, handleMove])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove])

  return (
    <div className="w-full">
      {/* Project Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {BEFORE_AFTER_PROJECTS.map((proj) => (
          <button
            key={proj.id}
            onClick={() => {
              setSelectedProjectId(proj.id)
              setSliderPosition(50)
            }}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedProjectId === proj.id
                ? 'bg-slate-900 text-cyan-300 shadow-md border-b-2 border-cyan-400'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            {proj.service}
          </button>
        ))}
      </div>

      {/* Main Comparison Container */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              {activeProject.location}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
              {activeProject.title}
            </h3>
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start md:self-auto bg-slate-100 px-3 py-1.5 rounded-lg">
            <MoveHorizontal className="w-3.5 h-3.5 text-cyan-600" />
            <span>Drag slider horizontally to compare</span>
          </div>
        </div>

        {/* Interactive Split-Screen Slider Box */}
        <div
          ref={containerRef}
          className="relative w-full h-[360px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-200 shadow-inner bg-slate-900"
          onMouseDown={(e) => {
            setIsDragging(true)
            handleMove(e.clientX)
          }}
          onTouchStart={(e) => {
            if (e.touches && e.touches[0]) {
              handleMove(e.touches[0].clientX)
            }
          }}
        >
          {/* AFTER IMAGE (Base background layer) */}
          <img
            src={activeProject.afterImage}
            alt={activeProject.afterLabel}
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />

          {/* BEFORE IMAGE (Clipped overlay layer) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden select-none pointer-events-none border-r-2 border-white shadow-2xl"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={activeProject.beforeImage}
              alt={activeProject.beforeLabel}
              className="absolute inset-0 h-full object-cover max-w-none select-none pointer-events-none"
              style={{
                width: `${containerWidth}px`,
                height: '100%'
              }}
            />
          </div>

          {/* Top Badges */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md border border-white/20 flex items-center gap-1.5">
              <Hammer className="w-3.5 h-3.5 text-amber-400" />
              {activeProject.beforeLabel}
            </span>
          </div>
          <div className="absolute top-4 right-4 z-20 pointer-events-none">
            <span className="bg-cyan-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md border border-cyan-400/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              {activeProject.afterLabel}
            </span>
          </div>

          {/* Draggable Divider Handle Line */}
          <div
            className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-xl flex items-center justify-center text-cyan-300">
              <MoveHorizontal className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <p className="text-slate-700 text-sm leading-relaxed">
            {activeProject.description}
          </p>
        </div>

        {/* Step-by-step progress thumbnails if available */}
        {activeProject.steps && (
          <div className="mt-6 pt-6 border-t border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-600" />
              <span>Project Progression Steps (Authentic On-Site Photos)</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activeProject.steps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-xl p-2 border border-slate-200 shadow-xs group">
                  <div className="relative h-24 sm:h-28 rounded-lg overflow-hidden mb-2 bg-slate-100">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-bold text-slate-900 line-clamp-1">{step.title}</div>
                  <div className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-tight">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
