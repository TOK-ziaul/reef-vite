import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Award, TrendingUp, Users, Thermometer, Refrigerator, GraduationCap, FileCheck, Sun } from 'lucide-react';

export function HandicraftsKeyWorks() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  // Statistics from the solar drying tunnel project
  const stats = [
    { 
      id: 1, 
      value: '400-500',
      unit: t('handicraftsKeyWorksKg'),
      label: t('handicraftsKeyWorksStat1'),
      icon: Sun,
      color: 'from-[#F1BC28] to-[#035938]'
    },
    { 
      id: 2, 
      value: '30%',
      unit: '',
      label: t('handicraftsKeyWorksStat2'),
      icon: TrendingUp,
      color: 'from-[#52BC88] to-[#035938]'
    },
    { 
      id: 3, 
      value: '2,500',
      unit: t('handicraftsKeyWorksKg'),
      label: t('handicraftsKeyWorksStat3'),
      icon: Award,
      color: 'from-[#035938] to-[#F1BC28]'
    },
    { 
      id: 4, 
      value: '100K',
      unit: t('handicraftsKeyWorksSar'),
      label: t('handicraftsKeyWorksStat4'),
      icon: TrendingUp,
      color: 'from-[#F1BC28] to-[#52BC88]'
    },
  ];

  // Training programs
  const trainings = [
    {
      id: 1,
      count: '22',
      title: t('handicraftsKeyWorksTraining1'),
      icon: GraduationCap,
    },
    {
      id: 2,
      count: '15',
      title: t('handicraftsKeyWorksTraining2'),
      icon: GraduationCap,
    },
    {
      id: 3,
      count: '36',
      title: t('handicraftsKeyWorksTraining3'),
      icon: Users,
    },
    {
      id: 4,
      count: '25',
      title: t('handicraftsKeyWorksTraining4'),
      icon: FileCheck,
    },
  ];

  return (
    <div className="mb-20 relative">
      {/* Floating gradient orbs in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-[#035938]/10 to-[#52BC88]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-[#F1BC28]/10 to-[#035938]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <Award className="w-12 h-12 text-[#F1BC28]" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938]">
            {t('handicraftsKeyWorksTitle')}
          </h2>
        </div>
        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#52BC88] to-transparent mx-auto rounded-full" />
      </motion.div>

      {/* Introduction - Year 2024 Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto mb-16"
      >
        <div className="relative bg-gradient-to-br from-white via-white/95 to-[#F9F7EF] backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50 overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#035938]/20 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#F1BC28]/20 to-transparent rounded-tl-full" />
          
          <div className="relative z-10">
            <div className="inline-block bg-gradient-to-r from-[#035938] to-[#52BC88] text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              2024
            </div>
            <p className="text-xl leading-relaxed text-gray-700">
              {t('handicraftsKeyWorksIntro')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Solar Drying Tunnel Project - Feature Section */}
      <div className="mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Project Title */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-2xl flex items-center justify-center shadow-lg">
              <Sun className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#035938]">
              {t('handicraftsKeyWorksSolarDrying')}
            </h3>
          </div>

          {/* Statistics Grid - Creative flowing design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="group relative"
                >
                  <div className={`relative bg-gradient-to-br ${stat.color} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full`}>
                    {/* Animated glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <Icon className="w-10 h-10 text-white/80 mb-4" />
                      <div className="text-4xl font-bold text-white mb-2">
                        {stat.value}
                        {stat.unit && <span className="text-xl ml-1">{stat.unit}</span>}
                      </div>
                      <div className="text-white/90 text-sm leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional details about the project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-lg"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t('handicraftsKeyWorksSolarDetails')}
            </p>
            <div className="flex items-center gap-3 text-[#035938] font-semibold">
              <Users className="w-5 h-5" />
              <span>{t('handicraftsKeyWorksSolarTraining')}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Training & Capacity Building Section */}
      <div className="mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white px-8 py-3 rounded-full shadow-lg">
            <GraduationCap className="w-6 h-6" />
            <h3 className="text-2xl font-bold">{t('handicraftsKeyWorksTrainingTitle')}</h3>
          </div>
        </motion.div>

        {/* Training cards in wave pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {trainings.map((training, index) => {
            const Icon = training.icon;
            return (
              <motion.div
                key={training.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#52BC88]/30 overflow-hidden">
                  {/* Floating number in background */}
                  <div className="absolute top-4 right-4 text-8xl font-bold text-[#035938]/5 group-hover:text-[#52BC88]/10 transition-colors duration-500">
                    {training.count}
                  </div>
                  
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-[#035938] mb-3">
                        {training.count}
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {training.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional training details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-10 bg-gradient-to-r from-[#F9F7EF] to-white rounded-3xl p-8 shadow-lg border border-[#52BC88]/20"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('handicraftsKeyWorksTrainingDetails')}
          </p>
        </motion.div>
      </div>

      {/* Food Safety & Storage Section */}
      <div className="mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-3xl p-10 shadow-2xl overflow-hidden">
            {/* Animated background patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F1BC28]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Section title */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                  <Refrigerator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  {t('handicraftsKeyWorksFoodSafety')}
                </h3>
              </div>

              {/* Content */}
              <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                <p>{t('handicraftsKeyWorksFoodSafetyDetails')}</p>
                
                {/* Highlight boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Thermometer className="w-6 h-6 text-[#F1BC28]" />
                      <span className="font-semibold text-white">Cool Bot</span>
                    </div>
                    <p className="text-sm text-white/80">{t('handicraftsKeyWorksCoolBot')}</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Sun className="w-6 h-6 text-[#F1BC28]" />
                      <span className="font-semibold text-white">{t('handicraftsKeyWorksSolarUnits')}</span>
                    </div>
                    <p className="text-sm text-white/80">{t('handicraftsKeyWorksSolarUnitsDetails')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Conclusion Section - Inspiring finish */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        <div className="relative bg-gradient-to-br from-[#F9F7EF] via-white to-[#F9F7EF] rounded-3xl p-12 shadow-2xl border-2 border-[#52BC88]/20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28]" />
          
          <div className="relative z-10">
            <p className="text-xl leading-relaxed text-gray-700 text-center">
              {t('handicraftsKeyWorksConclusion')}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
