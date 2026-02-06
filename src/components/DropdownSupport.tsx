import { useLanguage } from "../context/LanguageContext";

export function DropdownSupport() {
  const { t } = useLanguage();

  const menuItems = [
    { key: "howToApply", href: "#" },
    { key: "termsConditions", href: "#" },
    { key: "faqs", href: "#" },
  ];

  return (
    <div
      className="absolute top-full left-0 bg-white shadow-lg border-t border-gray-100 rounded-b-lg z-50 min-w-[280px]"
      style={{ top: "51px" }}
      onMouseEnter={(e) => e.stopPropagation()}
      onMouseLeave={(e) => e.stopPropagation()}
    >
      <div className="py-2">
        {menuItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className="block px-6 py-3 hover:bg-[#F7F9FA] hover:text-[#007C89] transition-colors"
          >
            {t(item.key)}
          </a>
        ))}
      </div>
    </div>
  );
}