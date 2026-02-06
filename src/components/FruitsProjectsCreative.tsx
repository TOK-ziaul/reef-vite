import { useState } from 'react';
import { Sparkles, Target, CheckCircle2, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface FruitsProjectsCreativeProps {
  t: (key: string) => string;
  language: string;
}

export function FruitsProjectsCreative({ t, language }: FruitsProjectsCreativeProps) {
  const [, setHoveredProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isRTL = language === 'ar';

  // Project 1 - Marketing Centers regions
  const marketingCentersRegions = [
    { ar: 'المنطقة الشرقية', en: 'Eastern Region' },
    { ar: 'جازان', en: 'Jazan' },
    { ar: 'حائل', en: 'Hail' },
    { ar: 'القصيم', en: 'Qassim' },
    { ar: 'عسير', en: 'Asir' },
    { ar: 'الباحة', en: 'Al-Baha' },
    { ar: 'مكة المكرمة', en: 'Makkah' },
    { ar: 'تبوك', en: 'Tabuk' },
    { ar: 'الجوف', en: 'Al-Jouf' },
    { ar: 'نجران', en: 'Najran' },
    { ar: 'المدينة المنورة', en: 'Madinah' },
  ];

  // Project 9 - Irrigation Systems regions
  const irrigationRegions = [
    { ar: 'نجران', en: 'Najran' },
    { ar: 'الباحة', en: 'Al-Baha' },
    { ar: 'جازان', en: 'Jazan' },
    { ar: 'مكة المكرمة', en: 'Makkah' },
    { ar: 'عسير', en: 'Asir' },
  ];

  const feasibilityItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const projectObjectives = [1, 2, 3];

  // All 9 projects data
  const allProjects = [
    { 
      num: 1, 
      isSpecial: true, 
      type: 'marketing' as const,
      regions: marketingCentersRegions,
      bgImage: 'https://images.unsplash.com/photo-1760521934766-e8367166c15d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0cyUyMG1hcmtldCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDIyNjQ2MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      num: 2, 
      isSpecial: false,
      bgImage: 'https://images.unsplash.com/photo-1761455953103-788d1018f174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBkZXZlbG9wbWVudCUyMGZhcm1pbmd8ZW58MXx8fHwxNzcwMjI2NDYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      num: 3, 
      isSpecial: false,
      bgImage: 'https://images.unsplash.com/photo-1680724525083-5c2c734f9a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlJTIwYWdyaWN1bHR1cmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDIyNjQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      num: 4, 
      isSpecial: false,
      bgImage: 'https://images.unsplash.com/photo-1727120279660-5c28b8461609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMG9yY2hhcmQlMjBoYXJ2ZXN0fGVufDF8fHx8MTc3MDIxNTk5NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      num: 5, 
      isSpecial: false,
      bgImage: 'https://images.unsplash.com/photo-1760521934766-e8367166c15d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0cyUyMG1hcmtldCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDIyNjQ2MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      num: 6, 
      isSpecial: false,
      bgImage: 'https://images.unsplash.com/photo-1761455953103-788d1018f174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBkZXZlbG9wbWVudCUyMGZhcm1pbmd8ZW58MXx8fHwxNzcwMjI2NDYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      num: 7, 
      isSpecial: false,
      bgImage: 'https://images.unsplash.com/photo-1680724525083-5c2c734f9a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlJTIwYWdyaWN1bHR1cmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDIyNjQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      num: 8, 
      isSpecial: false,
      bgImage: 'https://images.unsplash.com/photo-1727120279660-5c28b8461609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMG9yY2hhcmQlMjBoYXJ2ZXN0fGVufDF8fHx8MTc3MDIxNTk5NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      num: 9, 
      isSpecial: true, 
      type: 'irrigation' as const,
      regions: irrigationRegions,
      bgImage: 'https://images.unsplash.com/photo-1598370025936-0856434d26e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwc3lzdGVtJTIwZmFybXxlbnwxfHx8fDE3NzAyMjY0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
  ];

  const totalSlides = allProjects.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Render Project Card
  const renderProjectCard = (project: typeof allProjects[number]) => {
    const { num, isSpecial, type, regions, bgImage } = project;

    if (isSpecial && regions) {
      return (
        <div 
          className="group relative h-full"
          onMouseEnter={() => setHoveredProject(num)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          {/* Background Glow */}
          <div className={`absolute inset-0 ${type === 'irrigation' ? 'bg-gradient-to-br from-[#F1BC28] to-[#52BC88]' : 'bg-gradient-to-br from-[#035938] to-[#52BC88]'} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
          
          {/* Card with Background Image */}
          <div className={`relative h-full rounded-2xl border-2 ${type === 'irrigation' ? 'border-[#F1BC28]/20 hover:border-[#F1BC28]' : 'border-[#52BC88]/20 hover:border-[#52BC88]'} shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 min-h-[350px] overflow-hidden`}>
            
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={bgImage} 
                alt=""
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay for Text Visibility */}
              <div className={`absolute inset-0 ${type === 'irrigation' ? 'bg-gradient-to-br from-[#F1BC28]/90 via-white/95 to-white/90' : 'bg-gradient-to-br from-[#52BC88]/85 via-white/95 to-white/90'}`}></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 p-5">
              {/* Number Badge - Top Right */}
              <div className={`absolute -top-3 -right-3 w-12 h-12 ${type === 'irrigation' ? 'bg-gradient-to-br from-[#F1BC28] to-[#035938]' : 'bg-gradient-to-br from-[#035938] to-[#52BC88]'} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 z-20`}>
                <span className="text-white font-bold text-base">{num < 10 ? `0${num}` : num}</span>
              </div>

              {/* Decorative dot */}
              <div className={`absolute -top-1 -right-1 w-3 h-3 ${type === 'irrigation' ? 'bg-[#52BC88]' : 'bg-[#F1BC28]'} rounded-full animate-pulse z-20`}></div>

              {/* Content */}
              <div className="pt-3">
                <p className="font-bold text-[#035938] text-base mb-3 leading-snug pr-8">{t(`fruitsProject${num}`)}</p>
                
                {/* Regions Count Badge */}
                <div className={`inline-flex items-center gap-2 ${type === 'irrigation' ? 'bg-[#F1BC28]/30 backdrop-blur-sm' : 'bg-[#52BC88]/20 backdrop-blur-sm'} px-3 py-1.5 rounded-full mb-3 border ${type === 'irrigation' ? 'border-[#F1BC28]/30' : 'border-[#52BC88]/30'}`}>
                  <div className={`w-1.5 h-1.5 ${type === 'irrigation' ? 'bg-[#F1BC28]' : 'bg-[#52BC88]'} rounded-full`}></div>
                  <span className="text-xs text-[#035938] font-medium">
                    {regions.length} {language === 'ar' ? 'منطقة' : 'Regions'}
                  </span>
                </div>

                {/* Regions - Compact Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {regions.map((region, idx) => (
                    <div 
                      key={idx}
                      className={`${type === 'irrigation' ? 'bg-[#F1BC28]/30 hover:bg-[#F1BC28] border-[#F1BC28]/40' : 'bg-[#52BC88]/20 hover:bg-[#52BC88] border-[#52BC88]/30'} backdrop-blur-sm border hover:text-white px-2.5 py-1 rounded-md text-xs text-[#035938] font-medium transition-all duration-300 cursor-default`}
                    >
                      {isRTL ? region.ar : region.en}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Standard card with background image
    return (
      <div 
        className="group relative h-full"
        onMouseEnter={() => setHoveredProject(num)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
        
        {/* Card with Background Image */}
        <div className="relative h-full rounded-2xl border-2 border-gray-100 hover:border-[#52BC88]/40 shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 min-h-[350px] flex flex-col overflow-hidden">
          
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={bgImage} 
              alt=""
              className="w-full h-full object-cover"
            />
            {/* White Overlay for Text Visibility - Stronger */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/92 to-white/88"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 p-5 flex-1 flex flex-col">
            {/* Number Badge - Top Right */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 z-20">
              <span className="text-white font-bold text-base">{num < 10 ? `0${num}` : num}</span>
            </div>

            {/* Content */}
            <div className="pt-3 flex-1 flex items-center">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed pr-8 font-medium">{t(`fruitsProject${num}`)}</p>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-20 relative overflow-hidden">
      
      {/* Background Animated Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#52BC88] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#F1BC28] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-[#035938] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-[#52BC88] text-sm tracking-widest uppercase mb-2">OUR INITIATIVES</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#035938] mb-4">
          {t('fruitsProjectsTitle')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
      </div>

      {/* Project Summary Stats - Floating Organic Blobs */}
      <div className="max-w-7xl mx-auto px-4 mb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Projects Count Card */}
          <div className="group relative h-28">
            {/* Professional Rectangle Card */}
            <div className="relative h-full bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              {/* Subtle Highlight */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-white/80" />
                  <p className="text-white/90 text-xs font-medium">{t('fruitsProjectsCount')}</p>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  {t('fruitsProjectsCountValue')}
                </h3>
              </div>
            </div>
          </div>

          {/* Projects Value Card */}
          <div className="group relative h-28">
            {/* Professional Rectangle Card */}
            <div className="relative h-full bg-gradient-to-br from-[#9DD5A8] via-[#F1E8B8] to-[#F1BC28] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              {/* Subtle Highlight */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-white/80" />
                  <p className="text-white/90 text-xs font-medium">{t('fruitsProjectsValue')}</p>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {t('fruitsProjectsValueAmount')}
                </h3>
                <p className="text-white/90 text-sm font-medium">
                  {language === 'ar' ? 'ريال' : 'SAR'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Introduction Text - Glassmorphism Card */}
      <div className="max-w-5xl mx-auto px-4 mb-16 relative z-10">
        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/60 to-white/40 rounded-[3rem] p-8 md:p-10 border border-white/40 shadow-xl">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t('fruitsProjectsIntro')}
          </p>
        </div>
      </div>

      {/* Key Projects - Custom Carousel */}
      <div className="max-w-6xl mx-auto px-4 mb-16 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#035938]/10 via-[#52BC88]/10 to-[#F1BC28]/10 px-6 py-3 rounded-full border border-[#52BC88]/20">
            <Target className="w-5 h-5 text-[#52BC88]" />
            <h3 className="text-xl md:text-2xl font-bold text-[#035938]">{t('fruitsProjectsHighlights')}</h3>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative px-16">
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ 
                transform: `translateX(${isRTL ? currentSlide * (100 / 3) : -currentSlide * (100 / 3)}%)` 
              }}
            >
              {allProjects.map((project) => (
                <div key={project.num} className="flex-shrink-0" style={{ width: 'calc(33.333% - 1rem)' }}>
                  {renderProjectCard(project)}
                </div>
              ))}
            </div>
          </div>

          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 -translate-x-8 z-20 w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group`}
          >
            {isRTL ? (
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            )}
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 translate-x-8 z-20 w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group`}
          >
            {isRTL ? (
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            )}
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {allProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#035938] w-8' 
                    : 'bg-[#52BC88]/30 hover:bg-[#52BC88]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Technical & Economic Feasibility - Flowing Stream Design */}
      <div className="w-full mt-32 mb-16 relative z-10 overflow-hidden px-4 md:px-8">

        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-20 text-center">
          <div className="relative">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#035938]/10 via-[#52BC88]/10 to-[#F1BC28]/10 px-6 py-3 rounded-full border border-[#52BC88]/20 mb-4">
              <CheckCircle2 className="w-5 h-5 text-[#52BC28]" />
              <span className="text-sm font-medium text-[#035938] uppercase tracking-wide">{language === 'ar' ? 'التقييم الشامل' : 'Complete Assessment'}</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-[#035938] mb-4 leading-tight">
              {t('fruitsFeasibilityTitle')}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              {t('fruitsFeasibilityIntro')}
            </p>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#035938] to-[#52BC88] px-6 py-3 rounded-full shadow-lg">
              <span className="text-3xl font-bold text-white">11</span>
              <span className="text-sm text-white/90 uppercase tracking-wide font-medium">{language === 'ar' ? 'معيار رئيسي' : 'Key Criteria'}</span>
            </div>
          </div>
        </div>

        {/* Flowing Stream Layout */}
        <div className="max-w-6xl mx-auto relative" style={{ minHeight: '2000px' }}>
          
          {/* Flowing Path/Stream - SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="streamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#52BC88', stopOpacity: 0.2 }} />
                <stop offset="50%" style={{ stopColor: '#F1BC28', stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: '#035938', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            {/* Flowing path curve */}
            <path
              d="M 300,100 Q 150,300 300,500 T 300,900 T 300,1300 T 300,1700"
              stroke="url(#streamGradient)"
              strokeWidth="80"
              fill="none"
              opacity="0.3"
            />
            {/* Connection lines between items */}
            <path
              d="M 300,150 Q 200,250 300,350 Q 400,450 300,550 Q 200,650 300,750 Q 400,850 300,950 Q 200,1050 300,1150 Q 400,1250 300,1350 Q 200,1450 300,1550 Q 400,1650 300,1750"
              stroke="#52BC88"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
              strokeDasharray="5,5"
            />
          </svg>

          {/* Items positioned along the flowing path */}
          <div className="relative" style={{ zIndex: 2 }}>
            {feasibilityItems.map((num, index) => {
              const colors = [
                { main: '#52BC88', secondary: '#035938', accent: '#F1BC28' },
                { main: '#F1BC28', secondary: '#52BC88', accent: '#035938' },
                { main: '#035938', secondary: '#52BC88', accent: '#F1BC28' },
              ];
              const colorScheme = colors[index % 3];
              
              // Create flowing S-curve positions
              const positions = [
                { top: 100, left: '50%', align: 'center' },
                { top: 280, left: '20%', align: 'left' },
                { top: 460, left: '50%', align: 'center' },
                { top: 640, left: '80%', align: 'right' },
                { top: 820, left: '50%', align: 'center' },
                { top: 1000, left: '20%', align: 'left' },
                { top: 1180, left: '50%', align: 'center' },
                { top: 1360, left: '80%', align: 'right' },
                { top: 1540, left: '50%', align: 'center' },
                { top: 1720, left: '30%', align: 'left' },
                { top: 1900, left: '50%', align: 'center' },
              ];
              
              const position = positions[index];
              
              return (
                <div
                  key={num}
                  className="absolute group"
                  style={{
                    top: `${position.top}px`,
                    left: position.left,
                    transform: position.align === 'center' ? 'translateX(-50%)' : position.align === 'right' ? 'translateX(-100%)' : 'translateX(0)',
                    maxWidth: '400px',
                    width: '90%'
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Number Circle - Large and Prominent */}
                    <div 
                      className="relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-125 hover:rotate-12"
                      style={{
                        background: `linear-gradient(135deg, ${colorScheme.main} 0%, ${colorScheme.secondary} 100%)`
                      }}
                    >
                      {/* Glow effect */}
                      <div 
                        className="absolute inset-0 rounded-full blur-xl opacity-50"
                        style={{ background: colorScheme.main }}
                      ></div>
                      
                      <span className="relative text-white font-bold text-xl md:text-2xl z-10">
                        {num < 10 ? `0${num}` : num}
                      </span>
                      
                      {/* Pulse ring */}
                      <div 
                        className="absolute inset-0 rounded-full border-4 opacity-50 animate-ping"
                        style={{ borderColor: colorScheme.accent }}
                      ></div>
                    </div>

                    {/* Text Content - Floating */}
                    <div className="flex-1 pt-2">
                      <div 
                        className="relative backdrop-blur-sm rounded-2xl px-5 py-4 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                        style={{
                          background: `linear-gradient(135deg, ${colorScheme.main}15 0%, ${colorScheme.secondary}10 100%)`,
                          border: `2px solid ${colorScheme.main}30`
                        }}
                      >
                        {/* Decorative top line */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                          style={{
                            background: `linear-gradient(90deg, ${colorScheme.main} 0%, ${colorScheme.accent} 100%)`
                          }}
                        ></div>
                        
                        <p className="text-gray-800 text-sm md:text-base leading-relaxed font-medium">
                          {t(`fruitsFeasibility${num}`)}
                        </p>

                        {/* Decorative corner accent */}
                        <div 
                          className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full opacity-60"
                          style={{ backgroundColor: colorScheme.accent }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative connecting dot */}
                  {index < feasibilityItems.length - 1 && (
                    <div 
                      className="absolute -bottom-16 left-8 w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: colorScheme.main }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Decorative floating elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-[#52BC88] rounded-full blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-[#F1BC28] rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        {/* Bottom Summary Section */}
        <div className="max-w-4xl mx-auto mt-32">
          <div className="relative backdrop-blur-md bg-gradient-to-r from-[#035938]/90 via-[#52BC88]/90 to-[#035938]/90 rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F1BC28]/10 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-medium mb-1">{language === 'ar' ? 'التقييم الكامل' : 'Complete Evaluation'}</p>
                  <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-1">11</p>
                  <p className="text-white/80 text-xs uppercase tracking-wide">{language === 'ar' ? 'معايير' : 'Criteria'}</p>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#F1BC28] mb-1">9</p>
                  <p className="text-white/80 text-xs uppercase tracking-wide">{language === 'ar' ? 'مشاريع' : 'Projects'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Objectives - Professional Horizontal Timeline */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 mt-32 mb-32">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#035938]/10 via-[#52BC88]/10 to-[#F1BC28]/10 px-6 py-3 rounded-full border border-[#52BC88]/20 mb-6">
            <Target className="w-5 h-5 text-[#52BC88]" />
            <span className="text-sm font-medium text-[#035938] uppercase tracking-wide">{language === 'ar' ? 'أهداف استراتيجية' : 'Strategic Goals'}</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-[#035938] mb-6 leading-tight">
            {t('fruitsProjectObjectivesTitle')}
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] mx-auto rounded-full"></div>
        </div>

        {/* Professional Timeline Container */}
        <div className="relative">
          
          {/* Horizontal Progress Line */}
          <div className="absolute top-24 left-0 right-0 hidden md:block">
            <div className="max-w-5xl mx-auto relative">
              <div className="h-1 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] rounded-full opacity-30"></div>
              {/* Animated progress overlay */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] rounded-full animate-pulse" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* Objectives Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 max-w-6xl mx-auto">
            {projectObjectives.map((num, index) => {
              const colors = [
                { gradient: 'from-[#035938] to-[#52BC88]', text: '#035938', accent: '#F1BC28' },
                { gradient: 'from-[#52BC88] to-[#F1BC28]', text: '#52BC88', accent: '#035938' },
                { gradient: 'from-[#F1BC28] to-[#035938]', text: '#F1BC28', accent: '#52BC88' },
              ];
              const colorScheme = colors[index];
              
              return (
                <div key={num} className="relative group">
                  
                  {/* Number Circle - Top */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      {/* Outer ring */}
                      <div className={`absolute inset-0 -m-2 bg-gradient-to-br ${colorScheme.gradient} rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
                      
                      {/* Main circle */}
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${colorScheme.gradient} rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-500`}>
                        <span className="text-white font-bold text-3xl">{num}</span>
                      </div>

                      {/* Connecting line to content (mobile only) */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-6 bg-gradient-to-b from-gray-300 to-transparent md:hidden"></div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="relative">
                    {/* Background gradient subtle */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative text-center px-6 py-8">
                      
                      {/* Objective Text */}
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium min-h-[120px] flex items-center justify-center">
                        {t(`fruitsProjectObjective${num}`)}
                      </p>

                      {/* Bottom Accent */}
                      <div className="mt-6 flex items-center justify-center gap-2">
                        <div className={`h-px w-12 bg-gradient-to-r ${colorScheme.gradient}`}></div>
                        <div 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: colorScheme.text }}
                        ></div>
                        <div className={`h-px w-12 bg-gradient-to-r ${colorScheme.gradient}`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow (desktop only) */}
                  {index < projectObjectives.length - 1 && (
                    <div className="hidden md:block absolute top-24 -right-8 z-10">
                      <div className={`text-[#52BC88] opacity-40 group-hover:opacity-70 transition-opacity duration-300`}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <path d="M8 16L24 16M24 16L18 10M24 16L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Summary Bar */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="relative backdrop-blur-sm bg-white/60 rounded-3xl border border-[#52BC88]/20 shadow-lg overflow-hidden">
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28]"></div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  
                  {/* Left side - icon and text */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium mb-1">
                        {language === 'ar' ? 'الأهداف الاستراتيجية' : 'Strategic Objectives'}
                      </p>
                      <p className="text-2xl font-bold text-[#035938]">
                        {language === 'ar' ? 'رؤية شاملة للتنمية' : 'Comprehensive Development Vision'}
                      </p>
                    </div>
                  </div>

                  {/* Right side - stats */}
                  <div className="flex items-center gap-6">
                    <div className="text-center px-6 border-l border-[#52BC88]/20">
                      <p className="text-4xl font-bold text-[#035938]">3</p>
                      <p className="text-xs text-gray-600 uppercase tracking-wide mt-1">
                        {language === 'ar' ? 'أهداف' : 'Goals'}
                      </p>
                    </div>
                    <div className="text-center px-6 border-l border-[#52BC88]/20">
                      <p className="text-4xl font-bold text-[#52BC88]">9</p>
                      <p className="text-xs text-gray-600 uppercase tracking-wide mt-1">
                        {language === 'ar' ? 'مشاريع' : 'Projects'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}