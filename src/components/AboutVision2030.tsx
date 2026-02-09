import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import {
  ArrowRight,
  Target,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function AboutVision2030() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    // Set initial visible state
    if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
    if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 1, y: 0 });

    if (titleRef.current && sectionRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    if (ctaRef.current && sectionRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visionPoints.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const visionPoints = [
    {
      number: 1,
      titleKey: "vision2030Point1Title",
      textKey: "vision2030Point1Text",
      gradient: "from-[#035938] to-[#52BC88]",
    },
    {
      number: 2,
      titleKey: "vision2030Point2Title",
      textKey: "vision2030Point2Text",
      gradient: "from-[#52BC88] to-[#F1BC28]",
    },
    {
      number: 3,
      titleKey: "vision2030Point3Title",
      textKey: "vision2030Point3Text",
      gradient: "from-[#F1BC28] to-[#035938]",
    },
    {
      number: 4,
      titleKey: "vision2030Point4Title",
      textKey: "vision2030Point4Text",
      gradient: "from-[#035938] to-[#52BC88]",
    },
    {
      number: 5,
      titleKey: "vision2030Point5Title",
      textKey: "vision2030Point5Text",
      gradient: "from-[#52BC88] to-[#F1BC28]",
    },
    {
      number: 6,
      titleKey: "vision2030Point6Title",
      textKey: "vision2030Point6Text",
      gradient: "from-[#F1BC28] to-[#035938]",
    },
    {
      number: 7,
      titleKey: "vision2030Point7Title",
      textKey: "vision2030Point7Text",
      gradient: "from-[#035938] to-[#52BC88]",
    },
    {
      number: 8,
      titleKey: "vision2030Point8Title",
      textKey: "vision2030Point8Text",
      gradient: "from-[#52BC88] to-[#F1BC28]",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % visionPoints.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + visionPoints.length) % visionPoints.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate visible slides based on screen size
  const getVisibleSlides = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 bg-gradient-to-br from-[#F9F7EF] to-white overflow-hidden"
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#52BC88]/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F1BC28]/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#035938]/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl mb-16 text-[#035938] text-center fw-heading px-4"
          style={{
            fontFamily:
              language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
          }}
        >
          {t("vision2030SectionTitle")}
        </h2>

        {/* Custom Carousel */}
        <div
          className="relative px-4 md:px-12 mb-20"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className={`absolute ${language === "ar" ? "right-0" : "left-0"} top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl hover:shadow-2xl flex items-center justify-center text-[#035938] hover:bg-[#035938] hover:text-white transition-all duration-300 hover:scale-110`}
          >
            <ChevronLeft
              className={`w-6 h-6 ${language === "ar" ? "rotate-180" : ""}`}
            />
          </button>

          <button
            onClick={goToNext}
            className={`absolute ${language === "ar" ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl hover:shadow-2xl flex items-center justify-center text-[#035938] hover:bg-[#035938] hover:text-white transition-all duration-300 hover:scale-110`}
          >
            <ChevronRight
              className={`w-6 h-6 ${language === "ar" ? "rotate-180" : ""}`}
            />
          </button>

          {/* Cards Container */}
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{
                transform:
                  language === "ar"
                    ? `translateX(${currentIndex * (100 / visibleSlides)}%)`
                    : `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
              }}
            >
              {visionPoints.map((point, idx) => (
                <div
                  key={point.number}
                  className="flex-shrink-0 px-3"
                  style={{
                    width: `${100 / visibleSlides}%`,
                    opacity:
                      idx >= currentIndex && idx < currentIndex + visibleSlides
                        ? 1
                        : 0.3,
                    transform:
                      idx >= currentIndex && idx < currentIndex + visibleSlides
                        ? "scale(1)"
                        : "scale(0.9)",
                    transition: "all 0.5s ease",
                  }}
                >
                  <div className="group relative backdrop-blur-xl bg-white/90 rounded-3xl p-8 border border-[#52BC88]/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 min-h-[380px] flex flex-col">
                    {/* Gradient Number Badge */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.gradient} flex items-center justify-center shadow-lg mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}
                    >
                      <span
                        className="text-white text-2xl fw-heading"
                        style={{
                          fontFamily:
                            language === "ar"
                              ? "'Loew Next Arabic', sans-serif"
                              : "inherit",
                        }}
                      >
                        {point.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3
                      className="text-xl md:text-2xl text-[#035938] mb-4 fw-heading flex-shrink-0"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t(point.titleKey)}
                    </h3>
                    <p
                      className="text-base md:text-lg text-[#035938]/70 leading-relaxed flex-grow"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t(point.textKey)}
                    </p>

                    {/* 3D Hover Gradient Line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${point.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    />

                    {/* Glassmorphism Overlay */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-[#52BC88]/0 group-hover:from-white/20 group-hover:to-[#52BC88]/10 transition-all duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {visionPoints.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-[#035938] w-8"
                    : "bg-[#52BC88]/30 w-3"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12"
        >
          <button
            onClick={() => scrollToSection("objectives")}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 overflow-hidden"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#52BC88] to-[#035938] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Target className="w-5 h-5 relative z-10" />
            <span className="text-lg fw-heading relative z-10">
              {t("vision2030CTA1")}
            </span>
            <ArrowRight
              className={`w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10 ${
                language === "ar" ? "rotate-180" : ""
              }`}
            />
          </button>

          <button
            onClick={() => scrollToSection("sectors")}
            className="group relative px-8 py-4 bg-white text-[#035938] border-2 border-[#035938] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 overflow-hidden"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            <div className="absolute inset-0 bg-[#035938] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Leaf className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
            <span className="text-lg fw-heading relative z-10 group-hover:text-white transition-colors">
              {t("vision2030CTA2")}
            </span>
            <ArrowRight
              className={`w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10 group-hover:text-white ${
                language === "ar" ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
