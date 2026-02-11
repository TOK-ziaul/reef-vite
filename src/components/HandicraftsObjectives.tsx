import { useLanguage } from '../context/LanguageContext';
import { Target, Users, TrendingUp, Award, Globe, Sparkles } from 'lucide-react';

export function HandicraftsObjectives() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const objectives = [
    {
      icon: Target,
      titleKey: 'handicraftsObj1Title',
      descKey: 'handicraftsObj1Desc',
      color: 'from-[#035938] to-[#52BC88]',
      delay: '0',
    },
    {
      icon: Users,
      titleKey: 'handicraftsObj2Title',
      descKey: 'handicraftsObj2Desc',
      color: 'from-[#F1BC28] to-[#035938]',
      delay: '100',
    },
    {
      icon: TrendingUp,
      titleKey: 'handicraftsObj3Title',
      descKey: 'handicraftsObj3Desc',
      color: 'from-[#52BC88] to-[#F1BC28]',
      delay: '200',
    },
    {
      icon: Award,
      titleKey: 'handicraftsObj4Title',
      descKey: 'handicraftsObj4Desc',
      color: 'from-[#035938] to-[#F1BC28]',
      delay: '300',
    },
    {
      icon: Globe,
      titleKey: 'handicraftsObj5Title',
      descKey: 'handicraftsObj5Desc',
      color: 'from-[#F1BC28] to-[#52BC88]',
      delay: '400',
    },
    {
      icon: Sparkles,
      titleKey: 'handicraftsObj6Title',
      descKey: 'handicraftsObj6Desc',
      color: 'from-[#52BC88] to-[#035938]',
      delay: '500',
    },
  ];

  return (
    <div className="mb-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-[#035938] to-[#F1BC28] rounded-full" />
            <Target className="w-8 h-8 text-[#F1BC28]" />
            <div className="h-1 w-12 bg-gradient-to-r from-[#F1BC28] to-[#035938] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
            {t('handicraftsObjectivesTitle')}
          </h2>
        </div>
      </div>

      {/* Objectives Grid with Glassmorphism */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectives.map((objective, index) => {
          const Icon = objective.icon;
          return (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${objective.delay}ms both`,
              }}
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${objective.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating Blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#F1BC28]/20 to-[#52BC88]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${objective.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#035938] mb-3 leading-tight">
                    {t(objective.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {t(objective.descKey)}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${objective.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}