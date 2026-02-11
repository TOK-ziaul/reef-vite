import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { Calendar, Tag } from "lucide-react";

export const NewsPressPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const [selectedCategory] = useState<string>("all");

  // News categories
  const categories = [
    { key: "all", label: language === "ar" ? "الكل" : "All" },
    { key: "news", label: language === "ar" ? "أخبار" : "News" },
    {
      key: "press",
      label: language === "ar" ? "بيانات صحفية" : "Press Releases",
    },
    {
      key: "announcements",
      label: language === "ar" ? "إعلانات" : "Announcements",
    },
  ];

  // Mock news data
  const newsData = [
    {
      id: 1,
      category: "news",
      title:
        language === "ar"
          ? "ريف السعودية يطلق مبادرة جديدة لدعم المزارعين الصغار"
          : "Reef Saudi Launches New Initiative to Support Small Farmers",
      excerpt:
        language === "ar"
          ? "أطلق برنامج ريف السعودية مبادرة جديدة تهدف إلى تمكين المزارعين الصغار من خلال توفير الدعم الفني والتدريب المتخصص"
          : "Reef Saudi program launches a new initiative aimed at empowering small farmers through technical support and specialized training",
      date: "2025-02-08",
      image:
        "https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBncmVlbiUyMGZpZWxkfGVufDF8fHx8MTc3MDcyMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: [
        language === "ar" ? "مبادرات" : "Initiatives",
        language === "ar" ? "دعم" : "Support",
      ],
    },
    {
      id: 2,
      category: "press",
      title:
        language === "ar"
          ? "بيان صحفي: نجاح برنامج التدريب الزراعي لعام 2025"
          : "Press Release: Success of Agricultural Training Program 2025",
      excerpt:
        language === "ar"
          ? "أعلن برنامج ريف السعودية عن نجاح برنامج التدريب الزراعي الذي استفاد منه أكثر من 1500 مزارع في مختلف مناطق المملكة"
          : "Reef Saudi announces the success of the agricultural training program that benefited more than 1,500 farmers across various regions of the Kingdom",
      date: "2025-02-05",
      image:
        "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: [
        language === "ar" ? "تدريب" : "Training",
        language === "ar" ? "إنجازات" : "Achievements",
      ],
    },
    {
      id: 3,
      category: "announcements",
      title:
        language === "ar"
          ? "إعلان: فتح باب التقديم لبرنامج المزارع النموذجية"
          : "Announcement: Model Farms Program Applications Now Open",
      excerpt:
        language === "ar"
          ? "يسر برنامج ريف السعودية الإعلان عن فتح باب التقديم لبرنامج المزارع النموذجية للدورة الجديدة"
          : "Reef Saudi is pleased to announce that applications are now open for the new cycle of the Model Farms Program",
      date: "2025-02-03",
      image:
        "https://images.unsplash.com/photo-1549969363-7d17e5cec74f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBjYW1lcmElMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: [
        language === "ar" ? "تقديم" : "Applications",
        language === "ar" ? "برامج" : "Programs",
      ],
    },
    {
      id: 4,
      category: "news",
      title:
        language === "ar"
          ? "توقيع اتفاقية شراكة استراتيجية مع الجامعات السعودية"
          : "Strategic Partnership Agreement Signed with Saudi Universities",
      excerpt:
        language === "ar"
          ? "وقع برنامج ريف السعودية اتفاقية شراكة استراتيجية مع عدد من الجامعات السعودية لتعزيز البحث العلمي والتطوير الزراعي"
          : "Reef Saudi signed a strategic partnership agreement with several Saudi universities to enhance scientific research and agricultural development",
      date: "2025-01-30",
      image:
        "https://images.unsplash.com/photo-1722684768315-11fc753354f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBqb3VybmFsaXNtJTIwd3JpdGluZyUyMGFydGljbGV8ZW58MXx8fHwxNzcwNzIxNzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: [
        language === "ar" ? "شراكات" : "Partnerships",
        language === "ar" ? "تعاون" : "Collaboration",
      ],
    },
    {
      id: 5,
      category: "press",
      title:
        language === "ar"
          ? "بيان صحفي: إنجازات ريف السعودية في الربع الأول من 2025"
          : "Press Release: Reef Saudi Achievements in Q1 2025",
      excerpt:
        language === "ar"
          ? "يعلن برنامج ريف السعودية عن تحقيق إنجازات ملموسة في الربع الأول من عام 2025 شملت تدريب المزارعين وتطوير البنية التحتية"
          : "Reef Saudi announces tangible achievements in the first quarter of 2025, including farmer training and infrastructure development",
      date: "2025-01-25",
      image:
        "https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBncmVlbiUyMGZpZWxkfGVufDF8fHx8MTc3MDcyMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: [
        language === "ar" ? "تقارير" : "Reports",
        language === "ar" ? "إنجازات" : "Achievements",
      ],
    },
    {
      id: 6,
      category: "news",
      title:
        language === "ar"
          ? "ريف السعودية يحتفل بتخريج 500 مزارع من برنامج التدريب المتقدم"
          : "Reef Saudi Celebrates Graduation of 500 Farmers from Advanced Training",
      excerpt:
        language === "ar"
          ? "احتفل برنامج ريف السعودية بتخريج دفعة جديدة من المزارعين الذين أتموا برنامج التدريب المتقدم في تقنيات الزراعة المستدامة"
          : "Reef Saudi celebrated the graduation of a new batch of farmers who completed the advanced training program in sustainable agriculture techniques",
      date: "2025-01-20",
      image:
        "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: [
        language === "ar" ? "تخريج" : "Graduation",
        language === "ar" ? "تدريب" : "Training",
      ],
    },
  ];

  const filteredNews =
    selectedCategory === "all"
      ? newsData
      : newsData.filter((item) => item.category === selectedCategory);

  return (
    <div
      className={`min-h-screen bg-[#F9F7EF] ${isRTL ? "rtl font-loew" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1722684768315-11fc753354f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBqb3VybmFsaXNtJTIwd3JpdGluZyUyMGFydGljbGV8ZW58MXx8fHwxNzcwNzIxNzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#035938]/90 via-[#035938]/80 to-[#035938]/95" />

          {/* Animated Gradient Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#52BC88]/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-20 w-80 h-80 bg-[#F1BC28]/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
            <div className="text-center">
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
                style={{
                  textShadow: "0 4px 30px rgba(0,0,0,0.4)",
                  animation: "fadeInUp 0.8s ease-out",
                }}
              >
                {t("newsPress")}
              </h1>
              <p
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                style={{
                  animation: "fadeInUp 0.8s ease-out 0.2s backwards",
                }}
              >
                {language === "ar"
                  ? "آخر الأخبار والبيانات الصحفية من برنامج ريف السعودية"
                  : "Latest news and press releases from Reef Saudi program"}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 50C240 20 480 20 720 50C960 80 1200 80 1440 50V100H0V50Z"
              fill="#F9F7EF"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-1 py-20 bg-gradient-to-b from-[#F9F7EF] to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          {/* Introduction Section */}
          <div
            className="mb-16 backdrop-blur-xl bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-white/60"
            style={{
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#035938] mb-6">
              {t("newsPress")}
            </h2>
            <p className="text-lg leading-relaxed text-[#052F2A]/80 mb-6">
              {language === "ar"
                ? 'صفحة مخصّصة لعرض أحدث أخبار برنامج "ريف السعودية"، تشمل البيانات الرسمية، وآخر المستجدات، وقصص النجاح، وتغطيات المبادرات، لمعرفة جهود البرنامج في دعم المجتمعات الريفية وتحقيق مستهدفات التنمية المستدامة ورؤية المملكة 2030.'
                : 'A dedicated page to display the latest news from "Reef Saudi" program, including official statements, latest updates, success stories, and initiative coverage, to learn about the program\'s efforts in supporting rural communities and achieving sustainable development goals and Saudi Vision 2030.'}
            </p>
            <p className="text-base text-[#052F2A]/70 mb-8">
              {language === "ar"
                ? "هنا تُضاف روابط الأخبار الكاملة والتغطيات الإعلامية:"
                : "Full news links and media coverage are added here:"}
            </p>

            {/* Back to Media Center Link */}
            <button
              onClick={() => {
                // This would navigate back or show media center options
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-[#035938] hover:text-[#52BC88] transition-colors font-bold"
            >
              <span className="text-2xl">➜</span>
              <span>
                {language === "ar"
                  ? "الرجوع إلى المركز الإعلامي"
                  : "Back to Media Center"}
              </span>
            </button>
          </div>

          {/* Featured News - Large Card */}
          {filteredNews.length > 0 && (
            <div
              className="mb-12"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.2s backwards",
              }}
            >
              <div className="relative rounded-[50px] overflow-hidden group shadow-2xl h-[600px]">
                <img
                  src={filteredNews[0].image}
                  alt={filteredNews[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#035938]/95 via-[#035938]/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  {/* Tags */}
                  <div className="flex gap-3 mb-4">
                    {filteredNews[0].tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-[#F1BC28] text-[#035938] rounded-full text-sm font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {filteredNews[0].title}
                  </h2>
                  <p className="text-white/90 text-lg mb-6 max-w-3xl leading-relaxed">
                    {filteredNews[0].excerpt}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-white/80">
                    <Calendar className="w-5 h-5" />
                    <span>
                      {new Date(filteredNews[0].date).toLocaleDateString(
                        language === "ar" ? "ar-SA" : "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* News Grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.4s backwards",
            }}
          >
            {filteredNews.slice(1).map((news) => (
              <div
                key={news.id}
                className="group backdrop-blur-xl bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#035938]/70 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[#035938] rounded-full text-xs font-bold">
                      {categories.find((c) => c.key === news.category)?.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {news.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-[#F9F7EF] text-[#035938] rounded-full text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#035938] mb-3 leading-tight group-hover:text-[#52BC88] transition-colors">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#052F2A]/80 text-sm leading-relaxed mb-4">
                    {news.excerpt}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-[#052F2A]/60 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(news.date).toLocaleDateString(
                        language === "ar" ? "ar-SA" : "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="px-12 py-5 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              {language === "ar" ? "تحميل المزيد" : "Load More"}
            </button>
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
