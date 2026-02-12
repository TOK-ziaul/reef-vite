import { 
  Sprout, 
  HeartHandshake, 
  TreePine, 
  Cog, 
  Trees, 
  GraduationCap, 
  Coins, 
  Users, 
  Lightbulb 
} from 'lucide-react';

interface FruitsWorkAxesFlowingProps {
  t: (key: string) => string;
}

export function FruitsWorkAxesFlowing({ t }: FruitsWorkAxesFlowingProps) {
  return (
    <div className="mb-20 relative">
      {/* Section Title */}
      <div className="text-center mb-20">
        <p className="text-[#52BC88] text-sm tracking-widest uppercase mb-2">OUR STRATEGIC APPROACH</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#035938] mb-4">
          We Execute Every <span className="text-[#52BC88]">{t('workAxes')}</span> Carefully
        </h2>
      </div>

      {/* Flowing Path Design */}
      <div className="max-w-7xl mx-auto relative py-12">
        
        {/* SVG Curved Path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 1200 1400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#035938" />
              <stop offset="50%" stopColor="#52BC88" />
              <stop offset="100%" stopColor="#F1BC28" />
            </linearGradient>
          </defs>
          {/* Flowing S-Curve Path */}
          <path 
            d="M 150 80 Q 500 80, 700 180 T 1050 280 Q 850 360, 650 440 T 150 600 Q 400 680, 600 760 T 1050 900 Q 800 980, 600 1060 T 150 1200"
            fill="none" 
            stroke="url(#pathGradient)" 
            strokeWidth="2" 
            strokeDasharray="8,8"
            opacity="0.25"
          />
        </svg>

        {/* Axis Points Along the Flow */}
        <div className="relative space-y-6 md:space-y-8">
          
          {/* Axis 1 - Left */}
          <div className="flex items-center md:justify-start group">
            <div className="relative flex items-center gap-4 md:gap-6">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#035938] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Sprout className="w-8 h-8 md:w-10 md:h-10 text-[#035938]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#F1BC28] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-bold text-[#035938] text-xs">01</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs md:max-w-sm">{t('fruitsWorkAxis1')}</p>
            </div>
          </div>

          {/* Axis 2 - Right */}
          <div className="flex items-center md:justify-end group">
            <div className="relative flex items-center gap-4 md:gap-6 flex-row-reverse">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#52BC88] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                  <HeartHandshake className="w-8 h-8 md:w-10 md:h-10 text-[#52BC88]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#F1BC28] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-bold text-[#035938] text-xs">02</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs md:max-w-sm text-right">{t('fruitsWorkAxis2')}</p>
            </div>
          </div>

          {/* Axis 3 - Left */}
          <div className="flex items-center md:justify-start group">
            <div className="relative flex items-center gap-4 md:gap-6">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#F1BC28] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#F1BC28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#035938] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-bold text-white text-xs">03</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs md:max-w-sm">{t('fruitsWorkAxis3')}</p>
            </div>
          </div>

          {/* Axis 4 - Right */}
          <div className="flex items-center md:justify-end group">
            <div className="relative flex items-center gap-4 md:gap-6 flex-row-reverse">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#035938] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#035938]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#52BC88] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-bold text-white text-xs">04</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs md:max-w-sm text-right">{t('fruitsWorkAxis4')}</p>
            </div>
          </div>

          {/* Axis 5 - Left */}
          <div className="flex items-center md:justify-start group">
            <div className="relative flex items-center gap-4 md:gap-6">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#52BC88] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <TreePine className="w-8 h-8 md:w-10 md:h-10 text-[#52BC88]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#F1BC28] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-bold text-[#035938] text-xs">05</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs md:max-w-sm">{t('fruitsWorkAxis5')}</p>
            </div>
          </div>

          {/* Axis 6 - Right */}
          <div className="flex items-center md:justify-end group">
            <div className="relative flex items-center gap-4 md:gap-6 flex-row-reverse">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#F1BC28] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                  <Cog className="w-8 h-8 md:w-10 md:h-10 text-[#F1BC28]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#035938] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-bold text-white text-xs">06</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs md:max-w-sm text-right">{t('fruitsWorkAxis6')}</p>
            </div>
          </div>

          {/* Axis 7 - Left */}
          <div className="flex items-center md:justify-start group">
            <div className="relative flex items-center gap-4 md:gap-6">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#035938] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Trees className="w-8 h-8 md:w-10 md:h-10 text-[#035938]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#52BC88] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-bold text-white text-xs">07</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs md:max-w-sm">{t('fruitsWorkAxis7')}</p>
            </div>
          </div>

          {/* Axis 8 - Right */}
          <div className="flex items-center md:justify-end group">
            <div className="relative flex items-center gap-4 md:gap-6 flex-row-reverse">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#52BC88] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                  <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-[#52BC88]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#F1BC28] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-bold text-[#035938] text-xs">08</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs md:max-w-sm text-right">{t('fruitsWorkAxis8')}</p>
            </div>
          </div>

          {/* Axis 9 - Left */}
          <div className="flex items-center md:justify-start group">
            <div className="relative flex items-center gap-4 md:gap-6">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1BC28] to-[#035938] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#F1BC28] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Coins className="w-8 h-8 md:w-10 md:h-10 text-[#F1BC28]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#035938] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-bold text-white text-xs">09</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs md:max-w-sm">{t('fruitsWorkAxis9')}</p>
            </div>
          </div>

          {/* Axis 10 - Right */}
          <div className="flex items-center md:justify-end group">
            <div className="relative flex items-center gap-4 md:gap-6 flex-row-reverse">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#035938] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-[#035938]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#52BC88] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-bold text-white text-xs">10</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs md:max-w-sm text-right">{t('fruitsWorkAxis10')}</p>
            </div>
          </div>

          {/* Axis 11 - Left */}
          <div className="flex items-center md:justify-start group">
            <div className="relative flex items-center gap-4 md:gap-6">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#52BC88] to-[#F1BC28] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#52BC88] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-[#52BC88]" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-[#F1BC28] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="font-bold text-[#035938] text-xs">11</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs md:max-w-sm">{t('fruitsWorkAxis11')}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}