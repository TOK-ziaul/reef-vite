import { useLanguage } from '../context/LanguageContext';
import { Layers, TrendingUp, Settings, DollarSign, Building2, ShoppingCart, Banknote, Lightbulb, Handshake, FileText, Users2 } from 'lucide-react';

export function HandicraftsWorkAxes() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const workAxes = [
    { icon: Layers, key: 'handicraftsWorkAxis1', color: 'from-[#035938] to-[#52BC88]' },
    { icon: TrendingUp, key: 'handicraftsWorkAxis2', color: 'from-[#F1BC28] to-[#035938]' },
    { icon: Settings, key: 'handicraftsWorkAxis3', color: 'from-[#52BC88] to-[#F1BC28]' },
    { icon: DollarSign, key: 'handicraftsWorkAxis4', color: 'from-[#035938] to-[#F1BC28]' },
    { icon: Building2, key: 'handicraftsWorkAxis5', color: 'from-[#F1BC28] to-[#52BC88]' },
    { icon: ShoppingCart, key: 'handicraftsWorkAxis6', color: 'from-[#52BC88] to-[#035938]' },
    { icon: Banknote, key: 'handicraftsWorkAxis7', color: 'from-[#035938] to-[#52BC88]' },
    { icon: Lightbulb, key: 'handicraftsWorkAxis8', color: 'from-[#F1BC28] to-[#035938]' },
    { icon: Handshake, key: 'handicraftsWorkAxis9', color: 'from-[#52BC88] to-[#F1BC28]' },
    { icon: FileText, key: 'handicraftsWorkAxis10', color: 'from-[#035938] to-[#F1BC28]' },
    { icon: Users2, key: 'handicraftsWorkAxis11', color: 'from-[#F1BC28] to-[#52BC88]' },
  ];

  return (
    <div className="mb-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-[#52BC88] to-[#F1BC28] rounded-full" />
            <Layers className="w-8 h-8 text-[#52BC88]" />
            <div className="h-1 w-12 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
            {t('handicraftsWorkAxesTitle')}
          </h2>
        </div>
      </div>

      {/* Work Axes - Staggered Timeline Layout */}
      <div className="relative max-w-5xl mx-auto">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#035938] via-[#52BC88] to-[#F1BC28] transform -translate-x-1/2 hidden md:block" />

        {/* Work Axes Items */}
        <div className="space-y-8">
          {workAxes.map((axis, index) => {
            const Icon = axis.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative flex items-center ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
                style={{
                  animation: `fadeInSlide 0.6s ease-out ${index * 100}ms both`,
                }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <div className="group relative bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${axis.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                    
                    {/* Number Badge */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${axis.color} rounded-full mb-4 text-white font-bold text-lg shadow-lg`}>
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <p className="text-gray-800 leading-relaxed relative z-10">
                      {t(axis.key)}
                    </p>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 ${isEven ? 'right-0' : 'left-0'} w-24 h-1 bg-gradient-to-r ${axis.color} rounded-full`} />
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${axis.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Spacer for alignment on desktop */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(${isRTL ? '50px' : '-50px'});
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
