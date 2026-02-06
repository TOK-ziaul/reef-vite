import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import {
  Users,
  DollarSign,
  GraduationCap,
  Briefcase,
  FileCheck,
  ShoppingBag,
  TrendingDown,
  Sprout,
  ArrowRight,
  Award,
  Trophy,
  // Globe,
  Shield,
  CheckCircle,
  Target,
  BookOpen,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import unAwardImage from "figma:asset/1fb458941d23468358ce71e67df193b427fb5c2f.png";
import princessAwardImage from "figma:asset/91f1780c2ca3ae643d0b9c74b419509491ec3c5d.png";
import innovationAwardImage from "figma:asset/0b71e9b068d89dbb10d5515c00468e3da9cec14f.png";
import digitalAwardImage from "figma:asset/f71166a6b8b07a294decc181a16d569eff356f0c.png";
import hailAwardImage from "figma:asset/0120f78caeebaf8cf1f829663e4c8969896779d3.png";
import guinnessLogo from "figma:asset/80816316b0447028fb91f9c9f83852001dc1271f.png";
import isoLogo from "figma:asset/42c1ad57380cd60e130b31f615a420aabcd645ab.png";
import iso9001Image from "figma:asset/81bf7e56f7cb8d55f9bbf074c919a8c2e6143e52.png";
import iso56002Image from "figma:asset/80b7549fadf93242624f320f52c43b55cdabe468.png";

gsap.registerPlugin(ScrollTrigger);

export function AboutAchievements() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const figuresRef = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const isoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [countersAnimated, setCountersAnimated] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    // Set initial visible state for all elements
    if (figuresRef.current) gsap.set(figuresRef.current, { opacity: 1, y: 0 });
    if (indicatorsRef.current)
      gsap.set(indicatorsRef.current, { opacity: 1, y: 0 });
    if (highlightsRef.current)
      gsap.set(highlightsRef.current, { opacity: 1, y: 0 });
    if (awardsRef.current) gsap.set(awardsRef.current, { opacity: 1, y: 0 });
    if (isoRef.current) gsap.set(isoRef.current, { opacity: 1, y: 0 });
    if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 1, y: 0 });

    // Animate sections on scroll
    const sections = [
      figuresRef,
      indicatorsRef,
      highlightsRef,
      awardsRef,
      isoRef,
      ctaRef,
    ];

    sections.forEach((ref) => {
      if (ref.current && sectionRef.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    // Animate counter cards
    if (figuresRef.current && !countersAnimated) {
      ScrollTrigger.create({
        trigger: figuresRef.current,
        start: "top 70%",
        onEnter: () => {
          setCountersAnimated(true);
          const counters = figuresRef.current?.querySelectorAll(".stat-card");
          if (counters) {
            gsap.fromTo(
              counters,
              { opacity: 0, scale: 0.8, y: 30 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: "back.out(1.4)",
              },
            );
          }
        },
      });
    }

    // Animate highlight cards with stagger
    if (highlightsRef.current) {
      const highlightBadges =
        highlightsRef.current.querySelectorAll(".highlight-badge");
      const highlightCards =
        highlightsRef.current.querySelectorAll(".highlight-card");

      if (highlightBadges.length > 0) {
        gsap.fromTo(
          highlightBadges,
          { opacity: 0, scale: 0, rotate: -180 },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (highlightCards.length > 0) {
        gsap.fromTo(
          highlightCards,
          { opacity: 0, x: -50, rotateY: -15 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }
  }, [countersAnimated]);

  const mainFigures = [
    {
      icon: Users,
      value: "87,831+",
      labelKey: "achievementsTotalBeneficiaries",
      gradient: "from-[#035938] to-[#52BC88]",
    },
    {
      icon: Users,
      value: "20,738",
      labelKey: "achievementsMaleBeneficiaries",
      gradient: "from-[#52BC88] to-[#F1BC28]",
    },
    {
      icon: Users,
      value: "58,093",
      labelKey: "achievementsFemaleBeneficiaries",
      gradient: "from-[#F1BC28] to-[#035938]",
    },
    {
      icon: Users,
      value: "49,500+",
      labelKey: "achievementsFamilies",
      gradient: "from-[#035938] to-[#52BC88]",
    },
    {
      icon: DollarSign,
      value: "2.514B",
      labelKey: "achievementsFinancialSupport",
      gradient: "from-[#52BC88] to-[#F1BC28]",
    },
    {
      icon: GraduationCap,
      value: "129",
      labelKey: "achievementsTrainingCourses",
      gradient: "from-[#F1BC28] to-[#035938]",
    },
    {
      icon: GraduationCap,
      value: "3,200+",
      labelKey: "achievementsTrainingBeneficiaries",
      gradient: "from-[#035938] to-[#52BC88]",
    },
    {
      icon: Briefcase,
      value: "105+",
      labelKey: "achievementsProjects",
      gradient: "from-[#52BC88] to-[#F1BC28]",
    },
    {
      icon: DollarSign,
      value: "1.350M",
      labelKey: "achievementsProjectsValue",
      gradient: "from-[#F1BC28] to-[#035938]",
    },
    {
      icon: FileCheck,
      value: "95,000+",
      labelKey: "achievementsFreelanceCerts",
      gradient: "from-[#035938] to-[#52BC88]",
    },
    {
      icon: ShoppingBag,
      value: "64",
      labelKey: "achievementsRuralProducts",
      gradient: "from-[#52BC88] to-[#F1BC28]",
    },
  ];

  const economicIndicators = [
    {
      icon: TrendingDown,
      value: "8.89%",
      labelKey: "achievementsUnemploymentRate",
      gradient: "from-[#035938] to-[#52BC88]",
    },
    {
      icon: Briefcase,
      value: "78,831",
      labelKey: "achievementsJobOpportunities",
      gradient: "from-[#52BC88] to-[#F1BC28]",
    },
    {
      icon: Target,
      value: "1.21%",
      labelKey: "achievementsPopulationStability",
      gradient: "from-[#F1BC28] to-[#035938]",
    },
    {
      icon: Sprout,
      value: "15.5M+",
      labelKey: "achievementsSeedlings",
      gradient: "from-[#035938] to-[#52BC88]",
    },
    {
      icon: DollarSign,
      value: "13,726",
      labelKey: "achievementsAverageIncome",
      gradient: "from-[#52BC88] to-[#F1BC28]",
    },
  ];

  const keyHighlights = [
    {
      key: "achievementsHighlight1",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1625236466493-72842ceec47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGZhcm1lcnMlMjBjb21tdW5pdHklMjBzYXVkaSUyMGFyYWJpYXxlbnwxfHx8fDE3Njk2ODg1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#52BC88]/90 via-[#52BC88]/70 to-[#035938]/90",
      iconBg: "from-[#52BC88] to-[#035938]",
    },
    {
      key: "achievementsHighlight2",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1708417134995-7d28e38c2042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB0cmFpbmluZyUyMHdvcmtzaG9wJTIwZmFybWVyc3xlbnwxfHx8fDE3Njk2ODg1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#F1BC28]/90 via-[#F1BC28]/70 to-[#035938]/90",
      iconBg: "from-[#F1BC28] to-[#035938]",
    },
    {
      key: "achievementsHighlight3",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1549248581-cf105cd081f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHByb2R1Y2UlMjBmYXJtZXJzJTIwbWFya2V0JTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3Njk2ODg1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#035938]/90 via-[#52BC88]/70 to-[#035938]/90",
      iconBg: "from-[#035938] to-[#52BC88]",
    },
    {
      key: "achievementsHighlight4",
      icon: Award,
      image:
        "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhcm1pbmclMjB0ZWNobm9sb2d5JTIwSU9UJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzY5Njg4NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#F1BC28]/90 via-[#035938]/70 to-[#F1BC28]/90",
      iconBg: "from-[#F1BC28] to-[#035938]",
    },
    {
      key: "achievementsHighlight5",
      icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1586616780827-13166a8d449b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZhcm1pbmclMjBiZWVrZWVwaW5nJTIwaG9uZXklMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2OTY4ODU2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#035938]/90 via-[#F1BC28]/70 to-[#035938]/90",
      iconBg: "from-[#035938] to-[#F1BC28]",
    },
    {
      key: "achievementsHighlight6",
      icon: Target,
      image:
        "https://images.unsplash.com/photo-1744726010540-bf318d4a691f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBkZXZlbG9wbWVudCUyMGluaXRpYXRpdmUlMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3Njk2ODg1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#52BC88]/90 via-[#035938]/70 to-[#52BC88]/90",
      iconBg: "from-[#52BC88] to-[#035938]",
    },
    {
      key: "achievementsHighlight7",
      icon: CheckCircle,
      image:
        "https://images.unsplash.com/photo-1663530286715-47697d344cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmb3J1bSUyMGV4aGliaXRpb24lMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2OTY4ODU1OXww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-[#F1BC28]/90 via-[#52BC88]/70 to-[#035938]/90",
      iconBg: "from-[#F1BC28] to-[#52BC88]",
    },
  ];

  const awards = [
    {
      titleKey: "achievementsAward1Title",
      descKey: "achievementsAward1Desc",
      image: unAwardImage,
      altEn: "United Nations Award",
      altAr: "جائزة الأمم المتحدة",
    },
    {
      titleKey: "achievementsAward2Title",
      descKey: "achievementsAward2Desc",
      image: princessAwardImage,
      altEn: "Princess Royal Training Awards",
      altAr: "جائزة الأميرة الملكية للتدريب",
    },
    {
      titleKey: "achievementsAward3Title",
      descKey: "achievementsAward3Desc",
      image: innovationAwardImage,
      altEn: "Innovation Award",
      altAr: "جائزة الابتكار",
    },
    {
      titleKey: "achievementsAward4Title",
      descKey: "achievementsAward4Desc",
      image: digitalAwardImage,
      altEn: "Digital Award",
      altAr: "جائزة رقمية",
    },
    {
      titleKey: "achievementsAward6Title",
      descKey: "achievementsAward6Desc",
      image: hailAwardImage,
      altEn: "Prince of Hail Award",
      altAr: "جائزة أمير حائل",
    },
  ];

  // const isoCertifications = [
  //   {
  //     code: "ISO 9001",
  //     titleKey: "achievementsISO1Title",
  //     descKey: "achievementsISO1Desc",
  //   },
  //   {
  //     code: "ISO 22301",
  //     titleKey: "achievementsISO2Title",
  //     descKey: "achievementsISO2Desc",
  //   },
  //   {
  //     code: "ISO 56002",
  //     titleKey: "achievementsISO3Title",
  //     descKey: "achievementsISO3Desc",
  //   },
  // ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-br from-white via-[#F9F7EF] to-white overflow-hidden"
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      {/* Animated Background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#035938]/10 to-[#52BC88]/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-br from-[#F1BC28]/10 to-[#52BC88]/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === FIRST: FIGURES === */}
        <div ref={figuresRef}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[#035938] text-center fw-heading"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {t("achievementsFiguresTitle")}
          </h2>
          <p
            className="text-base md:text-lg text-[#035938]/70 text-center max-w-4xl mx-auto mb-12"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {t("achievementsFiguresSubtitle")}
          </p>

          {/* Main Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {mainFigures.map((stat, index) => (
              <div
                key={index}
                className="stat-card group relative backdrop-blur-xl bg-white/90 rounded-2xl p-6 border border-[#035938]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>

                  <div
                    className="text-3xl md:text-4xl fw-heading text-[#035938] mb-2"
                    style={{
                      fontFamily:
                        language === "ar"
                          ? "'Loew Next Arabic', sans-serif"
                          : "inherit",
                    }}
                  >
                    {stat.value}
                  </div>

                  <div
                    className="text-sm md:text-base text-[#035938]/70"
                    style={{
                      fontFamily:
                        language === "ar"
                          ? "'Loew Next Arabic', sans-serif"
                          : "inherit",
                    }}
                  >
                    {t(stat.labelKey)}
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* === ECONOMIC INDICATORS === */}
        <div ref={indicatorsRef} className="mb-20">
          <h3
            className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[#035938] text-center fw-heading"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {t("achievementsIndicatorsTitle")}
          </h3>
          <p
            className="text-base md:text-lg text-[#035938]/70 text-center max-w-4xl mx-auto mb-10"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {t("achievementsIndicatorsSubtitle")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {economicIndicators.map((indicator, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-white/90 rounded-2xl p-6 border border-[#035938]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${indicator.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${indicator.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <indicator.icon className="w-7 h-7 text-white" />
                  </div>

                  <div>
                    <div
                      className="text-2xl md:text-3xl fw-heading text-[#035938] mb-1"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {indicator.value}
                    </div>
                    <div
                      className="text-sm text-[#035938]/70"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t(indicator.labelKey)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === THIRD: KEY ACHIEVEMENTS HIGHLIGHTS (Image Cards with Hover Overlay) === */}
        <div ref={highlightsRef} className="relative my-20">
          <h3
            className="text-2xl md:text-3xl lg:text-4xl mb-4 text-[#035938] text-center fw-heading"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {t("achievementsHighlightsTitle")}
          </h3>

          <p
            className="text-base md:text-lg text-[#035938]/70 text-center max-w-3xl mx-auto mb-12"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {language === "ar"
              ? "نجاحات نوعية تعك التزامنا بتحقيق التنمية المستدامة وتمكين المجتمعات الريفية"
              : "Qualitative achievements reflecting our commitment to sustainable development and empowering rural communities"}
          </p>

          {/* Image-Based Grid with Hover Overlay */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyHighlights.map((highlight, index) => {
              const Icon = highlight.icon;

              // Extract title (before colon) and description
              const fullText = t(highlight.key);
              const [title, ...descParts] = fullText.split(":");
              const description = descParts.join(":").trim();
              const cardId = `highlight-${index}`;

              return (
                <div
                  key={index}
                  className={`highlight-card group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
                    index === 6 ? "md:col-span-2 lg:col-span-3" : ""
                  }`}
                  style={{ perspective: "1000px", height: "220px" }}
                  onMouseEnter={() => setActiveCard(cardId)}
                  onMouseLeave={() =>
                    setActiveCard((prev) => (prev === cardId ? null : prev))
                  }
                  onClick={() =>
                    setActiveCard((prev) => (prev === cardId ? null : cardId))
                  }
                  tabIndex={0}
                  onFocus={() => setActiveCard(cardId)}
                  onBlur={() =>
                    setActiveCard((prev) => (prev === cardId ? null : prev))
                  }
                >
                  {/* Image Background */}
                  <div className="relative w-full h-full">
                    <ImageWithFallback
                      src={highlight.image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}
                    />

                    {/* Icon Badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${highlight.iconBg} rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                      >
                        <Icon className="w-5 h-5" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute top-3 right-3 z-20 highlight-badge">
                      <div className="w-8 h-8 text-sm rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white fw-heading shadow-md">
                        {index + 1}
                      </div>
                    </div>

                    {/* Title (Always Visible) */}
                    <div
                      className="absolute bottom-3 left-3 right-3 z-20"
                      dir={language === "ar" ? "rtl" : "ltr"}
                    >
                      <h4
                        className="text-white drop-shadow-lg text-base md:text-lg fw-heading line-clamp-2"
                        style={{
                          fontFamily:
                            language === "ar"
                              ? "'Loew Next Arabic', sans-serif"
                              : "inherit",
                        }}
                      >
                        {title}
                      </h4>
                    </div>

                    {/* Hover Overlay with Full Text */}
                    {activeCard === cardId && (
                      <div
                        className="absolute inset-0 backdrop-blur-sm bg-black/60 p-4 flex flex-col justify-center z-30 rounded-2xl animate-fadeIn overflow-auto"
                        dir={language === "ar" ? "rtl" : "ltr"}
                        style={{
                          animation: "fadeIn 300ms ease-in-out",
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className={`w-10 h-10 bg-gradient-to-br ${highlight.iconBg} rounded-lg flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                          >
                            <Icon className="w-5 h-5" strokeWidth={2.5} />
                          </div>
                          <h5
                            className="text-base md:text-lg fw-heading text-white"
                            style={{
                              fontFamily:
                                language === "ar"
                                  ? "'Loew Next Arabic', sans-serif"
                                  : "inherit",
                            }}
                          >
                            {title}
                          </h5>
                        </div>

                        <p
                          className="text-xs md:text-sm text-white/90 leading-relaxed"
                          style={{
                            fontFamily:
                              language === "ar"
                                ? "'Loew Next Arabic', sans-serif"
                                : "inherit",
                          }}
                        >
                          {description}
                        </p>
                      </div>
                    )}

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* === SECOND: AWARDS === */}
        <div ref={awardsRef} className="mb-20">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[#035938] text-center fw-heading"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {t("achievementsAwardsTitle")}
          </h2>
          <p
            className="text-base md:text-lg text-[#035938]/70 text-center max-w-4xl mx-auto mb-12"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {t("achievementsAwardsSubtitle")}
          </p>

          {/* Major Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {awards.map((award, index) => {
              const cardId = `award-${index}`;

              return (
                <div
                  key={index}
                  className="award-card group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{ perspective: "1000px", height: "320px" }}
                  onMouseEnter={() => setActiveCard(cardId)}
                  onMouseLeave={() =>
                    setActiveCard((prev) => (prev === cardId ? null : prev))
                  }
                  onClick={() =>
                    setActiveCard((prev) => (prev === cardId ? null : cardId))
                  }
                  tabIndex={0}
                  onFocus={() => setActiveCard(cardId)}
                  onBlur={() =>
                    setActiveCard((prev) => (prev === cardId ? null : prev))
                  }
                >
                  {/* Award Image */}
                  <div className="relative w-full h-full bg-white">
                    <img
                      src={award.image}
                      alt={language === "ar" ? award.altAr : award.altEn}
                      className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-[#035938]/95 to-[#024a2e]/95 opacity-0 ${
                        activeCard === cardId
                          ? "opacity-100"
                          : "group-hover:opacity-100"
                      } transition-opacity duration-500`}
                    />

                    {/* Hover Text Overlay */}
                    {activeCard === cardId && (
                      <div
                        className="absolute inset-0 p-6 flex flex-col justify-center z-30 animate-fadeIn"
                        dir={language === "ar" ? "rtl" : "ltr"}
                        style={{
                          animation: "fadeIn 300ms ease-in-out",
                        }}
                      >
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F1BC28] to-[#52BC88] flex items-center justify-center shadow-lg">
                            <Trophy className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        <h4
                          className="text-xl md:text-2xl fw-heading text-white mb-3 text-center"
                          style={{
                            fontFamily:
                              language === "ar"
                                ? "'Loew Next Arabic', sans-serif"
                                : "inherit",
                          }}
                        >
                          {t(award.titleKey)}
                        </h4>

                        <p
                          className="text-sm md:text-base text-white/90 text-center leading-relaxed"
                          style={{
                            fontFamily:
                              language === "ar"
                                ? "'Loew Next Arabic', sans-serif"
                                : "inherit",
                          }}
                        >
                          {t(award.descKey)}
                        </p>
                      </div>
                    )}

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10 pointer-events-none" />
                  </div>
                </div>
              );
            })}

            {/* Guinness World Records Card */}
            <div
              className="award-card group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ perspective: "1000px", height: "320px" }}
              onMouseEnter={() => setActiveCard("guinness")}
              onMouseLeave={() =>
                setActiveCard((prev) => (prev === "guinness" ? null : prev))
              }
              onClick={() =>
                setActiveCard((prev) =>
                  prev === "guinness" ? null : "guinness",
                )
              }
              tabIndex={0}
              onFocus={() => setActiveCard("guinness")}
              onBlur={() =>
                setActiveCard((prev) => (prev === "guinness" ? null : prev))
              }
            >
              {/* Guinness Logo Image */}
              <div className="relative w-full h-full bg-white">
                <img
                  src={guinnessLogo}
                  alt={
                    language === "ar"
                      ? "موسوعة غينيس للأرقام القياسية"
                      : "Guinness World Records"
                  }
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#035938]/95 to-[#024a2e]/95 opacity-0 ${
                    activeCard === "guinness"
                      ? "opacity-100"
                      : "group-hover:opacity-100"
                  } transition-opacity duration-500`}
                />

                {/* Hover Text Overlay */}
                {activeCard === "guinness" && (
                  <div
                    className="absolute inset-0 p-6 flex flex-col justify-center z-30 animate-fadeIn overflow-auto"
                    dir={language === "ar" ? "rtl" : "ltr"}
                    style={{
                      animation: "fadeIn 300ms ease-in-out",
                    }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F1BC28] to-[#52BC88] flex items-center justify-center shadow-lg">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h4
                      className="text-xl md:text-2xl fw-heading text-white mb-3 text-center"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t("achievementsGuinnessTitle")}
                    </h4>

                    <p
                      className="text-sm md:text-base text-white/90 text-center leading-relaxed"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t("achievementsGuinness1")}
                    </p>
                  </div>
                )}

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* === THIRD: ISO CERTIFICATIONS === */}
        <div ref={isoRef} className="mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[#035938] text-center fw-heading"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {t("achievementsISOTitle")}
          </h2>
          <p
            className="text-base md:text-lg text-[#035938]/70 text-center max-w-4xl mx-auto mb-12"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {t("achievementsISOSubtitle")}
          </p>

          {/* ISO Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ISO 9001 Card */}
            <div
              className="award-card group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ perspective: "1000px", height: "320px" }}
              onMouseEnter={() => setActiveCard("iso-9001")}
              onMouseLeave={() =>
                setActiveCard((prev) => (prev === "iso-9001" ? null : prev))
              }
              onClick={() =>
                setActiveCard((prev) =>
                  prev === "iso-9001" ? null : "iso-9001",
                )
              }
              tabIndex={0}
              onFocus={() => setActiveCard("iso-9001")}
              onBlur={() =>
                setActiveCard((prev) => (prev === "iso-9001" ? null : prev))
              }
            >
              {/* ISO 9001 Image */}
              <div className="relative w-full h-full bg-white">
                <img
                  src={iso9001Image}
                  alt={
                    language === "ar"
                      ? "شهادة ISO 9001"
                      : "ISO 9001 Certification"
                  }
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#035938]/95 to-[#024a2e]/95 opacity-0 ${
                    activeCard === "iso-9001"
                      ? "opacity-100"
                      : "group-hover:opacity-100"
                  } transition-opacity duration-500`}
                />

                {/* Hover Text Overlay */}
                {activeCard === "iso-9001" && (
                  <div
                    className="absolute inset-0 p-6 flex flex-col justify-center z-30 animate-fadeIn overflow-auto"
                    dir={language === "ar" ? "rtl" : "ltr"}
                    style={{
                      animation: "fadeIn 300ms ease-in-out",
                    }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F1BC28] to-[#52BC88] flex items-center justify-center shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h4
                      className="text-xl md:text-2xl fw-heading text-white mb-3 text-center"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t("achievementsISO1Title")}
                    </h4>

                    <p
                      className="text-sm md:text-base text-white/90 text-center leading-relaxed"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t("achievementsISO1Desc")}
                    </p>
                  </div>
                )}

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10 pointer-events-none" />
              </div>
            </div>

            {/* ISO 22301 Card */}
            <div
              className="award-card group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ perspective: "1000px", height: "320px" }}
              onMouseEnter={() => setActiveCard("iso-22301")}
              onMouseLeave={() =>
                setActiveCard((prev) => (prev === "iso-22301" ? null : prev))
              }
              onClick={() =>
                setActiveCard((prev) =>
                  prev === "iso-22301" ? null : "iso-22301",
                )
              }
              tabIndex={0}
              onFocus={() => setActiveCard("iso-22301")}
              onBlur={() =>
                setActiveCard((prev) => (prev === "iso-22301" ? null : prev))
              }
            >
              {/* ISO Logo Image */}
              <div className="relative w-full h-full bg-white">
                <img
                  src={isoLogo}
                  alt={
                    language === "ar"
                      ? "شهادة ISO 22301"
                      : "ISO 22301 Certification"
                  }
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#035938]/95 to-[#024a2e]/95 opacity-0 ${
                    activeCard === "iso-22301"
                      ? "opacity-100"
                      : "group-hover:opacity-100"
                  } transition-opacity duration-500`}
                />

                {/* Hover Text Overlay */}
                {activeCard === "iso-22301" && (
                  <div
                    className="absolute inset-0 p-6 flex flex-col justify-center z-30 animate-fadeIn overflow-auto"
                    dir={language === "ar" ? "rtl" : "ltr"}
                    style={{
                      animation: "fadeIn 300ms ease-in-out",
                    }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F1BC28] to-[#52BC88] flex items-center justify-center shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h4
                      className="text-xl md:text-2xl fw-heading text-white mb-3 text-center"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t("achievementsISO2Title")}
                    </h4>

                    <p
                      className="text-sm md:text-base text-white/90 text-center leading-relaxed"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t("achievementsISO2Desc")}
                    </p>
                  </div>
                )}

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10 pointer-events-none" />
              </div>
            </div>

            {/* ISO 56002 Card */}
            <div
              className="award-card group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ perspective: "1000px", height: "320px" }}
              onMouseEnter={() => setActiveCard("iso-56002")}
              onMouseLeave={() =>
                setActiveCard((prev) => (prev === "iso-56002" ? null : prev))
              }
              onClick={() =>
                setActiveCard((prev) =>
                  prev === "iso-56002" ? null : "iso-56002",
                )
              }
              tabIndex={0}
              onFocus={() => setActiveCard("iso-56002")}
              onBlur={() =>
                setActiveCard((prev) => (prev === "iso-56002" ? null : prev))
              }
            >
              {/* ISO Logo Image */}
              <div className="relative w-full h-full bg-white">
                <img
                  src={iso56002Image}
                  alt={
                    language === "ar"
                      ? "شهادة ISO 56002"
                      : "ISO 56002 Certification"
                  }
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#035938]/95 to-[#024a2e]/95 opacity-0 ${
                    activeCard === "iso-56002"
                      ? "opacity-100"
                      : "group-hover:opacity-100"
                  } transition-opacity duration-500`}
                />

                {/* Hover Text Overlay */}
                {activeCard === "iso-56002" && (
                  <div
                    className="absolute inset-0 p-6 flex flex-col justify-center z-30 animate-fadeIn overflow-auto"
                    dir={language === "ar" ? "rtl" : "ltr"}
                    style={{
                      animation: "fadeIn 300ms ease-in-out",
                    }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F1BC28] to-[#52BC88] flex items-center justify-center shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h4
                      className="text-xl md:text-2xl fw-heading text-white mb-3 text-center"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t("achievementsISO3Title")}
                    </h4>

                    <p
                      className="text-sm md:text-base text-white/90 text-center leading-relaxed"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t("achievementsISO3Desc")}
                    </p>
                  </div>
                )}

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* === CTA BUTTONS === */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-full text-lg fw-heading overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <span
              className="relative z-10 flex items-center gap-2"
              style={{
                fontFamily:
                  language === "ar"
                    ? "'Loew Next Arabic', sans-serif"
                    : "inherit",
              }}
            >
              {t("achievementsCTA1")}
              <ArrowRight
                className={`w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 ${
                  language === "ar" ? "rotate-180" : ""
                }`}
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#52BC88] to-[#F1BC28] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button className="group relative px-8 py-4 bg-transparent border-2 border-[#035938] text-[#035938] rounded-full text-lg fw-heading overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-[#035938] hover:text-white">
            <span
              className="relative z-10 flex items-center gap-2"
              style={{
                fontFamily:
                  language === "ar"
                    ? "'Loew Next Arabic', sans-serif"
                    : "inherit",
              }}
            >
              {t("achievementsCTA2")}
              <ArrowRight
                className={`w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 ${
                  language === "ar" ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-dash {
          stroke-dashoffset: 100;
          animation: dash 2s linear forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 300ms ease-in-out;
        }
      `}</style>
    </section>
  );
}
