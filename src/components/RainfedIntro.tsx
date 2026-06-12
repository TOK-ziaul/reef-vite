import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function RainfedIntro() {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="max-w-6xl mx-auto mb-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9F7EF] to-white rounded-3xl -z-10" />
        
        <div className="relative bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-[#035938]/5">
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <p className="text-xl md:text-2xl leading-relaxed text-[#052F2A]/90">
              {t('rainfedIntro1')}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
