import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CalendarRange, MapPin, Heart } from 'lucide-react';

interface AboutUsProps {
  technicianImage: string;
}

export default function AboutUs({ technicianImage }: AboutUsProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: THE STORY */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left order-2 lg:order-1">
            <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3 font-display">
              Our Journey
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Locally Owned. Pride in Every Pane.
            </h2>
            
            <p className="mt-6 text-sm text-slate-600 leading-relaxed font-semibold">
              Swift Services began with an energetic crew, a solid ladder, a high-grade professional squeegee, and a humble vision: to treat every local home with the same warmth and precise care as if it were our family home.
            </p>

            <p className="mt-4 text-xs text-slate-500 leading-relaxed font-semibold">
              We realized that window cleaning isn't just a basic chore—it is about restoring pristine natural light, sharpening curb appeal, and bringing immense joy to families and retail boutique storeowners. Today, we are proud to be the Fresno/Clovis area's premier window washing resource, loved and chosen by hundreds of homeowners and small business networks.
            </p>

            <p className="mt-4 text-xs text-slate-500 leading-relaxed font-semibold">
              Honesty, transparent pricing, quality workmanship, and absolute friendliness are the foundation of everything we build. Our technicians undergo strict background screenings, extensive safety drills, and specialized structural glass detailing masterclasses. We will arrive in marked vehicles with a big smile, ready to earn your trust and leave your property looking its absolute best.
            </p>

            {/* Quick Metrics of Pride */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black text-blue-650 leading-none">500+</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">Homes Cleaned</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black text-blue-650 leading-none">100%</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">Streak-Free Guarantee</span>
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="font-display text-2xl font-black text-blue-650 leading-none">Fresno</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">Local Community</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: GORGEOUS TECHNIQUE GRAPHIC */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="absolute top-0 right-1/4 -translate-y-6 w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 z-10 animate-bounce" style={{ animationDuration: '4s' }}>
              <Heart className="w-5 h-5 fill-current" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, rotate: 1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-xl border-8 border-slate-100/50 max-w-md lg:ml-auto aspect-square sm:aspect-4/3 lg:aspect-[4/5]"
            >
              <img
                src={technicianImage}
                alt="Swift Services cleaning professional at work"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Glass Gleam */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-white/10 pointer-events-none"></div>

              {/* Area Badge overlay */}
              <div className="absolute bottom-4 left-4 bg-slate-900/95 text-white py-2 px-3.5 rounded-xl border border-slate-700/50 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest font-display">
                  Based in Fresno / Clovis, CA
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
