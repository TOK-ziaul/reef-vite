import { useLanguage } from "../context/LanguageContext";
import {
  Building2,
  TrendingUp,
  CheckCircle2,
  Target,
} from "lucide-react";

const marketingCenterRegionKeys = [
  "easternProvince",
  "jazan",
  "hail",
  "qassim",
  "asir",
  "baha",
  "makkah",
  "tabuk",
  "jouf",
  "najran",
  "madinah",
] as const;

const irrigationRegionKeys = [
  "najran",
  "baha",
  "jazan",
  "makkah",
  "asir",
] as const;

export function FruitsProjectsCreative() {
  const { t } = useLanguage();

  const projectKeys = [
    "fruitsProject1",
    "fruitsProject2",
    "fruitsProject3",
    "fruitsProject4",
    "fruitsProject5",
    "fruitsProject6",
    "fruitsProject7",
    "fruitsProject8",
    "fruitsProject9",
  ] as const;

  const feasibilityItems = Array.from({ length: 11 }, (_, i) => i + 1);
  const projectObjectives = [1, 2, 3];

  return (
    <div className="mb-20 relative overflow-hidden py-20 bg-gradient-to-b from-white via-[#F9F7EF]/30 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#035938] mb-4">
            {t("fruitsProjectsTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-[880px] mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="inline-flex p-4 bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#035938] mb-2">
              {t("fruitsProjectsCountValue")}
            </div>
            <p className="text-[#035938]/70">{t("fruitsProjectsCount")}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="inline-flex p-4 bg-gradient-to-br from-[#F1BC28] to-[#52BC88] rounded-2xl mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#035938] mb-2">
              {t("fruitsProjectsValueAmount")}
            </div>
            <p className="text-[#035938]/70">{t("fruitsProjectsValue")}</p>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#52BC88]/20 shadow-lg">
            <p className="text-lg text-[#035938]/80 leading-relaxed text-center">
              {t("fruitsProjectsIntro")}
            </p>
          </div>
        </div>

        <div className="mb-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-[#035938] to-[#52BC88] rounded-full"></div>
            {t("fruitsProjectsHighlights")}
          </h3>
          <div className="space-y-4">
            {projectKeys.map((key, index) => (
              <div key={key} className="relative group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#035938] to-[#52BC88] rounded-full group-hover:w-2 transition-all duration-300"></div>
                <div className="pl-8 py-4 bg-gradient-to-r from-[#035938]/5 to-transparent rounded-r-xl group-hover:from-[#035938]/10 transition-all duration-300">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <span className="font-bold text-[#035938] me-2">
                      {index + 1}-
                    </span>
                    {t(key)}
                  </p>
                  {index === 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 ps-6">
                      {marketingCenterRegionKeys.map((regionKey) => (
                        <span
                          key={regionKey}
                          className="bg-[#52BC88]/10 border border-[#52BC88]/30 px-3 py-1 rounded-full text-sm text-[#035938] font-medium"
                        >
                          {t(regionKey)}
                        </span>
                      ))}
                    </div>
                  )}
                  {index === 8 && (
                    <div className="flex flex-wrap gap-2 mt-3 ps-6">
                      {irrigationRegionKeys.map((regionKey) => (
                        <span
                          key={regionKey}
                          className="bg-[#F1BC28]/10 border border-[#F1BC28]/30 px-3 py-1 rounded-full text-sm text-[#035938] font-medium"
                        >
                          {t(regionKey)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-4">
            {t("fruitsFeasibilityTitle")}
          </h3>
          <p className="text-base text-[#035938]/70 mb-10 max-w-3xl">
            {t("fruitsFeasibilityIntro")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {feasibilityItems.map((num) => (
              <div
                key={num}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-[#035938]/10 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#52BC88] flex-shrink-0 mt-0.5" />
                <p className="text-[#035938]/80 leading-relaxed">
                  {t(`fruitsFeasibility${num}`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="relative bg-gradient-to-br from-[#035938] to-[#0d7a50] rounded-3xl p-10 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-[#F1BC28]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {t("fruitsProjectObjectivesTitle")}
                </h3>
              </div>
              <div className="space-y-4">
                {projectObjectives.map((num) => (
                  <div
                    key={num}
                    className="flex items-start gap-3 bg-white/10 rounded-xl p-4"
                  >
                    <span className="text-[#F1BC28] font-bold">{num}-</span>
                    <p className="text-white/95 leading-relaxed">
                      {t(`fruitsProjectObjective${num}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
