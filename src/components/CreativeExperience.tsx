import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function CreativeExperience() {
  const { t } = useLanguage();

  const experiences = [
    { 
      key: 'consultationMeeting',
      label: 'Consultation & Initial Meeting',
      color: 'from-[#035938] to-[#52BC88]'
    },
    { 
      key: 'sectorAnalysis',
      label: 'Detailed Sector Analysis',
      color: 'from-[#52BC88] to-[#035938]'
    },
    { 
      key: 'fundingSupport',
      label: 'Funding & Support Application',
      color: 'from-[#F1BC28] to-[#035938]'
    },
    { 
      key: 'ongoingGuidance',
      label: 'Ongoing Guidance & Mentorship',
      color: 'from-[#035938] to-[#F1BC28]'
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-bold text-[#035938]/3 pointer-events-none whitespace-nowrap">
        REEF
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left side - Bold typography */}
          <div>
            <h2 className="mb-8 leading-[1.1]">
              <span className="block text-[#052F2A]">Experience</span>
              <span className="block text-[#035938] italic text-[80px]">the Magic</span>
              <span className="block text-[#052F2A]">where</span>
              <span className="block text-[#F1BC28] italic text-[80px]">Art Meets</span>
              <span className="block text-[#052F2A]">Function.</span>
            </h2>
          </div>

          {/* Right side - List items */}
          <div className="space-y-4">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 bg-[#F9F7EF] rounded-2xl hover:bg-[#052F2A] transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Check className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
                <span className="text-[#052F2A] group-hover:text-white transition-colors text-lg">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
