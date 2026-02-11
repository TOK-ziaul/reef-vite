import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Tractor, Factory, Wheat, Droplets, Lightbulb, Target, CheckCircle, MapPin } from 'lucide-react';

export function RainfedProjects() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const keyProjects = [
    {
      title: language === 'ar' ? 'توريد معدات زراعية متنوعة' : 'Supply of Various Agricultural Equipment',
      location: language === 'ar' ? 'مكة المكرمة وجازان' : 'Makkah and Jazan',
      icon: Tractor,
      color: '#035938'
    },
    {
      title: language === 'ar' ? 'إنشاء مصنع لمنتجات السمسم والذرة الرفيعة والدخن' : 'Establishment of a Factory for Sesame, Sorghum, and Millet Products',
      location: language === 'ar' ? 'منطقة جازان' : 'Jazan Region',
      icon: Factory,
      color: '#52BC88'
    },
    {
      title: language === 'ar' ? 'توريد معدات الحصاد لخدمة الزراعة البعلية' : 'Supply of Harvesting Equipment for Rainfed Agriculture',
      location: language === 'ar' ? 'مكة المكرمة وجازان' : 'Makkah and Jazan',
      icon: Tractor,
      color: '#F1BC28'
    },
    {
      title: language === 'ar' ? 'تحسين أصناف المحاصيل الحقلية المحلية' : 'Improvement of Local Field Crop Varieties',
      location: language === 'ar' ? 'جنوب غرب المملكة' : 'Southwest Saudi Arabia',
      icon: Wheat,
      color: '#035938'
    },
    {
      title: language === 'ar' ? 'تشغيل وحدة أبحاث جازان' : 'Operation of Jazan Research Unit',
      location: language === 'ar' ? 'جازان' : 'Jazan',
      icon: Lightbulb,
      color: '#52BC88'
    },
    {
      title: language === 'ar' ? 'إنشاء مزارع نموذجية لمحاصيل الحبوب البعلية' : 'Establishment of Model Farms for Rainfed Grain Crops',
      location: language === 'ar' ? 'المدينة المنورة' : 'Madinah',
      icon: Wheat,
      color: '#F1BC28'
    },
    {
      title: language === 'ar' ? 'إنشاء مزارع نموذجية لمحاصيل الحبوب البعلية' : 'Establishment of Model Farms for Rainfed Grain Crops',
      location: language === 'ar' ? 'عسير وجازان' : 'Asir and Jazan',
      icon: Wheat,
      color: '#035938'
    },
    {
      title: language === 'ar' ? 'توريد معدات الحصاد الحديثة' : 'Supply of Modern Harvesting Equipment',
      location: language === 'ar' ? 'مناطق متعددة' : 'Multiple Regions',
      icon: Tractor,
      color: '#52BC88'
    },
    {
      title: language === 'ar' ? 'توريد معدات إعداد التربة والزراعة الحديثة' : 'Supply of Soil Preparation and Modern Farming Equipment',
      location: language === 'ar' ? 'مناطق متعددة' : 'Multiple Regions',
      icon: Tractor,
      color: '#F1BC28'
    },
    {
      title: language === 'ar' ? 'توريد ملحقات معدات إعداد التربة والزراعة الحديثة' : 'Supply of Accessories for Soil Preparation and Modern Farming Equipment',
      location: language === 'ar' ? 'مناطق متعددة' : 'Multiple Regions',
      icon: Tractor,
      color: '#035938'
    }
  ];

  const irrigationRegions = [
    { name: language === 'ar' ? 'الباحة' : 'Al-Baha' },
    { name: language === 'ar' ? 'جازان' : 'Jazan' },
    { name: language === 'ar' ? 'عسير' : 'Asir' },
    { name: language === 'ar' ? 'مكة المكرمة' : 'Makkah' },
    { name: language === 'ar' ? 'المدينة المنورة' : 'Madinah' },
    { name: language === 'ar' ? 'تبوك' : 'Tabuk' }
  ];

  const technicalFeasibility = [
    language === 'ar' ? 'تعزيز الكفاءة التشغيلية للمعدات الزراعية في التنمية الريفية.' : 'Enhancing operational efficiency of agricultural equipment in rural development.',
    language === 'ar' ? 'تقليل الجهد والتكاليف عبر إدخال تقنيات وميكنة حديثة.' : 'Reducing effort and costs through introducing modern technologies and mechanization.',
    language === 'ar' ? 'تعزيز التعاون بين المزارعين من خلال العمل الجماعي واستخدام المعدات المشتركة.' : 'Promoting cooperation among farmers through collective work and shared equipment use.',
    language === 'ar' ? 'رفع كفاءة إنتاج المحاصيل الحقلية لتحقيق الأمن الغذائي.' : 'Improving field crop production efficiency to achieve food security.',
    language === 'ar' ? 'زيادة استدامة وإنتاجية المحاصيل المطرية المحلية.' : 'Increasing sustainability and productivity of local rainfed crops.',
    language === 'ar' ? 'تحسين توظيف الموارد المائية المتاحة.' : 'Improving utilization of available water resources.',
    language === 'ar' ? 'تطبيق تقنيات زراعية حديثة لتحسين جودة وإنتاجية المحاصيل.' : 'Applying modern agricultural techniques to improve crop quality and productivity.',
    language === 'ar' ? 'دعم توسع الحيازات الزراعية النوعية.' : 'Supporting expansion of quality agricultural holdings.',
    language === 'ar' ? 'تصميم وتنفيذ شبكات ري تتوافق مع طبيعة المنطقة والمحصول.' : 'Designing and implementing irrigation networks compatible with the nature of the region and crop.',
    language === 'ar' ? 'تنظيم سلاسل القيمة من الإنتاج إلى التصنيع والتسويق.' : 'Organizing value chains from production to processing and marketing.'
  ];

  const projectObjectives = [
    language === 'ar' ? 'تحقيق الاستفادة القصوى من إنتاج المحاصيل وتشجيع زيادة الطلب عليها.' : 'Achieving maximum benefit from crop production and encouraging increased demand.',
    language === 'ar' ? 'إنشاء حقول زراعية نموذجية وإرشادية توفر حزمًا متكاملة من العمليات الزراعية طوال الموسم.' : 'Establishing model and demonstration agricultural fields providing integrated packages of agricultural operations throughout the season.',
    language === 'ar' ? 'تنفيذ خزانات وشبكات ري حديثة مناسبة لطبيعة الأراضي، وتوفير مصادر ري تكميلية في حال شح الأمطار.' : 'Implementing modern tanks and irrigation networks suitable for land nature, and providing supplementary irrigation sources in case of rainfall scarcity.',
    language === 'ar' ? 'الاستفادة من الأراضي الزراعية المتاحة ومياه الأمطار عبر تطبيق نظم ري مستدامة وتقنيات حديثة.' : 'Utilizing available agricultural land and rainwater through applying sustainable irrigation systems and modern techniques.',
    language === 'ar' ? 'تطوير الميكنة الزراعية لزيادة الكفاءة وتقليل التكلفة على المزارعين، وتدريب الجمعيات التعاونية على تشغيلها.' : 'Developing agricultural mechanization to increase efficiency and reduce cost on farmers, and training cooperative associations on their operation.'
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-6">
            {language === 'ar' ? 'مشاريع قطاع المحاصيل البعلية' : 'Rainfed Crops Sector Projects'}
          </h2>
          <div className="w-24 h-1 bg-[#52BC88] mx-auto mb-8" />

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#035938] to-[#052F2A] rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">
                {language === 'ar' ? '٢٠' : '20'}
              </div>
              <div className="text-xl text-white/90">
                {language === 'ar' ? 'مشروعاً' : 'Projects'}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-2xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">
                {language === 'ar' ? '٢٠٥٫٤' : '205.4'}
              </div>
              <div className="text-xl text-white/90">
                {language === 'ar' ? 'مليون ريال' : 'Million SAR'}
              </div>
            </motion.div>
          </div>

          <p className="text-lg md:text-xl text-[#052F2A] leading-relaxed max-w-5xl mx-auto">
            {language === 'ar'
              ? 'يعمل برنامج "ريف السعودية" على تنفيذ منظومة من المشاريع النوعية في قطاع المحاصيل البعلية، بهدف تعزيز الأمن الغذائي، ورفع كفاءة الإنتاج، وتحسين استدامة الزراعة المطرية في مختلف مناطق المملكة.'
              : 'The "Reef Saudi" program works on implementing a system of quality projects in the rainfed crops sector, aiming to enhance food security, raise production efficiency, and improve the sustainability of rainfed agriculture in various regions of the Kingdom.'}
          </p>
        </motion.div>

        {/* Key Projects */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold text-[#035938] mb-8 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {language === 'ar' ? 'أبرز مشاريع القطاع:' : 'Key Sector Projects:'}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-[#F9F7EF] rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#035938] mb-2">
                        {project.title}
                      </h4>
                      <div className={`flex items-center gap-2 text-sm text-[#052F2A]/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <MapPin className="w-4 h-4" style={{ color: project.color }} />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Irrigation Systems Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#035938] to-[#052F2A] rounded-3xl p-8 md:p-10 mb-20"
        >
          <div className={`${isRTL ? 'text-right' : 'text-left'} mb-6`}>
            <div className="flex items-center gap-4 mb-4">
              <Droplets className="w-10 h-10 text-white" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {language === 'ar' 
                  ? 'تطبيق نظم الري المستدامة والتقنيات الزراعية الحديثة' 
                  : 'Application of Sustainable Irrigation Systems and Modern Agricultural Technologies'}
              </h3>
            </div>
            <p className="text-white/90 text-lg mb-6">
              {language === 'ar'
                ? 'لصغار مزارعي المحاصيل الحقلية المطرية في:'
                : 'For smallholder rainfed field crop farmers in:'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {irrigationRegions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300"
              >
                <MapPin className="w-6 h-6 text-white mx-auto mb-2" />
                <div className="text-sm text-white font-medium">
                  {region.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Feasibility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F9F7EF] rounded-3xl p-8 md:p-10 mb-20"
        >
          <h3 className={`text-3xl font-bold text-[#035938] mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {language === 'ar' ? 'الجدوى الفنية للمشاريع:' : 'Technical Feasibility of Projects:'}
          </h3>
          <p className={`text-lg text-[#052F2A] mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {language === 'ar'
              ? 'تسهم مشاريع قطاع المحاصيل البعلية في تحقيق مجموعة من المكاسب الفنية والإنتاجية، من أبرزها:'
              : 'Rainfed crops sector projects contribute to achieving a set of technical and productive gains, most notably:'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalFeasibility.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <CheckCircle className="w-6 h-6 text-[#52BC88] flex-shrink-0 mt-0.5" />
                <span className="text-base text-[#052F2A]">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border-2 border-[#035938]/10 p-8 md:p-10"
        >
          <div className={`flex items-center gap-4 mb-8 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
            <Target className="w-10 h-10 text-[#035938]" />
            <h3 className="text-3xl font-bold text-[#035938]">
              {language === 'ar' ? 'أهداف المشاريع:' : 'Project Objectives:'}
            </h3>
          </div>
          <p className={`text-lg text-[#052F2A] mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {language === 'ar'
              ? 'تركز مشاريع قطاع المحاصيل البعلية في برنامج "ريف السعودية" على تحقيق الأهداف التالية:'
              : 'Rainfed crops sector projects in the "Reef Saudi" program focus on achieving the following objectives:'}
          </p>

          <div className="space-y-4">
            {projectObjectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-[#F9F7EF] rounded-2xl p-6"
              >
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white"
                    style={{ backgroundColor: index % 3 === 0 ? '#035938' : index % 3 === 1 ? '#52BC88' : '#F1BC28' }}
                  >
                    {language === 'ar' ? (index + 1).toLocaleString('ar-SA') : index + 1}
                  </div>
                  <p className="text-base text-[#052F2A] leading-relaxed flex-1">
                    {objective}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}