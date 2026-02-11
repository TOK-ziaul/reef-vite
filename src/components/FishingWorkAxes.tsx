import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Waves, MapPin, Users, TrendingUp, Shield, Award, Network, Rocket } from 'lucide-react';

export function FishingWorkAxes() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const axes = [
    {
      icon: Waves,
      titleKey: 'fishingAxis1Title',
      descKey: 'fishingAxis1Desc',
      gradient: 'from-[#035938] to-[#52BC88]',
      pattern: 'top-right',
    },
    {
      icon: MapPin,
      titleKey: 'fishingAxis2Title',
      descKey: 'fishingAxis2Desc',
      gradient: 'from-[#52BC88] to-[#F1BC28]',
      pattern: 'top-left',
    },
    {
      icon: Users,
      titleKey: 'fishingAxis3Title',
      descKey: 'fishingAxis3Desc',
      gradient: 'from-[#F1BC28] to-[#035938]',
      pattern: 'bottom-right',
    },
    {
      icon: TrendingUp,
      titleKey: 'fishingAxis4Title',
      descKey: 'fishingAxis4Desc',
      gradient: 'from-[#035938] to-[#F1BC28]',
      pattern: 'bottom-left',
    },
    {
      icon: Shield,
      titleKey: 'fishingAxis5Title',
      descKey: 'fishingAxis5Desc',
      gradient: 'from-[#52BC88] to-[#035938]',
      pattern: 'top-right',
    },
    {
      icon: Award,
      titleKey: 'fishingAxis6Title',
      descKey: 'fishingAxis6Desc',
      gradient: 'from-[#F1BC28] to-[#52BC88]',
      pattern: 'top-left',
    },
  ];

  return (
    <div className="mb-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-[#035938]/10 to-[#52BC88]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-gradient-to-r from-[#F1BC28]/10 to-[#035938]/10 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-4">
          {t('fishingWorkAxesTitle')}
        </h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-[#52BC88] via-[#F1BC28] to-[#52BC88] mx-auto rounded-full mb-6" />
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          {t('fishingWorkAxesSubtitle')}
        </p>
      </motion.div>

      {/* Axes Grid - Organic Flowing Layout */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {axes.map((axis, index) => {
            const Icon = axis.icon;
            const isLarge = index % 3 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${isLarge ? 'lg:col-span-2' : ''}`}
              >
                <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${axis.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Decorative pattern based on position */}
                  {axis.pattern === 'top-right' && (
                    <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${axis.gradient} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                  )}
                  {axis.pattern === 'top-left' && (
                    <div className={`absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br ${axis.gradient} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                  )}
                  {axis.pattern === 'bottom-right' && (
                    <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${axis.gradient} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                  )}
                  {axis.pattern === 'bottom-left' && (
                    <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br ${axis.gradient} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${axis.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className="mb-4">
                      <span className={`inline-block bg-gradient-to-r ${axis.gradient} text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#035938] mb-4 leading-tight">
                      {t(axis.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {t(axis.descKey)}
                    </p>

                    {/* Decorative bottom line */}
                    <div className="mt-6 pt-4 border-t border-gray-200/50">
                      <div className={`h-1 w-16 bg-gradient-to-r ${axis.gradient} rounded-full group-hover:w-full transition-all duration-500`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
