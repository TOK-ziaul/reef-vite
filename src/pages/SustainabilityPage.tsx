import React, { useRef, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight } from "lucide-react";

export const SustainabilityPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const heroImageRef = useRef<HTMLDivElement>(null);
  const partnersCarouselRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [stepPx, setStepPx] = useState(0);
  const GAP_PX = 24;

  // Partners data
  const partners = [
    {
      name: t("partnerNadec"),
      desc: t("partnerNadecDesc"),
      gradient: "from-[#035938] to-[#52BC88]",
      image:
        "https://images.unsplash.com/photo-1761455953103-788d1018f174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBmYXJtaW5nfGVufDF8fHx8MTc3MDcyMTM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("partnerDan"),
      desc: t("partnerDanDesc"),
      gradient: "from-[#52BC88] to-[#035938]",
      image:
        "https://images.unsplash.com/photo-1761455953103-788d1018f174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBmYXJtaW5nfGVufDF8fHx8MTc3MDcyMTM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("partnerRivana"),
      desc: t("partnerRivanaDesc"),
      gradient: "from-[#035938] to-[#52BC88]",
      image:
        "https://images.unsplash.com/photo-1761455953103-788d1018f174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBmYXJtaW5nfGVufDF8fHx8MTc3MDcyMTM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("partnerJahez"),
      desc: t("partnerJahezDesc"),
      gradient: "from-[#52BC88] to-[#035938]",
      image:
        "https://images.unsplash.com/photo-1629410486560-d4da23c19905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjByZXN0YXVyYW50JTIwc2VydmljZXxlbnwxfHx8fDE3NzA3MjEzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("partnerKFU"),
      desc: t("partnerKFUDesc"),
      gradient: "from-[#035938] to-[#52BC88]",
      image:
        "https://images.unsplash.com/photo-1763328446274-c5ae7c07d403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzcwNzIwNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("partnerAlhasa"),
      desc: t("partnerAlhasaDesc"),
      gradient: "from-[#52BC88] to-[#035938]",
      image:
        "https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvb3BlcmF0aW9uJTIwcGFydG5lcnNoaXAlMjBtZWV0aW5nfGVufDF8fHx8MTc3MDcyMTM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("partnerFateh"),
      desc: t("partnerFatehDesc"),
      gradient: "from-[#035938] to-[#52BC88]",
      image:
        "https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvb3BlcmF0aW9uJTIwcGFydG5lcnNoaXAlMjBtZWV0aW5nfGVufDF8fHx8MTc3MDcyMTM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("partnerShabab"),
      desc: t("partnerShababDesc"),
      gradient: "from-[#52BC88] to-[#035938]",
      image:
        "https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvb3BlcmF0aW9uJTIwcGFydG5lcnNoaXAlMjBtZWV0aW5nfGVufDF8fHx8MTc3MDcyMTM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("partnerCateron"),
      desc: t("partnerCateronDesc"),
      gradient: "from-[#035938] to-[#52BC88]",
      image:
        "https://images.unsplash.com/photo-1629410486560-d4da23c19905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjByZXN0YXVyYW50JTIwc2VydmljZXxlbnwxfHx8fDE3NzA3MjEzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("partnerIrrigation"),
      desc: t("partnerIrrigationDesc"),
      gradient: "from-[#52BC88] to-[#035938]",
      image:
        "https://images.unsplash.com/photo-1743742566136-d5e99d252e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwc3lzdGVtJTIwd2F0ZXIlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NzA3MjEzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("partnerCoopCouncil"),
      desc: t("partnerCoopCouncilDesc"),
      gradient: "from-[#035938] to-[#52BC88]",
      image:
        "https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvb3BlcmF0aW9uJTIwcGFydG5lcnNoaXAlMjBtZWV0aW5nfGVufDF8fHx8MTc3MDcyMTM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("partnerTVTC"),
      desc: t("partnerTVTCDesc"),
      gradient: "from-[#52BC88] to-[#035938]",
      image:
        "https://images.unsplash.com/photo-1763328446274-c5ae7c07d403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzcwNzIwNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const totalSlides = partners.length;
  const maxSlide = Math.max(0, totalSlides - cardsPerView);

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!partnersCarouselRef.current) return;
    const updateStep = () => {
      const containerWidth = partnersCarouselRef.current?.offsetWidth ?? 0;
      const gapTotal = (cardsPerView - 1) * GAP_PX;
      const slideWidthPx = (containerWidth - gapTotal) / cardsPerView;
      setStepPx(slideWidthPx + GAP_PX);
    };
    updateStep();
    const ro = new ResizeObserver(updateStep);
    ro.observe(partnersCarouselRef.current);
    return () => ro.disconnect();
  }, [cardsPerView]);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [maxSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Parallax effect for hero image
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (heroImageRef.current) {
      const scale = 1 + scrollY * 0.0005;
      heroImageRef.current.style.transform = `scale(${Math.min(scale, 1.3)})`;
    }
  }, [scrollY]);

  return (
    <div
      className={`min-h-screen bg-[#F9F7EF] ${isRTL ? "rtl font-loew" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* Background Image with Zoom Effect */}
        <div
          ref={heroImageRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-100"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1762098069270-66f50cdb1a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW4lMjBmaWVsZCUyMG5hdHVyZXxlbnwxfHx8fDE3NzA3MTY2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#035938]/85 via-[#035938]/75 to-[#035938]/90" />

          {/* Animated Gradient Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#52BC88]/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-20 w-80 h-80 bg-[#F1BC28]/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
            <div className="text-center">
              {/* Main Title with Animation */}
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
                style={{
                  textShadow: "0 4px 30px rgba(0,0,0,0.4)",
                  animation: "fadeInUp 0.8s ease-out",
                }}
              >
                {t("sustainabilityHeroTitle")}
              </h1>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 50C240 20 480 20 720 50C960 80 1200 80 1440 50V100H0V50Z"
              fill="#F9F7EF"
            />
          </svg>
        </div>
      </section>

      {/* Model Farms Project Section */}
      <section className="relative -mt-1 py-20 bg-gradient-to-b from-[#F9F7EF] to-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#035938]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-[#F1BC28]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
          {/* Section Title */}
          <div
            className="mb-16"
            style={{
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#035938] mb-6">
              {t("modelFarmsTitle")}
            </h2>
          </div>

          {/* Hero Image with Floating Stats */}
          <div
            className="relative mb-32"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.2s backwards",
            }}
          >
            {/* Large Hero Image */}
            <div className="relative h-[600px] rounded-[60px] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1769259046907-a5165e978af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmVlbmhvdXNlJTIwYWdyaWN1bHR1cmUlMjB0ZWNobm9sb2d5JTIwZmFybXxlbnwxfHx8fDE3NzA3MTcyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Model Farm"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#035938]/70 via-[#035938]/50 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-8 right-8 backdrop-blur-md bg-white/90 px-8 py-4 rounded-full border border-white/40">
                <span className="text-[#035938] font-bold text-xl">
                  {t("modelFarmsBadge")}
                </span>
              </div>

              {/* Achievement Title Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t("modelFarmsAchievementTitle")}
                </h3>
              </div>
            </div>

            {/* Floating Stats Cards - Positioned below the image */}
            <div className="absolute -bottom-20 left-0 right-0 px-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {/* Stat 1 */}
                <div className="group">
                  <div className="backdrop-blur-xl bg-gradient-to-br from-[#035938]/95 to-[#52BC88]/95 p-6 rounded-[30px] border border-white/40 shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-500">
                    <div className="text-[#F1BC28] text-4xl font-bold mb-1">
                      5
                    </div>
                    <div className="text-white text-sm">
                      {t("modelFarmsRegions")}
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="group">
                  <div className="backdrop-blur-xl bg-gradient-to-br from-[#52BC88]/95 to-[#F1BC28]/95 p-6 rounded-[30px] border border-white/40 shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-500">
                    <div className="text-white text-4xl font-bold mb-1">43</div>
                    <div className="text-[#035938] text-sm font-semibold">
                      {t("modelFarmsCount")}
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="group">
                  <div className="backdrop-blur-xl bg-gradient-to-br from-[#F1BC28]/95 to-[#035938]/95 p-6 rounded-[30px] border border-white/40 shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-500">
                    <div className="text-white text-4xl font-bold mb-1">
                      748
                    </div>
                    <div className="text-white text-sm">
                      {t("modelFarmsTrainees")}
                    </div>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="group">
                  <div className="backdrop-blur-xl bg-gradient-to-br from-[#035938]/95 to-[#F1BC28]/95 p-6 rounded-[30px] border border-white/40 shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-500">
                    <div className="text-[#F1BC28] text-4xl font-bold mb-1">
                      20
                    </div>
                    <div className="text-white text-sm">
                      {t("modelFarmsWorkshops")}
                    </div>
                  </div>
                </div>

                {/* Stat 5 */}
                <div className="group">
                  <div className="backdrop-blur-xl bg-gradient-to-br from-[#52BC88]/95 to-[#035938]/95 p-6 rounded-[30px] border border-white/40 shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-500">
                    <div className="text-white text-4xl font-bold mb-1">
                      305
                    </div>
                    <div className="text-white text-sm">
                      {t("modelFarmsDonums")}
                    </div>
                  </div>
                </div>

                {/* Stat 6 */}
                <div className="group">
                  <div className="backdrop-blur-xl bg-gradient-to-br from-[#F1BC28]/95 to-[#52BC88]/95 p-6 rounded-[30px] border border-white/40 shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-500">
                    <div className="text-[#035938] text-4xl font-bold mb-1">
                      726
                    </div>
                    <div className="text-[#035938] text-sm font-semibold">
                      {t("modelFarmsVisits")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content with Flowing Layout */}
          <div
            className="mt-20 space-y-8"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.4s backwards",
            }}
          >
            {/* Two Column Text */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative">
                {/* Decorative Element */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#52BC88]/20 to-transparent rounded-full blur-2xl" />
                <p
                  className="text-lg md:text-xl leading-relaxed text-[#052F2A] relative"
                  style={{
                    lineHeight: "2",
                    textAlign: "justify",
                  }}
                >
                  {t("modelFarmsP1")}
                </p>
              </div>

              <div className="relative">
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#F1BC28]/20 to-transparent rounded-full blur-2xl" />
                <p
                  className="text-lg md:text-xl leading-relaxed text-[#052F2A] relative"
                  style={{
                    lineHeight: "2",
                    textAlign: "justify",
                  }}
                >
                  {t("modelFarmsP2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact and Statistics Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-bl from-[#F1BC28]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#52BC88]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
          {/* Section Header */}
          <div
            className="text-center mb-16"
            style={{
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#035938] mb-4">
              {t("impactStatsTitle")}
            </h2>
            <p className="text-2xl md:text-3xl text-[#52BC88] font-medium mb-6">
              {t("impactStatsSubtitle")}
            </p>
            <p
              className="text-lg text-[#052F2A] max-w-4xl mx-auto"
              style={{ lineHeight: "2" }}
            >
              {t("impactStatsIntro")}
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-20">
            {/* 1. Training and Capacity Building */}
            <div
              className="relative"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.2s backwards",
              }}
            >
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#035938] mb-12">
                {t("trainingCapacityTitle")}
              </h3>

              {/* Hero Stats with Image Background */}
              <div className="relative rounded-[50px] overflow-hidden mb-12">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1755548413928-4aaeba7c740e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBlZHVjYXRpb24lMjBzZW1pbmFyJTIwcGVvcGxlJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcwNzE4NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Training"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#035938]/95 via-[#035938]/90 to-[#035938]/85" />
                </div>

                <div className="relative z-10 p-8 md:p-12 lg:p-16">
                  <div className="grid md:grid-cols-3 w-fit mx-auto gap-10">
                    {/* Stat 1 */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 max-w-[220px]">
                      <div className="text-3xl md:text-5xl font-bold text-[#F1BC28] mb-3">
                        50
                      </div>
                      <div className="text-white text-lg">
                        {t("trainingCourses")}
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="backdrop-blur-lg bg-gradient-to-br from-[#F1BC28]/90 to-[#F1BC28]/70 rounded-3xl p-8 border border-white/30 max-w-[220px]">
                      <div className="text-3xl md:text-5xl font-bold text-[#035938] mb-3">
                        1546
                      </div>
                      <div className="text-[#035938] text-lg font-semibold">
                        {t("trainingParticipants")}
                      </div>
                    </div>

                    {/* Gender Breakdown */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 max-w-[220px]">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-3xl md:text-3xl font-bold text-white">
                            1288
                          </div>
                          <div className="text-white/80 text-sm">
                            {t("trainingMen")}
                          </div>
                        </div>
                      </div>
                      <div className="h-px bg-white/20 my-4" />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl md:text-3xl font-bold text-[#F1BC28]">
                            258
                          </div>
                          <div className="text-white/80 text-lg">
                            {t("trainingWomen")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fields Grid */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-[#035938] mb-6">
                  {t("trainingFieldsTitle")}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { field: t("trainingBeekeeping"), count: 140 },
                    { field: t("trainingRainfed"), count: 96 },
                    { field: t("trainingLivestock"), count: 102 },
                    { field: t("trainingFisheries"), count: 171 },
                    { field: t("trainingValueAdded"), count: 139 },
                    { field: t("trainingCooperatives"), count: 221 },
                    { field: t("trainingExtension"), count: 35 },
                    { field: t("trainingCapacityBuilding"), count: 63 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="backdrop-blur-sm bg-gradient-to-br from-[#F9F7EF] to-white p-6 rounded-3xl border border-[#52BC88]/20 hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="text-3xl font-bold text-[#035938] mb-1">
                        {item.count}
                      </div>
                      <div className="text-sm text-[#052F2A] leading-snug">
                        {item.field}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-2xl font-bold text-[#035938] mb-6">
                  {t("trainingCategoriesTitle")}
                </h4>
                <div className="grid md:grid-cols-2 gap-6 w-fit">
                  <div className="backdrop-blur-lg bg-gradient-to-br from-[#035938] to-[#52BC88] p-8 rounded-3xl text-white max-w-[220px]">
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      410
                    </div>
                    <div className="text-xl">{t("trainingEmployees")}</div>
                  </div>

                  <div className="backdrop-blur-lg bg-gradient-to-br from-[#F1BC28] to-[#F1BC28]/80 p-8 rounded-3xl max-w-[220px]">
                    <div className="text-3xl md:text-4xl font-bold text-[#035938] mb-2">
                      654
                    </div>
                    <div className="text-xl text-[#035938]">
                      {t("trainingFarmers")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Study Tours */}
            <div
              className="relative"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.4s backwards",
              }}
            >
              {/* Section Header */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#035938] mb-6">
                {t("studyToursTitle")}
              </h3>
              <p
                className="text-lg text-[#052F2A] mb-12 max-w-3xl"
                style={{ lineHeight: "2" }}
              >
                {t("studyToursDesc")}
              </p>

              {/* Diagonal Split Design */}
              <div className="relative">
                {/* Main Container with Diagonal Split */}
                <div className="grid lg:grid-cols-5 gap-6">
                  {/* Left Side - Stats Column (2/5 width) */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Main Total Stat - Vertical Card */}
                    <div className="backdrop-blur-xl bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-[40px] p-10 text-white shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden">
                      <img
                        src="/tours/1.jpg"
                        alt="Study Tours"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30"
                      />
                      <div className="text-center">
                        <div className="inline-block mb-6">
                          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/40">
                            <span className="text-3xl font-bold text-[#F1BC28]">
                              📊
                            </span>
                          </div>
                        </div>
                        <div className="text-3xl md:text-5xl font-bold mb-4 text-[#F1BC28]">
                          164
                        </div>
                        <div className="text-2xl font-semibold mb-4">
                          {t("studyToursTotal")}
                        </div>
                        <div className="h-px bg-white/30 my-6"></div>
                        <p className="text-sm opacity-90 leading-relaxed">
                          {t("studyToursDesc")}
                        </p>
                      </div>
                    </div>

                    {/* Breakdown Cards - Stacked */}
                    <div className="space-y-4">
                      <div className="backdrop-blur-xl bg-gradient-to-r from-[#52BC88] to-[#52BC88]/80 rounded-[30px] p-8 text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <img
                          src="/tours/4.jpg"
                          alt="Study Tours"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40"
                        />
                        <div className="relative z-10 flex items-center justify-between">
                          <div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">
                              111
                            </div>
                            <div className="text-base">
                              {t("studyToursInternal")}
                            </div>
                          </div>
                          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-lg">
                            <span className="text-3xl">🏠</span>
                          </div>
                        </div>
                      </div>

                      <div className="backdrop-blur-xl bg-gradient-to-r from-[#F1BC28] to-[#F1BC28]/80 rounded-[30px] p-8 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <img
                          src="/tours/3.jpg"
                          alt="Study Tours"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40"
                        />
                        <div className="relative z-10 flex items-center justify-between">
                          <div>
                            <div className="text-3xl md:text-4xl font-bold text-[#035938] mb-2">
                              53
                            </div>
                            <div className="text-base text-[#035938]">
                              {t("studyToursExternal")}
                            </div>
                          </div>
                          <div className="w-16 h-16 bg-[#035938]/20 rounded-2xl flex items-center justify-center">
                            <span className="text-3xl">✈️</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Image Column (3/5 width) */}
                  <div className="lg:col-span-3">
                    {/* Large Image with Overlapping Badge */}
                    <div className="relative h-full min-h-[600px] rounded-[50px] overflow-hidden group shadow-2xl">
                      <img
                        src="/tours/2.jpg"
                        alt="Study Tours"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />

                      {/* Gradient Overlays for depth */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#035938]/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-bl from-[#F1BC28]/20 via-transparent to-transparent" />

                      {/* Floating Year Badge */}
                      <div className="absolute top-8 right-8 backdrop-blur-xl bg-white/95 px-10 py-5 rounded-full border-4 border-white/60 shadow-2xl">
                        <span className="text-[#035938] font-bold text-3xl">
                          2024
                        </span>
                      </div>

                      {/* Bottom Info Bar */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="backdrop-blur-xl bg-gradient-to-r from-[#035938]/95 to-[#52BC88]/95 rounded-[30px] p-6 border border-white/40">
                          <div className="grid grid-cols-2 gap-4 text-white">
                            <div>
                              <div className="text-sm opacity-80 mb-1">
                                داخلية
                              </div>
                              <div className="text-3xl font-bold text-[#F1BC28]">
                                111
                              </div>
                            </div>
                            <div>
                              <div className="text-sm opacity-80 mb-1">
                                خارجية
                              </div>
                              <div className="text-3xl font-bold text-[#F1BC28]">
                                53
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-[#F9F7EF] to-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-[#035938]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#F1BC28]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
          {/* Section Header */}
          <div
            className="mb-12"
            style={{
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#035938] mb-6">
              {t("partnershipsTitle")}
            </h2>
            <p
              className="text-lg text-[#052F2A] max-w-4xl"
              style={{ lineHeight: "2" }}
            >
              {t("partnershipsIntro")}
            </p>
          </div>

          {/* Hero Stats Banner */}
          <div
            className="relative h-[300px] rounded-[40px] overflow-hidden mb-12 group"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.2s backwards",
              boxShadow: "0 20px 60px rgba(3, 89, 56, 0.15)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwYWdyZWVtZW50JTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzA3MTg3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Strategic Partnerships"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#035938]/95 via-[#035938]/85 to-[#52BC88]/85" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <div className="text-7xl md:text-8xl font-bold mb-3 text-[#F1BC28]">
                  12
                </div>
                <div className="text-xl md:text-2xl font-medium">
                  {t("partnershipsSubtitle")}
                </div>
              </div>
            </div>
          </div>

          {/* Partners Carousel - Custom Modern & Professional */}
          <div
            className="mb-20 relative"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.3s backwards",
            }}
          >
            {/* Carousel Container */}
            <div ref={partnersCarouselRef} className="relative overflow-hidden">
              {/* Cards Track */}
              <div
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{
                  transform:
                    stepPx > 0
                      ? `translateX(${isRTL ? currentSlide * stepPx : -currentSlide * stepPx}px)`
                      : `translateX(${isRTL ? currentSlide * (100 / cardsPerView) : -currentSlide * (100 / cardsPerView)}%)`,
                }}
              >
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: `calc((100% - ${(cardsPerView - 1) * GAP_PX}px) / ${cardsPerView})`,
                    }}
                  >
                    <div className="relative backdrop-blur-xl rounded-[30px] overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl h-[200px] group">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-90`}
                      />

                      {/* Content */}
                      <div className="relative z-10 p-6 h-full flex flex-col text-white">
                        <h3 className="text-xl font-bold mb-3 leading-relaxed">
                          {partner.name}
                        </h3>
                        <p
                          className="text-white/90 text-sm leading-relaxed flex-1"
                          style={{ lineHeight: "1.8" }}
                        >
                          {partner.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "right-0 -mr-14" : "left-0 -ml-14"} w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#035938] hover:bg-[#035938] hover:text-white transition-all duration-300 z-10`}
                aria-label="Previous"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "left-0 -ml-14" : "right-0 -mr-14"} w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#035938] hover:bg-[#035938] hover:text-white transition-all duration-300 z-10`}
                aria-label="Next"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                  />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-8 h-3 bg-[#035938]"
                      : "w-3 h-3 bg-[#52BC88]/30 hover:bg-[#52BC88]/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Partnership Goals - Compact */}
          <div
            className="grid md:grid-cols-2 gap-6 mb-16"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.4s backwards",
            }}
          >
            <div>
              <h3 className="text-2xl font-bold text-[#035938] mb-4">
                {t("partnershipGoalsTitle")}
              </h3>
              <div className="space-y-3">
                {[t("partnershipGoal1"), t("partnershipGoal2")].map(
                  (goal, index) => (
                    <div
                      key={index}
                      className="backdrop-blur-lg bg-white p-4 rounded-2xl border-l-4 border-[#52BC88] shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <p
                        className="text-[#035938] text-sm leading-relaxed"
                        style={{ lineHeight: "1.8" }}
                      >
                        {goal}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#035938] mb-4">
                {t("partnershipImpactTitle")}
              </h3>
              <div className="space-y-3">
                {[t("partnershipImpact1"), t("partnershipImpact2")].map(
                  (impact, index) => (
                    <div
                      key={index}
                      className="backdrop-blur-lg bg-white p-4 rounded-2xl border-l-4 border-[#F1BC28] shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <p
                        className="text-[#035938] text-sm leading-relaxed"
                        style={{ lineHeight: "1.8" }}
                      >
                        {impact}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Additional Meetings - Compact */}
          <div
            className="backdrop-blur-md bg-gradient-to-br from-[#F9F7EF] to-white rounded-[40px] p-8 border border-[#52BC88]/20"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.5s backwards",
              boxShadow: "0 15px 40px rgba(3, 89, 56, 0.1)",
            }}
          >
            <h3 className="text-2xl font-bold text-[#035938] mb-6">
              {t("additionalMeetingsTitle")}
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                t("meetingPartner1"),
                t("meetingPartner2"),
                t("meetingPartner3"),
                t("meetingPartner4"),
                t("meetingPartner5"),
              ].map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#52BC88]/10 hover:border-[#52BC88]/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-[#035938] text-sm font-medium">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <a
            href="#interactive-map"
            className="flex items-center gap-2 px-8 py-4 bg-[#035938] !text-white rounded-xl hover:bg-[#52BC88] transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {t("exploreInteractiveMap")}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#support-programs"
            className="flex items-center gap-2 px-8 py-4 bg-yellow-400 text-[#035938] rounded-xl hover:bg-[#035938] hover:!text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {t("exploreSupportPrograms")}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />

      {/* Keyframes for animations */}
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

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        /* Custom Carousel Styles */
        .partners-carousel-container .slick-dots {
          bottom: -50px;
        }

        .partners-carousel-container .slick-dots li button:before {
          font-size: 12px;
          color: #52BC88;
          opacity: 0.5;
        }

        .partners-carousel-container .slick-dots li.slick-active button:before {
          color: #035938;
          opacity: 1;
        }

        .partners-carousel-container .slick-prev,
        .partners-carousel-container .slick-next {
          width: 50px;
          height: 50px;
          z-index: 10;
        }

        .partners-carousel-container .slick-prev {
          left: -60px;
        }

        .partners-carousel-container .slick-next {
          right: -60px;
        }

        .partners-carousel-container .slick-prev:before,
        .partners-carousel-container .slick-next:before {
          font-size: 40px;
          color: #035938;
          opacity: 0.7;
        }

        .partners-carousel-container .slick-prev:hover:before,
        .partners-carousel-container .slick-next:hover:before {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .partners-carousel-container .slick-prev {
            left: -30px;
          }

          .partners-carousel-container .slick-next {
            right: -30px;
          }
        }

        @media (max-width: 640px) {
          .partners-carousel-container .slick-prev {
            left: 10px;
          }

          .partners-carousel-container .slick-next {
            right: 10px;
          }

          .partners-carousel-container .slick-prev:before,
          .partners-carousel-container .slick-next:before {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
};
