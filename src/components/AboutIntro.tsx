import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export function AboutIntro() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const para1Ref = useRef<HTMLDivElement>(null);
  const para2Ref = useRef<HTMLDivElement>(null);
  const para3Ref = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paragraphs = [
        para1Ref.current,
        para2Ref.current,
        para3Ref.current,
      ].filter(Boolean);

      if (paragraphs.length > 0 && sectionRef.current) {
        // Set initial state to be visible
        gsap.set(paragraphs, { opacity: 1, y: 0, scale: 1 });

        gsap.fromTo(
          paragraphs,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Animate blobs
      const blobs = [blob1Ref.current, blob2Ref.current].filter(Boolean);
      if (blobs.length > 0) {
        blobs.forEach((blob, index) => {
          gsap.to(blob, {
            y: "random(-40, 40)",
            x: "random(-40, 40)",
            scale: "random(0.9, 1.1)",
            duration: "random(6, 8)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 1,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-br from-[#F9F7EF] via-white to-[#F9F7EF] overflow-hidden border-2 border-red-500"
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
    >
      {/* Animated gradient blobs */}
      <div
        ref={blob1Ref}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#035938]/10 to-[#52BC88]/10 rounded-full blur-3xl"
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#F1BC28]/10 to-[#52BC88]/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div
              ref={para1Ref}
              className="group relative backdrop-blur-xl bg-white/80 rounded-2xl p-8 border border-[#035938]/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#035938]/5 to-[#52BC88]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#035938] to-[#52BC88] rounded-tl-2xl rounded-bl-2xl" />
              <p
                className="relative z-10 text-lg md:text-xl text-[#035938] leading-relaxed"
                style={{
                  fontFamily:
                    language === "ar"
                      ? "'Loew Next Arabic', sans-serif"
                      : "inherit",
                }}
              >
                {t("aboutIntroPara1")}
              </p>
            </div>

            <div
              ref={para2Ref}
              className="group relative backdrop-blur-xl bg-white/80 rounded-2xl p-8 border border-[#52BC88]/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88]/5 to-[#F1BC28]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#52BC88] to-[#F1BC28] rounded-tl-2xl rounded-bl-2xl" />
              <p
                className="relative z-10 text-lg md:text-xl text-[#035938] leading-relaxed"
                style={{
                  fontFamily:
                    language === "ar"
                      ? "'Loew Next Arabic', sans-serif"
                      : "inherit",
                }}
              >
                {t("aboutIntroPara2")}
              </p>
            </div>
          </div>

          {/* Right Column - Third Paragraph in Special Card with Image */}
          <div
            ref={para3Ref}
            className="group relative backdrop-blur-xl bg-gradient-to-br from-[#035938] to-[#024a2e] rounded-3xl overflow-hidden border border-[#52BC88]/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full"
          >
            {/* Main Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1674982046717-e5cc12a008dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBjcm9wcyUyMFNhdWRpJTIwQXJhYmlhfGVufDF8fHx8MTc2OTY4MTg4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Agricultural Development"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#035938]/80 via-[#024a2e]/70 to-[#035938]/80" />
            </div>

            {/* Decorative overlays */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/10 to-transparent rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#F1BC28]/20 to-transparent rounded-bl-3xl" />

            {/* Decorative Icon */}
            <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-[#F1BC28] to-[#52BC88] flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 shadow-xl">
              <svg
                className="w-12 h-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Bottom badge/label */}
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/30 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#52BC88] to-[#F1BC28] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-lg md:text-xl text-white/95 fw-heading"
                    style={{
                      fontFamily:
                        language === "ar"
                          ? "'Loew Next Arabic', sans-serif"
                          : "inherit",
                    }}
                  >
                    {language === "ar"
                      ? "التنمية الزراعية المستدامة"
                      : "Sustainable Agricultural Development"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
