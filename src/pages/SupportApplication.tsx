import React, { useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import {
  UserCircle,
  FileSpreadsheet,
  FolderUp,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const SupportApplicationPage: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const heroRef = useRef<HTMLDivElement>(null);

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
            backgroundImage: `url(https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMGlubm92YXRpb24lMjBoYW5kcyUyMHR5cGluZ3xlbnwxfHx8fDE3NzA3NDI2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
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
                {language === "ar"
                  ? "آلية التقديم على الدعم"
                  : "Support Application Mechanism"}
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

      {/* Overview Card */}
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
                  {language === "ar" ? "مقدمة" : "Introduction"}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-8 leading-tight">
                {language === "ar"
                  ? "آلية مصممة بعناية لخدمتك"
                  : "A Carefully Designed Mechanism to Serve You"}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className={isRTL ? "text-right" : "text-left"}>
                  <p className="text-lg md:text-xl leading-relaxed text-[#052F2A]/70">
                    {language === "ar"
                      ? 'تم تصميم آلية التقديم على دعم برنامج "ريف السعودية" لتكون سهلة، واضحة، وعادلة، وتضمن وصول الدعم إلى مستحقيه من الأسر المنتجة وصغار المزارعين والعاملين في الأنشطة الريفية المستدامة.'
                      : "The Reef Saudi program support application mechanism has been designed to be easy, clear, and fair, ensuring support reaches deserving productive families, small farmers, and those working in sustainable rural activities."}
                  </p>
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <p className="text-lg md:text-xl leading-relaxed text-[#052F2A]/70">
                    {language === "ar"
                      ? "تمر عملية التقديم عبر مراحل منظمة تهدف إلى التحقق من أهلية المتقدم، ودراسة المشروع، ثم ربطه بخدمات الدعم المناسبة، بما يحقق أعلى أثر تنموي."
                      : "The application process goes through organized stages aimed at verifying applicant eligibility, studying the project, then connecting it with appropriate support services to achieve the highest developmental impact."}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="font-semibold text-[#035938]">
                      {language === "ar" ? "سهل وواضح" : "Easy & Clear"}
                    </p>
                    <p className="text-sm text-[#052F2A]/60">
                      {language === "ar"
                        ? "إجراءات بسيطة"
                        : "Simple procedures"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#52BC88] to-[#F1BC28] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="font-semibold text-[#035938]">
                      {language === "ar" ? "عادل وشفاف" : "Fair & Transparent"}
                    </p>
                    <p className="text-sm text-[#052F2A]/60">
                      {language === "ar" ? "معايير واضحة" : "Clear criteria"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F1BC28] to-[#035938] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="font-semibold text-[#035938]">
                      {language === "ar" ? "دعم شامل" : "Comprehensive Support"}
                    </p>
                    <p className="text-sm text-[#052F2A]/60">
                      {language === "ar"
                        ? "مالي وفني"
                        : "Financial & Technical"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps - Modern Bento Layout */}
      <section className="relative py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6">
              <div className="w-2 h-2 rounded-full bg-[#52BC88] animate-pulse" />
              <span className="text-[#035938] font-semibold text-sm">
                {language === "ar" ? "مراحل التقديم" : "Application Stages"}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#035938] mb-6">
              {language === "ar"
                ? "رحلتك نحو الدعم"
                : "Your Journey to Support"}
            </h2>
            <p className="text-xl text-[#052F2A]/70 max-w-3xl mx-auto">
              {language === "ar"
                ? "خمس مراحل متتالية تضمن لك تجربة سلسة من التسجيل حتى الحصول على الدعم"
                : "Five consecutive stages ensuring you a smooth experience from registration to receiving support"}
            </p>
          </div>

          {/* Stage 1 */}
          <div
            className="mb-12 group"
            style={{ animation: "fadeInUp 0.6s ease-out 0.1s backwards" }}
          >
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#035938]/20 to-[#52BC88]/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  <div className="relative backdrop-blur-xl bg-white rounded-[40px] p-8 shadow-xl border border-white/60">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center shadow-lg">
                        <UserCircle className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#52BC88]">
                          {language === "ar" ? "المرحلة 01" : "Stage 01"}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#035938]">
                          {language === "ar"
                            ? "التسجيل في المنصة"
                            : "Platform Registration"}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-[#052F2A]/70 leading-relaxed">
                      {language === "ar"
                        ? "يبدأ المستفيد رحلته بالتسجيل عبر منصة ريف السعودية الإلكترونية، حيث يقوم بإنشاء حساب باستخدام بياناته الأساسية."
                        : "The beneficiary begins their journey by registering through the Reef Saudi electronic platform, creating an account using their basic information."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="backdrop-blur-xl bg-gradient-to-br from-white to-[#52BC88]/5 rounded-[40px] p-8 md:p-10 shadow-xl border border-white/60">
                  <h4 className="text-xl font-bold text-[#035938] mb-6">
                    {language === "ar"
                      ? "البيانات المطلوبة:"
                      : "Required Information:"}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { ar: "رقم الهوية الوطنية", en: "National ID number" },
                      { ar: "تاريخ الميلاد", en: "Date of birth" },
                      {
                        ar: "رقم الجوال المسجل باسمه",
                        en: "Mobile number registered in their name",
                      },
                      {
                        ar: "العنوان والمنطقة الإدارية",
                        en: "Address and administrative region",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-[#035938]/10 hover:border-[#52BC88]/40 transition-all duration-300"
                      >
                        <ArrowRight
                          className={`w-5 h-5 text-[#52BC88] flex-shrink-0 mt-0.5 ${isRTL ? "rotate-180" : ""}`}
                        />
                        <p className="text-[#052F2A]/80">
                          {language === "ar" ? item.ar : item.en}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#035938]/5 to-[#52BC88]/5 border border-[#035938]/10">
                    <p className="text-[#052F2A]/70">
                      <span className="font-semibold text-[#035938]">
                        {language === "ar" ? "ملاحظة: " : "Note: "}
                      </span>
                      {language === "ar"
                        ? "يتم بعد ذلك تفعيل الحساب عبر رسالة نصية مرسلة إلى رقم الجوال، لضمان صحة البيانات."
                        : "The account is then activated via a text message sent to the mobile number, to ensure data accuracy."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2 */}
          <div
            className="mb-12 group"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s backwards" }}
          >
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div
                className={`md:col-span-5 ${isRTL ? "md:order-1" : "md:order-2"}`}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#52BC88]/20 to-[#F1BC28]/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  <div className="relative backdrop-blur-xl bg-white rounded-[40px] p-8 shadow-xl border border-white/60">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#52BC88] to-[#F1BC28] flex items-center justify-center shadow-lg">
                        <FileSpreadsheet className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#52BC88]">
                          {language === "ar" ? "المرحلة 02" : "Stage 02"}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#035938]">
                          {language === "ar"
                            ? "إدخال بيانات المشروع"
                            : "Project Data Entry"}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-[#052F2A]/70 leading-relaxed">
                      {language === "ar"
                        ? "بعد تسجيل الدخول إلى المنصة، ينتقل المستفيد لإدخال تفاصيل مشروعه الشاملة."
                        : "After logging into the platform, the beneficiary proceeds to enter their comprehensive project details."}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`md:col-span-7 ${isRTL ? "md:order-2" : "md:order-1"}`}
              >
                <div className="backdrop-blur-xl bg-gradient-to-br from-white to-[#F1BC28]/5 rounded-[40px] p-8 md:p-10 shadow-xl border border-white/60">
                  <h4 className="text-xl font-bold text-[#035938] mb-6">
                    {language === "ar"
                      ? "معلومات المشروع:"
                      : "Project Information:"}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        ar: "نوع النشاط الزراعي أو الريفي",
                        en: "Type of agricultural or rural activity",
                      },
                      { ar: "موقع المشروع", en: "Project location" },
                      { ar: "المساحة التقريبية", en: "Approximate area" },
                      { ar: "مراحل الإنتاج", en: "Production stages" },
                      {
                        ar: "حجم الإنتاج الحالي والمتوقع",
                        en: "Current and expected production volume",
                      },
                      {
                        ar: "الأدوات والمعدات المستخدمة",
                        en: "Tools and equipment used",
                      },
                      { ar: "التحديات القائمة", en: "Current challenges" },
                      {
                        ar: "الأهداف المستقبلية للمشروع",
                        en: "Future project objectives",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-[#035938]/10 hover:border-[#F1BC28]/40 transition-all duration-300"
                      >
                        <ArrowRight
                          className={`w-5 h-5 text-[#F1BC28] flex-shrink-0 mt-0.5 ${isRTL ? "rotate-180" : ""}`}
                        />
                        <p className="text-[#052F2A]/80 text-sm">
                          {language === "ar" ? item.ar : item.en}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#52BC88]/5 to-[#F1BC28]/5 border border-[#52BC88]/10">
                    <p className="text-[#052F2A]/70">
                      <span className="font-semibold text-[#035938]">
                        {language === "ar" ? "الهدف: " : "Goal: "}
                      </span>
                      {language === "ar"
                        ? "هذه البيانات تساعد الجهات المختصة على تقييم المشروع بدقة وربطه بنوع الدعم المناسب."
                        : "This data helps the relevant authorities to accurately assess the project and connect it with the appropriate type of support."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3 */}
          <div
            className="mb-12 group"
            style={{ animation: "fadeInUp 0.6s ease-out 0.3s backwards" }}
          >
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#F1BC28]/20 to-[#035938]/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  <div className="relative backdrop-blur-xl bg-white rounded-[40px] p-8 shadow-xl border border-white/60">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F1BC28] to-[#035938] flex items-center justify-center shadow-lg">
                        <FolderUp className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#F1BC28]">
                          {language === "ar" ? "المرحلة 03" : "Stage 03"}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#035938]">
                          {language === "ar"
                            ? "رفع الوثائق المطلوبة"
                            : "Upload Required Documents"}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-[#052F2A]/70 leading-relaxed">
                      {language === "ar"
                        ? "يتطلب التقديم إرفاق عدد من الوثائق، والتي تختلف حسب نوع النشاط."
                        : "The application requires attaching a number of documents, which vary depending on the type of activity."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="backdrop-blur-xl bg-gradient-to-br from-white to-[#F1BC28]/5 rounded-[40px] p-8 md:p-10 shadow-xl border border-white/60">
                  <h4 className="text-xl font-bold text-[#035938] mb-6">
                    {language === "ar"
                      ? "الوثائق المطلوبة:"
                      : "Required Documents:"}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        ar: "نسخة من الهوية الوطنية",
                        en: "Copy of national ID",
                      },
                      {
                        ar: "إثبات السكن أو موقع المشروع",
                        en: "Proof of residence or project location",
                      },
                      {
                        ar: "صورة للمزرعة أو موقع الإنتاج",
                        en: "Photo of the farm or production site",
                      },
                      {
                        ar: "رخصة النحل في حال كان النشاط مرتبطًا بالعسل",
                        en: "Beekeeping license if the activity is related to honey",
                      },
                      {
                        ar: "شهادة العمل الحر (إن توفرت)",
                        en: "Freelance certificate (if available)",
                      },
                      {
                        ar: "حساب بنكي باسم المتقدم",
                        en: "Bank account in the applicant's name",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-[#035938]/10 hover:border-[#F1BC28]/40 transition-all duration-300"
                      >
                        <ArrowRight
                          className={`w-5 h-5 text-[#F1BC28] flex-shrink-0 mt-0.5 ${isRTL ? "rotate-180" : ""}`}
                        />
                        <p className="text-[#052F2A]/80 text-sm">
                          {language === "ar" ? item.ar : item.en}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#F1BC28]/5 to-[#035938]/5 border border-[#F1BC28]/10">
                    <p className="text-[#052F2A]/70">
                      <span className="font-semibold text-[#035938]">
                        {language === "ar" ? "ملاحظة: " : "Note: "}
                      </span>
                      {language === "ar"
                        ? "تخضع هذه الوثائق للمراجعة من قبل الفرق المختصة في البرنامج."
                        : "These documents are subject to review by the program's specialized teams."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 4 */}
          <div
            className="mb-12 group"
            style={{ animation: "fadeInUp 0.6s ease-out 0.4s backwards" }}
          >
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div
                className={`md:col-span-5 ${isRTL ? "md:order-1" : "md:order-2"}`}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#52BC88]/20 to-[#035938]/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  <div className="relative backdrop-blur-xl bg-white rounded-[40px] p-8 shadow-xl border border-white/60">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#52BC88] to-[#035938] flex items-center justify-center shadow-lg">
                        <ClipboardCheck className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#52BC88]">
                          {language === "ar" ? "المرحلة 04" : "Stage 04"}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#035938]">
                          {language === "ar"
                            ? "التقييم والمعاينة"
                            : "Evaluation and Inspection"}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-[#052F2A]/70 leading-relaxed">
                      {language === "ar"
                        ? "بعد اكتمال الطلب، يتم تحويله إلى الجهات المختصة لإجراء التقييم الشامل."
                        : "After the application is completed, it is transferred to the relevant authorities for comprehensive evaluation."}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`md:col-span-7 ${isRTL ? "md:order-2" : "md:order-1"}`}
              >
                <div className="backdrop-blur-xl bg-gradient-to-br from-white to-[#52BC88]/5 rounded-[40px] p-8 md:p-10 shadow-xl border border-white/60">
                  <h4 className="text-xl font-bold text-[#035938] mb-6">
                    {language === "ar"
                      ? "إجراءات التقييم:"
                      : "Evaluation Procedures:"}
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        ar: "مراجعة فنية للبيانات",
                        en: "Technical review of data",
                      },
                      {
                        ar: "تقييم اقتصادي للمشروع",
                        en: "Economic evaluation of the project",
                      },
                      {
                        ar: "في بعض الحالات: زيارة ميدانية للتحقق من صحة المعلومات",
                        en: "In some cases: field visit to verify information accuracy",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 border border-[#035938]/10 hover:border-[#52BC88]/40 transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#52BC88]/20 to-[#035938]/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-[#035938]">
                            {idx + 1}
                          </span>
                        </div>
                        <p className="text-[#052F2A]/80">
                          {language === "ar" ? item.ar : item.en}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#52BC88]/5 to-[#035938]/5 border border-[#52BC88]/10">
                    <p className="text-[#052F2A]/70">
                      <span className="font-semibold text-[#035938]">
                        {language === "ar" ? "الهدف: " : "Goal: "}
                      </span>
                      {language === "ar"
                        ? "ضمان جاهزية المشروع للاستفادة من الدعم وتنميته بشكل مستدام."
                        : "Ensure the project's readiness to benefit from support and develop it sustainably."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 5 - Final Stage with Special Design */}
          <div
            className="group"
            style={{ animation: "fadeInUp 0.6s ease-out 0.5s backwards" }}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-[#035938]/20 via-[#52BC88]/20 to-[#F1BC28]/20 rounded-[50px] blur-3xl group-hover:blur-[60px] transition-all duration-700" />

              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white via-white to-[#52BC88]/5 rounded-[40px] p-10 md:p-14 shadow-2xl border-2 border-[#035938]/20">
                {/* Header */}
                <div className="flex items-start gap-6 mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center shadow-2xl relative">
                    <CheckCircle2 className="w-10 h-10 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-full text-sm font-semibold mb-3">
                      {language === "ar"
                        ? "المرحلة 05 - المرحلة النهائية"
                        : "Stage 05 - Final Stage"}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#035938] mb-3">
                      {language === "ar"
                        ? "اعتماد الطلب وصرف الدعم"
                        : "Application Approval and Support Disbursement"}
                    </h3>
                    <p className="text-xl text-[#052F2A]/70 leading-relaxed">
                      {language === "ar"
                        ? "في حال استيفاء جميع الشروط، يتم اعتماد الطلب وإبلاغ المستفيد بالقبول، ثم يبدأ صرف الدعم المالي وفق خطة زمنية محددة."
                        : "If all conditions are met, the application is approved and the beneficiary is notified of acceptance, then financial support disbursement begins according to a specific timeline."}
                    </p>
                  </div>
                </div>

                {/* Support Types */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#035938] mb-4">
                      {language === "ar"
                        ? "أنواع الدعم المقدم:"
                        : "Types of Support Provided:"}
                    </h4>
                    {[
                      {
                        ar: "الإرشاد الزراعي",
                        en: "Agricultural guidance",
                        icon: "🌱",
                      },
                      {
                        ar: "التدريب والتأهيل",
                        en: "Training and qualification",
                        icon: "📚",
                      },
                      {
                        ar: "الدعم التسويقي",
                        en: "Marketing support",
                        icon: "📈",
                      },
                      {
                        ar: "الربط مع الأسواق والمنصات",
                        en: "Connection with markets and platforms",
                        icon: "🤝",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-5 rounded-2xl bg-white/80 border border-[#035938]/10 hover:shadow-lg hover:border-[#52BC88]/40 transition-all duration-300"
                      >
                        <div className="text-3xl">{item.icon}</div>
                        <p className="text-lg text-[#052F2A]/80 font-medium">
                          {language === "ar" ? item.ar : item.en}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center">
                    <div className="w-full p-8 rounded-3xl bg-gradient-to-br from-[#035938] via-[#024830] to-[#052F2A] relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-100" />
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                          <Sparkles className="w-8 h-8 text-[#F1BC28]" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">
                          {language === "ar" ? "التزامنا" : "Our Commitment"}
                        </h4>
                        <p className="text-lg text-white/90 leading-relaxed">
                          {language === "ar"
                            ? 'بهذه الآلية، يضمن برنامج "ريف السعودية" وصول الدعم إلى المشاريع الأكثر قدرة على الاستدامة وتحقيق الأثر الاقتصادي والاجتماعي.'
                            : 'Through this mechanism, the "Reef Saudi" program ensures that support reaches projects most capable of sustainability and achieving economic and social impact.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
