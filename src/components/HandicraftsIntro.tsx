import { useLanguage } from '../context/LanguageContext';
import { Scissors } from 'lucide-react';

export function HandicraftsIntro() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="mb-20">
      {/* Main Content Container with Organic Flow */}
      <div className="relative">
        {/* Floating Background Blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#F1BC28]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#52BC88]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Content Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className={`space-y-6 ${isRTL ? 'lg:order-2' : ''}`}>
            {/* Decorative Line */}
            <div className="flex items-center gap-3">
              <div className="h-1 w-16 bg-gradient-to-r from-[#035938] to-[#F1BC28] rounded-full" />
              <Scissors className="w-6 h-6 text-[#F1BC28]" />
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#035938] leading-tight">
              {t('handicraftsIntroTitle')}
            </h2>

            {/* New Description - Long Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('handicraftsIntroLongDesc')}
            </p>
          </div>

          {/* Right: Image Collage with Organic Shapes */}
          <div className={`relative ${isRTL ? 'lg:order-1' : ''}`}>
            {/* Main Image Container with Custom Shape */}
            <div className="relative">
              {/* Background Decorative Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#035938]/20 to-[#F1BC28]/20 rounded-[3rem] rotate-3 transform" />
              
              {/* Image Grid */}
              <div className="relative grid grid-cols-2 gap-4 p-4">
                {/* Large Image - Top Left */}
                <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1737606985741-479bece921b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGhhbmRpY3JhZnRzJTIwYXJ0aXNhbiUyMHdlYXZpbmd8ZW58MXx8fHwxNzcwNjM3MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Traditional Handicrafts"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Small Image - Bottom Left */}
                <div className="rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1761062404254-8e19c9e77d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwY2VyYW1pY3MlMjB0cmFkaXRpb25hbCUyMGNyYWZ0c3xlbnwxfHx8fDE3NzA2MzczNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pottery Ceramics"
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Small Image - Bottom Right */}
                <div className="rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHRleHRpbGVzJTIwd2VhdmluZyUyMGxvb218ZW58MXx8fHwxNzcwNjM3MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Handmade Textiles"
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}