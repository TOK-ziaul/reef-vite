import { useLanguage } from '../context/LanguageContext';
import { Sprout, DollarSign, Building2, Cog, HeartHandshake, ShoppingCart, Trees, Droplets, Gauge, GraduationCap, Flower2 } from 'lucide-react';
import { useState } from 'react';

export function RosesKeyAreas() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const areas = [
    { icon: Cog, key: 'rosesAction1', color: '#52BC88', size: 'large', bgImage: 'https://images.unsplash.com/photo-1644726160705-591afc45d06d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwZ2FyZGVuJTIwY3VsdGl2YXRpb258ZW58MXx8fHwxNzY5OTQ5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { icon: DollarSign, key: 'rosesAction2', color: '#F1BC28', size: 'medium', bgImage: 'https://images.unsplash.com/photo-1615281775285-219509089dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmaW5hbmNlJTIwaW52ZXN0bWVudHxlbnwxfHx8fDE3Njk5NDk2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { icon: Building2, key: 'rosesAction3', color: '#035938', size: 'medium', bgImage: 'https://images.unsplash.com/photo-1769059563373-7bbb1e8c26e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmVlbmhvdXNlJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzY5OTQ5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { icon: Gauge, key: 'rosesAction4', color: '#52BC88', size: 'large', bgImage: 'https://images.unsplash.com/photo-1722119272044-fc49006131e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5OTQ5NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { icon: HeartHandshake, key: 'rosesAction5', color: '#F1BC28', size: 'medium', bgImage: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2OTkyNDI0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { icon: ShoppingCart, key: 'rosesAction6', color: '#035938', size: 'medium', bgImage: 'https://images.unsplash.com/photo-1697744538482-02be61f41a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBtYXJrZXQlMjBjb21tZXJjZXxlbnwxfHx8fDE3Njk5NDk2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { icon: Trees, key: 'rosesAction7', color: '#52BC88', size: 'large', bgImage: 'https://images.unsplash.com/photo-1759676186177-d7267de134b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjB0cmVlc3xlbnwxfHx8fDE3Njk5NDk2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { icon: Droplets, key: 'rosesAction8', color: '#F1BC28', size: 'medium', bgImage: 'https://images.unsplash.com/photo-1655048425771-daa9087aaa00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwd2F0ZXIlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3Njk5NDk2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { icon: Sprout, key: 'rosesAction9', color: '#035938', size: 'medium', bgImage: 'https://images.unsplash.com/photo-1707086547436-a256cdc6c4da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMHNlZWRsaW5nJTIwZ3Jvd3RofGVufDF8fHx8MTc2OTk0OTY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { icon: GraduationCap, key: 'rosesAction10', color: '#52BC88', size: 'medium', bgImage: 'https://images.unsplash.com/photo-1611318762764-ced2c5f7fa54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBlZHVjYXRpb24lMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njk5NDk2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { icon: Flower2, key: 'rosesAction11', color: '#F1BC28', size: 'medium', bgImage: 'https://images.unsplash.com/photo-1686624641385-9293bd621d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcm9tYXRpYyUyMGZsb3dlcnMlMjBib3VxdWV0fGVufDF8fHx8MTc2OTk0OTY1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const getSizeClasses = (size: string) => {
    switch(size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2 md:row-span-1';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <div className="mb-32 mt-32 relative overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#035938] mb-4">
          {t('keyAreasOfAction')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#52BC88] to-[#F1BC28] mx-auto rounded-full"></div>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-4 md:gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            const isHovered = hoveredIndex === index;
            const isLarge = area.size === 'large';
            
            return (
              <div
                key={index}
                className={`group relative ${getSizeClasses(area.size)}`}
                style={{
                  animation: 'popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                  animationDelay: `${index * 0.08}s`,
                  opacity: 0,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${area.color}12 0%, ${area.color}05 100%)`,
                    border: `2px solid ${isHovered ? area.color + '80' : area.color + '20'}`,
                    transform: isHovered ? 'scale(1.02) translateY(-8px)' : 'scale(1) translateY(0)',
                    boxShadow: isHovered 
                      ? `0 20px 60px ${area.color}40, 0 0 0 1px ${area.color}20` 
                      : `0 8px 30px ${area.color}15`,
                  }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage: `url(${area.bgImage})`,
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                  ></div>

                  {/* Dark Overlay for Text Visibility */}
                  <div 
                    className="absolute inset-0 transition-all duration-700"
                    style={{
                      background: `linear-gradient(135deg, ${area.color}c8 0%, ${area.color}a0 50%, ${area.color}b8 100%)`,
                      opacity: isHovered ? 0.80 : 0.75,
                      mixBlendMode: 'multiply',
                    }}
                  ></div>

                  {/* Light Glassmorphism Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)`,
                      backdropFilter: 'blur(0.5px)',
                    }}
                  ></div>

                  {/* Animated Gradient Background */}
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at ${isHovered ? '50%' : '150%'} ${isHovered ? '50%' : '150%'}, rgba(255,255,255,0.15) 0%, transparent 70%)`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  ></div>

                  {/* Content Container */}
                  <div className={`relative h-full flex flex-col ${isLarge ? 'p-8' : 'p-6'}`}>
                    {/* Top Section - Icon and Number */}
                    <div className="flex items-start justify-between mb-auto">
                      {/* Icon with Glow */}
                      <div 
                        className="relative transition-all duration-700"
                        style={{
                          transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                        }}
                      >
                        <div 
                          className={`${isLarge ? 'w-20 h-20' : 'w-16 h-16'} rounded-2xl flex items-center justify-center relative z-10`}
                          style={{
                            background: `linear-gradient(135deg, ${area.color} 0%, ${area.color}dd 100%)`,
                            boxShadow: `0 8px 32px ${area.color}60, inset 0 2px 4px rgba(255,255,255,0.2)`,
                          }}
                        >
                          <Icon className={`${isLarge ? 'w-10 h-10' : 'w-8 h-8'} text-white`} />
                        </div>
                        
                        {/* Pulsing Glow Ring */}
                        <div 
                          className="absolute inset-0 rounded-2xl transition-all duration-700"
                          style={{
                            background: `radial-gradient(circle, ${area.color}40 0%, transparent 70%)`,
                            transform: isHovered ? 'scale(1.4)' : 'scale(1)',
                            opacity: isHovered ? 0.8 : 0,
                            filter: 'blur(12px)',
                          }}
                        ></div>
                      </div>

                      {/* Number Badge */}
                      <div 
                        className="relative transition-all duration-500"
                        style={{
                          transform: isHovered ? 'translateY(-4px) rotate(-5deg)' : 'translateY(0) rotate(0)',
                        }}
                      >
                        <div 
                          className={`${isLarge ? 'w-14 h-14' : 'w-12 h-12'} rounded-xl flex items-center justify-center font-bold ${isLarge ? 'text-2xl' : 'text-xl'}`}
                          style={{
                            background: '#ffffff',
                            color: area.color,
                            boxShadow: `0 4px 16px ${area.color}30, inset 0 0 0 2px ${area.color}30`,
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="mt-auto">
                      <p 
                        className={`text-white ${isLarge ? 'text-lg' : 'text-base'} leading-relaxed font-semibold transition-all duration-500 drop-shadow-lg`}
                        style={{
                          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                          textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
                        }}
                      >
                        {t(area.key)}
                      </p>

                      {/* Animated Bottom Border */}
                      <div 
                        className="mt-4 h-1 rounded-full transition-all duration-700"
                        style={{
                          background: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
                          width: isHovered ? '100%' : '0%',
                          boxShadow: '0 2px 8px rgba(255,255,255,0.3)',
                        }}
                      ></div>
                    </div>

                    {/* Floating Particles */}
                    <div 
                      className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        backgroundColor: area.color,
                        opacity: isHovered ? 0.6 : 0.2,
                        transform: isHovered ? 'translate(10px, -10px)' : 'translate(0, 0)',
                      }}
                    ></div>
                    <div 
                      className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full transition-all duration-1000"
                      style={{ 
                        backgroundColor: area.color,
                        opacity: isHovered ? 0.4 : 0.1,
                        transform: isHovered ? 'translate(-15px, 15px)' : 'translate(0, 0)',
                      }}
                    ></div>

                    {/* Corner Accent */}
                    <div 
                      className="absolute bottom-0 right-0 w-32 h-32 transition-all duration-700"
                      style={{
                        background: `radial-gradient(circle at bottom right, ${area.color}15 0%, transparent 70%)`,
                        opacity: isHovered ? 1 : 0.3,
                        transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                      }}
                    ></div>

                    {/* Shimmer Effect */}
                    {isHovered && (
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(110deg, transparent 0%, transparent 40%, ${area.color}20 50%, transparent 60%, transparent 100%)`,
                          animation: 'shimmerBento 1.5s ease-in-out',
                        }}
                      ></div>
                    )}
                  </div>

                  {/* Border Glow on Hover */}
                  <div 
                    className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-700"
                    style={{
                      boxShadow: `inset 0 0 40px ${area.color}20`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Background Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#52BC88]/8 rounded-full blur-3xl animate-float-slow -z-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#F1BC28]/8 rounded-full blur-3xl animate-float-reverse -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#035938]/5 rounded-full blur-3xl animate-pulse-subtle -z-10"></div>

      {/* CSS Animations */}
      <style>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes shimmerBento {
          0% {
            transform: translateX(-100%) rotate(0deg);
          }
          100% {
            transform: translateX(100%) rotate(0deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, 40px);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 25s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}