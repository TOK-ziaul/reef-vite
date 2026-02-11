import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";

export function DropdownMediaCenter({ onClose }: { onClose?: () => void }) {
  const { t } = useLanguage();
  const { navigateTo } = useNavigation();

  const menuItems = [
    { key: "newsPress", page: "newsPress" as const },
    { key: "photoVideo", page: "photoVideo" as const },
    { key: "events", page: "events" as const },
    { key: "galleryBook", page: "galleryBook" as const },
  ];

  const handleItemClick = (page: "newsPress" | "photoVideo" | "events" | "galleryBook") => {
    navigateTo(page);
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
            onClick={() => handleItemClick(item.page)}
            className="block w-full text-left px-6 py-3 hover:bg-[#F7F9FA] hover:text-[#007C89] transition-colors"
          >
            {t(item.key)}
          </button>
        ))}
      </div>
    </div>
  );
}