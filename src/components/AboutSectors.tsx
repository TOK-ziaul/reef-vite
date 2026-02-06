import { useEffect, useRef } from "react";
import { Leaf, Coffee, Flower2, Apple, Sprout, Fish, Scissors, Milk, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSectors() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const sectors = [
    {
      icon: <Leaf className="w-8 h-8" />,
      titleKey: "beekeeping",
      descKey: "beekeepingDesc",
      color: "#F1BC28",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      titleKey: "coffee",
      descKey: "coffeeDesc",
      color: "#035938",
    },
    {
      icon: <Flower2 className="w-8 h-8" />,
      titleKey: "flowers",
      descKey: "flowersDesc",
      color: "#52BC88",
    },
    {
      icon: <Apple className="w-8 h-8" />,
      titleKey: "fruits",
      descKey: "fruitsDesc",
      color: "#F1BC28",
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      titleKey: "rainFedCrops",
      descKey: "rainFedCropsDesc",
      color: "#035938",
    },
    {
      icon: <Fish className="w-8 h-8" />,
      titleKey: "fishing",
      descKey: "fishingDesc",
      color: "#52BC88",
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      titleKey: "handicrafts",
      descKey: "handicraftsDesc",
      color: "#F1BC28",
    },
    {
      icon: <Milk className="w-8 h-8" />,
      titleKey: "livestock",
      descKey: "livestockDesc",
      color: "#035938",
    },
  ];

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
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1,
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="sectors"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white via-[#F9F7EF]/30 to-white overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#52BC88]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F1BC28]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-[#035938]/10 rounded-full mb-4">
            <span className="text-[#035938] font-semibold">
              {t("ourRuralSectors")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-6">
            {t("supportedAgriculturalSectors")}
          </h2>
          <p className="text-lg text-[#052F2A]/70 max-w-4xl mx-auto leading-relaxed">
            {t("sectorsIntro")}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sectors.map((sector, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Overlay on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: sector.color }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${sector.color}20` }}
                >
                  <div style={{ color: sector.color }}>{sector.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#035938] mb-3 group-hover:text-[#035938] transition-colors">
                  {t(sector.titleKey)}
                </h3>
                <p className="text-sm text-[#052F2A]/70 mb-4 leading-relaxed line-clamp-4">
                  {t(sector.descKey)}
                </p>

                {/* CTA Button */}
                <button
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: sector.color }}
                >
                  {t("learnAboutSector")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <a
            href="#interactive-map"
            className="flex items-center gap-2 px-8 py-4 bg-[#035938] text-white rounded-xl hover:bg-[#52BC88] transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {t("exploreInteractiveMap")}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#support-programs"
            className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#035938] text-[#035938] rounded-xl hover:bg-[#035938] hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {t("exploreSupportPrograms")}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
