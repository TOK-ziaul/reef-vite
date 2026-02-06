import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";

export function DropdownAbout() {
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();

  const menuItems = [
    { key: "aboutProgram", href: "#about-program", sectionId: "about-program" },
    { key: "visionMission", href: "#vision-mission", sectionId: "vision-mission" },
    { key: "objectives", href: "#objectives", sectionId: "objectives" },
    { key: "whatWeOffer", href: "#what-we-offer", sectionId: "what-we-offer" },
    { key: "milestones", href: "#milestones", sectionId: "milestones" },
    { key: "annualReports", href: "#annual-reports", sectionId: "annual-reports" },
  ];

  const handleClick = (e: React.MouseEvent, item: typeof menuItems[0]) => {
    e.preventDefault();
    
    // Navigate to about page first
    navigateTo("about");
    
    // Then scroll to the section after a brief delay to ensure page is loaded
    setTimeout(() => {
      const section = document.getElementById(item.sectionId);
      if (section) {
        const headerOffset = 80; // Account for fixed header height
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div
      className="absolute top-[51px] left-0 bg-white shadow-lg border-t border-gray-100 rounded-b-lg z-50 min-w-[280px]"
      style={{ top: "51px" }}
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={(e) => e.stopPropagation()}
    >
      <div className="py-2">
        {menuItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            onClick={(e) => handleClick(e, item)}
            className="block px-6 py-3 hover:bg-[#F7F9FA] hover:text-[#007C89] transition-colors"
          >
            {t(item.key)}
          </a>
        ))}
      </div>
    </div>
  );
}