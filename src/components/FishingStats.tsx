import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Fish, Users, Anchor, TrendingUp } from 'lucide-react';

export function FishingStats() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Fish,
      number: '450+',
      labelKey: 'fishingStatsFishFarmers',
      gradient: 'from-[#035938] to-[#52BC88]',
      bgGradient: 'from-[#035938]/10 to-[#52BC88]/10',
    },
    {
      icon: Anchor,
      number: '28',
      labelKey: 'fishingStatsAquacultureSites',
      gradient: 'from-[#52BC88] to-[#F1BC28]',
      bgGradient: 'from-[#52BC88]/10 to-[#F1BC28]/10',
    },
    {
      icon: Users,
      number: '320+',
      labelKey: 'fishingStatsTrainedFishermen',
      gradient: 'from-[#F1BC28] to-[#035938]',
      bgGradient: 'from-[#F1BC28]/10 to-[#035938]/10',
    },
    {
      icon: TrendingUp,
      number: '65%',
      labelKey: 'fishingStatsProductionIncrease',
      gradient: 'from-[#035938] to-[#F1BC28]',
      bgGradient: 'from-[#035938]/10 to-[#F1BC28]/10',
    },
  ];

  return (
    <div className="mb-20 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#035938]/5 to-[#52BC88]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#F1BC28]/5 to-[#035938]/5 rounded-full blur-3xl" />
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-4">
          {t('fishingStatsTitle')}
        </h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-[#52BC88] via-[#F1BC28] to-[#52BC88] mx-auto rounded-full" />
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-full bg-gradient-to-br ${stat.bgGradient} backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                {/* Animated gradient blob */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${stat.gradient} opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="relative z-10 mb-3">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                </div>

                {/* Label */}
                <div className="relative z-10">
                  <p className="text-gray-700 font-semibold text-lg leading-relaxed">
                    {t(stat.labelKey)}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${stat.gradient} opacity-10 rounded-tl-full`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto mt-12 text-center relative z-10"
      >
        <p className="text-gray-600 text-lg leading-relaxed">
          {t('fishingStatsDescription')}
        </p>
      </motion.div>
    </div>
  );
}
