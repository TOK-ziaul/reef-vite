import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, Target, Leaf, Eye, Compass } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function AboutVisionMission() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const visionCardRef = useRef<HTMLDivElement>(null);
  const missionCardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visible state
    if (visionCardRef.current) gsap.set(visionCardRef.current, { opacity: 1, x: 0, rotateY: 0 });
    if (missionCardRef.current) gsap.set(missionCardRef.current, { opacity: 1, x: 0, rotateY: 0 });
    if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 1, y: 0 });
    
    if (visionCardRef.current && sectionRef.current) {
      gsap.fromTo(
        visionCardRef.current,
        { opacity: 0, x: language === "ar" ? 50 : -50, rotateY: -10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (missionCardRef.current && sectionRef.current) {
      gsap.fromTo(
        missionCardRef.current,
        { opacity: 0, x: language === "ar" ? -50 : 50, rotateY: 10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
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
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [language]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 bg-white overflow-hidden"
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-[#F1BC28]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-[#52BC88]/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div
            ref={visionCardRef}
            className="group relative backdrop-blur-xl bg-gradient-to-br from-[#035938]/5 to-[#52BC88]/10 rounded-3xl p-10 border border-[#035938]/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center shadow-lg mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
              <Eye className="w-10 h-10 text-white" />
            </div>

            {/* Title */}
            <h3
              className="text-2xl md:text-3xl text-[#035938] mb-6 fw-heading"
              style={{
                fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
              }}
            >
              {t("visionMissionVisionTitle")}
            </h3>

            {/* Content */}
            <p
              className="text-lg md:text-xl text-[#035938]/80 leading-relaxed"
              style={{
                fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
              }}
            >
              {t("visionMissionVisionText")}
            </p>

            {/* Decorative Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#035938] to-[#52BC88] rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#035938]/0 to-[#52BC88]/0 group-hover:from-[#035938]/10 group-hover:to-[#52BC88]/20 transition-all duration-500 pointer-events-none" />
          </div>

          {/* Mission Card */}
          <div
            ref={missionCardRef}
            className="group relative backdrop-blur-xl bg-gradient-to-br from-[#52BC88]/5 to-[#F1BC28]/10 rounded-3xl p-10 border border-[#52BC88]/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#52BC88] to-[#F1BC28] flex items-center justify-center shadow-lg mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
              <Compass className="w-10 h-10 text-white" />
            </div>

            {/* Title */}
            <h3
              className="text-2xl md:text-3xl text-[#035938] mb-6 fw-heading"
              style={{
                fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
              }}
            >
              {t("visionMissionMissionTitle")}
            </h3>

            {/* Content */}
            <p
              className="text-lg md:text-xl text-[#035938]/80 leading-relaxed"
              style={{
                fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
              }}
            >
              {t("visionMissionMissionText")}
            </p>

            {/* Decorative Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#52BC88] to-[#F1BC28] rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#52BC88]/0 to-[#F1BC28]/0 group-hover:from-[#52BC88]/10 group-hover:to-[#F1BC28]/20 transition-all duration-500 pointer-events-none" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("objectives")}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 overflow-hidden"
            style={{
              fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#52BC88] to-[#035938] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Target className="w-5 h-5 relative z-10" />
            <span className="text-lg fw-heading relative z-10">{t("vision2030CTA1")}</span>
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
              fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
            }}
          >
            <div className="absolute inset-0 bg-[#035938] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Leaf className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
            <span className="text-lg fw-heading relative z-10 group-hover:text-white transition-colors">{t("vision2030CTA2")}</span>
            <ArrowRight
              className={`w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10 group-hover:text-white ${
                language === "ar" ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}