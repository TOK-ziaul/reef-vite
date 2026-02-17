import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import {
  Wheat,
  Sprout,
  Users,
  Droplets,
  Tractor,
  TreePine,
  DollarSign,
  Handshake,
  GraduationCap,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const GAP_PX = 24;

export function RainfedWorkAxes() {
  const { language } = useLanguage();
  const isRTL = language === "ar";
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [stepPx, setStepPx] = useState(0);

  const axes = [
    {
      icon: ClipboardCheck,
      color: "#035938",
      number: "1",
      description:
        language === "ar"
          ? "تطبيق الممارسات الزراعية الجيدة ويشمل ذلك العمليات الزراعية والتربوية."
          : "Implementing good agricultural practices, including agricultural and educational processes.",
    },
    {
      icon: Wheat,
      color: "#52BC88",
      number: "2",
      description:
        language === "ar"
          ? "استنباط وتوفير البذور المحسّنة المناسبة لمناطق الإنتاج حسب ظروفها البيئية والمقاومة للأمراض، وتوزيعها على صغار المنتجين."
          : "Development and provision of improved seeds suitable for production areas according to their environmental conditions and disease resistance, and distributing them to smallholder producers.",
    },
    {
      icon: Users,
      color: "#F1BC28",
      number: "3",
      description:
        language === "ar"
          ? "تقديم خدمات إرشاد ودعم فني لصغار المنتجين."
          : "Providing extension services and technical support to smallholder producers.",
    },
    {
      icon: Droplets,
      color: "#035938",
      number: "4",
      description:
        language === "ar"
          ? "تطوير أنظمة حصاد مياه الأمطار بما يتناسب مع متطلبات مناطق الإنتاج وتعميمها وسط المزارعين، مع إمكانية استخدام الري التكميلي."
          : "Developing rainwater harvesting systems in line with the requirements of production areas and disseminating them among farmers, with the possibility of using supplementary irrigation.",
    },
    {
      icon: Tractor,
      color: "#52BC88",
      number: "5",
      description:
        language === "ar"
          ? "إدخال تقنيات الحصاد الآلي وما بعد الحصاد للتقليل من الفاقد."
          : "Introducing mechanical harvesting and post-harvest technologies to reduce losses.",
    },
    {
      icon: Sprout,
      color: "#F1BC28",
      number: "6",
      description:
        language === "ar"
          ? "تطوير وتنفيذ برامج لمحاصيل: الذرة الرفيعة، السمسم، الدخن، وتوفير خدمات تقنية متقدمة لعمليات ما بعد الحصاد."
          : "Developing and implementing programs for crops: sorghum, sesame, millet, and providing advanced technical services for post-harvest operations.",
    },
    {
      icon: DollarSign,
      color: "#035938",
      number: "7",
      description:
        language === "ar"
          ? "تقديم دعم مالي لتشجيع المزارعين على إنتاج المحاصيل."
          : "Providing financial support to encourage farmers to produce crops.",
    },
    {
      icon: TreePine,
      color: "#52BC88",
      number: "8",
      description:
        language === "ar"
          ? "زراعة الأشجار الغابية في حقول المزارعين."
          : "Planting forest trees in farmers' fields.",
    },
    {
      icon: Handshake,
      color: "#F1BC28",
      number: "9",
      description:
        language === "ar"
          ? "إنشاء جمعيات تعاونية لتقديم خدمات الإنتاج وما بعد الحصاد."
          : "Establishing cooperative associations to provide production and post-harvest services.",
    },
    {
      icon: GraduationCap,
      color: "#035938",
      number: "10",
      description:
        language === "ar"
          ? "تطوير القدرات الفنية للمزارعين."
          : "Developing the technical capacities of farmers.",
    },
  ];

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1280) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;
    const updateStep = () => {
      const containerWidth = carouselRef.current?.offsetWidth ?? 0;
      const gapTotal = (slidesToShow - 1) * GAP_PX;
      const slideWidthPx = (containerWidth - gapTotal) / slidesToShow;
      setStepPx(slideWidthPx + GAP_PX);
    };
    updateStep();
    const ro = new ResizeObserver(updateStep);
    ro.observe(carouselRef.current);
    return () => ro.disconnect();
  }, [slidesToShow]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = axes.length - slidesToShow;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = axes.length - slidesToShow;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };
  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, slidesToShow]);

  const totalDots = axes.length - slidesToShow + 1;

  return (
    <div className="bg-gradient-to-b from-white to-[#F9F7EF] py-20 md:py-28 relative overflow-hidden">
      {/* Subtle animated background */}
      {/* <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#035938] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#52BC88] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#F1BC28] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div> */}

      <div className="max-w-[1600px] mx-auto px-4 md:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#035938] mb-6">
            {language === "ar"
              ? "محاور عمل قطاع المحاصيل البعلية"
              : "Work Axes of the Rainfed Crops Sector"}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] rounded-full mx-auto" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white hover:bg-[#035938] text-[#035938] hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              isRTL ? "right-0 -mr-6" : "left-0 -ml-6"
            }`}
          >
            {isRTL ? (
              <ChevronRight className="w-6 h-6" />
            ) : (
              <ChevronLeft className="w-6 h-6" />
            )}
          </button>
          <button
            onClick={handleNext}
            className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white hover:bg-[#035938] text-[#035938] hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              isRTL ? "left-0 -ml-6" : "right-0 -mr-6"
            }`}
          >
            {isRTL ? (
              <ChevronLeft className="w-6 h-6" />
            ) : (
              <ChevronRight className="w-6 h-6" />
            )}
          </button>

          {/* Slides Container */}
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                direction: isRTL ? "rtl" : "ltr",
                transform:
                  stepPx > 0
                    ? `translateX(${isRTL ? currentIndex * stepPx : -currentIndex * stepPx}px)`
                    : `translateX(${isRTL ? currentIndex * (100 / slidesToShow) : -currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {axes.map((axis, index) => {
                const Icon = axis.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: `calc((100% - ${(slidesToShow - 1) * GAP_PX}px) / ${slidesToShow})`,
                    }}
                  >
                    <div className="group relative h-full">
                      {/* Card */}
                      <div className="relative bg-white rounded-3xl p-8 h-[280px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#035938]/10 overflow-hidden">
                        {/* Gradient accent corner */}
                        <div
                          className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle at top right, ${axis.color}, transparent 70%)`,
                          }}
                        />

                        <div
                          className={`flex flex-col h-full ${isRTL ? "text-right" : "text-left"}`}
                        >
                          {/* Icon and number */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="relative">
                              {/* Number badge overlay */}
                              <div
                                className="absolute -top-2 -right-2 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg z-10 transform group-hover:scale-110 transition-transform duration-300"
                                style={{ backgroundColor: axis.color }}
                              >
                                {axis.number}
                              </div>

                              {/* Icon with glow effect */}
                              <div className="relative">
                                <div
                                  className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                                  style={{ backgroundColor: axis.color }}
                                />
                                <div
                                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg"
                                  style={{ backgroundColor: axis.color }}
                                >
                                  <Icon className="w-10 h-10 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="flex-1 flex items-center">
                            <p className="text-base text-[#052F2A]/90 leading-relaxed">
                              {axis.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-[#035938]"
                    : "w-3 bg-[#035938]/30 hover:bg-[#035938]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
