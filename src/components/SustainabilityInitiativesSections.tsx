import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";
import { ArrowRight } from "lucide-react";

function BulletList({ items }: { items: string[] }) {
  const { language } = useLanguage();
  return (
    <ul
      className="space-y-3"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-lg text-[#052F2A] leading-relaxed"
        >
          <span className="text-[#52BC88] mt-1.5">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SustainabilityIntroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative -mt-1 py-16 bg-[#F9F7EF]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        <div
          className="space-y-6 text-lg md:text-xl leading-relaxed text-[#052F2A]"
          style={{ lineHeight: "2" }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <p>{t("sustIntroP1")}</p>
          <p>{t("sustIntroP2")}</p>
        </div>
      </div>
    </section>
  );
}

export function SustainabilityExtensionSection() {
  const { t, language } = useLanguage();

  const fieldSchoolAreas = [
    t("digitalFieldSchoolsCrops"),
    t("digitalFieldSchoolsFruits"),
    t("digitalFieldSchoolsBeekeeping"),
    t("digitalFieldSchoolsRoses"),
    t("digitalFieldSchoolsFish"),
    t("digitalFieldSchoolsAromatics"),
  ];

  const extensionMessages = [
    t("extensionMessagesDesc"),
    t("extensionMessagesApp"),
    t("extensionMessagesPublished"),
    t("extensionMessagesBeneficiaries"),
    t("extensionMessagesPrograms"),
    t("extensionMessagesLeaders"),
  ];

  const meetingTopics = [
    t("extensionMeetingsTopic1"),
    t("extensionMeetingsTopic2"),
    t("extensionMeetingsTopic3"),
    t("extensionMeetingsTopic4"),
    t("extensionMeetingsTopic5"),
  ];

  const knowledgeNetworks = [
    t("knowledgeNetworksBeekeepingParticipants"),
    t("knowledgeNetworksOrganicParticipants"),
    t("knowledgeNetworksRosesParticipants"),
    t("knowledgeNetworksFruitsParticipants"),
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
        <h2
          className="text-4xl md:text-5xl font-bold text-[#035938] mb-6"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          {t("agricExtensionTitle")}
        </h2>
        <p
          className="text-lg md:text-xl text-[#052F2A] mb-12 max-w-5xl"
          style={{ lineHeight: "2" }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          {t("agricExtensionIntro")}
        </p>

        <div className="space-y-12" dir={language === "ar" ? "rtl" : "ltr"}>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-4">
              {t("digitalFieldSchoolsTitle")}
            </h3>
            <p className="text-lg text-[#052F2A] mb-4 leading-relaxed">
              {t("digitalFieldSchoolsDesc")}
            </p>
            <BulletList items={fieldSchoolAreas} />
            <div className="mt-6 space-y-3 text-lg text-[#052F2A] leading-relaxed">
              <p>{t("digitalFieldSchoolsFarms")}</p>
              <p>{t("digitalFieldSchoolsPlatform")}</p>
              <p>{t("digitalFieldSchoolsTraining")}</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-4">
              {t("extensionMessagesTitle")}
            </h3>
            <BulletList items={extensionMessages} />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-4">
              {t("extensionMeetingsTitle")}
            </h3>
            <p className="text-lg text-[#052F2A] mb-4 leading-relaxed">
              {t("extensionMeetingsIntro")}
            </p>
            <p className="text-lg font-semibold text-[#035938] mb-3">
              {t("extensionMeetingsTopicsTitle")}
            </p>
            <BulletList items={meetingTopics} />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-4">
              {t("knowledgeNetworksTitle")}
            </h3>
            <p className="text-lg text-[#052F2A] mb-4 leading-relaxed">
              {t("knowledgeNetworksDesc")}
            </p>
            <p className="text-lg font-semibold text-[#035938] mb-3">
              {language === "ar" ? "شملت المجالات:" : "Areas covered:"}
            </p>
            <BulletList items={knowledgeNetworks} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SustainabilityMarketingSection() {
  const { t, language } = useLanguage();
  const { navigateTo } = useNavigation();

  const digitalSystemItems = [
    t("digitalMarketSystemItem1"),
    t("digitalMarketSystemItem2"),
    t("digitalMarketSystemItem3"),
    t("digitalMarketSystemItem4"),
  ];

  const digitalSystemGoals = [
    t("digitalMarketSystemGoal1"),
    t("digitalMarketSystemGoal2"),
    t("digitalMarketSystemGoal3"),
  ];

  const postHarvestItems = [
    t("postHarvestItem1"),
    t("postHarvestItem2"),
    t("postHarvestItem3"),
    t("postHarvestItem4"),
  ];

  const salesPoints = [
    t("salesPoint1"),
    t("salesPoint2"),
    t("salesPoint3"),
    t("salesPoint4"),
    t("salesPoint5"),
    t("salesPoint6"),
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#F9F7EF] to-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
        <h2
          className="text-4xl md:text-5xl font-bold text-[#035938] mb-12"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          {t("agricMarketingTitle")}
        </h2>

        <div className="space-y-12" dir={language === "ar" ? "rtl" : "ltr"}>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-4">
              {t("digitalMarketSystemTitle")}
            </h3>
            <BulletList items={digitalSystemItems} />
            <p className="text-lg font-semibold text-[#035938] mt-6 mb-3">
              {t("digitalMarketSystemGoalsTitle")}
            </p>
            <BulletList items={digitalSystemGoals} />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-4">
              {t("postHarvestTitle")}
            </h3>
            <BulletList items={postHarvestItems} />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#035938] mb-4">
              {t("salesPointsTitle")}
            </h3>
            <p className="text-lg text-[#052F2A] mb-4 leading-relaxed">
              {t("salesPointsIntro")}
            </p>
            <BulletList items={salesPoints} />
            <p className="text-lg text-[#052F2A] mt-6 leading-relaxed">
              {t("salesPointsImpact")}
            </p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <button
            type="button"
            onClick={() => navigateTo("about")}
            className="flex items-center gap-2 px-8 py-4 bg-[#035938] text-white rounded-xl hover:bg-[#52BC88] transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {t("sustMarketingCTA1")}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => navigateTo("sectors")}
            className="flex items-center gap-2 px-8 py-4 bg-[#F1BC28] text-[#035938] rounded-xl hover:bg-[#035938] hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {t("sustMarketingCTA2")}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
