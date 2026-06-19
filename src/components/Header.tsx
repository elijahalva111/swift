import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles, Navigation, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Swift', href: '#why-us' },
    { label: 'Before & After', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(targetId);
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
    <header
      id="main-navigation-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center group cursor-pointer"
          >
            <Logo variant="horizontal" iconSize={42} />
          </a>

          {/* DESKTOP NAV ITEMS */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION HERO CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:5597273251"
              id="header-phone-cta"
              className="flex items-center gap-2 text-slate-900 hover:text-blue-650 font-bold text-sm transition-colors py-2 px-3"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="font-bold">(559) 727-3251</span>
            </a>
            
            <a
              href="#quote"
              id="header-quote-cta"
              onClick={(e) => handleScrollTo(e, '#quote')}
              className="px-5 py-2.5 bg-black text-white text-xs font-semibold rounded-full hover:bg-slate-800 transition-colors tracking-wider uppercase cursor-pointer shadow-sm hover:shadow-md"
            >
              Free Quote
            </a>
          </div>

          {/* BURGER MENU BTN */}
          <div className="flex items-center lg:hidden gap-3">
            <a
              href="tel:5597273251"
              className="sm:hidden w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"
              title="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="hamburger-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 px-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {isOpen && (
        <div id="mobile-menu-dropdown" className="lg:hidden absolute top-full inset-x-0 bg-white border-b border-slate-100 shadow-xl py-4 px-4 sm:px-6 space-y-3 animate-fade-in">
          <div className="grid grid-cols-2 gap-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-sm font-semibold text-slate-700 hover:text-white hover:bg-blue-600 p-2.5 rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="tel:5597273251"
              id="mobile-phone-call-cta"
              className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3 rounded-full text-center text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              Call (559) 727-3251
            </a>
            <a
              href="#quote"
              id="mobile-free-quote-cta"
              onClick={(e) => handleScrollTo(e, '#quote')}
              className="w-full bg-black hover:bg-slate-800 text-white font-bold py-3 rounded-full text-center text-sm block transition-colors shadow-xs"
            >
              Get a Free Quote
            </a>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            Licensed & Fully Insured Fresno/Clovis Area
          </div>
        </div>
      )}
    </header>
  );
}
