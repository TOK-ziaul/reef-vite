import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { DollarSign, Users, MapPin, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function RainfedStats() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const keyStats = [
    {
      icon: DollarSign,
      number: language === 'ar' ? '٩٩٫٦٥' : '99.65',
      unit: language === 'ar' ? 'مليون ريال' : 'Million SAR',
      label: language === 'ar' ? 'إجمالي قيمة الدعم' : 'Total Support Value',
      color: '#035938'
    },
    {
      icon: Users,
      number: language === 'ar' ? '٥٬٤٦٦+' : '5,466+',
      unit: language === 'ar' ? 'مستفيداً' : 'Beneficiaries',
      label: language === 'ar' ? 'إجمالي عدد المستفيدين' : 'Total Beneficiaries',
      subtext: language === 'ar' ? '٢٬٩١٩ رجلاً و٢٬٥٤٧ امرأة' : '2,919 men and 2,547 women',
      color: '#52BC88'
    }
  ];

  const geographicData = [
    { region: language === 'ar' ? 'عسير' : 'Asir', value: 2049, color: '#035938' },
    { region: language === 'ar' ? 'الباحة' : 'Al-Baha', value: 1844, color: '#52BC88' },
    { region: language === 'ar' ? 'جازان' : 'Jazan', value: 661, color: '#F1BC28' },
    { region: language === 'ar' ? 'الحدود الشمالية' : 'Northern Borders', value: 647, color: '#035938' },
    { region: language === 'ar' ? 'مكة المكرمة' : 'Makkah', value: 273, color: '#52BC88' },
    { region: language === 'ar' ? 'القصيم' : 'Qassim', value: 2, color: '#F1BC28' },
    { region: language === 'ar' ? 'نجران' : 'Najran', value: 1, color: '#035938' },
    { region: language === 'ar' ? 'الرياض' : 'Riyadh', value: 1, color: '#52BC88' }
  ];

  const supportedProducts = [
    { name: language === 'ar' ? 'القمح' : 'Wheat', icon: '🌾' },
    { name: language === 'ar' ? 'الشعير' : 'Barley', icon: '🌾' },
    { name: language === 'ar' ? 'الدخن' : 'Millet', icon: '🌾' },
    { name: language === 'ar' ? 'السمسم' : 'Sesame', icon: '🌱' },
    { name: language === 'ar' ? 'الذرة الرفيعة' : 'Sorghum', icon: '🌽' },
    { name: language === 'ar' ? 'الحبحب البعلي' : 'Rainfed Watermelon', icon: '🍉' }
  ];

  const productionData = [
    { year: '2020', production: 6000, label: language === 'ar' ? '٦٬٠٠٠ طن' : '6,000 tons' },
    { year: '2024', production: 62000, label: language === 'ar' ? '٦٢٬٠٠٠ طن' : '62,000 tons', growth: language === 'ar' ? 'نمو ٣٢٪' : '32% Growth' },
    { year: language === 'ar' ? '2026 (مستهدف)' : '2026 (Target)', production: 195000, label: language === 'ar' ? '١٩٥٬٠٠٠ طن' : '195,000 tons' }
  ];

  return (
    <div className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#52BC88]/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#F1BC28]/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#035938]">
                {language === 'ar' ? 'أرقام ومؤشرات' : 'Numbers and Indicators'}
              </h2>
            </div>
            <div className="h-1.5 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] rounded-full" />
          </div>
        </motion.div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {keyStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: stat.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-[#035938] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl md:text-2xl font-semibold text-[#52BC88] mb-3">
                    {stat.unit}
                  </div>
                  <div className="text-lg text-[#052F2A] mb-2">
                    {stat.label}
                  </div>
                  {stat.subtext && (
                    <div className="text-base text-[#052F2A]/70 mt-3 pt-3 border-t border-[#035938]/10">
                      {stat.subtext}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-lg mb-16"
        >
          <div className={`${isRTL ? 'text-right' : 'text-left'} mb-8`}>
            <h3 className="text-3xl font-bold text-[#035938] mb-2">
              {language === 'ar' ? 'التوزيع الجغرافي للمستفيدين' : 'Geographic Distribution of Beneficiaries'}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {geographicData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#F9F7EF] rounded-2xl p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: item.color }} />
                <div className="text-3xl font-bold text-[#035938] mb-2">
                  {language === 'ar' ? item.value.toLocaleString('ar-SA') : item.value.toLocaleString('en-US')}
                </div>
                <div className="text-sm text-[#052F2A]">
                  {item.region}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supported Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#035938] to-[#052F2A] rounded-3xl p-8 md:p-10 shadow-lg mb-16"
        >
          <div className={`${isRTL ? 'text-right' : 'text-left'} mb-8`}>
            <h3 className="text-3xl font-bold text-white mb-2">
              {language === 'ar' ? 'المنتجات المدعومة' : 'Supported Products'}
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {supportedProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{product.icon}</div>
                <div className="text-base text-white font-medium">
                  {product.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Production Evolution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
        >
          <div className={`${isRTL ? 'text-right' : 'text-left'} mb-8`}>
            <h3 className="text-3xl font-bold text-[#035938] mb-2">
              {language === 'ar' ? 'تطور الإنتاج (طن/سنة)' : 'Production Evolution (tons/year)'}
            </h3>
          </div>

          <div className="w-full mb-8" style={{ minHeight: '400px', height: '400px' }}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={productionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#035938" opacity={0.1} />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: '#035938', fontSize: 14, fontWeight: 600 }}
                  axisLine={{ stroke: '#035938', strokeWidth: 2 }}
                />
                <YAxis 
                  tick={{ fill: '#035938', fontSize: 14 }}
                  axisLine={{ stroke: '#035938', strokeWidth: 2 }}
                  tickFormatter={(value) => `${value / 1000}K`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#035938', 
                    border: 'none', 
                    borderRadius: '12px',
                    color: 'white'
                  }}
                  formatter={(value) => [`${(value as number).toLocaleString(language === 'ar' ? 'ar-SA' : 'en-US')} ${language === 'ar' ? 'طن' : 'tons'}`, '']}
                />
                <Bar dataKey="production" radius={[12, 12, 0, 0]}>
                  {productionData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#035938' : index === 1 ? '#52BC88' : '#F1BC28'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productionData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#F9F7EF] rounded-2xl p-6 text-center"
              >
                <div className="text-2xl font-bold text-[#035938] mb-2">
                  {item.year}
                </div>
                <div className="text-3xl font-bold text-[#52BC88] mb-2">
                  {item.label}
                </div>
                {item.growth && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F1BC28]/20 rounded-full">
                    <TrendingUp className="w-4 h-4 text-[#F1BC28]" />
                    <span className="text-sm font-semibold text-[#F1BC28]">{item.growth}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}