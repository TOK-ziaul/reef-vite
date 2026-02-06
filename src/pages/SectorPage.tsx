import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CoffeeObjectives } from '../components/CoffeeObjectives';
import { CoffeeKeyAreas } from '../components/CoffeeKeyAreas';
import { CoffeeStats } from '../components/CoffeeStats';
import { CoffeeProjects } from '../components/CoffeeProjects';
import { CoffeeAchievements } from '../components/CoffeeAchievements';
import { CoffeeTissueCulture } from '../components/CoffeeTissueCulture';
import { RosesKeyAreas } from '../components/RosesKeyAreas';
import { RosesFiguresIndicators } from '../components/RosesFiguresIndicators';
import { RosesProjects } from '../components/RosesProjects';
import { FruitsWorkAxesFlowing } from '../components/FruitsWorkAxesFlowing';
import { FruitsStatsCreative } from '../components/FruitsStatsCreative';
import { FruitsProjectsCreative } from '../components/FruitsProjectsCreative';
import { LivestockIntro } from '../components/LivestockIntro';
import { LivestockMainGoals } from '../components/LivestockMainGoals';
import { LivestockWorkAxes } from '../components/LivestockWorkAxes';
import { LivestockProjects } from '../components/LivestockProjects';
import { KeyAchievements2024 } from '../components/KeyAchievements2024';
import { Lightbulb, Cog, Sprout, Truck, HeartHandshake, Coins, Users, TreePine, Trees, GraduationCap } from 'lucide-react';

interface SectorPageProps {
  sectorId: string;
}

