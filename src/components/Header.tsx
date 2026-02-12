import { useState } from "react";
import { Search, ExternalLink, Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";
import { MegaMenuSectors } from "./MegaMenuSectors";
import { DropdownAbout } from "./DropdownAbout";
// import { DropdownSustainability } from "./DropdownSustainability";
import { DropdownMediaCenter } from "./DropdownMediaCenter";
import { DropdownSupport } from "./DropdownSupport";
import { DropdownContact } from "./DropdownContact";
const reefLogo = "https://placehold.co/200x200?text=Logo";

export function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { navigateTo } = useNavigation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handleMouseEnter = (itemKey: string, hasDropdown: boolean) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (hasDropdown) {
      setActiveMenu(itemKey);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300); // Increased delay to allow clicking on dropdown items
    setHoverTimeout(timeout);
  };

  const handleMenuClose = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveMenu(null);
  };

  const handleDropdownPanelEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleNavigation = (key: string, defaultPage?: string, defaultSectorId?: string) => {
    const page = (defaultPage ?? key) as Parameters<typeof navigateTo>[0];
    navigateTo(page, defaultSectorId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { key: "home", href: "/", hasDropdown: false },
    {
      key: "about",
      href: "/about",
      hasDropdown: true,
      defaultPage: "about",
      component: DropdownAbout,
      mobileItems: [
        "aboutProgram",
        "visionMission",
        "objectives",
        "whatWeOffer",
        "milestones",
        "annualReports",
      ],
    },
    {
      key: "sectors",
      href: "#",
      hasDropdown: true,
      defaultPage: "sectors",
      component: MegaMenuSectors,
      mobileItems: [
        "beekeeping",
        "coffee",
        "flowers",
        "fruits",
        "livestock",
        "handicrafts",
        "fishing",
        "rainfedCrops",
      ],
    },
    {
      key: "sustainability",
      href: "/sustainability",
      hasDropdown: false,
    },
    {
      key: "mediaCenter",
      href: "/news-press",
      hasDropdown: true,
      defaultPage: "newsPress",
      component: DropdownMediaCenter,
      mobileItems: ["newsPress", "photoVideo", "events", "galleryBook"],
    },
    {
      key: "support",
      href: "/support-application",
      hasDropdown: true,
      defaultPage: "supportApplication",
      component: DropdownSupport,
      mobileItems: ["howToApply", "faqs", "termsConditions"],
    },
    {
      key: "contact",
      href: "/contact",
      hasDropdown: true,
      defaultPage: "contact",
      component: DropdownContact,
    },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="h-20 max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigateTo("home");
          }}
          className="flex items-center"
        >
          <img
            src={reefLogo}
            alt="Reef Saudi Logo"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.key} className="relative flex items-center gap-0.5">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(
                    item.key,
                    (item as { defaultPage?: string }).defaultPage,
                    (item as { defaultSectorId?: string }).defaultSectorId
                  );
                }}
                className="text-[#052F2A] hover:text-[#035938] transition-colors"
              >
                {t(item.key)}
              </a>
              {item.hasDropdown && (
                <>
                  <span
                    className="inline-flex cursor-pointer p-1 -m-1 rounded text-[#052F2A] hover:text-[#035938] transition-colors"
                    onMouseEnter={() => handleMouseEnter(item.key, true)}
                    onMouseLeave={handleMouseLeave}
                    aria-label={t("openDropdown")}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMenu === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                  {activeMenu === item.key && item.component && (
                    <div
                      className="absolute left-0 top-[46px] pt-1 z-50"
                      onMouseEnter={handleDropdownPanelEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <item.component onClose={handleMenuClose} />
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-[#052F2A]">
            <Search className="w-5 h-5" />
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border-2 border-[#035938] text-[#035938] rounded-lg hover:bg-[#035938] hover:text-white transition-all duration-200"
          >
            {language === "en" ? "AR" : "EN"}
          </button>

          {/* Support Programs with External Link */}
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-[#F1BC28] text-[#035938] rounded-lg hover:bg-[#035938] hover:text-white transition-all duration-300 hover:shadow-lg"
          >
            {t("supportPrograms")}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Right Side - Language Toggle & Hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border-2 border-[#035938] text-[#035938] rounded-lg hover:bg-[#035938] hover:text-white transition-all duration-200"
          >
            {language === "en" ? "AR" : "EN"}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-[#052F2A]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          style={{ top: "80px" }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-20 right-0 h-[calc(100vh-80px)] w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ direction: language === "ar" ? "rtl" : "ltr" }}
      >
        <div className="p-6">
          {/* Mobile Navigation Items */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <div key={item.key} className="border-b border-gray-100 pb-2">
                {item.hasDropdown ? (
                  <div>
                    <div className="w-full flex items-center justify-between gap-2">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(
                            item.key,
                            (item as { defaultPage?: string }).defaultPage,
                            (item as { defaultSectorId?: string }).defaultSectorId
                          );
                        }}
                        className="flex-1 py-3 text-start text-[#052F2A] hover:text-[#035938] transition-colors"
                      >
                        {t(item.key)}
                      </a>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setMobileActiveMenu(
                            mobileActiveMenu === item.key ? null : item.key
                          );
                        }}
                        className="p-2 -m-2 shrink-0 text-[#052F2A] hover:text-[#035938] transition-colors"
                        aria-label={t("openDropdown")}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            mobileActiveMenu === item.key ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {mobileActiveMenu === item.key && item.mobileItems && (
                      <div className="pl-4 space-y-2 pb-2">
                        {item.mobileItems.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block py-2 text-sm text-[#052F2A]/70 hover:text-[#035938] transition-colors"
                          >
                            {t(subItem)}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.key);
                    }}
                    className="block py-3 text-[#052F2A] hover:text-[#035938] transition-colors"
                  >
                    {t(item.key)}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="mt-6 space-y-3">
            {/* Search Button */}
            <button className="w-full flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-[#052F2A]">
              <Search className="w-5 h-5" />
              <span>{t("search")}</span>
            </button>

            {/* Support Programs */}
            <a
              href="#"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#F1BC28] text-[#035938] rounded-lg hover:bg-[#035938] hover:text-white transition-all duration-300"
            >
              {t("supportPrograms")}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Overlay for mega menu (z-40 so dropdowns stay on top when moving from arrow to menu) */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/5 backdrop-blur-sm"
          style={{ top: "80px" }}
          onMouseEnter={handleMenuClose}
        />
      )}
    </header>
  );
}
