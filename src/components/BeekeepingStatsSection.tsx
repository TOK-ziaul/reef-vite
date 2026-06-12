import { Coins, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function BeekeepingStatsSection() {
  const { t } = useLanguage();

  return (
            <div className="mb-20">
              {/* Section Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#035938] mb-4">
                  {t("figuresAndIndicators")}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
              </div>

              {/* Top Stats - Compact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
                {/* Total Support Value */}
                <div className="group relative bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl p-4 md:p-5 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#F1BC28]/10 rounded-full blur-lg"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Coins className="w-4 h-4 text-[#F1BC28]" />
                      </div>
                      <h3 className="text-white/70 text-[10px] md:text-xs font-medium uppercase tracking-wide">
                        {t("honeyTotalSupportLabel")}
                      </h3>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        +197.53
                      </span>
                      <span className="text-sm md:text-base text-[#F1BC28] font-semibold">
                        {t("millionSAR")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Total Beneficiaries */}
                <div className="group relative bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-2xl p-4 md:p-5 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#035938]/10 rounded-full blur-lg"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-[#035938]" />
                      </div>
                      <h3 className="text-[#035938]/70 text-[10px] md:text-xs font-medium uppercase tracking-wide">
                        {t("honeyBeneficiariesLabel")}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-2xl md:text-3xl font-bold text-[#035938]">
                        +14,899
                      </span>
                      <div className="flex gap-2 text-[10px] md:text-xs text-[#035938]/70 font-medium">
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full whitespace-nowrap">
                          <div className="w-1 h-1 bg-[#035938] rounded-full"></div>
                          <span>6,428 {t("men")}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full whitespace-nowrap">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <span>8,471 {t("women")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geographical Distribution - Redesigned */}
              <div className="mb-16 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-2">
                    {t("honeyGeoDistributionLabel")}
                  </h3>
                  <p className="text-gray-600">{t("beneficiariesByRegion")}</p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  {/* Top 3 Regions - Featured */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* #1 Asir */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-2xl p-6 m-1">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">
                            1
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-2 font-semibold">
                            {t("asir")}
                          </div>
                          <div className="text-4xl font-bold text-[#035938] mb-3">
                            7,195
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#035938] to-[#52BC88] rounded-full"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">
                            48.3% {t("ofTotal")}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* #2 Hail */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-2xl p-6 m-1">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">
                            2
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-2 font-semibold">
                            {t("hail")}
                          </div>
                          <div className="text-4xl font-bold text-[#52BC88] mb-3">
                            2,338
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#52BC88] to-[#F1BC28] rounded-full"
                              style={{ width: "32.5%" }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">
                            15.7% {t("ofTotal")}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* #3 Makkah */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-2xl p-6 m-1">
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">
                            3
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-2 font-semibold">
                            {t("makkah")}
                          </div>
                          <div className="text-4xl font-bold text-[#F1BC28] mb-3">
                            1,836
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#F1BC28] to-[#035938] rounded-full"
                              style={{ width: "25.5%" }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">
                            12.3% {t("ofTotal")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Bar Chart - Remaining Regions */}
                  <div className="space-y-3">
                    {[
                      {
                        region: t("baha"),
                        count: 1196,
                        color: "from-[#035938] to-[#52BC88]",
                      },
                      {
                        region: t("tabuk"),
                        count: 552,
                        color: "from-[#52BC88] to-[#F1BC28]",
                      },
                      {
                        region: t("northernBorders"),
                        count: 457,
                        color: "from-[#F1BC28] to-[#52BC88]",
                      },
                      {
                        region: t("easternProvince"),
                        count: 420,
                        color: "from-[#035938] to-[#52BC88]",
                      },
                      {
                        region: t("jazan"),
                        count: 363,
                        color: "from-[#52BC88] to-[#F1BC28]",
                      },
                      {
                        region: t("madinah"),
                        count: 340,
                        color: "from-[#F1BC28] to-[#035938]",
                      },
                      {
                        region: t("riyadh"),
                        count: 174,
                        color: "from-[#035938] to-[#52BC88]",
                      },
                      {
                        region: t("jouf"),
                        count: 124,
                        color: "from-[#52BC88] to-[#F1BC28]",
                      },
                      {
                        region: t("najran"),
                        count: 117,
                        color: "from-[#F1BC28] to-[#52BC88]",
                      },
                      {
                        region: t("qassim"),
                        count: 53,
                        color: "from-[#035938] to-[#52BC88]",
                      },
                    ].map((item, index) => {
                      const maxCount = 7195;
                      const percentage = (item.count / maxCount) * 100;
                      const showNumberInside = percentage > 8; // Show inside only if bar is wide enough

                      return (
                        <div
                          key={index}
                          className="group flex items-center gap-4 hover:bg-gray-50 rounded-xl p-3 transition-all duration-300"
                        >
                          <div className="w-36 text-sm font-semibold text-gray-700 flex-shrink-0">
                            {item.region}
                          </div>
                          <div className="flex-1 flex items-center gap-3">
                            <div className="flex-1 relative h-8 bg-gray-100 rounded-lg overflow-visible">
                              <div
                                className={`h-full bg-gradient-to-r ${item.color} flex items-center ${showNumberInside ? "justify-end pr-3" : ""} transition-all duration-700 ease-out rounded-lg`}
                                style={{ width: `${percentage}%` }}
                              >
                                {showNumberInside && (
                                  <span className="text-white text-xs font-bold drop-shadow-md">
                                    {item.count.toLocaleString()}
                                  </span>
                                )}
                              </div>
                              {!showNumberInside && (
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
                                  <span className="text-gray-700 text-xs font-bold">
                                    {item.count.toLocaleString()}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div className="w-16 text-right text-sm font-bold text-gray-600">
                              {((item.count / 14899) * 100).toFixed(1)}%
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Honey Production Growth - Redesigned */}
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-2">
                    {t("honeyProductionLabel")}
                  </h3>
                  <p className="text-gray-600">{t("tonsPerYear")}</p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
                  {/* Visual Growth Chart */}
                  <div className="relative mb-12">
                    {/* Growth Line Background */}
                    <div className="absolute bottom-0 left-0 right-0 h-64 md:h-80">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 1200 320"
                        preserveAspectRatio="none"
                      >
                        {/* Gradient Definition */}
                        <defs>
                          <linearGradient
                            id="beekeepingGrowthGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#035938"
                              stopOpacity="0.2"
                            />
                            <stop
                              offset="50%"
                              stopColor="#52BC88"
                              stopOpacity="0.2"
                            />
                            <stop
                              offset="100%"
                              stopColor="#F1BC28"
                              stopOpacity="0.2"
                            />
                          </linearGradient>
                          <linearGradient
                            id="beekeepingLineGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#035938" />
                            <stop offset="50%" stopColor="#52BC88" />
                            <stop offset="100%" stopColor="#F1BC28" />
                          </linearGradient>
                        </defs>
                        {/* Growth Area */}
                        <path
                          d="M 0 280 L 0 200 Q 300 180 600 100 Q 900 20 1200 10 L 1200 280 Z"
                          fill="url(#beekeepingGrowthGradient)"
                        />
                        {/* Growth Line */}
                        <path
                          d="M 0 200 Q 300 180 600 100 Q 900 20 1200 10"
                          fill="none"
                          stroke="url(#beekeepingLineGradient)"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Data Points */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                      {/* 2020 */}
                      <div className="text-center">
                        <div className="inline-block relative mb-6">
                          {/* Hexagon Container */}
                          <div className="relative w-36 h-36 md:w-40 md:h-40">
                            <div
                              className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] shadow-2xl transform hover:scale-110 transition-transform duration-300"
                              style={{
                                clipPath:
                                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                              }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                  2,100
                                </div>
                                <div className="text-white/80 text-sm">
                                  {t("tons")}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-[#035938]">
                            2020
                          </div>
                          <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                            {t("baseline")}
                          </div>
                        </div>
                      </div>

                      {/* 2024 */}
                      <div className="text-center">
                        <div className="inline-block relative mb-6">
                          {/* Hexagon Container */}
                          <div className="relative w-36 h-36 md:w-40 md:h-40">
                            <div
                              className="absolute inset-0 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] shadow-2xl transform hover:scale-110 transition-transform duration-300"
                              style={{
                                clipPath:
                                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                              }}
                            ></div>
                            {/* Growth Badge */}
                            <div className="absolute -top-3 -right-3 z-10">
                              <div className="relative">
                                <div className="absolute inset-0 bg-[#F1BC28] rounded-full blur-lg opacity-50 animate-pulse"></div>
                                <div className="relative w-16 h-16 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-full flex items-center justify-center shadow-xl">
                                  <span className="text-white font-bold text-sm">
                                    +57%
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                  4,300
                                </div>
                                <div className="text-white/80 text-sm">
                                  {t("tons")}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-[#52BC88]">
                            2024
                          </div>
                          <div className="inline-block px-4 py-1 bg-[#52BC88]/10 rounded-full text-sm text-[#52BC88] font-semibold">
                            {t("currentYear")}
                          </div>
                        </div>
                      </div>

                      {/* 2026 */}
                      <div className="text-center">
                        <div className="inline-block relative mb-6">
                          {/* Hexagon Container */}
                          <div className="relative w-36 h-36 md:w-40 md:h-40">
                            <div
                              className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] to-[#035938] shadow-2xl transform hover:scale-110 transition-transform duration-300"
                              style={{
                                clipPath:
                                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                              }}
                            ></div>
                            {/* Dashed Border for Target */}
                            <div
                              className="absolute inset-0 border-4 border-dashed border-[#F1BC28] opacity-50"
                              style={{
                                clipPath:
                                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                              }}
                            ></div>
                            {/* Target Badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                              <div className="px-4 py-1.5 bg-[#035938] rounded-full shadow-lg">
                                <span className="text-white font-bold text-xs uppercase tracking-wide">
                                  {t("target")}
                                </span>
                              </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                  7,500
                                </div>
                                <div className="text-white/80 text-sm">
                                  {t("tons")}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-[#F1BC28]">
                            2026
                          </div>
                          <div className="inline-block px-4 py-1 bg-[#F1BC28]/10 rounded-full text-sm text-[#F1BC28] font-semibold">
                            {t("projectedGrowth")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Growth Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t-2 border-gray-100">
                    <div className="relative group overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#035938]/5 to-[#52BC88]/10 group-hover:from-[#035938]/10 group-hover:to-[#52BC88]/20 transition-all duration-300"></div>
                      <div className="relative p-6 text-center">
                        <div className="text-4xl font-bold text-[#035938] mb-2">
                          +2,200
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {t("tonsGrowth2020to2024")}
                        </div>
                        <div className="mt-3 inline-block px-3 py-1 bg-[#035938]/10 rounded-full text-xs text-[#035938] font-semibold">
                          {t("growth104Label")}
                        </div>
                      </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88]/5 to-[#F1BC28]/10 group-hover:from-[#52BC88]/10 group-hover:to-[#F1BC28]/20 transition-all duration-300"></div>
                      <div className="relative p-6 text-center">
                        <div className="text-4xl font-bold text-[#52BC88] mb-2">
                          +5,400
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {t("totalProjectedGrowth")}
                        </div>
                        <div className="mt-3 inline-block px-3 py-1 bg-[#52BC88]/10 rounded-full text-xs text-[#52BC88] font-semibold">
                          2020–2026
                        </div>
                      </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28]/5 to-[#035938]/10 group-hover:from-[#F1BC28]/10 group-hover:to-[#035938]/20 transition-all duration-300"></div>
                      <div className="relative p-6 text-center">
                        <div className="text-4xl font-bold text-[#F1BC28] mb-2">
                          257%
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {t("overallGrowthRate")}
                        </div>
                        <div className="mt-3 inline-block px-3 py-1 bg-[#F1BC28]/10 rounded-full text-xs text-[#F1BC28] font-semibold">
                          {t("sixYearPeriod")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
}
