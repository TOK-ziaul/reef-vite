import { useLanguage } from '../context/LanguageContext';

export function LivestockMainGoals() {
  const { t, language } = useLanguage();

  const goals = [
    { number: '1', text: t('livestockGoal1') },
    { number: '2', text: t('livestockGoal2') },
    { number: '3', text: t('livestockGoal3') },
    { number: '4', text: t('livestockGoal4') },
  ];

  return (
    <div className="py-20 bg-[#F9F7EF]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#035938] mb-2"
            style={{
              fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : "inherit",
            }}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {t('livestockMainGoalsTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] rounded-full"></div>
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#F9F7EF] to-white rounded-2xl p-8 border border-[#035938]/10 hover:border-[#52BC88]/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#52BC88]/5 to-transparent rounded-bl-3xl"></div>
              
              <div 
                className="flex items-start gap-4"
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              >
                {/* Number Badge */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl font-bold">{goal.number}</span>
                </div>

                {/* Goal Text */}
                <p 
                  className="flex-1 text-lg leading-relaxed text-[#035938]/80 pt-2"
                  style={{
                    fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : "inherit",
                  }}
                >
                  {goal.text}
                </p>
              </div>

              {/* Decorative Bottom Element */}
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#F1BC28]/5 to-transparent rounded-tr-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}