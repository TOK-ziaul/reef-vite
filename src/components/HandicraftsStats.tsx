import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, Users, DollarSign, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { motion } from 'motion/react';

export function HandicraftsStats() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  // Geographic distribution data
  const geoData = [
    { region: t('handicraftsRegionHail'), value: 12534, color: '#035938' },
    { region: t('handicraftsRegionEastern'), value: 6212, color: '#0d6b44' },
    { region: t('handicraftsRegionAsir'), value: 5685, color: '#1f7d51' },
    { region: t('handicraftsRegionRiyadh'), value: 3435, color: '#318f5e' },
    { region: t('handicraftsRegionMakkah'), value: 2964, color: '#43a16b' },
    { region: t('handicraftsRegionBaha'), value: 2913, color: '#52BC88' },
    { region: t('handicraftsRegionNajran'), value: 2698, color: '#6cc798' },
    { region: t('handicraftsRegionJazan'), value: 2692, color: '#86d2a8' },
    { region: t('handicraftsRegionQassim'), value: 2681, color: '#a0ddb8' },
    { region: t('handicraftsRegionTabuk'), value: 2646, color: '#bae8c8' },
    { region: t('handicraftsRegionJouf'), value: 1877, color: '#d4f3d8' },
    { region: t('handicraftsRegionNorthern'), value: 1803, color: '#e8f9e8' },
    { region: t('handicraftsRegionMadinah'), value: 1377, color: '#F1BC28' },
  ];

  const maxValue = Math.max(...geoData.map(d => d.value));

  // Growth data for timeline
  const growthData = [
    { year: '2020', families: 562 },
    { year: '2021', families: 8000 },
    { year: '2022', families: 18500 },
    { year: '2023', families: 32000 },
    { year: '2024', families: 49517 },
    { year: '2026', families: 60000 },
  ];

  return (
    <div className="mb-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-[#F1BC28] to-[#035938] rounded-full" />
            <TrendingUp className="w-8 h-8 text-[#F1BC28]" />
            <div className="h-1 w-12 bg-gradient-to-r from-[#035938] to-[#F1BC28] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
            {t('handicraftsStatsTitle')}
          </h2>
        </div>
      </div>

      {/* Key Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Total Support Card */}
        <div className="group relative bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-3xl p-8 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
          {/* Animated Blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F1BC28]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-12 h-12 text-[#F1BC28]" />
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-white/80 text-lg mb-2">{t('handicraftsTotalSupport')}</h3>
            <div className="text-5xl font-bold text-white mb-2">{t('handicraftsTotalSupportValue')}</div>
          </div>
        </div>

        {/* Total Beneficiaries Card */}
        <div className="group relative bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-3xl p-8 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
          {/* Animated Blob */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#52BC88]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-12 h-12 text-[#035938]" />
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-white/80 text-lg mb-2">{t('handicraftsTotalBeneficiaries')}</h3>
            <div className="text-5xl font-bold text-white mb-2">{t('handicraftsTotalBeneficiariesValue')}</div>
            <p className="text-white/70 text-sm">{t('handicraftsBeneficiariesBreakdown')}</p>
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="mb-12">
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-[#52BC88]" />
            <h3 className="text-2xl font-bold text-[#035938]">
              {t('handicraftsGeographicDistribution')}
            </h3>
          </div>

          {/* Custom Progress Bars */}
          <div className="space-y-4">
            {geoData.map((item, index) => {
              const percentage = (item.value / maxValue) * 100;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#035938] font-medium text-sm md:text-base min-w-[120px] md:min-w-[180px]">
                      {item.region}
                    </span>
                    <span className="text-[#52BC88] font-bold text-sm md:text-base">
                      {item.value.toLocaleString(isRTL ? 'ar-SA' : 'en-US')}
                    </span>
                  </div>
                  <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                      className="absolute h-full rounded-full group-hover:shadow-lg transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}dd 100%)`,
                        [isRTL ? 'right' : 'left']: 0
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Growth Timeline */}
      <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-8 h-8 text-[#035938]" />
          <h3 className="text-2xl font-bold text-[#035938]">
            {t('handicraftsGrowthTitle')}
          </h3>
        </div>

        {/* Line Chart */}
        <div className="w-full mb-6" style={{ width: '100%', height: '320px' }}>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart
              data={growthData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#035938" opacity={0.1} />
              <XAxis 
                dataKey="year" 
                stroke="#035938"
                tick={{ fill: '#035938' }}
              />
              <YAxis 
                stroke="#035938"
                tick={{ fill: '#035938' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #52BC88',
                  borderRadius: '12px',
                  padding: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="families" 
                stroke="#035938" 
                strokeWidth={3}
                dot={{ fill: '#F1BC28', r: 6 }}
                activeDot={{ r: 8, fill: '#52BC88' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Growth Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-[#035938]/10 to-[#52BC88]/10 rounded-2xl p-6 border border-[#52BC88]/20">
            <div className="text-3xl font-bold text-[#035938] mb-2">562</div>
            <p className="text-gray-700 text-sm">{t('handicraftsGrowth2020')}</p>
          </div>
          <div className="bg-gradient-to-br from-[#52BC88]/10 to-[#F1BC28]/10 rounded-2xl p-6 border border-[#52BC88]/20">
            <div className="text-3xl font-bold text-[#035938] mb-2">49,517</div>
            <p className="text-gray-700 text-sm">{t('handicraftsGrowth2024')}</p>
          </div>
          <div className="bg-gradient-to-br from-[#F1BC28]/10 to-[#035938]/10 rounded-2xl p-6 border border-[#F1BC28]/20">
            <div className="text-3xl font-bold text-[#035938] mb-2">60,000</div>
            <p className="text-gray-700 text-sm">{t('handicraftsGrowth2026')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}