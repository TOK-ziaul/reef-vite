import { useEffect, useRef } from "react";
import { DollarSign, GraduationCap, Users, TrendingUp, Award, Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutWhatWeOffer() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const offerings = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      titleKey: "financialSupport",
      descKey: "financialSupportDesc",
      color: "#F1BC28",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      titleKey: "training",
      descKey: "trainingDesc",
      color: "#035938",
    },
    {
      icon: <Users className="w-8 h-8" />,
      titleKey: "technicalGuidance",
      descKey: "technicalGuidanceDesc",
      color: "#52BC88",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      titleKey: "marketAccess",
      descKey: "marketAccessDesc",
      color: "#F1BC28",
    },
    {
      icon: <Award className="w-8 h-8" />,
      titleKey: "qualityCertification",
      descKey: "qualityCertificationDesc",
      color: "#035938",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      titleKey: "entrepreneurship",
      descKey: "entrepreneurshipDesc",
      color: "#52BC88",
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
            y: 80,
            rotateX: 45,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.15,
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="what-we-offer"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[#F9F7EF] to-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#52BC88]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#F1BC28]/5 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-[#035938]/10 rounded-full mb-4">
            <span className="text-[#035938] font-semibold">
              {t("ourOfferings")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-6">
            {t("whatWeOffer")}
          </h2>
          <p className="text-lg text-[#052F2A]/70 max-w-3xl mx-auto leading-relaxed">
            {t("whatWeOfferIntro")}
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offer, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative perspective-1000"
            >
              {/* Card with 3D Effect */}
              <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                {/* Gradient Accent */}
                <div
                  className="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl"
                  style={{ backgroundColor: offer.color }}
                />

                {/* Hover Gradient Overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ backgroundColor: offer.color }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${offer.color}20` }}
                >
                  <div style={{ color: offer.color }}>{offer.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#035938] mb-4">
                  {t(offer.titleKey)}
                </h3>
                <p className="text-[#052F2A]/70 leading-relaxed">
                  {t(offer.descKey)}
                </p>

                {/* Decorative Corner */}
                <div
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: offer.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
