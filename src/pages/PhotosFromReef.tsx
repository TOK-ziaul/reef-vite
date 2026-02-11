import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { Heart, Share2, Download, Eye } from "lucide-react";

export const PhotosFromReefPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Photo categories
  const categories = [
    { key: "all", label: language === "ar" ? "الكل" : "All" },
    {
      key: "landscapes",
      label: language === "ar" ? "المناظر الطبيعية" : "Landscapes",
    },
    { key: "farmers", label: language === "ar" ? "المزارعون" : "Farmers" },
    { key: "crops", label: language === "ar" ? "المحاصيل" : "Crops" },
    { key: "heritage", label: language === "ar" ? "التراث" : "Heritage" },
  ];

  // Mock gallery data with variety of images
  const gallery = [
    {
      id: 1,
      category: "landscapes",
      title:
        language === "ar"
          ? "حقول خضراء في منطقة الأحساء"
          : "Green Fields in Al-Ahsa",
      description:
        language === "ar"
          ? "مناظر خلابة للحقول الخضراء في منطقة الأحساء"
          : "Beautiful views of green fields in Al-Ahsa region",
      image:
        "https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBncmVlbiUyMGZpZWxkfGVufDF8fHx8MTc3MDcyMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 245,
      photographer: language === "ar" ? "فريق ريف السعودية" : "Reef Saudi Team",
    },
    {
      id: 2,
      category: "farmers",
      title:
        language === "ar"
          ? "مزارع سعودي يعتني بمحاصيله"
          : "Saudi Farmer Caring for His Crops",
      description:
        language === "ar"
          ? "مزارع محلي يعتني بمحاصيله في المزرعة النموذجية"
          : "Local farmer caring for his crops in a model farm",
      image:
        "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 189,
      photographer: language === "ar" ? "عبدالله المالكي" : "Abdullah Al-Malki",
    },
    {
      id: 3,
      category: "crops",
      title: language === "ar" ? "محصول القمح الذهبي" : "Golden Wheat Harvest",
      description:
        language === "ar"
          ? "محصول وفير من القمح الذهبي في موسم الحصاد"
          : "Abundant golden wheat crop during harvest season",
      image:
        "https://images.unsplash.com/photo-1549969363-7d17e5cec74f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBjYW1lcmElMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 312,
      photographer: language === "ar" ? "محمد العتيبي" : "Mohammed Al-Otaibi",
    },
    {
      id: 4,
      category: "heritage",
      title:
        language === "ar"
          ? "البيوت الطينية التراثية"
          : "Traditional Mud Houses",
      description:
        language === "ar"
          ? "البيوت الطينية التراثية في القرى السعودية"
          : "Traditional mud houses in Saudi villages",
      image:
        "https://images.unsplash.com/photo-1684741890382-e13579787ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGFsYnVtJTIwYm9vayUyMG1lbW9yaWVzfGVufDF8fHx8MTc3MDcyMTk0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 278,
      photographer: language === "ar" ? "سارة القحطاني" : "Sarah Al-Qahtani",
    },
    {
      id: 5,
      category: "landscapes",
      title:
        language === "ar" ? "غروب الشمس على الحقول" : "Sunset Over the Fields",
      description:
        language === "ar"
          ? "منظر ساحر لغروب الشمس فوق الحقول الزراعية"
          : "Stunning view of sunset over agricultural fields",
      image:
        "https://images.unsplash.com/photo-1770250959829-de36726e99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMGV2ZW50JTIwc2NoZWR1bGUlMjBwbGFubmluZ3xlbnwxfHx8fDE3NzA3MjE5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 421,
      photographer: language === "ar" ? "خالد الشمري" : "Khalid Al-Shammari",
    },
    {
      id: 6,
      category: "farmers",
      title:
        language === "ar" ? "تدريب المزارعين الشباب" : "Young Farmers Training",
      description:
        language === "ar"
          ? "جلسة تدريبية للمزارعين الشباب في المزرعة النموذجية"
          : "Training session for young farmers at the model farm",
      image:
        "https://images.unsplash.com/photo-1765920774183-9c0841be77c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwcGhvdG9zJTIwZXhoaWJpdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzcwNzIxODUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 167,
      photographer: language === "ar" ? "نورة الدوسري" : "Noura Al-Dosari",
    },
    {
      id: 7,
      category: "crops",
      title:
        language === "ar"
          ? "حديقة الخضروات العضوية"
          : "Organic Vegetable Garden",
      description:
        language === "ar"
          ? "مجموعة متنوعة من الخضروات العضوية الطازجة"
          : "Variety of fresh organic vegetables",
      image:
        "https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBncmVlbiUyMGZpZWxkfGVufDF8fHx8MTc3MDcyMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 234,
      photographer: language === "ar" ? "أحمد الغامدي" : "Ahmed Al-Ghamdi",
    },
    {
      id: 8,
      category: "heritage",
      title:
        language === "ar"
          ? "أدوات الزراعة التقليدية"
          : "Traditional Farming Tools",
      description:
        language === "ar"
          ? "عرض لأدوات الزراعة التقليدية التراثية"
          : "Display of traditional heritage farming tools",
      image:
        "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHBsYXklMjBwcm9kdWN0aW9uJTIwZmlsbXxlbnwxfHx8fDE3NzA3MjE4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 198,
      photographer: language === "ar" ? "فاطمة الحربي" : "Fatima Al-Harbi",
    },
    {
      id: 9,
      category: "landscapes",
      title:
        language === "ar"
          ? "الجبال الخضراء في عسير"
          : "Green Mountains in Asir",
      description:
        language === "ar"
          ? "المناظر الطبيعية الخلابة للجبال الخضراء في منطقة عسير"
          : "Beautiful natural scenery of green mountains in Asir region",
      image:
        "https://images.unsplash.com/photo-1549969363-7d17e5cec74f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBjYW1lcmElMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 356,
      photographer:
        language === "ar" ? "عبدالرحمن آل سعود" : "Abdulrahman Al Saud",
    },
    {
      id: 10,
      category: "crops",
      title: language === "ar" ? "بساتين النخيل" : "Palm Groves",
      description:
        language === "ar"
          ? "بساتين النخيل الممتدة في واحة الأحساء"
          : "Extensive palm groves in Al-Ahsa oasis",
      image:
        "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 289,
      photographer: language === "ar" ? "منصور الخالدي" : "Mansour Al-Khalidi",
    },
    {
      id: 11,
      category: "farmers",
      title: language === "ar" ? "المزارعة السعودية" : "Saudi Woman Farmer",
      description:
        language === "ar"
          ? "مزارعة سعودية تعمل في مشروع ريادي زراعي"
          : "Saudi woman farmer working on an agricultural entrepreneurial project",
      image:
        "https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBncmVlbiUyMGZpZWxkfGVufDF8fHx8MTc3MDcyMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 412,
      photographer: language === "ar" ? "ريم العنزي" : "Reem Al-Anzi",
    },
    {
      id: 12,
      category: "heritage",
      title:
        language === "ar" ? "السوق الشعبي التراثي" : "Traditional Folk Market",
      description:
        language === "ar"
          ? "السوق الشعبي التراثي للمنتجات الزراعية المحلية"
          : "Traditional folk market for local agricultural products",
      image:
        "https://images.unsplash.com/photo-1765920774183-9c0841be77c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwcGhvdG9zJTIwZXhoaWJpdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzcwNzIxODUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 223,
      photographer: language === "ar" ? "سلطان المطيري" : "Sultan Al-Mutairi",
    },
  ];

  const filteredGallery =
    selectedCategory === "all"
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

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
            backgroundImage: `url(https://images.unsplash.com/photo-1684741890382-e13579787ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGFsYnVtJTIwYm9vayUyMG1lbW9yaWVzfGVufDF8fHx8MTc3MDcyMTk0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
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
                {t("galleryBook")}
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
              {t("galleryBook")}
            </h2>
            <p className="text-lg leading-relaxed text-[#052F2A]/80 mb-8">
              {language === "ar"
                ? 'رحلة التنمية المستدامة عبر عدسة الكاميرا، من خلال معرض يبرز جمال المناطق الريفية في المملكة العربية السعودية، وجهود برنامج "ريف السعودية" في دعم المزارعين والمشاريع الريفية.'
                : 'A journey of sustainable development through the camera lens, through a gallery showcasing the beauty of rural areas in the Kingdom of Saudi Arabia, and the efforts of the "Reef Saudi" program in supporting farmers and rural projects.'}
            </p>

            {/* Action Links */}
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <span className="text-lg">➜</span>
                <span>
                  {language === "ar"
                    ? "شاهد القصص المصورة"
                    : "Watch Photo Stories"}
                </span>
              </button>

              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#035938] text-[#035938] rounded-full font-bold hover:bg-[#035938] hover:text-white hover:shadow-xl transition-all duration-300">
                <span className="text-lg">↗</span>
                <span>
                  {language === "ar"
                    ? "استكشف المعرض الكامل"
                    : "Explore Full Gallery"}
                </span>
              </button>

              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-[#035938] hover:text-[#52BC88] transition-colors font-bold px-4 py-3"
              >
                <span className="text-lg">➜</span>
                <span>
                  {language === "ar"
                    ? "الرجوع إلى المركز الإعلامي"
                    : "Back to Media Center"}
                </span>
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div
            className="flex justify-center gap-4 mb-12 flex-wrap"
            style={{
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                  selectedCategory === cat.key
                    ? "bg-gradient-to-r from-[#035938] to-[#52BC88] text-white shadow-2xl scale-105"
                    : "bg-white text-[#035938] border-2 border-[#52BC88]/30 hover:border-[#035938] hover:shadow-lg"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Gallery Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.2s backwards",
            }}
          >
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className={`group relative rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  index % 5 === 0
                    ? "md:row-span-2 aspect-[3/4]"
                    : "aspect-square"
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.05 * index}s backwards`,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Photographer */}
                  <div className="flex items-center justify-between text-white/90 text-sm mb-4">
                    <span>{item.photographer}</span>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span>{item.likes}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 p-3 bg-white/20 backdrop-blur-md rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="flex-1 p-3 bg-white/20 backdrop-blur-md rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="flex-1 p-3 bg-white/20 backdrop-blur-md rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="flex-1 p-3 bg-white/20 backdrop-blur-md rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Likes Badge (Always Visible) */}
                <div className="absolute top-4 right-4">
                  <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full flex items-center gap-2 text-white">
                    <Heart className="w-4 h-4 fill-white" />
                    <span className="text-sm font-bold">{item.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="px-12 py-5 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              {language === "ar" ? "تحميل المزيد من الصور" : "Load More Photos"}
            </button>
          </div>

          {/* Statistics Section */}
          <div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.6s backwards",
            }}
          >
            {[
              { number: "12K+", label: language === "ar" ? "صورة" : "Photos" },
              {
                number: "500+",
                label: language === "ar" ? "مصور" : "Photographers",
              },
              { number: "50K+", label: language === "ar" ? "إعجاب" : "Likes" },
              { number: "25+", label: language === "ar" ? "منطقة" : "Regions" },
            ].map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white rounded-[30px] p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#035938] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#052F2A]/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
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
