import { useLanguage } from "../context/LanguageContext";

export function ContactIntro() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className={`${isRTL ? "text-right" : "text-left"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-8">
            {t("contactServiceIntroTitle")}
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-[#052F2A] leading-relaxed">
            <p>{t("contactServiceIntro1")}</p>
            <p>{t("contactServiceIntro2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
