import { Leaf, Coffee, Flower2, Apple, Milk, Scissors, Fish, Sprout, Cpu, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';

interface Sector {
  icon: React.ReactNode;
  titleKey: string;
  sectorId: string;
}

interface MegaMenuSectorsProps {
  onClose?: () => void;
}

export function MegaMenuSectors({ onClose }: MegaMenuSectorsProps = {}) {
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();

  const sectors: Sector[] = [
    { icon: <Leaf className="w-8 h-8" />, titleKey: 'beekeeping', sectorId: 'beekeeping' },
    { icon: <Coffee className="w-8 h-8" />, titleKey: 'coffee', sectorId: 'coffee' },
    { icon: <Flower2 className="w-8 h-8" />, titleKey: 'rosesAromatic', sectorId: 'flowers' },
    { icon: <Apple className="w-8 h-8" />, titleKey: 'fruits', sectorId: 'fruits' },
    { icon: <Milk className="w-8 h-8" />, titleKey: 'livestock', sectorId: 'livestock' },
    { icon: <Scissors className="w-8 h-8" />, titleKey: 'handicrafts', sectorId: 'handicrafts' },
    { icon: <Fish className="w-8 h-8" />, titleKey: 'fishing', sectorId: 'fishing' },
    { icon: <Sprout className="w-8 h-8" />, titleKey: 'aromaticPlants', sectorId: 'rainfed' },
    { icon: <Cpu className="w-8 h-8" />, titleKey: 'agritech', sectorId: 'agritech' },
  ];

  const handleSectorClick = (sectorId: string) => {
    console.log('Sector clicked:', sectorId); // Debug log
    navigateTo('sector', sectorId);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-20 left-0 right-0 w-screen bg-[#F9F7EF] shadow-2xl border-t border-gray-200 z-50 animate-slideDown"
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="container mx-auto px-8 py-10 max-w-[1440px]">
        <div className="flex gap-8">
          {/* Sectors Grid - Takes 75% width */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
              {sectors.map((sector, index) => (
                <button
                  key={index}
                  onClick={() => handleSectorClick(sector.sectorId)}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-all duration-200 group border border-transparent hover:shadow-md text-left"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-[#035938]/10 text-[#035938] group-hover:bg-[#035938] group-hover:text-white transition-all duration-200 group-hover:scale-110">
                    {sector.icon}
                  </div>
                  <span className="pt-3 text-[#052F2A] group-hover:text-[#035938] transition-colors">
                    {t(sector.titleKey)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Map - Takes 25% width */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-xl p-6 h-full flex flex-col justify-between text-white shadow-lg min-h-[400px] animate-scaleUp">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-lg">{t('interactiveMap')}</h3>
                </div>
                <div className="bg-white/20 rounded-xl p-6 mb-4 backdrop-blur-sm border border-white/30">
                  <div className="w-full h-40 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 opacity-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <button className="w-full bg-white text-[#035938] py-3 px-6 rounded-lg hover:bg-[#F1BC28] hover:text-[#035938] transition-all duration-200 hover:shadow-md">
                {t('exploreInteractiveMap')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}