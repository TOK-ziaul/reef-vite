import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";

export function ContactHero() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-[#035938] to-[#052F2A]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1767787473478-26111cc992da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tdW5pY2F0aW9uJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc3MDc0Njk5Mnww&ixlib=rb-4.1.0&q=80&w=1080)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#035938]/95 to-[#052F2A]/90" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 md:px-8">
        <div
          className={`max-w-[1200px] mx-auto ${isRTL ? "text-right" : "text-left"} w-full`}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {language === "ar"
              ? "خدمة الاستفسارات والتواصل"
              : "Inquiry and Communication Service"}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {language === "ar"
              ? "نافذتك المباشرة للتواصل مع برنامج ريف السعودية"
              : "Your Direct Window to Connect with Reef Saudi Arabia"}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
