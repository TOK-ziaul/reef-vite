import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

export const EventsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filters = [
    { key: "all", label: language === "ar" ? "جميع الفعاليات" : "All Events" },
    { key: "upcoming", label: language === "ar" ? "قادمة" : "Upcoming" },
    { key: "ongoing", label: language === "ar" ? "جارية" : "Ongoing" },
    { key: "past", label: language === "ar" ? "سابقة" : "Past" },
  ];

  // Mock events data
  const events = [
    {
      id: 1,
      status: "upcoming",
      title:
        language === "ar"
          ? "المعرض الزراعي السعودي 2025"
          : "Saudi Agricultural Exhibition 2025",
      description:
        language === "ar"
          ? "معرض شامل لعرض أحدث التقنيات والمنتجات الزراعية في المملكة"
          : "Comprehensive exhibition showcasing the latest agricultural technologies and products in the Kingdom",
      date: "2025-03-15",
      time: "09:00 AM",
      location:
        language === "ar"
          ? "الرياض - مركز المعارض"
          : "Riyadh - Exhibition Center",
      attendees: "500+",
      image:
        "https://images.unsplash.com/photo-1765920774183-9c0841be77c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwcGhvdG9zJTIwZXhoaWJpdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzcwNzIxODUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: language === "ar" ? "معارض" : "Exhibitions",
    },
    {
      id: 2,
      status: "upcoming",
      title:
        language === "ar"
          ? "ورشة عمل: الزراعة المستدامة"
          : "Workshop: Sustainable Agriculture",
      description:
        language === "ar"
          ? "ورشة تدريبية متخصصة في تقنيات الزراعة المستدامة والحفاظ على الموارد الطبيعية"
          : "Specialized training workshop on sustainable agriculture techniques and natural resource conservation",
      date: "2025-02-25",
      time: "10:00 AM",
      location:
        language === "ar"
          ? "الأحساء - مركز التدريب"
          : "Al-Ahsa - Training Center",
      attendees: "150",
      image:
        "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: language === "ar" ? "ورش عمل" : "Workshops",
    },
    {
      id: 3,
      status: "ongoing",
      title:
        language === "ar"
          ? "برنامج تدريب المزارعين الشباب"
          : "Young Farmers Training Program",
      description:
        language === "ar"
          ? "برنامج تدريبي مكثف لتأهيل الجيل الجديد من المزارعين السعوديين"
          : "Intensive training program to qualify the new generation of Saudi farmers",
      date: "2025-02-10",
      time: "08:00 AM",
      location:
        language === "ar" ? "جازان - المزرعة النموذجية" : "Jazan - Model Farm",
      attendees: "200",
      image:
        "https://images.unsplash.com/photo-1690986375486-460dc48dd499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBncmVlbiUyMGZpZWxkfGVufDF8fHx8MTc3MDcyMTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: language === "ar" ? "برامج تدريبية" : "Training Programs",
    },
    {
      id: 4,
      status: "upcoming",
      title:
        language === "ar"
          ? "مؤتمر الابتكار الزراعي"
          : "Agricultural Innovation Conference",
      description:
        language === "ar"
          ? "مؤتمر دولي لمناقشة أحدث الابتكارات والتقنيات في المجال الزراعي"
          : "International conference to discuss the latest innovations and technologies in agriculture",
      date: "2025-04-20",
      time: "09:00 AM",
      location:
        language === "ar"
          ? "جدة - مركز المؤتمرات الدولي"
          : "Jeddah - International Conference Center",
      attendees: "800+",
      image:
        "https://images.unsplash.com/photo-1549969363-7d17e5cec74f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBjYW1lcmElMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: language === "ar" ? "مؤتمرات" : "Conferences",
    },
    {
      id: 5,
      status: "past",
      title: language === "ar" ? "يوم المزارع السعودي" : "Saudi Farmer Day",
      description:
        language === "ar"
          ? "احتفالية سنوية لتكريم المزارعين والمساهمين في التنمية الزراعية"
          : "Annual celebration to honor farmers and contributors to agricultural development",
      date: "2025-01-15",
      time: "05:00 PM",
      location:
        language === "ar"
          ? "القصيم - الساحة المركزية"
          : "Qassim - Central Plaza",
      attendees: "1000+",
      image:
        "https://images.unsplash.com/photo-1763962274119-1a0a0d418520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzcwNzIxNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: language === "ar" ? "احتفاليات" : "Celebrations",
    },
    {
      id: 6,
      status: "past",
      title:
        language === "ar"
          ? "حفل تخرج أكاديمية ريف"
          : "Reef Academy Graduation Ceremony",
      description:
        language === "ar"
          ? "حفل تخرج الدفعة الخامسة من برنامج أكاديمية ريف للتدريب الزراعي"
          : "Graduation ceremony for the fifth batch of Reef Academy agricultural training program",
      date: "2025-01-05",
      time: "06:00 PM",
      location:
        language === "ar"
          ? "الرياض - قاعة الملك فهد"
          : "Riyadh - King Fahd Hall",
      attendees: "300",
      image:
        "https://images.unsplash.com/photo-1770250959829-de36726e99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMGV2ZW50JTIwc2NoZWR1bGUlMjBwbGFubmluZ3xlbnwxfHx8fDE3NzA3MjE5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: language === "ar" ? "تخريج" : "Graduation",
    },
  ];

  const filteredEvents =
    selectedFilter === "all"
      ? events
      : events.filter((event) => event.status === selectedFilter);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      upcoming: {
        label: language === "ar" ? "قادمة" : "Upcoming",
        color: "from-[#52BC88] to-[#52BC88]/80",
        textColor: "text-white",
      },
      ongoing: {
        label: language === "ar" ? "جارية الآن" : "Ongoing",
        color: "from-[#F1BC28] to-[#F1BC28]/80",
        textColor: "text-[#035938]",
      },
      past: {
        label: language === "ar" ? "منتهية" : "Past",
        color: "from-gray-400 to-gray-300",
        textColor: "text-white",
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <span
        className={`px-4 py-2 bg-gradient-to-r ${config.color} ${config.textColor} rounded-full text-xs font-bold shadow-lg`}
      >
        {config.label}
      </span>
    );
  };

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
            backgroundImage: `url(https://images.unsplash.com/photo-1770250959829-de36726e99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMGV2ZW50JTIwc2NoZWR1bGUlMjBwbGFubmluZ3xlbnwxfHx8fDE3NzA3MjE5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
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
                {t("events")}
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
              {t("events")}
            </h2>
            <p className="text-lg leading-relaxed text-[#052F2A]/80 mb-6">
              {language === "ar"
                ? "تعرف على جميع الأنشطة والمناسبات والفعاليات التي ينظمها برنامج ريف السعودية أو يشارك بها بما في ذلك الملتقيات الريفية والمؤتمرات والندوات وورش العمل واللقاءات الميدانية."
                : "Learn about all the activities, occasions, and events organized by or participated in by Reef Saudi program, including rural forums, conferences, seminars, workshops, and field meetings."}
            </p>
            <p className="text-base text-[#052F2A]/70 mb-8">
              {language === "ar"
                ? "هنا تُضاف روابط الفعاليات والمواد المرافقة:"
                : "Event links and accompanying materials are added here:"}
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

          {/* Filter Buttons */}
          <div
            className="flex justify-center gap-4 mb-12 flex-wrap"
            style={{
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                  selectedFilter === filter.key
                    ? "bg-gradient-to-r from-[#035938] to-[#52BC88] text-white shadow-2xl scale-105"
                    : "bg-white text-[#035938] border-2 border-[#52BC88]/30 hover:border-[#035938] hover:shadow-lg"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="group backdrop-blur-xl bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 * index}s backwards`,
                }}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-2 relative h-80 lg:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white/95 via-white/50 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-6 right-6">
                      {getStatusBadge(event.status)}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[#035938] rounded-full text-sm font-bold">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4 leading-tight group-hover:text-[#52BC88] transition-colors">
                      {event.title}
                    </h2>
                    <p className="text-[#052F2A]/80 text-lg leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {/* Date */}
                      <div className="flex items-center gap-3 text-[#035938]">
                        <div className="w-12 h-12 bg-[#F9F7EF] rounded-2xl flex items-center justify-center">
                          <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs text-[#052F2A]/60 mb-1">
                            {language === "ar" ? "التاريخ" : "Date"}
                          </div>
                          <div className="font-bold">
                            {new Date(event.date).toLocaleDateString(
                              language === "ar" ? "ar-SA" : "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              },
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Time */}
                      <div className="flex items-center gap-3 text-[#035938]">
                        <div className="w-12 h-12 bg-[#F9F7EF] rounded-2xl flex items-center justify-center">
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs text-[#052F2A]/60 mb-1">
                            {language === "ar" ? "الوقت" : "Time"}
                          </div>
                          <div className="font-bold">{event.time}</div>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-3 text-[#035938]">
                        <div className="w-12 h-12 bg-[#F9F7EF] rounded-2xl flex items-center justify-center">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs text-[#052F2A]/60 mb-1">
                            {language === "ar" ? "الموقع" : "Location"}
                          </div>
                          <div className="font-bold">{event.location}</div>
                        </div>
                      </div>

                      {/* Attendees */}
                      <div className="flex items-center gap-3 text-[#035938]">
                        <div className="w-12 h-12 bg-[#F9F7EF] rounded-2xl flex items-center justify-center">
                          <Users className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs text-[#052F2A]/60 mb-1">
                            {language === "ar" ? "الحضور" : "Attendees"}
                          </div>
                          <div className="font-bold">{event.attendees}</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div>
                      <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#035938] to-[#52BC88] text-white rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <span>
                          {language === "ar"
                            ? "المزيد من التفاصيل"
                            : "More Details"}
                        </span>
                        <ArrowRight
                          className={`w-5 h-5 transition-transform duration-300 group-hover/btn:${isRTL ? "-translate-x-2" : "translate-x-2"}`}
                        />
                      </button>
                    </div>
                  </div>
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
