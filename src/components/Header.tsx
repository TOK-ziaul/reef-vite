import { useState } from "react";
import { Search, ExternalLink, Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";
import { MegaMenuSectors } from "./MegaMenuSectors";
import { DropdownAbout } from "./DropdownAbout";
import { DropdownSustainability } from "./DropdownSustainability";
import { DropdownMediaCenter } from "./DropdownMediaCenter";
import { DropdownSupport } from "./DropdownSupport";
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

  const handleNavigation = (key: string) => {
    if (key === "home") {
      navigateTo("home");
    } else if (key === "about") {
      navigateTo("about");
    }
    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  const navItems = [
    { key: "home", href: "#", hasDropdown: false },
    {
      key: "about",
      href: "#",
      hasDropdown: true,
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
      component: MegaMenuSectors,
      mobileItems: [
        "beekeeping",
        "coffee",
        "flowers",
        "fruits",
        "livestock",
        "handicrafts",
        "fishing",
        "aromatic",
        "agritech",
      ],
    },
    {
      key: "sustainability",
      href: "#",
      hasDropdown: true,
      component: DropdownSustainability,
      mobileItems: ["initiatives", "impactStats", "reefAcademy"],
    },
    {
      key: "mediaCenter",
      href: "#",
      hasDropdown: true,
      component: DropdownMediaCenter,
      mobileItems: ["newsPress", "photoVideo", "events", "galleryBook"],
    },
    {
      key: "support",
      href: "#",
      hasDropdown: true,
      component: DropdownSupport,
      mobileItems: ["howToApply", "termsConditions", "faqs"],
    },
    { key: "contact", href: "#", hasDropdown: false },
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
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.key, item.hasDropdown)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  if (!item.hasDropdown) {
                    e.preventDefault();
                    handleNavigation(item.key);
                  }
                }}
                className="flex items-center gap-1 hover:text-[#52BC88] text-[#035938] transition-colors"
              >
                {t(item.key)}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === item.key ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>
              {item.hasDropdown &&
                activeMenu === item.key &&
                item.component && <item.component onClose={handleMenuClose} />}
            </div>
          ))}
        </nav>

        {/* Desktop Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Icon */}
          <button className="p-2 hover:bg-[#52BC88]/10 rounded-lg transition-colors text-[#52BC88]">
            <Search className="w-5 h-5" />
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border-2 border-[#52BC88] text-[#52BC88] rounded-lg hover:bg-[#035938] hover:text-white hover:border-[#035938] transition-all duration-200"
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
            className="px-3 py-1 border-2 border-[#52BC88] text-[#52BC88] rounded-lg hover:bg-[#035938] hover:text-white hover:border-[#035938] transition-all duration-200"
          >
            {language === "en" ? "AR" : "EN"}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-[#52BC88]/10 rounded-lg transition-colors text-[#52BC88]"
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
                    <button
                      onClick={() =>
                        setMobileActiveMenu(
                          mobileActiveMenu === item.key ? null : item.key,
                        )
                      }
                      className="w-full flex items-center justify-between py-3 text-[#52BC88] hover:text-[#035938] transition-colors"
                    >
                      <span>{t(item.key)}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          mobileActiveMenu === item.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileActiveMenu === item.key && item.mobileItems && (
                      <div className="pl-4 space-y-2 pb-2">
                        {item.mobileItems.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block py-2 text-sm text-[#52BC88]/90 hover:text-[#035938] transition-colors"
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
                    className="block py-3 text-[#52BC88] hover:text-[#035938] transition-colors"
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
            <button className="w-full flex items-center justify-center gap-2 p-3 border border-[#52BC88]/40 rounded-lg hover:bg-[#52BC88]/10 transition-colors text-[#52BC88]">
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

      {/* Desktop Overlay for mega menu */}
      {activeMenu && (
        <div
          className="fixed inset-0 bg-black/5 backdrop-blur-sm"
          style={{ top: "80px" }}
          onMouseEnter={() => setActiveMenu(null)}
        />
      )}
    </header>
  );
}
