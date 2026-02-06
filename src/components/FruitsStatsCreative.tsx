import React, { useState } from 'react';
import { TrendingUp, Users, MapPin, Sparkles, Calendar } from 'lucide-react';

interface FruitsStatsCreativeProps {
  t: (key: string) => string;
  language: string;
}

export function FruitsStatsCreative({ t, language }: FruitsStatsCreativeProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions = [
    { name: language === 'ar' ? 'نجران' : 'Najran', count: '3,984', color: '#035938', size: 'large' },
    { name: language === 'ar' ? 'عسير' : 'Asir', count: '2,617', color: '#52BC88', size: 'large' },
    { name: language === 'ar' ? 'جازان' : 'Jazan', count: '589', color: '#F1BC28', size: 'medium' },
    { name: language === 'ar' ? 'الباحة' : 'Al-Baha', count: '577', color: '#035938', size: 'medium' },
    { name: language === 'ar' ? 'مكة المكرمة' : 'Makkah', count: '478', color: '#52BC88', size: 'medium' },
    { name: language === 'ar' ? 'حائل' : 'Hail', count: '255', color: '#F1BC28', size: 'small' },
    { name: language === 'ar' ? 'الرياض' : 'Riyadh', count: '160', color: '#035938', size: 'small' },
    { name: language === 'ar' ? 'المنطقة الشرقية' : 'Eastern Region', count: '109', color: '#52BC88', size: 'small' },
    { name: language === 'ar' ? 'تبوك' : 'Tabuk', count: '100', color: '#F1BC28', size: 'small' },
    { name: language === 'ar' ? 'القصيم' : 'Qassim', count: '78', color: '#035938', size: 'small' },
    { name: language === 'ar' ? 'المدينة المنورة' : 'Madinah', count: '59', color: '#52BC88', size: 'small' },
    { name: language === 'ar' ? 'الجوف' : 'Al-Jouf', count: '49', color: '#F1BC28', size: 'small' },
    { name: language === 'ar' ? 'الحدود الشمالية' : 'Northern Borders', count: '5', color: '#035938', size: 'small' },
  ];

  return (
    <div className="mb-20 relative overflow-hidden">
      
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#52BC88]/10 via-transparent to-[#F1BC28]/10"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#035938]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#52BC88]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#52BC88]"></div>
          <p className="text-[#52BC88] text-xs tracking-[0.3em] uppercase">Impact Metrics</p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#52BC88]"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#035938]">
          {t('fruitsStatsTitle')}
        </h2>
      </div>

      {/* Main Stats - Diagonal Split Design */}
      <div className="max-w-7xl mx-auto px-4 mb-24 relative z-10">
        <div className="relative h-[200px] md:h-[150px]">
          
          {/* Support Amount - Left Side */}
          <div className="absolute left-0 top-0 w-full md:w-[55%] h-1/2 md:h-full group">
            <div 
              className="relative h-full bg-gradient-to-br from-[#035938] to-[#52BC88] overflow-hidden transition-all duration-700 group-hover:shadow-2xl"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)',
                transform: 'perspective(1000px) rotateY(-2deg)'
              }}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl transform -translate-x-10 translate-y-10 group-hover:scale-125 transition-transform duration-1000"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center px-6 md:px-8 text-white">
                <div className="flex items-center gap-2 mb-2 group-hover:translate-x-2 transition-transform duration-500">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <p className="text-xs md:text-sm opacity-90 tracking-wide">{t('fruitsTotalSupport')}</p>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold group-hover:scale-105 transition-transform duration-500 origin-left">
                  {t('fruitsSupportAmount')}
                </h3>
              </div>
            </div>
          </div>

          {/* Beneficiaries - Right Side */}
          <div className="absolute right-0 bottom-0 w-full md:w-[55%] h-1/2 md:h-full group">
            <div 
              className="relative h-full bg-gradient-to-br from-[#F1BC28] to-[#035938] overflow-hidden transition-all duration-700 group-hover:shadow-2xl"
              style={{
                clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)',
                transform: 'perspective(1000px) rotateY(2deg)'
              }}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full blur-2xl transform translate-x-10 translate-y-10 group-hover:scale-125 transition-transform duration-1000"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center px-6 md:px-8 text-white">
                <div className="flex items-center gap-2 mb-2 group-hover:translate-x-2 transition-transform duration-500">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <p className="text-xs md:text-sm opacity-90 tracking-wide">{t('fruitsBeneficiaries')}</p>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-1 group-hover:scale-105 transition-transform duration-500 origin-left">
                  {t('fruitsBeneficiariesCount')}
                </h3>
                <p className="text-xs md:text-sm opacity-90">{t('fruitsBeneficiariesDetails')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Geographic Distribution - Bubble Cluster Layout */}
      <div className="max-w-7xl mx-auto px-4 mb-24 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#52BC88]/20 shadow-lg">
            <MapPin className="w-5 h-5 text-[#52BC88]" />
            <h3 className="text-xl font-bold text-[#035938]">{t('fruitsGeoDistribution')}</h3>
          </div>
        </div>

        {/* Professional Bar Chart Layout */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/60 shadow-xl">
          
          {/* Chart Grid */}
          <div className="space-y-4">
            {[
              { name: language === 'ar' ? 'نجران' : 'Najran', count: '3,984', value: 3984, color: '#035938' },
              { name: language === 'ar' ? 'عسير' : 'Asir', count: '2,617', value: 2617, color: '#52BC88' },
              { name: language === 'ar' ? 'جازان' : 'Jazan', count: '589', value: 589, color: '#F1BC28' },
              { name: language === 'ar' ? 'الباحة' : 'Al-Baha', count: '577', value: 577, color: '#035938' },
              { name: language === 'ar' ? 'مكة المكرة' : 'Makkah', count: '478', value: 478, color: '#52BC88' },
              { name: language === 'ar' ? 'حائل' : 'Hail', count: '255', value: 255, color: '#F1BC28' },
              { name: language === 'ar' ? 'الرياض' : 'Riyadh', count: '160', value: 160, color: '#035938' },
              { name: language === 'ar' ? 'المنطقة الشرقية' : 'Eastern Region', count: '109', value: 109, color: '#52BC88' },
              { name: language === 'ar' ? 'تبوك' : 'Tabuk', count: '100', value: 100, color: '#F1BC28' },
              { name: language === 'ar' ? 'القصيم' : 'Qassim', count: '78', value: 78, color: '#035938' },
              { name: language === 'ar' ? 'المدينة المنورة' : 'Madinah', count: '59', value: 59, color: '#52BC88' },
              { name: language === 'ar' ? 'الجوف' : 'Al-Jouf', count: '49', value: 49, color: '#F1BC28' },
              { name: language === 'ar' ? 'الحدود الشمالية' : 'Northern Borders', count: '5', value: 5, color: '#035938' },
            ].map((region, index) => {
              const maxValue = 3984;
              const percentage = (region.value / maxValue) * 100;
              const isTop3 = index < 3;

              return (
                <div 
                  key={region.name}
                  className="group relative"
                  onMouseEnter={() => setHoveredRegion(region.name)}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  {/* Row Container */}
                  <div className="flex items-center gap-4">
                    
                    {/* Rank Number */}
                    <div 
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300"
                      style={{
                        backgroundColor: isTop3 ? `${region.color}20` : '#f5f5f5',
                        color: isTop3 ? region.color : '#666',
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* Region Name */}
                    <div className="flex-shrink-0 w-32 md:w-40 text-sm font-semibold text-gray-700">
                      {region.name}
                    </div>

                    {/* Bar Chart */}
                    <div className="flex-1 relative h-12 bg-gray-100 rounded-lg overflow-hidden">
                      {/* Background Grid Lines */}
                      <div className="absolute inset-0 flex">
                        <div className="w-1/4 border-r border-gray-200"></div>
                        <div className="w-1/4 border-r border-gray-200"></div>
                        <div className="w-1/4 border-r border-gray-200"></div>
                        <div className="w-1/4"></div>
                      </div>

                      {/* Animated Bar */}
                      <div 
                        className="absolute top-0 left-0 h-full transition-all duration-1000 ease-out rounded-lg group-hover:opacity-90"
                        style={{
                          width: `${percentage}%`,
                          background: `linear-gradient(90deg, ${region.color}, ${region.color}dd)`,
                          boxShadow: hoveredRegion === region.name ? `0 4px 20px ${region.color}40` : 'none',
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"></div>
                      </div>

                      {/* Value Label Inside Bar */}
                      {percentage > 15 && (
                        <div 
                          className="absolute top-1/2 transform -translate-y-1/2 text-sm font-bold text-white z-10"
                          style={{ left: `${percentage - 8}%` }}
                        >
                          {region.count}
                        </div>
                      )}
                    </div>

                    {/* Value Label Outside (for small bars) */}
                    {percentage <= 15 && (
                      <div 
                        className="flex-shrink-0 text-sm font-bold"
                        style={{ color: region.color }}
                      >
                        {region.count}
                      </div>
                    )}

                    {/* Percentage */}
                    <div className="flex-shrink-0 w-16 text-right text-xs text-gray-500">
                      {percentage.toFixed(1)}%
                    </div>
                  </div>

                  {/* Hover Tooltip */}
                  {hoveredRegion === region.name && (
                    <div 
                      className="absolute left-1/2 -top-12 transform -translate-x-1/2 px-4 py-2 rounded-lg text-xs font-semibold text-white shadow-xl z-50 whitespace-nowrap animate-fade-in"
                      style={{ backgroundColor: region.color }}
                    >
                      {region.name}: {region.count} {language === 'ar' ? 'مستفيد' : 'beneficiaries'}
                      <div 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2"
                        style={{ backgroundColor: region.color }}
                      ></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Chart Legend/Summary */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#035938]"></div>
                <span className="text-gray-600 text-xs">{language === 'ar' ? 'فئة أ' : 'Category A'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#52BC88]"></div>
                <span className="text-gray-600 text-xs">{language === 'ar' ? 'فئة ب' : 'Category B'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#F1BC28]"></div>
                <span className="text-gray-600 text-xs">{language === 'ar' ? 'فئة ج' : 'Category C'}</span>
              </div>
            </div>
            <div className="text-gray-500 text-xs">
              {language === 'ar' ? 'إجمالي المستفيدين: 9,060' : 'Total Beneficiaries: 9,060'}
            </div>
          </div>
        </div>
      </div>

      {/* Supported Products - Hexagonal Honeycomb */}
      <div className="max-w-7xl mx-auto px-4 mb-24 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#52BC88]/20 shadow-lg">
            <Sparkles className="w-5 h-5 text-[#F1BC28]" />
            <h3 className="text-xl font-bold text-[#035938]">{t('fruitsSupportedProducts')}</h3>
          </div>
        </div>

        {/* Hexagon Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {[
            { 
              ar: 'اللوز البجلي', 
              en: 'Bajali Almonds', 
              color: '#035938',
              image: 'https://images.unsplash.com/photo-1756361947189-29e0baae7bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1vbmRzJTIwbnV0cyUyMGNsb3NldXB8ZW58MXx8fHwxNzcwMjIyNDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              ar: 'البخارى', 
              en: 'Al-Bukhara', 
              color: '#52BC88',
              image: 'https://images.unsplash.com/photo-1663871221888-4ea37abb285b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtcyUyMGZyZXNoJTIwZnJ1aXR8ZW58MXx8fHwxNzcwMjIyNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              ar: 'الخوخ', 
              en: 'Peach', 
              color: '#F1BC28',
              image: 'https://images.unsplash.com/photo-1642372849486-f88b963cb734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjaCUyMGZyZXNoJTIwZnJ1aXR8ZW58MXx8fHwxNzcwMTIzNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              ar: 'المشمش', 
              en: 'Apricot', 
              color: '#035938',
              image: 'https://images.unsplash.com/photo-1636043979306-e21033b4dc24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHJpY290JTIwZnJlc2glMjBmcnVpdHxlbnwxfHx8fDE3NzAyMjI0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              ar: 'المانجو', 
              en: 'Mango', 
              color: '#52BC88',
              image: 'https://images.unsplash.com/photo-1734163075572-8948e799e42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMGZyZXNoJTIwdHJvcGljYWx8ZW58MXx8fHwxNzcwMjIyNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              ar: 'الفراولة', 
              en: 'Strawberry', 
              color: '#F1BC28',
              image: 'https://images.unsplash.com/photo-1710528184650-fc75ae862c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwZnJlc2glMjByZWR8ZW58MXx8fHwxNzcwMjIyNDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              ar: 'العنب', 
              en: 'Grapes', 
              color: '#035938',
              image: 'https://images.unsplash.com/photo-1745670922388-cc34082bb8cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwZXMlMjB2aW5leWFyZCUyMGZyZXNofGVufDF8fHx8MTc3MDIyMjQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              ar: 'الليمون', 
              en: 'Lemon', 
              color: '#52BC88',
              image: 'https://images.unsplash.com/photo-1761925280217-ab1323e40d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMGZyZXNoJTIwY2l0cnVzfGVufDF8fHx8MTc3MDIyMjQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
            { 
              ar: 'الرمان', 
              en: 'Pomegranate', 
              color: '#F1BC28',
              image: 'https://images.unsplash.com/photo-1709605534654-c0ef47902b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb21lZ3JhbmF0ZSUyMGZyZXNoJTIwZnJ1aXR8ZW58MXx8fHwxNzcwMjIyNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
            },
          ].map((product, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Hexagon using clip-path */}
              <div
                className="relative w-32 h-36 flex items-center justify-center transition-all duration-500 cursor-pointer overflow-hidden"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                {/* Image Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  {/* Overlay */}
                  <div 
                    className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  ></div>
                </div>

                {/* Border */}
                <div 
                  className="absolute inset-0 border-4 transition-all duration-500"
                  style={{
                    borderColor: product.color,
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                ></div>

                {/* Glow on Hover */}
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"
                  style={{ backgroundColor: product.color }}
                ></div>
              </div>

              {/* Hover Label */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                <div 
                  className="px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg"
                  style={{ backgroundColor: product.color }}
                >
                  {language === 'ar' ? product.ar : product.en}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}