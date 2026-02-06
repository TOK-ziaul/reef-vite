import { useLanguage } from '../context/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, DollarSign, MapPin } from 'lucide-react';

export function CoffeeStats() {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const regions = [
    { name: language === 'ar' ? 'جازان' : 'Jazan', value: 3308, percentage: 74 },
    { name: language === 'ar' ? 'عسير' : 'Asir', value: 785, percentage: 17.6 },
    { name: language === 'ar' ? 'الباحة' : 'Al-Baha', value: 322, percentage: 7.2 },
    { name: language === 'ar' ? 'مكة المكرمة' : 'Makkah', value: 28, percentage: 0.6 },
    { name: language === 'ar' ? 'نجران' : 'Najran', value: 22, percentage: 0.5 },
  ];

  const productionData = [
    { year: '2020', value: 800, color: '#035938' },
    { year: '2024', value: 2300, color: '#52BC88', growth: '33%' },
    { year: '2026', value: 7000, color: '#F1BC28', isTarget: true },
  ];

  return (
    <div ref={sectionRef} className="py-20 relative overflow-hidden bg-gradient-to-br from-[#F9F7EF] via-white to-[#F9F7EF]">
      {/* Left Side Fade Mask */}
      <div 
        className="absolute top-0 left-0 bottom-0 w-32 md:w-48 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to right, #F9F7EF 0%, rgba(249, 247, 239, 0.8) 30%, transparent 100%)',
        }}
      ></div>

      {/* Right Side Fade Mask */}
      <div 
        className="absolute top-0 right-0 bottom-0 w-32 md:w-48 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to left, #F9F7EF 0%, rgba(249, 247, 239, 0.8) 30%, transparent 100%)',
        }}
      ></div>

      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#52BC88]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F1BC28]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#035938]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#035938] mb-4">
            {t('coffeeStatsTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#52BC88] to-[#F1BC28] mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-[#035938]/70 max-w-2xl mx-auto">
            {t('coffeeStatsSubtitle')}
          </p>
        </div>

        {/* Main Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Total Support Card */}
          <div className="group relative h-full">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88]/20 to-[#035938]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            
            <div 
              className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#52BC88]/30 shadow-lg group-hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col"
              style={{
                transform: 'perspective(1000px) rotateX(0deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(2deg) translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0)';
              }}
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#52BC88] via-[#F1BC28] to-[#52BC88]"></div>
              
              {/* Icon and Title Row */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#52BC88] rounded-xl blur-lg opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-[#52BC88] to-[#035938] p-3 rounded-xl">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-[#035938]/70 text-base font-medium">{t('coffeeTotalSupport')}</h3>
              </div>

              {/* Number Display */}
              <div className="text-center mb-6">
                <div className="flex items-baseline gap-2 justify-center mb-2">
                  <AnimatedCounter value={95.13} decimals={2} isVisible={isVisible} duration={2000} />
                  <span className="text-xl font-bold text-[#52BC88]">{language === 'ar' ? 'مليون ريال' : 'M SAR'}</span>
                </div>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#52BC88]/10 to-[#035938]/10 rounded-full">
                  <span className="text-sm text-[#035938]/70">2020-2024</span>
                </div>
              </div>

              {/* Progress Visual */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#035938]/60">{t('coffeeProgressLabel')}</span>
                  <span className="text-xs font-bold text-[#52BC88]">100%</span>
                </div>
                <div className="relative h-2 bg-gradient-to-r from-[#035938]/10 to-[#52BC88]/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] rounded-full"
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transition: 'width 2s ease-out 0.3s',
                      boxShadow: '0 0 15px rgba(82, 188, 136, 0.4)',
                    }}
                  >
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      style={{
                        animation: 'shimmer 2s infinite',
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Decorative Gradient Circle */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-[#52BC88]/20 via-[#52BC88]/10 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 right-4 w-20 h-20 bg-[#F1BC28]/5 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Beneficiaries Card */}
          <div className="group relative h-full">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28]/20 to-[#035938]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            
            <div 
              className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#F1BC28]/30 shadow-lg group-hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col"
              style={{
                transform: 'perspective(1000px) rotateX(0deg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(2deg) translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0)';
              }}
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F1BC28] via-[#52BC88] to-[#F1BC28]"></div>
              
              {/* Icon and Title Row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F1BC28] rounded-xl blur-lg opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-[#F1BC28] to-[#d4a324] p-3 rounded-xl">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-[#035938]/70 text-base font-medium">{t('coffeeBeneficiaries')}</h3>
              </div>

              {/* Number Display */}
              <div className="flex items-baseline gap-2 mb-5">
                <AnimatedCounter value={4465} decimals={0} isVisible={isVisible} duration={2000} />
                <span className="text-sm text-[#035938]/70">{t('coffeeBeneficiariesLabel')}</span>
              </div>

              {/* Gender Breakdown */}
              <div className="flex gap-4 mt-auto">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#035938]"></div>
                    <span className="text-xs text-[#035938]/70">{t('coffeeMen')}</span>
                  </div>
                  <p className="text-lg font-bold text-[#035938] mb-1.5">2,375</p>
                  <div className="w-full h-1.5 bg-[#035938]/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#035938] to-[#52BC88] rounded-full"
                      style={{ 
                        width: isVisible ? '53.2%' : '0%',
                        transition: 'width 1.5s ease-out 0.5s'
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F1BC28]"></div>
                    <span className="text-xs text-[#035938]/70">{t('coffeeWomen')}</span>
                  </div>
                  <p className="text-lg font-bold text-[#F1BC28] mb-1.5">2,090</p>
                  <div className="w-full h-1.5 bg-[#F1BC28]/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#F1BC28] to-[#d4a324] rounded-full"
                      style={{ 
                        width: isVisible ? '46.8%' : '0%',
                        transition: 'width 1.5s ease-out 0.5s'
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#F1BC28]/10 to-transparent rounded-tl-full"></div>
            </div>
          </div>
        </div>

        {/* Geographical Distribution */}
        <div className="mb-16">
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88]/10 to-[#F1BC28]/10 rounded-3xl blur-2xl opacity-50"></div>
            
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-[#52BC88]/20 shadow-xl">
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#52BC88] via-[#035938] to-[#F1BC28]"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#035938] rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-[#035938] to-[#024028] p-3 rounded-2xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#035938]">{t('coffeeGeographicalDistribution')}</h3>
              </div>

              <div className="space-y-6">
                {regions.map((region, index) => (
                  <div key={index} className="group/bar">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#035938] font-semibold text-lg">{region.name}</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#52BC88]">
                          {region.value.toLocaleString()}
                        </span>
                        <span className="text-sm text-[#035938]/50">
                          ({region.percentage}%)
                        </span>
                      </div>
                    </div>
                    <div className="relative h-4 bg-gradient-to-r from-[#035938]/5 to-[#52BC88]/5 rounded-full overflow-hidden">
                      {/* Animated Bar */}
                      <div 
                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${region.percentage}%` : '0%',
                          background: `linear-gradient(90deg, #035938 0%, #52BC88 ${region.percentage}%, #F1BC28 100%)`,
                          transitionDelay: `${index * 0.1}s`,
                          boxShadow: '0 0 20px rgba(82, 188, 136, 0.3)',
                        }}
                      >
                        {/* Shimmer Effect */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          style={{
                            animation: 'shimmer 2s infinite',
                            animationDelay: `${index * 0.2}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Production Growth Chart */}
        <div className="group relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88]/20 to-[#F1BC28]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
          
          <div 
            className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#52BC88]/30 shadow-lg group-hover:shadow-xl transition-all duration-500 overflow-hidden"
            style={{
              transform: 'perspective(1000px) rotateX(0deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateX(2deg) translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0)';
            }}
          >
            {/* Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#52BC88] via-[#F1BC28] to-[#52BC88]"></div>
            
            {/* Icon and Title Row */}
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#52BC88] rounded-xl blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-br from-[#52BC88] to-[#035938] p-3 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-[#035938] text-base font-medium">{t('coffeeProductionGrowth')}</h3>
                <p className="text-xs text-[#035938]/60">{t('coffeeProductionSubtitle')}</p>
              </div>
            </div>

            {/* Chart */}
            <div className="relative h-72">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full h-px bg-[#035938]/5"></div>
                ))}
              </div>

              {/* Bars Container */}
              <div className="relative h-full flex items-end justify-around px-4">
                {/* 2020 Bar */}
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="text-center mb-2">
                    <div className="text-lg font-bold text-[#035938]">2020</div>
                  </div>
                  <div className="relative w-full max-w-[100px] flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-[#035938] to-[#52BC88] rounded-t-xl relative overflow-hidden transition-all duration-1000"
                      style={{ 
                        height: isVisible ? '80px' : '0px',
                        boxShadow: '0 -4px 20px rgba(3, 89, 56, 0.2)',
                      }}
                    >
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                    </div>
                    <div className="text-center mt-3">
                      <div className="text-2xl font-bold text-[#035938]">800</div>
                      <div className="text-xs text-[#035938]/60">{t('coffeeTons')}</div>
                    </div>
                  </div>
                </div>

                {/* Growth Arrow */}
                <div className="flex items-center justify-center mb-24">
                  <div className="flex flex-col items-center">
                    <div className="text-[#52BC88] text-sm font-medium">+33%</div>
                    <div className="text-[#52BC88]/60 text-xs">{t('coffeeGrowth')}</div>
                  </div>
                </div>

                {/* 2024 Bar */}
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="text-center mb-2">
                    <div className="text-lg font-bold text-[#035938]">2024</div>
                  </div>
                  <div className="relative w-full max-w-[100px] flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-[#52BC88] to-[#7dd4a3] rounded-t-xl relative overflow-hidden transition-all duration-1000 delay-300"
                      style={{ 
                        height: isVisible ? '180px' : '0px',
                        boxShadow: '0 -4px 20px rgba(82, 188, 136, 0.2)',
                      }}
                    >
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                    </div>
                    <div className="text-center mt-3">
                      <div className="text-2xl font-bold text-[#52BC88]">2,300</div>
                      <div className="text-xs text-[#035938]/60">{t('coffeeTons')}</div>
                    </div>
                  </div>
                </div>

                {/* Growth Arrow */}
                <div className="flex items-center justify-center mb-24">
                  <div className="flex flex-col items-center">
                    <div className="text-[#F1BC28] text-sm font-medium">+204%</div>
                    <div className="text-[#F1BC28]/60 text-xs">{t('coffeeGrowth')}</div>
                  </div>
                </div>

                {/* 2026 Bar (Target) */}
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="text-center mb-2">
                    <div className="flex items-center gap-2 justify-center">
                      <div className="text-lg font-bold text-[#035938]">2026</div>
                      <span className="text-xs bg-gradient-to-r from-[#F1BC28] to-[#d4a324] text-white px-2 py-0.5 rounded-full">
                        {t('coffeeTarget')}
                      </span>
                    </div>
                  </div>
                  <div className="relative w-full max-w-[100px] flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-[#F1BC28] to-[#f5d06d] rounded-t-xl relative overflow-hidden transition-all duration-1000 delay-500"
                      style={{ 
                        height: isVisible ? '260px' : '0px',
                        boxShadow: '0 -4px 20px rgba(241, 188, 40, 0.2)',
                      }}
                    >
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                      {/* Pulse effect for target */}
                      <div 
                        className="absolute inset-0 bg-white/10"
                        style={{
                          animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none',
                        }}
                      ></div>
                    </div>
                    <div className="text-center mt-3">
                      <div className="text-2xl font-bold text-[#F1BC28]">7,000</div>
                      <div className="text-xs text-[#035938]/60">{t('coffeeTons')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Note */}
            <div className="mt-6 p-4 bg-gradient-to-r from-[#52BC88]/5 to-[#F1BC28]/5 rounded-xl border border-[#52BC88]/10">
              <p className="text-xs text-[#035938]/70 text-center">
                {t('coffeeGrowthNote')}
              </p>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#F1BC28]/10 to-transparent rounded-tl-full"></div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}

// Animated Counter Component
function AnimatedCounter({ 
  value, 
  decimals = 0, 
  isVisible, 
  duration = 2000 
}: { 
  value: number; 
  decimals?: number; 
  isVisible: boolean; 
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (value - startValue) * easeOutQuart;
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <span className="text-4xl font-bold text-[#035938]">
      +{count.toFixed(decimals).toLocaleString()}
    </span>
  );
}