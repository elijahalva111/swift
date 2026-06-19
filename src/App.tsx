import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import {
  Sparkles,
  Phone,
  Mail,
  Clock,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  ArrowRight,
  House,
  Store,
  Glasses
} from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState('Residential Window Cleaning');
  const [galleryTab, setGalleryTab] = useState<'residential' | 'commercial'>('residential');

  // Hardcoded image paths generated in step 1
  const luxuryHouseImage = '/src/assets/images/luxury_house_clean_windows_1781835638952.jpg';
  const technicianImage = '/src/assets/images/technician_cleaning_window_1781835652233.jpg';
  const storefrontImage = '/src/assets/images/commercial_clean_storefront_1781835666520.jpg';

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const handleScrollToQuote = (e: React.MouseEvent) => {
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
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* HEADER NAVIGATION */}
      <Header />

      {/* HERO SECTION */}
      <Hero heroImage={luxuryHouseImage} />

      {/* TOP EMERGENCY TRUST RIBBON */}
      <div className="bg-slate-900 text-white py-4 border-y border-slate-800 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-semibold text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-blue-600/30 text-blue-400 px-3 py-1 rounded-full text-[10px] uppercase font-extrabold tracking-wider">
                Now serving
              </span>
              <span>Fresno, Clovis, Madera & Surrounding Communities</span>
            </div>
            
            <a
              href="tel:5597273251"
              id="sticky-phone-ribbon"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors text-blue-400 font-bold"
            >
              <Phone className="w-4 h-4 text-blue-500 animate-pulse animate-duration-1000" />
              Call For Instant Scheduling: (559) 727-3251
            </a>
          </div>
        </div>
      </div>

      {/* SERVICES DISPLAY SECTION */}
      <Services onSelectService={handleSelectService} />

      {/* BEFORE-AND-AFTER CONTROLLABLE SLIDER GALLERY */}
      <section id="gallery" className="py-20 sm:py-28 bg-slate-100 relative overflow-hidden">
        
        {/* Ambient glow backgrounds */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section titles */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3 font-display">
              The Proof of Pure Water
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Interactive Glass Gallery
            </h2>
            <p className="mt-4 text-slate-500 font-medium text-sm sm:text-base">
              Slide back and forth to see exactly what "Swift Clear" means. We wash away years of baked-on mineral stains, pollen, water spots, and street grime.
            </p>
          </div>

          {/* Interactive slider gallery tabs */}
          <div className="flex justify-center mb-10">
            <div className="bg-white p-1 rounded-2xl border border-slate-200/55 flex shadow-xs">
              <button
                type="button"
                id="gallery-tab-residential"
                onClick={() => setGalleryTab('residential')}
                className={`flex items-center gap-2 py-2 px-5 rounded-xl font-display text-xs font-bold transition-all cursor-pointer ${
                  galleryTab === 'residential'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-slate-650 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <House className="w-3.5 h-3.5" />
                Residential Homes
              </button>
              <button
                type="button"
                id="gallery-tab-commercial"
                onClick={() => setGalleryTab('commercial')}
                className={`flex items-center gap-2 py-2 px-5 rounded-xl font-display text-xs font-bold transition-all cursor-pointer ${
                  galleryTab === 'commercial'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-slate-650 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Store className="w-3.5 h-3.5" />
                Storefronts & Retail
              </button>
            </div>
          </div>

          {/* Slider output with animate presentation tab shifts */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {galleryTab === 'residential' ? (
                <motion.div
                  key="residential"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <BeforeAfterSlider
                    afterImage={luxuryHouseImage}
                    title="Residential Luxury Estate"
                    subtitle="Massive floor-to-ceiling glass panes wiped streak-free. Natural light filters in completely pure without reflections or water marks."
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="commercial"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <BeforeAfterSlider
                    afterImage={storefrontImage}
                    title="Boutique Commercial Storefront"
                    subtitle="Highly visible street-level shop windows cleaned to an ultra-translucent sheen, reflecting beautiful skies and enticing customers inside."
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE SWIFT SERVICES SECTION */}
      <WhyChooseUs />

      {/* ABOUT US CORE STORY */}
      <AboutUs technicianImage={technicianImage} />

      {/* TESTIMONIAL REVIEWS SECTION */}
      <Reviews />

      {/* REVENUE OPTIMIZED CALL TO ACTION SPLIT BANNER */}
      <section className="bg-blue-600 text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-550 to-blue-700 opacity-90"></div>
        <div className="absolute right-0 bottom-0 translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Licensed & Fully Insured Fresno/Clovis
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready For Clear Views?<br />
            Secure Your Streak-Free Guarantee Today.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-blue-100 max-w-2xl mx-auto font-medium">
            Join hundreds of families and businesses who trust Swift Services for absolute clarity, reliable scheduling, and professional workmanship.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <button
              onClick={handleScrollToQuote}
              id="cta-block-estimate"
              className="bg-white hover:bg-slate-100 text-blue-900 font-display font-bold py-4 px-8 rounded-xl transition-all shadow-lg text-center cursor-pointer active:scale-98"
            >
              Request a Free Quote
            </button>
            <a
              href="tel:5597273251"
              id="cta-block-call"
              className="bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold py-4 px-8 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              Call (559) 727-3251
            </a>
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-6 text-[11px] text-blue-200 font-semibold">
            <span>&bull; Satisfaction Guaranteed</span>
            <span>&bull; Free Professional Quotes</span>
            <span>&bull; Friendly Crew</span>
          </div>
        </div>
      </section>

      {/* QUOTE INTAKE FORM */}
      <section id="quote" className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3 font-display">
              Get In Touch
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Request A Free Quote
            </h2>
            <p className="mt-4 text-slate-500 font-medium text-sm sm:text-base">
              Fill out our quick form below to request a customized quote. Our friendly team will reach out to confirm your details and scheduling!
            </p>
          </div>

          {/* Fully interactive component form */}
          <QuoteForm selectedServiceDefault={selectedService} />

        </div>
      </section>

      {/* FOOTER SECTION */}
      <Footer />

    </div>
  );
}
