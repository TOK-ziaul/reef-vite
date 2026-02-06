import { Leaf, Coffee, Flower2, Apple, Milk, Scissors, Fish, Sprout, Cpu, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function SectorsOverview() {
  const { t } = useLanguage();

  const sectors = [
    { icon: <Leaf className="w-10 h-10" />, titleKey: 'beekeeping', color: 'from-[#F1BC28] to-[#F1BC28]/60' },
    { icon: <Coffee className="w-10 h-10" />, titleKey: 'coffee', color: 'from-[#035938] to-[#52BC88]' },
    { icon: <Flower2 className="w-10 h-10" />, titleKey: 'flowers', color: 'from-[#52BC88] to-[#035938]' },
    { icon: <Apple className="w-10 h-10" />, titleKey: 'fruits', color: 'from-[#F1BC28] to-[#035938]' },
    { icon: <Milk className="w-10 h-10" />, titleKey: 'livestock', color: 'from-[#035938] to-[#F1BC28]' },
    { icon: <Scissors className="w-10 h-10" />, titleKey: 'handicrafts', color: 'from-[#52BC88] to-[#F1BC28]' },
    { icon: <Fish className="w-10 h-10" />, titleKey: 'fishing', color: 'from-[#035938] to-[#52BC88]' },
    { icon: <Sprout className="w-10 h-10" />, titleKey: 'aromatic', color: 'from-[#F1BC28] to-[#52BC88]' },
    { icon: <Cpu className="w-10 h-10" />, titleKey: 'agritech', color: 'from-[#52BC88] to-[#035938]' },
  ];

  return (
    <section className="py-24 bg-white relative">
      {/* Large Background Text */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-[200px] font-bold text-[#035938]/5 pointer-events-none whitespace-nowrap">
        SECTORS
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Modern Section Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-4">
                <span className="text-[#052F2A]">Our </span>
                <span className="text-[#035938] italic">9 Key Sectors</span>
              </h2>
              <p className="text-[#052F2A]/70 text-xl max-w-2xl">
                Comprehensive support across diverse agricultural industries
              </p>
            </div>
            <button className="group flex items-center gap-2 px-6 py-3 border-2 border-[#035938] text-[#035938] rounded-full hover:bg-[#035938] hover:text-white transition-all duration-300">
              View All
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-6 gap-4">
          {/* First large card - spans 2x2 */}
          <div className={`col-span-2 row-span-2 group relative bg-gradient-to-br ${sectors[0].color} rounded-3xl p-8 text-white overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300`}>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                {sectors[0].icon}
              </div>
              <div>
                <h3 className="text-white mb-2">{t(sectors[0].titleKey)}</h3>
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Regular cards */}
          {sectors.slice(1, 5).map((sector, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${sector.color} rounded-2xl p-6 text-white overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                  {sector.icon}
                </div>
                <div>
                  <h4 className="text-white text-sm">{t(sector.titleKey)}</h4>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom row */}
          {sectors.slice(5).map((sector, index) => (
            <div
              key={index}
              className={`col-span-2 group relative bg-gradient-to-br ${sector.color} rounded-2xl p-6 text-white overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                    {sector.icon}
                  </div>
                  <h4 className="text-white">{t(sector.titleKey)}</h4>
                </div>
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}