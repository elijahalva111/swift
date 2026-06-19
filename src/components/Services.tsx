import React from 'react';
import { motion } from 'motion/react';
import {
  Home,
  Building2,
  Check,
  Grid,
  CalendarDays,
  Sparkles,
  Layers,
  Wand2
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const servicesList = [
    {
      title: 'Residential Window Cleaning',
      icon: Home,
      description: 'Keep your home bright and beautiful. Professional exterior & interior cleaning for single-family homes, estates, townhouses, and condos.',
      features: ['Pure water tech', 'Sill wipedown included', 'Streak-free guarantee']
    },
    {
      title: 'Commercial Window Cleaning',
      icon: Building2,
      description: 'Spotless windows speak volumes about your business. Standard-compliant, safe, and efficient cleans for offices, shops, cafes, and storefronts.',
      features: ['Reliable timing', 'Fully insured technicians', 'Flexible schedules']
    },
    {
      title: 'Interior & Exterior Window Cleaning',
      icon: Layers,
      description: 'The ultimate panoramic clarity. We wash both sides of your glass, detailing the entire frame block with medical-grade squeegee tools.',
      features: ['Comprehensive scrub', 'Dust and smudge removal', 'Track vacuuming']
    },
    {
      title: 'Window Screen Cleaning',
      icon: Grid,
      description: 'Dusty screens block fresh air. We pop your window screens out, scrub down mesh fibers, wash both sides, and return them crisp and clean.',
      features: ['Insect debris cleared', 'Mesh fiber deep-scrub', 'Eco-friendly solutions']
    },
    {
      title: 'Window Track & Frame Cleaning',
      icon: Wand2,
      description: 'Dirt in window tracks damages frames. We vacuum insect nests, spray-wash accumulated mud, and detail rubber runners for smooth sliding.',
      features: ['Vaporizer scrub on dirt', 'Glides like butter', 'Adds lifespan to frames']
    },
    {
      title: 'Recurring Maintenance Plans',
      icon: CalendarDays,
      description: 'Beautiful views year-round, hassle-free. Lock in regular cleanings (monthly, quarterly) at significant bundle savings up to 15% off.',
      features: ['Up to 15% recurring savings', 'No contracts, skip anytime', 'Priority booking']
    }
  ];

  const handleServiceQuoteClick = (serviceTitle: string) => {
    onSelectService(serviceTitle);
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
    <section id="services" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3 font-display">
            What We Do
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Elite Window Cleaning Services
          </h2>
          <p className="mt-4 text-slate-500 font-medium text-sm sm:text-base">
            From luxury residential properties to local storefront boutique shops, our technicians utilize specialized equipment to guarantee perfection.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col justify-between bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl transition-all hover:scale-[1.02] shadow-xs hover:shadow-md hover:border-blue-300"
              >
                <div>
                  {/* Icon Panel */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-650 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display text-lg font-bold text-[#1a1a1a]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-550 font-semibold leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Bullet items */}
                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-[11px] font-bold text-slate-650">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Button */}
                <button
                  onClick={() => handleServiceQuoteClick(service.title)}
                  className="mt-8 w-full py-3 px-4 rounded-xl font-display text-xs font-bold uppercase tracking-wider border border-gray-200 text-slate-800 bg-white hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Book / Quote
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
