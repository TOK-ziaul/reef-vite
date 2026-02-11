import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";

export function DropdownSupport({ onClose }: { onClose?: () => void }) {
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();

  const menuItems = [
    { key: "howToApply", page: "supportApplication" },
    { key: "faqs", page: "faqs" },
    { key: "termsConditions", page: "beneficiariesGuide" },
  ];

  const handleClick = (page: string) => {
    navigateTo(page as any);
    if (onClose) onClose();
  };

  return (
    <div
      className="absolute top-full left-0 bg-white shadow-lg border-t border-gray-100 rounded-b-lg z-50 min-w-[280px]"
      style={{ top: "51px" }}
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={(e) => e.stopPropagation()}
    >
      <div className="py-2">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => handleClick(item.page)}
            className="w-full text-left block px-6 py-3 hover:bg-[#F7F9FA] hover:text-[#007C89] transition-colors"
          >
            {t(item.key)}
          </button>
        ))}
      </div>
    </div>
  );
}
