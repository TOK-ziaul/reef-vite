import { useEffect, useRef } from "react";
import { FileText, Download, TrendingUp, Users, DollarSign } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutAnnualReports() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const reports = [
    {
      year: "2023",
      titleKey: "annualReport2023",
      stats: [
        { icon: <Users className="w-5 h-5" />, labelKey: "beneficiaries", value: "15,000+" },
        { icon: <DollarSign className="w-5 h-5" />, labelKey: "funding", value: "450M SAR" },
        { icon: <TrendingUp className="w-5 h-5" />, labelKey: "growth", value: "35%" },
      ],
    },
    {
      year: "2022",
      titleKey: "annualReport2022",
      stats: [
        { icon: <Users className="w-5 h-5" />, labelKey: "beneficiaries", value: "11,000+" },
        { icon: <DollarSign className="w-5 h-5" />, labelKey: "funding", value: "320M SAR" },
        { icon: <TrendingUp className="w-5 h-5" />, labelKey: "growth", value: "28%" },
      ],
    },
    {
      year: "2021",
      titleKey: "annualReport2021",
      stats: [
        { icon: <Users className="w-5 h-5" />, labelKey: "beneficiaries", value: "8,500+" },
        { icon: <DollarSign className="w-5 h-5" />, labelKey: "funding", value: "210M SAR" },
        { icon: <TrendingUp className="w-5 h-5" />, labelKey: "growth", value: "42%" },
      ],
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
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="annual-reports"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white to-[#F9F7EF] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#52BC88]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F1BC28]/5 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
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

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reports.map((report, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group perspective-1000"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Year Badge */}
                <div className="absolute -top-4 left-8 px-6 py-2 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-full font-bold shadow-lg">
                  {report.year}
                </div>

                {/* Document Icon */}
                <div className="w-20 h-20 bg-[#F1BC28]/20 rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-500">
                  <FileText className="w-10 h-10 text-[#035938]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#035938] mb-6">
                  {t(report.titleKey)}
                </h3>

                {/* Stats */}
                <div className="space-y-4 mb-8">
                  {report.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex items-center justify-between p-3 bg-[#F9F7EF] rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-[#035938]">{stat.icon}</div>
                        <span className="text-sm text-[#052F2A]/70">
                          {t(stat.labelKey)}
                        </span>
                      </div>
                      <span className="font-bold text-[#035938]">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Download Button */}
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#035938] text-white rounded-xl hover:bg-[#52BC88] transition-all duration-300 group-hover:shadow-lg">
                  <Download className="w-5 h-5" />
                  {t("downloadReport")}
                </button>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-[#52BC88]/5 to-transparent rounded-tl-full" />
              </div>
            </div>
          ))}
        </div>

        {/* All Reports Link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#035938] text-[#035938] rounded-xl hover:bg-[#035938] hover:text-white transition-all duration-300 hover:shadow-lg"
          >
            <FileText className="w-5 h-5" />
            {t("viewAllReports")}
          </a>
        </div>
      </div>
    </section>
  );
}
