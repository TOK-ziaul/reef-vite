import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function Footer() {
  const { t, language } = useLanguage();

  const footerColumns = [
    {
      title: t("overview"),
      links: [
        { label: t("aboutProgram"), href: "#" },
        { label: t("visionMission"), href: "#" },
        { label: t("objectives"), href: "#" },
        { label: t("whatWeOffer"), href: "#" },
        { label: t("achievements"), href: "#" },
        { label: t("annualReports"), href: "#" },
        { label: t("mediaCenter"), href: "#" },
      ],
    },
    {
      title: t("sectorsServices"),
      links: [
        { label: t("beekeepingFooter"), href: "#" },
        { label: t("coffeeFooter"), href: "#" },
        { label: t("fruitsFooter"), href: "#" },
        { label: t("rainfedCropsFooter"), href: "#" },
        { label: t("rosesAromaticFooter"), href: "#" },
        { label: t("livestockFooter"), href: "#" },
        { label: t("fishingFooter"), href: "#" },
        { label: t("handicraftsFooter"), href: "#" },
        { label: t("agritechFooter"), href: "#" },
        { label: t("reefAcademyFooter"), href: "#" },
      ],
    },
    {
      title: t("supportResources"),
      links: [
        { label: t("howToApply"), href: "#" },
        { label: t("termsConditions"), href: "#" },
        { label: t("faqs"), href: "#" },
        { label: t("submitComplaint"), href: "#" },
        { label: t("reportCorruption"), href: "#" },
        { label: t("askSpokesperson"), href: "#" },
        { label: t("contact"), href: "#" },
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
          href: "#",
          external: true,
        },
        {
          label: t("eParticipation"),
          href: "#",
          external: true,
        },
        {
          label: t("mewa"),
          href: "https://mewa.gov.sa",
          external: true,
        },
        { label: t("interactiveMap"), href: "#" },
        { label: t("galleryBook"), href: "#" },
        { label: t("supportPrograms"), href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      label: "X",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "#",
      label: "YouTube",
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.206 2.024a9.94 9.94 0 0 0-9.945 10v.002a10 10 0 0 0 2.93 7.07l.005.006 1.422 1.42-.547 2.005-.008.03a1.5 1.5 0 0 0 1.445 1.89h.023a1.5 1.5 0 0 0 1.058-.438l2.017-2.016.003-.003a9.92 9.92 0 0 0 1.596.128c5.496 0 9.957-4.461 9.957-9.957a9.94 9.94 0 0 0-9.956-9.137zm3.946 14.008a8.4 8.4 0 0 1-5.446 2.01 8.4 8.4 0 0 1-1.474-.129l-.026-.005a1.45 1.45 0 0 0-1.042.23l-1.866 1.866.507-1.855a1.45 1.45 0 0 0-.349-1.355l-1.302-1.303a8.39 8.39 0 0 1-2.463-5.94v-.002a8.35 8.35 0 0 1 8.35-8.35 8.35 8.35 0 0 1 8.351 8.35 8.4 8.4 0 0 1-3.24 6.483z" />
        </svg>
      ),
      href: "#",
      label: "Snapchat",
    },
  ];

  return (
    <footer
      className="bg-[#035938] text-white [&_a]:!text-white [&_a:hover]:!text-white/90 [&_h3]:!text-white [&_button]:!text-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Main Footer Content */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-8 py-12">
          <div className="grid grid-cols-4 gap-12 mb-8">
            {/* Four Main Columns */}
            {footerColumns.map((column, index) => (
              <div key={index}>
                <h3 className="!text-white mb-6 text-lg">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-white/90 hover:text-white font-normal! 
                        transition-colors text-sm  inline-flex items-center gap-2"
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                        {link.external && (
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
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social and Accessibility Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="grid grid-cols-2 gap-12">
              {/* Social Media */}
              <div>
                <h3 className="text-white mb-4">{t("followUs")}</h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-[#F1BC28] hover:text-[#035938] hover:border-[#F1BC28] transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Accessibility Tools */}
              <div>
                <h3 className="!text-white mb-4">{t("accessibilityTools")}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <button
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center !text-white hover:bg-white/20 transition-all text-sm"
                    aria-label={t("accessibilityReduceText")}
                  >
                    A-
                  </button>
                  <button
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center !text-white hover:bg-white/20 transition-all"
                    aria-label={t("accessibilityRestoreText")}
                  >
                    A
                  </button>
                  <button
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center !text-white hover:bg-white/20 transition-all text-lg"
                    aria-label={t("accessibilityEnlargeText")}
                  >
                    A+
                  </button>
                  <button
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center !text-white hover:bg-white/20 transition-all"
                    aria-label={t("accessibilityColors")}
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
        <div className="max-w-[1440px] mx-auto px-8 py-6">
          <div className="flex items-center justify-center">
            {/* Copyright */}
            <div className="text-sm !text-white text-center">
              <div className="mb-1">{t("copyright")}</div>
              <div className="text-xs !text-white">{t("copyrightFull")}</div>
              <div className="text-xs !text-white">
                {t("copyrightSupervision")}
              </div>
            </div>

            {/* Logo */}
          </div>
        </div>
      </div>
    </footer>
  );
}
