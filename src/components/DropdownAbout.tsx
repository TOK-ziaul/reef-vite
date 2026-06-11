import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";
import { ABOUT_DROPDOWN_ITEMS } from "../constants/aboutSections";

export function DropdownAbout({ onClose }: { onClose?: () => void }) {
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();

  const handleClick = (sectionId: string) => {
    navigateTo("about", undefined, sectionId);
    onClose?.();
  };

  return (
    <div
      className=" bg-white shadow-lg border-t border-gray-100 rounded-b-lg min-w-[280px]"
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={(e) => e.stopPropagation()}
    >
      <div className="py-2">
        {ABOUT_DROPDOWN_ITEMS.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => handleClick(item.sectionId)}
            className="block w-full text-left px-6 py-3 hover:bg-[#F7F9FA] hover:text-[#007C89] transition-colors"
          >
            {t(item.key)}
          </button>
        ))}
      </div>
    </div>
  );
}
