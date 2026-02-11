import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Tractor, Users, Building2, GraduationCap, BookOpen, MapPin, TrendingUp, Sparkles, Droplet, Cherry, Nut, Wind } from 'lucide-react';

export function RainfedMechanization() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const initiativeGoals = [
    {
      title: language === 'ar' ? 'تبني تقنيات الميكنة الزراعية الحديثة' : 'Adopting Modern Agricultural Mechanization Technologies',
      description: language === 'ar' 
        ? 'تم استيراد نحو ٣٠٠ معدة زراعية متنوعة يتم تشغيلها عبر الجمعيات التعاونية لخدمة صغار المزارعين.'
        : 'Approximately 300 various agricultural equipment have been imported and are operated through cooperative associations to serve smallholder farmers.',
      icon: Tractor,
      color: '#035938'
    },
    {
      title: language === 'ar' ? 'إطلاق "حاضنة رواد الميكنة"' : 'Launch of "Mechanization Pioneers Incubator"',
      description: language === 'ar' 
        ? 'لتمكين رواد الأعمال الشباب'
        : 'To empower young entrepreneurs',
      icon: Sparkles,
      color: '#52BC88'
    }
  ];

  const indicators = [
    {
      number: language === 'ar' ? '٣٧' : '37',
      label: language === 'ar' ? 'رائد أعمال مشغل' : 'Operating Entrepreneurs',
      icon: Users,
      color: '#035938'
    },
    {
      number: language === 'ar' ? '١٩' : '19',
      label: language === 'ar' ? 'جمعية تعاونية مشغلة' : 'Operating Cooperative Associations',
      icon: Building2,
      color: '#52BC88'
    },
    {
      number: language === 'ar' ? '١٤٠' : '140',
      label: language === 'ar' ? 'مستفيداً من الدورات' : 'Course Beneficiaries',
      icon: GraduationCap,
      color: '#F1BC28'
    },
    {
      number: language === 'ar' ? '١٤' : '14',
      label: language === 'ar' ? 'ورشة ودورة تدريبية' : 'Workshops and Training Courses',
      icon: BookOpen,
      color: '#035938'
    },
    {
      number: language === 'ar' ? '٦' : '6',
      label: language === 'ar' ? 'مناطق مستفيدة' : 'Beneficiary Regions',
      icon: MapPin,
      color: '#52BC88'
    },
    {
      number: language === 'ar' ? '٣٬٥٧١' : '3,571',
      label: language === 'ar' ? 'مستفيداً مباشر من المبادرة' : 'Direct Beneficiaries of the Initiative',
      icon: TrendingUp,
      color: '#F1BC28'
    }
  ];

  const processingProjects = [
    {
      title: language === 'ar' ? 'تطوير استخلاص زيت الورد الطائفي' : 'Development of Taif Rose Oil Extraction',
      icon: Droplet,
      color: '#035938'
    },
    {
      title: language === 'ar' ? 'تطوير معالجة وغسيل التين الشوكي للتخلص من الأشواك قبل التعبئة' : 'Development of Cactus Pear Processing and Washing to Remove Thorns Before Packaging',
      icon: Cherry,
      color: '#52BC88'
    },
    {
      title: language === 'ar' ? 'تطوير تقشير وفرز ثمار اللوز' : 'Development of Almond Peeling and Sorting',
      icon: Nut,
      color: '#F1BC28'
    },
    {
      title: language === 'ar' ? 'تطوير معالجة وغزل الخيوط الصوفية' : 'Development of Wool Thread Processing and Spinning',
      icon: Wind,
      color: '#035938'
    }
  ];

  return (
    <div className="bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Tractor className="w-12 h-12 text-[#035938]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#035938]">
              {language === 'ar' ? 'مبادرة الميكنة الزراعية' : 'Agricultural Mechanization Initiative'}
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#52BC88] mx-auto mb-8" />
          <p className="text-xl text-[#052F2A] max-w-4xl mx-auto">
            {language === 'ar'
              ? 'تهدف إلى زيادة الإنتاجية وتقليل التكلفة على صغار المزارعين من خلال:'
              : 'Aiming to increase productivity and reduce costs for smallholder farmers through:'}
          </p>
        </motion.div>

        {/* Initiative Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {initiativeGoals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#F9F7EF] rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-300"
              >
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: goal.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#035938] mb-4">
                    {goal.title}
                  </h3>
                  <p className="text-lg text-[#052F2A] leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Initiative Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#035938] to-[#052F2A] rounded-3xl p-8 md:p-10 shadow-lg mb-20"
        >
          <h3 className={`text-3xl font-bold text-white mb-10 ${isRTL ? 'text-right' : 'text-left'}`}>
            {language === 'ar' ? 'مؤشرات المبادرة:' : 'Initiative Indicators:'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: indicator.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {indicator.number}
                    </div>
                    <div className="text-base text-white/90">
                      {indicator.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Processing Industries Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={`${isRTL ? 'text-right' : 'text-left'} mb-10`}>
            <h3 className="text-3xl font-bold text-[#035938] mb-4">
              {language === 'ar' 
                ? 'تطوير ميكنة الصناعات التحويلية' 
                : 'Development of Processing Industries Mechanization'}
            </h3>
            <p className="text-lg text-[#052F2A]">
              {language === 'ar'
                ? 'يجري العمل حالياً على التالي:'
                : 'Currently working on the following:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processingProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#F9F7EF] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
                  style={{ borderLeft: isRTL ? 'none' : `6px solid ${project.color}`, borderRight: isRTL ? `6px solid ${project.color}` : 'none' }}
                >
                  <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                    <div className="flex-shrink-0">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-2"
                        style={{ backgroundColor: project.color }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-[#035938] leading-relaxed">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 300 Equipment Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-[#52BC88]/20 to-[#F1BC28]/20 rounded-3xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Tractor className="w-10 h-10 text-[#035938]" />
            <div className="text-5xl font-bold text-[#035938]">
              {language === 'ar' ? '٣٠٠' : '300'}
            </div>
          </div>
          <p className="text-xl font-semibold text-[#052F2A]">
            {language === 'ar' 
              ? 'معدة زراعية متنوعة مستوردة لخدمة صغار المزارعين'
              : 'Various agricultural equipment imported to serve smallholder farmers'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}