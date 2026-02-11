import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";

interface DropdownContactProps {
  onClose: () => void;
}

export function DropdownContact({ onClose }: DropdownContactProps) {
  const { language } = useLanguage();
  const { navigateTo } = useNavigation();
  const isRTL = language === "ar";

  const contactItems = [
    {
      title:
        language === "ar"
          ? "خدمة الاستفسارات والتواصل"
          : "Inquiry and Communication Service",
      page: "contact" as const,
    },
  ];

  const handleClick = (page: "contact") => {
    navigateTo(page);
    onClose();
  };

  return (
    <div
      className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 min-w-[280px]"
      style={{ direction: isRTL ? "rtl" : "ltr" }}
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="py-2">
        {contactItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item.page)}
            className={`w-full block px-6 py-3 text-[#052F2A] hover:bg-[#F9F7EF] hover:text-[#035938] transition-all duration-200 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
