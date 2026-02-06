import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { TrendingUp, Users, Briefcase } from "lucide-react";

export function ImpactStatistics() {
  const { t } = useLanguage();
  const [counts, setCounts] = useState({
    beneficiaries: 0,
    sectors: 0,
    projects: 0,
  });

  const stats = [
    {
      key: "beneficiaries",
      label: "beneficiariesSupported",
      target: 15000,
      suffix: "+",
      icon: <Users className="w-8 h-8" />,
      color: "from-[#F1BC28] to-[#F1BC28]/60",
    },
    {
      key: "sectors",
      label: "sectorsCovered",
      target: 9,
      suffix: "",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-[#035938] to-[#52BC88]",
    },
    {
      key: "projects",
      label: "projectsFunded",
      target: 500,
      suffix: "+",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-[#52BC88] to-[#035938]",
    },
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        beneficiaries: Math.floor(15000 * progress),
        sectors: Math.floor(9 * progress),
        projects: Math.floor(500 * progress),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#052F2A] relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#035938] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#52BC88] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            <span className="text-white/70">Our </span>
            <span className="italic">Impact</span>
          </h2>
          <p className="text-white/70 text-xl">
            Making a difference across Saudi Arabia
          </p>
        </div>

        {/* Stats Cards - Bento Style */}
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden hover:scale-105"
            >
              {/* Gradient Accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                >
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="mb-3">
                  <span className="text-white block leading-none mb-2">
                    {counts[
                      stat.key as keyof typeof counts
                    ].toLocaleString()}
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-white/70">{t(stat.label)}</p>
              </div>

              {/* Hover effect line */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}