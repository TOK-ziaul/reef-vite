import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Sprout, Beaker, BookOpen, Calendar, MapPin, Users, GraduationCap, Lightbulb } from 'lucide-react';

export function RainfedImplementedWorks() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const mountainTrialDetails = [
    {
      label: language === 'ar' ? 'بدء التجارب' : 'Trial Start',
      value: language === 'ar' ? '٩ مايو ٢٠٢٤' : 'May 9, 2024',
      icon: Calendar,
      color: '#035938'
    },
    {
      label: language === 'ar' ? 'عدد الأصناف' : 'Number of Varieties',
      value: language === 'ar' ? '٢٤ صنفاً' : '24 Varieties',
      subtext: language === 'ar' ? '(٢٤ صنف ذرة رفيعة)' : '(24 Sorghum)',
      icon: Sprout,
      color: '#52BC88'
    },
    {
      label: language === 'ar' ? 'الموقع' : 'Location',
      value: language === 'ar' ? 'محطة إكثار البذور – مركز البذور والتقاوي – الرياض' : 'Seed Multiplication Station - Seeds and Seedlings Center - Riyadh',
      subtext: language === 'ar' ? '(موقع تجريبي في عسير)' : '(Experimental site in Asir)',
      icon: MapPin,
      color: '#F1BC28'
    },
    {
      label: language === 'ar' ? 'اكتمال الحصاد' : 'Harvest Completion',
      value: language === 'ar' ? '٠٠ أكتوبر ٢٠٢٤' : 'October 10, 2024',
      icon: Calendar,
      color: '#035938'
    }
  ];

  const coastalTrials = [
    {
      title: language === 'ar' ? 'تجربة الحبوب والأعلاف - الذرة الرفيعة' : 'Grain and Fodder Trial - Sorghum',
      color: '#035938'
    },
    {
      title: language === 'ar' ? 'تجربة الحبوب والأعلاف - الذرة الرفيعة' : 'Grain and Fodder Trial - Sorghum',
      color: '#52BC88'
    },
    {
      title: language === 'ar' ? 'تجربة الحبوب والأعلاف - الدخن' : 'Grain and Fodder Trial - Millet',
      color: '#F1BC28'
    },
    {
      title: language === 'ar' ? 'تجربة الحبوب والأعلاف - الدخن' : 'Grain and Fodder Trial - Millet',
      color: '#035938'
    }
  ];

  const scientificWorks = [
    {
      title: language === 'ar' ? 'دليل إرشادي للأمراض والآفات' : 'Guide for Diseases and Pests',
      description: language === 'ar' 
        ? 'إعداد دليل إرشادي للأمراض والآفات التي تصيب المحاصيل المستهدفة بالتعاون مع المركز الدولي لبحوث المحاصيل للمناطق الرطبة شبه الجافة (اكرسات).'
        : 'Preparation of a guide for diseases and pests affecting target crops in collaboration with the International Crops Research Institute for the Semi-Arid Tropics (ICRISAT).',
      icon: BookOpen,
      color: '#035938'
    },
    {
      title: language === 'ar' ? 'الخطة التنفيذية للمحاصيل البعلية' : 'Executive Plan for Rainfed Crops',
      description: language === 'ar' 
        ? 'إعداد الخطة التنفيذية للمحاصيل البعلية.'
        : 'Preparation of the executive plan for rainfed crops.',
      icon: Lightbulb,
      color: '#52BC88'
    },
    {
      title: language === 'ar' ? 'مبادرة بنك البذور المجتمعي' : 'Community Seed Bank Initiative',
      description: language === 'ar' 
        ? 'إطلاق مبادرة بنك البذور المجتمعي.'
        : 'Launch of the community seed bank initiative.',
      icon: Sprout,
      color: '#F1BC28'
    },
    {
      title: language === 'ar' ? 'مبادرة إنتاج السيلاج' : 'Silage Production Initiative',
      description: language === 'ar' 
        ? 'إطلاق مبادرة إنتاج السيلاج من المجموع الخضري للذرة الرفيعة والدخن.'
        : 'Launch of silage production initiative from sorghum and millet green biomass.',
      icon: Sprout,
      color: '#035938'
    }
  ];

  const trainingPrograms = [
    {
      title: language === 'ar' ? 'دورة تدريبية في خصوبة التربة والري الزراعي' : 'Training Course in Soil Fertility and Agricultural Irrigation',
      location: language === 'ar' ? 'جازان والنماص' : 'Jazan and Al-Namas',
      participants: language === 'ar' ? '٧٠ مزارعاً وموظفاً' : '70 farmers and employees',
      icon: GraduationCap,
      color: '#52BC88'
    },
    {
      title: language === 'ar' ? 'دورة تدريبية في إدارة البنوك الجينية' : 'Training Course in Gene Bank Management',
      location: language === 'ar' ? 'موظفي وزارة البيئة والمياه والزراعة' : 'Ministry of Environment, Water and Agriculture staff',
      participants: language === 'ar' ? '٢٧ متدرباً' : '27 trainees',
      icon: Beaker,
      color: '#F1BC28'
    }
  ];

  return (
    <div className="bg-[#F9F7EF] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-6">
            {language === 'ar' ? 'أهم الأعمال المنفذة' : 'Key Implemented Works'}
          </h2>
          <div className="w-24 h-1 bg-[#52BC88] mx-auto" />
        </motion.div>

        {/* First: Mountain Environment Trials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-lg mb-12"
        >
          <div className={`flex items-center gap-4 mb-8 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
            <div className="w-12 h-12 rounded-xl bg-[#035938] flex items-center justify-center text-white font-bold text-xl">
              {language === 'ar' ? '٢' : '2'}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#035938]">
              {language === 'ar' 
                ? 'تجارب الأصناف المحسنة – البيئة الجبلية (أبها في منطقة عسير)' 
                : 'Improved Varieties Trials - Mountain Environment (Abha in Asir Region)'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {mountainTrialDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#F9F7EF] rounded-2xl p-6"
                >
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className="flex items-center gap-3 mb-4" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: detail.color }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-[#052F2A]/70">
                        {detail.label}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-[#035938] mb-1">
                      {detail.value}
                    </p>
                    {detail.subtext && (
                      <p className="text-sm text-[#052F2A]/70">
                        {detail.subtext}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-[#035938]/10 to-[#52BC88]/10 rounded-2xl p-6"
          >
            <p className={`text-base text-[#052F2A] flex items-center gap-2 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}>
              <Lightbulb className="w-5 h-5 text-[#035938] flex-shrink-0" />
              <span>
                {language === 'ar' 
                  ? 'تعد هذه التجارب امتداداً لتجارب بدأت عام ٢٠٢٣ في جازان'
                  : 'These trials are an extension of trials that began in 2023 in Jazan'}
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Second: Coastal Environment Trials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-lg mb-12"
        >
          <div className={`flex items-center gap-4 mb-8 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
            <div className="w-12 h-12 rounded-xl bg-[#52BC88] flex items-center justify-center text-white font-bold text-xl">
              {language === 'ar' ? '٢' : '2'}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#035938]">
              {language === 'ar' 
                ? 'تجارب الأصناف المحسنة – البيئة الساحلية (جازان)' 
                : 'Improved Varieties Trials - Coastal Environment (Jazan)'}
            </h3>
          </div>

          <div className="mb-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#F1BC28]/20 rounded-full mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Calendar className="w-5 h-5 text-[#F1BC28]" />
              <span className="text-sm font-semibold text-[#F1BC28]">
                {language === 'ar' ? '٠٨-٠٩ سبتمبر ٢٠٢٤' : 'September 18-19, 2024'}
              </span>
            </div>
            <p className={`text-lg text-[#052F2A] mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              {language === 'ar'
                ? 'أُجريت أربع تجارب جديدة شملت تجربتين للحبوب والأعلاف لمحصول الذرة الرفيعة وتجربتين للحبوب والأعلاف لمحصول الدخن، بهدف تحديد الأصناف الأكثر ملاءمة لبيئة منطقة جازان.'
                : 'Four new trials were conducted, including two grain and fodder trials for sorghum and two grain and fodder trials for millet, aiming to identify the most suitable varieties for the Jazan region environment.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coastalTrials.map((trial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#F9F7EF] rounded-2xl p-6 text-center hover:shadow-md transition-all duration-300"
                style={{ borderTop: `4px solid ${trial.color}` }}
              >
                <div className="text-4xl mb-4" style={{ color: trial.color }}>●</div>
                <p className="text-sm font-semibold text-[#035938]">
                  {trial.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Third: Scientific Guides and Procedures */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#035938] to-[#052F2A] rounded-3xl p-8 md:p-10 shadow-lg mb-12"
        >
          <div className={`flex items-center gap-4 mb-8 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-xl">
              {language === 'ar' ? '٣' : '3'}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {language === 'ar' ? 'أدلة وإجراءات علمية' : 'Scientific Guides and Procedures'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {scientificWorks.map((work, index) => {
              const Icon = work.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className="flex items-center gap-3 mb-4" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: work.color }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white flex-1">
                        {work.title}
                      </h4>
                    </div>
                    <p className="text-base text-white/90 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Training Programs */}
          <div className="border-t border-white/20 pt-8">
            <h4 className={`text-2xl font-bold text-white mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {language === 'ar' ? 'الدورات التدريبية' : 'Training Programs'}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="bg-white rounded-2xl p-6"
                  >
                    <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                      <div className="flex items-center gap-3 mb-4" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: program.color }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h5 className="text-lg font-bold text-[#035938] flex-1">
                          {program.title}
                        </h5>
                      </div>
                      <div className="space-y-2">
                        <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <MapPin className="w-4 h-4 text-[#52BC88]" />
                          <p className="text-sm text-[#052F2A]">{program.location}</p>
                        </div>
                        <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Users className="w-4 h-4 text-[#F1BC28]" />
                          <p className="text-sm text-[#052F2A]">{program.participants}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}