export function SectorPage({ sectorId }: SectorPageProps) {
  const { t, language } = useLanguage();
  const heroImageRef = useRef<HTMLDivElement>(null);
  const isRTL = language === 'ar';

  // Zoom in/out effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroImageRef.current) return;

      const scrolled = window.scrollY;
      const scale = 1 + scrolled / 2000;
      heroImageRef.current.style.transform = `scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sector data mapping
  const sectorData: Record<string, {
    titleKey: string;
    descKey: string;
    image: string;
  }> = {
    beekeeping: {
      titleKey: 'beekeepingDevelopmentHoneyProduction',
      descKey: 'sector1Desc',
      image: 'https://images.unsplash.com/photo-1748286206989-170a93a3223a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVrZWVwaW5nJTIwaG9uZXljb21iJTIwYmVla2VlcGVyfGVufDF8fHx8MTc2OTY5NTA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    coffee: {
      titleKey: 'coffeeHeroTitle',
      descKey: 'sector2Desc',
      image: 'https://images.unsplash.com/photo-1627060063885-e1a30ab40551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWQlMjBhcmFiaWNhfGVufDF8fHx8MTc2OTc3ODE1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    flowers: {
      titleKey: 'rosesHeroTitle',
      descKey: 'sector3Desc',
      image: 'https://images.unsplash.com/photo-1727505102823-79e8c3659604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlcyUyMGN1bHRpdmF0aW9uJTIwZ2FyZGVuJTIwYmxvb21pbmd8ZW58MXx8fHwxNzY5OTQ3ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    fruits: {
      titleKey: 'fruitsHeroTitle',
      descKey: 'sector4Desc',
      image: 'https://images.unsplash.com/photo-1764062507212-e990e4df48ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0JTIwaGFydmVzdCUyMG9yY2hhcmQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3Njk5NTYxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    livestock: {
      titleKey: 'livestockHeroTitle',
      descKey: 'sector5Desc',
      image: 'https://images.unsplash.com/photo-1743362814840-bc41dd1b3a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMGNhdHRsZSUyMGxpdmVzdG9jayUyMGZhcm0lMjBydXJhbHxlbnwxfHx8fDE3NzAxMTY2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    handicrafts: {
      titleKey: 'sector8Title',
      descKey: 'sector8Desc',
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1920&q=80',
    },
    fishing: {
      titleKey: 'sector7Title',
      descKey: 'sector7Desc',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
    },
    aromatic: {
      titleKey: 'sector3Title',
      descKey: 'sector3Desc',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80',
    },
    agritech: {
      titleKey: 'sector9Title',
      descKey: 'sector9Desc',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1920&q=80',
    },
  };

  const sector = sectorData[sectorId] || sectorData.beekeeping;

  return (
    <div className={`min-h-screen bg-[#F9F7EF] ${isRTL ? 'rtl font-loew' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />

      {/* Hero Section with Zoom Effect */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Zoom Effect */}
        <div
          ref={heroImageRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-100"
          style={{
            backgroundImage: `url(${sector.image})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#035938]/80 via-[#035938]/70 to-[#035938]/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl text-center">
            {/* Main Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              {t(sector.titleKey)}
            </h1>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 50C240 20 480 20 720 50C960 80 1200 80 1440 50V100H0V50Z"
              fill="#F9F7EF"
            />
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative -mt-1 py-20 bg-[#F9F7EF]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          
          {/* Introduction Section - Beekeeping */}
          {sectorId === 'beekeeping' && (
            <div className="max-w-5xl mx-auto mb-16">
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="text-xl leading-relaxed">
                  {t('beekeepingIntro1')}
                </p>
                <p className="text-xl leading-relaxed">
                  {t('beekeepingIntro2')}
                </p>
                <p className="text-xl leading-relaxed">
                  {t('beekeepingIntro3')}
                </p>
              </div>
            </div>
          )}

          {/* Introduction Section - Coffee */}
          {sectorId === 'coffee' && (
            <div className="max-w-5xl mx-auto mb-16">
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="text-xl leading-relaxed">
                  {t('coffeeIntroP1')}
                </p>
                <p className="text-xl leading-relaxed">
                  {t('coffeeIntroP2')}
                </p>
              </div>
            </div>
          )}

          {/* Introduction Section - Roses & Aromatic Plants */}
          {sectorId === 'flowers' && (
            <div className="max-w-5xl mx-auto mb-16">
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="text-xl leading-relaxed">
                  {t('rosesIntro1')}
                </p>
                <p className="text-xl leading-relaxed">
                  {t('rosesIntro2')}
                </p>
                <p className="text-xl leading-relaxed">
                  {t('rosesIntro3')}
                </p>
              </div>
            </div>
          )}

          {/* Main Objectives Section - Coffee */}
          {sectorId === 'coffee' && <CoffeeObjectives />}

          {/* Key Areas of Action - Coffee */}
          {sectorId === 'coffee' && <CoffeeKeyAreas />}

          {/* Stats Section - Coffee */}
          {sectorId === 'coffee' && <CoffeeStats />}

          {/* Projects Section - Coffee */}
          {sectorId === 'coffee' && <CoffeeProjects />}

          {/* Achievements Section - Coffee */}
          {sectorId === 'coffee' && <CoffeeAchievements />}

          {/* Tissue Culture Section - Coffee */}
          {sectorId === 'coffee' && <CoffeeTissueCulture />}

          {/* Main Objectives Section - Roses & Aromatic Plants */}
          {sectorId === 'flowers' && (
            <div className="mb-16">
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
                  {t('mainObjectivesSector')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
              </div>

              {/* Objectives Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {/* Objective 1 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#52BC88]/30 overflow-hidden">
                  {/* Decorative Gradient Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#035938]/5 to-[#52BC88]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('rosesObj1')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objective 2 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F1BC28]/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F1BC28]/5 to-[#52BC88]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('rosesObj2')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objective 3 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#52BC88]/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#52BC88]/5 to-[#035938]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('rosesObj3')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objective 4 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#035938]/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#035938]/5 to-[#F1BC28]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#F1BC28] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('rosesObj4')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Areas of Action - Roses & Aromatic Plants */}
          {sectorId === 'flowers' && <RosesKeyAreas />}

          {/* Figures and Indicators - Roses & Aromatic Plants */}
          {sectorId === 'flowers' && <RosesFiguresIndicators />}

          {/* Sector Projects - Roses & Aromatic Plants */}
          {sectorId === 'flowers' && <RosesProjects />}

          {/* Introduction Section - Fruits */}
          {sectorId === 'fruits' && (
            <div className="max-w-5xl mx-auto mb-16">
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="text-xl leading-relaxed">
                  {t('fruitsIntro1')}
                </p>
                <p className="text-xl leading-relaxed">
                  {t('fruitsIntro2')}
                </p>
              </div>
            </div>
          )}

          {/* Main Objectives Section - Fruits */}
          {sectorId === 'fruits' && (
            <div className="mb-16">
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
                  {t('mainObjectivesSector')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
              </div>

              {/* Objectives Grid - 5 items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {/* Objective 1 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#52BC88]/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#035938]/5 to-[#52BC88]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('fruitsObj1')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objective 2 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F1BC28]/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F1BC28]/5 to-[#52BC88]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('fruitsObj2')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objective 3 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#52BC88]/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#52BC88]/5 to-[#035938]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('fruitsObj3')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objective 4 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#035938]/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#035938]/5 to-[#F1BC28]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#F1BC28] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('fruitsObj4')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objective 5 - Full Width on Desktop */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#52BC88]/30 overflow-hidden md:col-span-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F1BC28]/5 to-[#035938]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">5</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('fruitsObj5')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Work Axes Section - Fruits */}
          {sectorId === 'fruits' && (
            <FruitsWorkAxesFlowing t={t} />
          )}

          {/* TEMP - keep old code commented */}
          {false && sectorId === 'fruits' && (
            <div className="mb-20">
              {/* Section Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
                  {t('workAxes')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
              </div>

              {/* Bento Grid / Masonry Layout */}
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto">
                  
                  {/* Axis 1: Large Featured Card - Spans 4 cols, 2 rows */}
                  <div className="md:col-span-4 md:row-span-2 group relative bg-gradient-to-br from-[#035938] via-[#035938]/90 to-[#52BC88] rounded-3xl p-10 shadow-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#F1BC28]/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-3 mb-6">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                            <Sprout className="w-10 h-10 text-[#F1BC28]" />
                          </div>
                          <span className="bg-[#F1BC28] text-[#035938] px-5 py-2 rounded-full font-bold text-lg shadow-lg">01</span>
                        </div>
                        <p className="text-white text-2xl leading-relaxed font-light">{t('fruitsWorkAxis1')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Axis 2: Medium Card - Spans 2 cols */}
                  <div className="md:col-span-2 group relative bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-3xl p-8 shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <HeartHandshake className="w-7 h-7 text-white" />
                      </div>
                      <span className="inline-block bg-white/90 text-[#035938] px-4 py-1 rounded-full font-bold text-sm mb-4 shadow-md">02</span>
                      <p className="text-white text-base leading-relaxed">{t('fruitsWorkAxis2')}</p>
                    </div>
                  </div>

                  {/* Axis 3: Medium Card - Spans 2 cols */}
                  <div className="md:col-span-2 group relative bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-3xl p-8 shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <span className="inline-block bg-white/90 text-[#035938] px-4 py-1 rounded-full font-bold text-sm mb-4 shadow-md">03</span>
                      <p className="text-white text-base leading-relaxed">{t('fruitsWorkAxis3')}</p>
                    </div>
                  </div>

                  {/* Axis 4: Compact Glass Card - Spans 2 cols */}
                  <div className="md:col-span-2 group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-[#52BC88]/30 hover:border-[#52BC88] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="inline-block bg-gradient-to-r from-[#035938] to-[#52BC88] text-white px-3 py-1 rounded-full text-xs font-bold mb-2 shadow">04</span>
                        <p className="text-gray-700 text-sm leading-relaxed">{t('fruitsWorkAxis4')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Axis 5: Compact Glass Card - Spans 2 cols */}
                  <div className="md:col-span-2 group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-[#52BC88]/30 hover:border-[#52BC88] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                        <TreePine className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block bg-gradient-to-r from-[#52BC88] to-[#F1BC28] text-white px-3 py-1 rounded-full text-xs font-bold mb-2 shadow">05</span>
                        <p className="text-gray-700 text-sm leading-relaxed">{t('fruitsWorkAxis5')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Axis 6: Wide Card - Spans 4 cols */}
                  <div className="md:col-span-4 group relative bg-gradient-to-r from-[#F1BC28] via-[#52BC88] to-[#035938] rounded-3xl p-8 shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
                      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    <div className="relative z-10 flex items-center gap-6">
                      <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Cog className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block bg-white/90 text-[#035938] px-4 py-1 rounded-full font-bold text-sm mb-3 shadow-md">06</span>
                        <p className="text-white text-lg leading-relaxed">{t('fruitsWorkAxis6')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Axis 7: Tall Card - Spans 2 cols, 2 rows */}
                  <div className="md:col-span-2 md:row-span-2 group relative bg-gradient-to-b from-[#035938] to-[#52BC88] rounded-3xl p-8 shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-12px_rgb(82_188_136/0.4)] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Trees className="w-8 h-8 text-[#F1BC28]" />
                      </div>
                      <span className="inline-block bg-[#F1BC28] text-[#035938] px-4 py-1 rounded-full font-bold text-sm mb-4 shadow-lg w-fit">07</span>
                      <p className="text-white text-lg leading-relaxed flex-1">{t('fruitsWorkAxis7')}</p>
                      <div className="mt-6 pt-6 border-t border-white/20">
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <div className="w-2 h-2 bg-[#F1BC28] rounded-full"></div>
                          <span>Model Farms</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Axis 8: Wide Card - Spans 3 cols */}
                  <div className="md:col-span-3 group relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-[#52BC88]/30 hover:border-[#52BC88] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#52BC88]/20 to-[#F1BC28]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10 flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                        <GraduationCap className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block bg-gradient-to-r from-[#52BC88] to-[#F1BC28] text-white px-3 py-1 rounded-full text-xs font-bold mb-3 shadow">08</span>
                        <p className="text-gray-700 leading-relaxed">{t('fruitsWorkAxis8')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Axis 9: Wide Card - Spans 3 cols */}
                  <div className="md:col-span-3 group relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-[#F1BC28]/30 hover:border-[#F1BC28] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#F1BC28]/20 to-[#035938]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10 flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                        <Coins className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block bg-gradient-to-r from-[#F1BC28] to-[#035938] text-white px-3 py-1 rounded-full text-xs font-bold mb-3 shadow">09</span>
                        <p className="text-gray-700 leading-relaxed">{t('fruitsWorkAxis9')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Axis 10: Medium Card - Spans 3 cols */}
                  <div className="md:col-span-3 group relative bg-gradient-to-br from-[#035938] to-[#52BC88]/80 rounded-3xl p-8 shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-7 h-7 text-[#F1BC28]" />
                      </div>
                      <span className="inline-block bg-[#F1BC28] text-[#035938] px-4 py-1 rounded-full font-bold text-sm mb-4 shadow-md">10</span>
                      <p className="text-white leading-relaxed">{t('fruitsWorkAxis10')}</p>
                    </div>
                  </div>

                  {/* Axis 11: Medium Card - Spans 3 cols */}
                  <div className="md:col-span-3 group relative bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-3xl p-8 shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="w-7 h-7 text-white" />
                      </div>
                      <span className="inline-block bg-white/90 text-[#035938] px-4 py-1 rounded-full font-bold text-sm mb-4 shadow-md">11</span>
                      <p className="text-white leading-relaxed">{t('fruitsWorkAxis11')}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}
          {/* END TEMP */}

          {/* Numbers and Indicators Section - Fruits - Creative */}
          {sectorId === 'fruits' && (
            <FruitsStatsCreative t={t} language={language} />
          )}

          {/* Fruit Sector Projects Section - Creative */}
          {sectorId === 'fruits' && (
            <FruitsProjectsCreative t={t} language={language} />
          )}

          {/* Key Works 2024 Section - Fruits */}
          {sectorId === 'fruits' && (
            <div className="mb-20 mt-40 relative z-0">
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
                  {t('fruitsKeyWorks2024Title')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
              </div>

              <div className="space-y-8">
                {/* Work 1: Establishing New Nurseries */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border-l-8 border-[#52BC88] hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        1
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#035938] mb-4">{t('fruitsWork1Title')}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{t('fruitsWork1Desc')}</p>
                      <div className="flex flex-wrap gap-3">
                        <div className="bg-gradient-to-r from-[#035938] to-[#52BC88] text-white px-6 py-3 rounded-full font-semibold shadow-md">
                          {isRTL ? 'الطائف' : 'Taif'} - 15,000 {isRTL ? 'شتلة' : 'Seedlings'}
                        </div>
                        <div className="bg-gradient-to-r from-[#F1BC28] to-[#035938] text-white px-6 py-3 rounded-full font-semibold shadow-md">
                          {isRTL ? 'جازان' : 'Jazan'} - 15,000 {isRTL ? 'شتلة' : 'Seedlings'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Work 2: Expansion of Old Nurseries */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border-l-8 border-[#F1BC28] hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#035938] mb-4">{t('fruitsWork2Title')}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div className="bg-gradient-to-br from-[#F9F7EF] to-white p-6 rounded-2xl border-2 border-[#52BC88]/30">
                          <p className="text-sm text-gray-600 mb-2">{t('fruitsWork2Region1')}</p>
                          <p className="text-3xl font-bold text-[#52BC88]">{t('fruitsWork2Region1Value')}</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#F9F7EF] to-white p-6 rounded-2xl border-2 border-[#52BC88]/30">
                          <p className="text-sm text-gray-600 mb-2">{t('fruitsWork2Region2')}</p>
                          <p className="text-3xl font-bold text-[#52BC88]">{t('fruitsWork2Region2Value')}</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-[#035938] to-[#52BC88] p-6 rounded-2xl text-white">
                        <p className="text-sm opacity-90 mb-2">{t('fruitsWork2Total')}</p>
                        <p className="text-4xl font-bold mb-2">{t('fruitsWork2TotalValue')}</p>
                        <p className="text-sm opacity-90">{t('fruitsWork2Note')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Work 3: Description of Fruit Varieties */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border-l-8 border-[#52BC88] hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        3
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#035938] mb-4">{t('fruitsWork3Title')}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{t('fruitsWork3Desc')}</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { ar: 'العنب', en: 'Grapes' },
                          { ar: 'التين', en: 'Figs' },
                          { ar: 'المشمش', en: 'Apricots' },
                          { ar: 'اللوز', en: 'Almonds' },
                        ].map((variety, idx) => (
                          <div key={idx} className="bg-[#52BC88]/10 border-2 border-[#52BC88] px-4 py-2 rounded-full text-[#035938] font-semibold">
                            {isRTL ? variety.ar : variety.en}
                          </div>
                        ))}
                        <div className="bg-gradient-to-r from-[#F1BC28] to-[#035938] text-white px-4 py-2 rounded-full font-bold">
                          6 {isRTL ? 'أصناف' : 'Varieties'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Work 4: Women's Agricultural Entrepreneurship */}
                <div className="bg-gradient-to-br from-[#F9F7EF] to-white rounded-3xl p-8 shadow-lg border-l-8 border-[#F1BC28] hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        4
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#035938] mb-4">{t('fruitsWork4Title')}</h3>
                      <p className="text-gray-700 font-semibold mb-4">{t('fruitsWork4Duration')}</p>
                      <div className="space-y-3 mb-6">
                        {[1, 2, 3, 4].map((num) => (
                          <div key={num} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#52BC88] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-gray-700">{t(`fruitsWork4Point${num}`)}</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white rounded-2xl p-6 border-2 border-[#F1BC28]/30">
                        <p className="text-gray-700 font-semibold mb-3">{t('fruitsWork4Point5')}</p>
                        <div className="flex flex-wrap gap-2">
                          {[1, 2, 3, 4].map((num) => (
                            <div key={num} className="bg-gradient-to-r from-[#F1BC28] to-[#035938] text-white px-4 py-2 rounded-lg font-semibold shadow-md">
                              {t(`fruitsWork4Product${num}`)}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Work 5: Plant Health */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border-l-8 border-[#52BC88] hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        5
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#035938] mb-4">{t('fruitsWork5Title')}</h3>
                      <div className="space-y-4">
                        {[1, 2, 3].map((num) => (
                          <div key={num} className="flex items-start gap-3 bg-gradient-to-r from-[#F9F7EF] to-white p-4 rounded-xl border-l-4 border-[#52BC88]">
                            <div className="w-8 h-8 bg-[#52BC88] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                              {num}
                            </div>
                            <p className="text-gray-700 flex-1">{t(`fruitsWork5Point${num}`)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section - Fruits */}
          {sectorId === 'fruits' && (
            <div className="mb-16">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-[#035938] to-[#52BC88] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  {isRTL ? 'استكشف الخريطة التفاعلية' : 'Explore Interactive Map'}
                </button>
                <button className="bg-[#F1BC28] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {isRTL ? 'استكشف برامج الدعم' : 'Explore Support Programs'}
                </button>
              </div>
            </div>
          )}

          {/* Introduction Section - Livestock */}
          {sectorId === 'livestock' && <LivestockIntro />}

          {/* Main Goals Section - Livestock */}
          {sectorId === 'livestock' && <LivestockMainGoals />}

          {/* Work Axes Section - Livestock */}
          {sectorId === 'livestock' && <LivestockWorkAxes />}

          {/* Projects Section - Livestock */}
          {sectorId === 'livestock' && <LivestockProjects />}

          {/* Key Achievements 2024 - Livestock */}
          {sectorId === 'livestock' && <KeyAchievements2024 />}

          {/* Main Objectives Section - Beekeeping Only */}
          {sectorId === 'beekeeping' && (
            <div className="mb-16">
              {/* Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
                  {t('mainObjectivesSector')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
              </div>

              {/* Objectives Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {/* Objective 1 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#52BC88]/30 overflow-hidden">
                  {/* Decorative Gradient Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#035938]/5 to-[#52BC88]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('beekeepingObj1')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objective 2 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F1BC28]/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F1BC28]/5 to-[#52BC88]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('beekeepingObj2')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objective 3 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#52BC88]/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#52BC88]/5 to-[#035938]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('beekeepingObj3')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objective 4 */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#035938]/30 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#035938]/5 to-[#F1BC28]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#F1BC28] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xl font-bold">4</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {t('beekeepingObj4')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Work Areas Section - Beekeeping Only */}
          {sectorId === 'beekeeping' && (
            <div className="mb-20">
              {/* Section Title */}
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#035938] mb-4">
                  {t('keyWorkAreasHoneySector')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
                <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
                  A comprehensive ecosystem supporting beekeepers from production to market
                </p>
              </div>

              {/* Honeycomb Hexagonal Layout - Desktop */}
              <div className="hidden lg:block max-w-6xl mx-auto relative">
                
                {/* Background Pattern - Hexagon Outlines */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-10"
                  style={{
                    backgroundImage: `url('data:image/svg+xml,<svg width="200" height="173" viewBox="0 0 200 173" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 10 L170 53.5 L170 140.5 L100 184 L30 140.5 L30 53.5 Z" stroke="%23035938" stroke-width="2" fill="none"/></svg>')`,
                    backgroundSize: '200px 173px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat'
                  }}
                ></div>

                {/* Central Hub - Hexagon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative w-56 h-56">
                    {/* Hexagon Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] via-[#F1BC28] to-[#52BC88] shadow-2xl" 
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    </div>
                    {/* Pulsing Ring Effect */}
                    <div className="absolute inset-0 animate-ping opacity-20" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      <div className="w-full h-full bg-[#F1BC28]"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                          <TreePine className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-[#035938] leading-tight">
                          Honey Sector<br/>Ecosystem
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Honeycomb Grid - Hexagons arranged in honeycomb pattern */}
                <div className="relative" style={{ minHeight: '1000px' }}>
                  
                  {/* Row 1 - Top Center */}
                  <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '0px' }}>
                    <div className="group relative w-56 h-56">
                      <div className="absolute inset-0 bg-white border-2 border-[#035938]/20 group-hover:border-[#035938] shadow-lg group-hover:shadow-2xl transition-all duration-300"
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Sprout className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm leading-snug">{t('honeyWork1')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 - Two hexagons */}
                  <div className="absolute" style={{ top: '160px', left: 'calc(50% - 240px)' }}>
                    <div className="group relative w-56 h-56">
                      <div className="absolute inset-0 bg-white border-2 border-[#035938]/20 group-hover:border-[#035938] shadow-lg group-hover:shadow-2xl transition-all duration-300"
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Cog className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm leading-snug">{t('honeyWork2')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute" style={{ top: '160px', right: 'calc(50% - 240px)' }}>
                    <div className="group relative w-56 h-56">
                      <div className="absolute inset-0 bg-white border-2 border-[#035938]/20 group-hover:border-[#035938] shadow-lg group-hover:shadow-2xl transition-all duration-300"
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Lightbulb className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm leading-snug">{t('honeyWork3')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3 - Three hexagons (middle row with center) */}
                  <div className="absolute" style={{ top: '370px', left: 'calc(50% - 360px)' }}>
                    <div className="group relative w-56 h-56">
                      <div className="absolute inset-0 bg-white border-2 border-[#035938]/20 group-hover:border-[#035938] shadow-lg group-hover:shadow-2xl transition-all duration-300"
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Truck className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm leading-snug">{t('honeyWork4')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute" style={{ top: '370px', right: 'calc(50% - 360px)' }}>
                    <div className="group relative w-56 h-56">
                      <div className="absolute inset-0 bg-white border-2 border-[#035938]/20 group-hover:border-[#035938] shadow-lg group-hover:shadow-2xl transition-all duration-300"
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <HeartHandshake className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm leading-snug">{t('honeyWork5')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4 - Four hexagons */}
                  <div className="absolute" style={{ top: '580px', left: 'calc(50% - 480px)' }}>
                    <div className="group relative w-56 h-56">
                      <div className="absolute inset-0 bg-white border-2 border-[#035938]/20 group-hover:border-[#035938] shadow-lg group-hover:shadow-2xl transition-all duration-300"
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Coins className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm leading-snug">{t('honeyWork6')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute" style={{ top: '580px', left: 'calc(50% - 240px)' }}>
                    <div className="group relative w-56 h-56">
                      <div className="absolute inset-0 bg-white border-2 border-[#035938]/20 group-hover:border-[#035938] shadow-lg group-hover:shadow-2xl transition-all duration-300"
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Users className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm leading-snug">{t('honeyWork7')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute" style={{ top: '580px', right: 'calc(50% - 240px)' }}>
                    <div className="group relative w-56 h-56">
                      <div className="absolute inset-0 bg-white border-2 border-[#035938]/20 group-hover:border-[#035938] shadow-lg group-hover:shadow-2xl transition-all duration-300"
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <TreePine className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm leading-snug">{t('honeyWork8')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute" style={{ top: '580px', right: 'calc(50% - 480px)' }}>
                    <div className="group relative w-56 h-56">
                      <div className="absolute inset-0 bg-white border-2 border-[#035938]/20 group-hover:border-[#035938] shadow-lg group-hover:shadow-2xl transition-all duration-300"
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <Trees className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm leading-snug">{t('honeyWork9')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 5 - Bottom Center */}
                  <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: '0px' }}>
                    <div className="group relative w-56 h-56">
                      <div className="absolute inset-0 bg-white border-2 border-[#035938]/20 group-hover:border-[#035938] shadow-lg group-hover:shadow-2xl transition-all duration-300"
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <GraduationCap className="w-7 h-7 text-white" />
                          </div>
                          <p className="text-gray-700 text-sm leading-snug">{t('honeyWork10')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Mobile/Tablet Grid Fallback */}
              <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                  const icons = [Sprout, Cog, Lightbulb, Truck, HeartHandshake, Coins, Users, TreePine, Trees, GraduationCap];
                  const colors = [
                    'from-[#035938] to-[#52BC88]',
                    'from-[#035938] to-[#52BC88]',
                    'from-[#035938] to-[#52BC88]',
                    'from-[#035938] to-[#52BC88]',
                    'from-[#035938] to-[#52BC88]',
                    'from-[#035938] to-[#52BC88]',
                    'from-[#035938] to-[#52BC88]',
                    'from-[#035938] to-[#52BC88]',
                    'from-[#035938] to-[#52BC88]',
                    'from-[#035938] to-[#52BC88]',
                  ];
                  const Icon = icons[num - 1];
                  
                  return (
                    <div
                      key={num}
                      className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-gray-100 hover:border-[#035938]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#035938]/0 to-[#035938]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${colors[num - 1]} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:rotate-12 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="h-2 w-12 bg-[#035938] rounded-full mb-3"></div>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {t(`honeyWork${num}`)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* Figures and Indicators Section - Beekeeping Only */}
          {sectorId === 'beekeeping' && (
            <div className="mb-20">
              {/* Section Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#035938] mb-4">
                  {t('figuresAndIndicators')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
              </div>

              {/* Top Stats - Compact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
                {/* Total Support Value */}
                <div className="group relative bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl p-4 md:p-5 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#F1BC28]/10 rounded-full blur-lg"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Coins className="w-4 h-4 text-[#F1BC28]" />
                      </div>
                      <h3 className="text-white/70 text-[10px] md:text-xs font-medium uppercase tracking-wide">{t('totalSupportValue')}</h3>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold text-white">+197.53</span>
                      <span className="text-sm md:text-base text-[#F1BC28] font-semibold">{t('million')} SAR</span>
                    </div>
                  </div>
                </div>

                {/* Total Beneficiaries */}
                <div className="group relative bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-2xl p-4 md:p-5 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#035938]/10 rounded-full blur-lg"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-[#035938]" />
                      </div>
                      <h3 className="text-[#035938]/70 text-[10px] md:text-xs font-medium uppercase tracking-wide">{t('totalBeneficiaries')}</h3>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-2xl md:text-3xl font-bold text-[#035938]">+14,899</span>
                      <div className="flex gap-2 text-[10px] md:text-xs text-[#035938]/70 font-medium">
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full whitespace-nowrap">
                          <div className="w-1 h-1 bg-[#035938] rounded-full"></div>
                          <span>6,428 {t('men')}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full whitespace-nowrap">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <span>8,471 {t('women')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geographical Distribution - Redesigned */}
              <div className="mb-16 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-2">
                    {t('geographicalDistribution')}
                  </h3>
                  <p className="text-gray-600">{t('beneficiariesByRegion')}</p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  {/* Top 3 Regions - Featured */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* #1 Asir */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-2xl p-6 m-1">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">1</span>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-2 font-semibold">Asir</div>
                          <div className="text-4xl font-bold text-[#035938] mb-3">7,195</div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#035938] to-[#52BC88] rounded-full" style={{ width: '100%' }}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">48.3% of total</div>
                        </div>
                      </div>
                    </div>

                    {/* #2 Hail */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-2xl p-6 m-1">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-2 font-semibold">Hail</div>
                          <div className="text-4xl font-bold text-[#52BC88] mb-3">2,338</div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#52BC88] to-[#F1BC28] rounded-full" style={{ width: '32.5%' }}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">15.7% of total</div>
                        </div>
                      </div>
                    </div>

                    {/* #3 Makkah */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-2xl p-6 m-1">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-2 font-semibold">Makkah Al-Mukarramah</div>
                          <div className="text-4xl font-bold text-[#F1BC28] mb-3">1,836</div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#F1BC28] to-[#035938] rounded-full" style={{ width: '25.5%' }}></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">12.3% of total</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Bar Chart - Remaining Regions */}
                  <div className="space-y-3">
                    {[
                      { region: 'Al-Baha', count: 1196, color: 'from-[#035938] to-[#52BC88]' },
                      { region: 'Tabuk', count: 552, color: 'from-[#52BC88] to-[#F1BC28]' },
                      { region: 'Northern Borders', count: 457, color: 'from-[#F1BC28] to-[#52BC88]' },
                      { region: 'Eastern Province', count: 420, color: 'from-[#035938] to-[#52BC88]' },
                      { region: 'Jazan', count: 363, color: 'from-[#52BC88] to-[#F1BC28]' },
                      { region: 'Madinah', count: 340, color: 'from-[#F1BC28] to-[#035938]' },
                      { region: 'Riyadh', count: 174, color: 'from-[#035938] to-[#52BC88]' },
                      { region: 'Al-Jouf', count: 124, color: 'from-[#52BC88] to-[#F1BC28]' },
                      { region: 'Najran', count: 117, color: 'from-[#F1BC28] to-[#52BC88]' },
                      { region: 'Al-Qassim', count: 53, color: 'from-[#035938] to-[#52BC88]' },
                    ].map((item, index) => {
                      const maxCount = 7195;
                      const percentage = (item.count / maxCount) * 100;
                      const showNumberInside = percentage > 8; // Show inside only if bar is wide enough
                      
                      return (
                        <div key={index} className="group flex items-center gap-4 hover:bg-gray-50 rounded-xl p-3 transition-all duration-300">
                          <div className="w-36 text-sm font-semibold text-gray-700 flex-shrink-0">
                            {item.region}
                          </div>
                          <div className="flex-1 flex items-center gap-3">
                            <div className="flex-1 relative h-8 bg-gray-100 rounded-lg overflow-visible">
                              <div 
                                className={`h-full bg-gradient-to-r ${item.color} flex items-center ${showNumberInside ? 'justify-end pr-3' : ''} transition-all duration-700 ease-out rounded-lg`}
                                style={{ width: `${percentage}%` }}
                              >
                                {showNumberInside && (
                                  <span className="text-white text-xs font-bold drop-shadow-md">{item.count.toLocaleString()}</span>
                                )}
                              </div>
                              {!showNumberInside && (
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                                  <span className="text-gray-700 text-xs font-bold">{item.count.toLocaleString()}</span>
                                </div>
                              )}
                            </div>
                            <div className="w-16 text-right text-sm font-bold text-gray-600">
                              {((item.count / 14899) * 100).toFixed(1)}%
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Honey Production Growth - Redesigned */}
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-2">
                    {t('annualHoneyProduction')}
                  </h3>
                  <p className="text-gray-600">{t('tonsPerYear')}</p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
                  {/* Visual Growth Chart */}
                  <div className="relative mb-12">
                    {/* Growth Line Background */}
                    <div className="absolute bottom-0 left-0 right-0 h-64 md:h-80">
                      <svg className="w-full h-full" viewBox="0 0 1200 320" preserveAspectRatio="none">
                        {/* Gradient Definition */}
                        <defs>
                          <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#035938" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#52BC88" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#F1BC28" stopOpacity="0.2" />
                          </linearGradient>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#035938" />
                            <stop offset="50%" stopColor="#52BC88" />
                            <stop offset="100%" stopColor="#F1BC28" />
                          </linearGradient>
                        </defs>
                        {/* Growth Area */}
                        <path
                          d="M 0 280 L 0 200 Q 300 180 600 100 Q 900 20 1200 10 L 1200 280 Z"
                          fill="url(#growthGradient)"
                        />
                        {/* Growth Line */}
                        <path
                          d="M 0 200 Q 300 180 600 100 Q 900 20 1200 10"
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Data Points */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                      {/* 2020 */}
                      <div className="text-center">
                        <div className="inline-block relative mb-6">
                          {/* Hexagon Container */}
                          <div className="relative w-36 h-36 md:w-40 md:h-40">
                            <div 
                              className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] shadow-2xl transform hover:scale-110 transition-transform duration-300"
                              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                            >
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">2,100</div>
                                <div className="text-white/80 text-sm">{t('tons')}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-[#035938]">2020</div>
                          <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                            {t('baseline')}
                          </div>
                        </div>
                      </div>

                      {/* 2024 */}
                      <div className="text-center">
                        <div className="inline-block relative mb-6">
                          {/* Hexagon Container */}
                          <div className="relative w-36 h-36 md:w-40 md:h-40">
                            <div 
                              className="absolute inset-0 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] shadow-2xl transform hover:scale-110 transition-transform duration-300"
                              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                            >
                            </div>
                            {/* Growth Badge */}
                            <div className="absolute -top-3 -right-3 z-10">
                              <div className="relative">
                                <div className="absolute inset-0 bg-[#F1BC28] rounded-full blur-lg opacity-50 animate-pulse"></div>
                                <div className="relative w-16 h-16 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-full flex items-center justify-center shadow-xl">
                                  <span className="text-white font-bold text-sm">+57%</span>
                                </div>
                              </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">4,300</div>
                                <div className="text-white/80 text-sm">{t('tons')}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-[#52BC88]">2024</div>
                          <div className="inline-block px-4 py-1 bg-[#52BC88]/10 rounded-full text-sm text-[#52BC88] font-semibold">
                            {t('currentYear')}
                          </div>
                        </div>
                      </div>

                      {/* 2026 */}
                      <div className="text-center">
                        <div className="inline-block relative mb-6">
                          {/* Hexagon Container */}
                          <div className="relative w-36 h-36 md:w-40 md:h-40">
                            <div 
                              className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] to-[#035938] shadow-2xl transform hover:scale-110 transition-transform duration-300"
                              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                            >
                            </div>
                            {/* Dashed Border for Target */}
                            <div 
                              className="absolute inset-0 border-4 border-dashed border-[#F1BC28] opacity-50"
                              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                            >
                            </div>
                            {/* Target Badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                              <div className="px-4 py-1.5 bg-[#035938] rounded-full shadow-lg">
                                <span className="text-white font-bold text-xs uppercase tracking-wide">{t('target')}</span>
                              </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">7,500</div>
                                <div className="text-white/80 text-sm">{t('tons')}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-[#F1BC28]">2026</div>
                          <div className="inline-block px-4 py-1 bg-[#F1BC28]/10 rounded-full text-sm text-[#F1BC28] font-semibold">
                            {t('projectedGrowth')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Growth Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t-2 border-gray-100">
                    <div className="relative group overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#035938]/5 to-[#52BC88]/10 group-hover:from-[#035938]/10 group-hover:to-[#52BC88]/20 transition-all duration-300"></div>
                      <div className="relative p-6 text-center">
                        <div className="text-4xl font-bold text-[#035938] mb-2">+2,200</div>
                        <div className="text-sm text-gray-600 font-medium">{t('tonsGrowth2020to2024')}</div>
                        <div className="mt-3 inline-block px-3 py-1 bg-[#035938]/10 rounded-full text-xs text-[#035938] font-semibold">
                          104.8% Growth
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88]/5 to-[#F1BC28]/10 group-hover:from-[#52BC88]/10 group-hover:to-[#F1BC28]/20 transition-all duration-300"></div>
                      <div className="relative p-6 text-center">
                        <div className="text-4xl font-bold text-[#52BC88] mb-2">+5,400</div>
                        <div className="text-sm text-gray-600 font-medium">{t('totalProjectedGrowth')}</div>
                        <div className="mt-3 inline-block px-3 py-1 bg-[#52BC88]/10 rounded-full text-xs text-[#52BC88] font-semibold">
                          2020-2026
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative group overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28]/5 to-[#035938]/10 group-hover:from-[#F1BC28]/10 group-hover:to-[#035938]/20 transition-all duration-300"></div>
                      <div className="relative p-6 text-center">
                        <div className="text-4xl font-bold text-[#F1BC28] mb-2">257%</div>
                        <div className="text-sm text-gray-600 font-medium">{t('overallGrowthRate')}</div>
                        <div className="mt-3 inline-block px-3 py-1 bg-[#F1BC28]/10 rounded-full text-xs text-[#F1BC28] font-semibold">
                          6-Year Period
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Section - Beekeeping & Honey Production */}
          {sectorId === 'beekeeping' && (
            <div className="mb-12">
              <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
                    Projects of the Beekeeping Development and Honey Production Sector
                  </h3>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-8 mb-8">
                    <div className="relative group overflow-hidden rounded-2xl bg-white shadow-xl border-2 border-[#035938]/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#035938]/5 to-[#52BC88]/10 group-hover:from-[#035938]/10 group-hover:to-[#52BC88]/20 transition-all duration-300"></div>
                      <div className="relative p-8 text-center">
                        <div className="text-5xl font-bold text-[#035938] mb-2">13</div>
                        <div className="text-lg text-gray-700 font-semibold">Projects</div>
                      </div>
                    </div>
                    
                    <div className="relative group overflow-hidden rounded-2xl bg-white shadow-xl border-2 border-[#52BC88]/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88]/5 to-[#F1BC28]/10 group-hover:from-[#52BC88]/10 group-hover:to-[#F1BC28]/20 transition-all duration-300"></div>
                      <div className="relative p-8 text-center">
                        <div className="text-5xl font-bold text-[#52BC88] mb-2">98M</div>
                        <div className="text-lg text-gray-700 font-semibold">SAR Total Value</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    The "Reef Saudi Arabia" Program implements several high-impact projects in the beekeeping and honey production sector to protect local bee strains, increase production efficiency, and support sustainability of this vital sector across the Kingdom.
                  </p>
                </div>

                {/* Key Projects Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <h4 className="text-2xl md:text-3xl font-bold text-[#035938] mb-8 flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#035938] to-[#52BC88] rounded-full"></div>
                    Key Sector Projects
                  </h4>

                  <div className="space-y-6">
                    {/* Main Project */}
                    <div className="relative group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#035938] to-[#52BC88] rounded-full group-hover:w-2 transition-all duration-300"></div>
                      <div className="pl-8 py-4 bg-gradient-to-r from-[#035938]/5 to-transparent rounded-r-xl group-hover:from-[#035938]/10 transition-all duration-300">
                        <h5 className="text-xl font-bold text-[#035938] mb-2">
                          Beekeeping Program in the Kingdom of Saudi Arabia (Phase II)
                        </h5>
                        <p className="text-gray-600">Protection of the local honey bee strain.</p>
                      </div>
                    </div>

                    {/* Rehabilitation Project */}
                    <div className="relative group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#52BC88] to-[#F1BC28] rounded-full group-hover:w-2 transition-all duration-300"></div>
                      <div className="pl-8 py-4 bg-gradient-to-r from-[#52BC88]/5 to-transparent rounded-r-xl group-hover:from-[#52BC88]/10 transition-all duration-300">
                        <h5 className="text-xl font-bold text-[#035938] mb-2">
                          Rehabilitation of the Beekeeping Station in Baljurashi
                        </h5>
                      </div>
                    </div>

                    {/* Queen Bee Stations */}
                    <div className="relative group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F1BC28] to-[#035938] rounded-full group-hover:w-2 transition-all duration-300"></div>
                      <div className="pl-8 py-4 bg-gradient-to-r from-[#F1BC28]/5 to-transparent rounded-r-xl group-hover:from-[#F1BC28]/10 transition-all duration-300">
                        <h5 className="text-xl font-bold text-[#035938] mb-3">
                          Establishment of Queen Bee Breeding and Package Production Stations
                        </h5>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['Asir – Al-Namas', 'Jazan', 'Madinah', 'Hail', 'Tabuk', 'Taif', 'Najran'].map((location, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-[#035938]/10 hover:border-[#035938]/30 hover:shadow-md transition-all duration-300"
                            >
                              <div className="w-2 h-2 bg-[#F1BC28] rounded-full"></div>
                              <span className="text-sm font-semibold text-gray-700">{location}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Equipment Supply */}
                    <div className="relative group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#035938] to-[#52BC88] rounded-full group-hover:w-2 transition-all duration-300"></div>
                      <div className="pl-8 py-4 bg-gradient-to-r from-[#035938]/5 to-transparent rounded-r-xl group-hover:from-[#035938]/10 transition-all duration-300">
                        <h5 className="text-xl font-bold text-[#035938] mb-2">
                          Supply of Modern Beekeeping Equipment
                        </h5>
                        <p className="text-gray-600">To promote advanced technologies among beekeepers.</p>
                      </div>
                    </div>

                    {/* Mobile Laboratories */}
                    <div className="relative group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#52BC88] to-[#F1BC28] rounded-full group-hover:w-2 transition-all duration-300"></div>
                      <div className="pl-8 py-4 bg-gradient-to-r from-[#52BC88]/5 to-transparent rounded-r-xl group-hover:from-[#52BC88]/10 transition-all duration-300">
                        <h5 className="text-xl font-bold text-[#035938] mb-2">
                          Supply of Mobile Laboratories
                        </h5>
                        <p className="text-gray-600">For testing and diagnosing bee diseases and pests in apiaries.</p>
                      </div>
                    </div>

                    {/* Mobile Clinics */}
                    <div className="relative group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F1BC28] to-[#035938] rounded-full group-hover:w-2 transition-all duration-300"></div>
                      <div className="pl-8 py-4 bg-gradient-to-r from-[#F1BC28]/5 to-transparent rounded-r-xl group-hover:from-[#F1BC28]/10 transition-all duration-300">
                        <h5 className="text-xl font-bold text-[#035938] mb-2">
                          Supply of Fully Equipped Mobile Clinics
                        </h5>
                        <p className="text-gray-600">For diagnosing bee diseases and pests.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Technical and Economic Feasibility Section - Beekeeping Only */}
          {sectorId === 'beekeeping' && (
            <div className="mb-20">
              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
                    Technical and Economic Feasibility of the Projects
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full mb-6"></div>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    These projects aim to create a sustainable impact on the beekeeping and honey production sector through:
                  </p>
                </div>

                {/* Impact Goals - Creative Staggered Layout */}
                <div className="space-y-6">
                  {/* Row 1: Large + Small */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#035938] to-[#52BC88] p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F1BC28]/20 rounded-full -ml-12 -mb-12"></div>
                      <div className="relative z-10">
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">01</div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">Protecting National Bee Wealth</h4>
                            <p className="text-white/90">Comprehensive protection from diseases and pests to ensure sustainable populations</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-[#52BC88]/20 p-6 shadow-lg hover:shadow-xl hover:border-[#52BC88] transition-all duration-300">
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-full opacity-10"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-xl flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform duration-300">02</div>
                        <p className="text-gray-700 font-medium leading-relaxed">Increasing employment opportunities in beekeeping</p>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Small + Large */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-[#F1BC28]/20 p-6 shadow-lg hover:shadow-xl hover:border-[#F1BC28] transition-all duration-300">
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-full opacity-10"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-xl flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform duration-300">03</div>
                        <p className="text-gray-700 font-medium leading-relaxed">Increasing adapted bee colonies and improving genetics</p>
                      </div>
                    </div>

                    <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F1BC28] to-[#52BC88] p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#035938]/20 rounded-full -ml-12 -mb-12"></div>
                      <div className="relative z-10">
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">04</div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-[#035938] mb-2">Local Bee Products Year-Round</h4>
                            <p className="text-[#035938]/90">Providing local bee products throughout the year without the need for imports</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Three Equal Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-[#035938]/20 p-6 shadow-lg hover:shadow-xl hover:border-[#035938] transition-all duration-300">
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-full opacity-10"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform duration-300">05</div>
                        <p className="text-gray-700 font-medium leading-relaxed">Educational guidance manual for beekeepers</p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-[#52BC88]/20 p-6 shadow-lg hover:shadow-xl hover:border-[#52BC88] transition-all duration-300">
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-full opacity-10"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-xl flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform duration-300">06</div>
                        <p className="text-gray-700 font-medium leading-relaxed">Reducing genetic mixing of local bee strain</p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-[#F1BC28]/20 p-6 shadow-lg hover:shadow-xl hover:border-[#F1BC28] transition-all duration-300">
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-full opacity-10"></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-xl flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform duration-300">07</div>
                        <p className="text-gray-700 font-medium leading-relaxed">Comprehensive database of diseases and pests</p>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Two Equal Large Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#52BC88] to-[#035938] p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F1BC28]/20 rounded-full -ml-12 -mb-12"></div>
                      <div className="relative z-10">
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">08</div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">Stimulating Local Industry</h4>
                            <p className="text-white/90">Supporting local industry to meet the needs of beekeeping projects</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F1BC28] to-[#035938] p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#52BC88]/20 rounded-full -ml-12 -mb-12"></div>
                      <div className="relative z-10">
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">09</div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-[#035938] mb-2">Modern Technologies</h4>
                            <p className="text-[#035938]/90">Promoting and applying advanced beekeeping methods</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project Objectives Section - Beekeeping Only */}
          {sectorId === 'beekeeping' && (
            <div className="mb-20 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-20">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
                    Project Objectives
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full mb-6"></div>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    Projects in the beekeeping sector under the "Reef Saudi Arabia" Program focus on achieving the following strategic goals:
                  </p>
                </div>

                {/* Clean Stat Cards - Horizontal Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {/* Objective 1 */}
                  <div className="flex items-center gap-5 bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-full shadow-lg flex items-center justify-center">
                        <div className="text-white text-3xl font-bold">01</div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#F1BC28] rounded-full shadow-md flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-[#035938] mb-1">Increasing Local Bee Colonies</h5>
                      <p className="text-sm text-gray-600">Achieve self-sufficiency and protect nature reserves from imported strains</p>
                    </div>
                  </div>

                  {/* Objective 2 */}
                  <div className="flex items-center gap-5 bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-full shadow-lg flex items-center justify-center">
                        <div className="text-white text-3xl font-bold">02</div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#035938] rounded-full shadow-md flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-[#035938] mb-1">Testing & Diagnosis Services</h5>
                      <p className="text-sm text-gray-600">Treatment services for diseases and pests with guidance for beekeepers</p>
                    </div>
                  </div>

                  {/* Objective 3 */}
                  <div className="flex items-center gap-5 bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-full shadow-lg flex items-center justify-center">
                        <div className="text-white text-3xl font-bold">03</div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#52BC88] rounded-full shadow-md flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-[#035938] mb-1">Mobile Clinic Vehicles</h5>
                      <p className="text-sm text-gray-600">Equipped with specialized laboratories and full medical equipment</p>
                    </div>
                  </div>

                  {/* Objective 4 */}
                  <div className="flex items-center gap-5 bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-full shadow-lg flex items-center justify-center">
                        <div className="text-white text-3xl font-bold">04</div>
                      </div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#F1BC28] rounded-full shadow-md flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-[#035938] mb-1">Field Inspection & Treatment</h5>
                      <p className="text-sm text-gray-600">Rapid treatment services at beekeepers' locations across the Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Major Implemented Activities Section - Beekeeping Only */}
          {sectorId === 'beekeeping' && (
            <div className="mb-16">
              <div className="max-w-7xl mx-auto">
                {/* Main Section Header */}
                <div className="text-center mb-16">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
                    Major Implemented Activities
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
                </div>

                {/* First: Studies and Statistics */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-8">
                  {/* Subsection Title */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-[#035938]">
                      Studies and Statistics
                    </h4>
                  </div>

                  {/* Survey Study Introduction */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md mb-8 border-l-4 border-[#F1BC28]">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      A survey study covering more than <span className="font-bold text-[#035938]">450 beekeepers</span> was completed, producing key results including:
                    </p>
                  </div>

                  {/* Key Results Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-transparent overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md relative z-10">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#035938] to-[#52BC88] bg-clip-text text-transparent mb-2 relative z-10">15,000</div>
                      <div className="text-sm font-bold text-[#035938] mb-2 relative z-10">Registered Beekeepers</div>
                      <div className="text-xs text-gray-600 leading-relaxed relative z-10">Including about 4,000 women beekeepers</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-transparent overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md relative z-10">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#52BC88] to-[#F1BC28] bg-clip-text text-transparent mb-2 relative z-10">1.8M</div>
                      <div className="text-sm font-bold text-[#035938] mb-2 relative z-10">Bee Hives</div>
                      <div className="text-xs text-gray-600 leading-relaxed relative z-10">Total number of hives in the Kingdom</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-transparent overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] to-[#035938] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md relative z-10">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#F1BC28] to-[#035938] bg-clip-text text-transparent mb-2 relative z-10">1%</div>
                      <div className="text-sm font-bold text-[#035938] mb-2 relative z-10">Agricultural Income</div>
                      <div className="text-xs text-gray-600 leading-relaxed relative z-10">Honey production contribution</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-transparent overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md relative z-10">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-[#035938] to-[#52BC88] bg-clip-text text-transparent mb-2 relative z-10">17,000</div>
                      <div className="text-sm font-bold text-[#035938] mb-2 relative z-10">Jobs Provided</div>
                      <div className="text-xs text-gray-600 leading-relaxed relative z-10">Employment opportunities in the sector</div>
                    </div>
                  </div>

                  {/* National Database Section */}
                  <div className="bg-gradient-to-r from-[#035938] to-[#52BC88] rounded-2xl p-8 text-white shadow-xl mb-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-xl font-bold mb-2">National Database for Beekeeping Sector</h5>
                        <p className="text-white/90 leading-relaxed">
                          These studies supported the creation of a national database for the beekeeping sector, collecting comprehensive data from:
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-16">
                      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                        <div className="text-3xl font-bold mb-1">80</div>
                        <div className="text-sm text-white/80">Apiaries Covered</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                        <div className="text-3xl font-bold mb-1">800</div>
                        <div className="text-sm text-white/80">Colonies Recorded</div>
                      </div>
                    </div>
                  </div>

                  {/* Honey Production Comparison */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#F1BC28]">
                    <div className="text-center mb-8">
                      <h5 className="text-2xl font-bold text-[#035938] mb-2">Average Honey Production Per Hive</h5>
                      <p className="text-gray-600">Comparing traditional vs modern hive efficiency</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-center group">
                        <div className="relative inline-block mb-4">
                          <div className="w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                            <div className="text-center">
                              <div className="text-4xl font-bold text-white">6.0</div>
                              <div className="text-sm text-white/80">kg</div>
                            </div>
                          </div>
                          <div className="absolute -top-2 -right-2 w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                        </div>
                        <h6 className="text-lg font-bold text-gray-700 mb-2">Traditional Hive</h6>
                        <p className="text-sm text-gray-600">Per season production</p>
                      </div>
                      <div className="text-center group">
                        <div className="relative inline-block mb-4">
                          <div className="w-32 h-32 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                            <div className="text-center">
                              <div className="text-4xl font-bold text-white">8.1</div>
                              <div className="text-sm text-white/80">kg</div>
                            </div>
                          </div>
                          <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#F1BC28] rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                        </div>
                        <h6 className="text-lg font-bold text-[#035938] mb-2">Modern Hive</h6>
                        <p className="text-sm text-gray-600">Per season production</p>
                      </div>
                    </div>
                    <div className="mt-8 bg-gradient-to-r from-[#F1BC28]/10 to-[#52BC88]/10 border-2 border-[#52BC88] rounded-2xl p-6 text-center">
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <svg className="w-8 h-8 text-[#52BC88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h6 className="text-xl font-bold text-[#035938]">Key Finding</h6>
                      </div>
                      <p className="text-lg text-gray-700">
                        Modern hives produce nearly <span className="font-bold text-[#52BC88]">3 times more</span> than traditional ones
                      </p>
                    </div>
                  </div>

                  {/* Second: Productivity */}
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-[#035938]">Productivity</h4>
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md mb-8 border-l-4 border-[#52BC88]">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Productivity in the beekeeping sector improved significantly due to the introduction of <span className="font-bold text-[#52BC88]">modern technologies</span>:
                      </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-300 hover:shadow-2xl transition-all duration-300 group text-center">
                        <div className="relative inline-block mb-6">
                          <div className="w-28 h-28 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-white">2.2</div>
                              <div className="text-sm text-white/80">kg</div>
                            </div>
                          </div>
                        </div>
                        <h5 className="text-lg font-bold text-gray-700 mb-2">Traditional Hive</h5>
                        <p className="text-sm text-gray-600">Average production</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <svg className="w-16 h-16 text-[#52BC88] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <p className="text-sm font-bold text-[#52BC88]">+116% Increase</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-[#52BC88]/10 to-[#F1BC28]/10 rounded-2xl p-8 shadow-lg border-2 border-[#52BC88] hover:shadow-2xl transition-all duration-300 group text-center">
                        <div className="relative inline-block mb-6">
                          <div className="w-28 h-28 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-white">4.75</div>
                              <div className="text-sm text-white/80">kg</div>
                            </div>
                          </div>
                          <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#F1BC28] rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <h5 className="text-lg font-bold text-[#035938] mb-2">Modern Hive</h5>
                        <p className="text-sm text-gray-600">Average production</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#F1BC28] to-[#52BC88] rounded-2xl p-8 text-white shadow-xl">
                      <div className="flex items-center justify-between flex-wrap gap-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm text-white/80 mb-1">Total Annual Honey Production</div>
                            <div className="text-4xl font-bold">4,600 tons</div>
                          </div>
                        </div>
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#F1BC28]">
                      <p className="text-gray-700 leading-relaxed italic">
                        This improvement reflects the impact of <span className="font-bold text-[#035938]">modern practices</span> and <span className="font-bold text-[#52BC88]">technical supervision</span> in increasing efficiency and product quality.
                      </p>
                    </div>
                  </div>

                  {/* Third: Model Production Regions */}
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-[#035938]">Model Production Regions</h4>
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md mb-8 border-l-4 border-[#F1BC28]">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Model production regions were identified and developed for the beekeeping sector in several areas of the Kingdom, including:
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { name: "Jazan", gradient: "from-[#035938] to-[#52BC88]" },
                        { name: "Asir", gradient: "from-[#52BC88] to-[#F1BC28]" },
                        { name: "Al-Baha", gradient: "from-[#F1BC28] to-[#035938]" },
                        { name: "Makkah Al-Mukarramah", gradient: "from-[#035938] to-[#52BC88]" },
                        { name: "Madinah", gradient: "from-[#52BC88] to-[#F1BC28]" }
                      ].map((region, idx) => (
                        <div 
                          key={idx}
                          className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${region.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                          <div className={`w-14 h-14 bg-gradient-to-br ${region.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <h5 className="text-xl font-bold text-[#035938] mb-2 relative z-10 group-hover:text-[#52BC88] transition-colors duration-300">
                            {region.name}
                          </h5>
                          <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#F1BC28]/20 to-[#52BC88]/20 rounded-full relative z-10">
                            <span className="text-xs font-semibold text-[#035938]">Model Region</span>
                          </div>
                          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#52BC88]/20 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fourth: Training and Capacity Building */}
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-8 mt-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#035938] via-[#52BC88] to-[#F1BC28] rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">4</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-[#035938]">Training and Capacity Building</h4>
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md mb-8 border-l-4 border-[#035938]">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        The program worked to enhance beekeepers' efficiency and build their capacities through:
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-[#035938]/20 hover:border-[#035938]">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-4xl font-bold bg-gradient-to-r from-[#035938] to-[#52BC88] bg-clip-text text-transparent mb-2">10</div>
                            <h5 className="font-bold text-[#035938] mb-2">Supported Apiaries</h5>
                            <p className="text-sm text-gray-600">Applying modern beekeeping technologies</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-[#52BC88]/20 hover:border-[#52BC88]">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-4xl font-bold bg-gradient-to-r from-[#52BC88] to-[#F1BC28] bg-clip-text text-transparent mb-2">3</div>
                            <h5 className="font-bold text-[#035938] mb-2">Model Breeders</h5>
                            <p className="text-sm text-gray-600">Producing 1,000+ queens and packages</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-[#F1BC28]/20 hover:border-[#F1BC28]">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-4xl font-bold bg-gradient-to-r from-[#F1BC28] to-[#035938] bg-clip-text text-transparent mb-2">12</div>
                            <h5 className="font-bold text-[#035938] mb-2">Training Sessions</h5>
                            <p className="text-sm text-gray-600">Specialized workshops implemented</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-[#52BC88]/20 hover:border-[#52BC88]">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-4xl font-bold bg-gradient-to-r from-[#52BC88] to-[#035938] bg-clip-text text-transparent mb-2">300+</div>
                            <h5 className="font-bold text-[#035938] mb-2">Trained Beekeepers</h5>
                            <p className="text-sm text-gray-600">Improved practices and organic methods</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl p-6 text-white shadow-xl group hover:scale-105 transition-transform duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-bold mb-3 text-lg">Participation in Agricultural Forums</h5>
                            <p className="text-sm text-white/90 leading-relaxed mb-3">
                              The "Reef Saudi Arabia" Program reflects its active presence locally and internationally in promoting sustainability and food security through:
                            </p>
                            <ul className="text-sm text-white/90 space-y-1.5">
                              <li className="flex items-start gap-2">
                                <span className="text-[#F1BC28] mt-1">•</span>
                                <span>Participation in the Saudi Agricultural Exhibition</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-[#F1BC28] mt-1">•</span>
                                <span>Contribution to national food security initiatives</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-2xl p-6 text-white shadow-xl group hover:scale-105 transition-transform duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-bold mb-3 text-lg">International Partnerships</h5>
                            <p className="text-sm text-white/90 leading-relaxed mb-3">
                              Building strategic partnerships to advance the beekeeping sector:
                            </p>
                            <ul className="text-sm text-white/90 space-y-1.5">
                              <li className="flex items-start gap-2">
                                <span className="text-[#035938] mt-1">•</span>
                                <span>Cooperation with the private sector and strategic partners</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-[#035938] mt-1">•</span>
                                <span>Participation in the World Food Exhibition of the Food and Agriculture Organization (FAO)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-gradient-to-r from-[#035938] to-[#52BC88] text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                      <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Explore Interactive Map
                    </button>
                    <button className="bg-[#F1BC28] text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Explore Support Programs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}