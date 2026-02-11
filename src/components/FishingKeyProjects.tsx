import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Anchor, Thermometer, GraduationCap, Network } from 'lucide-react';

export function FishingKeyProjects() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const projects = [
    {
      icon: Anchor,
      titleKey: 'fishingProject1Title',
      descKey: 'fishingProject1Desc',
      detailsKey: 'fishingProject1Details',
      statsKey: 'fishingProject1Stats',
      gradient: 'from-[#035938] to-[#52BC88]',
      imageUrl: 'https://images.unsplash.com/photo-1699619712129-08df80815428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwaGFyYm9yJTIwcG9ydCUyMGJvYXRzfGVufDF8fHx8MTc3MDY0NDY5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Thermometer,
      titleKey: 'fishingProject2Title',
      descKey: 'fishingProject2Desc',
      detailsKey: 'fishingProject2Details',
      statsKey: 'fishingProject2Stats',
      gradient: 'from-[#52BC88] to-[#F1BC28]',
      imageUrl: 'https://images.unsplash.com/photo-1565926670755-88c340527be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwYXF1YWN1bHR1cmUlMjBmYXJtJTIwbW9kZXJufGVufDF8fHx8MTc3MDY0NDYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: GraduationCap,
      titleKey: 'fishingProject3Title',
      descKey: 'fishingProject3Desc',
      detailsKey: 'fishingProject3Details',
      statsKey: 'fishingProject3Stats',
      gradient: 'from-[#F1BC28] to-[#035938]',
      imageUrl: 'https://images.unsplash.com/photo-1616555902668-ec8d3cd46fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwYm9hdCUyMG9jZWFuJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzcwNjQ0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Network,
      titleKey: 'fishingProject4Title',
      descKey: 'fishingProject4Desc',
      detailsKey: 'fishingProject4Details',
      statsKey: 'fishingProject4Stats',
      gradient: 'from-[#035938] to-[#F1BC28]',
      imageUrl: 'https://images.unsplash.com/photo-1565926670755-88c340527be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwYXF1YWN1bHR1cmUlMjBmYXJtJTIwbW9kZXJufGVufDF8fHx8MTc3MDY0NDYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="mb-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#035938]/5 to-[#52BC88]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#F1BC28]/5 to-[#035938]/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-4">
          {t('fishingKeyProjectsTitle')}
        </h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-[#52BC88] via-[#F1BC28] to-[#52BC88] mx-auto rounded-full mb-6" />
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          {t('fishingKeyProjectsSubtitle')}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const isReverse = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isReverse && !isRTL ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden rounded-3xl shadow-2xl ${isReverse && !isRTL ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] relative">
                    <img
                      src={project.imageUrl}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute bottom-6 right-6">
                      <div className={`bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-full font-bold text-2xl shadow-xl`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`${isReverse && !isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-[#035938] leading-tight">
                      {t(project.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {t(project.descKey)}
                    </p>

                    {/* Details */}
                    <div className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                      <p className="text-gray-600 leading-relaxed">
                        {t(project.detailsKey)}
                      </p>
                    </div>

                    {/* Stats Badge */}
                    <div className="flex items-center gap-3">
                      <div className={`flex-1 bg-gradient-to-r ${project.gradient} rounded-2xl p-5 shadow-lg`}>
                        <p className="text-white font-bold text-center text-lg">
                          {t(project.statsKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="max-w-5xl mx-auto mt-16 text-center relative z-10"
      >
        <div className="bg-gradient-to-br from-[#035938]/10 to-[#52BC88]/10 backdrop-blur-xl rounded-3xl p-8 border border-[#52BC88]/20">
          <p className="text-gray-700 text-lg leading-relaxed">
            {t('fishingKeyProjectsConclusion')}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
