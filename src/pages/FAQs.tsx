import React, { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const heroRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: t("faq1Q"), answer: t("faq1A") },
    { question: t("faq2Q"), answer: t("faq2A") },
    { question: t("faq3Q"), answer: t("faq3A") },
    { question: t("faq4Q"), answer: t("faq4A") },
    { question: t("faq5Q"), answer: t("faq5A") },
    { question: t("faq6Q"), answer: t("faq6A") },
    { question: t("faq7Q"), answer: t("faq7A") },
  ];

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

  return (
    <div
      className={`min-h-screen bg-[#FAFAF8] ${isRTL ? "rtl font-loew" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />

      {/* Hero Section with Parallax */}
      <section className="relative h-[85vh] min-h-[700px] overflow-hidden bg-gradient-to-br from-[#035938] via-[#024830] to-[#052F2A]">
        <div
          ref={heroRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1758519289152-d64650d13c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwNjQ2MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#035938]/97 via-[#024830]/95 to-[#052F2A]/97" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
            <div className="max-w-4xl">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1]"
                style={{
                  animation: "fadeInUp 0.6s ease-out",
                  textShadow: "0 2px 40px rgba(0,0,0,0.3)",
                }}
              >
                {t("faqsHeroTitle")}
              </h1>
            </div>
          </div>
        </div>

        {/* Modern Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 60L48 65C96 70 192 80 288 75C384 70 480 50 576 45C672 40 768 50 864 60C960 70 1056 80 1152 75C1248 70 1344 50 1392 40L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
              fill="#FAFAF8"
            />
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative -mt-2 pt-10 pb-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div
            className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl relative"
            style={{ animation: "fadeInUp 0.8s ease-out" }}
          >
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#035938]/10 to-[#52BC88]/10 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-[#035938] animate-pulse" />
                <span className="text-[#035938] font-semibold text-sm">
                  {t("faqsIntroBadge")}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-8 leading-tight">
                {t("faqsIntroHeading")}
              </h2>

              <p
                className={`text-lg md:text-xl leading-relaxed text-[#052F2A]/70 max-w-4xl ${isRTL ? "text-right" : "text-left"}`}
              >
                {t("faqsIntro")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative -mt-20 pb-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div
            className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl relative"
            style={{ animation: "fadeInUp 0.8s ease-out" }}
          >
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#035938]/10 to-[#52BC88]/10 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-[#035938] animate-pulse" />
                <span className="text-[#035938] font-semibold text-sm">
                  {t("faqsSectionBadge")}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-8 leading-tight">
                {t("faqsSectionTitle")}
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white to-gray-50/50 rounded-3xl border-2 border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#52BC88]/30"
                  >
                    <button
                      className="w-full flex items-start justify-between p-6 md:p-8 text-left transition-all duration-300"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <HelpCircle className="w-6 h-6 text-white" />
                        </div>
                        <h3
                          className={`text-xl md:text-2xl font-bold text-[#035938] leading-tight flex-1 pt-2 ${isRTL ? "text-right" : "text-left"}`}
                        >
                          {faq.question}
                        </h3>
                      </div>
                      <div
                        className={`w-10 h-10 rounded-xl bg-[#035938]/5 flex items-center justify-center flex-shrink-0 ${isRTL ? "mr-4" : "ml-4"} transition-all duration-300 group-hover:bg-[#52BC88]/10`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 text-[#035938] transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`px-6 md:px-8 pb-6 md:pb-8 ${isRTL ? "pr-[88px]" : "pl-[88px]"}`}
                      >
                        <div className="bg-gradient-to-br from-[#035938]/5 to-[#52BC88]/5 rounded-2xl p-6">
                          <p
                            className={`text-lg leading-relaxed text-[#052F2A]/80 whitespace-pre-line ${isRTL ? "text-right" : "text-left"}`}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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
