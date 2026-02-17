import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { MapPin, Database, Target } from "lucide-react";

export function LivestockProjects() {
  const { language } = useLanguage();

  const locations =
    language === "ar"
      ? [
          "الجبيل",
          "المدينة المنورة",
          "حفر الباطن",
          "نجران",
          "حائل",
          "القصيم",
          "عرعر",
        ]
      : [
          "Jubail",
          "Madinah",
          "Hafr Al-Batin",
          "Najran",
          "Hail",
          "Qassim",
          "Arar",
        ];

  const technicalBenefits =
    language === "ar"
      ? [
          "ترقيم أكثر من 12,269,000 رأس من الماشية المنتجة بجميع أنواعها (الأغنام – الماعز – الإبل).",
          "إطلاق منصة إلكترونية لإدارة كافة أعمال التنفيذ، تشمل إدخال البيانات، الشرائح الإلكترونية، والأتمتة الكاملة للعمليات.",
          "توفير مزارع نموذجية لتربية الماشية في مناطق مختارة مثل القصيم، حائل، حفر الباطن، الجبيل، عرعر وغيرها.",
          "دعم تحقيق الاكتفاء الذاتي وزيادة الإنتاج المحلي من اللحوم ضمن مستهدفات رؤية المملكة 2030.",
          "إدخال تقنيات حديثة في التلقيح الصناعي وتحسين السلالات.",
          "الحفاظ على المراعي الطبيعية ومجابهة الرعي الجائر وحماية الموارد البيئية.",
          "الاستخدام الأمثل للموارد الغذائية والمائية المتاحة.",
          "تحسين دخل صغار المربين والمساهمة في تحقيق الاستقرار الاجتماعي في المناطق الريفية.",
          "إنشاء نماذج متقدمة للمزارع النموذجية يُحتذى بها للمستثمرين في قطاع الثروة الحيوانية وإمكانية تكرارها.",
          "المساهمة في تحقيق الأمن الغذائي وزيادة مصادر البروتين الحيواني.",
          "تعزيز كفاءة الإنتاج الحيواني ورفع جودته.",
        ]
      : [
          "Numbering more than 12,269,000 heads of productive livestock of all types (sheep - goats - camels).",
          "Launching an electronic platform to manage all implementation work, including data entry, electronic chips, and complete automation of operations.",
          "Providing model livestock farms in selected areas such as Qassim, Hail, Hafr Al-Batin, Jubail, Arar and others.",
          "Supporting self-sufficiency and increasing local meat production within the targets of Saudi Vision 2030.",
          "Introducing modern techniques in artificial insemination and breed improvement.",
          "Preserving natural pastures, combating overgrazing and protecting environmental resources.",
          "Optimal use of available food and water resources.",
          "Improving the income of small breeders and contributing to achieving social stability in rural areas.",
          "Creating advanced model farm models to be emulated by investors in the livestock sector and the possibility of replicating them.",
          "Contributing to achieving food security and increasing sources of animal protein.",
          "Enhancing livestock production efficiency and raising its quality.",
        ];

  const goals =
    language === "ar"
      ? [
          "إنشاء مجمعات مستدامة لتربية وإنتاج الماشية وتنمية وتأهيل الحقول الريفية على أراضي الوزارة المخصصة لصغار مربي الثروة الحيوانية.",
          "تقديم خدمات بيطرية شاملة لترقيم الثروة الحيوانية، وإطلاق منصة إلكترونية بقاعدة بيانات متكاملة لمتابعة ملاك الماشية، تشمل إدخال البيانات والشرائح الإلكترونية وكافة عمليات الأتمتة.",
          "تنفيذ منظومة ترقيم وتتبع إلكتروني تعتمد على أرقام مزودة بشرائح إلكترونية لتطبيق التتبع الدقيق على النعاج والذكور المنتجة والإبل، بما يدعم نظم المعلومات وتحليل البيانات ويرفع كفاءة إدارة القطيع على مستوى المملكة.",
        ]
      : [
          "Establishing sustainable complexes for livestock breeding and production, developing and rehabilitating rural fields on ministry lands allocated to small livestock breeders.",
          "Providing comprehensive veterinary services for livestock numbering, and launching an electronic platform with an integrated database to track livestock owners, including data entry, electronic chips and all automation operations.",
          "Implementing an electronic numbering and tracking system based on numbers equipped with electronic chips for accurate tracking of productive ewes, males and camels, supporting information systems and data analysis and raising the efficiency of herd management at the Kingdom level.",
        ];

  // const cardImages = [
  //   "https://images.unsplash.com/photo-1713688160785-dface7be5706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlc3RvY2slMjBzaGVlcCUyMGZhcm18ZW58MXx8fHwxNzcwMTI0ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080", // sheep farm
  //   "https://images.unsplash.com/photo-1688677825986-4ffb926bafc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGZhcm1pbmd8ZW58MXx8fHwxNzcwMTI0ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080", // digital technology
  //   "https://images.unsplash.com/photo-1722277539160-ca24e1a11fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYWlyeSUyMGZhcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDEyNDk4Nnww&ixlib=rb-4.1.0&q=80&w=1080", // dairy farm
  //   "https://images.unsplash.com/photo-1759310347269-3b71467c38b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0لGUlMjBmYXJtJTIwcGFzdG9yYWx8ZW58MXx8fHwxNzcwMTI0ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080", // cattle farm
  //   "https://images.unsplash.com/photo-1654119938236-de0d8ed4641d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2FyZSUyMGxpdmVzdG9ja3xlbnwxfHx8fDE3NzAxMjQ4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080", // veterinary care
  //   "https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDAzMjU5OHww&ixlib=rb-4.1.0&q=80&w=1080", // sustainable agriculture
  //   "https://images.unsplash.com/photo-1763922815591-543586bd261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlc3RvY2slMjBmZWVkJTIwbnV0cml0aW9ufGVufDF8fHx8MTc3MDEyNDk4OHww&ixlib=rb-4.1.0&q=80&w=1080", // livestock feed
  //   "https://images.unsplash.com/photo-1722554086461-11923f35e648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGVlcCUyMGhlcmQlMjBwYXN0dXJlfGVufDF8fHx8MTc3MDEyNDk4N3ww&ixlib=rb-4.1.0&q=80&w=1080", // sheep herd
  //   "https://images.unsplash.com/photo-1615380098674-d28bf1a87cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lbCUyMGRlc2VydCUyMGFyYWJpYXxlbnwxfHx8fDE3NzAxMjQ5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080", // camel desert
  //   "https://images.unsplash.com/photo-1761666520223-b7f5f615ea76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2F0JTIwZmFybWluZyUyMHJ1cmFsfGVufDF8fHx8MTc3MDEyNDk4OHww&ixlib=rb-4.1.0&q=80&w=1080", // goat farming
  //   "https://images.unsplash.com/photo-1687360479287-143073b2bdcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwYW5pbWFsJTIwaGVhbHRofGVufDF8fHx8MTc3MDEyNDk4OHww&ixlib=rb-4.1.0&q=80&w=1080", // farm animal health
  // ];

  return (
    <div className="py-20 bg-[#F9F7EF] relative overflow-hidden">
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#52BC88]/10 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-[#035938] mb-6"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {language === "ar"
              ? "مشاريع قطاع الماشية"
              : "Livestock Sector Projects"}
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] mx-auto rounded-full"></div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
          <motion.div
            // className="bg-gradient-to-br from-[#035938] to-[#035938]/80 rounded-2xl p-6 relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 bg-[#52BC88]/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div
              className="relative z-10 text-center"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {/* <Building2
                className="w-10 h-10 text-[#F1BC28] mb-2 mx-auto"
                strokeWidth={2}
              /> */}
              <div className="text-5xl font-bold text-[#035938] mb-1">8</div>
              <p
                className="text-lg text-[#035938]/90"
                style={{
                  fontFamily:
                    language === "ar"
                      ? "'Loew Next Arabic', sans-serif"
                      : "inherit",
                }}
              >
                {language === "ar" ? "مشاريع" : "Projects"}
              </p>
            </div>
          </motion.div>

          <motion.div
            // className="bg-gradient-to-br from-[#52BC88] to-[#52BC88]/80 rounded-2xl p-6 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F1BC28]/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <div
              className="relative z-10 text-center"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="text-5xl font-bold text-[#035938]">125.1</span>
                <span className="text-lg text-[#035938]/90">
                  {language === "ar" ? "مليون ر.س" : "Million SAR"}
                </span>
              </div>
              <p
                className="text-lg text-[#035938]/90"
                style={{
                  fontFamily:
                    language === "ar"
                      ? "'Loew Next Arabic', sans-serif"
                      : "inherit",
                }}
              >
                {language === "ar" ? "إجمالي القيمة" : "Total Value"}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Introduction */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 border border-[#035938]/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xl md:text-2xl leading-relaxed text-[#035938] text-center"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {language === "ar"
              ? 'يعمل برنامج "ريف السعودية" في قطاع الماشية على تطوير منظومة الإنتاج الحيواني في المملكة من خلال إنشاء بنية تحتية متقدمة، وتطبيق أنظمة التتبع والترقيم، ورفع كفاءة صغار المربين، بما يسهم في تعزيز الأمن الغذائي وزيادة الإنتاج المحلي من اللحوم والألبان وتحقيق الاستدامة البيئية والاقتصادية.'
              : "The Reef Saudi program in the livestock sector works to develop the Kingdom's livestock production system through the establishment of advanced infrastructure, application of tracking and numbering systems, and raising the efficiency of small breeders, contributing to enhancing food security, increasing local meat and dairy production, and achieving environmental and economic sustainability."}
          </p>
        </motion.div>

        {/* Key Projects */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-3xl md:text-4xl font-bold text-[#035938] mb-8 text-center"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {language === "ar" ? "أبرز مشاريع القطاع" : "Key Sector Projects"}
          </h3>

          <div className="bg-gradient-to-br from-white/80 to-[#F9F7EF] backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-[#035938]/10">
            <p
              className="text-xl md:text-2xl text-[#035938] mb-8"
              style={{
                fontFamily:
                  language === "ar"
                    ? "'Loew Next Arabic', sans-serif"
                    : "inherit",
              }}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {language === "ar"
                ? "إنشاء وتجهيز مجمع المزارع النموذجية للإنتاج الحيواني في:"
                : "Establishment and equipping of model livestock production farm complexes in:"}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#035938] to-[#52BC88] rounded-2xl p-6 text-center shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <MapPin
                    className="w-10 h-10 text-white mb-3 mx-auto"
                    strokeWidth={2.5}
                  />
                  <p
                    className="text-xl font-bold text-white"
                    style={{
                      fontFamily:
                        language === "ar"
                          ? "'Loew Next Arabic', sans-serif"
                          : "inherit",
                    }}
                  >
                    {location}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-[#52BC88]/20 to-[#F1BC28]/20 rounded-2xl p-6 border border-[#52BC88]/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div
                className="flex items-center gap-4"
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                <Database
                  className="w-12 h-12 text-[#52BC88] flex-shrink-0"
                  strokeWidth={2}
                />
                <p
                  className="text-xl md:text-2xl text-[#035938]"
                  style={{
                    fontFamily:
                      language === "ar"
                        ? "'Loew Next Arabic', sans-serif"
                        : "inherit",
                  }}
                >
                  {language === "ar"
                    ? "تنفيذ مشروع ترقيم وتسجيل الثروة الحيوانية في مختلف مناطق المملكة."
                    : "Implementation of the livestock numbering and registration project in various regions of the Kingdom."}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical Benefits */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-3xl md:text-4xl font-bold text-[#035938] mb-6 text-center"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {language === "ar"
              ? "الجدوى الفنية للمشاريع"
              : "Technical Feasibility of Projects"}
          </h3>

          <p
            className="text-lg text-[#035938]/80 mb-8 text-center max-w-3xl mx-auto"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {language === "ar"
              ? "تسهم مشاريع قطاع الماشية في تحقيق مجموعة واسعة من الآثار الفنية والتنموية، من أبرزها:"
              : "Livestock sector projects contribute to achieving a wide range of technical and developmental impacts, most notably:"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {technicalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div
                  className={`relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${language === "ar" ? "pr-20" : "pl-20"}`}
                >
                  {/* Number Badge */}
                  <div
                    className={`absolute ${language === "ar" ? "right-6" : "left-6"} top-6`}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#52BC88] to-[#F1BC28] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ zIndex: -1 }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div dir={language === "ar" ? "rtl" : "ltr"}>
                    <p
                      className="text-base text-[#035938] leading-relaxed"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {benefit}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  {/* <div
                    className={`absolute ${language === "ar" ? "bottom-0 left-0" : "bottom-0 right-0"} w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity`}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center rounded-2xl"
                      style={{
                        backgroundImage: `url('${cardImages[index % cardImages.length]}')`,
                      }}
                    />
                  </div> */}

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#035938] via-[#52BC88] to-[#F1BC28] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-3xl md:text-4xl font-bold text-[#035938] mb-8 text-center"
            style={{
              fontFamily:
                language === "ar"
                  ? "'Loew Next Arabic', sans-serif"
                  : "inherit",
            }}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {language === "ar" ? "أهداف المشاريع" : "Project Goals"}
          </h3>

          <div className="bg-gradient-to-br from-white/80 to-[#F9F7EF] backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-[#035938]/10">
            <p
              className="text-xl md:text-2xl text-[#035938] mb-8"
              style={{
                fontFamily:
                  language === "ar"
                    ? "'Loew Next Arabic', sans-serif"
                    : "inherit",
              }}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {language === "ar"
                ? 'تركز مشاريع قطاع الماشية في برنامج "ريف السعودية" على:'
                : "Livestock sector projects in the Reef Saudi program focus on:"}
            </p>

            <div className="space-y-6">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r from-[#035938]/5 to-transparent rounded-2xl p-6 ${language === "ar" ? "border-r-4" : "border-l-4"} border-[#52BC88]`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: language === "ar" ? -5 : 5 }}
                >
                  <div
                    className="flex gap-4 items-start"
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#035938] to-[#52BC88] flex items-center justify-center">
                      <Target
                        className="w-6 h-6 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <p
                      className="text-lg md:text-xl text-[#035938] leading-relaxed"
                      style={{
                        fontFamily:
                          language === "ar"
                            ? "'Loew Next Arabic', sans-serif"
                            : "inherit",
                      }}
                    >
                      {goal}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
