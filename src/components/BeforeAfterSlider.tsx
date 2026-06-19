import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye } from 'lucide-react';

interface BeforeAfterSliderProps {
  afterImage: string;
  title: string;
  subtitle: string;
}

export default function BeforeAfterSlider({ afterImage, title, subtitle }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-6">
        <h3 className="font-display text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
          {title}
        </h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
          {subtitle}
        </p>
      </div>

      {/* Interactive Slider Tool */}
      <div
        id="before-after-interaction-container"
        ref={containerRef}
        className="relative w-full max-w-3xl aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-200 premium-shadow"
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* AFTER IMAGE (Background / Always clear) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={afterImage}
            alt="Streak-free clean window"
            className="w-full h-full object-cover select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
          {/* Sparkles on clean side */}
          <div className="absolute bottom-4 right-4 bg-blue-600/90 text-white font-display text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 fill-current text-white animate-spin" style={{ animationDuration: '6s' }} />
            After (Streak-Free Clean)
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped / Dusty / Smudged filter) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* We duplicate the same image but apply CSS grunge filters to simulate grimy glass */}
          <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width || 800 }}>
            <img
              src={afterImage}
              alt="Before cleaning"
              className="w-full h-full object-cover select-none pointer-events-none filter brightness-70 contrast-[85%] saturate-[60%] blur-[2px] sepia-[40%] hue-rotate-15 opacity-90"
              referrerPolicy="no-referrer"
            />
            {/* Simulation of heavy grey-brown smog/water film */}
            <div className="absolute inset-x-0 bottom-0 top-0 bg-yellow-900/10 mix-blend-multiply pointer-events-none"></div>
            {/* Dusty smudges SVG layer overlay */}
            <div className="absolute inset-0 bg-neutral-900/15 backdrop-blur-[1px] pointer-events-none flex items-center justify-center">
              <span className="sr-only">Dirty glass simulation</span>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-amber-900/90 text-amber-100 font-display text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
              <Eye className="w-3.5 h-3.5" />
              Before (Grimy & Smudged)
            </div>
          </div>
        </div>

        {/* SLIDER DIVISION BAR */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-300 pointer-events-auto">
            <div className="flex gap-0.5 justify-between w-4.5">
              <span className="text-slate-600 font-bold text-sm pointer-events-none">◀</span>
              <span className="text-slate-600 font-bold text-sm pointer-events-none">▶</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-3 text-center">
        Drag the slider handle to view the crystal-clear premium difference
      </p>
    </div>
  );
}
