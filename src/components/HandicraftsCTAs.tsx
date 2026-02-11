import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Map, Heart, ArrowRight, Sparkles } from 'lucide-react';

export function HandicraftsCTAs() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="mb-16">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-gradient-to-r from-[#035938] to-[#52BC88] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
          <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          {t('handicraftsCTA1Full')}
        </button>
        <button className="bg-[#F1BC28] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
          <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {t('handicraftsCTA2Full')}
        </button>
      </div>
    </div>
  );
}