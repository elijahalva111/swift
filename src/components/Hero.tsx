import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, Star, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface HeroProps {
  heroImage: string;
}

export default function Hero({ heroImage }: HeroProps) {
  const handleScrollToQuote = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#quote');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 sm:pb-24 lg:pt-32 lg:pb-32 bg-slate-50 overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-12 w-96 h-96 rounded-full bg-slate-300/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* SUMMER DISCOUNT TRUST BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200 py-1.5 px-3.5 rounded-full w-fit mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest font-display flex items-center gap-1">
                Servicing Central Valley &bull; Up to 20% Off Summer Discount
              </span>
            </motion.div>

            {/* MAIN MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-[#1a1a1a] tracking-tighter leading-tight sm:leading-none"
            >
              Crystal-Clear Windows.<br />
              <span className="text-blue-600 relative">
                Exceptional Service.
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-blue-500/20 rounded-full"></span>
              </span>
            </motion.h1>

            {/* SUBHEADING */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg font-medium"
            >
              Professional residential and commercial window cleaning with reliable scheduling, transparent pricing, and streak-free results every time.
            </motion.p>

            {/* MAIN ACTIONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <button
                onClick={handleScrollToQuote}
                id="hero-primary-cta"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer outline-hidden duration-300"
              >
                <Calendar className="w-4.5 h-4.5" />
                Get a Free Quote
              </button>

              <a
                href="tel:5597273251"
                id="hero-secondary-cta"
                className="px-8 py-4 border-2 border-gray-200 text-gray-750 font-bold rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 cursor-pointer duration-300"
              >
                <Phone className="w-4.5 h-4.5 text-blue-600" />
                Call Now
              </a>
            </motion.div>

            {/* TRUST BULLETS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-xs text-slate-500 font-semibold"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                <span>Fully Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                <span>Streak-Free Guarantee</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4.5 h-4.5 text-blue-600 shrink-0 animate-ping" style={{ animationDuration: '3s' }} />
                <span>Free Easy Quotes</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT PHOTO GRAPHIC COLUMN --> Window Pane representation */}
          <div className="lg:col-span-5 relative">
            
            {/* Aesthetic spark of glass highlight */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 rounded-full bg-blue-300/30 flex items-center justify-center z-20 animate-pulse">
              <Sparkles className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: '10s' }} />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white max-w-lg mx-auto aspect-[4/5] sm:aspect-[4/5]"
            >
              {/* Image with glass luster layout overlay */}
              <img
                src={heroImage}
                alt="A premium luxury estate with spotless windows"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Glass glare effect overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
              
              {/* Subtle blue glass color overlay */}
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-color pointer-events-none"></div>

              {/* Float-badge bottom */}
              <div className="absolute bottom-4 inset-x-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/50 premium-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <Sparkles className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-wider uppercase text-slate-900 leading-none">
                      The Swift Standard
                    </h4>
                    <p className="text-[10px] text-slate-500 font-semibold mt-1">
                      Our commercial grade de-ionized water filters leave windows 100% spotless.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
