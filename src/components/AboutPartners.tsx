import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import {
  Building2,
  TrendingUp,
  FlaskConical,
  Briefcase,
  ArrowRight,
} from "lucide-react";

// Dummy partner logos
const logoMewa = "https://placehold.co/200x200?text=Logo";
const logoHRSD = "https://placehold.co/200x200?text=Logo";
const logoEconomy = "https://placehold.co/200x200?text=Logo";
const logoTourism = "https://placehold.co/200x200?text=Logo";
const logoEducation = "https://placehold.co/200x200?text=Logo";
const logoMonshaat = "https://placehold.co/200x200?text=Logo";
const logoADF = "https://placehold.co/200x200?text=Logo";
const logoSDB = "https://placehold.co/200x200?text=Logo";
const logoADFCircle = "https://placehold.co/200x200?text=Logo";
const logoReefFoundation = "https://placehold.co/200x200?text=Logo";
const logoGreenInitiative = "https://placehold.co/200x200?text=Logo";

gsap.registerPlugin(ScrollTrigger);

export function AboutPartners() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visible state for all elements
    if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
    if (introRef.current) gsap.set(introRef.current, { opacity: 1, y: 0 });
    if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 1, y: 0 });
    if (categoriesRef.current) {
      const categories =
        categoriesRef.current.querySelectorAll(".partner-category");
      gsap.set(categories, { opacity: 1, y: 0 });
    }

    if (titleRef.current && sectionRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
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

    if (introRef.current && sectionRef.current) {
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    if (categoriesRef.current && sectionRef.current) {
      const categories =
        categoriesRef.current.querySelectorAll(".partner-category");
      gsap.fromTo(
        categories,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 80%",
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
          delay: 0.3,
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

  const partnerCategories = [
    {
      icon: Building2,
      titleKey: "partnersGovernmentTitle",
      gradient: "from-[#035938] to-[#52BC88]",
      partners: [
        { key: "partnersGov1", logo: logoMewa },
        { key: "partnersGov2", logo: logoHRSD },
        { key: "partnersGov3", logo: logoEconomy },
        { key: "partnersGov4", logo: logoTourism },
        { key: "partnersGov5", logo: logoEducation },
        { key: "partnersGov6", logo: logoMonshaat },
      ],
    },
    {
      icon: TrendingUp,
      titleKey: "partnersDevelopmentTitle",
      gradient: "from-[#52BC88] to-[#F1BC28]",
      partners: [
        { key: "partnersDev1", logo: logoADF },
        { key: "partnersDev2", logo: logoSDB },
        { key: "partnersDev3", logo: logoADFCircle },
        { key: "partnersDev4", logo: logoReefFoundation },
        { key: "partnersDev5", logo: logoGreenInitiative },
      ],
    },
    {
      icon: FlaskConical,
      titleKey: "partnersResearchTitle",
      gradient: "from-[#F1BC28] to-[#035938]",
      partners: ["partnersResearch1", "partnersResearch2", "partnersResearch3"],
    },
    {
      icon: Briefcase,
      titleKey: "partnersPrivateTitle",
      gradient: "from-[#035938] to-[#52BC88]",
      partners: [
        "partnersPrivate1",
        "partnersPrivate2",
        "partnersPrivate3",
        "partnersPrivate4",
        "partnersPrivate5",
        "partnersPrivate6",
        "partnersPrivate7",
        "partnersPrivate8",
      ],
    },
  ];

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
        background:
          "linear-gradient(180deg, #F9F7EF 0%, #ffffff 50%, #F9F7EF 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#52BC88]/10 to-[#F1BC28]/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#035938]/10 to-[#52BC88]/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #035938 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title with decorative elements */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#52BC88] rounded-full" />
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#52BC88] rounded-full" />
          </div>

          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-[#035938] fw-heading px-4"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {t("partnersTitle")}
          </h2>

          {/* Intro Paragraph */}
          <p
            ref={introRef}
            className="text-base md:text-lg text-[#035938]/80 max-w-4xl mx-auto mb-4 leading-relaxed px-4"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
          >
            {t("partnersIntro")}
          </p>
        </div>

        {/* Government Partners - Animated Logo Marquee */}
        <div className="mb-16">
          <div className="relative backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-[#035938]/10 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-2xl md:text-3xl text-[#035938] fw-heading"
                style={{
                  fontFamily:
                    language === "ar"
                      ? "'Loew Next Arabic', sans-serif"
                      : "inherit",
                }}
              >
                {t("partnersGovernmentTitle")}
              </h3>
            </div>

            {/* Infinite Scrolling Logo Grid */}
            <div className="relative overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {[
                  ...partnerCategories[0].partners,
                  ...partnerCategories[0].partners,
                ].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 group relative w-48 h-32 bg-white rounded-2xl p-6 border-2 border-[#035938]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#52BC88]/40"
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    {/* Sparkle */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-[#F1BC28] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />

                    <div className="relative z-10 h-full flex items-center justify-center">
                      <img
                        src={typeof partner === "object" ? partner.logo : ""}
                        alt={typeof partner === "object" ? t(partner.key) : ""}
                        className="w-full h-auto max-h-20 object-contain transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#035938] to-[#52BC88] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Development Partners - Circular Orbit Layout */}
        <div className="mb-16 relative">
          <div className="relative backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-[#52BC88]/10 shadow-xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#52BC88]/5 to-transparent rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#F1BC28]/5 to-transparent rounded-bl-3xl" />

            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#52BC88] to-[#F1BC28] flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-2xl md:text-3xl text-[#035938] fw-heading"
                style={{
                  fontFamily:
                    language === "ar"
                      ? "'Loew Next Arabic', sans-serif"
                      : "inherit",
                }}
              >
                {t("partnersDevelopmentTitle")}
              </h3>
            </div>

            {/* Compact Grid Layout */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {partnerCategories[1].partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl p-6 border-2 border-[#52BC88]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#F1BC28]/40 overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88]/5 to-[#F1BC28]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  {/* Sparkle */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#F1BC28] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />

                  <div
                    className="relative z-10 flex items-center justify-center"
                    style={{ minHeight: "100px" }}
                  >
                    <img
                      src={typeof partner === "object" ? partner.logo : ""}
                      alt={typeof partner === "object" ? t(partner.key) : ""}
                      className="w-full h-auto max-h-20 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#52BC88] to-[#F1BC28] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research & Private Sector - Creative Card Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Research Partners */}
          <div className="relative backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-[#F1BC28]/10 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F1BC28] to-[#035938] flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-xl md:text-2xl text-[#035938] fw-heading"
                style={{
                  fontFamily:
                    language === "ar"
                      ? "'Loew Next Arabic', sans-serif"
                      : "inherit",
                }}
              >
                {t("partnersResearchTitle")}
              </h3>
            </div>

            {/* Grid of Cards */}
            <div className="space-y-4">
              {partnerCategories[2].partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="group/card relative bg-gradient-to-r from-white to-[#F1BC28]/5 rounded-xl p-5 border border-[#F1BC28]/20 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-2 overflow-hidden"
                >
                  {/* Animated side accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F1BC28] to-[#035938] transform scale-y-0 group-hover/card:scale-y-100 transition-transform duration-300" />

                  {/* Icon */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#F1BC28]/20 to-[#F1BC28]/10 flex items-center justify-center transform group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-300">
                      <div className="w-6 h-6 rounded-md bg-[#F1BC28]/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#F1BC28]" />
                      </div>
                    </div>

                    <span
                      className="text-base md:text-lg text-[#035938]/90 group-hover/card:text-[#035938] transition-colors duration-300 flex-1"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t(typeof partner === "string" ? partner : partner.key)}
                    </span>
                  </div>

                  {/* Corner sparkle */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#F1BC28] rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-ping" />
                </div>
              ))}
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F1BC28]/10 to-transparent rounded-tr-3xl" />
          </div>

          {/* Private Sector */}
          <div className="relative backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-[#035938]/10 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-xl md:text-2xl text-[#035938] fw-heading"
                style={{
                  fontFamily:
                    language === "ar"
                      ? "'Loew Next Arabic', sans-serif"
                      : "inherit",
                }}
              >
                {t("partnersPrivateTitle")}
              </h3>
            </div>

            {/* Two-Column Grid */}
            <div className="grid grid-cols-2 gap-3">
              {partnerCategories[3].partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="group/card relative bg-gradient-to-br from-white to-[#52BC88]/5 rounded-lg p-4 border border-[#52BC88]/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#035938] to-[#52BC88] transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300" />

                  {/* Content */}
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-[#52BC88]/20 to-[#52BC88]/10 flex items-center justify-center mt-0.5 transform group-hover/card:scale-110 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#52BC88]" />
                    </div>

                    <span
                      className="text-sm md:text-base text-[#035938]/90 group-hover/card:text-[#035938] transition-colors duration-300 leading-snug"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {t(typeof partner === "string" ? partner : partner.key)}
                    </span>
                  </div>

                  {/* Corner sparkle */}
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#035938] rounded-full opacity-0 group-hover/card:opacity-100 group-hover/card:animate-ping" />
                </div>
              ))}
            </div>

            {/* Decorative corner */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#035938]/10 to-transparent rounded-bl-3xl" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative px-10 py-5 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-full text-lg fw-heading overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
            <span
              className="relative z-10 flex items-center gap-2"
              style={{
                fontFamily:
                  language === "ar"
                    ? "'Loew Next Arabic', sans-serif"
                    : "inherit",
              }}
            >
              {t("partnersCTA1")}
              <ArrowRight
                className={`w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 ${
                  language === "ar" ? "rotate-180" : ""
                }`}
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button className="group relative px-10 py-5 bg-white border-2 border-[#035938] text-[#035938] rounded-full text-lg fw-heading overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-[#035938] hover:text-white">
            <span
              className="relative z-10 flex items-center gap-2"
              style={{
                fontFamily:
                  language === "ar"
                    ? "'Loew Next Arabic', sans-serif"
                    : "inherit",
              }}
            >
              {t("partnersCTA2")}
              <ArrowRight
                className={`w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 ${
                  language === "ar" ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
