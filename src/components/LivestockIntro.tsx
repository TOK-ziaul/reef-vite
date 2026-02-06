import { useLanguage } from '../context/LanguageContext';

export function LivestockIntro() {
  const { t, language } = useLanguage();

  return (
    <div className="py-20 bg-[#F9F7EF]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Introduction Content - Single Clean Card */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg">
          <div 
            className="space-y-6 text-xl leading-relaxed text-[#035938]/80 text-center max-w-6xl mx-auto"
            style={{
              fontFamily: language === 'ar' ? "'Loew Next Arabic', sans-serif" : "inherit",
            }}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <p>{t('livestockIntro1')}</p>
            <p>{t('livestockIntro2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}