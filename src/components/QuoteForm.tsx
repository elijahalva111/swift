import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QuoteSubmission } from '../types';
import {
  Send,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  FileText,
  Trash2,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface QuoteFormProps {
  onSuccess?: () => void;
  selectedServiceDefault?: string;
}

export default function QuoteForm({ onSuccess, selectedServiceDefault = 'Residential Window Cleaning' }: QuoteFormProps) {
  // Calculator States (Retained for type & schema compatibility)
  const [windowCount] = useState<number>(15);
  const [storeys] = useState<number>(1);
  const [isInteriorAndExterior] = useState<boolean>(true);
  const [includeScreens] = useState<boolean>(false);
  const [includeTracks] = useState<boolean>(false);
  const [maintenanceFrequency] = useState<string>('one-time');

  // Lead Info States
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState(selectedServiceDefault);
  const [message, setMessage] = useState('');

  // Form Submission States
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedQuotes, setSubmittedQuotes] = useState<QuoteSubmission[]>([]);
  const [estimatedPrice] = useState(0);
  const [lastSubmittedQuote, setLastSubmittedQuote] = useState<QuoteSubmission | null>(null);

  // Sync state from Default value changes
  useEffect(() => {
    if (selectedServiceDefault) {
      setServiceNeeded(selectedServiceDefault);
    }
  }, [selectedServiceDefault]);

  // Load submissions from localStorage
  useEffect(() => {
    const data = localStorage.getItem('swift_quotes_submissions');
    if (data) {
      try {
        setSubmittedQuotes(JSON.parse(data));
      } catch (e) {
        console.error('Error parsing storage quotes', e);
      }
    }
  }, []);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = 'Name is required';
    if (!phone.trim()) tempErrors.phone = 'Phone number is required';
    if (!email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!address.trim()) tempErrors.address = 'Service address is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        const el = document.getElementById(`field-${firstError}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    const newQuote: QuoteSubmission = {
      id: 'quote_' + Math.random().toString(36).substr(2, 9),
      name,
      phone,
      email,
      address,
      serviceNeeded,
      message,
      windowCount,
      includeScreens,
      includeTracks,
      storeys,
      isInteriorAndExterior,
      estimatedPrice,
      status: 'Pending Review',
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newQuote, ...submittedQuotes];
    setSubmittedQuotes(updated);
    setLastSubmittedQuote(newQuote);
    localStorage.setItem('swift_quotes_submissions', JSON.stringify(updated));

    setShowSuccess(true);
    if (onSuccess) onSuccess();

    // Reset lead info
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setMessage('');
    setErrors({});
  };

  const handleCancelQuote = (id: string) => {
    const updated = submittedQuotes.filter(q => q.id !== id);
    setSubmittedQuotes(updated);
    localStorage.setItem('swift_quotes_submissions', JSON.stringify(updated));
  };

  return (
    <div className="w-full font-sans">
      <div className="max-w-2xl mx-auto">
        
        {/* CENTERED: LEAD CONTACT INFO & SUBMIT */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 premium-shadow relative overflow-hidden ring-1 ring-white/10">
          <div className="absolute top-0 right-0 -translate-y-8 translate-x-8 w-44 h-44 rounded-full bg-blue-500/10 blur-2xl pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                Submit Quote Request
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 font-medium">
                Fresno & Clovis prompt dispatch guarantee. No obligations.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-right sm:items-end">
              <a href="tel:5597273251" className="text-blue-400 font-bold text-sm hover:underline flex items-center gap-1.5 justify-end">
                <Phone className="w-4 h-4" />
                (559) 727-3251
              </a>
              <span className="text-[10px] text-slate-500 font-semibold uppercase">Daily: 8am &ndash; 5pm</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} id="quote-submission-form" className="space-y-5">
            
            {/* Form Name */}
            <div>
              <label htmlFor="field-name" className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-display">
                Your Name *
              </label>
              <input
                id="field-name"
                type="text"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                placeholder="John Doe"
                className={`w-full bg-slate-800/80 text-white rounded-xl py-3 px-4 border text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.name ? 'border-red-500 bg-red-500/5' : 'border-slate-700 hover:border-slate-600 font-medium'
                }`}
              />
              {errors.name && (
                <span className="text-xs text-red-400 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </span>
              )}
            </div>

            {/* Form Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="field-phone" className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-display">
                  Phone Number *
                </label>
                <input
                  id="field-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  placeholder="(559) 727-3251"
                  className={`w-full bg-slate-800/80 text-white rounded-xl py-3 px-4 border text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.phone ? 'border-red-500 bg-red-500/5' : 'border-slate-700 hover:border-slate-600 font-medium'
                  }`}
                />
                {errors.phone && (
                  <span className="text-xs text-red-400 flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="field-email" className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-display">
                  Email Address *
                </label>
                <input
                  id="field-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="john@example.com"
                  className={`w-full bg-slate-800/80 text-white rounded-xl py-3 px-4 border text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.email ? 'border-red-500 bg-red-500/5' : 'border-slate-700 hover:border-slate-600 font-medium'
                  }`}
                />
                {errors.email && (
                  <span className="text-xs text-red-400 flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Form Address */}
            <div>
              <label htmlFor="field-address" className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-display">
                Property Address (Fresno/Clovis Area) *
              </label>
              <input
                id="field-address"
                type="text"
                required
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  if (errors.address) setErrors({ ...errors, address: '' });
                }}
                placeholder="1234 E Shaw Ave, Fresno, CA 93710"
                className={`w-full bg-slate-800/80 text-white rounded-xl py-3 px-4 border text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.address ? 'border-red-500 bg-red-500/5' : 'border-slate-700 hover:border-slate-600 font-medium'
                }`}
              />
              {errors.address && (
                <span className="text-xs text-red-400 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.address}
                </span>
              )}
            </div>

            {/* Service Selection input option */}
            <div>
              <label htmlFor="field-service" className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-display">
                Service Needed *
              </label>
              <select
                id="field-service"
                value={serviceNeeded}
                onChange={(e) => setServiceNeeded(e.target.value)}
                className="w-full bg-slate-800 text-white rounded-xl py-3 px-4 border border-slate-700 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer font-medium"
              >
                <option value="Residential Window Cleaning">Residential Window Cleaning</option>
                <option value="Commercial Window Cleaning">Commercial Window Cleaning</option>
                <option value="Interior & Exterior Window Cleaning">Interior & Exterior Window Cleaning</option>
                <option value="Window Screen Cleaning">Window Screen Cleaning</option>
                <option value="Window Track & Frame Cleaning">Window Track & Frame Cleaning</option>
                <option value="Recurring Maintenance Plans">Recurring Maintenance Plans</option>
              </select>
            </div>

            {/* Message box */}
            <div>
              <label htmlFor="field-message" className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5 font-display">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                id="field-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any special details, safety requirements, hard-to-reach skylights, or custom requests?"
                className="w-full bg-slate-800 text-white rounded-xl py-3 px-4 border border-slate-700 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all hover:border-slate-600 resize-none font-medium"
              ></textarea>
            </div>

            {/* Submitting final request button */}
            <button
              id="submit-quote-estimate-button"
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-display font-black py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.01] active:scale-98 duration-155"
            >
              <Send className="w-4 h-4" />
              Send Free Quote Request
            </button>
            
            <p className="text-[10px] text-center text-slate-400 mt-2">
              By clicking, you request professional contact from Swift Window Cleaning. No payment is required today. No spam guarantee.
            </p>
          </form>

          {/* Prompt success popup */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center z-30"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-4 animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="font-display text-2xl font-black text-white mb-2">Quote Request Sent!</h4>
                <p className="text-sm text-slate-300 mb-6 max-w-sm leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{lastSubmittedQuote?.name || 'Valued Customer'}</span>! Our Fresno/Clovis team has received your request for <span className="text-blue-400 font-bold font-display">{lastSubmittedQuote?.serviceNeeded}</span>. We will call you within 15 minutes!
                </p>
                <button
                  type="button"
                  id="success-dismiss-button"
                  onClick={() => setShowSuccess(false)}
                  className="bg-white hover:bg-slate-100 text-slate-950 font-display font-bold px-6 py-2.5 rounded-full text-sm transition-all"
                >
                  Confirm & Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* RECENT SUBMISSIONS TRACKER */}
      {submittedQuotes.length > 0 && (
        <div id="recent-quote-submissions" className="mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-6 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              Active Quote Requests ({submittedQuotes.length})
            </h4>
            <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">
              Stored Locally
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Details</th>
                  <th className="pb-2">Address</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {submittedQuotes.map((q) => (
                  <tr key={q.id} className="border-b border-slate-100 text-xs text-slate-600 py-3 last:border-none">
                    <td className="py-2.5 font-medium whitespace-nowrap">{q.createdAt}</td>
                    <td className="py-2.5">
                      <div className="font-bold text-slate-800">{q.serviceNeeded}</div>
                    </td>
                    <td className="py-2.5 truncate max-w-[150px]">{q.address}</td>
                    <td className="py-2.5">
                      <span className="inline-flex items-center gap-1 bg-yellow-101 text-yellow-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 animate-pulse"></span>
                        {q.status}
                      </span>
                    </td>
                    <td className="py-2.5 text-right">
                      <button
                        type="button"
                        id={`cancel-quote-${q.id}`}
                        onClick={() => handleCancelQuote(q.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-1"
                        title="Cancel Quote Submission"
                      >
                        <Trash2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
