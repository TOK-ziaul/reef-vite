import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { useState } from 'react';
import { TrendingUp, Beaker, Stethoscope, Users, ChevronRight, ChevronLeft, Map, Gift } from 'lucide-react';

export function KeyAchievements2024() {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const achievements = [
    {
      icon: TrendingUp,
      color: 'from-[#035938] to-[#52BC88]',
      bgImage: 'https://images.unsplash.com/photo-1688677825986-4ffb926bafc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGZhcm1pbmd8ZW58MXx8fHwxNzcwMTI0ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      titleKey: 'livestockKeyWork1Title',
      descKey: 'livestockKeyWork1Desc',
      stats: [
        { valueKey: 'livestockKeyWork1Stat1Value', labelKey: 'livestockKeyWork1Stat1Label' },
        { valueKey: 'livestockKeyWork1Stat2Value', labelKey: 'livestockKeyWork1Stat2Label' },
      ],
    },
    {
      icon: Beaker,
      color: 'from-[#52BC88] to-[#035938]',
      bgImage: 'https://images.unsplash.com/photo-1759742269093-de3d9fed6714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwZSUyMHZpbmV5YXJkJTIwaGFydmVzdHxlbnwxfHx8fDE3NzAxMjYwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      titleKey: 'livestockKeyWork2Title',
      descKey: 'livestockKeyWork2Desc',
      stats: [
        { valueKey: 'livestockKeyWork2Stat1Value', labelKey: 'livestockKeyWork2Stat1Label' },
        { valueKey: 'livestockKeyWork2Stat2Value', labelKey: 'livestockKeyWork2Stat2Label' },
      ],
    },
    {
      icon: Stethoscope,
      color: 'from-[#F1BC28] to-[#035938]',
      bgImage: 'https://images.unsplash.com/photo-1654119938236-de0d8ed4641d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2FyZSUyMGxpdmVzdG9ja3xlbnwxfHx8fDE3NzAxMjQ4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      titleKey: 'livestockKeyWork3Title',
      descKey: 'livestockKeyWork3Desc',
      stats: [
        { valueKey: 'livestockKeyWork3Stat1Value', labelKey: 'livestockKeyWork3Stat1Label' },
        { valueKey: 'livestockKeyWork3Stat2Value', labelKey: 'livestockKeyWork3Stat2Label' },
      ],
    },
    {
      icon: Users,
      color: 'from-[#52BC88] to-[#F1BC28]',
      bgImage: 'https://images.unsplash.com/photo-1677501002892-6fe7ba4bfe98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGFncmljdWx0dXJhbCUyMHRyYWluaW5nJTIwZmFybXxlbnwxfHx8fDE3NzAxMjYwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      titleKey: 'livestockKeyWork4Title',
      descKey: 'livestockKeyWork4Desc',
      stats: [
        { valueKey: 'livestockKeyWork4Stat1Value', labelKey: 'livestockKeyWork4Stat1Label' },
        { valueKey: 'livestockKeyWork4Stat2Value', labelKey: 'livestockKeyWork4Stat2Label' },
      ],
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % achievements.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <div className="py-16 bg-white relative overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#52BC88]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#F1BC28]/10 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center shadow-md">
              <span className="text-lg font-bold text-white">2024</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-[#035938]"
              style={{ fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : "inherit" }}
            >
              {t('livestockKeyWorksTitle')}
            </h2>
          </div>
        </motion.div>

        <div className="relative">
          <div className="bg-gradient-to-br from-white to-[#F9F7EF] rounded-3xl overflow-hidden shadow-2xl border border-[#035938]/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <motion.div 
                  key={`image-${activeIndex}`}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${achievements[activeIndex].bgImage}')` }}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${achievements[activeIndex].color} opacity-85`} />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    key={`icon-${activeIndex}`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {(() => {
                      const Icon = achievements[activeIndex].icon;
                      return (
                        <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-xl border border-white/30">
                          <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                        </div>
                      );
                    })()}
                  </motion.div>

                  <motion.h3 
                    key={`title-${activeIndex}`}
                    className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight"
                    style={{ fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : "inherit" }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {t(achievements[activeIndex].titleKey)}
                  </motion.h3>

                  <motion.div 
                    className="flex gap-4 flex-wrap justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {achievements[activeIndex].stats.map((stat, idx) => (
                      <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
                        <div className="text-3xl font-bold text-white">{t(stat.valueKey)}</div>
                        <div 
                          className="text-sm text-white/95 mt-1"
                          style={{ fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : "inherit" }}
                        >
                          {t(stat.labelKey)}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-between" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div>
                  <motion.div
                    key={`desc-${activeIndex}`}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-[#52BC88]/10 to-[#F1BC28]/10 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-[#52BC88]" />
                      <span className="text-sm font-semibold text-[#035938]">
                        {language === 'ar' ? `${activeIndex + 1} من ${achievements.length}` : `${activeIndex + 1} of ${achievements.length}`}
                      </span>
                    </div>

                    <p 
                      className="text-lg text-[#035938] leading-relaxed whitespace-pre-line"
                      style={{ fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : "inherit" }}
                    >
                      {t(achievements[activeIndex].descKey)}
                    </p>
                  </motion.div>
                </div>

                <div className="flex items-center justify-between mt-8 pt-8 border-t border-[#035938]/10">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 hover:scale-110"
                    aria-label="Previous"
                  >
                    {language === 'ar' ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
                  </button>

                  <div className="flex gap-2">
                    {achievements.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`transition-all duration-300 rounded-full ${
                          idx === activeIndex 
                            ? 'w-8 h-3 bg-gradient-to-r from-[#035938] to-[#52BC88]' 
                            : 'w-3 h-3 bg-[#035938]/20 hover:bg-[#035938]/40'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 hover:scale-110"
                    aria-label="Next"
                  >
                    {language === 'ar' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          <motion.button
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Map className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span 
              className="font-semibold"
              style={{ fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : "inherit" }}
            >
              {t('exploreInteractiveMap')}
            </span>
          </motion.button>

          <motion.button
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#52BC88] text-[#035938] rounded-xl shadow-md hover:shadow-xl hover:bg-[#52BC88]/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span 
              className="font-semibold"
              style={{ fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : "inherit" }}
            >
              {t('exploreSupportPrograms')}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
