import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  Users,
  Sprout,
  Coins,
  Building2,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export function KeyNumbers() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [, setHoveredIndex] = useState<
    number | null
  >(null);

  const stats = [
    {
      icon: <Users className="w-10 h-10" />,
      number: 87831,
      prefix: "+",
      labelKey: "stat1Label",
      color: "from-[#035938] via-[#52BC88] to-[#035938]",
      iconBg: "from-[#035938] to-[#52BC88]",
    },
    {
      icon: <Coins className="w-10 h-10" />,
      number: 2514,
      prefix: "+",
      labelKey: "stat2Label",
      color: "from-[#52BC88] via-[#F1BC28] to-[#52BC88]",
      iconBg: "from-[#52BC88] to-[#F1BC28]",
    },
    {
      icon: <Sprout className="w-10 h-10" />,
      number: 49500,
      prefix: "+",
      labelKey: "stat3Label",
      color: "from-[#F1BC28] via-[#52BC88] to-[#F1BC28]",
      iconBg: "from-[#F1BC28] to-[#52BC88]",
    },
    {
      icon: <Users className="w-10 h-10" />,
      number: 58093,
      prefix: "+",
      labelKey: "stat4Label",
      color: "from-[#035938] via-[#F1BC28] to-[#035938]",
      iconBg: "from-[#035938] to-[#F1BC28]",
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      number: 105,
      prefix: "+",
      labelKey: "stat5Label",
      color: "from-[#52BC88] via-[#035938] to-[#52BC88]",
      iconBg: "from-[#52BC88] to-[#035938]",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      number: 15.5,
      prefix: "+",
      labelKey: "stat6Label",
      color: "from-[#F1BC28] via-[#035938] to-[#F1BC28]",
      iconBg: "from-[#F1BC28] to-[#035938]",
      isDecimal: true,
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return; // Check scope before creating context
    
    const ctx = gsap.context(() => {
      // Animate title
      if (titleRef.current && titleRef.current.children.length > 0) {
        gsap.fromTo(
          titleRef.current.children,
          { opacity: 0, y: 60, rotationX: -45 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
            },
          },
        );
      }

      // Animate stat cards with 3D effect
      if (numbersRef.current) {
        const cards =
          numbersRef.current.querySelectorAll(".stat-card");

        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              scale: 0.5,
              rotationY: -90,
              z: -500,
            },
            {
              opacity: 1,
              scale: 1,
              rotationY: 0,
              z: 0,
              duration: 1,
              stagger: 0.1,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: numbersRef.current,
                start: "top 75%",
              },
            },
          );
        }

        // Animate numbers counting
        const numberElements =
          numbersRef.current.querySelectorAll(".count-up");
        
        if (numberElements.length > 0) {
          numberElements.forEach((element) => {
            if (!element) return;
            
            const target = parseFloat(
              element.getAttribute("data-target") || "0",
            );
            const isDecimal =
              element.getAttribute("data-decimal") === "true";
            const obj = { value: 0 };

            gsap.to(obj, {
              value: target,
              duration: 2.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
              },
              onUpdate: () => {
                if (element && isDecimal) {
                  element.textContent = obj.value.toFixed(1);
                } else if (element) {
                  element.textContent = Math.round(
                    obj.value,
                  ).toLocaleString();
                }
              },
            });
          });
        }

        // Parallax effect on scroll
        if (cards.length > 0) {
          cards.forEach((card) => {
            if (!card) return;
            
            gsap.to(card, {
              y: -30,
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          });
        }
      }

      // Animate background blobs
      const blob1 = document.querySelector(".blob-1");
      const blob2 = document.querySelector(".blob-2");
      const blob3 = document.querySelector(".blob-3");

      if (blob1) {
        gsap.to(blob1, {
          x: 100,
          y: -100,
          scale: 1.2,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (blob2) {
        gsap.to(blob2, {
          x: -100,
          y: 100,
          scale: 0.8,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (blob3) {
        gsap.to(blob3, {
          x: 50,
          y: 50,
          scale: 1.1,
          duration: 12,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Magnetic effect removed - keeping it simple
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#F9F7EF] to-white relative overflow-hidden"
      style={{ background: "#f5f0e5" }}
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob-1 absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#035938]/20 to-[#52BC88]/20 rounded-full blur-[100px]" />
        <div className="blob-2 absolute bottom-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#F1BC28]/20 to-[#52BC88]/20 rounded-full blur-[100px]" />
        <div className="blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#52BC88]/10 to-[#035938]/10 rounded-full blur-[80px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#52BC88]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 ${language === "ar" ? "text-right" : "text-left"}`}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div className="flex justify-center mb-4">
            <div className="inline-block px-5 py-2 bg-white/60 backdrop-blur-md border border-[#035938]/20 rounded-full">
              <span className="text-[#035938] text-2xl font-medium">
                {language === "ar"
                  ? "📊 إحصائيات الأثر"
                  : "📊 Impact Statistics"}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-[#052F2A] leading-tight text-center">
              {t("statsTitle")}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-[#052F2A]/70 text-lg leading-relaxed text-center">
              {t("statsDesc")}
            </p>
          </div>
        </div>

        {/* Stats Grid with Reduced Size Cards */}
        <div
          ref={numbersRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Content */}
                <div
                  className={`relative z-10 ${language === "ar" ? "text-right" : "text-left"}`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {/* Icon with gradient - no tilt animation */}
                  <div className="mb-5">
                    <div
                      className={`stat-icon inline-flex w-14 h-14 bg-gradient-to-br ${stat.iconBg} rounded-xl items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
                    >
                      <div className="w-7 h-7">{stat.icon}</div>
                    </div>
                  </div>

                  {/* Number with prefix - medium weight */}
                  <div className="mb-4">
                    <div className="flex items-start gap-1.5">
                      <span className="text-[#F1BC28] text-3xl font-medium">
                        {stat.prefix}
                      </span>
                      <span
                        className="count-up text-4xl text-[#052F2A] font-medium inline-block leading-none"
                        data-target={stat.number}
                        data-decimal={
                          stat.isDecimal ? "true" : "false"
                        }
                      >
                        0
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-[#052F2A] text-base leading-relaxed font-normal">
                    {t(stat.labelKey)}
                  </p>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#F1BC28]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#52BC88]/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-md rounded-full border border-[#035938]/20">
            <div className="w-3 h-3 bg-[#52BC88] rounded-full animate-pulse" />
            <span className="text-[#052F2A]/70">
              {language === "ar"
                ? "البيانات محدّثة باستمرار"
                : "Data Updated Continuously"}
            </span>
            <div
              className="w-3 h-3 bg-[#F1BC28] rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
}