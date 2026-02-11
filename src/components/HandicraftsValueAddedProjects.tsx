import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Lightbulb, Target, TrendingUp, CheckCircle2, Sparkles, Brain, Database, Smartphone } from 'lucide-react';

export function HandicraftsValueAddedProjects() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const projects = [
    { 
      id: 1, 
      icon: Sparkles,
      titleKey: 'handicraftsProject1',
      color: 'from-[#035938] to-[#52BC88]'
    },
    { 
      id: 2, 
      icon: Smartphone,
      titleKey: 'handicraftsProject2',
      color: 'from-[#52BC88] to-[#F1BC28]'
    },
    { 
      id: 3, 
      icon: Target,
      titleKey: 'handicraftsProject3',
      color: 'from-[#F1BC28] to-[#035938]'
    },
    { 
      id: 4, 
      icon: CheckCircle2,
      titleKey: 'handicraftsProject4',
      color: 'from-[#035938] to-[#F1BC28]'
    },
    { 
      id: 5, 
      icon: TrendingUp,
      titleKey: 'handicraftsProject5',
      color: 'from-[#52BC88] to-[#035938]'
    },
    { 
      id: 6, 
      icon: Lightbulb,
      titleKey: 'handicraftsProject6',
      color: 'from-[#F1BC28] to-[#52BC88]'
    },
  ];

  const technicalBenefits = [
    { id: 1, titleKey: 'handicraftsTechBenefit1', icon: Sparkles },
    { id: 2, titleKey: 'handicraftsTechBenefit2', icon: Smartphone },
    { id: 3, titleKey: 'handicraftsTechBenefit3', icon: Database },
    { id: 4, titleKey: 'handicraftsTechBenefit4', icon: Database },
    { id: 5, titleKey: 'handicraftsTechBenefit5', icon: CheckCircle2 },
    { id: 6, titleKey: 'handicraftsTechBenefit6', icon: TrendingUp },
    { id: 7, titleKey: 'handicraftsTechBenefit7', icon: CheckCircle2 },
  ];

  const goals = [
    { id: 1, titleKey: 'handicraftsGoal1', icon: Brain },
    { id: 2, titleKey: 'handicraftsGoal2', icon: Lightbulb },
  ];

  return (
    <div className="mb-20">
      {/* Floating Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#52BC88]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F1BC28]/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#F1BC28] to-[#035938] rounded-full" />
            <Lightbulb className="w-10 h-10 text-[#F1BC28]" />
            <div className="h-1 w-12 bg-gradient-to-r from-[#035938] to-[#F1BC28] rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-4">
            {t('handicraftsValueAddedTitle')}
          </h2>
          {/* Stats Banner */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#035938] to-[#52BC88] text-white px-8 py-4 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold">6</div>
              <div className="text-sm opacity-90">{t('handicraftsProjectsCount')}</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-[#F1BC28] to-[#035938] text-white px-8 py-4 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold">{t('handicraftsProjectsValue')}</div>
              <div className="text-sm opacity-90">{t('handicraftsProjectsValueLabel')}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Introduction Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-16"
      >
        <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#52BC88]/10 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#F1BC28]/10 to-transparent rounded-full blur-2xl" />
          
          <p className="text-xl leading-relaxed text-gray-700 relative z-10">
            {t('handicraftsValueAddedIntro')}
          </p>
        </div>
      </motion.div>

      {/* Main Projects - Hexagonal Grid */}
      <div className="mb-16">
        <motion.h3
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#035938] mb-8 text-center"
        >
          {t('handicraftsMainProjects')}
        </motion.h3>

        {/* Flowing Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative h-full bg-gradient-to-br ${project.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {/* Animated background blob */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="relative z-10">
                    {/* Icon Badge */}
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Number Badge */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/30 backdrop-blur-lg rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{project.id}</span>
                    </div>
                    
                    {/* Content */}
                    <p className="text-white text-lg leading-relaxed">
                      {t(project.titleKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Technical Benefits Section - Organic Flowing Design */}
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-xl overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28]" />
          
          <h3 className="text-3xl font-bold text-[#035938] mb-10 text-center flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-[#F1BC28]" />
            {t('handicraftsTechnicalBenefits')}
          </h3>

          {/* Benefits in flowing organic layout */}
          <div className="space-y-4">
            {technicalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group flex items-start gap-4 p-6 bg-gradient-to-r from-white/50 to-transparent rounded-2xl hover:from-white/80 hover:to-white/50 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t(benefit.titleKey)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Goals Section - Split Design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {goals.map((goal, index) => {
          const Icon = goal.icon;
          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`relative h-full bg-gradient-to-br ${index === 0 ? 'from-[#035938] to-[#52BC88]' : 'from-[#F1BC28] to-[#035938]'} rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden`}>
                {/* Floating blob */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                
                <div className="relative z-10">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-6xl font-bold text-white/20">{goal.id}</div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {t('handicraftsGoalsTitle')}
                  </h4>
                  
                  {/* Content */}
                  <p className="text-white/90 text-lg leading-relaxed">
                    {t(goal.titleKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}