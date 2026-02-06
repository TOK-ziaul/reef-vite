import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { 
  Dna, 
  Beaker, 
  Sprout, 
  Droplets, 
  Wind,
  Sparkles,
  TrendingUp,
  Target,
  ArrowRight,
  MapPin,
  Heart
} from 'lucide-react';

export function CoffeeTissueCulture() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stages = [
    {
      icon: Dna,
      number: '6',
      title: language === 'ar' ? 'عينات وراثية متميزة من أشجار القهوة' : 'Distinguished genetic samples from coffee trees',
      color: '#035938',
    },
    {
      icon: Beaker,
      number: '17,000',
      title: language === 'ar' ? 'أجنة جسدية للقهوة تم إنباتها' : 'Somatic embryos of coffee germinated',
      color: '#52BC88',
    },
    {
      icon: Sprout,
      number: '4,000',
      title: language === 'ar' ? 'نباتات في مرحلة التجذير' : 'Plants in the rooting stage',
      color: '#F1BC28',
    },
    {
      icon: Droplets,
      number: '2,800',
      title: language === 'ar' ? 'نباتات في مرحلة النقل إلى الفطام' : 'Plants in the transfer-to-weaning stage',
      color: '#52BC88',
    },
    {
      icon: Wind,
      number: '1,200',
      title: language === 'ar' ? 'نباتات في مرحلة الفطام في البيوت المحمية' : 'Plants in the greenhouse weaning stage',
      color: '#035938',
    },
    {
      icon: Sparkles,
      number: '400',
      title: language === 'ar' ? 'شتلات في مرحلة التقسية (التأقلم)' : 'Seedlings in the hardening (acclimatization) stage',
      color: '#F1BC28',
    },
  ];

  return (
    <div ref={sectionRef} className="py-12 bg-[#F9F7EF]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-[#52BC88] rounded-lg">
            <Dna className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#035938]">
              {language === 'ar' ? 'مشروع زراعة الأنسجة وتطوير الشتلات' : 'Tissue Culture and Seedling Development Project'}
            </h2>
            <p className="text-sm text-[#035938]/60 mt-1">
              {language === 'ar' 
                ? 'بالتعاون مع برنامج ريف ومركز استدامة' 
                : 'In cooperation with the Reef Program and Estidama Center'}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Stages Flow */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-3 py-3 px-4 rounded-lg hover:bg-white/60 transition-all duration-300"
                    style={{
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      opacity: isVisible ? 1 : 0,
                      transition: `all 0.4s ease ${index * 0.05}s`,
                    }}
                  >
                    <div 
                      className="flex-shrink-0 p-2 rounded-lg"
                      style={{ backgroundColor: `${stage.color}15` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: stage.color }} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-2xl font-bold text-[#035938] leading-none mb-1.5">
                        {stage.number}
                      </div>
                      <p className="text-sm text-[#035938]/70 leading-snug">
                        {stage.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Highlight Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Bioreactor Card */}
            <div 
              className="relative bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-2xl p-6 overflow-hidden"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.5s ease 0.3s',
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Beaker className="w-5 h-5 text-white" />
                  <h3 className="font-bold text-white">
                    {language === 'ar' ? 'جهاز البيوريأكتور' : 'Bioreactor Device'}
                  </h3>
                </div>
                
                <p className="text-sm text-white/90 mb-4">
                  {language === 'ar' 
                    ? 'تم تركيب جهاز بيوريأكتور لزيادة الإنتاجية' 
                    : 'Bioreactor device installed to increase productivity'}
                </p>

                <div className="inline-flex items-center gap-3 px-4 py-3 bg-[#035938]/40 backdrop-blur-sm rounded-xl">
                  <TrendingUp className="w-6 h-6 text-[#F1BC28]" strokeWidth={2.5} />
                  <div>
                    <div className="text-3xl font-bold text-white leading-none">+30%</div>
                    <p className="text-xs text-white/80 mt-0.5">
                      {language === 'ar' ? 'زيادة الإنتاجية' : 'Productivity'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Card */}
            <div 
              className="relative bg-[#035938] rounded-2xl p-6 overflow-hidden"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.5s ease 0.4s',
              }}
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F1BC28]/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-[#F1BC28]" />
                  <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                    {language === 'ar' ? 'الهدف المستهدف' : 'TARGET GOAL'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-bold text-white leading-none mb-1.5">50,000</div>
                    <p className="text-sm text-white/70">
                      {language === 'ar' ? 'شتلة' : 'Seedlings'}
                    </p>
                  </div>
                  
                  <ArrowRight className="w-8 h-8 text-[#F1BC28]/50 mx-4" strokeWidth={2} />
                  
                  <div className="text-right">
                    <div className="text-5xl font-bold text-[#F1BC28] leading-none mb-1.5">2025</div>
                    <p className="text-sm text-white/70">
                      {language === 'ar' ? 'نهاية العام' : 'End of Year'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 mt-8"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.5s ease 0.5s',
          }}
        >
          <button className="group flex-1 flex items-center justify-between gap-3 px-6 py-4 bg-[#035938] text-white rounded-xl hover:bg-[#0d7a50] transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#F1BC28]" strokeWidth={2.5} />
              <span className="font-semibold">
                {language === 'ar' ? 'استكشف الخريطة التفاعلية لقطاعاتنا الريفية' : 'Explore the interactive map of our rural sectors'}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </button>

          <button className="group flex-1 flex items-center justify-between gap-3 px-6 py-4 bg-[#52BC88] text-white rounded-xl hover:bg-[#3da872] transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-white" strokeWidth={2.5} />
              <span className="font-semibold">
                {language === 'ar' ? 'استكشف برامج الدعم' : 'Explore support programs'}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}