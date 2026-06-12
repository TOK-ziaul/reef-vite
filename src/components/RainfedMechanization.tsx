import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import {
  Tractor,
  Users,
  Building2,
  GraduationCap,
  BookOpen,
  MapPin,
  TrendingUp,
  Sparkles,
  Droplet,
  Cherry,
  Nut,
  Wind,
  ArrowRight,
} from "lucide-react";

export function RainfedMechanization() {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";
  const initiativeGoals = [
    {
      title: t("rainfedMechGoal1"),
      description: t("rainfedMechGoal1Desc"),
      icon: Tractor,
      color: "#035938",
    },
    {
      title: t("rainfedMechGoal2"),
      description: t("rainfedMechGoal2Desc"),
      icon: Sparkles,
      color: "#52BC88",
    },
  ];

  const indicators = [
    {
      number: "37",
      label: t("rainfedMechIndicator1"),
      icon: Users,
      color: "#035938",
    },
    {
      number: "19",
      label: t("rainfedMechIndicator2"),
      icon: Building2,
      color: "#52BC88",
    },
    {
      number: "140",
      label: t("rainfedMechIndicator3"),
      icon: GraduationCap,
      color: "#F1BC28",
    },
    {
      number: "14",
      label: t("rainfedMechIndicator4"),
      icon: BookOpen,
      color: "#035938",
    },
    {
      number: "6",
      label: t("rainfedMechIndicator5"),
      icon: MapPin,
      color: "#52BC88",
    },
    {
      number: "3,571",
      label: t("rainfedMechIndicator6"),
      icon: TrendingUp,
      color: "#F1BC28",
    },
  ];

  const processingProjects = [
    {
      title: t("rainfedMechProcessing1"),
      icon: Droplet,
      color: "#035938",
    },
    {
      title: t("rainfedMechProcessing2"),
      icon: Cherry,
      color: "#52BC88",
    },
    {
      title: t("rainfedMechProcessing3"),
      icon: Nut,
      color: "#F1BC28",
    },
    {
      title: t("rainfedMechProcessing4"),
      icon: Wind,
      color: "#035938",
    },
  ];

  return (
    <div className="bg-white py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className={`text-center mb-16 ${isRTL ? "text-right" : "text-left"} md:text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Tractor className="w-12 h-12 text-[#035938]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#035938]">
              {t("rainfedMechanizationTitle")}
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#52BC88] mx-auto mb-8" />
          <p className="text-xl text-[#052F2A] max-w-4xl mx-auto">
            {t("rainfedMechanizationIntro")}
          </p>
        </motion.div>

        {/* Initiative Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {initiativeGoals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#F9F7EF] rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-300"
              >
                <div className={`${isRTL ? "text-right" : "text-left"}`}>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: goal.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#035938] mb-4">
                    {goal.title}
                  </h3>
                  <p className="text-lg text-[#052F2A] leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Initiative Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#035938] to-[#052F2A] rounded-3xl p-8 md:p-10 shadow-lg mb-20"
        >
          <h3
            className={`text-3xl font-bold text-white mb-10 ${isRTL ? "text-right" : "text-left"}`}
          >
            {t("rainfedMechIndicatorsTitle")}:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`${isRTL ? "text-right" : "text-left"}`}>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: indicator.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {indicator.number}
                    </div>
                    <div className="text-base text-white/90">
                      {indicator.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Processing Industries Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={`${isRTL ? "text-right" : "text-left"} mb-10`}>
            <h3 className="text-3xl font-bold text-[#035938] mb-4">
              {t("rainfedMechProcessingTitle")}
            </h3>
            <p className="text-lg text-[#052F2A]">
              {t("rainfedMechProcessingIntro")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processingProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#F9F7EF] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
                  style={{
                    borderLeft: isRTL ? "none" : `6px solid ${project.color}`,
                    borderRight: isRTL ? `6px solid ${project.color}` : "none",
                  }}
                >
                  <div
                    className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : "text-left"}`}
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-2"
                        style={{ backgroundColor: project.color }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-[#035938] leading-relaxed">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 300 Equipment Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-[#52BC88]/20 to-[#F1BC28]/20 rounded-3xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Tractor className="w-10 h-10 text-[#035938]" />
            <div className="text-5xl font-bold text-[#035938]">
              300
            </div>
          </div>
          <p className="text-xl font-semibold text-[#052F2A]">
            {t("rainfedMechEquipmentHighlight")}
          </p>
        </motion.div>
        {/* Bottom CTAs */}
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
      </div>
    </div>
  );
}
