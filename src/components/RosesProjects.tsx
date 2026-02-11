import { useLanguage } from "../context/LanguageContext";
import {
  Briefcase,
  DollarSign,
  Target,
  Factory,
  Droplets,
  Microscope,
  Sprout,
  Building2,
  Brain,
  Database,
  TestTube,
  Warehouse,
  Network,
  Leaf,
  TrendingUp,
  Globe,
  Gem,
  TreePine,
  Award,
  Users,
  Lightbulb,
  BarChart3,
  Package,
  Sparkles,
  Zap,
  ChevronRight,
  MapPin,
  Thermometer,
  Recycle,
  Map,
  GraduationCap,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function RosesProjects() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const keyProjects = [
    {
      icon: Building2,
      key: "project1",
      color: "#035938",
      image:
        "https://images.unsplash.com/photo-1708796705570-33fd29ef67d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMG51cnNlcnklMjBzZWVkbGluZ3N8ZW58MXx8fHwxNzY5OTUyNjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Sprout,
      key: "project2",
      color: "#52BC88",
      image:
        "https://images.unsplash.com/photo-1707086547436-a256cdc6c4da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMHNlZWRsaW5nJTIwZ3Jvd3RofGVufDF8fHx8MTc2OTk0OTY1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Factory,
      key: "project3",
      color: "#F1BC28",
      image:
        "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3Njk5NTI2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Brain,
      key: "project4",
      color: "#035938",
      image:
        "https://images.unsplash.com/photo-1759884247146-b6cba3d92341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGRldmVsb3BtZW50JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3Njk5NTMyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Database,
      key: "project5",
      color: "#52BC88",
      image:
        "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHRlY2hub2xvZ3klMjBkaWdpdGFsfGVufDF8fHx8MTc2OTk1MjYwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: TestTube,
      key: "project6",
      color: "#F1BC28",
      image:
        "https://images.unsplash.com/photo-1768498950637-88d073faa491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwdGVzdGluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njk5NTMyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Gem,
      key: "project7",
      color: "#035938",
      image:
        "https://images.unsplash.com/photo-1766430191918-2cca9f763790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZSUyMG5hdHVyYWwlMjByZXNvdXJjZXN8ZW58MXx8fHwxNzY5OTUzMjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Microscope,
      key: "project8",
      color: "#52BC88",
      image:
        "https://images.unsplash.com/photo-1742206594477-15139139c0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW50aXN0JTIwbWljcm9zY29wZXxlbnwxfHx8fDE3Njk5NTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Warehouse,
      key: "project9",
      color: "#F1BC28",
      image:
        "https://images.unsplash.com/photo-1680724525083-5c2c734f9a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlJTIwYWdyaWN1bHR1cmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTk1MjYwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Network,
      key: "project10",
      color: "#035938",
      image:
        "https://images.unsplash.com/photo-1703113690885-8caf0c77a7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwdGVjaG5vbG9neSUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzY5OTUzMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Droplets,
      key: "project11",
      color: "#52BC88",
      image:
        "https://images.unsplash.com/photo-1598370006836-0ae5f7ec61c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwc3lzdGVtJTIwZmFybSUyMHdhdGVyfGVufDF8fHx8MTc2OTk1MjYxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: TreePine,
      key: "project12",
      color: "#F1BC28",
      image:
        "https://images.unsplash.com/photo-1641975156937-9ed56d1a426f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwZm9yZXN0JTIwbmF0dXJlfGVufDF8fHx8MTc2OTk1MzIxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Package,
      key: "project13",
      color: "#035938",
      image:
        "https://images.unsplash.com/photo-1760804876422-7efb73b58048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBib3glMjBwcm9kdWN0fGVufDF8fHx8MTc2OTk1MzIxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const feasibilityPoints = [
    { icon: TrendingUp, key: "feasibility1", color: "#52BC88" },
    { icon: DollarSign, key: "feasibility2", color: "#F1BC28" },
    { icon: Award, key: "feasibility3", color: "#035938" },
    { icon: Droplets, key: "feasibility4", color: "#52BC88" },
    { icon: BarChart3, key: "feasibility5", color: "#F1BC28" },
    { icon: Leaf, key: "feasibility6", color: "#035938" },
    { icon: Users, key: "feasibility7", color: "#52BC88" },
    { icon: Sprout, key: "feasibility8", color: "#F1BC28" },
    { icon: Factory, key: "feasibility9", color: "#035938" },
    { icon: TreePine, key: "feasibility10", color: "#52BC88" },
  ];

  const objectives = [
    { icon: Target, key: "objective1", color: "#035938" },
    { icon: Factory, key: "objective2", color: "#52BC88" },
    { icon: Lightbulb, key: "objective3", color: "#F1BC28" },
    { icon: Globe, key: "objective4", color: "#035938" },
  ];

  return (
    <div className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-[#F9F7EF]/30 to-white">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#52BC88]/5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F1BC28]/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#52BC88]/10 to-[#F1BC28]/10 rounded-full mb-6 border border-[#52BC88]/20 shadow-lg backdrop-blur-sm">
            <div className="relative">
              <Briefcase className="w-5 h-5 text-[#52BC88]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#F1BC28] rounded-full animate-ping"></div>
            </div>
            <span className="text-sm font-bold text-[#035938] uppercase tracking-wider">
              {t("sectorProjects")}
            </span>
            <Sparkles className="w-4 h-4 text-[#F1BC28]" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] bg-clip-text text-transparent">
              {t("rosesAromaticProjectsTitle")}
            </span>
          </h2>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Number of Projects */}
          <div
            className="group relative"
            style={{ animation: "slideInLeft 0.8s ease-out forwards" }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#035938] to-[#52BC88] rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#52BC88]/10 to-transparent rounded-bl-full"></div>

              <div className="flex items-center gap-6 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl blur-md opacity-50 animate-pulse"></div>
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center shadow-xl">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#035938]/60 uppercase tracking-wider mb-2 flex items-center gap-2">
                    {t("numberOfProjects")}
                    <Zap className="w-3 h-3 text-[#F1BC28]" />
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-6xl font-bold bg-gradient-to-r from-[#035938] to-[#52BC88] bg-clip-text text-transparent">
                      14
                    </span>
                    <span className="text-xl font-semibold text-[#035938]/50">
                      {t("projects")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 h-2 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#52BC88] rounded-full shadow-inner overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Total Value */}
          <div
            className="group relative"
            style={{ animation: "slideInRight 0.8s ease-out forwards" }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F1BC28]/10 to-transparent rounded-bl-full"></div>

              <div className="flex items-center gap-6 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-2xl blur-md opacity-50 animate-pulse"></div>
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F1BC28] to-[#52BC88] flex items-center justify-center shadow-xl">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#035938]/60 uppercase tracking-wider mb-2 flex items-center gap-2">
                    {t("totalEstimatedValue")}
                    <Zap className="w-3 h-3 text-[#52BC88]" />
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-6xl font-bold bg-gradient-to-r from-[#F1BC28] to-[#52BC88] bg-clip-text text-transparent">
                      135.6
                    </span>
                    <span className="text-xl font-semibold text-[#035938]/50">
                      {t("millionSAR")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 h-2 bg-gradient-to-r from-[#F1BC28] via-[#52BC88] to-[#52BC88] rounded-full shadow-inner overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-white via-[#F9F7EF] to-white rounded-3xl p-10 md:p-12 border border-[#52BC88]/20 shadow-xl overflow-hidden">
            <div className="absolute top-0 left-1/4 w-24 h-24 bg-[#52BC88]/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#F1BC28]/10 rounded-full blur-2xl"></div>

            <p className="text-xl leading-relaxed text-[#035938]/80 text-center max-w-5xl mx-auto relative z-10">
              {t("projectsIntro")}
            </p>
          </div>
        </div>

        {/* Key Sector Projects - LIST STYLE */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl blur-md animate-pulse"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center shadow-xl">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-[#035938]">
                {t("keySectorProjects")}
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#52BC88]/10 to-[#F1BC28]/10 rounded-full border border-[#52BC88]/20">
              <Sparkles className="w-4 h-4 text-[#52BC88]" />
              <span className="text-sm font-bold text-[#035938]">
                {keyProjects.length} {t("projects")}
              </span>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-0">
            {keyProjects.map((project, index) => {
              // const Icon = project.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    animation: "fadeInUp 0.6s ease-out forwards",
                    animationDelay: `${index * 0.05}s`,
                    opacity: 0,
                  }}
                >
                  {/* Project Row */}
                  <div className="relative flex items-center gap-6 py-8 transition-all duration-300">
                    {/* Background highlight on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl transition-all duration-300"
                      style={{
                        backgroundColor: isHovered
                          ? `${project.color}05`
                          : "transparent",
                        transform: isHovered ? "scale(1.02)" : "scale(1)",
                      }}
                    ></div>

                    {/* Number Badge */}
                    <div className="relative flex-shrink-0 z-10">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-lg transition-all duration-300"
                        style={{
                          backgroundColor: project.color,
                          transform: isHovered
                            ? "scale(1.1) rotate(5deg)"
                            : "scale(1) rotate(0deg)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Project Text */}
                    <div className="flex-1 relative z-10">
                      <p className="text-lg text-[#035938] leading-relaxed">
                        {t(project.key)}
                      </p>
                    </div>

                    {/* Image Thumbnail (if available) */}
                    {project.image && (
                      <div className="relative flex-shrink-0 w-32 h-20 rounded-xl overflow-hidden shadow-lg z-10 hidden md:block">
                        <ImageWithFallback
                          src={project.image}
                          alt=""
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    )}

                    {/* Accent line */}
                    <div
                      className="absolute left-0 right-0 bottom-0 h-0.5 transition-all duration-300"
                      style={{
                        backgroundColor: `${project.color}20`,
                        transform: isHovered ? "scaleX(1)" : "scaleX(0.5)",
                        transformOrigin: "left",
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical and Economic Feasibility */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-2xl blur-md animate-pulse"></div>
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#52BC88] to-[#F1BC28] flex items-center justify-center shadow-xl">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-[#035938]">
              {t("technicalEconomicFeasibility")}
            </h3>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <div className="relative bg-gradient-to-br from-[#035938] to-[#035938]/90 rounded-3xl p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#52BC88]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F1BC28]/10 rounded-full blur-3xl"></div>

              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(#52BC88 1px, transparent 1px), linear-gradient(90deg, #52BC88 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              ></div>

              <div className="relative z-10">
                <p className="text-xl leading-relaxed text-white/95 text-center max-w-5xl mx-auto">
                  {t("feasibilityIntro")}
                </p>
              </div>
            </div>
          </div>

          {/* Flowing Timeline Design */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical flowing line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#52BC88] via-[#F1BC28] to-[#52BC88] opacity-20"></div>

            <div className="space-y-12">
              {feasibilityPoints.map((point, index) => {
                const Icon = point.icon;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      animation: "fadeInUp 0.6s ease-out forwards",
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0,
                    }}
                  >
                    <div
                      className={`flex ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                    >
                      {/* Left/Right Content */}
                      <div className="flex-1 hidden md:block">
                        {isLeft ? (
                          <div className="text-right pr-8">
                            <p className="text-xl text-[#035938] leading-relaxed">
                              {t(point.key)}
                            </p>
                          </div>
                        ) : (
                          <div className="pl-8">
                            <p className="text-xl text-[#035938] leading-relaxed">
                              {t(point.key)}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Center Node */}
                      <div className="relative flex-shrink-0 z-10">
                        {/* Glowing background */}
                        <div
                          className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                          style={{ backgroundColor: point.color }}
                        ></div>

                        {/* Main circle */}
                        <div
                          className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${point.color}, ${point.color}dd)`,
                            border: "4px solid white",
                          }}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>

                        {/* Pulse ring */}
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-20"
                          style={{ backgroundColor: point.color }}
                        ></div>

                        {/* Number badge */}
                        <div
                          className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                          style={{ backgroundColor: point.color }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      {/* Right/Left Content (empty for desktop, used for mobile) */}
                      <div className="flex-1">
                        <div className="md:hidden pl-4">
                          <p className="text-lg text-[#035938] leading-relaxed">
                            {t(point.key)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Connecting line decoration */}
                    {isLeft ? (
                      <div
                        className="hidden md:block absolute left-1/2 top-10 w-16 h-0.5"
                        style={{
                          background: `linear-gradient(90deg, ${point.color}40, transparent)`,
                          marginLeft: "-100%",
                          animation: "expandRight 0.8s ease-out forwards",
                          animationDelay: `${index * 0.1 + 0.3}s`,
                          opacity: 0,
                        }}
                      ></div>
                    ) : (
                      <div
                        className="hidden md:block absolute left-1/2 top-10 w-16 h-0.5"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${point.color}40)`,
                          animation: "expandLeft 0.8s ease-out forwards",
                          animationDelay: `${index * 0.1 + 0.3}s`,
                          opacity: 0,
                        }}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Summary */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#52BC88]/10 via-[#F1BC28]/10 to-[#52BC88]/10 rounded-full border-2 border-[#52BC88]/20 shadow-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#52BC88] to-[#F1BC28] flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg font-bold text-[#035938]">
                {t("comprehensiveFeasibilityStudies")}
              </p>
            </div>
          </div>
        </div>

        {/* Project Objectives */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-[#035938] flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#035938]">
              {t("projectObjectives")}
            </h3>
          </div>

          {/* Introduction Text */}
          <div className="mb-8">
            <p className="text-lg text-[#035938]/80 leading-relaxed">
              {t("projectObjectivesIntro")}
            </p>
          </div>

          {/* Clean Grid Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;

              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                  style={{
                    animation: "fadeInUp 0.5s ease-out forwards",
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  {/* Dual Icon Header */}
                  <div className="flex items-center gap-3 mb-6">
                    {/* Icon with light background */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${objective.color}10` }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{ color: objective.color }}
                      />
                    </div>

                    {/* Number badge with dark background */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-md"
                      style={{ backgroundColor: objective.color }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-base text-[#035938]/70 leading-relaxed mb-6">
                    {t(objective.key)}
                  </p>

                  {/* Bottom Progress Bar */}
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: objective.color,
                        width: "100%",
                        animation: "fillBar 1s ease-out forwards",
                        animationDelay: `${index * 0.1 + 0.3}s`,
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Implemented Activities */}
        <div className="mt-32 mb-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#035938]/10 to-[#52BC88]/10 rounded-full mb-6 border border-[#035938]/20 shadow-lg">
              <Activity className="w-5 h-5 text-[#035938]" />
              <span className="text-sm font-bold text-[#035938] uppercase tracking-wider">
                {t("keyImplementedActivities")}
              </span>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="space-y-16">
            {/* Activity 1: Demonstration Fields */}
            <div
              className="relative"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              <div className="bg-gradient-to-br from-white via-[#F9F7EF] to-white rounded-3xl p-10 md:p-12 border border-[#035938]/20 shadow-xl overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#035938]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center shadow-lg flex-shrink-0">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#035938]/60 uppercase tracking-wider mb-2">
                        1
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-[#035938] mb-3">
                        {t("activity1Title")}
                      </h4>
                      <p className="text-lg text-[#035938]/70 leading-relaxed">
                        {t("activity1Desc")}
                      </p>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 border border-[#035938]/10 shadow-md">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-[#035938]/10 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-[#035938]" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#035938]">
                            12
                          </div>
                          <div className="text-sm text-[#035938]/60">
                            {t("activity1Fields")}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-[#52BC88]/10 shadow-md">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-[#52BC88]/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-[#52BC88]" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#52BC88]">
                            120
                          </div>
                          <div className="text-sm text-[#035938]/60">
                            {t("activity1Farmers")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="bg-gradient-to-br from-[#035938] to-[#035938]/90 rounded-2xl p-8">
                    <p className="text-white/90 mb-4">
                      {t("activity1Sessions")}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#F1BC28] flex-shrink-0 mt-0.5" />
                        <p className="text-white/95">{t("activity1Stat1")}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#F1BC28] flex-shrink-0 mt-0.5" />
                        <p className="text-white/95">{t("activity1Stat2")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity 2: Cooling Technology */}
            <div
              className="relative"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                animationDelay: "0.1s",
                opacity: 0,
              }}
            >
              <div className="bg-gradient-to-br from-white via-[#F9F7EF] to-white rounded-3xl p-10 md:p-12 border border-[#52BC88]/20 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#52BC88]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#52BC88] to-[#F1BC28] flex items-center justify-center shadow-lg flex-shrink-0">
                      <Thermometer className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#52BC88]/60 uppercase tracking-wider mb-2">
                        2
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-[#035938] mb-3">
                        {t("activity2Title")}
                      </h4>
                      <p className="text-lg text-[#035938]/70 leading-relaxed mb-6">
                        {t("activity2Desc")}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-white rounded-2xl p-6 border border-[#52BC88]/10 shadow-md mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-[#52BC88]/10 flex items-center justify-center">
                        <Thermometer className="w-6 h-6 text-[#52BC88]" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#52BC88]">
                          6
                        </div>
                        <div className="text-sm text-[#035938]/60">
                          {t("activity2Containers")}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-[#52BC88]/10 to-transparent rounded-xl p-5 border border-[#52BC88]/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#52BC88] flex-shrink-0 mt-0.5" />
                        <p className="text-[#035938]">{t("activity2Point1")}</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#52BC88]/10 to-transparent rounded-xl p-5 border border-[#52BC88]/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#52BC88] flex-shrink-0 mt-0.5" />
                        <p className="text-[#035938]">{t("activity2Point2")}</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#52BC88]/10 to-transparent rounded-xl p-5 border border-[#52BC88]/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#52BC88] flex-shrink-0 mt-0.5" />
                        <p className="text-[#035938]">{t("activity2Point3")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity 3: Composting Technology */}
            <div
              className="relative"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                animationDelay: "0.2s",
                opacity: 0,
              }}
            >
              <div className="bg-gradient-to-br from-white via-[#F9F7EF] to-white rounded-3xl p-10 md:p-12 border border-[#F1BC28]/20 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#F1BC28]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F1BC28] to-[#52BC88] flex items-center justify-center shadow-lg flex-shrink-0">
                      <Recycle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#F1BC28]/60 uppercase tracking-wider mb-2">
                        3
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-[#035938] mb-3">
                        {t("activity3Title")}
                      </h4>
                      <p className="text-lg text-[#035938]/70 leading-relaxed">
                        {t("activity3Desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity 4: Cultivation Mapping */}
            <div
              className="relative"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                animationDelay: "0.3s",
                opacity: 0,
              }}
            >
              <div className="bg-gradient-to-br from-white via-[#F9F7EF] to-white rounded-3xl p-10 md:p-12 border border-[#035938]/20 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#035938]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center shadow-lg flex-shrink-0">
                      <Map className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#035938]/60 uppercase tracking-wider mb-2">
                        4
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-[#035938] mb-3">
                        {t("activity4Title")}
                      </h4>
                      <p className="text-lg text-[#035938]/70 leading-relaxed mb-6">
                        {t("activity4Desc")}
                      </p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-[#035938]/10 to-transparent rounded-2xl p-6 border border-[#035938]/20">
                      <div className="text-sm font-semibold text-[#035938]/60 uppercase mb-2">
                        Suitable Area
                      </div>
                      <div className="text-3xl font-bold text-[#035938] mb-1">
                        621
                      </div>
                      <div className="text-sm text-[#035938]/60">hectares</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#52BC88]/10 to-transparent rounded-2xl p-6 border border-[#52BC88]/20">
                      <div className="text-sm font-semibold text-[#035938]/60 uppercase mb-2">
                        Currently Cultivated
                      </div>
                      <div className="text-3xl font-bold text-[#52BC88] mb-1">
                        346
                      </div>
                      <div className="text-sm text-[#035938]/60">hectares</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#F1BC28]/10 to-transparent rounded-2xl p-6 border border-[#F1BC28]/20">
                      <div className="text-sm font-semibold text-[#035938]/60 uppercase mb-2">
                        Expansion Potential
                      </div>
                      <div className="text-3xl font-bold text-[#F1BC28] mb-1">
                        275
                      </div>
                      <div className="text-sm text-[#035938]/60">hectares</div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-gradient-to-br from-[#035938] to-[#035938]/90 rounded-2xl p-6">
                    <p className="text-white/95">{t("activity4Standards")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity 5: Workshops and Field Visits */}
            <div
              className="relative"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                animationDelay: "0.4s",
                opacity: 0,
              }}
            >
              <div className="bg-gradient-to-br from-white via-[#F9F7EF] to-white rounded-3xl p-10 md:p-12 border border-[#52BC88]/20 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#52BC88]/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#52BC88] to-[#F1BC28] flex items-center justify-center shadow-lg flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#52BC88]/60 uppercase tracking-wider mb-2">
                        5
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-[#035938] mb-3">
                        {t("activity5Title")}
                      </h4>
                      <p className="text-lg text-[#035938]/70 leading-relaxed mb-6">
                        {t("activity5Desc")}
                      </p>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-2xl p-6 border border-[#52BC88]/10 shadow-md">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-[#52BC88]/10 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-[#52BC88]" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#52BC88]">
                            35
                          </div>
                          <div className="text-sm text-[#035938]/60">
                            {t("activity5FieldVisits")}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-[#F1BC28]/10 shadow-md">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-[#F1BC28]/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-[#F1BC28]" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#F1BC28]">
                            149
                          </div>
                          <div className="text-sm text-[#035938]/60">
                            {t("activity5TrainedFarmers")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activities List */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#52BC88] flex-shrink-0 mt-0.5" />
                      <p className="text-[#035938]/70">
                        {t("activity5Visits")}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#52BC88] flex-shrink-0 mt-0.5" />
                      <p className="text-[#035938]/70">
                        {t("activity5Training")}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#52BC88] flex-shrink-0 mt-0.5" />
                      <p className="text-[#035938]/70">
                        {t("activity5Jasmine")}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#52BC88] flex-shrink-0 mt-0.5" />
                      <p className="text-[#035938]/70">
                        {t("activity5Monitoring")}
                      </p>
                    </div>
                  </div>

                  {/* Impact Statement */}
                  <div className="bg-gradient-to-br from-[#52BC88] to-[#52BC88]/90 rounded-2xl p-6">
                    <p className="text-white/95 font-semibold">
                      {t("activity5Impact")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* CTA 1: Interactive Map */}
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#035938] to-[#52BC88] !text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              <Map className="w-5 h-5" />
              <span className="font-semibold">
                {t("exploreInteractiveMap")}
              </span>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* CTA 2: Support Programs */}
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#52BC88] to-[#F1BC28] !text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                animationDelay: "0.1s",
                opacity: 0,
              }}
            >
              <Award className="w-5 h-5" />
              <span className="font-semibold">
                {t("exploreSupportPrograms")}
              </span>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fillBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes expandRight {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        @keyframes expandLeft {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        @keyframes slideInDiagonal {
          from {
            opacity: 0;
            transform: translate(-30px, 30px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
          }
        }

        @keyframes orbit {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(8px, -8px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}
