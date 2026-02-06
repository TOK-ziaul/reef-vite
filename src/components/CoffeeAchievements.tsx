import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import { 
  Trees, 
  TrendingUp, 
  Lightbulb, 
  Sprout, 
  Home,
  Users,
  Map,
  Globe,
  CheckCircle2
} from 'lucide-react';

export function CoffeeAchievements() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Trees,
      text: language === 'ar' 
        ? 'زيادة عدد أشجار القهوة إلى 1.2 مليون شجرة'
        : 'Increasing the number of coffee trees to 1.2 million trees',
      subtext: language === 'ar'
        ? '(الهدف: الوصول إلى 5-6 ملايين شجرة بحلول 2030)'
        : '(Target: reaching 5–6 million trees by 2030)',
      color: '#035938',
      gradient: 'from-[#035938] to-[#0d7a50]',
    },
    {
      icon: TrendingUp,
      text: language === 'ar'
        ? 'رفع الإنتاجية المتوقعة لكل شجرة من 0.4 كجم إلى 1.5 كجم سنوياً'
        : 'Raising the expected productivity per tree from 0.4 kg to 1.5 kg annually',
      subtext: '',
      color: '#52BC88',
      gradient: 'from-[#52BC88] to-[#3da872]',
    },
    {
      icon: Lightbulb,
      text: language === 'ar'
        ? 'إدخال 5 تقنيات وممارسات حديثة في زراعة القهوة'
        : 'Introducing 5 modern technologies and practices in coffee cultivation',
      subtext: '',
      color: '#F1BC28',
      gradient: 'from-[#F1BC28] to-[#d89e1a]',
    },
    {
      icon: Sprout,
      text: language === 'ar'
        ? 'نقل 8,000 شتلة قهوة عالية الجودة بنجاح'
        : 'Successfully transferring 8,000 high-quality coffee seedlings',
      subtext: '',
      color: '#52BC88',
      gradient: 'from-[#52BC88] to-[#035938]',
    },
    {
      icon: Home,
      text: language === 'ar'
        ? 'دعم المشاتل بقدرة إنتاجية تبلغ 50,000 شتلة سنوياً'
        : 'Supporting nurseries with a production capacity of 50,000 seedlings per year',
      subtext: '',
      color: '#035938',
      gradient: 'from-[#035938] to-[#52BC88]',
    },
    {
      icon: Users,
      text: language === 'ar'
        ? 'إجراء ورش عمل تدريبية لأكثر من 200 مستفيد'
        : 'Conducting training workshops for more than 200 beneficiaries',
      subtext: '',
      color: '#F1BC28',
      gradient: 'from-[#F1BC28] to-[#52BC88]',
    },
    {
      icon: Map,
      text: language === 'ar'
        ? 'تنفيذ زيارات ميدانية إلى أكثر من 100 مزرعة'
        : 'Carrying out field visits to over 100 farms',
      subtext: '',
      color: '#52BC88',
      gradient: 'from-[#52BC88] to-[#035938]',
    },
    {
      icon: Globe,
      text: language === 'ar'
        ? 'المشاركة في مؤتمرات ومعارض دولية متخصصة'
        : 'Participating in specialized international conferences and exhibitions',
      subtext: '',
      color: '#035938',
      gradient: 'from-[#035938] to-[#52BC88]',
    },
  ];

  return (
    <div ref={sectionRef} className="py-20 relative overflow-hidden bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#52BC88]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#F1BC28]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#035938] mb-4">
            {language === 'ar' ? 'الإنجازات الرئيسية' : 'Key Achievements'}
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#035938] to-[#52BC88] rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <div 
                key={index}
                className="group relative"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
                }}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl border-2 border-[#035938]/10 p-8 hover:border-[#52BC88]/30 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Decorative gradient blob */}
                  <div 
                    className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${achievement.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`}
                  ></div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-6">
                      <div 
                        className={`inline-flex p-4 bg-gradient-to-br ${achievement.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 
                          className="w-6 h-6 flex-shrink-0 mt-0.5" 
                          style={{ color: achievement.color }}
                          strokeWidth={2.5}
                        />
                        <p className="text-lg text-[#035938] font-medium leading-relaxed">
                          {achievement.text}
                        </p>
                      </div>
                      
                      {achievement.subtext && (
                        <p className="text-base text-[#035938]/60 italic pl-9 leading-relaxed">
                          {achievement.subtext}
                        </p>
                      )}
                    </div>

                    {/* Decorative bottom line */}
                    <div className="mt-6 flex items-center gap-2">
                      <div 
                        className={`h-1 w-16 bg-gradient-to-r ${achievement.gradient} rounded-full group-hover:w-24 transition-all duration-300`}
                      ></div>
                      <div className="flex gap-1">
                        <div className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: achievement.color, opacity: 0.4 }}></div>
                        <div className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: achievement.color, opacity: 0.4 }}></div>
                        <div className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: achievement.color, opacity: 0.4 }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
