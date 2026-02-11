import { useLanguage } from "../context/LanguageContext";

export function ContactIntro() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className={`${isRTL ? "text-right" : "text-left"}`}>
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-8">
            {language === "ar"
              ? "خدمة الاستفسارات والتواصل"
              : "Inquiry and Communication Service"}
          </h2>

          {/* Description */}
          <div className="space-y-6 text-lg md:text-xl text-[#052F2A] leading-relaxed">
            <p>
              {language === "ar"
                ? 'تم تخصيص هذه الصفحة لتكون نافذة مباشرة بين برنامج "ريف السعودية" والمستفيدين، بهدف تقديم الدعم والمشورة والاستجابة لجميع التساؤلات باحترافية وسرعة.'
                : 'This page has been dedicated to be a direct window between the "Reef Saudi Arabia" program and beneficiaries, with the aim of providing support, advice and responding to all inquiries professionally and quickly.'}
            </p>

            <p>
              {language === "ar"
                ? "توفر خدمة الاستفسارات عدة قنوات تواصل، منها:"
                : "The inquiry service provides several communication channels, including:"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
