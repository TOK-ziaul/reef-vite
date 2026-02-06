import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import { Calendar, MapPin, Users, Award, Zap, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function AboutEstablishment() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial visible state for all elements
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0, scale: 1 });
      if (contentRef.current) gsap.set(contentRef.current, { opacity: 1, x: 0 });
      if (statsRefs.current.length > 0) gsap.set(statsRefs.current.filter(Boolean), { opacity: 1, y: 0, scale: 1 });
      if (imageRef.current) gsap.set(imageRef.current, { opacity: 1, rotateY: 0, x: 0 });
      
      // Animate title
      if (titleRef.current && sectionRef.current) {
        gsap.fromTo(
          titleRef.current,
          { 
            opacity: 0,
            y: -50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate content
      if (contentRef.current && sectionRef.current) {
        gsap.fromTo(
          contentRef.current,
          { 
            opacity: 0,
            x: language === "ar" ? 50 : -50
          },
          {
            opacity: 1,
            x: 0,
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

      // Animate stats
      if (statsRefs.current.length > 0 && sectionRef.current) {
        gsap.fromTo(
          statsRefs.current.filter(Boolean),
          { 
            opacity: 0,
            y: 40,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate image with 3D effect
      if (imageRef.current && sectionRef.current) {
        gsap.fromTo(
          imageRef.current,
          { 
            opacity: 0,
            rotateY: 25,
            x: language === "ar" ? -100 : 100
          },
          {
            opacity: 1,
            rotateY: 0,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate blobs
      const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current].filter(Boolean);
      if (blobs.length > 0) {
        blobs.forEach((blob, index) => {
          gsap.to(blob, {
            y: "random(-30, 30)",
            x: "random(-30, 30)",
            scale: "random(0.9, 1.1)",
            duration: "random(5, 8)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.5,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  const stats = [
    { icon: Calendar, labelKey: "establishmentStat1", gradient: "from-[#035938] to-[#52BC88]" },
    { icon: MapPin, labelKey: "establishmentStat2", gradient: "from-[#52BC88] to-[#F1BC28]" },
    { icon: Users, labelKey: "establishmentStat3", gradient: "from-[#F1BC28] to-[#035938]" },
    { icon: Award, labelKey: "establishmentStat4", gradient: "from-[#035938] to-[#52BC88]" },
    { icon: Zap, labelKey: "establishmentStat5", gradient: "from-[#52BC88] to-[#F1BC28]" },
    { icon: Globe, labelKey: "establishmentStat6", gradient: "from-[#F1BC28] to-[#035938]" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-br from-[#035938] via-[#024a2e] to-[#035938] overflow-hidden"
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      {/* Animated gradient blobs */}
      <div
        ref={blob1Ref}
        className="absolute top-20 left-20 w-96 h-96 bg-[#52BC88] rounded-full mix-blend-overlay filter blur-3xl opacity-20"
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#F1BC28] rounded-full mix-blend-overlay filter blur-3xl opacity-20"
      />
      <div
        ref={blob3Ref}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#52BC88] rounded-full mix-blend-overlay filter blur-3xl opacity-10"
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#52BC88]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F1BC28]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl mb-16 text-center text-white fw-heading"
          style={{
            fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
          }}
        >
          {t("aboutEstablishmentTitle")}
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Left - Content (3 columns) */}
          <div ref={contentRef} className="lg:col-span-3 space-y-6">
            {/* Paragraph 1 - Large Featured Card */}
            <div className="group relative backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#F1BC28]/20 to-transparent rounded-tr-3xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <p
                className="relative z-10 text-lg md:text-xl text-white/95 leading-relaxed mb-6"
                style={{
                  fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
                }}
              >
                {t("aboutEstablishmentPara1")}
              </p>
              
              <p
                className="relative z-10 text-lg md:text-xl text-white/95 leading-relaxed"
                style={{
                  fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
                }}
              >
                {t("aboutEstablishmentPara2")}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#52BC88] via-[#F1BC28] to-[#52BC88] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>

            {/* Paragraph 3 - Highlighted Card */}
            <div className="group relative backdrop-blur-xl bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#035938]/30 to-transparent rounded-br-3xl" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p
                  className="text-lg md:text-xl text-white fw-heading leading-relaxed"
                  style={{
                    fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
                  }}
                >
                  {t("aboutEstablishmentPara3")}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image (2 columns) */}
          <div className="lg:col-span-2 flex items-center justify-center" style={{ perspective: "1000px" }}>
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                alt="Reef Saudi Establishment"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/20"
                style={{
                  transformStyle: "preserve-3d",
                }}
              />
              
              {/* Image Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/90 rounded-2xl p-4 border border-white/50 shadow-xl">
                <p
                  className="text-[#035938] text-sm md:text-base fw-heading text-center"
                  style={{
                    fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
                  }}
                >
                  {t("establishmentImageCaption")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => { statsRefs.current[index] = el; }}
              className="group relative backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-3 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                
                <p
                  className="text-xs md:text-sm text-white/90"
                  style={{
                    fontFamily: language === "ar" ? "'Loew Next Arabic', sans-serif" : "inherit",
                  }}
                >
                  {t(stat.labelKey)}
                </p>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}