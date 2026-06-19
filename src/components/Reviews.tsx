import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, Quote, Sparkles } from 'lucide-react';
import { Review } from '../types';

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 'rev_1',
      author: 'Marcus Vance',
      rating: 5,
      text: 'Absolutely phenomenal service. I called they came out to my home in Clovis the next morning. The technicians were friendly, wore booties inside, and spent time detailing sills and track grooves I thought were permanently dusty. My windows look like they do not even have glass in them! I signed up for their quarterly upkeep plan immediately.',
      date: 'May 14, 2026',
      location: 'Clovis, CA'
    },
    {
      id: 'rev_2',
      author: 'Sarah K. Jensen',
      rating: 5,
      text: 'Its rare to find a service company with this much attention to detail. Our two-story home has a few high-altitude skylights and hard to reach glass panels. Not only did Swift Services make them sparkle streak-free, but they also scrubbed down and power washed our dirty window screens too. Absolute five stars!',
      date: 'June 01, 2026',
      location: 'Fresno, CA (Woodward Park)'
    },
    {
      id: 'rev_3',
      author: 'Boutique Proprietor, Shaw Avenue',
      rating: 5,
      text: 'We hire Swift for our downtown boutique shop window cleaning twice a month. The presentation looks pristine and modern which has definitely improved foot traffic. Highly recommended for commercial property owners who value zero-streak transparency and reliability.',
      date: 'April 22, 2026',
      location: 'Fresno, CA'
    },
    {
      id: 'rev_4',
      author: 'David & Lisa Thorne',
      rating: 5,
      text: 'Outstanding communication! The online dynamic quote calculator was accurate to the dollar. The scheduling process was seamless, and the streak-free guarantee is absolutely legitimate. Friendly staff, flawless windows, completely painless experience.',
      date: 'June 12, 2026',
      location: 'Clovis, CA'
    }
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER BLOCK */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3 font-display">
            Testimonials
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Loved By Hundreds Of Neighbors
          </h2>
          <p className="mt-4 text-slate-500 font-medium text-sm sm:text-base">
            Do not just take our word for it. Read honest five-star reviews from homeowners and business managers across Fresno and Clovis.
          </p>
        </div>

        {/* FEEDBACK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 relative shadow-xs hover:scale-[1.01] hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Quote mark */}
                <div className="absolute top-6 right-6 text-blue-500/10">
                  <Quote className="w-12 h-12 fill-current" />
                </div>

                {/* Stars Rating banner */}
                <div className="flex gap-1 mb-5 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>

                {/* Review Message */}
                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed italic relative z-10">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    {rev.location}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-400">
                    {rev.date}
                  </span>
                  <div className="text-[9px] font-extrabold text-emerald-600 flex items-center justify-end gap-1 mt-1 leading-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Verified Customer
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST SIGNATURE */}
        <div className="mt-12 text-center bg-blue-600 text-white rounded-2xl p-6 overflow-hidden relative premium-shadow max-w-2xl mx-auto">
          <div className="font-display text-lg font-bold">
            Guaranteed Streak-Free, or We Rewash Free of Charge!
          </div>
          <p className="text-xs text-blue-150 mt-1 max-w-lg mx-auto leading-relaxed">
            If you notice any smudge, squeegee line, or streak within 48 hours of clean, we will scramble a tech back to rewash your window 100% free of charge!
          </p>
        </div>

      </div>
    </section>
  );
}
