import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldAlert,
  Clock,
  Award,
  HeartHandshake,
  BadgeDollarSign,
  FileCheck,
  SearchCode,
  CheckCircle,
  Sparkles,
  Phone
} from 'lucide-react';

export default function WhyChooseUs() {
  const coreValues = [
    {
      title: 'Fully Insured & Bonded',
      desc: 'Rest easy knowing our technicians and your home are protected by million-dollar general liability insurance.',
      icon: ShieldAlert,
    },
    {
      title: 'Reliable & On-Time',
      desc: 'We value your schedule. Our technicians arrive in uniformed trucks exactly when promised. No generic waiting blocks.',
      icon: Clock,
    },
    {
      title: 'Streak-Free Guarantee',
      desc: 'Our commercial de-ionization water filtration filters trace minerals out. Your glass will dry spotless or we return free!',
      icon: Award,
    },
    {
      title: 'Friendly, Professional',
      desc: 'Locally hired and thoroughly background-checked technicians trained to be courteous, respectful, and friendly.',
      icon: HeartHandshake,
    },
    {
      title: 'Affordable Pricing',
      desc: 'Premium service does NOT mean overpriced. Enjoy highly competitive, fully transparent prices with zero hidden feeds.',
      icon: BadgeDollarSign,
    },
    {
      title: 'Free Quotes',
      desc: 'Get an effortless free quote with zero obligations. Connect with our friendly team in seconds.',
      icon: FileCheck,
    },
    {
      title: 'Attention to Detail',
      desc: 'We do not just wipe glass. Sills, tracking channels, screen blocks, and perimeter frames are handled with care.',
      icon: SearchCode,
    },
    {
      title: 'Satisfaction Guaranteed',
      desc: 'Your property is our legacy. If anything is less than perfect, we will work tirelessly to make it right.',
      icon: CheckCircle,
    },
  ];

  const handleScrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-24 w-80 h-80 rounded-full bg-blue-400/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT WRITER BLOCK */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left">
            <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3 font-display">
              Why Swift Services
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight sm:leading-none">
              A Sparkling Difference You Can See.
            </h2>
            <p className="mt-5 text-sm text-slate-500 font-semibold leading-relaxed">
              We started Swift Services with one simple mission: to deliver pressure-free, completely clear window cleaning that elevates your property's comfort and beauty.
            </p>
            <p className="mt-4 text-xs text-slate-400 font-medium leading-relaxed">
              Serving the entire Fresno and Clovis corridor, we treat your valuable sills, tracks, and frames with absolute care & professionalism.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleScrollToQuote}
                id="why-choose-us-cta-estimate"
                className="px-6 py-3.5 bg-black text-white text-xs font-bold rounded-xl hover:bg-slate-850 hover:scale-[1.02] transition-colors cursor-pointer shadow-xs"
              >
                Request a Free Quote
              </button>
              <a
                href="tel:5597273251"
                id="why-choose-us-cta-call"
                className="px-6 py-3.5 border-2 border-slate-200 text-slate-800 font-display text-xs font-bold rounded-xl hover:bg-slate-55 hover:scale-[1.02] transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 duration-300"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                Call Directly
              </a>
            </div>
          </div>

          {/* RIGHT GRID OF CORE VALUES */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-3xs hover:shadow-md hover:border-blue-100 hover:scale-102 transition-all flex gap-4 items-start group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-650 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm text-[#1a1a1a] leading-snug">
                      {val.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-550 font-semibold leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
