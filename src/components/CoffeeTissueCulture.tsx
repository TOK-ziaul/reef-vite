import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";
import { useState, useEffect, useRef } from "react";
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
  Heart,
} from "lucide-react";

export function CoffeeTissueCulture() {
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stages = [
    { icon: Dna, number: "6", titleKey: "coffeeTissueStage1", color: "#035938" },
    {
      icon: Beaker,
      number: "17,000",
      titleKey: "coffeeTissueStage2",
      color: "#52BC88",
    },
    {
      icon: Sprout,
      number: "4,000",
      titleKey: "coffeeTissueStage3",
      color: "#F1BC28",
    },
    {
      icon: Droplets,
      number: "2,800",
      titleKey: "coffeeTissueStage4",
      color: "#52BC88",
    },
    {
      icon: Wind,
      number: "1,200",
      titleKey: "coffeeTissueStage5",
      color: "#035938",
    },
    {
      icon: Sparkles,
      number: "400",
      titleKey: "coffeeTissueStage6",
      color: "#F1BC28",
    },
  ];

  return (
    <div ref={sectionRef} className="py-12 bg-[#F9F7EF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#52BC88] rounded-lg">
            <Dna className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#035938]">
            {t("coffeeTissueCultureTitle")}
          </h2>
        </div>
        <p className="text-lg text-[#035938]/80 leading-relaxed mb-8 max-w-4xl">
          {t("coffeeTissueCultureIntro")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {stages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div
                    key={index}
                    className="group flex items-start gap-3 py-3 px-4 rounded-lg hover:bg-white/60 transition-all duration-300"
                    style={{
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                      opacity: isVisible ? 1 : 0,
                      transition: `all 0.4s ease ${index * 0.05}s`,
                    }}
                  >
                    <div
                      className="flex-shrink-0 p-2 rounded-lg"
                      style={{ backgroundColor: `${stage.color}15` }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: stage.color }}
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-2xl font-bold text-[#035938] leading-none mb-1.5">
                        {stage.number}
                      </div>
                      <p className="text-sm text-[#035938]/70 leading-snug">
                        {t(stage.titleKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div
              className="relative bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-2xl p-6 overflow-hidden"
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 0.5s ease 0.3s",
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Beaker className="w-5 h-5 text-white" />
                  <h3 className="font-bold text-white">Bioreactor</h3>
                </div>
                <p className="text-sm text-white/90 mb-4">
                  {t("coffeeBioreactorDesc")}
                </p>
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-[#035938]/40 backdrop-blur-sm rounded-xl">
                  <TrendingUp
                    className="w-6 h-6 text-[#F1BC28]"
                    strokeWidth={2.5}
                  />
                  <div>
                    <div className="text-3xl font-bold text-white leading-none">
                      +30%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative bg-[#035938] rounded-2xl p-6 overflow-hidden"
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 0.5s ease 0.4s",
              }}
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F1BC28]/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-[#F1BC28]" />
                  <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                    {t("coffeeTarget")}
                  </span>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  {t("coffeeTissueTarget")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.5s ease 0.5s",
          }}
        >
          <button
            type="button"
            onClick={() => navigateTo("home", undefined, "interactive-map")}
            className="group flex-1 flex items-center justify-between gap-3 px-6 py-4 bg-[#035938] text-white rounded-xl hover:bg-[#0d7a50] transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#F1BC28]" strokeWidth={2.5} />
              <span className="font-semibold">{t("exploreInteractiveMap")}</span>
            </div>
            <ArrowRight
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              strokeWidth={2.5}
            />
          </button>

          <button
            type="button"
            onClick={() => navigateTo("supportApplication")}
            className="group flex-1 flex items-center justify-between gap-3 px-6 py-4 bg-[#52BC88] text-white rounded-xl hover:bg-[#3da872] transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-white" strokeWidth={2.5} />
              <span className="font-semibold">{t("exploreSupportPrograms")}</span>
            </div>
            <ArrowRight
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              strokeWidth={2.5}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
