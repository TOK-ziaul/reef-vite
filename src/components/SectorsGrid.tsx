import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Droplet,
  Coffee,
  Flower2,
  Apple,
  Milk,
  Wheat,
  Fish,
  Palette,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export function SectorsGrid() {
  const { t, language } = useLanguage();
  const sectorsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<string | null>(
    null,
  );
  const [isMd, setIsMd] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsMd(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (!sectorsRef.current) return; // Check scope before creating context
    
    const ctx = gsap.context(() => {
      // Animate title
      if (titleRef.current && titleRef.current.children.length > 0) {
        gsap.fromTo(
          titleRef.current.children,
          { opacity: 0, y: 80, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
            },
          },
        );
      }

      // Animate sector cards
      if (sectorsRef.current) {
        const cards = sectorsRef.current.querySelectorAll('.sector-card');

        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 100,
              rotateY: -20,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              rotateY: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.08,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: sectorsRef.current,
                start: 'top 75%',
              },
            }
          );

          // Parallax on scroll
          cards.forEach((card) => {
            if (!card) return;
            
            gsap.to(card, {
              y: -20,
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            });
          });
        }
      }

      // Animate floating shapes
      const floatShape1 =
        document.querySelector(".float-shape-1");
      const floatShape2 =
        document.querySelector(".float-shape-2");

      if (floatShape1) {
        gsap.to(floatShape1, {
          y: -30,
          x: 20,
          rotation: 360,
          duration: 15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (floatShape2) {
        gsap.to(floatShape2, {
          y: 40,
          x: -30,
          rotation: -360,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, sectorsRef);

    return () => ctx.revert();
  }, []);

  const sectors = [
    {
      titleKey: "sector1Title",
      descKey: "sector1Desc",
      point1Key: "sector1Point1",
      point2Key: "sector1Point2",
      point3Key: "sector1Point3",
      icon: <Droplet className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1586616780827-13166a8d449b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVrZWVwaW5nJTIwaG9uZXklMjBmYXJtfGVufDF8fHx8MTc2Mjg0NTEzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient:
        "from-[#F1BC28]/90 via-[#F1BC28]/70 to-[#035938]/90",
      iconBg: "from-[#F1BC28] to-[#F1BC28]/80",
    },
    {
      titleKey: "sector2Title",
      descKey: "sector2Desc",
      point1Key: "sector2Point1",
      point2Key: "sector2Point2",
      point3Key: "sector2Point3",
      icon: <Coffee className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1693734656256-e589d44cbd30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwYmVhbnN8ZW58MXx8fHwxNzYyODQ1MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient:
        "from-[#035938]/90 via-[#52BC88]/70 to-[#035938]/90",
      iconBg: "from-[#035938] to-[#52BC88]",
    },
  ];

  const sectors2 = [
    {
      titleKey: "sector4Title",
      descKey: "sector4Desc",
      point1Key: "sector4Point1",
      point2Key: "sector4Point2",
      point3Key: "sector4Point3",
      icon: <Apple className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1523539693385-e5e891eb4465?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient:
        "from-[#F1BC28]/90 via-[#035938]/70 to-[#F1BC28]/90",
      iconBg: "from-[#F1BC28] to-[#035938]",
    },
    {
      titleKey: "sector5Title",
      descKey: "sector5Desc",
      point1Key: "sector5Point1",
      point2Key: "sector5Point2",
      point3Key: "sector5Point3",
      icon: <Milk className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      gradient:
        "from-[#035938]/90 via-[#F1BC28]/70 to-[#035938]/90",
      iconBg: "from-[#035938] to-[#F1BC28]",
    },
    {
      titleKey: "sector6Title",
      descKey: "sector6Desc",
      point1Key: "sector6Point1",
      point2Key: "sector6Point2",
      point3Key: "sector6Point3",
      icon: <Wheat className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1530541835461-dedaf9cf368a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      gradient:
        "from-[#52BC88]/90 via-[#035938]/70 to-[#52BC88]/90",
      iconBg: "from-[#52BC88] to-[#035938]",
    },
  ];

  const sectors3 = [
    {
      titleKey: "sector7Title",
      descKey: "sector7Desc",
      point1Key: "sector7Point1",
      point2Key: "sector7Point2",
      point3Key: "sector7Point3",
      icon: <Fish className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1695566372318-62666bb5ffe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc0fHxmYXJtaW5nfGVufDB8fDB8fHww",
      gradient:
        "from-[#F1BC28]/90 via-[#52BC88]/70 to-[#000903e6]/90",
      iconBg: "from-[#F1BC28] to-[#52BC88]",
    },
    {
      titleKey: "sector8Title",
      descKey: "sector8Desc",
      point1Key: "sector8Point1",
      point2Key: "sector8Point2",
      point3Key: "sector8Point3",
      icon: <Palette className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1710563159928-83611beece71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxmYXJtaW5nfGVufDB8fDB8fHww",
      gradient:
        "from-[#035938]/90 via-[#52BC88]/70 to-[#F1BC28]/90",
      iconBg: "from-[#035938] to-[#52BC88]",
    },
    {
      titleKey: "sector9Title",
      descKey: "sector9Desc",
      point1Key: "sector9Point1",
      point2Key: "sector9Point2",
      point3Key: "sector9Point3",
      icon: <Users className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1651592278391-4e42db713c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxmYXJtaW5nfGVufDB8fDB8fHww",
      gradient:
        "from-[#52BC88]/90 via-[#F1BC28]/70 to-[#035938]/90",
      iconBg: "from-[#52BC88] to-[#F1BC28]",
    },
  ];

  // Small overlay component to animate mount with translate + opacity
  function Overlay({
    children,
    dir,
  }: {
    children: React.ReactNode;
    dir?: "rtl" | "ltr";
  }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      // trigger transition on next frame once mounted
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => {
        cancelAnimationFrame(raf);
        setVisible(false);
      };
    }, []);

    const style: React.CSSProperties = {
      transform: visible
        ? "translateY(0px)"
        : "translateY(12px)",
      opacity: visible ? 1 : 0,
      transition:
        "transform 300ms cubic-bezier(.22,.9,.28,1), opacity 300ms ease",
      willChange: "transform, opacity",
      WebkitBackfaceVisibility: "hidden",
    };

    return (
      <div
        dir={dir}
        style={style}
        className={`rounded-3xl absolute inset-0 p-6 pointer-events-auto justify-between  backdrop-blur-sm flex flex-col  overflow-auto max-h-full`}
      >
        {children}
      </div>
    );
  }
  // Magnetic hover effect
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      x: x * 0.08,
      y: y * 0.08,
      rotationY: x * 0.02,
      rotationX: -y * 0.02,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    const card = e.currentTarget;
    gsap.to(card, {
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.6)",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F9F7EF] relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="float-shape-1 absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#52BC88]/10 to-[#035938]/10 rounded-full blur-[100px]" />
        <div className="float-shape-2 absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#F1BC28]/10 to-[#52BC88]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div
          ref={titleRef}
          className="mb-20 text-center"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/80 backdrop-blur-md border border-[#035938]/20 rounded-full">
            <div className="w-2 h-2 bg-[#52BC88] rounded-full animate-pulse" />
            <span className="text-[#035938] text-2xl font-medium">
              {language === "ar"
                ? "القطاعات الريفية"
                : "Rural Sectors"}
            </span>
            <div
              className="w-2 h-2 bg-[#F1BC28] rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          <h2 className="text-[#052F2A] mb-6 leading-tight">
            {t("sectorsTitle")}
          </h2>

          <p className="text-[#052F2A]/70 text-xl max-w-3xl mx-auto leading-relaxed">
            {t("sectorsDesc")}
          </p>
        </div>

        {/* Sectors Grid */}
        <div
          ref={sectorsRef}
          className="grid gap-2 transition-all duration-300"
          style={{
            gridTemplateColumns: !isMd
              ? "1fr"
              : activeCard && activeCard.startsWith("s1-")
                ? (() => {
                    const idx = Number(
                      activeCard.split("-")[1],
                    );
                    const cols = ["1fr", "1fr"];
                    if (
                      !Number.isNaN(idx) &&
                      idx >= 0 &&
                      idx < cols.length
                    )
                      cols[idx] = "2fr";
                    return cols.join(" ");
                  })()
                : "2fr 1fr",
          }}
        >
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="sector-card"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setActiveCard(`s1-${index}`)}
              onMouseLeave={() =>
                setActiveCard((prev) =>
                  prev === `s1-${index}` ? null : prev,
                )
              }
              onFocus={() => setActiveCard(`s1-${index}`)}
              onBlur={() =>
                setActiveCard((prev) =>
                  prev === `s1-${index}` ? null : prev,
                )
              }
              onClick={() =>
                setActiveCard((prev) =>
                  prev === `s1-${index}` ? null : `s1-${index}`,
                )
              }
              tabIndex={0}
            >
              <div
                className={`group relative ${isMd ? "h-full" : "h-auto"} bg-white rounded-3xl overflow-visible shadow-lg`}
              >
                {/* Image Background */}
                <div
                  className={`relative  rounded-3xl h-[300px] overflow-hidden`}
                >
                  <ImageWithFallback
                    src={sector.image}
                    alt={t(sector.titleKey)}
                    className={`w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110`}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}
                  />

                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${sector.iconBg} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                    >
                      {sector.icon}
                    </div>
                  </div>

                  {/* Title on Image */}
                  <div
                    className="absolute bottom-6 left-6 right-6"
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    <h3 className="text-white drop-shadow-lg text-2xl font-semibold">
                      {t(sector.titleKey)}
                    </h3>

                    <button
                      className={`mt-2 w-full py-3 bg-gradient-to-r ${sector.iconBg} text-white rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 ${isMd ? "hidden group-hover:block" : "block"}`}
                    >
                      {language === "ar"
                        ? "زر لاستكشاف القطاع"
                        : "Explore Sector"}
                    </button>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content overlay (hidden by default, shown on card hover) */}
                {activeCard === `s1-${index}` ? (
                  <Overlay
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    <p className="text-white text-sm md:text-lg mb-4 leading-relaxed">
                      {t(sector.descKey)}
                    </p>

                    {/* Bullet Points */}
                    <ul
                      className={`space-y-2 text-sm md:text-base ${language === "ar" ? "mr-5" : "ml-5"}`}
                    >
                      <li className="flex items-start gap-2 text-white">
                        <span className="text-[#52BC88] mt-1">
                          ●
                        </span>
                        <span>{t(sector.point1Key)}</span>
                      </li>
                      <li className="flex items-start gap-2 text-white">
                        <span className="text-[#F1BC28] mt-1">
                          ●
                        </span>
                        <span>{t(sector.point2Key)}</span>
                      </li>
                      <li className="flex items-start gap-2 text-white">
                        <span className="text-[#035938] mt-1">
                          ●
                        </span>
                        <span>{t(sector.point3Key)}</span>
                      </li>
                    </ul>

                    {/* Button */}
                    <button
                      className={`mt-2 w-full py-3 bg-gradient-to-r ${sector.iconBg} text-white rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 pointer-events-auto cursor-pointer`}
                    >
                      {language === "ar"
                        ? "زر لاستكشاف القطاع"
                        : "Explore Sector"}
                    </button>
                  </Overlay>
                ) : null}

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <div
          ref={sectorsRef}
          className="grid gap-2 transition-all duration-300"
          style={{
            gridTemplateColumns: !isMd
              ? "1fr"
              : activeCard && activeCard.startsWith("s2-")
                ? (() => {
                    const idx = Number(
                      activeCard.split("-")[1],
                    );
                    const cols = ["1fr", "1fr", "1fr"];
                    if (
                      !Number.isNaN(idx) &&
                      idx >= 0 &&
                      idx < cols.length
                    )
                      cols[idx] = "2fr";
                    return cols.join(" ");
                  })()
                : "1fr 1fr 1fr",
          }}
        >
          {sectors2.map((sector, index) => (
            <div
              key={index}
              className="sector-card"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setActiveCard(`s2-${index}`)}
              onMouseLeave={() =>
                setActiveCard((prev) =>
                  prev === `s2-${index}` ? null : prev,
                )
              }
              onFocus={() => setActiveCard(`s2-${index}`)}
              onBlur={() =>
                setActiveCard((prev) =>
                  prev === `s2-${index}` ? null : prev,
                )
              }
              onClick={() =>
                setActiveCard((prev) =>
                  prev === `s2-${index}` ? null : `s2-${index}`,
                )
              }
              tabIndex={0}
            >
              <div
                className={`group relative ${isMd ? "h-full" : "h-auto"} bg-white rounded-3xl overflow-visible shadow-lg`}
              >
                {/* Image Background */}
                <div
                  className={`relative rounded-3xl h-[300px] overflow-hidden`}
                >
                  <ImageWithFallback
                    src={sector.image}
                    alt={t(sector.titleKey)}
                    className={`${isMd ? "w-full h-full " : "w-full h-auto "} object-cover transition-transform duration-700 group-hover:scale-110`}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}
                  />

                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${sector.iconBg} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                    >
                      {sector.icon}
                    </div>
                  </div>

                  {/* Title on Image */}
                  <div
                    className="absolute bottom-6 left-6 right-6"
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    <h3 className="text-white drop-shadow-lg text-2xl font-semibold">
                      {t(sector.titleKey)}
                    </h3>
                    <button
                      className={`mt-2 w-full py-3 bg-gradient-to-r ${sector.iconBg} text-white rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 ${isMd ? "hidden group-hover:block" : "block"}`}
                    >
                      {language === "ar"
                        ? "زر لاستكشاف القطاع"
                        : "Explore Sector"}
                    </button>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content overlay (hidden by default, shown on card hover) */}
                {activeCard === `s2-${index}` ? (
                  <Overlay
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    <p className="text-white text-sm md:text-lg mb-4 leading-relaxed">
                      {t(sector.descKey)}
                    </p>

                    {/* Bullet Points */}
                    <ul
                      className={`space-y-2 text-sm md:text-base ${language === "ar" ? "mr-5" : "ml-5"}`}
                    >
                      <li className="flex items-start gap-2 text-white">
                        <span className="text-[#52BC88] mt-1">
                          ●
                        </span>
                        <span>{t(sector.point1Key)}</span>
                      </li>
                      <li className="flex items-start gap-2 text-white">
                        <span className="text-[#F1BC28] mt-1">
                          ●
                        </span>
                        <span>{t(sector.point2Key)}</span>
                      </li>
                      <li className="flex items-start gap-2 text-white">
                        <span className="text-[#035938] mt-1">
                          ●
                        </span>
                        <span>{t(sector.point3Key)}</span>
                      </li>
                    </ul>

                    {/* Button */}
                    <button
                      className={`mt-2 w-full py-3 bg-gradient-to-r ${sector.iconBg} text-white rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 pointer-events-auto cursor-pointer`}
                    >
                      {language === "ar"
                        ? "زر لاستكشاف القطاع"
                        : "Explore Sector"}
                    </button>
                  </Overlay>
                ) : null}

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <div
          ref={sectorsRef}
          className="grid gap-2 transition-all duration-300"
          style={{
            gridTemplateColumns: !isMd
              ? "1fr"
              : activeCard && activeCard.startsWith("s3-")
                ? (() => {
                    const idx = Number(
                      activeCard.split("-")[1],
                    );
                    const cols = ["1fr", "1fr", "1fr"];
                    if (
                      !Number.isNaN(idx) &&
                      idx >= 0 &&
                      idx < cols.length
                    )
                      cols[idx] = "2fr";
                    // if no active in this grid, use default layout
                    return activeCard &&
                      activeCard.startsWith("s3-")
                      ? cols.join(" ")
                      : "1fr 2fr 1fr";
                  })()
                : "1fr 2fr 1fr",
          }}
        >
          {sectors3.map((sector, index) => (
            <div
              key={index}
              className="sector-card rounded-3xl"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setActiveCard(`s3-${index}`)}
              onMouseLeave={() =>
                setActiveCard((prev) =>
                  prev === `s3-${index}` ? null : prev,
                )
              }
              onFocus={() => setActiveCard(`s3-${index}`)}
              onBlur={() =>
                setActiveCard((prev) =>
                  prev === `s3-${index}` ? null : prev,
                )
              }
              onClick={() =>
                setActiveCard((prev) =>
                  prev === `s3-${index}` ? null : `s3-${index}`,
                )
              }
              tabIndex={0}
            >
              <div
                className={`group rounded-3xl relative ${isMd ? "h-full" : "h-auto"} bg-white rounded-3xl overflow-visible shadow-lg`}
              >
                {/* Image Background */}
                <div
                  className={`relative rounded-3xl h-[300px] overflow-hidden`}
                >
                  <ImageWithFallback
                    src={sector.image}
                    alt={t(sector.titleKey)}
                    className={`${isMd ? "w-full h-full" : "w-full h-auto"} object-cover transition-transform duration-700 group-hover:scale-110`}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}
                  />

                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${sector.iconBg} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                    >
                      {sector.icon}
                    </div>
                  </div>

                  {/* Title on Image */}
                  <div
                    className="absolute bottom-6 left-6 right-6"
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    <h3 className="text-white drop-shadow-lg text-2xl font-semibold">
                      {t(sector.titleKey)}
                    </h3>
                    <button
                      className={`mt-2 w-full py-3 bg-gradient-to-r ${sector.iconBg} text-white rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 ${isMd ? "hidden group-hover:block" : "block"}`}
                    >
                      {language === "ar"
                        ? "زر لاستكشاف القطاع"
                        : "Explore Sector"}
                    </button>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content overlay (hidden by default, shown on card hover) */}
                {activeCard === `s3-${index}` ? (
                  <Overlay
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    <p className="text-white text-sm md:text-lg mb-4 leading-relaxed">
                      {t(sector.descKey)}
                    </p>

                    {/* Bullet Points */}
                    <ul
                      className={`space-y-2 text-sm md:text-base ${language === "ar" ? "mr-5" : "ml-5"}`}
                    >
                      <li className="flex items-start gap-2 text-white">
                        <span className="text-[#52BC88] mt-1">
                          ●
                        </span>
                        <span>{t(sector.point1Key)}</span>
                      </li>
                      <li className="flex items-start gap-2 text-white">
                        <span className="text-[#F1BC28] mt-1">
                          ●
                        </span>
                        <span>{t(sector.point2Key)}</span>
                      </li>
                      <li className="flex items-start gap-2 text-white">
                        <span className="text-[#035938] mt-1">
                          ●
                        </span>
                        <span>{t(sector.point3Key)}</span>
                      </li>
                    </ul>

                    {/* Button */}
                    <button
                      className={`mt-2 w-full py-3 bg-gradient-to-r ${sector.iconBg} text-white rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 pointer-events-auto cursor-pointer`}
                    >
                      {language === "ar"
                        ? "زر لاستكشاف القطاع"
                        : "Explore Sector"}
                    </button>
                  </Overlay>
                ) : null}

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}