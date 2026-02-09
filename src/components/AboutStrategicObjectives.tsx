import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Target,
  TrendingUp,
  Wrench,
  Cpu,
  Sprout,
  Gift,
  BarChart3,
  Package,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export function AboutStrategicObjectives() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const objectives = [
    {
      icon: Target,
      titleKey: "strategicObj1Title",
      textKey: "strategicObj1Text",
      color: "#035938",
    },
    {
      icon: TrendingUp,
      titleKey: "strategicObj2Title",
      textKey: "strategicObj2Text",
      color: "#52BC88",
    },
    {
      icon: Wrench,
      titleKey: "strategicObj3Title",
      textKey: "strategicObj3Text",
      color: "#F1BC28",
    },
    {
      icon: Cpu,
      titleKey: "strategicObj4Title",
      textKey: "strategicObj4Text",
      color: "#035938",
    },
    {
      icon: Sprout,
      titleKey: "strategicObj5Title",
      textKey: "strategicObj5Text",
      color: "#52BC88",
    },
    {
      icon: Gift,
      titleKey: "strategicObj6Title",
      textKey: "strategicObj6Text",
      color: "#F1BC28",
    },
    {
      icon: BarChart3,
      titleKey: "strategicObj7Title",
      textKey: "strategicObj7Text",
      color: "#035938",
    },
    {
      icon: Package,
      titleKey: "strategicObj8Title",
      textKey: "strategicObj8Text",
      color: "#52BC88",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial visible state for all elements
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
      if (centerRef.current)
        gsap.set(centerRef.current, { scale: 1, opacity: 1 });
      if (cardsRef.current.length > 0)
        gsap.set(cardsRef.current.filter(Boolean), { scale: 1, opacity: 1 });

      // Animate title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: -50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Animate center icon
      if (centerRef.current) {
        gsap.fromTo(
          centerRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Animate connecting lines
      const validLines = linesRef.current.filter(Boolean);
      if (validLines.length > 0) {
        gsap.fromTo(
          validLines,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 0.3,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Animate objective cards
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Calculate position for each objective in a circle
  const getPosition = (index: number, total: number) => {
    const angle = (index * 360) / total - 90; // Start from top
    const radius = 42; // percentage
    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
    return { x, y, angle: angle + 90 };
  };

  return (
    <section
      id="objectives"
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #035938 0%, #024a2e 50%, #035938 100%)",
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-[#52BC88]/10" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Title */}
        <div className="text-center mb-20">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl text-white fw-heading mb-4"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {language === "ar" ? (
              <>
                ما هي{" "}
                <span className="text-[#F1BC28]">الأهداف الاستراتيجية</span>
                <br />
                لبرنامج ريف السعودية؟
              </>
            ) : (
              <>
                What are the{" "}
                <span className="text-[#F1BC28]">Strategic Objectives</span>
                <br />
                of Reef Saudi Program?
              </>
            )}
          </h2>
        </div>

        {/* Main Radial Layout */}
        <div
          className="relative w-full max-w-5xl mx-auto"
          style={{ height: "900px" }}
        >
          {/* Central Icon */}
          <div
            ref={centerRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#52BC88] to-[#F1BC28] p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#035938] to-[#024a2e] flex items-center justify-center">
                  {/* Middle ring */}
                  <div className="w-36 h-36 rounded-full border-4 border-[#52BC88]/30 flex items-center justify-center">
                    {/* Inner target */}
                    <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#52BC88] to-[#F1BC28] flex items-center justify-center shadow-lg">
                        <Sprout
                          className="w-10 h-10 text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full bg-[#52BC88]/20 animate-ping" />
            </div>
          </div>

          {/* Connecting Lines */}
          {objectives.map((objective, index) => {
            const position = getPosition(index, objectives.length);
            return (
              <div
                key={`line-${index}`}
                ref={(el) => {
                  linesRef.current[index] = el;
                }}
                className="absolute top-1/2 left-1/2 origin-left"
                style={{
                  width: "42%",
                  height: "2px",
                  background: `linear-gradient(90deg, ${objective.color}80, ${objective.color}20)`,
                  transform: `translate(0, -50%) rotate(${position.angle}deg)`,
                  transformOrigin: "left center",
                  zIndex: 5,
                }}
              >
                {/* Dot at center */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{ backgroundColor: objective.color }}
                />
                {/* Dot at end */}
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: objective.color }}
                />
              </div>
            );
          })}

          {/* Objectives Cards positioned in circle */}
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            const position = getPosition(index, objectives.length);
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={`card-${index}`}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="absolute cursor-pointer transition-all duration-300"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: `translate(-50%, -50%) ${isHovered ? "scale(1.1)" : "scale(1)"}`,
                  zIndex: 10,
                }}
              >
                <div
                  className={`relative backdrop-blur-xl rounded-xl p-4 transition-all duration-300 ${
                    isHovered
                      ? "bg-white/95 shadow-2xl"
                      : "bg-white/80 shadow-lg hover:shadow-xl"
                  }`}
                  style={{
                    width: "200px",
                    border: `2px solid ${isHovered ? objective.color : "transparent"}`,
                  }}
                >
                  {/* Icon */}
                  <div className="mb-3 flex justify-center">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        background: `${objective.color}15`,
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: objective.color }}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base fw-heading mb-1 text-center leading-tight"
                    style={{
                      color: "#035938",
                      fontFamily:
                        language === "ar"
                          ? "'Loew Next Arabic', sans-serif"
                          : "inherit",
                    }}
                  >
                    {t(objective.titleKey)}
                  </h3>

                  {/* Description - smaller and condensed */}
                  <p
                    className="text-xs text-gray-600 text-center leading-snug line-clamp-3"
                    style={{
                      fontFamily:
                        language === "ar"
                          ? "'Loew Next Arabic', sans-serif"
                          : "inherit",
                    }}
                  >
                    {t(objective.textKey)}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${objective.color}, transparent)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
