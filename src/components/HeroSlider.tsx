import { useState, useEffect, useRef, useMemo, type ReactElement } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

export function HeroSlider() {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1590861840897-06c6da1c8ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMHJ1cmFsJTIwZmFybXxlbnwxfHx8fDE3NjMwMzEyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "hero1Title",
      desc: "hero1Desc",
      buttons: [
        { text: "hero1Btn1", primary: false },
        { text: "hero1Btn2", primary: true },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1597816760638-406d7271105c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwZmFybXxlbnwxfHx8fDE3NjI5NjA4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "hero2Title",
      desc: "hero2Desc",
      buttons: [
        { text: "hero2Btn1", primary: false },
        { text: "hero2Btn2", primary: true },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW58ZW58MXx8fHwxNzYzMDMxMjc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "hero3Title",
      desc: "hero3Desc",
      buttons: [{ text: "hero3Btn", primary: true }],
    },
    {
      image:
        "https://images.unsplash.com/photo-1662815094316-917f52876324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXJzJTIwaGFydmVzdGluZyUyMGNyb3BzfGVufDF8fHx8MTc2MzAzMTI3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "hero4Title",
      desc: "hero4Desc",
      buttons: [
        { text: "hero4Btn1", primary: false },
        { text: "hero4Btn2", primary: true },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1762224691327-8990c66ab57f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBsYW5kc2NhcGUlMjB2YWxsZXl8ZW58MXx8fHwxNjMwMzEyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "hero5Title",
      desc: "hero5Desc",
      buttons: [
        { text: "hero5Btn1", primary: false },
        { text: "hero5Btn2", primary: true },
      ],
    },
  ];

  // Auto-play slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Animate content on slide change
  useEffect(() => {
    const tl = gsap.timeline();

    // Fade out current content - add null checks
    const elements = [
      titleRef.current,
      descRef.current,
      buttonsRef.current,
      badgeRef.current,
    ].filter(Boolean);

    if (elements.length > 0) {
      tl.to(elements, {
        opacity: 0,
        y: 30,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
      });
    }

    // Animate new content in
    if (badgeRef.current) {
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
        "+=0.2",
      );
    }

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      );
    }

    if (descRef.current) {
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.5",
      );
    }

    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll("button");
      if (buttons.length > 0) {
        tl.fromTo(
          buttons,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        );
      }
    }

    // Animate overlay with gradient wave
    if (overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0.5 },
        { opacity: 1, duration: 1, ease: "power2.inOut" },
      );
    }
  }, [currentSlide]);

  // Parallax effect on scroll for current slide only
  useEffect(() => {
    const currentImage = imageRef.current[currentSlide];

    if (currentImage && slideRef.current) {
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: slideRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (currentImage) {
            gsap.to(currentImage, {
              y: self.progress * 100,
              duration: 0,
              ease: "none",
            });
          }
        },
      });

      return () => {
        scrollTriggerInstance.kill();
      };
    }
  }, [currentSlide]);

  // Magnetic hover effect for buttons
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Compute title: highlight 2nd word normally, but for slide 0 highlight 2nd+3rd as a run
  const highlightedTitle = useMemo(() => {
    const text = t(slides[currentSlide].title) || "";
    const parts = text.split(/(\s+)/);
    const result: Array<string | number | ReactElement> = [];

    // Build set of word indexes to highlight.
    // Rules:
    // - slide 0: highlight 2nd and 3rd words
    // - slides 2,3,4: highlight 1st word
    // - otherwise: highlight 2nd word
    const highlightSet = new Set<number>();
    if (currentSlide === 0) {
      // highlight first three words for slide 0
      highlightSet.add(1);
      highlightSet.add(2);
      highlightSet.add(3);
    } else if (currentSlide === 1) {
      // slide 1: highlight both 1st and 2nd words
      highlightSet.add(1);
      highlightSet.add(2);
    } else if ([2, 3, 4].includes(currentSlide)) {
      highlightSet.add(1);
    } else {
      highlightSet.add(2);
    }

    let wordIndex = 0;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      if (/^\s+$/.test(part)) {
        // preserve whitespace
        result.push(part);
        continue;
      }

      wordIndex += 1;
      const isHighlighted = highlightSet.has(wordIndex);

      if (isHighlighted) {
        // If this is the start of a highlighted run (previous word not highlighted),
        // collect all consecutive highlighted words (including intermediate whitespace)
        const prevHighlighted = highlightSet.has(wordIndex - 1);

        if (!prevHighlighted) {
          // start run
          let runText = part;
          let tempWordIndex = wordIndex;
          let k = i + 1;

          while (k < parts.length) {
            // if whitespace followed by a highlighted word, include both in run
            if (
              /^\s+$/.test(parts[k]) &&
              k + 1 < parts.length &&
              !/^\s+$/.test(parts[k + 1]) &&
              highlightSet.has(tempWordIndex + 1)
            ) {
              runText += parts[k] + parts[k + 1];
              tempWordIndex += 1;
              k += 2;
            } else {
              break;
            }
          }

          // advance outer loop index and wordIndex to end of run
          i = k - 1;
          wordIndex = tempWordIndex;

          // insert surrounding breaks and a single span for the whole run
          result.push(<br key={`pre-${currentSlide}-${i}`} />);
          result.push(
            <span
              key={`span-${currentSlide}-${i}`}
              className=""
              style={
                {
                  background: "linear-gradient(90deg,#F1BC28,#FFFFFF)",
                  WebkitBackgroundClip: "text" as any,
                  backgroundClip: "text" as any,
                  color: "transparent",
                } as React.CSSProperties
              }
            >
              {runText}
            </span>,
          );
          result.push(<br key={`post-${currentSlide}-${i}`} />);
        } else {
          // previous was highlighted and already handled as part of its run — skip
          continue;
        }
      } else {
        result.push(part);
      }
    }

    return result;
  }, [currentSlide, language, t]);

  return (
    <section
      className="relative h-screen overflow-hidden -mt-20 pt-20"
      ref={slideRef}
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-[5]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#52BC88] rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F1BC28] rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#035938] rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image with Ken Burns effect */}
            <div
              className="absolute inset-0 overflow-hidden"
              ref={(el) => {
                if (el) imageRef.current[index] = el;
              }}
            >
              <ImageWithFallback
                src={slide.image}
                alt={t(slide.title)}
                className="w-full h-full object-cover scale-105"
                style={{
                  animation:
                    index === currentSlide
                      ? "kenBurns 6000ms ease-out forwards"
                      : "none",
                }}
              />
              {/* Dynamic gradient overlay */}
              <div
                ref={overlayRef}
                className="absolute inset-0 bg-gradient-to-r from-[#052F2A]/95 via-[#052F2A]/70 to-transparent"
                style={{
                  background: `linear-gradient(${language === "ar" ? "270deg" : "90deg"}, 
                    rgba(5, 47, 42, 0.95) 0%, 
                    rgba(5, 47, 42, 0.8) 40%, 
                    rgba(5, 47, 42, 0.4) 70%,
                    transparent 100%)`,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
              <div
                className={`max-w-[1440px] mx-auto px-8 w-full ${language === "ar" ? "rtl" : "ltr"}`}
              >
                <div
                  ref={contentRef}
                  className={`${language === "ar" ? "text-right ml-auto mr-0" : "text-left mr-auto ml-0"}`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {/* Animated badge */}
                  {/* <div
                    ref={badgeRef}
                    className="inline-block mb-5 px-4 py-1.5 bg-[#F1BC28]/20 border border-[#F1BC28]/40 rounded-full text-[#F1BC28] text-xs backdrop-blur-md relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    <span className="relative z-10 font-medium">
                      {t("home")}
                    </span>
                  </div> */}

                  {/* Animated title with 3D effect */}
                  <h1
                    ref={titleRef}
                    className="text-white mb-5 leading-tight text-5xl md:text-6xl lg:text-7xl font-semibold hero-title"
                    style={{
                      textShadow:
                        "0 10px 30px rgba(0,0,0,0.5), 0 0 60px rgba(241, 188, 40, 0.2)",
                      transform: "perspective(1000px)",
                    }}
                  >
                    {highlightedTitle}
                  </h1>

                  {/* Animated description */}
                  <p
                    ref={descRef}
                    className="text-white/90 text-lg mb-8 max-w-2xl leading-relaxed font-normal"
                    style={{
                      textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    {t(slides[currentSlide].desc)}
                  </p>

                  {/* Animated buttons with magnetic effect */}
                  <div ref={buttonsRef} className="flex gap-3 flex-wrap">
                    {slides[currentSlide].buttons.map((button, btnIndex) => (
                      <button
                        key={btnIndex}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className={`group relative px-6 py-3 ${
                          button.primary
                            ? "bg-[#F1BC28] text-[#052F2A]"
                            : "bg-white/10 backdrop-blur-md border-2 border-white/30 text-white"
                        } rounded-full transition-all duration-300 flex items-center gap-3 overflow-hidden`}
                        style={{
                          boxShadow: button.primary
                            ? "0 10px 40px rgba(241, 188, 40, 0.3)"
                            : "0 10px 40px rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {/* Shine effect */}
                        <div className="absolute  hero-nav-arrow  inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                        <span className="relative z-10 font-medium">
                          {t(button.text)}
                        </span>
                        <ArrowRight
                          className={`relative z-10 w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                            language === "ar"
                              ? "rotate-180 group-hover:-translate-x-1"
                              : "group-hover:translate-x-1"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated navigation arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }}
        className="absolute hero-nav-arrow  left-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7 text-white group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1.1,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }}
        className="absolute hero-nav-arrow  right-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7 text-white group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Animated slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            onMouseEnter={(e) => {
              if (index !== currentSlide) {
                gsap.to(e.currentTarget, {
                  scale: 1.2,
                  duration: 0.3,
                  ease: "back.out(1.7)",
                });
              }
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-14 bg-[#F1BC28] shadow-lg shadow-[#F1BC28]/50"
                : "w-10 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-scroll" />
        </div>
      </div>

      <style>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
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

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        /* Force larger hero title on big screens (overrides missing tailwind utilities) */
        @media (min-width: 1024px) {
          .hero-title {
            font-size: 100px !important;
            line-height: 1.3 !important;
            max-width: 995px !important;
          }
        }

          /* Hide nav arrows on small/mobile screens in case utility classes are missing */
          @media (max-width: 639px) {
            .hero-nav-arrow {
              display: none !important;
            }
          }

        @media (min-width: 1280px) {
          .hero-title {
            font-size: 90px !important;
            line-height: 1.3 !important;
            max-width: 995px !important;
          }
        }
      `}</style>
    </section>
  );
}
