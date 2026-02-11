import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Target, Users, TrendingUp } from 'lucide-react';

export function RainfedObjectives() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const objectives = [
    {
      icon: TrendingUp,
      color: '#035938',
      gradient: 'from-[#035938] to-[#052F2A]',
      title: language === 'ar' ? 'زيادة ورفع إنتاجية المحاصيل البعلية' : 'Increase and Raise Productivity of Rainfed Crops',
      description: language === 'ar'
        ? 'زيادة ورفع إنتاجية المحاصيل البعلية في المناطق ذات الميز النسبية باستخدام تقنيات حصاد المياه وأساليب الري الحديثة.'
        : 'Increase and raise the productivity of rainfed crops in areas with comparative advantages using rainwater harvesting techniques and modern irrigation methods.'
    },
    {
      icon: Target,
      color: '#52BC88',
      gradient: 'from-[#52BC88] to-[#035938]',
      title: language === 'ar' ? 'زيادة نسبة الاكتفاء الذاتي' : 'Increase Self-Sufficiency Rate',
      description: language === 'ar'
        ? 'زيادة نسبة الاكتفاء الذاتي من هذه المحاصيل وإحلال نسبة من الواردات.'
        : 'Increase the self-sufficiency rate in these crops and substitute a portion of imports.'
    },
    {
      icon: Users,
      color: '#F1BC28',
      gradient: 'from-[#F1BC28] to-[#F09800]',
      title: language === 'ar' ? 'زيادة دخل صغار المزارعين' : 'Increase Income of Smallholder Farmers',
      description: language === 'ar'
        ? 'زيادة دخل صغار المزارعين وتحسين سبل معيشتهم.'
        : 'Increase the income of smallholder farmers and improve their livelihoods.'
    }
  ];

  return (
    <div className="bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-6">
            {language === 'ar' ? 'أهداف القطاع' : 'Sector Objectives'}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] rounded-full mx-auto" />
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Background card */}
                <div className="relative bg-white rounded-3xl p-8 md:p-10 h-full shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#035938]/10">
                  
                  {/* Gradient accent on top */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${objective.gradient} rounded-t-3xl`}
                  />

                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    {/* Number badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div 
                        className={`w-16 h-16 bg-gradient-to-br ${objective.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div 
                        className="text-7xl font-bold opacity-5"
                        style={{ color: objective.color }}
                      >
                        {language === 'ar' ? (index + 1).toLocaleString('ar-SA') : (index + 1).toString().padStart(2, '0')}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-5 leading-tight min-h-[80px] flex items-center">
                      {objective.title}
                    </h3>
                    
                    <p className="text-lg text-[#052F2A]/80 leading-relaxed">
                      {objective.description}
                    </p>
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
