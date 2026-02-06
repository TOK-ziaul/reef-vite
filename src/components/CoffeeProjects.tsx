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
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  const projects = [
    { 
      icon: Factory, 
      title: language === 'ar' ? 'مصنع معالجة وتجهيز القهوة' : 'Coffee Processing Factory', 
      location: language === 'ar' ? 'الباحة' : 'Al-Baha',
      color: '#035938',
      image: 'https://images.unsplash.com/photo-1741994043827-6d847a04ea60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYWN0b3J5JTIwcHJvY2Vzc2luZyUyMHJvYXN0aW5nfGVufDF8fHx8MTc2OTk0NTI5NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      icon: Sprout, 
      title: language === 'ar' ? 'مشاتل نموذجية للقهوة' : 'Model Coffee Nurseries', 
      location: language === 'ar' ? 'جازان، عسير، الباحة' : 'Jazan, Asir, Al-Baha',
      color: '#52BC88',
      image: 'https://images.unsplash.com/photo-1757803985709-2d6acfb9e4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudCUyMG51cnNlcnklMjBzZWVkbGluZ3N8ZW58MXx8fHwxNzY5OTQ1Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      icon: Factory, 
      title: language === 'ar' ? 'مصنع معالجة وتجهيز القهوة' : 'Coffee Processing Factory', 
      location: language === 'ar' ? 'عسير' : 'Asir',
      color: '#F1BC28',
      image: 'https://images.unsplash.com/photo-1585435247026-1d8560423d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwcm9kdWN0aW9uJTIwcXVhbGl0eSUyMHRlc3Rpbmd8ZW58MXx8fHwxNzY5OTQ1Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      icon: Leaf, 
      title: language === 'ar' ? 'مزارع نموذجية بديلة' : 'Alternative Model Farms', 
      location: language === 'ar' ? 'جازان' : 'Jazan',
      color: '#035938',
      image: 'https://images.unsplash.com/photo-1567726843492-df0484bb0b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtJTIwdGVycmFjZXMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY5OTQ1Mjk0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      icon: Factory, 
      title: language === 'ar' ? 'مصنع معالجة وتجهيز القهوة' : 'Coffee Processing Factory', 
      location: language === 'ar' ? 'جازان (الدائر)' : 'Jazan (Ad-Daer)',
      color: '#52BC88',
      image: 'https://images.unsplash.com/photo-1729627271729-20b56711f034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGhhcnZlc3QlMjBoYW5kc3xlbnwxfHx8fDE3Njk5NDUyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      icon: Droplets, 
      title: language === 'ar' ? 'أنظمة ري مستدامة' : 'Sustainable Irrigation Systems', 
      location: language === 'ar' ? 'الباحة' : 'Al-Baha',
      color: '#F1BC28',
      image: 'https://images.unsplash.com/photo-1743742566156-f1745850281a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwc3lzdGVtJTIwZHJpcCUyMGZhcm1pbmd8ZW58MXx8fHwxNzY5OTQ1Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      icon: Droplets, 
      title: language === 'ar' ? 'أنظمة ري مستدامة' : 'Sustainable Irrigation Systems', 
      location: language === 'ar' ? 'جازان' : 'Jazan',
      color: '#035938',
      image: 'https://images.unsplash.com/photo-1761201509055-30c04b68901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjB3YXRlciUyMGNvbnNlcnZhdGlvbnxlbnwxfHx8fDE3Njk5NDUyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    { 
      icon: Droplets, 
      title: language === 'ar' ? 'أنظمة ري مستدامة' : 'Sustainable Irrigation Systems', 
      location: language === 'ar' ? 'عسير' : 'Asir',
      color: '#52BC88',
      image: 'https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5ODY2OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
  ];

  const feasibilityItems = [
    { icon: Users, text: t('coffeeFeasibility1') },
    { icon: Sprout, text: t('coffeeFeasibility2') },
    { icon: Droplets, text: t('coffeeFeasibility3') },
    { icon: TrendingUp, text: t('coffeeFeasibility4') },
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
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#52BC88]/20">
            <Sparkles className="w-5 h-5 text-[#F1BC28]" />
            <span className="text-sm text-[#035938]/70">{language === 'ar' ? 'مشاريع استثمارية' : 'Investment Projects'}</span>
          </div>
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
              <div className="text-6xl font-bold text-[#035938] mb-2">8</div>
              <p className="text-[#035938]/70">{t('coffeeProjects')}</p>
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
              <div className="text-6xl font-bold text-[#035938] mb-2">155.8</div>
              <p className="text-[#035938]/70">{language === 'ar' ? 'مليون ريال' : 'Million SAR'}</p>
            </div>
          </div>
        </div>

        {/* Projects Grid - Bento Style */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-10">
            {t('coffeeKeyProjects')}
          </h3>
          
          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Row 1 - Three equal cards */}
            {projects.slice(1, 4).map((project, index) => {
              const Icon = project.icon;
              const actualIndex = index + 1;
              return (
                <div 
                  key={actualIndex}
                  className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer"
                  style={{
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.6s ease-out ${actualIndex * 0.1 + 0.3}s`,
                  }}
                  onMouseEnter={() => setActiveCard(actualIndex)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <div 
                        className="p-3 rounded-xl backdrop-blur-xl border border-white/20 transition-all duration-300"
                        style={{ 
                          background: activeCard === actualIndex 
                            ? `${project.color}` 
                            : `${project.color}40`,
                        }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white text-lg font-bold mb-3 leading-tight">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-2 text-white/90">
                        <MapPin className="w-4 h-4 flex-shrink-0 text-[#52BC88]" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Row 2 - One wide + One regular */}
            <div 
              className="md:col-span-2 relative h-72 rounded-3xl overflow-hidden group cursor-pointer"
              style={{
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease-out 0.7s',
              }}
              onMouseEnter={() => setActiveCard(4)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <img 
                src={projects[4].image} 
                alt={projects[4].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex items-end">
                <div className="flex items-center gap-8 w-full">
                  <div 
                    className="p-5 rounded-2xl backdrop-blur-xl border border-white/20 transition-all duration-300"
                    style={{ 
                      background: activeCard === 4 
                        ? projects[4].color 
                        : `${projects[4].color}40`,
                    }}
                  >
                    <Factory className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-white text-2xl font-bold mb-2 leading-tight">
                      {projects[4].title}
                    </h4>
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPin className="w-5 h-5 flex-shrink-0 text-[#52BC88]" />
                      <span className="text-base">{projects[4].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {projects.slice(5).map((project, index) => {
              const Icon = project.icon;
              const actualIndex = index + 5;
              return (
                <div 
                  key={actualIndex}
                  className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer"
                  style={{
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.6s ease-out ${actualIndex * 0.1 + 0.3}s`,
                  }}
                  onMouseEnter={() => setActiveCard(actualIndex)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <div 
                        className="p-3 rounded-xl backdrop-blur-xl border border-white/20 transition-all duration-300"
                        style={{ 
                          background: activeCard === actualIndex 
                            ? project.color 
                            : `${project.color}40`,
                        }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white text-lg font-bold mb-3 leading-tight">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-2 text-white/90">
                        <MapPin className="w-4 h-4 flex-shrink-0 text-[#52BC88]" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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