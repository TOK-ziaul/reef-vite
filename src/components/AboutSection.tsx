import { Target, Heart, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  const cards = [
    { icon: <Target className="w-12 h-12" />, titleKey: 'vision', textKey: 'visionText' },
    { icon: <Heart className="w-12 h-12" />, titleKey: 'mission', textKey: 'missionText' },
    { icon: <Trophy className="w-12 h-12" />, titleKey: 'goals', textKey: 'goalsText' },
  ];

  return (
    <section className="py-24 bg-[#F9F7EF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #035938 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Section Header with Modern Typography */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white rounded-full text-[#035938] border border-[#035938]/20 shadow-sm">
              About Us
            </span>
          </div>
          <h2 className="mb-6">
            <span className="text-[#052F2A]">Building a </span>
            <span className="text-[#035938] italic">Sustainable Future</span>
          </h2>
          <p className="text-[#052F2A]/70 max-w-3xl mx-auto text-xl">
            {t('aboutDescription')}
          </p>
        </div>

        {/* Bento Grid Cards */}
        <div className="grid grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                index === 1 ? 'bg-gradient-to-br from-[#035938] to-[#52BC88] text-white' : ''
              }`}
            >
              {/* Glassmorphism overlay on hover */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`w-20 h-20 ${index === 1 ? 'bg-white/20' : 'bg-[#035938]/10'} rounded-2xl flex items-center justify-center ${index === 1 ? 'text-white' : 'text-[#035938]'} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className={`${index === 1 ? 'text-white' : 'text-[#035938]'} mb-4`}>
                  {t(card.titleKey)}
                </h3>
                <p className={index === 1 ? 'text-white/90' : 'text-[#052F2A]/70'}>
                  {t(card.textKey)}
                </p>
              </div>

              {/* Decorative element */}
              <div className={`absolute bottom-4 right-4 w-12 h-12 ${index === 1 ? 'bg-white/10' : 'bg-[#F1BC28]/20'} rounded-full blur-xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}