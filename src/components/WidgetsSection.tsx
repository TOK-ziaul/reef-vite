import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Image as ImageIcon, Headphones, Map } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// Stacked Cards Animation Wrapper
function StackCards({
  children,
  offset,
}: {
  children: React.ReactNode;
  offset?: React.ReactNode;
}) {
  const stackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!stackRef.current) return;

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (!stackRef.current) return; // Check scope again before creating context

      ScrollTrigger.refresh();

      const ctx = gsap.context(() => {
        cards.forEach((card, index) => {
          if (!card) return; // Add null check

          const isLast = index === cards.length - 1;

          ScrollTrigger.create({
            trigger: card,
            start: "top 200px",
            end: "bottom 200px",
            pin: !isLast,
            pinSpacing: false,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (!isLast && card) {
                const progress = self.progress;
                gsap.to(card, {
                  scale: 1 - progress * 0.05,
                  y: progress * -50,
                  opacity: 1 - progress * 0.3,
                  duration: 0.1,
                });
              }
            },
          });
        });
      }, stackRef);

      return () => {
        ctx.revert();
        ScrollTrigger.refresh();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={stackRef} className="relative">
      {offset && (
        <div className="sticky top-0 z-[100] bg-white py-8 mb-12 text-center shadow-sm">
          {offset}
        </div>
      )}{" "}
      <div className="relative space-y-8">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="will-change-transform"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export function WidgetsSection() {
  const { t, language } = useLanguage();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions = [
    {
      name: language === "ar" ? "الجوف" : "Al-Jouf",
      projects: 45,
      sectors: "Coffee, Dates",
      x: "48%",
      y: "8%",
    },
    {
      name: language === "ar" ? "تبوك" : "Tabuk",
      projects: 32,
      sectors: "Fishing, Fruits",
      x: "18%",
      y: "12%",
    },
    {
      name: language === "ar" ? "حائل" : "Hail",
      projects: 58,
      sectors: "Livestock, Grains",
      x: "46%",
      y: "22%",
    },
    {
      name: language === "ar" ? "الحدود الشمالية" : "Northern Borders",
      projects: 28,
      sectors: "Rainfed Crops",
      x: "62%",
      y: "8%",
    },
    {
      name: language === "ar" ? "القصيم" : "Qassim",
      projects: 72,
      sectors: "Dates, Vegetables",
      x: "50%",
      y: "30%",
    },
    {
      name: language === "ar" ? "المدينة المنورة" : "Madinah",
      projects: 51,
      sectors: "Dates, Honey",
      x: "30%",
      y: "28%",
    },
    {
      name: language === "ar" ? "الرياض" : "Riyadh",
      projects: 156,
      sectors: "Dairy, Poultry",
      x: "57%",
      y: "44%",
    },
    {
      name: language === "ar" ? "الشرقية" : "Eastern Province",
      projects: 89,
      sectors: "Fishing, Dates",
      x: "85%",
      y: "46%",
    },
    {
      name: language === "ar" ? "مكة المكرمة" : "Makkah",
      projects: 94,
      sectors: "Fruits, Honey",
      x: "33%",
      y: "44%",
    },
    {
      name: language === "ar" ? "الباحة" : "Al-Baha",
      projects: 65,
      sectors: "Coffee, Roses",
      x: "37%",
      y: "56%",
    },
    {
      name: language === "ar" ? "عسير" : "Asir",
      projects: 78,
      sectors: "Coffee, Vegetables",
      x: "45%",
      y: "62%",
    },
    {
      name: language === "ar" ? "جازان" : "Jazan",
      projects: 83,
      sectors: "Coffee, Fishing",
      x: "32%",
      y: "78%",
    },
    {
      name: language === "ar" ? "نجران" : "Najran",
      projects: 54,
      sectors: "Dates, Honey",
      x: "62%",
      y: "78%",
    },
  ];

  // Card data for stacked layout
  const stackedCards = [
    {
      title: t("widget1Title"),
      description: t("widget1Desc"),
      btnText: t("widget1Btn1"),
      image:
        "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D",
      bgColor: "#F1BC28",
      textColor: "#052F2A",
      icon: Headphones,
    },
    {
      title: t("widget2Title"),
      description: t("widget2Desc"),
      btnText: t("widget2Btn1"),
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "#035938",
      textColor: "white",
      icon: ImageIcon,
    },
    {
      title: t("widget3Title"),
      description: t("widget3Desc"),
      btnText: t("widget3Btn"),
      image: null, // Map widget
      bgColor: "#52BC88",
      textColor: "white",
      icon: Map,
      isMap: true,
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#F1BC28]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#035938]/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <StackCards
          offset={
            <div dir={language === "ar" ? "rtl" : "ltr"}>
              <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-[#F9F7EF] backdrop-blur-md border border-[#035938]/20 rounded-full">
                <div className="w-2 h-2 bg-[#52BC88] rounded-full animate-pulse" />
                <span className="text-[#035938] text-sm font-medium">
                  {language === "ar" ? "ثقافتنا" : "Our Culture"}
                </span>
              </div>
              <h2 className="text-[#052F2A] leading-tight text-3xl md:text-4xl font-bold">
                {language === "ar"
                  ? "استكشف برامجنا ومبادراتنا"
                  : "Explore Our Programs & Initiatives"}
              </h2>
            </div>
          }
        >
          {stackedCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="sticky top-[140px]"
                style={{
                  zIndex: stackedCards.length - index,
                }}
              >
                <div
                  className="md:w-4/5 mx-auto rounded-3xl shadow-2xl overflow-hidden relative"
                  style={{ backgroundColor: card.bgColor }}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {card.isMap ? (
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                          backgroundSize: "30px 30px",
                        }}
                      />
                    ) : (
                      <ImageWithFallback
                        src={
                          card.bgColor === "#F1BC28"
                            ? "https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyNzkzMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                            : "https://images.unsplash.com/photo-1719935115623-4857df23f3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NjI3NTkwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        }
                        alt="Background"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="relative z-10 p-8 md:p-12">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300`}
                      style={{
                        backgroundColor:
                          card.bgColor === "#F1BC28" ? "#052F2A" : "#F1BC28",
                      }}
                    >
                      <IconComponent
                        className="w-7 h-7"
                        style={{
                          color:
                            card.bgColor === "#F1BC28" ? "#F1BC28" : "#052F2A",
                        }}
                      />
                    </div>

                    {card.isMap ? (
                      <>
                        <h3
                          className="mb-3 text-2xl font-bold"
                          style={{ color: card.textColor }}
                        >
                          {card.title}
                        </h3>
                        <p
                          className="mb-6 leading-relaxed text-base max-w-2xl"
                          style={{
                            color: card.textColor,
                            opacity: 0.8,
                          }}
                        >
                          {card.description}
                        </p>

                        {/* Interactive Map */}
                        <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 mb-6 overflow-hidden">
                          <div className="relative w-full h-full min-h-[200px]">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <ImageWithFallback
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_osuBHN8Dy3-R_o7wcjeC1mo5Qx_NxR6LgFRUUCF7vkaDphfwL_W2is&s"
                                alt="Saudi Arabia map"
                                className="w-full h-full object-contain opacity-30"
                              />
                            </div>

                            {/* Interactive Region Dots */}
                            {regions.map((region, idx) => (
                              <div
                                key={idx}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                style={{
                                  left: region.x,
                                  top: region.y,
                                }}
                                onMouseEnter={() =>
                                  setHoveredRegion(region.name)
                                }
                                onMouseLeave={() => setHoveredRegion(null)}
                              >
                                <div
                                  className="relative"
                                  style={{ zIndex: 30 }}
                                >
                                  <div className="w-3 h-3 bg-[#F1BC28] rounded-full animate-pulse" />
                                  <div className="absolute inset-0 w-3 h-3 bg-[#F1BC28] rounded-full animate-ping opacity-75" />

                                  {hoveredRegion === region.name && (
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-white text-[#052F2A] rounded-lg shadow-xl whitespace-nowrap text-xs z-50">
                                      <div className="font-semibold">
                                        {region.name}
                                      </div>
                                      <div className="text-[#052F2A]/70">
                                        {region.projects}{" "}
                                        {language === "ar"
                                          ? "مشروع"
                                          : "Projects"}
                                      </div>
                                      <div className="text-[#052F2A]/60 text-xs">
                                        {region.sectors}
                                      </div>
                                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-white rotate-45" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/60 text-xs flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#F1BC28] rounded-full animate-pulse" />
                            <span>{t("widget3Hover")}</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left: Content */}
                        <div>
                          <h3
                            className="mb-3 text-2xl font-bold"
                            style={{ color: card.textColor }}
                          >
                            {card.title}
                          </h3>
                          <p
                            className="mb-5 leading-relaxed text-base"
                            style={{
                              color: card.textColor,
                              opacity: 0.8,
                            }}
                          >
                            {card.description}
                          </p>
                        </div>

                        {/* Right: Image */}
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                          <ImageWithFallback
                            src={card.image ?? ""}
                            alt={card.title}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 font-medium"
                      style={{
                        backgroundColor:
                          card.bgColor === "#F1BC28"
                            ? "#052F2A"
                            : card.isMap
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(255,255,255,0.1)",
                        color: card.textColor,
                        border: card.isMap
                          ? "1px solid rgba(255,255,255,0.2)"
                          : "none",
                      }}
                    >
                      <span className="text-sm">{card.btnText}</span>
                      <ArrowRight className={`w-4 h-4`} />
                    </a>
                  </div>

                  {/* Decorative Circle */}
                  <div
                    className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl"
                    style={{
                      backgroundColor:
                        card.bgColor === "#F1BC28"
                          ? "rgba(5,47,42,0.2)"
                          : "rgba(241,188,40,0.2)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </StackCards>
      </div>
    </section>
  );
}
