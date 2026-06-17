import { useEffect, useRef } from "react";
import { FileText, Download, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutAnnualReports() {
  const { t, language } = useLanguage();
  const { navigateTo } = useNavigation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const reports = [
    {
      year: "2023",
      titleKey: "annualReport2023",
      downloadUrl:
        "https://drive.google.com/file/d/1whG1Jjpkt6cUzREMOgmnvVPTsShGcG93/view?usp=drivesdk",
    },
    {
      year: "2022",
      titleKey: "annualReport2022",
      downloadUrl:
        "https://drive.google.com/file/d/1O-jevVe9AA0ZRlK3QrnA0Y7yzyGyvK3a/view?usp=drivesdk",
    },
    {
      year: "2021",
      titleKey: "annualReport2021",
      downloadUrl:
        "https://drive.google.com/file/d/1CIj2IQqBX9KUQPOUm8bdEq4uLdq7n5pG/view?usp=drivesdk",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            rotateY: -15,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.2,
          },
        );
      }
    });
  }, []);

  const handleDownload = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="annual-reports"
      ref={sectionRef}
      className="scroll-mt-24 relative py-24 bg-gradient-to-b from-white to-[#F9F7EF] overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#52BC88]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F1BC28]/5 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-[#035938]/10 rounded-full mb-4">
            <span className="text-[#035938] font-semibold">
              {t("transparency")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-6">
            {t("annualReports")}
          </h2>
          <p className="text-lg text-[#052F2A]/70 max-w-3xl mx-auto leading-relaxed">
            {t("annualReportsIntro")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reports.map((report, index) => (
            <div
              key={report.year}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group perspective-1000"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute -top-4 left-8 px-6 py-2 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-full font-bold shadow-lg">
                  {report.year}
                </div>

                <div className="w-20 h-20 bg-[#F1BC28]/20 rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-500">
                  <FileText className="w-10 h-10 text-[#035938]" />
                </div>

                <h3 className="text-xl font-bold text-[#035938] mb-8">
                  {t(report.titleKey)}
                </h3>

                <button
                  type="button"
                  onClick={() => handleDownload(report.downloadUrl)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#035938] text-white rounded-xl hover:bg-[#52BC88] transition-all duration-300 group-hover:shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  {t("downloadReport")}
                </button>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-[#52BC88]/5 to-transparent rounded-tl-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            onClick={() => navigateTo("about", undefined, "achievements")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#035938] text-white rounded-xl hover:bg-[#52BC88] transition-all duration-300 hover:shadow-lg"
          >
            {t("annualReportsCTA1")}
            <ArrowRight
              className={`w-5 h-5 ${language === "ar" ? "rotate-180" : ""}`}
            />
          </button>
          <button
            type="button"
            onClick={() => navigateTo("sectors")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#035938] text-[#035938] rounded-xl hover:bg-[#035938] hover:text-white transition-all duration-300 hover:shadow-lg"
          >
            {t("annualReportsCTA2")}
            <ArrowRight
              className={`w-5 h-5 ${language === "ar" ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
