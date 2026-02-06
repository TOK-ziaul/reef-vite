import { GraduationCap, Image, HandHeart, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function InitiativesBanner() {
  const { t } = useLanguage();

  const banners = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      titleKey: 'reefAcademyTitle',
      descKey: 'reefAcademyDesc',
      gradient: 'from-[#035938] to-[#52BC88]',
    },
    {
      icon: <Image className="w-12 h-12" />,
      titleKey: 'reefGalleryTitle',
      descKey: 'reefGalleryDesc',
      gradient: 'from-[#52BC88] to-[#F1BC28]',
    },
    {
      icon: <HandHeart className="w-12 h-12" />,
      titleKey: 'supportProgramsTitle',
      descKey: 'supportProgramsDesc',
      gradient: 'from-[#F1BC28] to-[#035938]',
    },
  ];

  return (
    <section className="py-24 bg-[#F9F7EF] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#035938]/5 rounded-full blur-3xl" />
      
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="text-[#052F2A]">Explore Our </span>
            <span className="text-[#035938] italic">Programs</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Main Card */}
              <div className={`relative bg-gradient-to-br ${banner.gradient} p-10 text-white transition-transform duration-500 group-hover:scale-[1.02]`}>
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 backdrop-blur-sm transition-all duration-300" />
                
                <div className="relative z-10">
                  {/* Floating Icon */}
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {banner.icon}
                  </div>

                  <h3 className="text-white mb-3">{t(banner.titleKey)}</h3>
                  <p className="text-white/90 mb-6">{t(banner.descKey)}</p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}