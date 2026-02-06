import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#035938]/20 via-[#52BC88]/30 to-[#F1BC28]/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-[#F1BC28]/20 via-[#52BC88]/30 to-[#035938]/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-gradient-to-br from-[#52BC88]/20 to-[#035938]/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-20">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-[#035938]/20 mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 text-[#F1BC28]" />
              <span className="text-[#035938]">Reef Saudi Initiative 2024</span>
            </div>
            
            <h1 className="mb-6 leading-tight">
              <span className="block text-[#052F2A]">Empowering</span>
              <span className="block text-[#035938] italic">Rural Communities</span>
              <span className="block text-[#052F2A]">through</span>
              <span className="block bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] bg-clip-text text-transparent">
                Sustainable Agriculture
              </span>
            </h1>
            
            <p className="text-[#052F2A]/70 mb-8 max-w-lg text-xl">
              Building a thriving agricultural ecosystem that preserves heritage and creates economic opportunities.
            </p>

            <div className="flex items-center gap-4">
              <button className="group px-8 py-4 bg-[#035938] text-white rounded-full hover:bg-[#F1BC28] hover:text-[#035938] transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2">
                {t('explorePrograms')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-[#035938] text-[#035938] rounded-full hover:bg-[#035938] hover:text-white transition-all duration-300">
                {t('learnMore')}
              </button>
            </div>
          </div>

          {/* Right Side - Floating Cards */}
          <div className="relative h-[500px]">
            {/* Main Card */}
            <div className="absolute top-[10%] right-[10%] w-[300px] h-[350px] bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl flex items-center justify-center text-white mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-[#035938] mb-3">15,000+</h3>
              <p className="text-[#052F2A]/70">Beneficiaries empowered across Saudi Arabia</p>
            </div>

            {/* Secondary Card */}
            <div className="absolute bottom-[15%] left-[5%] w-[250px] h-[200px] bg-gradient-to-br from-[#F1BC28] to-[#F1BC28]/80 rounded-3xl shadow-xl p-6 text-white hover:scale-105 transition-transform duration-300">
              <h4 className="mb-2">9 Sectors</h4>
              <p className="text-white/90">Comprehensive coverage of agricultural industries</p>
            </div>

            {/* Accent Circle */}
            <div className="absolute top-[5%] left-[15%] w-24 h-24 bg-gradient-to-br from-[#52BC88] to-[#035938] rounded-full flex items-center justify-center text-white shadow-lg animate-bounce-slow">
              <span>500+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}