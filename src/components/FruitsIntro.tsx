import { useLanguage } from '../context/LanguageContext';

export function FruitsIntro() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-[#F9F7EF]/30 to-white">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#52BC88]/5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F1BC28]/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Introduction Content */}
        <div className="space-y-8 mb-16">
          {/* Paragraph 1 */}
          <div 
            className="relative"
            style={{
              animation: 'fadeInUp 0.8s ease-out forwards',
              opacity: 0
            }}
          >
            <div className="relative bg-gradient-to-br from-white via-[#F9F7EF] to-white rounded-3xl p-10 md:p-12 border border-[#035938]/20 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-1/4 w-24 h-24 bg-[#52BC88]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#F1BC28]/10 rounded-full blur-2xl"></div>
              
              <p className="text-xl leading-relaxed text-[#035938]/80 text-center max-w-5xl mx-auto relative z-10">
                {t('fruitsIntro1')}
              </p>
            </div>
          </div>

          {/* Paragraph 2 */}
          <div 
            className="relative"
            style={{
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: '0.2s',
              opacity: 0
            }}
          >
            <div className="relative bg-gradient-to-br from-[#035938] to-[#035938]/90 rounded-3xl p-10 md:p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#52BC88]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F1BC28]/10 rounded-full blur-3xl"></div>
              
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'linear-gradient(#52BC88 1px, transparent 1px), linear-gradient(90deg, #52BC88 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}
              ></div>

              <div className="relative z-10">
                <p className="text-xl leading-relaxed text-white/95 text-center max-w-5xl mx-auto">
                  {t('fruitsIntro2')}
                </p>
              </div>
            </div>
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}