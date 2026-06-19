import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  Award,
  Facebook,
  Instagram,
  Linkedin,
  Sparkles,
  ChevronUp
} from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 relative overflow-hidden">
      
      {/* Visual background glare */}
      <div className="absolute right-0 top-0 -translate-y-12 translate-x-12 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* COLUMN 1: BRAND LOGO */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center mb-5 cursor-pointer" onClick={handleScrollToTop}>
              <Logo theme="dark" variant="horizontal" iconSize={42} />
            </div>
            <p className="text-xs text-slate-400 font-semibold leading-relaxed max-w-sm">
              Premium residential and commercial window cleaning services throughout Fresno, Clovis, and surrounding California communities. Enjoy glass so clear it looks invisible.
            </p>

            {/* Badges of trust */}
            <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-bold">
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                Licensed & Insured
              </span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-blue-500" />
                Streak-Free Guarantee
              </span>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-display text-xs font-black uppercase tracking-widest text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {['Home', 'Services', 'Why Us', 'Gallery', 'About', 'Reviews'].map((link) => {
                const target = link.toLowerCase().replace(' ', '-');
                const scrollId = link === 'Why Us' ? '#why-us' : `#${target}`;
                return (
                  <li key={link}>
                    <a
                      href={scrollId}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(scrollId);
                        if (element) {
                          const headerOffset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.scrollY - headerOffset;
                          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                        }
                      }}
                      className="hover:text-blue-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 3: SERVICE AREA */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-display text-xs font-black uppercase tracking-widest text-white mb-4 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              Service Coverage
            </h4>
            <p className="text-xs text-slate-400 font-semibold mb-3">
              We proudly provide high-end window care to properties in:
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-medium text-slate-300">
              <span>&bull; Fresno, CA</span>
              <span>&bull; Clovis, CA</span>
              <span>&bull; Sanger, CA</span>
              <span>&bull; Kerman, CA</span>
              <span>&bull; Reedley, CA</span>
              <span>&bull; Madera, CA</span>
            </div>
          </div>

          {/* COLUMN 4: CONTACT & DETAILS */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-display text-xs font-black uppercase tracking-widest text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-4 text-xs font-medium">
              
              {/* Phone large */}
              <a
                href="tel:5597273251"
                id="footer-call-cta-large"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:bg-blue-500">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Call Directly</div>
                  <div className="text-sm font-bold text-slate-100">(559) 727-3251</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:admin@swiftservices.info"
                id="footer-email-cta"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:admin@swiftservices.info?subject=Window Cleaning Estimate Quote";
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0 group-hover:bg-slate-800 group-hover:text-slate-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Enquiries</div>
                  <div className="text-xs font-semibold text-slate-300">admin@swiftservices.info</div>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Business Hours</div>
                  <div className="text-xs font-semibold text-slate-300">Everyday: 8:00 AM &ndash; 5:00 PM</div>
                </div>
              </div>

            </div>

            {/* Social handles */}
            <div className="flex gap-2.5 mt-6">
              {[
                { icon: Facebook, href: '#facebook' },
                { icon: Instagram, href: '#instagram' },
                { icon: Linkedin, href: '#linkedin' }
              ].map((soc, i) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white border border-slate-800 flex items-center justify-center text-slate-400 transition-all cursor-pointer"
                    title="Social Link"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px] font-semibold">
          <div>
            &copy; {new Date().getFullYear()} Swift Services. All rights reserved. Registered Fresno & Clovis contractor.
          </div>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              Licensed & Insured
            </span>
            <button
              onClick={handleScrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              Scroll To Top
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
