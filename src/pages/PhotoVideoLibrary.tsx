import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { Play, Image as ImageIcon, Download, Eye } from "lucide-react";

export const PhotoVideoLibraryPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  // Mock photo data
  const photos = [
    {
      id: 1,
      title:
        language === "ar"
          ? "مزرعة نموذجية في منطقة الأحساء"
          : "Model Farm in Al-Ahsa Region",
      category: language === "ar" ? "مزارع نموذجية" : "Model Farms",
      image:
        "https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBncmVlbiUyMGZpZWxkfGVufDF8fHx8MTc3MDcyMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025-02-05",
    },
    {
      id: 2,
      title:
        language === "ar"
          ? "دورة تدريبية في الزراعة المستدامة"
          : "Training Course in Sustainable Agriculture",
      category: language === "ar" ? "تدريب" : "Training",
      image:
        "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025-02-03",
    },
    {
      id: 3,
      title:
        language === "ar"
          ? "حفل توقيع اتفاقية الشراكة"
          : "Partnership Agreement Signing Ceremony",
      category: language === "ar" ? "فعاليات" : "Events",
      image:
        "https://images.unsplash.com/photo-1549969363-7d17e5cec74f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBjYW1lcmElMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025-01-30",
    },
    {
      id: 4,
      title:
        language === "ar"
          ? "زيارة ميدانية لمشاريع النحالة"
          : "Field Visit to Beekeeping Projects",
      category: language === "ar" ? "زيارات" : "Visits",
      image:
        "https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBncmVlbiUyMGZpZWxkfGVufDF8fHx8MTc3MDcyMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025-01-25",
    },
    {
      id: 5,
      title:
        language === "ar"
          ? "ورشة عمل تقنيات الري الحديثة"
          : "Modern Irrigation Techniques Workshop",
      category: language === "ar" ? "ورش عمل" : "Workshops",
      image:
        "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025-01-20",
    },
    {
      id: 6,
      title:
        language === "ar"
          ? "معرض المنتجات الزراعية المحلية"
          : "Local Agricultural Products Exhibition",
      category: language === "ar" ? "معارض" : "Exhibitions",
      image:
        "https://images.unsplash.com/photo-1765920774183-9c0841be77c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwcGhvdG9zJTIwZXhoaWJpdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzcwNzIxODUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025-01-15",
    },
    {
      id: 7,
      title:
        language === "ar"
          ? "مشروع تطوير القطاع السمكي"
          : "Fisheries Sector Development Project",
      category: language === "ar" ? "مشاريع" : "Projects",
      image:
        "https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBncmVlbiUyMGZpZWxkfGVufDF8fHx8MTc3MDcyMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025-01-10",
    },
    {
      id: 8,
      title:
        language === "ar"
          ? "تخريج دفعة من برنامج ريف أكاديمي"
          : "Reef Academy Graduation Ceremony",
      category: language === "ar" ? "تخريج" : "Graduation",
      image:
        "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2025-01-05",
    },
    {
      id: 9,
      title:
        language === "ar"
          ? "برنامج دعم المزارعين الشباب"
          : "Young Farmers Support Program",
      category: language === "ar" ? "برامج" : "Programs",
      image:
        "https://images.unsplash.com/photo-1549969363-7d17e5cec74f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBjYW1lcmElMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "2024-12-28",
    },
  ];

  // Mock video data
  const videos = [
    {
      id: 1,
      title:
        language === "ar"
          ? "فيلم وثائقي عن برنامج ريف السعودية"
          : "Documentary Film about Reef Saudi Program",
      category: language === "ar" ? "أفلام وثائقية" : "Documentaries",
      thumbnail:
        "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHBsYXklMjBwcm9kdWN0aW9uJTIwZmlsbXxlbnwxfHx8fDE3NzA3MjE4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "15:30",
      date: "2025-02-01",
    },
    {
      id: 2,
      title:
        language === "ar"
          ? "قصة نجاح مزارع سعودي"
          : "Success Story of a Saudi Farmer",
      category: language === "ar" ? "قصص نجاح" : "Success Stories",
      thumbnail:
        "https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBncmVlbiUyMGZpZWxkfGVufDF8fHx8MTc3MDcyMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "8:45",
      date: "2025-01-28",
    },
    {
      id: 3,
      title:
        language === "ar"
          ? "ملخص فعاليات المعرض الزراعي 2025"
          : "2025 Agricultural Exhibition Highlights",
      category: language === "ar" ? "فعاليات" : "Events",
      thumbnail:
        "https://images.unsplash.com/photo-1765920774183-9c0841be77c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwcGhvdG9zJTIwZXhoaWJpdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzcwNzIxODUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "12:20",
      date: "2025-01-22",
    },
    {
      id: 4,
      title:
        language === "ar"
          ? "تقنيات الزراعة المائية الحديثة"
          : "Modern Hydroponic Farming Techniques",
      category: language === "ar" ? "تعليمي" : "Educational",
      thumbnail:
        "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHBsYXklMjBwcm9kdWN0aW9uJTIwZmlsbXxlbnwxfHx8fDE3NzA3MjE4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "10:15",
      date: "2025-01-18",
    },
    {
      id: 5,
      title:
        language === "ar" ? "جولة في مزرعة نموذجية" : "Tour of a Model Farm",
      category: language === "ar" ? "جولات" : "Tours",
      thumbnail:
        "https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBncmVlbiUyMGZpZWxkfGVufDF8fHx8MTc3MDcyMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "7:50",
      date: "2025-01-12",
    },
    {
      id: 6,
      title:
        language === "ar"
          ? "شراكات ريف السعودية الاستراتيجية"
          : "Reef Saudi Strategic Partnerships",
      category: language === "ar" ? "مؤسسي" : "Corporate",
      thumbnail:
        "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "9:30",
      date: "2025-01-08",
    },
  ];

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
            backgroundImage: `url(https://images.unsplash.com/photo-1765920774183-9c0841be77c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwcGhvdG9zJTIwZXhoaWJpdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzcwNzIxODUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#035938]/90 via-[#035938]/80 to-[#035938]/95" />

          {/* Animated Gradient Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-[#F1BC28]/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 left-20 w-80 h-80 bg-[#52BC88]/20 rounded-full blur-3xl animate-pulse"
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
                {t("photoVideo")}
              </h1>
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
              {t("photoVideo")}
            </h2>
            <p className="text-lg leading-relaxed text-[#052F2A]/80 mb-6">
              {language === "ar"
                ? "مكتبة شاملة تضم كل المواد الصحفية والعناصر الجاهزة للإعلاميين والباحثين. تشمل الفيديوهات، والإنفوجرافيك، والنصوص التعريفية المعتمدة، مع إمكانية التحميل المباشر للاستخدام الإعلامي."
                : "A comprehensive library containing all press materials and ready-made elements for media professionals and researchers. Includes videos, infographics, and approved introductory texts, with direct download capability for media use."}
            </p>
            <p className="text-base text-[#052F2A]/70 mb-8">
              {language === "ar"
                ? "هنا تُضاف روابط تحميل الملفات، والفيديوهات:"
                : "Download links for files and videos are added here:"}
            </p>

            {/* Back to Media Center Link */}
            <button
              onClick={() => {
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

          {/* Tabs */}
          <div
            className="flex justify-center gap-4 mb-12"
            style={{
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            <button
              onClick={() => setActiveTab("photos")}
              className={`group relative px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 ${
                activeTab === "photos"
                  ? "bg-gradient-to-r from-[#035938] to-[#52BC88] text-white shadow-2xl scale-105"
                  : "bg-white text-[#035938] border-2 border-[#52BC88]/30 hover:border-[#035938] hover:shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3">
                <ImageIcon className="w-6 h-6" />
                <span>{language === "ar" ? "الصور" : "Photos"}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeTab === "photos" ? "bg-white/20" : "bg-[#F9F7EF]"
                  }`}
                >
                  {photos.length}
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("videos")}
              className={`group relative px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-gradient-to-r from-[#035938] to-[#52BC88] text-white shadow-2xl scale-105"
                  : "bg-white text-[#035938] border-2 border-[#52BC88]/30 hover:border-[#035938] hover:shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3">
                <Play className="w-6 h-6" />
                <span>{language === "ar" ? "الفيديوهات" : "Videos"}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeTab === "videos" ? "bg-white/20" : "bg-[#F9F7EF]"
                  }`}
                >
                  {videos.length}
                </span>
              </div>
            </button>
          </div>

          {/* Photos Grid */}
          {activeTab === "photos" && (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.2s backwards",
              }}
            >
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.1 * index}s backwards`,
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-[#F1BC28] text-[#035938] rounded-full text-xs font-bold shadow-lg">
                        {photo.category}
                      </span>
                    </div>

                    {/* Hover Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-4 bg-white rounded-full hover:bg-[#035938] hover:text-white transition-all duration-300 shadow-xl">
                        <Eye className="w-6 h-6" />
                      </button>
                      <button className="p-4 bg-white rounded-full hover:bg-[#035938] hover:text-white transition-all duration-300 shadow-xl">
                        <Download className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-bold text-[#035938] mb-2 leading-tight">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-[#052F2A]/60">
                      {new Date(photo.date).toLocaleDateString(
                        language === "ar" ? "ar-SA" : "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos Grid */}
          {activeTab === "videos" && (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{
                animation: "fadeInUp 0.8s ease-out 0.2s backwards",
              }}
            >
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="group relative rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.1 * index}s backwards`,
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-[#F1BC28] text-[#035938] rounded-full text-xs font-bold shadow-lg">
                        {video.category}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-black/80 text-white rounded-full text-xs font-bold">
                        {video.duration}
                      </span>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#035938] transition-all duration-300 shadow-2xl cursor-pointer">
                        <Play
                          className="w-10 h-10 text-[#035938] group-hover:text-white ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-bold text-[#035938] mb-2 leading-tight">
                      {video.title}
                    </h3>
                    <p className="text-sm text-[#052F2A]/60">
                      {new Date(video.date).toLocaleDateString(
                        language === "ar" ? "ar-SA" : "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

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
