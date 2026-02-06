import { useEffect, useRef } from "react";
import { Calendar, Award, Users, Building } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutMilestones() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<(HTMLDivElement | null)[]>([]);

  const milestones = [
    {
      year: "2020",
      icon: <Building className="w-6 h-6" />,
      titleKey: "programLaunch",
      descKey: "programLaunchDesc",
    },
    {
      year: "2021",
      icon: <Users className="w-6 h-6" />,
      titleKey: "firstBeneficiaries",
      descKey: "firstBeneficiariesDesc",
    },
    {
      year: "2022",
      icon: <Award className="w-6 h-6" />,
      titleKey: "expansionPhase",
      descKey: "expansionPhaseDesc",
    },
    {
      year: "2023",
      icon: <Calendar className="w-6 h-6" />,
      titleKey: "internationalRecognition",
      descKey: "internationalRecognitionDesc",
    },
    {
      year: "2024",
      icon: <Award className="w-6 h-6" />,
      titleKey: "visionAlignment",
      descKey: "visionAlignmentDesc",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate timeline line
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate milestone cards
    milestonesRef.current.forEach((milestone, index) => {
      if (milestone) {
        const isLeft = index % 2 === 0;
        gsap.fromTo(
          milestone,
          {
            opacity: 0,
            x: isLeft ? -100 : 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: milestone,
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
      id="milestones"
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#52BC88]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-[#F1BC28]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-[#035938]/10 rounded-full mb-4">
            <span className="text-[#035938] font-semibold">
              {t("ourJourney")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-6">
            {t("milestones")}
          </h2>
          <p className="text-lg text-[#052F2A]/70 max-w-2xl mx-auto">
            {t("milestonesIntro")}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#035938] via-[#52BC88] to-[#F1BC28] origin-top"
            style={{ transformOrigin: "top" }}
          />

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={(el) => (milestonesRef.current[index] = el)}
                  className={`flex items-center ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-5/12">
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                        isLeft ? "text-right" : "text-left"
                      }`}
                      style={{
                        direction: language === "ar" && isLeft ? "rtl" : language === "ar" && !isLeft ? "ltr" : "inherit",
                      }}
                    >
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-[#035938]/10 rounded-full mb-4 ${
                          isLeft ? "float-right" : "float-left"
                        }`}
                      >
                        <div className="text-[#035938]">{milestone.icon}</div>
                        <span className="font-bold text-[#035938]">
                          {milestone.year}
                        </span>
                      </div>
                      <div className="clear-both" />
                      <h3 className="text-xl font-bold text-[#035938] mb-2">
                        {t(milestone.titleKey)}
                      </h3>
                      <p className="text-[#052F2A]/70">{t(milestone.descKey)}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-white border-4 border-[#035938] rounded-full relative z-10 shadow-lg" />
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
