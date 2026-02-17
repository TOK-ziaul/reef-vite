import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";

export function AllSectorsList() {
  const { t, language } = useLanguage();
  const { navigateTo } = useNavigation();
  const isRTL = language === "ar";

  const sectors = [
    {
      id: "beekeeping",
      nameKey: "allSector1Name",
      descKey: "allSector1Desc",
      number: 1,
      img: "/sectors/beekeeping.jpg",
    },
    {
      id: "coffee",
      nameKey: "allSector2Name",
      descKey: "allSector2Desc",
      number: 2,
      img: "/sectors/coffee.jpg",
    },
    {
      id: "flowers",
      nameKey: "allSector3Name",
      descKey: "allSector3Desc",
      number: 3,
      img: "/sectors/rose.jpg",
    },
    {
      id: "fruits",
      nameKey: "allSector4Name",
      descKey: "allSector4Desc",
      number: 4,
      img: "/sectors/fruits.jpg",
    },
    {
      id: "rainfed",
      nameKey: "allSector5Name",
      descKey: "allSector5Desc",
      number: 5,
      img: "/sectors/rainfed.jpg",
    },
    {
      id: "fishing",
      nameKey: "allSector6Name",
      descKey: "allSector6Desc",
      number: 6,
      img: "/sectors/fishing.jpg",
    },
    {
      id: "handicrafts",
      nameKey: "allSector7Name",
      descKey: "allSector7Desc",
      number: 7,
      img: "/sectors/handicraft.jpg",
    },
    {
      id: "livestock",
      nameKey: "allSector8Name",
      descKey: "allSector8Desc",
      number: 8,
      img: "/sectors/livestock.jpg",
    },
  ];

  return (
    <div className="mb-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#035938] mb-4">
          {t("ourRuralSectors")}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#F1BC28] to-[#52BC88] mx-auto rounded-full"></div>
      </div>

      {/* Sectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {sectors.map((sector, index) => (
          <div
            key={sector.id}
            className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent ${
              index % 2 === 0
                ? "hover:border-[#52BC88]/30"
                : "hover:border-[#F1BC28]/30"
            } overflow-hidden`}
          >
            <img
              src={sector.img}
              alt={t(sector.nameKey)}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div
              className={`absolute top-0 right-0 w-32 h-32 ${
                index % 2 === 0
                  ? "bg-gradient-to-br from-[#035938]/5 to-[#52BC88]/10"
                  : "bg-gradient-to-br from-[#F1BC28]/5 to-[#52BC88]/10"
              } rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}
            ></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-12 h-12 ${
                    index % 2 === 0
                      ? "bg-gradient-to-br from-[#035938] to-[#52BC88]"
                      : "bg-gradient-to-br from-[#F1BC28] to-[#52BC88]"
                  } rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white text-xl font-bold">
                    {sector.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#035938] mb-3">
                    {t(sector.nameKey)}
                  </h3>
                  <p className="text-gray-900 leading-relaxed mb-4">
                    {t(sector.descKey)}
                  </p>
                  <button
                    onClick={() => navigateTo("sector", sector.id)}
                    className="text-[#52BC88] hover:text-[#035938] font-bold transition-colors duration-300 flex items-center gap-2 group/btn"
                  >
                    {t("learnAboutSector")}
                    <svg
                      className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
