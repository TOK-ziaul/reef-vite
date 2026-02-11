import React, { useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { Check } from "lucide-react";

export const BeneficiariesGuidePage: React.FC = () => {
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

  const guides = [
    {
      title:
        language === "ar"
          ? "فهم طبيعة المشروع"
          : "Understanding Project Nature",
      image:
        "https://images.unsplash.com/photo-1758876202522-df2c0dbd0d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwcGxhbm5pbmclMjBidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MDc0NTgxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-[#035938] to-[#52BC88]",
      intro:
        language === "ar"
          ? "على المستفيد تحديد طبيعة مشروعه بدقة، وهل هو:"
          : "The beneficiary must accurately define their project nature, whether it is:",
      items: [
        language === "ar" ? "إنتاجي" : "Productive",
        language === "ar" ? "تسويقي" : "Marketing",
        language === "ar" ? "خدمي" : "Service-based",
        language === "ar" ? "حرفي" : "Artisanal",
        language === "ar" ? "قائم على موارد طبيعية" : "Natural resource-based",
      ],
      conclusion:
        language === "ar"
          ? "هذا التصنيف يساعد في اختيار نوع الدعم المناسب."
          : "This classification helps in selecting the appropriate type of support.",
    },
    {
      title:
        language === "ar"
          ? "الالتزام بالمعايير الفنية"
          : "Commitment to Technical Standards",
      image:
        "https://images.unsplash.com/photo-1650331264110-72cd4206d092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwc3RhbmRhcmRzJTIwY2VydGlmaWNhdGlvbnxlbnwxfHx8fDE3NzA3NDU4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-[#52BC88] to-[#F1BC28]",
      intro:
        language === "ar"
          ? "يجب على المستفيد الالتزام بالممارسات الجيدة في:"
          : "The beneficiary must adhere to good practices in:",
      items: [
        language === "ar" ? "الري" : "Irrigation",
        language === "ar" ? "التسميد" : "Fertilization",
        language === "ar" ? "مكافحة الآفات" : "Pest control",
        language === "ar" ? "إدارة المخلفات" : "Waste management",
        language === "ar" ? "حفظ المنتجات" : "Product preservation",
      ],
      conclusion:
        language === "ar"
          ? "ويتم دعم ذلك من خلال الدورات التدريبية والزيارات الإرشادية."
          : "This is supported through training courses and guidance visits.",
    },
    {
      title:
        language === "ar"
          ? "إدارة الموارد المالية"
          : "Financial Resource Management",
      image:
        "https://images.unsplash.com/photo-1705948734578-54b4e4dbf443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBtYW5hZ2VtZW50JTIwbW9uZXklMjBidWRnZXR8ZW58MXx8fHwxNzcwNzQ1ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-[#F1BC28] to-[#035938]",
      intro:
        language === "ar"
          ? "يتعلم المستفيد كيفية:"
          : "The beneficiary learns how to:",
      items: [
        language === "ar"
          ? "توزيع ميزانية المشروع"
          : "Distribute project budget",
        language === "ar" ? "تقليل الهدر" : "Reduce waste",
        language === "ar" ? "رفع الكفاءة" : "Increase efficiency",
        language === "ar" ? "إعادة استثمار الأرباح" : "Reinvest profits",
        language === "ar"
          ? "إعداد تقارير مالية مبسطة"
          : "Prepare simplified financial reports",
      ],
      conclusion:
        language === "ar"
          ? 'يؤكد برنامج "ريف السعودية" على أن الإدارة الجيدة للموارد ترفع من فرص الاستدامة.'
          : "Reef Saudi program emphasizes that good resource management increases sustainability opportunities.",
    },
    {
      title: language === "ar" ? "التسويق والترويج" : "Marketing and Promotion",
      image:
        "https://images.unsplash.com/photo-1709281847780-2b34c28853c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwcm9tb3Rpb24lMjBidXNpbmVzcyUyMGdyb3d0aHxlbnwxfHx8fDE3NzA3NDU4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-[#035938] to-[#F1BC28]",
      intro:
        language === "ar"
          ? "يتم توجيه المستفيد إلى:"
          : "The beneficiary is guided to:",
      items: [
        language === "ar" ? "كيفية تغليف المنتج" : "Product packaging methods",
        language === "ar" ? "التسعير المناسب" : "Appropriate pricing",
        language === "ar"
          ? "استخدام المنصات الرقمية"
          : "Using digital platforms",
        language === "ar"
          ? "الدخول إلى نقاط البيع والمعارض"
          : "Accessing retail points and exhibitions",
        language === "ar" ? "الاستفادة من الشراكات" : "Leveraging partnerships",
      ],
      conclusion: "",
    },
    {
      title: language === "ar" ? "التقييم المستمر" : "Continuous Evaluation",
      image:
        "https://images.unsplash.com/photo-1768811838777-0507859b5ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmFsdWF0aW9uJTIwYXNzZXNzbWVudCUyMHBlcmZvcm1hbmNlJTIwcmV2aWV3fGVufDF8fHx8MTc3MDc0NTgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-[#52BC88] to-[#035938]",
      intro:
        language === "ar"
          ? 'يشجّع برنامج "ريف السعودية" عبر الدعم والأدلة والندوات الإرشادية المستفيد على:'
          : "Reef Saudi program encourages beneficiaries through support, guides and seminars to:",
      items: [
        language === "ar"
          ? "قياس تطور إنتاجه"
          : "Measure production development",
        language === "ar" ? "تطوير أساليبه" : "Develop methods",
        language === "ar" ? "تحسين الجودة" : "Improve quality",
        language === "ar"
          ? "الاستعداد للتوسع مستقبلاً"
          : "Prepare for future expansion",
      ],
      conclusion:
        language === "ar"
          ? "بهذا يصبح المستفيد شريكاً في التنمية وليس مجرد متلقٍ للدعم."
          : "Thus, the beneficiary becomes a partner in development, not just a support recipient.",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-[#F9F7EF] ${isRTL ? "rtl font-loew" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1734174051632-c99a253ddb9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjByZWFkaW5nJTIwZG9jdW1lbnRzJTIwaGFuZGJvb2slMjBndWlkZXxlbnwxfHx8fDE3NzA3NDQyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#035938]/95 via-[#024830]/93 to-[#035938]/95" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
            <div className="max-w-3xl">
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 ${isRTL ? "text-right" : "text-left"}`}
                style={{
                  animation: "fadeInUp 0.6s ease-out",
                  textShadow: "0 2px 40px rgba(0,0,0,0.3)",
                }}
              >
                {language === "ar" ? "دليل المستفيدين" : "Beneficiaries Guide"}
              </h1>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 60L48 65C96 70 192 80 288 75C384 70 480 50 576 45C672 40 768 50 864 60C960 70 1056 80 1152 75C1248 70 1344 50 1392 40L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
              fill="#F9F7EF"
            />
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative -mt-20 py-24 bg-[#F9F7EF]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div
            className="bg-white rounded-[40px] p-10 md:p-14 lg:p-16 shadow-lg"
            style={{ animation: "fadeInUp 0.8s ease-out" }}
          >
            <p
              className={`text-2xl md:text-3xl leading-relaxed text-[#035938] font-bold mb-8 ${isRTL ? "text-right" : "text-left"}`}
            >
              {language === "ar"
                ? 'تم إعداد دليل المستفيدين ليكون مرجعاً عملياً يساعد المستفيدين في الاستفادة القصوى من خدمات برنامج "ريف السعودية" وتحقيق الاستدامة لمشاريعهم.'
                : 'The Beneficiaries Guide has been prepared as a practical reference to help beneficiaries maximize their benefit from "Reef Saudi" program services and achieve sustainability for their projects.'}
            </p>

            <div className="w-24 h-1 bg-[#52BC88] rounded-full mb-8" />

            <p
              className={`text-xl md:text-2xl leading-relaxed text-[#052F2A]/80 ${isRTL ? "text-right" : "text-left"}`}
            >
              {language === "ar"
                ? "يقدّم الدليل مجموعة من الإرشادات والخطوات العملية، تشمل:"
                : "The guide provides a set of practical guidelines and steps, including:"}
            </p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#F9F7EF] to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="space-y-16">
            {guides.map((guide, index) => {
              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${0.15 * index}s backwards`,
                  }}
                >
                  <div className="bg-white rounded-[40px] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* Image Side */}
                      <div className="lg:col-span-4 relative h-[300px] lg:h-auto overflow-hidden">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${guide.color} opacity-60`}
                        />
                      </div>

                      {/* Content Side */}
                      <div className="lg:col-span-8 p-10 md:p-12">
                        <h3
                          className={`text-3xl md:text-4xl font-bold text-[#035938] mb-6 ${isRTL ? "text-right" : "text-left"}`}
                        >
                          {guide.title}
                        </h3>

                        <p
                          className={`text-xl leading-relaxed text-[#052F2A]/70 mb-8 ${isRTL ? "text-right" : "text-left"}`}
                        >
                          {guide.intro}
                        </p>

                        <div className="space-y-4 mb-8">
                          {guide.items.map((item, i) => (
                            <div
                              key={i}
                              className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : "flex-row"}`}
                            >
                              <div
                                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${guide.color} flex items-center justify-center flex-shrink-0 mt-1`}
                              >
                                <Check
                                  className="w-5 h-5 text-white"
                                  strokeWidth={2.5}
                                />
                              </div>
                              <p
                                className={`text-lg text-[#052F2A] flex-1 ${isRTL ? "text-right" : "text-left"}`}
                              >
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>

                        {guide.conclusion && (
                          <div
                            className={`p-6 rounded-2xl bg-[#F9F7EF] border-l-4 ${isRTL ? "border-r-4 border-l-0" : ""}`}
                            style={{ borderColor: "#52BC88" }}
                          >
                            <p
                              className={`text-lg leading-relaxed text-[#035938] font-medium ${isRTL ? "text-right" : "text-left"}`}
                            >
                              {guide.conclusion}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
