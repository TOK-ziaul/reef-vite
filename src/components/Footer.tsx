import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigation, type Page } from "../context/NavigationContext";
import { ABOUT_SECTION_BY_KEY } from "../constants/aboutSections";

type FooterInternalLink = {
  label: string;
  page: Page;
  sectorId?: string;
  hash?: string;
};

type FooterExternalLink = {
  label: string;
  href: string;
  external: true;
};

type FooterLink = FooterInternalLink | FooterExternalLink;

function isInternalLink(link: FooterLink): link is FooterInternalLink {
  return "page" in link;
}

export function Footer() {
  const { t, language } = useLanguage();
  const { navigateTo } = useNavigation();

  const footerColumns: { title: string; links: FooterLink[] }[] = [
    {
      title: t("overview"),
      links: [
        {
          label: t("aboutProgram"),
          page: "about",
          hash: ABOUT_SECTION_BY_KEY.aboutProgram,
        },
        {
          label: t("visionMission"),
          page: "about",
          hash: ABOUT_SECTION_BY_KEY.visionMission,
        },
        {
          label: t("objectives"),
          page: "about",
          hash: ABOUT_SECTION_BY_KEY.objectives,
        },
        {
          label: t("whatWeOffer"),
          page: "about",
          hash: ABOUT_SECTION_BY_KEY.whatWeOffer,
        },
        { label: t("achievements"), page: "about", hash: "achievements" },
        {
          label: t("annualReports"),
          page: "about",
          hash: ABOUT_SECTION_BY_KEY.annualReports,
        },
        { label: t("mediaCenter"), page: "newsPress" },
      ],
    },
    {
      title: t("sectorsServices"),
      links: [
        { label: t("beekeeping"), page: "sector", sectorId: "beekeeping" },
        { label: t("coffee"), page: "sector", sectorId: "coffee" },
        { label: t("fruits"), page: "sector", sectorId: "fruits" },
        { label: t("rainfedCrops"), page: "sector", sectorId: "rainfed" },
        { label: t("rosesAromatic"), page: "sector", sectorId: "flowers" },
        { label: t("livestock"), page: "sector", sectorId: "livestock" },
        { label: t("fishing"), page: "sector", sectorId: "fishing" },
        { label: t("handicrafts"), page: "sector", sectorId: "handicrafts" },
        { label: t("agritech"), page: "sectors" },
        { label: t("reefAcademy"), page: "about" },
      ],
    },
    {
      title: t("supportResources"),
      links: [
        { label: t("howToApply"), page: "supportApplication" },
        { label: t("faqs"), page: "faqs" },
        { label: t("termsConditions"), page: "beneficiariesGuide" },
        { label: t("submitComplaint"), page: "contact" },
        {
          label: t("reportCorruption"),
          href: "https://www.nazaha.gov.sa",
          external: true,
        },
        { label: t("askSpokesperson"), page: "contact" },
        { label: t("contact"), page: "contact" },
      ],
    },
    {
      title: t("importantLinks"),
      links: [
        {
          label: t("vision2030"),
          href: "https://vision2030.gov.sa",
          external: true,
        },
        {
          label: t("nationalPortal"),
          href: "https://www.my.gov.sa",
          external: true,
        },
        {
          label: t("openDataPortal"),
          href: "https://www.mewa.gov.sa/en/InformationCenter/OpenData/Pages/DataLibirary.aspx",
          external: true,
        },
        {
          label: t("eParticipation"),
          href: "https://www.mewa.gov.sa/en/Ministry/AboutMinistry/Sharing/Pages/default.aspx",
          external: true,
        },
        {
          label: t("mewa"),
          href: "https://www.mewa.gov.sa",
          external: true,
        },
        { label: t("interactiveMap"), page: "home", hash: "interactive-map" },
        { label: t("galleryBook"), page: "galleryBook" },
        { label: t("supportPrograms"), page: "supportApplication" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/ReefSaudi",
      label: "X",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/ReefSaudi",
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/reefsaudi",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/%D8%B1%D9%8A%D9%81-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9",
      label: "LinkedIn",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://www.youtube.com/@ReefSaudi",
      label: "YouTube",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.206 2.024a9.94 9.94 0 0 0-9.945 10v.002a10 10 0 0 0 2.93 7.07l.005.006 1.422 1.42-.547 2.005-.008.03a1.5 1.5 0 0 0 1.445 1.89h.023a1.5 1.5 0 0 0 1.058-.438l2.017-2.016.003-.003a9.92 9.92 0 0 0 1.596.128c5.496 0 9.957-4.461 9.957-9.957a9.94 9.94 0 0 0-9.956-9.137zm3.946 14.008a8.4 8.4 0 0 1-5.446 2.01 8.4 8.4 0 0 1-1.474-.129l-.026-.005a1.45 1.45 0 0 0-1.042.23l-1.866 1.866.507-1.855a1.45 1.45 0 0 0-.349-1.355l-1.302-1.303a8.39 8.39 0 0 1-2.463-5.94v-.002a8.35 8.35 0 0 1 8.35-8.35 8.35 8.35 0 0 1 8.351 8.35 8.4 8.4 0 0 1-3.24 6.483z" />
        </svg>
      ),
      href: "https://www.snapchat.com/add/reefsaudi",
      label: "Snapchat",
    },
  ];

  return (
    <footer
      className="bg-[#035938] text-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Main Footer Content */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8">
            {footerColumns.map((column, index) => (
              <div key={index}>
                <h3 className="text-white mb-6 text-lg">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {isInternalLink(link) ? (
                        <button
                          type="button"
                          onClick={() =>
                            navigateTo(link.page, link.sectorId, link.hash)
                          }
                          className="text-white/80! hover:text-white! transition-colors text-sm inline-flex items-center gap-2 cursor-pointer"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center gap-2 cursor-pointer"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social and Accessibility Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-white mb-4">{t("followUs")}</h3>
                <div className="flex flex-wrap items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-[#F1BC28] hover:text-[#035938] hover:border-[#F1BC28] transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white mb-4">{t("accessibilityTools")}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <button
                    type="button"
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all text-sm"
                    aria-label="Decrease font size"
                  >
                    A-
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    aria-label="Default font size"
                  >
                    A
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all text-lg"
                    aria-label="Increase font size"
                  >
                    A+
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    aria-label="High contrast"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#052F2A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex items-center justify-center">
            <div className="text-sm text-white/70 text-center">
              <div className="mb-1">{t("copyright")}</div>
              <div className="text-xs text-white/50">{t("copyrightFull")}</div>
              <div className="text-xs text-white/50">
                {t("copyrightSupervision")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
