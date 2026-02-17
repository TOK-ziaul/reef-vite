import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const FishingProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="mb-24 relative overflow-hidden py-20">
      {/* Animated Gradient Blobs Background */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#035938]/30 to-[#52BC88]/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#F1BC28]/30 to-[#52BC88]/30 rounded-full blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-[#52BC88]/20 to-[#035938]/20 rounded-full blur-3xl"
          style={{ animation: "float 10s ease-in-out infinite reverse" }}
        ></div>
      </div> */}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes morphBlob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes slideInCurve {
          from { opacity: 0; transform: translateY(50px) rotate(-5deg); }
          to { opacity: 1; transform: translateY(0) rotate(0); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Dramatic Floating Header */}
        <div className={`text-center mb-20 ${language === "ar" ? "rtl" : ""}`}>
          <div className="relative inline-block">
            <h2
              className="text-4xl md:text-6xl font-bold text-[#035938] mb-6 relative z-10"
              style={{
                textShadow: "0 0 40px rgba(5, 89, 56, 0.3)",
              }}
            >
              {t("fishingProjectsTitle")}
            </h2>
            {/* Floating decorative elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-8 w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-full opacity-20 blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Morphing Stats Containers */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 mt-8">
            <div className="relative group perspective-1000">
              <div
                className="relative px-10 py-6 bg-gradient-to-br from-[#035938] via-[#52BC88] to-[#035938] rounded-[2rem] shadow-2xl transform transition-all duration-700 hover:scale-110 hover:rotate-y-12 group-hover:shadow-[0_20px_60px_rgba(5,89,56,0.4)]"
                // style={{
                //   animation: "morphBlob 8s ease-in-out infinite",
                //   transformStyle: "preserve-3d",
                // }}
              >
                {/* <div className="absolute inset-0 bg-white/10 rounded-[2rem] backdrop-blur-sm"></div> */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className="text-left">
                    <p className="text-white/80 text-sm mb-1">
                      {t("fishingProjectsCount")}
                    </p>
                    <p className="text-white text-3xl font-bold">
                      {t("fishingProjectsCountValue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group perspective-1000">
              <div
                className="relative px-10 py-6 bg-gradient-to-br from-[#F1BC28] via-[#52BC88] to-[#F1BC28] rounded-[2rem] shadow-2xl transform transition-all duration-700 hover:scale-110 hover:rotate-y-12 group-hover:shadow-[0_20px_60px_rgba(241,188,40,0.4)]"
                // style={{
                //   animation: "morphBlob 8s ease-in-out infinite reverse",
                //   animationDelay: "1s",
                //   transformStyle: "preserve-3d",
                // }}
              >
                {/* <div className="absolute inset-0 bg-white/10 rounded-[2rem] backdrop-blur-sm"></div> */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className="text-left">
                    <p className="text-white/80 text-sm mb-1">
                      {t("fishingProjectsTotalValue")}
                    </p>
                    <p className="text-white text-3xl font-bold">
                      {t("fishingProjectsTotalValueAmount")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p
            className={`text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${language === "ar" ? "font-arabic" : ""} opacity-90`}
          >
            {t("fishingProjectsIntro")}
          </p>
        </div>

        {/* Flowing River Layout for Key Projects */}
        <div className={`mb-24 ${language === "ar" ? "rtl" : ""}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-[#035938] text-center mb-16 relative inline-block left-1/2 transform -translate-x-1/2">
            {t("fishingKeyProjectsTitle")}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-[#52BC88] to-transparent rounded-full"></div>
          </h3>

          {/* Organic Flowing Cards */}
          <div className="relative">
            {/* Flowing SVG Path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1200 800"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="flowGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#035938" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#52BC88" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#F1BC28" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M 100 200 Q 300 100, 500 200 T 900 200 Q 1100 250, 1100 400"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
                opacity="0.6"
              />
            </svg>

            {/* Project Cards in Organic Positions */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 - Boat Engines */}
              <div
                className="transform md:-translate-y-8"
                style={{ animation: "slideInCurve 0.6s ease-out" }}
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div
                    className="relative p-8 rounded-[3rem] bg-white/80 backdrop-blur-xl border-2 border-[#035938]/20 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-2 hover:shadow-[0_30px_60px_rgba(5,89,56,0.3)]"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="text-center">
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        {t("fishingProject1")}
                      </p>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-tl from-[#52BC88]/20 to-transparent rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>

              {/* Project 2 - EPIRB */}
              <div
                className="transform md:translate-y-4"
                style={{
                  animation: "slideInCurve 0.6s ease-out 0.2s backwards",
                }}
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div
                    className="relative p-8 rounded-[3rem] bg-white/80 backdrop-blur-xl border-2 border-[#52BC88]/20 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-[0_30px_60px_rgba(82,188,136,0.3)]"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="text-center">
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        {t("fishingProject2")}
                      </p>
                    </div>

                    <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-tl from-[#F1BC28]/20 to-transparent rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>

              {/* Project 3 - Cooling Boxes */}
              <div
                className="transform md:-translate-y-4"
                style={{
                  animation: "slideInCurve 0.6s ease-out 0.4s backwards",
                }}
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div
                    className="relative p-8 rounded-[3rem] bg-white/80 backdrop-blur-xl border-2 border-[#F1BC28]/20 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-2 hover:shadow-[0_30px_60px_rgba(241,188,40,0.3)]"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="text-center">
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        {t("fishingProject3")}
                      </p>
                    </div>

                    <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-tl from-[#035938]/20 to-transparent rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fish Auctions - Coastal Wave Design */}
        <div className={`mb-24 ${language === "ar" ? "rtl" : ""}`}>
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#035938]/10 via-[#52BC88]/10 to-[#F1BC28]/10 p-12 md:p-16 backdrop-blur-sm border-2 border-white/50 shadow-2xl">
            {/* Wave SVG Background */}
            <svg
              className="absolute bottom-0 left-0 w-full h-48 opacity-10"
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
            >
              <path
                d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
                fill="#035938"
              />
              <path
                d="M0,80 Q300,50 600,80 T1200,80 L1200,120 L0,120 Z"
                fill="#52BC88"
              />
            </svg>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-10">
                <h3 className="text-2xl md:text-4xl font-bold text-[#035938]">
                  {t("fishingFishAuctionsTitle")}
                </h3>
              </div>

              {/* Floating Location Bubbles */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                {[
                  { name: t("fishingQatif"), delay: "0s" },
                  { name: t("fishingRayis"), delay: "0.1s" },
                  { name: t("fishingUmluj"), delay: "0.2s" },
                  { name: t("fishingQunfudhah"), delay: "0.3s" },
                  { name: t("fishingKhorFarasan"), delay: "0.4s" },
                ].map((location, index) => (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      animation: `slideInCurve 0.5s ease-out ${location.delay} backwards`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative px-8 py-4 rounded-full bg-gradient-to-br from-[#035938] to-[#52BC88] shadow-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
                      <p className="text-white font-bold text-lg">
                        {location.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Boat Maintenance Centers - Dock Visualization */}
        <div className={`mb-24 ${language === "ar" ? "rtl" : ""}`}>
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#F1BC28]/10 via-[#52BC88]/10 to-[#035938]/10 p-12 md:p-16 backdrop-blur-sm border-2 border-white/50 shadow-2xl">
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #035938 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-10">
                <h3 className="text-2xl md:text-4xl font-bold text-[#035938]">
                  {t("fishingMaintenanceCentersTitle")}
                </h3>
              </div>

              {/* Hexagonal Grid Layout */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                {[
                  { name: t("fishingKhorFarasan"), delay: "0s" },
                  {
                    name: `${t("fishingQatif")} (${t("fishingMadaya")})`,
                    delay: "0.1s",
                  },
                  { name: t("fishingQunfudhah"), delay: "0.2s" },
                  { name: t("fishingUmluj"), delay: "0.3s" },
                  { name: t("fishingRayis"), delay: "0.4s" },
                  { name: t("fishingShaqiq"), delay: "0.5s" },
                ].map((location, index) => (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      animation: `slideInCurve 0.5s ease-out ${location.delay} backwards`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative px-8 py-4 rounded-full bg-gradient-to-br from-[#F1BC28] to-[#52BC88] shadow-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">⚓</div>
                        <p className="text-white font-bold text-lg">
                          {location.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Electronic Platform - Futuristic Card */}
        <div className={`mb-24 ${language === "ar" ? "rtl" : ""}`}>
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-[#035938] via-[#52BC88] to-[#F1BC28] rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

            <div
              className="relative p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#035938] via-[#52BC88] to-[#035938] shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Animated Orbs */}
              <div
                className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                style={{
                  animation: "float 6s ease-in-out infinite",
                }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-80 h-80 bg-[#F1BC28]/20 rounded-full blur-3xl"
                style={{
                  animation: "float 8s ease-in-out infinite reverse",
                }}
              ></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <p className="text-white text-xl md:text-2xl leading-relaxed font-medium drop-shadow-lg">
                    {t("fishingProject7")}
                  </p>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-20 h-20 border-t-4 border-l-4 border-white/30 rounded-tl-3xl"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-4 border-r-4 border-white/30 rounded-br-3xl"></div>
            </div>
          </div>
        </div>

        {/* Feasibility - Bento Grid Layout */}
        <div className={`mb-24 ${language === "ar" ? "rtl" : ""}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-[#035938] text-center mb-4">
            {t("fishingFeasibilityTitle")}
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
            {t("fishingFeasibilityIntro")}
          </p>

          {/* Hexagonal Network Layout */}
          <div className="relative">
            {/* Animated Connection Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              style={{ zIndex: 0 }}
            >
              <defs>
                <linearGradient
                  id="connectionGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#035938" />
                  <stop offset="50%" stopColor="#52BC88" />
                  <stop offset="100%" stopColor="#F1BC28" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection lines between nodes */}
              <line
                x1="20%"
                y1="15%"
                x2="35%"
                y2="25%"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                opacity="0.6"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="10"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="35%"
                y1="25%"
                x2="50%"
                y2="20%"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                opacity="0.6"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="10"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="50%"
                y1="20%"
                x2="65%"
                y2="25%"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                opacity="0.6"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="10"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="65%"
                y1="25%"
                x2="80%"
                y2="15%"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                opacity="0.6"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="10"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="20%"
                y1="50%"
                x2="35%"
                y2="60%"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                opacity="0.6"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="10"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="50%"
                y1="55%"
                x2="65%"
                y2="60%"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                opacity="0.6"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="10"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>
            </svg>

            {/* Organic Cluster Layout */}
            <div className="relative z-10 max-w-6xl mx-auto">
              {/* Row 1 - Top cluster (3 items) */}
              <div className="flex justify-center items-start gap-6 mb-8 flex-wrap">
                {[
                  {
                    text: t("fishingFeasibility1"),
                    color: "from-[#035938] to-[#52BC88]",
                    delay: "0s",
                  },
                  {
                    text: t("fishingFeasibility2"),
                    color: "from-[#52BC88] to-[#F1BC28]",
                    delay: "0.1s",
                  },
                  {
                    text: t("fishingFeasibility3"),
                    color: "from-[#F1BC28] to-[#035938]",
                    delay: "0.2s",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`w-full md:w-[calc(33.33%-1rem)] ${index === 1 ? "md:translate-y-8" : ""}`}
                    style={{
                      animation: `slideInCurve 0.6s ease-out ${item.delay} backwards`,
                    }}
                  >
                    <div className="group relative">
                      {/* Outer glow ring */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-[2rem] blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500 scale-110`}
                      ></div>

                      {/* Card */}
                      <div className="relative h-full p-8 rounded-[2rem] bg-white/90 backdrop-blur-xl border-2 border-[#035938]/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden">
                        {/* Gradient overlay on hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        ></div>

                        {/* Floating number badge */}
                        <div
                          className={`absolute -top-4 -left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 z-10`}
                        >
                          <span className="text-white text-xl font-bold">
                            {index + 1}
                          </span>
                        </div>

                        {/* Text content */}
                        <p className="text-gray-700 leading-relaxed text-center font-medium relative z-10">
                          {item.text}
                        </p>

                        {/* Decorative corner accent */}
                        <div
                          className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl ${item.color} opacity-10 rounded-full blur-2xl`}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 - Middle cluster (4 items) */}
              <div className="flex justify-center items-start gap-6 mb-8 flex-wrap">
                {[
                  {
                    text: t("fishingFeasibility4"),
                    color: "from-[#035938] to-[#F1BC28]",
                    delay: "0.3s",
                  },
                  {
                    text: t("fishingFeasibility5"),
                    color: "from-[#52BC88] to-[#035938]",
                    delay: "0.4s",
                  },
                  {
                    text: t("fishingFeasibility6"),
                    color: "from-[#F1BC28] to-[#52BC88]",
                    delay: "0.5s",
                  },
                  {
                    text: t("fishingFeasibility7"),
                    color: "from-[#035938] to-[#52BC88]",
                    delay: "0.6s",
                  },
                ].map((item, index) => (
                  <div
                    key={index + 3}
                    className={`w-full md:w-[calc(25%-1rem)] ${index % 2 === 1 ? "md:translate-y-8" : ""}`}
                    style={{
                      animation: `slideInCurve 0.6s ease-out ${item.delay} backwards`,
                    }}
                  >
                    <div className="group relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-[2rem] blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500 scale-110`}
                      ></div>

                      <div className="relative h-full p-8 rounded-[2rem] bg-white/90 backdrop-blur-xl border-2 border-[#035938]/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        ></div>

                        <div
                          className={`absolute -top-4 -left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 z-10`}
                        >
                          <span className="text-white text-xl font-bold">
                            {index + 4}
                          </span>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-center font-medium relative z-10">
                          {item.text}
                        </p>

                        <div
                          className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl ${item.color} opacity-10 rounded-full blur-2xl`}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 3 - Bottom cluster (3 items) */}
              <div className="flex justify-center items-start gap-6 flex-wrap">
                {[
                  {
                    text: t("fishingFeasibility8"),
                    color: "from-[#52BC88] to-[#F1BC28]",
                    delay: "0.7s",
                  },
                  {
                    text: t("fishingFeasibility9"),
                    color: "from-[#F1BC28] to-[#035938]",
                    delay: "0.8s",
                  },
                  {
                    text: t("fishingFeasibility10"),
                    color: "from-[#035938] to-[#52BC88]",
                    delay: "0.9s",
                  },
                ].map((item, index) => (
                  <div
                    key={index + 7}
                    className={`w-full md:w-[calc(33.33%-1rem)] ${index === 1 ? "md:translate-y-8" : ""}`}
                    style={{
                      animation: `slideInCurve 0.6s ease-out ${item.delay} backwards`,
                    }}
                  >
                    <div className="group relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-[2rem] blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500 scale-110`}
                      ></div>

                      <div className="relative h-full p-8 rounded-[2rem] bg-white/90 backdrop-blur-xl border-2 border-[#035938]/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        ></div>

                        <div
                          className={`absolute -top-4 -left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 z-10`}
                        >
                          <span className="text-white text-xl font-bold">
                            {index + 8}
                          </span>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-center font-medium relative z-10">
                          {item.text}
                        </p>

                        <div
                          className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl ${item.color} opacity-10 rounded-full blur-2xl`}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Objectives - Asymmetric Layout */}
        <div className={`${language === "ar" ? "rtl" : ""}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-[#035938] text-center mb-4">
            {t("fishingProjectObjectivesTitle")}
          </h3>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto text-lg">
            {t("fishingProjectObjectivesIntro")}
          </p>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: t("fishingObjective1Title"),
                color: "from-[#035938] to-[#52BC88]",
                size: "large",
              },
              {
                title: t("fishingObjective2Title"),
                color: "from-[#52BC88] to-[#F1BC28]",
                size: "large",
              },
              {
                title: t("fishingObjective3Title"),
                color: "from-[#F1BC28] to-[#035938]",
                size: "large",
              },
              {
                title: t("fishingObjective4Title"),
                color: "from-[#035938] to-[#F1BC28]",
                size: "large",
              },
            ].map((objective, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `slideInCurve 0.6s ease-out ${index * 0.15}s backwards`,
                }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${objective.color} rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                <div
                  className={`relative h-full p-10 rounded-[2.5rem] bg-white/90 backdrop-blur-xl border-2 border-[#035938]/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden ${index % 2 === 0 ? "lg:translate-y-4" : ""}`}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${objective.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                      {objective.title}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div
                    className={`absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr ${objective.color} opacity-10 rounded-full blur-2xl`}
                  ></div>
                  <div className="absolute top-1/2 left-0 w-1 h-24 bg-gradient-to-b from-transparent via-[#52BC88] to-transparent opacity-30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
