import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { Dna, Stethoscope, Wheat, Milk, TrendingUp, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

gsap.registerPlugin(ScrollTrigger);

export function LivestockKeyAreas() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.15,
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const keyAreas = [
    {
      icon: Dna,
      titleKey: 'livestockAction1Title',
      descKey: 'livestockAction1Desc',
      image: 'https://images.unsplash.com/photo-1759310347541-2cd51fe4295c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlc3RvY2slMjBicmVlZGluZyUyMGNhdHRsZSUyMGZhcm18ZW58MXx8fHwxNzcwMTE2NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#035938] to-[#024a2e]',
    },
    {
      icon: Stethoscope,
      titleKey: 'livestockAction2Title',
      descKey: 'livestockAction2Desc',
      image: 'https://images.unsplash.com/photo-1655332391443-d6f899d91439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlc3RvY2slMjB2ZXRlcmluYXJ5JTIwY2FyZSUyMGhlYWx0aHxlbnwxfHx8fDE3NzAxMTY2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#52BC88] to-[#3a9e6f]',
    },
    {
      icon: Wheat,
      titleKey: 'livestockAction3Title',
      descKey: 'livestockAction3Desc',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1080&q=80',
      gradient: 'from-[#F1BC28] to-[#d4a520]',
    },
    {
      icon: Milk,
      titleKey: 'livestockAction4Title',
      descKey: 'livestockAction4Desc',
      image: 'https://images.unsplash.com/photo-1768850418251-17480117ac9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMG1pbGslMjBwcm9kdWN0aW9uJTIwcXVhbGl0eXxlbnwxfHx8fDE3NzAxMTY2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#035938] to-[#024a2e]',
    },
    {
      icon: TrendingUp,
      titleKey: 'livestockAction5Title',
      descKey: 'livestockAction5Desc',
      image: 'https://images.unsplash.com/photo-1639165922222-e433940774a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGZhcm1lciUyMGxpdmVzdG9jayUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NzAxMTY2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-[#52BC88] to-[#3a9e6f]',
    },
    {
      icon: GraduationCap,
      titleKey: 'livestockAction6Title',
      descKey: 'livestockAction6Desc',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1080&q=80',
      gradient: 'from-[#F1BC28] to-[#d4a520]',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-white to-[#F9F7EF]/30 overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#52BC88]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#F1BC28]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#035938] mb-4"
            style={{
              fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : 'inherit',
            }}
          >
            {t('keyAreasOfAction')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
        </div>

        {/* Key Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={area.image}
                    alt={t(area.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${area.gradient} opacity-60`}></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#035938] mb-4"
                    style={{
                      fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : 'inherit',
                    }}
                  >
                    {t(area.titleKey)}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{
                      fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : 'inherit',
                    }}
                  >
                    {t(area.descKey)}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#52BC88] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
