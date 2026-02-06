import { useLanguage } from '../context/LanguageContext';
import { Sprout, TrendingUp, DollarSign, Building2, HeartHandshake, Users, ShoppingCart, Droplets, GraduationCap, Shield } from 'lucide-react';

export function CoffeeKeyAreas() {
  const { t } = useLanguage();

  const areas = [
    { icon: Sprout, key: 'coffeeAction1', color: '#52BC88', gradient: 'from-[#52BC88] to-[#035938]' },
    { icon: Building2, key: 'coffeeAction2', color: '#F1BC28', gradient: 'from-[#F1BC28] to-[#d4a324]' },
    { icon: TrendingUp, key: 'coffeeAction3', color: '#035938', gradient: 'from-[#035938] to-[#024028]' },
    { icon: DollarSign, key: 'coffeeAction4', color: '#52BC88', gradient: 'from-[#52BC88] to-[#3a9d6f]' },
    { icon: HeartHandshake, key: 'coffeeAction5', color: '#F1BC28', gradient: 'from-[#F1BC28] to-[#d4a324]' },
    { icon: Users, key: 'coffeeAction6', color: '#035938', gradient: 'from-[#035938] to-[#024028]' },
    { icon: ShoppingCart, key: 'coffeeAction7', color: '#52BC88', gradient: 'from-[#52BC88] to-[#3a9d6f]' },
    { icon: Droplets, key: 'coffeeAction8', color: '#F1BC28', gradient: 'from-[#F1BC28] to-[#d4a324]' },
    { icon: GraduationCap, key: 'coffeeAction9', color: '#035938', gradient: 'from-[#035938] to-[#024028]' },
    { icon: Shield, key: 'coffeeAction10', color: '#52BC88', gradient: 'from-[#52BC88] to-[#035938]' },
  ];

  return (
    <div className="mb-32 mt-32 relative overflow-hidden">
      {/* Left Side Fade Mask */}
      <div 
        className="absolute top-0 left-0 bottom-0 w-32 md:w-48 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to right, #F9F7EF 0%, rgba(249, 247, 239, 0.8) 30%, transparent 100%)',
        }}
      ></div>

      {/* Right Side Fade Mask */}
      <div 
        className="absolute top-0 right-0 bottom-0 w-32 md:w-48 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to left, #F9F7EF 0%, rgba(249, 247, 239, 0.8) 30%, transparent 100%)',
        }}
      ></div>

      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#035938] mb-4">
          {t('keyAreasActionTitle')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#52BC88] to-[#F1BC28] mx-auto rounded-full"></div>
      </div>

      {/* Flowing Wave Layout */}
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Animated SVG Path Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1200 2400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#52BC88', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#F1BC28', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#035938', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path 
            d="M 200 100 Q 400 200, 600 200 T 1000 300 Q 800 450, 600 500 T 200 700 Q 400 850, 600 900 T 1000 1100 Q 800 1250, 600 1400 T 200 1700 Q 400 1850, 600 2000"
            stroke="url(#pathGradient2)" 
            strokeWidth="4" 
            fill="none" 
            strokeDasharray="15,10"
            opacity="0.5"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              from="0" 
              to="25" 
              dur="2s" 
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* Items in Flowing Pattern */}
        <div className="relative space-y-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex items-center gap-6 ${isLeft ? 'justify-start' : 'justify-end'} ${isLeft ? 'md:pr-20' : 'md:pl-20'}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Content Wrapper with unique positioning */}
                <div 
                  className={`group relative w-full md:w-[600px] ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center gap-6 transition-all duration-700 hover:scale-105`}
                  style={{
                    animation: 'fadeInUp 0.8s ease-out forwards',
                    opacity: 0,
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  {/* Animated Circle Icon */}
                  <div className="relative flex-shrink-0">
                    {/* Soft Blended Shadow Base - Outermost */}
                    <div 
                      className="absolute inset-0 rounded-full blur-[60px] opacity-30"
                      style={{
                        background: `radial-gradient(circle, ${area.color} 0%, ${area.color}60 40%, transparent 70%)`,
                        transform: 'scale(2.2)',
                      }}
                    ></div>

                    {/* Secondary Glow Layer */}
                    <div 
                      className="absolute inset-0 rounded-full blur-[40px] opacity-40"
                      style={{
                        background: `radial-gradient(circle, ${area.color} 20%, ${area.color}40 50%, transparent 70%)`,
                        transform: 'scale(1.6)',
                      }}
                    ></div>
                    
                    {/* Inner Glow */}
                    <div 
                      className="absolute inset-0 rounded-full blur-[25px] opacity-50"
                      style={{
                        background: `radial-gradient(circle, ${area.color} 30%, transparent 65%)`,
                        transform: 'scale(1.3)',
                      }}
                    ></div>

                    {/* Main Icon Circle - Soft Edges */}
                    <div 
                      className={`relative w-24 h-24 bg-gradient-to-br ${area.gradient} rounded-full flex items-center justify-center group-hover:rotate-12 transition-all duration-500`}
                      style={{
                        boxShadow: `
                          0 8px 32px -4px ${area.color}50,
                          0 0 0 1px ${area.color}10
                        `,
                        filter: 'blur(0.3px)',
                      }}
                    >
                      <Icon className="w-12 h-12 text-white drop-shadow-lg" />
                      
                      {/* Number Badge */}
                      <div 
                        className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-20"
                        style={{
                          boxShadow: `
                            0 4px 16px rgba(0,0,0,0.08),
                            0 0 0 3px #F9F7EF
                          `,
                        }}
                      >
                        <span className="text-sm font-bold text-[#035938]">{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card with Unique Shape */}
                  <div className="relative flex-1 group/card">
                    {/* Morphing Background Blob */}
                    <div 
                      className="absolute inset-0 opacity-10 group-hover/card:opacity-20 transition-opacity duration-500 blur-2xl"
                      style={{
                        background: `radial-gradient(ellipse at ${isLeft ? 'left' : 'right'}, ${area.color}60 0%, transparent 70%)`,
                        borderRadius: '60% 40% 70% 30% / 60% 30% 70% 40%',
                        animation: 'morphBlob 8s ease-in-out infinite',
                        animationDelay: `${index * 0.5}s`,
                      }}
                    ></div>

                    {/* Glass Card */}
                    <div 
                      className={`relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl border-2 group-hover/card:shadow-2xl transition-all duration-500 ${
                        isLeft 
                          ? 'rounded-tl-none border-l-8' 
                          : 'rounded-tr-none border-r-8'
                      }`}
                      style={{
                        borderColor: area.color,
                        transform: 'perspective(1000px) rotateY(0deg)',
                      }}
                      onMouseEnter={(e) => {
                        if (isLeft) {
                          e.currentTarget.style.transform = 'perspective(1000px) rotateY(3deg)';
                        } else {
                          e.currentTarget.style.transform = 'perspective(1000px) rotateY(-3deg)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg)';
                      }}
                    >
                      {/* Glowing top accent */}
                      <div 
                        className="absolute top-0 left-1/4 right-1/4 h-1 rounded-full opacity-60"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${area.color}, transparent)`,
                          boxShadow: `0 0 20px ${area.color}`,
                        }}
                      ></div>

                      <p className="text-[#035938] leading-relaxed font-medium text-base md:text-lg">
                        {t(area.key)}
                      </p>

                      {/* Corner Decoration */}
                      <div 
                        className={`absolute ${isLeft ? 'bottom-4 right-4' : 'bottom-4 left-4'} w-2 h-2 rounded-full`}
                        style={{ backgroundColor: area.color }}
                      ></div>
                      <div 
                        className={`absolute ${isLeft ? 'bottom-2 right-2' : 'bottom-2 left-2'} w-1.5 h-1.5 rounded-full opacity-60`}
                        style={{ backgroundColor: area.color }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#52BC88]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#F1BC28]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#035938]/5 rounded-full blur-3xl -z-10"></div>

      {/* CSS Animations */}
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

        @keyframes morphBlob {
          0%, 100% {
            border-radius: 60% 40% 70% 30% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 40% 60% 50% 50% / 70% 50% 50% 30%;
          }
          50% {
            border-radius: 50% 50% 40% 60% / 40% 70% 30% 60%;
          }
          75% {
            border-radius: 70% 30% 60% 40% / 50% 60% 40% 50%;
          }
        }
      `}</style>
    </div>
  );
}