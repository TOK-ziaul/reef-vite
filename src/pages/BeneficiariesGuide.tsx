import React, { useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { Check } from "lucide-react";

export const BeneficiariesGuidePage: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const guides = [
    {
      title: t("beneficiariesGuide1Title"),
      image: "/guides/1.jpg",
      color: "from-[#035938] to-[#52BC88]",
      intro: t("beneficiariesGuide1Intro"),
      items: [
        t("beneficiariesGuide1Item1"),
        t("beneficiariesGuide1Item2"),
        t("beneficiariesGuide1Item3"),
        t("beneficiariesGuide1Item4"),
        t("beneficiariesGuide1Item5"),
      ],
      conclusion: t("beneficiariesGuide1Conclusion"),
    },
    {
      title: t("beneficiariesGuide2Title"),
      image: "/guides/2.jpg",
      color: "from-[#52BC88] to-[#F1BC28]",
      intro: t("beneficiariesGuide2Intro"),
      items: [
        t("beneficiariesGuide2Item1"),
        t("beneficiariesGuide2Item2"),
        t("beneficiariesGuide2Item3"),
        t("beneficiariesGuide2Item4"),
        t("beneficiariesGuide2Item5"),
      ],
      conclusion: t("beneficiariesGuide2Conclusion"),
    },
    {
      title: t("beneficiariesGuide3Title"),
      image: "/guides/3.jpg",
      color: "from-[#F1BC28] to-[#035938]",
      intro: t("beneficiariesGuide3Intro"),
      items: [
        t("beneficiariesGuide3Item1"),
        t("beneficiariesGuide3Item2"),
        t("beneficiariesGuide3Item3"),
        t("beneficiariesGuide3Item4"),
        t("beneficiariesGuide3Item5"),
      ],
      conclusion: t("beneficiariesGuide3Conclusion"),
    },
    {
      title: t("beneficiariesGuide4Title"),
      image: "/guides/4.jpg",
      color: "from-[#035938] to-[#F1BC28]",
      intro: t("beneficiariesGuide4Intro"),
      items: [
        t("beneficiariesGuide4Item1"),
        t("beneficiariesGuide4Item2"),
        t("beneficiariesGuide4Item3"),
        t("beneficiariesGuide4Item4"),
        t("beneficiariesGuide4Item5"),
      ],
      conclusion: "",
    },
    {
      title: t("beneficiariesGuide5Title"),
      image: "/guides/5.jpg",
      color: "from-[#52BC88] to-[#035938]",
      intro: t("beneficiariesGuide5Intro"),
      items: [
        t("beneficiariesGuide5Item1"),
        t("beneficiariesGuide5Item2"),
        t("beneficiariesGuide5Item3"),
        t("beneficiariesGuide5Item4"),
      ],
      conclusion: t("beneficiariesGuide5Conclusion"),
    },
  ];

  return (
    <div
      className={`min-h-screen bg-[#F9F7EF] ${isRTL ? "rtl font-loew" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1734174051632-c99a253ddb9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjByZWFkaW5nJTIwZG9jdW1lbnRzJTIwaGFuZGJvb2slMjBndWlkZXxlbnwxfHx8fDE3NzA3NDQyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#035938]/95 via-[#024830]/93 to-[#035938]/95" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
            <div className="max-w-3xl">
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 ${isRTL ? "text-right" : "text-left"}`}
                style={{
                  animation: "fadeInUp 0.6s ease-out",
                  textShadow: "0 2px 40px rgba(0,0,0,0.3)",
                }}
              >
                {t("beneficiariesGuideHeroTitle")}
              </h1>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 60L48 65C96 70 192 80 288 75C384 70 480 50 576 45C672 40 768 50 864 60C960 70 1056 80 1152 75C1248 70 1344 50 1392 40L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
              fill="#F9F7EF"
            />
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative -mt-2 pt-10 pb-24 bg-[#F9F7EF]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div
            className="bg-white rounded-[40px] p-10 md:p-14 lg:p-16 shadow-lg"
            style={{ animation: "fadeInUp 0.8s ease-out" }}
          >
            <p
              className={`text-2xl md:text-3xl leading-relaxed text-[#035938] font-bold mb-8 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("beneficiariesGuideIntro1")}
            </p>

            <div className="w-24 h-1 bg-[#52BC88] rounded-full mb-8" />

            <p
              className={`text-xl md:text-2xl leading-relaxed text-[#052F2A]/80 ${isRTL ? "text-right" : "text-left"}`}
            >
              {t("beneficiariesGuideIntro2")}
            </p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#F9F7EF] to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="space-y-16">
            {guides.map((guide, index) => {
              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${0.15 * index}s backwards`,
                  }}
                >
                  <div className="bg-white rounded-[10px] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* Image Side */}
                      <div className="lg:col-span-4 relative h-[300px] lg:h-auto overflow-hidden">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${guide.color} opacity-60`}
                        />
                      </div>

                      {/* Content Side */}
                      <div className="lg:col-span-8 p-6 md:p-8">
                        <h3
                          className={`text-2xl md:text-3xl font-bold text-[#035938] mb-4 ${isRTL ? "text-right" : "text-left"}`}
                        >
                          {guide.title}
                        </h3>

                        <p
                          className={`text-lg leading-relaxed text-[#052F2A]/70 mb-4 ${isRTL ? "text-right" : "text-left"}`}
                        >
                          {guide.intro}
                        </p>

                        <div className="space-y-2 mb-6">
                          {guide.items.map((item, i) => (
                            <div
                              key={i}
                              className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : "flex-row"}`}
                            >
                              <div
                                className={`size-6 rounded bg-gradient-to-br ${guide.color} flex items-center justify-center flex-shrink-0 mt-1`}
                              >
                                <Check
                                  className="size-4 text-white"
                                  strokeWidth={2.5}
                                />
                              </div>
                              <p
                                className={`text-base text-[#052F2A] flex-1 ${isRTL ? "text-right" : "text-left"}`}
                              >
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>

                        {guide.conclusion && (
                          <div
                            className={`p-4 rounded-2xl bg-[#F9F7EF] border-l-4 ${isRTL ? "border-r-4 border-l-0" : ""}`}
                            style={{ borderColor: "#52BC88" }}
                          >
                            <p
                              className={`text-lg leading-relaxed text-[#035938] font-medium ${isRTL ? "text-right" : "text-left"}`}
                            >
                              {guide.conclusion}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
