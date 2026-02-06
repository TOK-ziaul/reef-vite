import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

export function AboutHero() {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, textRef.current].filter(Boolean);
    
    if (elements.length > 0) {
      gsap.fromTo(
        elements,
        { 
          opacity: 0,
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }

    // Zoom in/out animation for background image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { 
          scale: 1,
        },
        {
          scale: 1.15,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }

    // Parallax effect for image container on scroll
    if (imageContainerRef.current && heroRef.current) {
      gsap.to(imageContainerRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Animate blobs
    const blobs = [blob1Ref.current, blob2Ref.current].filter(Boolean);
    if (blobs.length > 0) {
      blobs.forEach((blob, index) => {
        gsap.to(blob, {
          y: "random(-30, 30)",
          x: "random(-30, 30)",
          scale: "random(0.9, 1.1)",
          duration: "random(4, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        });
      });
    }
  }, []);

  return (
    <section
      id="about-program"
      ref={heroRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with zoom and parallax animation */}
      <div ref={imageContainerRef} className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1758573644044-c30d09a8b06d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGFncmljdWx0dXJhbCUyMGRldmVsb3BtZW50JTIwZmFybWVycyUyMHdvcmtpbmd8ZW58MXx8fHwxNzY5Njc3MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Reef Saudi Agriculture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#035938]/90 via-[#035938]/80 to-[#035938]/90" />

      {/* Animated gradient blobs */}
      <div
        ref={blob1Ref}
        className="absolute top-20 left-10 w-96 h-96 bg-[#52BC88] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#F1BC28] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl text-white fw-heading"
        >
          {t("aboutPageTitle")}
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}