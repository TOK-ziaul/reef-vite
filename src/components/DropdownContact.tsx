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
      className=" bg-white shadow-lg border-t border-gray-100 rounded-b-lg min-w-[280px]"
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
