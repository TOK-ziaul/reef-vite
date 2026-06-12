import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  Sprout, 
  Factory, 
  Droplets, 
  TrendingUp,
  CheckCircle2,
  Leaf,
  Users,
  MapPin,
  Sparkles
} from 'lucide-react';

export function CoffeeProjects() {
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

  const projectKeys = [
    "coffeeProject1",
    "coffeeProject2",
    "coffeeProject3",
    "coffeeProject4",
    "coffeeProject5",
    "coffeeProject6",
    "coffeeProject7",
    "coffeeProject8",
  ] as const;

  const feasibilityItems = [
    { icon: Users, text: t("coffeeFeasibility1") },
    { icon: Sprout, text: t("coffeeFeasibility2") },
    { icon: Droplets, text: t("coffeeFeasibility3") },
    { icon: TrendingUp, text: t("coffeeFeasibility4") },
    { icon: Leaf, text: t("coffeeFeasibility5") },
    { icon: Sparkles, text: t("coffeeFeasibility6") },
    { icon: Factory, text: t("coffeeFeasibility7") },
    { icon: MapPin, text: t("coffeeFeasibility8") },
  ];

  const objectives = [
    { text: t('coffeeObjective1') },
    { text: t('coffeeObjective2') },
    { text: t('coffeeObjective3') },
    { text: t('coffeeObjective4') },
    { text: t('coffeeObjective5') },
    { text: t('coffeeObjective6') },
  ];

  return (
    <div ref={sectionRef} className="py-20 relative overflow-hidden bg-[#F9F7EF]">
      {/* Animated Background Blobs */}
      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-[#52BC88]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-[#F1BC28]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#035938] mb-4">
            {t('coffeeProjectsTitle')}
          </h2>
          <p className="text-lg text-[#035938]/70 max-w-2xl mx-auto">
            {t('coffeeProjectsIntro')}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Projects Count Card */}
          <div 
            className="relative bg-white rounded-3xl p-8 overflow-hidden group cursor-pointer"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease-out',
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#52BC88]/10 rounded-full blur-2xl group-hover:bg-[#52BC88]/20 transition-all"></div>
            <div className="relative">
              <div className="inline-flex p-4 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#035938] mb-2">
                {t("coffeeProjectsCountLabel")}
              </div>
              <p className="text-[#035938]/70">{t("coffeeNumberOfProjects")}</p>
            </div>
          </div>

          {/* Total Value Card */}
          <div 
            className="relative bg-white rounded-3xl p-8 overflow-hidden group cursor-pointer"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease-out 0.1s',
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F1BC28]/10 rounded-full blur-2xl group-hover:bg-[#F1BC28]/20 transition-all"></div>
            <div className="relative">
              <div className="inline-flex p-4 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-2xl mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#035938] mb-2">
                {t("coffeeProjectsValueLabel")}
              </div>
              <p className="text-[#035938]/70">{t("coffeeTotalValue")}</p>
            </div>
          </div>
        </div>

        <div className="mb-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-[#035938] to-[#52BC88] rounded-full"></div>
            {t("coffeeKeyProjects")}
          </h3>
          <div className="space-y-4">
            {projectKeys.map((key, index) => (
              <div key={key} className="relative group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#035938] to-[#52BC88] rounded-full group-hover:w-2 transition-all duration-300"></div>
                <div className="pl-8 py-4 bg-gradient-to-r from-[#035938]/5 to-transparent rounded-r-xl group-hover:from-[#035938]/10 transition-all duration-300">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <span className="font-bold text-[#035938] me-2">
                      {index + 1}-
                    </span>
                    {t(key)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Feasibility - Horizontal Cards */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-4">
            {t('coffeeFeasibilityTitle')}
          </h3>
          <p className="text-base text-[#035938]/70 mb-10 max-w-3xl">
            {t('coffeeFeasibilityIntro')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feasibilityItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="relative bg-white rounded-2xl p-8 overflow-hidden group cursor-pointer border border-[#035938]/10 hover:border-[#52BC88]/30 transition-all duration-300"
                  style={{
                    transform: isVisible ? 'translateX(0)' : language === 'ar' ? 'translateX(30px)' : 'translateX(-30px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.5s ease-out ${index * 0.1 + 0.5}s`,
                  }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#52BC88]/10 to-transparent rounded-full blur-2xl group-hover:from-[#52BC88]/20 transition-all"></div>
                  
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-[#035938]/80 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Objectives - Two Column Grid */}
        <div>
          <div className="relative bg-gradient-to-br from-[#035938] to-[#0d7a50] rounded-3xl p-10 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F1BC28]/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
                {t('coffeeObjectivesTitle')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
                {objectives.map((objective, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 group"
                    style={{
                      transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                      opacity: isVisible ? 1 : 0,
                      transition: `all 0.5s ease-out ${index * 0.1 + 0.8}s`,
                    }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#F1BC28] rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative bg-[#F1BC28] p-2 rounded-full">
                          <CheckCircle2 className="w-5 h-5 text-[#035938]" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {objective.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}