import { useLanguage } from '../context/LanguageContext';
import { Coffee, TrendingUp, Users, Sparkles, Sprout } from 'lucide-react';

export function CoffeeObjectives() {
  const { t } = useLanguage();

  return (
    <div className="mb-20 relative">
      {/* Section Title */}
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#035938] mb-4">
          {t('mainObjectivesSector')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
      </div>

      {/* Flowing Coffee Bean Journey - Modern Abstract Design */}
      <div className="max-w-7xl mx-auto relative px-4 overflow-visible" style={{ minHeight: '800px' }}>
        
        {/* Flowing SVG Path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#52BC88', stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: '#F1BC28', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#035938', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          
          {/* Flowing Path Connecting All 5 Objectives */}
          <path 
            d="M 600 100 Q 400 170 250 250 Q 300 350 600 450 Q 850 400 950 350 Q 950 500 600 700"
            stroke="url(#pathGradient)" 
            strokeWidth="3" 
            fill="none" 
            strokeDasharray="10,6"
            opacity="0.8"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              from="0" 
              to="16" 
              dur="1s" 
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* Objective 1 - Top Center (Seed/Origin) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0">
          <div className="relative group">
            {/* Ultra-smooth radial gradient blend background - Extended range */}
            <div 
              className="absolute pointer-events-none"
              style={{
                width: '900px',
                height: '900px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                background: 'radial-gradient(circle, rgba(241, 188, 40, 0.12) 0%, rgba(241, 188, 40, 0.10) 10%, rgba(241, 188, 40, 0.08) 20%, rgba(241, 188, 40, 0.06) 30%, rgba(241, 188, 40, 0.04) 45%, rgba(241, 188, 40, 0.02) 60%, rgba(241, 188, 40, 0.01) 75%, rgba(249, 247, 239, 0) 100%)',
                filter: 'blur(50px)',
              }}
            ></div>
            <div 
              className="absolute pointer-events-none"
              style={{
                width: '700px',
                height: '700px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                background: 'radial-gradient(circle, rgba(241, 188, 40, 0.08) 0%, rgba(241, 188, 40, 0.05) 30%, rgba(241, 188, 40, 0.02) 60%, rgba(249, 247, 239, 0) 100%)',
                filter: 'blur(40px)',
              }}
            ></div>
            
            {/* Main circle */}
            <div className="relative w-28 h-28 bg-gradient-to-br from-[#F1BC28] via-[#F1BC28] to-[#d4a324] rounded-full shadow-2xl group-hover:scale-110 transition-all duration-500 flex items-center justify-center border-4 border-white/40">
              {/* Inner glow */}
              <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              
              {/* Icon */}
              <div className="relative z-10 flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-xl font-bold">1</span>
              </div>
            </div>
            
            {/* Text card */}
            <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-80">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#F1BC28]/20 group-hover:shadow-2xl group-hover:border-[#F1BC28]/40 transition-all duration-500">
                <p className="text-[#035938] text-center leading-relaxed font-medium">
                  {t('coffeeObj1')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objective 2 - Left */}
        <div className="absolute left-8 md:left-16 top-48">
          <div className="relative group">
            {/* Ultra-smooth radial gradient blend background - Extended range */}
            <div 
              className="absolute pointer-events-none"
              style={{
                width: '850px',
                height: '850px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                background: 'radial-gradient(circle, rgba(82, 188, 136, 0.12) 0%, rgba(82, 188, 136, 0.10) 10%, rgba(82, 188, 136, 0.08) 20%, rgba(82, 188, 136, 0.06) 30%, rgba(82, 188, 136, 0.04) 45%, rgba(82, 188, 136, 0.02) 60%, rgba(82, 188, 136, 0.01) 75%, rgba(249, 247, 239, 0) 100%)',
                filter: 'blur(50px)',
              }}
            ></div>
            <div 
              className="absolute pointer-events-none"
              style={{
                width: '650px',
                height: '650px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                background: 'radial-gradient(circle, rgba(82, 188, 136, 0.08) 0%, rgba(82, 188, 136, 0.05) 30%, rgba(82, 188, 136, 0.02) 60%, rgba(249, 247, 239, 0) 100%)',
                filter: 'blur(40px)',
              }}
            ></div>
            
            {/* Main circle */}
            <div className="relative w-24 h-24 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-full shadow-2xl group-hover:scale-110 transition-all duration-500 flex items-center justify-center border-4 border-white/40">
              <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-1">
                <div className="w-9 h-9 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-lg font-bold">2</span>
              </div>
            </div>
            
            {/* Text card */}
            <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-72">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-[#52BC88]/20 group-hover:shadow-2xl group-hover:border-[#52BC88]/40 transition-all duration-500">
                <p className="text-[#035938] text-center leading-relaxed text-sm">
                  {t('coffeeObj2')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objective 3 - Center */}
        <div className="absolute left-1/2 -translate-x-1/2 top-96">
          <div className="relative group">
            {/* Ultra-smooth radial gradient blend background - Extended range */}
            <div 
              className="absolute pointer-events-none"
              style={{
                width: '900px',
                height: '900px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                background: 'radial-gradient(circle, rgba(3, 89, 56, 0.10) 0%, rgba(3, 89, 56, 0.08) 10%, rgba(3, 89, 56, 0.07) 20%, rgba(3, 89, 56, 0.05) 30%, rgba(3, 89, 56, 0.04) 45%, rgba(3, 89, 56, 0.02) 60%, rgba(3, 89, 56, 0.01) 75%, rgba(249, 247, 239, 0) 100%)',
                filter: 'blur(50px)',
              }}
            ></div>
            <div 
              className="absolute pointer-events-none"
              style={{
                width: '700px',
                height: '700px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                background: 'radial-gradient(circle, rgba(3, 89, 56, 0.07) 0%, rgba(3, 89, 56, 0.04) 30%, rgba(3, 89, 56, 0.02) 60%, rgba(249, 247, 239, 0) 100%)',
                filter: 'blur(40px)',
              }}
            ></div>
            
            {/* Main circle */}
            <div className="relative w-28 h-28 bg-gradient-to-br from-[#035938] via-[#035938] to-[#024028] rounded-full shadow-2xl group-hover:scale-110 transition-all duration-500 flex items-center justify-center border-4 border-white/40">
              <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-xl font-bold">3</span>
              </div>
            </div>
            
            {/* Text card */}
            <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-80">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#035938]/20 group-hover:shadow-2xl group-hover:border-[#035938]/40 transition-all duration-500">
                <p className="text-[#035938] text-center leading-relaxed font-medium">
                  {t('coffeeObj3')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objective 4 - Right */}
        <div className="absolute right-8 md:right-16 top-72">
          <div className="relative group">
            {/* Ultra-smooth radial gradient blend background - Extended range */}
            <div 
              className="absolute pointer-events-none"
              style={{
                width: '850px',
                height: '850px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                background: 'radial-gradient(circle, rgba(241, 188, 40, 0.12) 0%, rgba(241, 188, 40, 0.10) 10%, rgba(241, 188, 40, 0.08) 20%, rgba(241, 188, 40, 0.06) 30%, rgba(241, 188, 40, 0.04) 45%, rgba(241, 188, 40, 0.02) 60%, rgba(241, 188, 40, 0.01) 75%, rgba(249, 247, 239, 0) 100%)',
                filter: 'blur(50px)',
              }}
            ></div>
            <div 
              className="absolute pointer-events-none"
              style={{
                width: '650px',
                height: '650px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                background: 'radial-gradient(circle, rgba(241, 188, 40, 0.08) 0%, rgba(241, 188, 40, 0.05) 30%, rgba(241, 188, 40, 0.02) 60%, rgba(249, 247, 239, 0) 100%)',
                filter: 'blur(40px)',
              }}
            ></div>
            
            {/* Main circle */}
            <div className="relative w-24 h-24 bg-gradient-to-br from-[#F1BC28] to-[#d4a324] rounded-full shadow-2xl group-hover:scale-110 transition-all duration-500 flex items-center justify-center border-4 border-white/40">
              <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-1">
                <div className="w-9 h-9 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-lg font-bold">4</span>
              </div>
            </div>
            
            {/* Text card */}
            <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-72">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-[#F1BC28]/20 group-hover:shadow-2xl group-hover:border-[#F1BC28]/40 transition-all duration-500">
                <p className="text-[#035938] text-center leading-relaxed text-sm">
                  {t('coffeeObj4')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objective 5 - Bottom Center */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
          <div className="relative group">
            {/* Ultra-smooth radial gradient blend background - Extended range */}
            <div 
              className="absolute pointer-events-none"
              style={{
                width: '850px',
                height: '850px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                background: 'radial-gradient(circle, rgba(82, 188, 136, 0.12) 0%, rgba(82, 188, 136, 0.10) 10%, rgba(82, 188, 136, 0.08) 20%, rgba(82, 188, 136, 0.06) 30%, rgba(82, 188, 136, 0.04) 45%, rgba(82, 188, 136, 0.02) 60%, rgba(82, 188, 136, 0.01) 75%, rgba(249, 247, 239, 0) 100%)',
                filter: 'blur(50px)',
              }}
            ></div>
            <div 
              className="absolute pointer-events-none"
              style={{
                width: '650px',
                height: '650px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                background: 'radial-gradient(circle, rgba(82, 188, 136, 0.08) 0%, rgba(82, 188, 136, 0.05) 30%, rgba(82, 188, 136, 0.02) 60%, rgba(249, 247, 239, 0) 100%)',
                filter: 'blur(40px)',
              }}
            ></div>
            
            {/* Main circle */}
            <div className="relative w-24 h-24 bg-gradient-to-br from-[#52BC88] via-[#52BC88] to-[#3a9d6f] rounded-full shadow-2xl group-hover:scale-110 transition-all duration-500 flex items-center justify-center border-4 border-white/40">
              <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-1">
                <div className="w-9 h-9 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Coffee className="w-4 h-4 text-white" />
                </div>
                <span className="text-white text-lg font-bold">5</span>
              </div>
            </div>
            
            {/* Text card */}
            <div className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-72">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-[#52BC88]/20 group-hover:shadow-2xl group-hover:border-[#52BC88]/40 transition-all duration-500">
                <p className="text-[#035938] text-center leading-relaxed text-sm">
                  {t('coffeeObj5')}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile/Tablet Alternative Layout */}
      <div className="lg:hidden max-w-2xl mx-auto space-y-8 mt-12 px-4">
        {[1, 2, 3, 4, 5].map((num) => {
          const icons = [Sprout, TrendingUp, Users, Sparkles, Coffee];
          const colors = [
            'from-[#F1BC28] to-[#d4a324]',
            'from-[#52BC88] to-[#035938]',
            'from-[#035938] to-[#024028]',
            'from-[#F1BC28] to-[#d4a324]',
            'from-[#52BC88] to-[#3a9d6f]',
          ];
          const borderColors = [
            'border-[#F1BC28]/20 hover:border-[#F1BC28]/40',
            'border-[#52BC88]/20 hover:border-[#52BC88]/40',
            'border-[#035938]/20 hover:border-[#035938]/40',
            'border-[#F1BC28]/20 hover:border-[#F1BC28]/40',
            'border-[#52BC88]/20 hover:border-[#52BC88]/40',
          ];
          const Icon = icons[num - 1];
          
          return (
            <div key={num} className="relative group">
              <div className="flex items-start gap-4">
                {/* Circle */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${colors[num - 1]} rounded-full shadow-xl flex items-center justify-center border-4 border-white/40 group-hover:scale-110 transition-all duration-500`}>
                  <div className="flex flex-col items-center gap-0.5">
                    <Icon className="w-5 h-5 text-white" />
                    <span className="text-white text-xs font-bold">{num}</span>
                  </div>
                </div>
                
                {/* Text card */}
                <div className={`flex-1 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border ${borderColors[num - 1]} transition-all duration-500`}>
                  <p className="text-[#035938] leading-relaxed text-sm">
                    {t(`coffeeObj${num}`)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}