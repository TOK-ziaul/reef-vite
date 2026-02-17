import { useLanguage } from "../context/LanguageContext";
import {
  TrendingUp,
  Users,
  MapPin,
  Package,
  Calendar,
  Sparkles,
  ArrowUpRight,
  DollarSign,
  Leaf,
  Flower2,
  Sprout,
} from "lucide-react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function RosesFiguresIndicators() {
  const { t } = useLanguage();
  const [, setIsVisible] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(t);
  }, []);

  const products = [
    {
      name: "jasmine",
      icon: Flower2,
      color: "#F1BC28",
      percentage: 35,
      image:
        "https://images.unsplash.com/photo-1686150920809-86ef03e25ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXNtaW5lJTIwZmxvd2VycyUyMHdoaXRlJTIwcGxhbnR8ZW58MXx8fHwxNzY5OTUwNDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "henna",
      icon: Leaf,
      color: "#52BC88",
      percentage: 40,
      image:
        "https://images.unsplash.com/photo-1650306198616-f1bbb63de630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZW5uYSUyMHBsYW50JTIwbGVhdmVzJTIwZ3JlZW58ZW58MXx8fHwxNzY5OTUwNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "rose",
      icon: Sprout,
      color: "#035938",
      percentage: 25,
      image:
        "https://images.unsplash.com/photo-1666199853339-15e22fbf73f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZmxvd2VycyUyMHJlZCUyMHBpbmslMjBnYXJkZW58ZW58MXx8fHwxNzY5OTUwNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const regions = [
    {
      name: "jazan",
      count: 435,
      percentage: 41,
      color: "#035938",
      x: 15,
      y: 75,
      lat: 17.5,
      lng: 42.5,
    },
    {
      name: "asir",
      count: 362,
      percentage: 34,
      color: "#52BC88",
      x: 25,
      y: 65,
      lat: 18.9,
      lng: 42.6,
    },
    {
      name: "makkah",
      count: 143,
      percentage: 14,
      color: "#F1BC28",
      x: 20,
      y: 50,
      lat: 21.4,
      lng: 39.8,
    },
    {
      name: "baha",
      count: 46,
      percentage: 4,
      color: "#035938",
      x: 22,
      y: 58,
      lat: 20.0,
      lng: 41.5,
    },
    {
      name: "madinah",
      count: 19,
      percentage: 2,
      color: "#52BC88",
      x: 18,
      y: 35,
      lat: 24.5,
      lng: 39.6,
    },
    {
      name: "riyadh",
      count: 9,
      percentage: 1,
      color: "#F1BC28",
      x: 50,
      y: 45,
      lat: 24.7,
      lng: 46.7,
    },
    {
      name: "easternProvince",
      count: 27,
      percentage: 3,
      color: "#035938",
      x: 75,
      y: 40,
      lat: 26.4,
      lng: 50.0,
    },
    {
      name: "hail",
      count: 10,
      percentage: 1,
      color: "#52BC88",
      x: 35,
      y: 25,
      lat: 27.5,
      lng: 41.7,
    },
    {
      name: "tabuk",
      count: 3,
      percentage: 0,
      color: "#F1BC28",
      x: 15,
      y: 15,
      lat: 28.4,
      lng: 36.6,
    },
    {
      name: "qassim",
      count: 1,
      percentage: 0,
      color: "#035938",
      x: 45,
      y: 30,
      lat: 26.3,
      lng: 43.9,
    },
  ];

  const productionData = [
    { year: "2020", volume: 500, color: "#035938", yPos: 70 },
    { year: "2024", volume: 750, growth: 38, color: "#52BC88", yPos: 45 },
    { year: "2026", volume: 2000, isTarget: true, color: "#F1BC28", yPos: 10 },
  ];

  return (
    <div className="relative overflow-hidden py-16 bg-gradient-to-b from-[#F9F7EF] to-white">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#52BC88] rounded-full blur-[150px] animate-blob"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F1BC28] rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-[#035938] rounded-full blur-[150px] animate-blob animation-delay-4000"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-[#52BC88]/20 mb-6">
            <Sparkles className="w-5 h-5 text-[#F1BC28]" />
            <span className="text-sm font-bold text-[#035938] uppercase tracking-wider">
              {t("figuresIndicators")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] bg-clip-text text-transparent">
              {t("rosesImpactGrowth")}
            </span>
          </h2>
          <p className="text-lg text-[#035938]/60 max-w-2xl mx-auto">
            {t("rosesFiguresSubtitle")}
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-[880px] mx-auto">
          {/* Total Support */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#52BC88] to-[#035938] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#52BC88]/10 to-transparent rounded-full blur-2xl"></div>

              <div className="relative flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-xl shadow-lg flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-[#035938]/50 uppercase tracking-wider block mb-3">
                    {t("totalSupport")}
                  </span>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#52BC88] to-[#035938] bg-clip-text text-transparent">
                      59.80
                    </span>
                    <span className="text-lg font-semibold text-[#035938]/40">
                      {t("millionSAR")}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#52BC88] text-sm font-semibold">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>{t("empoweringLocalProducers")}</span>
                  </div>
                </div>
              </div>

              {/* Decorative bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#52BC88] to-[#035938]"></div>
            </div>
          </div>

          {/* Beneficiaries */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F1BC28]/10 to-transparent rounded-full blur-2xl"></div>

              <div className="relative flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-xl shadow-lg flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold text-[#035938]/50 uppercase tracking-wider block mb-3">
                    {t("numberOfBeneficiaries")}
                  </span>

                  <div className="mb-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#F1BC28] to-[#52BC88] bg-clip-text text-transparent">
                      1,055
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#52BC88]"></div>
                      <span className="text-[#035938]/70">632 {t("men")}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#F1BC28]"></div>
                      <span className="text-[#035938]/70">
                        423 {t("women")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88]"></div>
            </div>
          </div>
        </div>

        {/* Supported Products - Modern Grid Layout */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-[#035938] to-[#52BC88] bg-clip-text text-transparent">
              {t("supportedProducts")}
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredProduct(product.name)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  style={{
                    animation: `fadeInUp 0.6s ease-out forwards`,
                    animationDelay: `${index * 0.15}s`,
                    opacity: 0,
                  }}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${product.color}, ${product.color}80)`,
                    }}
                  ></div>

                  {/* Card */}
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/40 group-hover:shadow-2xl transition-all duration-500">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={t(product.name)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to top, ${product.color}ee, ${product.color}40)`,
                        }}
                      ></div>

                      {/* Icon */}
                      <div className="absolute top-4 left-4">
                        <div
                          className="p-3 rounded-xl backdrop-blur-xl border border-white/40 shadow-lg"
                          style={{ backgroundColor: `${product.color}20` }}
                        >
                          <Icon
                            className="w-6 h-6"
                            style={{ color: product.color }}
                          />
                        </div>
                      </div>

                      {/* Percentage Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/95 backdrop-blur-xl px-4 py-2 rounded-full border border-white/40 shadow-lg">
                          <span
                            className="text-2xl font-bold"
                            style={{ color: product.color }}
                          >
                            {product.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h4
                        className="text-2xl font-bold mb-3"
                        style={{ color: product.color }}
                      >
                        {t(product.name)}
                      </h4>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width:
                              hoveredProduct === product.name
                                ? `${product.percentage}%`
                                : "0%",
                            background: `linear-gradient(90deg, ${product.color}, ${product.color}dd)`,
                          }}
                        ></div>
                      </div>

                      {/* Stats */}
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <span className="text-[#035938]/60 font-semibold">
                          Market Share
                        </span>
                        <div
                          className="flex items-center gap-1.5"
                          style={{ color: product.color }}
                        >
                          <TrendingUp className="w-4 h-4" />
                          <span className="font-bold">
                            {product.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="h-1"
                      style={{
                        background: `linear-gradient(90deg, ${product.color}, ${product.color}dd)`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Geographical Distribution - Interactive Map Style */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <MapPin className="w-8 h-8 text-[#52BC88]" />
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-[#035938] to-[#52BC88] bg-clip-text text-transparent">
                {t("geographicalDistribution")}
              </span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual Map - Saudi Arabia with all region locations */}
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-[#52BC88]/20 bg-gradient-to-br from-[#035938]/5 to-[#52BC88]/5">
              <MapContainer
                center={[24, 45]}
                zoom={5}
                className="h-full w-full rounded-3xl z-0"
                zoomControl={true}
                scrollWheelZoom={true}
                attributionControl={false}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                {regions.map((region) => {
                  const icon = L.divIcon({
                    className: "region-marker",
                    html: `<div style="
                      width: 24px; height: 24px;
                      border-radius: 50%;
                      background-color: ${region.color};
                      border: 2px solid white;
                      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                    "></div>`,
                    iconSize: [24, 24],
                    iconAnchor: [12, 12],
                  });
                  return (
                    <Marker
                      key={region.name}
                      position={[region.lat, region.lng]}
                      icon={icon}
                      eventHandlers={{
                        mouseover: (e) => e.target.openPopup(),
                        mouseout: (e) => e.target.closePopup(),
                      }}
                    >
                      <Popup>
                        <div className="text-center min-w-[120px]">
                          <div className="text-sm font-bold text-[#035938] mb-1">
                            {t(region.name)}
                          </div>
                          <div
                            className="text-xl font-bold"
                            style={{ color: region.color }}
                          >
                            {region.count}
                          </div>
                          <div className="text-xs text-[#035938]/60">
                            {region.percentage}%
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
              {/* Gradient overlay for better contrast */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-white/10"
                aria-hidden
              />
            </div>

            {/* Statistics List */}
            <div className="space-y-4">
              {regions.map((region, index) => (
                <div
                  key={region.name}
                  className="group flex items-center gap-4 p-4 bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 hover:border-[#52BC88] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    animation: `slideInRight 0.6s ease-out forwards`,
                    animationDelay: `${index * 0.05}s`,
                    opacity: 0,
                  }}
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${region.color}, ${region.color}dd)`,
                    }}
                  >
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <div className="font-bold text-[#035938] mb-1">
                      {t(region.name)}
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${region.percentage}%`,
                          background: `linear-gradient(90deg, ${region.color}, ${region.color}dd)`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: region.color }}
                    >
                      {region.count}
                    </div>
                    <div className="text-sm text-[#035938]/60">
                      {region.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Production Growth - Professional Chart */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-[#035938] to-[#52BC88] bg-clip-text text-transparent">
                {t("productionGrowth")}
              </span>
            </h3>
            <p className="text-sm text-[#035938]/60 max-w-2xl mx-auto">
              {t("productionGrowthDesc")}
            </p>
          </div>

          {/* Professional Chart Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Header with Key Metrics */}
            <div className="bg-gradient-to-r from-[#F9F7EF] to-white px-8 py-6 border-b border-gray-200">
              <div className="grid grid-cols-3 gap-8">
                {productionData.map((data, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs font-semibold text-[#035938]/50 uppercase tracking-wider mb-2">
                      {data.year}
                      {data.isTarget && (
                        <span className="ml-2 px-2 py-0.5 bg-[#F1BC28] text-white text-xs rounded">
                          {t("target")}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                      <span className="text-3xl font-bold text-[#035938]">
                        {data.volume >= 1000
                          ? (data.volume / 1000).toFixed(1)
                          : data.volume}
                      </span>
                      <span className="text-base font-semibold text-[#035938]/50">
                        {data.volume >= 1000
                          ? t("billionShort")
                          : t("millionShort")}
                      </span>
                    </div>
                    <div className="text-xs text-[#035938]/60 mb-2">
                      {t("flowersPerYear")}
                    </div>
                    {data.growth && (
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#52BC88]/10 rounded text-[#52BC88] text-xs font-semibold">
                        <ArrowUpRight className="w-3 h-3" />+{data.growth}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Area - Line & Area Graph */}
            <div className="p-8 md:p-12">
              <div className="relative">
                {/* Y-Axis */}
                <div className="absolute -left-2 top-0 bottom-16 flex flex-col justify-between text-xs font-medium text-[#035938]/40 text-right pr-3">
                  <span>2.0B</span>
                  <span>1.5B</span>
                  <span>1.0B</span>
                  <span>500M</span>
                  <span>0</span>
                </div>

                {/* Chart Container */}
                <div className="ml-12 relative h-80">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bottom-16 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className="border-t border-gray-200"></div>
                    ))}
                  </div>

                  {/* SVG Chart */}
                  <svg
                    className="absolute inset-0 bottom-16"
                    viewBox="0 0 800 320"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      {/* Gradient for area fill */}
                      <linearGradient
                        id="areaGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#52BC88"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#52BC88"
                          stopOpacity="0.05"
                        />
                      </linearGradient>
                    </defs>

                    {/* Area Fill */}
                    <path
                      d="M 100 240 L 100 240 C 100 240, 400 200, 400 200 C 400 200, 700 10, 700 10 L 700 320 L 100 320 Z"
                      fill="url(#areaGradient)"
                      style={{
                        animation: "fadeInChart 1s ease-out forwards",
                        opacity: 0,
                      }}
                    />

                    {/* Line */}
                    <path
                      d="M 100 240 C 100 240, 400 200, 400 200 C 400 200, 700 10, 700 10"
                      fill="none"
                      stroke="#52BC88"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: 1000,
                        strokeDashoffset: 1000,
                        animation: "drawLineChart 2s ease-out 0.3s forwards",
                      }}
                    />
                  </svg>

                  {/* Data Points */}
                  <div className="absolute inset-0 bottom-16">
                    {productionData.map((data, index) => {
                      const positions = [
                        { left: "12.5%", bottom: "25%" }, // 2020: 500M = 25% of 2000M max
                        { left: "50%", bottom: "37.5%" }, // 2024: 750M = 37.5% of 2000M max
                        { left: "87.5%", bottom: "96.875%" }, // 2026: 2000M = 100% (10/320 = 96.875% from bottom)
                      ];

                      return (
                        <div
                          key={index}
                          className="absolute group"
                          style={{
                            left: positions[index].left,
                            bottom: positions[index].bottom,
                            transform: "translate(-50%, 50%)",
                            animation: `popInChart 0.5s ease-out ${0.5 + index * 0.3}s both`,
                          }}
                        >
                          {/* Outer ring */}
                          <div
                            className="absolute inset-0 w-5 h-5 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-20"
                            style={{ backgroundColor: data.color }}
                          ></div>

                          {/* Point */}
                          <div
                            className="relative w-4 h-4 rounded-full border-3 border-white shadow-lg cursor-pointer transition-transform hover:scale-150"
                            style={{ backgroundColor: data.color }}
                          ></div>

                          {/* Tooltip on hover */}
                          <div className="absolute left-1/2 -translate-x-1/2 -top-16 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                            <div className="bg-white border border-gray-200 rounded-lg shadow-xl px-3 py-2 whitespace-nowrap">
                              <div className="text-xs text-[#035938]/60 mb-1">
                                {data.year}
                              </div>
                              <div
                                className="text-lg font-bold"
                                style={{ color: data.color }}
                              >
                                {data.volume >= 1000
                                  ? `${(data.volume / 1000).toFixed(1)}B`
                                  : `${data.volume}M`}
                              </div>
                              {data.growth && (
                                <div className="text-xs text-[#52BC88] font-semibold">
                                  +{data.growth}%
                                </div>
                              )}
                            </div>
                            {/* Arrow */}
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* X-Axis Labels */}
                  <div className="absolute left-0 right-0 -bottom-12 flex justify-around px-4">
                    {productionData.map((data, index) => (
                      <div key={index} className="text-center flex-1">
                        <div className="text-sm font-bold text-[#035938]">
                          {data.year}
                        </div>
                        {data.growth && (
                          <div className="text-xs text-[#52BC88] font-semibold">
                            +{data.growth}%
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Insights */}
            <div className="bg-[#F9F7EF] px-8 py-5 border-t border-gray-200">
              <div className="flex items-center justify-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#52BC88] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#035938]/60 font-medium">
                      Cumulative Growth
                    </div>
                    <div className="text-xl font-bold text-[#52BC88]">+38%</div>
                  </div>
                </div>

                <div className="w-px h-10 bg-gray-300"></div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F1BC28] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#035938]/60 font-medium">
                      Target Achievement
                    </div>
                    <div className="text-xl font-bold text-[#F1BC28]">2026</div>
                  </div>
                </div>

                <div className="w-px h-10 bg-gray-300"></div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#035938] flex items-center justify-center">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#035938]/60 font-medium">
                      Production Scale
                    </div>
                    <div className="text-xl font-bold text-[#035938]">4x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes growUp {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

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

        @keyframes fadeInChart {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes drawLineChart {
          from {
            strokeDashoffset: 1000;
          }
          to {
            strokeDashoffset: 0;
          }
        }

        @keyframes popInChart {
          from {
            transform: translate(-50%, 50%) scale(0);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 50%) scale(1);
            opacity: 1;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}
