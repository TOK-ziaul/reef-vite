import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export function AboutOrganizationalStructure() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial visible state for all elements
    if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
    if (contentRef.current) gsap.set(contentRef.current, { opacity: 1, y: 0 });
    if (diagramRef.current) {
      const nodes = diagramRef.current.querySelectorAll(".org-node");
      gsap.set(nodes, { opacity: 1, scale: 1, y: 0 });
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

    if (contentRef.current && sectionRef.current) {
      gsap.fromTo(
        contentRef.current,
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

    if (diagramRef.current && sectionRef.current) {
      const nodes = diagramRef.current.querySelectorAll(".org-node");
      gsap.fromTo(
        nodes,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: diagramRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 bg-gradient-to-br from-white via-[#F9F7EF] to-white overflow-hidden"
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#035938]/10 to-[#52BC88]/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#F1BC28]/10 to-[#52BC88]/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#035938 1px, transparent 1px), linear-gradient(90deg, #035938 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl mb-12 text-[#035938] text-center fw-heading px-4"
          style={{
            fontFamily:
              language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
          }}
        >
          {t("orgStructureTitle")}
        </h2>

        {/* Content Container with Glassmorphism */}
        <div
          ref={contentRef}
          className="relative backdrop-blur-xl bg-white/80 rounded-3xl p-8 md:p-12 border border-[#52BC88]/20 shadow-2xl mb-16"
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#035938]/20 to-transparent rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#52BC88]/20 to-transparent rounded-br-3xl" />

          {/* Content Text */}
          <div className="relative z-10 space-y-6">
            <p
              className="text-lg md:text-xl text-[#035938]/90 leading-relaxed"
              style={{
                fontFamily:
                  language === "ar"
                    ? "'Loew Next Arabic', sans-serif"
                    : "inherit",
              }}
            >
              {t("orgStructureParagraph1")}
            </p>
            <p
              className="text-lg md:text-xl text-[#035938]/90 leading-relaxed"
              style={{
                fontFamily:
                  language === "ar"
                    ? "'Loew Next Arabic', sans-serif"
                    : "inherit",
              }}
            >
              {t("orgStructureParagraph2")}
            </p>
          </div>

          {/* Gradient Line Separator */}
          <div className="mt-8 h-1 w-full bg-gradient-to-r from-transparent via-[#52BC88] to-transparent rounded-full" />
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
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
