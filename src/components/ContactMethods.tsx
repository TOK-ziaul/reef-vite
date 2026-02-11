import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { FileText, Headphones, Globe, Users } from "lucide-react";

export function ContactMethods() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const methods = [
    {
      icon: FileText,
      color: "#52BC88",
      title:
        language === "ar"
          ? "نموذج التواصل الإلكتروني"
          : "Electronic Contact Form",
      description:
        language === "ar"
          ? "يمكن للمستفيد إرسال استفسارك عبر نموذج يحتوي على:"
          : "Beneficiaries can send their inquiries through a form containing:",
      fields:
        language === "ar"
          ? [
              "الاسم الكامل",
              "رقم الهوية",
              "رقم الجوال",
              "المنطقة",
              "موضوع الاستفسار",
              "تفاصيل الرسالة",
            ]
          : [
              "Full Name",
              "ID Number",
              "Mobile Number",
              "Region",
              "Inquiry Subject",
              "Message Details",
            ],
      footer:
        language === "ar"
          ? "يتم الرد خلال فترة قصيرة من قبل فريق متخصص."
          : "Responses are provided within a short period by a specialized team.",
    },
    {
      icon: Headphones,
      color: "#F1BC28",
      title:
        language === "ar"
          ? "مركز خدمة المستفيدين"
          : "Beneficiaries Service Center",
      description:
        language === "ar"
          ? 'يوفر برنامج "ريف السعودية" مركز دعم يتولى:'
          : "Reef Saudi Arabia program provides a support center that handles:",
      fields:
        language === "ar"
          ? [
              "الرد على الاستفسارات العامة",
              "متابعة الطلبات المتأخرة",
              "توجيه المستفيد للخطوات اللازمة",
              "المساعدة في حل المشكلات التقنية",
            ]
          : [
              "Responding to general inquiries",
              "Following up on delayed requests",
              "Guiding beneficiaries through necessary steps",
              "Assisting with technical problems",
            ],
      footer: null,
    },
    {
      icon: Globe,
      color: "#035938",
      title:
        language === "ar"
          ? "قنوات التواصل الرقمية"
          : "Digital Communication Channels",
      description:
        language === "ar"
          ? "يتيح البرنامج أيضاً التواصل عبر:"
          : "The program also enables communication through:",
      fields:
        language === "ar"
          ? [
              "البريد الإلكتروني الرسمي",
              "منصات التواصل الاجتماعي",
              "(LinkedIn / Instagram / X / Facebook)",
            ]
          : [
              "Official Email",
              "Social Media Platforms",
              "(LinkedIn / Instagram / X / Facebook)",
            ],
      footer:
        language === "ar"
          ? "يلتزم البرنامج بنشر التحديثات والتنبيهات والفرص والمبادرات والبرامج الجديدة عبر موقعه الرسمي وكافة منصاته وحساباته التواصل الاجتماعي."
          : "The program is committed to publishing updates, alerts, opportunities, initiatives and new programs through its official website and all its social media platforms and accounts.",
    },
    {
      icon: Users,
      color: "#52BC88",
      title: language === "ar" ? "الدعم الميداني" : "Field Support",
      description:
        language === "ar"
          ? "يوفر البرنامج زيارات ميدانية تقوم بها فرق متخصصة لمساندة المستفيدين على أرض الواقع، خاصة في المناطق الريفية البعيدة."
          : "The program provides field visits conducted by specialized teams to support beneficiaries on the ground, especially in remote rural areas.",
      fields: [],
      footer:
        language === "ar"
          ? "يهدف هذا النظام المتكامل إلى ضمان وجود قناة مفتوحة، دائمة، وفعالة بين البرنامج والمستفيدين، بما يعزز الشفافية والثقة ويخدم مسار التنمية المستدامة."
          : "This integrated system aims to ensure an open, permanent, and effective channel between the program and beneficiaries, enhancing transparency and trust while serving the path of sustainable development.",
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
                    <ul className={`space-y-3 mb-6 ${isRTL ? "mr-0" : "ml-0"}`}>
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
