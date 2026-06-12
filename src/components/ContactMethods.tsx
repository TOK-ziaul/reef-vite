import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { FileText, Headphones, Globe, Users } from "lucide-react";

export function ContactMethods() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const methods = [
    {
      icon: FileText,
      color: "#52BC88",
      title: t("contactMethod1Title"),
      description: t("contactMethod1Desc"),
      fields: [
        t("contactMethod1Field1"),
        t("contactMethod1Field2"),
        t("contactMethod1Field3"),
        t("contactMethod1Field4"),
        t("contactMethod1Field5"),
        t("contactMethod1Field6"),
      ],
      footer: t("contactMethod1Footer"),
    },
    {
      icon: Headphones,
      color: "#F1BC28",
      title: t("contactMethod2Title"),
      description: t("contactMethod2Desc"),
      fields: [
        t("contactMethod2Field1"),
        t("contactMethod2Field2"),
        t("contactMethod2Field3"),
        t("contactMethod2Field4"),
      ],
      footer: null,
    },
    {
      icon: Globe,
      color: "#035938",
      title: t("contactMethod3Title"),
      description: t("contactMethod3Desc"),
      fields: [
        t("contactMethod3Field1"),
        t("contactMethod3Field2"),
        t("contactMethod3Field3"),
      ],
      footer: t("contactMethod3Footer"),
    },
    {
      icon: Users,
      color: "#52BC88",
      title: t("contactMethod4Title"),
      description: t("contactMethod4Desc"),
      fields: [],
      footer: t("contactMethod4Footer"),
    },
  ];

  return (
    <div className="bg-[#F9F7EF] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`${isRTL ? "text-right" : "text-left"}`}>
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: method.color }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#035938] flex-1 pt-2">
                      {method.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-[#052F2A] leading-relaxed mb-6">
                    {method.description}
                  </p>
                  {/* Fields List */}
                  {method.fields.length > 0 && (
                    <ul dir={isRTL ? "rtl" : "ltr"} className={`space-y-3 mb-6 ${isRTL ? "mr-0" : "ml-0"}`}>
                      {method.fields.map((field, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5"
                            style={{ backgroundColor: method.color }}
                          />
                          <span className="text-base text-[#052F2A]">
                            {field}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Footer Text */}
                  {method.footer && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-base text-[#052F2A]/80 leading-relaxed">
                        {method.footer}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
