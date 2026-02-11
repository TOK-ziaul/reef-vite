import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function RainfedIntro() {
  const { language } = useLanguage();
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
              {language === 'ar'
                ? 'يهدف قطاع زراعة المحاصيل البعلية ببرنامج "ريف السعودية" إلى زيادة نسبة الاكتفاء الذاتي من هذه المحاصيل الاستراتيجية، وإحلال نسبة من الواردات، مع رفع إنتاجيتها في المناطق ذات الميزات النسبية، وذلك عبر توظيف تقنيات حصاد المياه وأساليب الري الحديثة، وتحسين جودة الإنتاج، وزيادة دخل صغار المزارعين، وتعزيز استدامة الموارد الطبيعية بما ينعكس على تنمية المجتمعات الريفية وتحسين سبل معيشتها.'
                : 'The Rainfed Crops Sector in the Reef Saudi Program aims to increase self-sufficiency rates in these strategic crops and substitute a portion of imports while raising their productivity in areas with comparative advantages. This is achieved through utilizing rainwater harvesting techniques and modern irrigation methods, improving production quality, increasing the income of smallholder farmers, and promoting the sustainability of natural resources, which contributes to the development of rural communities and the improvement of their livelihoods.'}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
