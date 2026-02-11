import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface LanguageContextType {
  language: "en" | "ar";
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    home: "Home",
    about: "About",
    sectors: "Sectors",
    sustainability: "Sustainability",
    support: "Support",
    contact: "Contact",
    search: "Search",
    programs: "Programs",
    supportPrograms: "Support Programs",
    news: "News & Events",
    latestNews: "Latest News",
    newsArchive: "News Archive",
    language: "العربية",
    // Header dropdowns (additional)
    initiatives: "Initiatives",
    impactStats: "Impact & Statistics",
    newsPress: "News & Press",
    photoVideo: "Photo & Video Library",
    events: "Events",
    beneficiariesGuide: "Beneficiaries Guide",
    // Sectors (nav)
    flowers: "Roses & Flowers",
    aromatic: "Aromatic Plants",
    // Mega Menu - Programs
    programsOverview: "Programs Overview",
    programsIntro: "Discover our comprehensive support programs",
    financialSupport: "Financial Support",
    financialSupportDesc: "Access funding and grants for agricultural projects",
    technicalTraining: "Technical Training",
    technicalTrainingDesc: "Build skills through hands-on workshops",
    businessIncubators: "Business Incubators",
    businessIncubatorsDesc: "Get mentorship and resources for startups",
    viewAllPrograms: "View All Programs",

    // Mega Menu - Sectors
    sectorsOverview: "Sectors Overview",
    sectorsIntro: "Explore the diverse agricultural sectors we support",
    beekeepingSector: "Beekeeping",
    beekeepingDesc: "Saudi honey production excellence",
    coffeeSector: "Saudi Coffee",
    coffeeDesc: "Empowering coffee farmers across regions",
    rosesSector: "Roses & Aromatic Plants",
    sector3Desc:
      "Developing the production of roses and aromatic plants in the Kingdom's regions to increase added value and exports",
    fruitsSector: "Fruits",
    fruitsDesc: "Organic and sustainable fruit farming",
    livestockSector: "Livestock & Dairy",
    livestockDesc: "Improving breed quality and dairy production",
    rainfedSector: "Rainfed Agriculture",
    rainfedDesc: "Supporting wheat and barley production",
    fisherySector: "Fishery & Aquaculture",
    fisheryDesc: "Modern techniques for sustainable fishing",
    handicraftsSector: "Handicrafts",
    handicraftsDesc: "Reviving traditional rural crafts",
    familiesSector: "Productive Families",
    familiesDesc: "Empowering home-based micro-enterprises",
    viewAllSectors: "View All Sectors",

    // Hero Slider
    hero1Title: "Empowering Rural Communities Through Sustainable Innovation",
    hero1Desc:
      "Reef Saudi Arabia is committed to sustainable agricultural development, preserving cultural heritage, and fostering economic opportunities in rural regions",
    hero1Btn1: "Explore Our Sectors",
    hero1Btn2: "Learn About Us",

    hero2Title: "Cultivating Excellence in Saudi Coffee",
    hero2Desc:
      "Supporting coffee farmers across Jazan, Al-Baha, and Asir to enhance quality and reach global markets",
    hero2Btn1: "Discover Coffee Sector",
    hero2Btn2: "View All Sectors",

    hero3Title: "Sustainable Agriculture for Future Generations",
    hero3Desc:
      "Promoting eco-friendly farming practices that preserve our environment and ensure food security",
    hero3Btn: "Learn More",

    hero4Title: "Transforming Lives Through Rural Development",
    hero4Desc:
      "Creating opportunities, building infrastructure, and empowering communities across the Kingdom",
    hero4Btn1: "Our Impact",
    hero4Btn2: "Support Programs",

    hero5Title: "Preserving Heritage, Building Tomorrow",
    hero5Desc:
      "Honoring traditional crafts and agricultural practices while embracing modern innovation",
    hero5Btn1: "Explore Heritage",
    hero5Btn2: "View Initiatives",

    // Hero (Legacy - kept for compatibility)
    heroTitle: "Empowering Rural Communities Through Innovation",
    heroSubtitle:
      "Reef Saudi Arabia is committed to sustainable agricultural development, preserving cultural heritage, and fostering economic opportunities in rural regions",
    heroButton1: "Explore Our Sectors",
    heroButton2: "Learn About Us",

    // Key Numbers
    keyNumbersTitle: "Our Impact",
    keyNumbersSubtitle: "Making a difference across Saudi Arabia",
    keyNumbers1: "87,000+",
    keyNumbers1Label: "Beneficiaries",
    keyNumbers2: "9",
    keyNumbers2Label: "Supported Sectors",
    keyNumbers3: "12",
    keyNumbers3Label: "Regions Covered",
    keyNumbers4: "SAR 11.75B",
    keyNumbers4Label: "Total Investment",

    // Sectors Grid
    sectorsTitle: "Our Focus Sectors",
    sectorsSubtitle:
      "Reef Saudi Arabia supports 9 key sectors driving rural development and agricultural excellence",
    sector1Title: "Beekeeping",
    sector1Desc:
      "Supporting beekeepers in mountainous regions to produce premium Saudi honey with high purity and quality",
    sector1Point1: "Training & Development",
    sector1Point2: "Financial Support",
    sector1Point3: "Technical Guidance",

    sector2Title: "Saudi Coffee",
    coffeeHeroTitle:
      "Sector of Development, Production, Manufacturing, and Marketing of Saudi Coffee",
    coffeeIntroP1:
      "The coffee and coffee bean sector represents one of the strategic pillars of the 'Reef Saudi Arabia' Program, as it is considered a high-value cash crop and a key component in supporting food security and strengthening the rural economy. The program aims to establish an integrated value chain that begins with cultivation and ends with marketing, with a focus on improving the quality of Saudi coffee and enabling small farmers to enter local and global markets with confidence and sustainability.",
    coffeeIntroP2:
      "The program contributes to increasing self-sufficiency in coffee and reducing reliance on imports by supporting farmers with modern technologies and building specialized infrastructure that includes nurseries, factories, and agricultural extension service centers. In addition, it creates quality job opportunities for youth in production regions and improves the income of small producers.",

    // Coffee Sector Objectives
    coffeeObj1:
      "Introducing and promoting coffee as a cash crop within the agricultural crop structure of the Kingdom.",
    coffeeObj2:
      "Increasing the level of self-sufficiency and reducing coffee imports.",
    coffeeObj3:
      "Raising the income of small producers and improving their livelihoods.",
    coffeeObj4: "Adding economic value through processing and marketing.",
    coffeeObj5: "Creating job opportunities for youth in rural areas.",

    // Coffee Sector Key Areas of Action
    keyAreasActionTitle: "Key Areas of Action in the Coffee Sector",
    coffeeAction1: "Implementing good agricultural practices.",
    coffeeAction2: "Establishing nurseries and model farms for Saudi coffee.",
    coffeeAction3:
      "Introducing modern harvesting techniques and post-harvest technologies to reduce losses.",
    coffeeAction4: "Facilitating access to agricultural credit and financing.",
    coffeeAction5:
      "Establishing advisory service centers and scientific research facilities.",
    coffeeAction6: "Providing direct financial support to small producers.",
    coffeeAction7:
      "Forming cooperative associations and specialized marketing centers.",
    coffeeAction8:
      "Building rainwater harvesting facilities and ensuring irrigation water supply.",
    coffeeAction9:
      "Training and developing technical skills and human resources.",
    coffeeAction10:
      "Applying plant quarantine systems to protect local production.",

    // Coffee Stats Section
    coffeeStatsTitle: "Figures and Indicators",
    coffeeStatsSubtitle:
      "The figures for the period 2020–2024 indicate accelerated growth in Saudi coffee production.",
    coffeeTotalSupport: "Total Support",
    coffeeProgressLabel: "Program Completion",
    coffeeBeneficiaries: "Number of Beneficiaries",
    coffeeBeneficiariesLabel: "beneficiaries",
    coffeeMen: "Men",
    coffeeWomen: "Women",
    coffeeGeographicalDistribution:
      "Geographical Distribution of Beneficiaries",
    coffeeProductionGrowth: "Production Growth",
    coffeeProductionSubtitle: "Annual production in tons",
    coffeeTons: "tons",
    coffeeGrowth: "Growth",
    coffeeTarget: "Target",
    coffeeGrowthNote:
      "The figures reflect significant growth in Saudi coffee production, with ambitious targets for 2026.",

    // Coffee Projects Section
    coffeeProjectsTitle: "Saudi Coffee Sector Projects",
    coffeeNumberOfProjects: "Number of Projects",
    coffeeProjects: "projects",
    coffeeTotalValue: "Total Value",
    coffeeProjectsIntro:
      'The "Reef Saudi Arabia" Program is implementing a package of strategic projects in the Saudi coffee sector with the aim of developing the value chain from cultivation through processing and marketing, and enhancing the competitiveness of Saudi coffee locally and globally.',
    coffeeKeyProjects: "Key Sector Projects",

    // Feasibility
    coffeeFeasibilityTitle:
      "Technical and Economic Feasibility of the Projects",
    coffeeFeasibilityIntro:
      'The "Reef Saudi Arabia" Program in the coffee sector focuses on achieving integrated development that includes:',
    coffeeFeasibility1:
      "Training farmers in modern cultivation and harvesting techniques",
    coffeeFeasibility2:
      "Establishing demonstration fields and specialized nurseries",
    coffeeFeasibility3:
      "Harvesting rainwater to provide sustainable irrigation sources",
    coffeeFeasibility4:
      "Expanding cultivated areas and increasing productivity",
    coffeeFeasibility5:
      "Cultivating coffee on mountain terraces and removing harmful plants",
    coffeeFeasibility6:
      "Supporting environmental sustainability and strengthening the local economy",
    coffeeFeasibility7:
      "Reducing dependence on imports and enhancing competitiveness",
    coffeeFeasibility8: "Planning access to global markets",

    // Objectives
    coffeeObjectivesTitle: "Project Objectives",
    coffeeObjective1:
      "Improving the quality of Saudi coffee using the latest production and processing technologies",
    coffeeObjective2:
      "Increasing the number of seedlings and expanding agricultural areas",
    coffeeObjective3:
      "Establishing model farms and improving water resource management",
    coffeeObjective4:
      "Creating demonstration fields to rationalize water consumption",
    coffeeObjective5: "Utilizing agricultural land efficiently and sustainably",
    coffeeObjective6:
      "Developing agricultural practices compatible with climate and soil conditions",

    sector2Desc:
      "Empowering coffee farmers in Jazan, Al-Baha, and Asir to enhance quality and global reach",
    sector2Point1: "Improving Supply Chains",
    sector2Point2: "Supporting Small Farmers",
    sector2Point3: "Product Marketing",

    sector3Title: "Roses & Aromatic Plants",
    sector3Point1: "Farm Development",
    sector3Point2: "Supporting Manufacturing Operations",
    sector3Point3: "Enhancing Marketing Opportunities",

    sector4Title: "Fruits",
    sector4Desc:
      "Producing distinctive fruits using organic methods that preserve soil and crop quality and achieve higher sustainability",
    fruitsHeroTitle:
      "Sector of Fruit Development, Production, Processing, and Marketing",
    fruitsIntro1:
      "The fruit sector in the Reef Saudi Arabia Program aims to support the development, production, and marketing of fruits with comparative advantage and high value by improving production and marketing processes, enhancing value chain efficiency, and adding economic value through collection, processing, and marketing. This contributes to increasing farmers' income and creating sustainable development opportunities for rural communities amid growing local and global demand for fruit products.",
    fruitsIntro2:
      "The program focuses on building an integrated system that begins with improving agricultural practices and ends with preparing marketing outlets and supply chains, ensuring product quality, reducing losses, and enhancing competitiveness in the markets.",
    fruitsObj1:
      "Support the production and marketing of fruits with comparative advantage and high value",
    fruitsObj2:
      "Increase farmers' income through improved production and marketing",
    fruitsObj3:
      "Add high value and create job opportunities through collection, processing, and marketing",
    fruitsObj4:
      "Create development opportunities for areas with high demand for fruit products",
    fruitsObj5:
      "Stimulate rural development, increase community income, and improve their livelihoods",
    fruitsWorkAxis1:
      "Implementing good agricultural practices including modern farming operations",
    fruitsWorkAxis2:
      "Establishing productive, marketing, and processing cooperatives",
    fruitsWorkAxis3:
      "Building small dams and barriers to harvest rainwater and tanks to provide irrigation water",
    fruitsWorkAxis4:
      "Developing and disseminating the use of modern irrigation systems",
    fruitsWorkAxis5: "Establishing nurseries for subtropical fruits",
    fruitsWorkAxis6:
      "Developing fruit drying and storage systems and introducing mechanized harvesting and post-harvest technologies to reduce losses",
    fruitsWorkAxis7:
      "Establishing model farms to promote and develop fruit cultivation",
    fruitsWorkAxis8:
      "Training staff of the Ministry of Environment, Water and Agriculture in subtropical fruit sectors",
    fruitsWorkAxis9:
      "Facilitating access to financial credit through the Agricultural Development Fund",
    fruitsWorkAxis10:
      "Developing the skills and capacities of small agricultural producers",
    fruitsWorkAxis11:
      "Establishing centers to provide extension services, research, and applied studies",
    fruitsStatsTitle: "Numbers and Indicators",
    fruitsTotalSupport: "Total Support",
    fruitsSupportAmount: "+187.91 Million SAR",
    fruitsBeneficiaries: "Number of Beneficiaries",
    fruitsBeneficiariesCount: "+9,054 Beneficiaries",
    fruitsBeneficiariesDetails: "(3,826 Men - 5,228 Women)",
    fruitsGeoDistribution: "Geographic Distribution of Beneficiaries",
    fruitsSupportedProducts: "Supported Products",
    fruitsProductionEvolution: "Production Evolution (Tons / Year)",
    fruitsYear: "Year",
    fruitsProductionVolume: "Production Volume",
    fruitsProduction2020: "93.2 Tons",
    fruitsProduction2024: "365 Tons",
    fruitsGrowthRate: "(120% Growth)",
    fruitsProduction2026: "350 Tons",
    fruitsTarget: "(Target)",
    fruitsStatsNote:
      "*Figures for the period 2020 - 2024 showing accelerated growth in fruit production within supported areas.",
    fruitsProjectsTitle: "Fruit Sector Projects",
    fruitsProjectsCount: "Number of Projects",
    fruitsProjectsCountValue: "23 Projects",
    fruitsProjectsValue: "Total Estimated Value",
    fruitsProjectsValueAmount: "396.8 Million SAR",
    fruitsProjectsIntro:
      "The 'Reef Saudi Arabia' Program implements an integrated system of projects in the fruit sector, aimed at developing production, improving quality, and enhancing value chains from farm to market, contributing to raising self-sufficiency and supporting farmers' income.",
    fruitsProjectsHighlights: "Key Sector Projects",
    fruitsProject1:
      "Establishment and equipping of marketing service centers for agricultural products",
    fruitsProject2:
      "Establishment of fruit production and marketing development center",
    fruitsProject3:
      "Operation and maintenance of the research unit for agriculture with renewable water in Wadi Bin Hashbal",
    fruitsProject4:
      "Supply of agricultural equipment and materials for the research unit project in Wadi Bin Hashbal",
    fruitsProject5:
      "Installation of materials for nurseries at the Horticulture Research Center in Najran",
    fruitsProject6:
      "Laboratory equipment for the plant disease and soil control research unit in Jazan",
    fruitsProject7:
      "Installation of equipment and materials for the Central Plant Wealth Laboratory in Riyadh",
    fruitsProject8:
      "Installation of equipment for the Plant Disease and Chemical Pollutants Control Center in Riyadh",
    fruitsProject9:
      "Application of sustainable irrigation systems and modern agricultural techniques for small fruit crop farmers",
    fruitsFeasibilityTitle: "Technical and Economic Feasibility of Projects",
    fruitsFeasibilityIntro:
      "Fruit sector projects contribute to achieving a set of strategic gains, most notably:",
    fruitsFeasibility1:
      "Extending product shelf life through cooling and preservation processes before distribution",
    fruitsFeasibility2:
      "Improving cleaning and packaging processes and ensuring products comply with health standards",
    fruitsFeasibility3:
      "Supporting farmers with quality projects to increase agricultural land holdings",
    fruitsFeasibility4: "Raising the self-sufficiency rate in fruit crops",
    fruitsFeasibility5:
      "Equipping advanced cooling and storage units to enhance product quality",
    fruitsFeasibility6:
      "Developing, maintaining, and pruning trees, and protecting palm trees and fruit-bearing trees",
    fruitsFeasibility7:
      "Cleaning agricultural fields from waste and improving the production environment",
    fruitsFeasibility8:
      "Increasing awareness and building capacities through farmer training",
    fruitsFeasibility9:
      "Transferring knowledge and developing agricultural practices using modern technologies",
    fruitsFeasibility10:
      "Creating sustainable marketing solutions and providing direct sales outlets",
    fruitsFeasibility11:
      "Reducing supply chains between producer and consumer to raise marketing efficiency",
    fruitsProjectObjectivesTitle: "Project Objectives",
    fruitsProjectObjective1:
      "Establishing integrated agricultural and marketing service centers for fruits including sorting, cleaning, packaging, wrapping, and transportation",
    fruitsProjectObjective2:
      "Training farmers, specialists, and stakeholders in extension fields on modern agricultural practices",
    fruitsProjectObjective3:
      "Operating and maintaining research units and providing necessary equipment and devices",
    fruitsKeyWorks2024Title: "Key Work Accomplished in 2024",
    fruitsWork1Title: "Establishing New Nurseries",
    fruitsWork1Desc:
      "Two locations were selected to establish cooperative fruit nurseries at the Agricultural Association in Taif and the Agricultural Marketing Association in Jazan, with an estimated capacity of 15,000 seedlings per nursery. Work is underway to prepare the files and establish the two nurseries to serve farmers.",
    fruitsWork2Title: "Expansion of Old Nurseries",
    fruitsWork2Region1: "Asir Region",
    fruitsWork2Region1Value: "10,000 Seedlings",
    fruitsWork2Region2: "Al-Baha Region",
    fruitsWork2Region2Value: "10,000 Seedlings",
    fruitsWork2Total: "Total Production",
    fruitsWork2TotalValue: "20,000 Seedlings to Date",
    fruitsWork2Note: "Distributed during the second half of 2025.",
    fruitsWork3Title: "Description of Fruit Varieties",
    fruitsWork3Desc:
      "Six imported varieties of grapes, figs, apricots, and almonds were described in the extension field in Baljurashi in cooperation with the Seed and Seedling Center in Al-Baha, with the aim of determining morphological and production specifications, measuring variety compatibility with the regional climate, and propagating suitable varieties with high productivity.",
    fruitsWork4Title: "Developing Women's Agricultural Entrepreneurship",
    fruitsWork4Duration:
      "Implementation of a 3-month training program that included:",
    fruitsWork4Point1:
      "Selecting and training 15 female agricultural entrepreneurs on establishing and operating private agricultural nurseries in Baljurashi city, Al-Baha region",
    fruitsWork4Point2:
      "Participation of 12 trainees in the first course for 3 days",
    fruitsWork4Point3:
      "Participation of 15 trainees in the second course for 2 days",
    fruitsWork4Point4:
      "Continuous practical field training on establishing and operating nurseries",
    fruitsWork4Point5:
      "Developing processing and manufacturing skills, especially for pomegranate and manufacturing products:",
    fruitsWork4Product1: "Pomegranate Seed Oil",
    fruitsWork4Product2: "Soap",
    fruitsWork4Product3: "Jam",
    fruitsWork4Product4: "Pomegranate Peel Flour",
    fruitsWork5Title: "Plant Health",
    fruitsWork5Point1:
      "Conducting a survey to diagnose pests and diseases of figs, grapes, and pomegranates",
    fruitsWork5Point2:
      "Preparing integrated management programs to combat powdery mildew, fruit flies, nematodes, and pomegranate moths",
    fruitsWork5Point3:
      "Programs will be submitted and approved in cooperation with Weqaa Center to agree on implementation mechanisms and begin application.",
    fruitsCTA1: "Explore the Interactive Map of Our Rural Sectors",
    fruitsCTA2: "Explore Support Programs",
    sector4Point1: "Agricultural Guidance",
    sector4Point2: "Developing Irrigation Methods",
    sector4Point3: "Local Marketing Support",

    sector5Title: "Livestock & Dairy Products",
    sector5Desc:
      "Improving livestock farmers' efficiency and enhancing dairy production quality through targeted support and financing programs",
    livestockHeroTitle: "Enhancing the Capacities of Small Livestock Breeders",
    livestockIntro1:
      "The sector of enhancing the capacities of small livestock breeders represents one of the vital sectors in the 'Reef Saudi Arabia' Program, as an important pillar for supporting food security, improving rural household income, and promoting the sustainability of livestock production systems in desert and marginal areas. The program works to develop breeding and care systems and upgrade local breeds, with a focus on production efficiency, natural resource protection, and raising breeders' competitiveness in the market.",
    livestockIntro2:
      "The program seeks to bring about a qualitative shift in traditional livestock production systems through the introduction of modern technologies, infrastructure development, and enabling breeders to benefit from veterinary, advisory, and financing services, which contributes to raising productivity, improving the quality of livestock products, and creating sustainable economic opportunities in the rural sector.",
    livestockMainGoalsTitle: "Main Objectives of the Sector:",
    livestockGoal1:
      "Develop sheep, goats, and camels in desert areas to regulate the optimal use of natural resources in these marginal regions.",
    livestockGoal2:
      "Improve productivity and increase household income for small breeders and enhance their livelihoods.",
    livestockGoal3:
      "Develop traditional livestock production systems in a way that maintains their role in enhancing food security.",
    livestockGoal4:
      "Develop goat and camel milk production and processing as a special nutritional source for children and women in products that meet market needs.",
    livestockWorkAxesTitle: "Work Axes in the Livestock Sector:",
    livestockAxis1:
      "Establishing a genetic assets bank to develop local breeds for small livestock breeders.",
    livestockAxis2:
      "Developing applied research and genetic improvement of local and hybrid breeds to increase their production of lambs and milk.",
    livestockAxis3:
      "Providing support to establish or strengthen agricultural cooperative associations",
    livestockAxis4:
      "Adopting and disseminating modern technologies in breeding, production systems, appropriate care, balanced nutrition, and marketing their products to improve their income.",
    livestockAxis5:
      "Establishing a financing policy to develop and support small breeders to modify the breeding and production pattern in the rural sector.",
    livestockAxis6:
      "Improving veterinary guidance and developing care systems, veterinary services, and feeding for sheep, goat, and camel herds in desert areas.",
    livestockAxis7:
      "Establishing an advanced system for trading and marketing rural livestock sector products.",
    livestockAxis8:
      "Managing livestock herd grazing to expand the carrying capacity of pastures.",
    livestockAxis9:
      "Cultivating drought-resistant fodder types and varieties as livestock feed, and rehabilitating pastures by protecting fodder reserves in dry seasons.",
    livestockAxis10: "Implementing veterinary quarantine systems.",
    livestockAxis11:
      "Preparing a sector database that includes counting their numbers, recording all their data and numbering them to enable their follow-up, study and evaluation.",
    livestockObj1:
      "Increase livestock productivity and improve breed quality through modern breeding programs",
    livestockObj2:
      "Enhance the quality of dairy products and ensure compliance with health and safety standards",
    livestockObj3:
      "Provide comprehensive veterinary care and preventive health services for livestock",
    livestockObj4:
      "Develop marketing channels and create stable income opportunities for small breeders",
    livestockAction1Title: "Breed Improvement Programs",
    livestockAction1Desc:
      "Implementing selective breeding programs and introducing improved breeds to enhance productivity and disease resistance",
    livestockAction2Title: "Veterinary Care Services",
    livestockAction2Desc:
      "Providing comprehensive veterinary care including vaccinations, treatment, and regular health monitoring",
    livestockAction3Title: "Feed Quality Enhancement",
    livestockAction3Desc:
      "Developing animal feed quality and ensuring nutritional balance to maximize production",
    livestockAction4Title: "Dairy Production Support",
    livestockAction4Desc:
      "Supporting dairy farmers with modern equipment, training, and quality control systems",
    livestockAction5Title: "Marketing and Distribution",
    livestockAction5Desc:
      "Creating marketing channels and connecting breeders with local and regional markets",
    livestockAction6Title: "Training and Capacity Building",
    livestockAction6Desc:
      "Providing technical training on modern livestock management practices and business skills",
    livestockProject1Title: "Small Livestock Breeder Support Program",
    livestockProject1Desc:
      "Comprehensive support program providing financing, training, and technical assistance to small-scale livestock breeders",
    livestockProject2Title: "Dairy Quality Improvement Initiative",
    livestockProject2Desc:
      "Initiative focused on enhancing dairy production quality through modern equipment and quality control systems",
    livestockProject3Title: "Veterinary Mobile Clinics",
    livestockProject3Desc:
      "Mobile veterinary services reaching remote rural areas to provide healthcare for livestock",
    livestockProject4Title: "Feed Production Centers",
    livestockProject4Desc:
      "Establishing local feed production centers to ensure quality nutrition at affordable prices",
    livestockFigure1: "12,500",
    livestockFigure1Label: "Beneficiary Breeders",
    livestockFigure2: "85,000",
    livestockFigure2Label: "Head of Livestock",
    livestockFigure3: "45%",
    livestockFigure3Label: "Productivity Increase",
    livestockFigure4: "SAR 280M",
    livestockFigure4Label: "Total Investment",
    sector5Point1: "Breed Improvement",
    sector5Point2: "Veterinary Care",
    sector5Point3: "Production Line Support",

    sector6Title: "Rainfed Agriculture",
    sector6Desc:
      "Supporting rainfed crop cultivation like wheat and barley in mountainous regions to enhance local food security",
    sector6Point1: "Natural Irrigation Systems Support",
    sector6Point2: "Farmer Training",
    sector6Point3: "Local Grain Marketing",

    sector7Title: "Fishery & Aquaculture",
    sector7Desc:
      "Innovating modern techniques for fish farming and improving marine production quality through training and financing programs",
    sector7Point1: "Supporting Aquaculture Projects",
    sector7Point2: "Port Development",
    sector7Point3: "Marine Product Marketing",

    sector8Title: "Handicrafts & Rural Industries",
    sector8Desc:
      "Empowering rural families and artisans to develop heritage-style local products that diversify income sources",
    sector8Point1: "Artisan Training",
    sector8Point2: "E-Commerce Support",
    sector8Point3: "Enhancing Community Participation",

    sector9Title: "Productive Families",
    sector9Desc:
      "Supporting productive families to establish small home-based projects that provide sustainable income and promote economic independence",
    sector9Point1: "Financial & Technical Support",
    sector9Point2: "Product Marketing",
    sector9Point3: "Business Development Training",

    exploreSector: "Explore Sector",

    // Widgets
    widget1Title: "Rural Support Programs",
    widget1Desc:
      "Learn about support programs dedicated to small farmers and productive families, and apply online with ease",
    widget1Btn1: "Browse Support Programs",
    widget1Btn2: "Go to Application Platform",

    widget2Title: "From the Countryside... Stories to Be Told",
    widget2Desc:
      "A visual window and a geographic, social, and cultural showcase of rural components in various regions of the Kingdom",
    widget2Btn1: "Watch Photo Stories",
    widget2Btn2: "Explore Full Gallery",

    widget3Title: "Thriving Sectors... From North to South",
    widget3Desc:
      "Explore supported agricultural sectors in different regions of the Kingdom, and learn about active rural projects and initiatives near you",
    widget3Btn: "Explore Interactive Map",
    widget3Hover: "Hover to see details",

    // News
    newsTitle: "Latest News",
    newsDesc:
      'Follow the latest news, initiatives, and events from the "Reef Saudi Arabia" program',
    viewAll: "View All",
    readMore: "Read More",

    news1Title:
      '"Reef Saudi Arabia" participates as a silver sponsor in the Saudi Agricultural Exhibition 2025',
    news1Date: "October 20, 2025",
    news1Excerpt:
      'The Sustainable Agricultural Rural Development Program "Reef Saudi Arabia" participates as a silver sponsor in the Saudi Agricultural Exhibition 2025 at the Riyadh International Convention and Exhibition Center, with the participation of 438 entities from 35 countries. "Reef" showcases its programs and initiatives that enhance national food security and develop agricultural rural communities in various regions of the Kingdom.',

    news2Title:
      '"Reef Saudi Arabia" launches the "Sustainable Reef" initiative to enhance rural sustainability',
    news2Date: "September 15, 2025",
    news2Excerpt:
      'The Sustainable Agricultural Rural Development Program "Reef Saudi Arabia" launched the "Sustainable Reef" initiative to highlight the impact of its programs in supporting rural families and promoting agricultural and economic sustainability. This comes within the Kingdom\'s efforts to empower farmers and raise the quality of life, after the program reached more than 87,000 beneficiaries throughout the Kingdom.',

    news3Title:
      '"Reef Saudi Arabia" launches "Reef" accelerator for rural entrepreneurship',
    news3Date: "May 04, 2025",
    news3Excerpt:
      'The "Reef Saudi Arabia" program launched the "Reef" accelerator for entrepreneurship to enhance the culture of innovation in rural development and tourism. The accelerator targets empowering more than 50 entrepreneurs to gain field experience from major companies, and support the entrepreneurial transformation in the agricultural sector to achieve Vision 2030 targets.',

    // About
    aboutProgram: "About the Program",
    visionMission: "Vision & Mission",
    objectives: "Strategic Objectives",
    whatWeOffer: "What We Offer",
    milestones: "Milestones",
    annualReports: "Annual Reports",
    learnMore: "Learn More",
    aboutReefSaudi: "About Reef Saudi",
    aboutDescription:
      "Reef Saudi is a national initiative dedicated to empowering rural communities through sustainable agricultural practices, preserving cultural heritage, and creating economic opportunities across the Kingdom of Saudi Arabia.",
    vision: "Vision",
    visionText:
      "To be the leading force in rural development and sustainable agriculture in Saudi Arabia.",
    mission: "Mission",
    missionText:
      "Empowering rural communities through innovative programs, sustainable practices, and economic growth.",
    goals: "Goals",
    goalsText:
      "Create lasting impact through education, infrastructure, and community support programs.",

    // About Page Content
    aboutPageTitle: "About Reef Saudi Arabia",
    aboutPageSubtitle: "Sustainable Agricultural Rural Development Program",
    aboutOpeningText:
      'The Sustainable Agricultural Rural Development Program "Reef Saudi Arabia" is a strategic initiative launched to develop and empower rural communities in the Kingdom, support and empower small farmers and productive families. The program aims to achieve economic growth and improve the quality of life for rural families, through a set of initiatives and programs based on sustainability, ensuring sustainable agricultural and economic growth until 2030.',

    // About Intro Paragraphs
    aboutIntroPara1:
      'The Sustainable Agricultural Rural Development Program "Reef Saudi Arabia" is one of the most important pioneering development initiatives launched by the Government of the Kingdom of Saudi Arabia to promote sustainable agricultural rural development and achieve the goals of the Kingdom\'s Vision 2030.',
    aboutIntroPara2:
      "The program works to empower small farmers and productive rural families and improve their production capabilities through direct financial support, training programs, and technical guidance, in addition to initiatives aimed at developing agricultural infrastructure across various regions of the Kingdom.",
    aboutIntroPara3:
      "It also supports emerging agricultural sectors that contribute to achieving food security and diversifying the national economy.",

    // About Establishment Section
    aboutEstablishmentTitle: 'Establishment of the "Reef Saudi Arabia" Program',
    aboutEstablishmentPara1:
      "The Custodian of the Two Holy Mosques, King Salman bin Abdulaziz Al Saud (may God protect him), launched the program on 3 Jumada al-Awwal 1440 AH, corresponding to January 9, 2019. The program is organizationally housed within the Ministry of Environment, Water and Agriculture.",
    aboutEstablishmentPara2:
      "The program aims to achieve balanced economic and social development between different sections of society through optimal and sustainable use of renewable natural resources, agriculture, and water.",
    aboutEstablishmentPara3:
      "The Royal Government allocated SAR 8.75 billion for the first phase of the program, which continues until 2025, in addition to SAR 3 billion from the Agricultural Development Fund.",

    // About Establishment Stats
    establishmentStat1: "Launched January 9, 2019",
    establishmentStat2: "Covers All Regions of Saudi Arabia",
    establishmentStat3: "Supporting Thousands of Farmers",
    establishmentStat4: "Award-Winning Development Program",
    establishmentStat5: "Continuous Innovation",
    establishmentStat6: "Global Best Practices",
    establishmentImageCaption:
      "Empowering rural communities across the Kingdom",

    // Vision 2030 Section
    vision2030SectionTitle: "Reef Saudi Arabia & Vision 2030",
    vision2030Point1Title: "Economic Diversification",
    vision2030Point1Text:
      "Contributing to diversifying the national economy by developing agricultural sectors and supporting rural entrepreneurship.",
    vision2030Point2Title: "Food Security",
    vision2030Point2Text:
      "Strengthening the Kingdom's food security through sustainable agricultural practices and increased local production.",
    vision2030Point3Title: "Rural Development",
    vision2030Point3Text:
      "Improving quality of life in rural areas through infrastructure, services, and economic opportunities.",
    vision2030Point4Title: "Job Creation",
    vision2030Point4Text:
      "Creating sustainable employment opportunities for Saudi citizens in agricultural and related sectors.",
    vision2030Point5Title: "Innovation & Technology",
    vision2030Point5Text:
      "Adopting modern agricultural technologies and innovative farming methods to enhance productivity.",
    vision2030Point6Title: "Environmental Sustainability",
    vision2030Point6Text:
      "Promoting sustainable farming practices that preserve natural resources and protect the environment.",
    vision2030Point7Title: "Cultural Preservation",
    vision2030Point7Text:
      "Maintaining traditional agricultural heritage while modernizing production methods and techniques.",
    vision2030Point8Title: "Global Competitiveness",
    vision2030Point8Text:
      "Positioning Saudi agricultural products competitively in regional and international markets.",
    vision2030CTA1: "Explore Strategic Objectives",
    vision2030CTA2: "Discover Our Sectors",

    // Vision & Mission Section
    visionMissionVisionTitle: "Our Vision",
    visionMissionVisionText:
      "To be the leading force in sustainable agricultural rural development in the Kingdom of Saudi Arabia by 2030, creating thriving rural communities with enhanced living standards and economic prosperity.",
    visionMissionMissionTitle: "Our Mission",
    visionMissionMissionText:
      "Empowering small farmers and productive families through integrated support programs, modern agricultural technologies, and sustainable practices that ensure food security and economic growth.",

    // Strategic Objectives
    strategicObj1Title: "Economic Empowerment",
    strategicObj1Text:
      "Supporting small farmers and rural families to establish sustainable income sources through targeted financial assistance, training, and market access.",
    strategicObj2Title: "Agricultural Productivity",
    strategicObj2Text:
      "Enhancing agricultural output and efficiency through modern farming techniques, technology adoption, and infrastructure development.",
    strategicObj3Title: "Technical Development",
    strategicObj3Text:
      "Building technical capacity through comprehensive training programs, workshops, and knowledge transfer initiatives across all agricultural sectors.",
    strategicObj4Title: "Innovation & Technology",
    strategicObj4Text:
      "Integrating cutting-edge agricultural technologies and digital solutions to improve production quality and operational efficiency.",
    strategicObj5Title: "Environmental Sustainability",
    strategicObj5Text:
      "Promoting sustainable farming practices that preserve natural resources, protect biodiversity, and ensure long-term environmental health.",
    strategicObj6Title: "Market Access & Export",
    strategicObj6Text:
      "Facilitating market access for local products and enhancing export capabilities to reach regional and international markets.",
    strategicObj7Title: "Food Security",
    strategicObj7Text:
      "Contributing to the Kingdom's food security by increasing local production of strategic crops and reducing import dependency.",
    strategicObj8Title: "Quality of Life",
    strategicObj8Text:
      "Improving living standards in rural communities through infrastructure development, essential services, and economic opportunities.",

    // Organizational Structure
    orgStructureTitle: "Organizational Structure",
    orgStructureParagraph1:
      "The Reef Saudi Arabia Program operates under the Ministry of Environment, Water, and Agriculture with a clear organizational structure designed to ensure effective implementation and accountability. The structure includes strategic oversight committees, operational management teams, and specialized technical units working in coordination to achieve program objectives.",
    orgStructureParagraph2:
      "This organizational framework enables efficient decision-making, resource allocation, and program delivery across all regions of the Kingdom. It facilitates collaboration between different government entities, development partners, and stakeholders to maximize program impact and ensure sustainable rural development.",
    orgNodeOperationalEfficiency: "Operational Efficiency",
    orgNodeClearResponsibilities: "Clear Responsibilities",
    orgNodeRoleIntegration: "Role Integration",
    orgNodeStrategicAchievement: "Strategic Achievement",
    orgNodeQualityEnhancement: "Quality Enhancement",
    orgNodeGovernanceStandards: "Governance Standards",

    // Partners Section
    partnersTitle: "Our Strategic Partners",
    partnersIntro:
      "Reef Saudi Arabia works in close partnership with government entities, development organizations, research institutions, and private sector companies to deliver comprehensive support and achieve sustainable rural development across the Kingdom.",
    partnersGovernmentTitle: "Government Partners",
    partnersGov1: "Ministry of Environment, Water & Agriculture",
    partnersGov2: "Ministry of Human Resources & Social Development",
    partnersGov3: "Ministry of Economy & Planning",
    partnersGov4: "Ministry of Tourism",
    partnersGov5: "Ministry of Education",
    partnersGov6: "Monshaat (Small & Medium Enterprises Authority)",
    partnersDevelopmentTitle: "Development Partners",
    partnersDev1: "Agricultural Development Fund",
    partnersDev2: "Saudi Development Bank",
    partnersDev3: "Agricultural Development Fund (Circle)",
    partnersDev4: "Reef Foundation",
    partnersDev5: "Saudi Green Initiative",
    partnersResearchTitle: "Research & Academic Partners",
    partnersResearch1: "King Saud University - Agricultural Research Center",
    partnersResearch2: "King Abdulaziz City for Science & Technology",
    partnersResearch3: "National Center for Agricultural Technology",
    partnersPrivateTitle: "Private Sector Partners",
    partnersPrivate1:
      "Saudi Agricultural & Livestock Investment Company (SALIC)",
    partnersPrivate2: "National Agricultural Development Company (NADEC)",
    partnersPrivate3: "Almarai Company",
    partnersPrivate4:
      "Saudi Company for Agricultural Investment & Animal Production",
    partnersPrivate5: "Jazan Development Company",
    partnersPrivate6: "Tabuk Agricultural Development Company",
    partnersPrivate7: "Saudi Investment Bank - Agricultural Financing",
    partnersPrivate8: "Agricultural Equipment & Technology Suppliers Network",
    partnersCTA: "Become a Partner",
    partnersCTA1: "Become a Partner",
    partnersCTA2: "View All Partners",

    // Achievements Section
    achievementsFiguresTitle: "Our Achievements in Numbers",
    achievementsFiguresSubtitle:
      "Figures That Reflect a Thriving Rural Reality",
    achievementsTotalBeneficiaries:
      "Total Number of Beneficiaries Since Program Launch in 2020",
    achievementsMaleBeneficiaries: "Number of Male Beneficiaries",
    achievementsFemaleBeneficiaries: "Number of Female Beneficiaries",
    achievementsFamilies: "Number of Supported Rural Economic Households",
    achievementsFinancialSupport:
      "Total Amount of Financial Support Since Program Launch",
    achievementsTrainingCourses: "Training Courses Provided Under the Program",
    achievementsTrainingBeneficiaries:
      "Number of Beneficiaries from Training Courses",
    achievementsProjects: "Number of Projects Under Construction",
    achievementsProjectsValue: "Value of Program Projects",
    achievementsFreelanceCerts:
      "Number of Freelance Work Certificates Issued Through Reef Saudi Arabia",
    achievementsRuralProducts:
      "Number of Products (Comparative Advantage Products) Supported by Reef Saudi Arabia Program",
    achievementsIndicatorsTitle: "Economic Impact Indicators",
    achievementsUnemploymentRate: "Unemployment Rate Reduction",
    achievementsJobOpportunities: "Job Opportunities Created",
    achievementsPopulationStability: "Population Stability Increase",
    achievementsSeedlings: "Seedlings Distributed",
    achievementsAverageIncome: "Average Monthly Income (SAR)",
    achievementsHighlightsTitle: "Key Achievements Highlights",
    achievementsHighlight1:
      "Empowered over 87,000 beneficiaries across all regions of Saudi Arabia with comprehensive agricultural and rural development support programs",
    achievementsHighlight2:
      "Conducted 129 specialized training courses covering modern agricultural techniques, business management, and sustainable farming practices",
    achievementsHighlight3:
      "Established 64 rural product brands connecting local producers to national and international markets with quality certifications",
    achievementsHighlight4:
      "Implemented innovative smart farming technologies across 105+ projects, integrating IoT sensors, precision agriculture, and data analytics",
    achievementsHighlight5:
      "Supported women entrepreneurs through specialized programs in honey production, handicrafts, and agricultural value-added products",
    achievementsHighlight6:
      "Achieved significant environmental impact through sustainable farming initiatives and distribution of over 15.5 million seedlings",
    achievementsHighlight7:
      "Organized national agricultural forums and exhibitions attracting thousands of participants and showcasing rural development success stories",
    achievementsAwardsTitle: "International Recognition & Awards",
    achievementsAward1Title: "United Nations Public Service Award",
    achievementsAward1Desc:
      "Recognized for excellence in public service delivery and innovative rural development programs",
    achievementsAward2Title: "Princess Royal Training Award",
    achievementsAward2Desc:
      "Honored for outstanding achievements in training and human capital development",
    achievementsAward3Title: "Arab Innovation Award",
    achievementsAward3Desc:
      "Awarded for implementing cutting-edge agricultural technologies and smart farming solutions",
    achievementsAward4Title: "Digital Transformation Excellence",
    achievementsAward4Desc:
      "Recognized for pioneering digital solutions in agricultural development and beneficiary services",
    achievementsAward5Title: "Hail Regional Development Award",
    achievementsAward5Desc:
      "Celebrated for transformative impact on rural communities in the Hail region",
    achievementsCertificationsTitle: "Quality Certifications & Standards",
    achievementsISOTitle: "ISO 9001:2015 Certified",
    achievementsISODesc:
      "Our program operations are certified to international quality management standards, ensuring excellence in service delivery, continuous improvement, and stakeholder satisfaction across all our initiatives.",
    achievementsGuinnessTitle: "Guinness World Record",
    achievementsGuinnessDesc:
      "Achieved a Guinness World Record for the largest seedling distribution campaign, planting over 15.5 million trees in rural areas within a single initiative year.",
    achievementsGuinness1:
      "Achieved a Guinness World Record for the largest seedling distribution campaign, planting over 15.5 million trees in rural areas within a single initiative year.",
    achievementsISO1Title: "ISO 9001:2015 Quality Management",
    achievementsISO1Desc:
      "Certified for excellence in quality management systems, ensuring consistent service delivery and continuous improvement.",
    achievementsISO2Title: "ISO 22301 Business Continuity",
    achievementsISO2Desc:
      "Certified for business continuity management, ensuring resilience and sustainable operations during disruptions.",
    achievementsISO3Title: "ISO 56002 Innovation Management",
    achievementsISO3Desc:
      "Certified for innovation management systems, fostering creativity and driving continuous innovation in agricultural development.",
    achievementsISOSubtitle:
      "Committed to international standards of excellence and quality",
    achievementsAwardsSubtitle:
      "Recognized globally for excellence in sustainable rural development",
    achievementsIndicatorsSubtitle:
      "Measuring the positive economic transformation in rural communities",
    achievementsAward6Title: "Hail Regional Development Award",
    achievementsAward6Desc:
      "Celebrated for transformative impact on rural communities in the Hail region",
    achievementsCTA1: "View Full Report",
    achievementsCTA2: "Download Statistics",

    // Beekeeping Sector
    honeySector: "Honey Sector",
    honeyEcosystem: "Ecosystem",
    beekeepingDevelopmentHoneyProduction:
      "Beekeeping Development & Honey Production",
    beekeepingIntro1:
      "The Beekeeping Development and Honey Production Initiative represents one of the most vital pillars of the Reef Saudi Arabia Program, aiming to develop and strengthen the beekeeping sector in the Kingdom through comprehensive and innovative support programs.",
    beekeepingIntro2:
      "This initiative focuses on enhancing honey production quality, supporting local beekeepers, and developing apiculture practices using modern scientific methods that align with international standards while preserving traditional Saudi beekeeping heritage.",
    beekeepingIntro3:
      "Through strategic partnerships and integrated support programs, we work to transform beekeeping from traditional individual practices into a sustainable economic sector that contributes to food security and rural economic development.",
    honeyWork1:
      "Supporting beekeepers with modern hives and sustainable beekeeping equipment",
    honeyWork2:
      "Developing beekeeping techniques through training and technical support programs",
    honeyWork3:
      "Promoting innovation in honey production and bee product development",
    honeyWork4:
      "Establishing logistics systems for collecting and distributing honey products",
    honeyWork5:
      "Building partnerships with research centers and academic institutions",
    honeyWork6:
      "Providing financial support and soft loans for beekeeping projects",
    honeyWork7: "Creating cooperative societies for beekeepers and producers",
    honeyWork8:
      "Planting bee-friendly flora and establishing natural bee pastures",
    honeyWork9: "Preserving local bee breeds and biodiversity conservation",
    honeyWork10:
      "Organizing training courses in modern apiculture and honey quality standards",
    keyWorkAreasHoneySector: "Key Work Areas in the Honey Sector",
    honeyTotalSupportLabel: "Total Support",
    honeyTotalSupportValue: "+197.53 Million SAR",
    honeyBeneficiariesLabel: "Total Beneficiaries",
    honeyBeneficiariesValue: "+14,899",
    honeyBeneficiariesDetails: "(6,428 men, 8,471 women)",
    honeyGeoDistributionLabel: "Geographical Distribution of Beneficiaries",
    honeyProductionLabel: "Annual Honey Production (tons/year)",
    honeyProjectsSectionTitle:
      "Beekeeping Development and Honey Production Sector Projects",
    honeyProjectsCount: "Number of Projects: 13",
    honeyProjectsCountNumber: "13",
    honeyProjectsLabel: "Projects",
    honeyProjectsValue: "Total Estimated Value: 98 Million SAR",
    honeyProjectsValueNumber: "98M",
    honeyProjectsValueLabel: "SAR Total Value",
    honeyProjectsIntro:
      'The "Reef Saudi" Program implements a set of quality projects in the beekeeping and honey production sector to protect the local strain, raise production efficiency, and support the sustainability of this vital sector across the Kingdom.',
    honeyKeyProjectsTitle: "Key Sector Projects",
    honeyFeasibilityTitle: "Technical and Economic Feasibility of the Projects",
    honeyFeasibilityIntro:
      "These projects aim to create a sustainable impact on the beekeeping and honey production sector through:",
    honeyFeasibility1Title: "Protecting National Bee Wealth",
    honeyFeasibility1Desc:
      "Comprehensive protection from diseases and pests to ensure sustainable populations",
    honeyFeasibility1:
      "Protecting the Kingdom's bee wealth from diseases and pests",
    honeyFeasibility2: "Increasing employment opportunities in beekeeping",
    honeyFeasibility3:
      "Increasing adapted colonies and developing their genetic traits",
    honeyFeasibility4Title: "Local Bee Products Year-Round",
    honeyFeasibility4:
      "Providing local bee products year-round without reliance on imports",
    honeyFeasibility5:
      "Preparing and providing an awareness guide for beekeepers",
    honeyFeasibility6: "Reducing risks of genetic mixing of the local strain",
    honeyFeasibility7:
      "Building an integrated database for diseases and pests and sharing it with relevant authorities periodically",
    honeyFeasibility8Title: "Stimulating Local Industry",
    honeyFeasibility8:
      "Revitalizing local industry to meet beekeeping project needs",
    honeyFeasibility9Title: "Modern Technologies",
    honeyFeasibility9:
      "Disseminating and applying modern beekeeping technologies based on advanced methods",
    honeyProjectObjectivesTitle: "Project Objectives",
    honeyProjectObjectivesIntro:
      'Projects in the beekeeping sector under the "Reef Saudi" Program focus on achieving the following strategic goals:',
    honeyProjectObj1Title: "Increasing Local Bee Colonies",
    honeyProjectObj1:
      "Increasing local colonies to achieve self-sufficiency and supporting the Ministry's efforts to protect protected areas from imported strains",
    honeyProjectObj2Title: "Testing & Diagnosis Services",
    honeyProjectObj2:
      "Providing testing, diagnosis, and treatment services for bee diseases and pests, alongside extension services for beekeepers",
    honeyProjectObj3Title: "Mobile Clinic Vehicles",
    honeyProjectObj3:
      "Supplying and operating mobile clinic vehicles with specialized laboratories for diagnosing bee diseases and pests, fully equipped",
    honeyProjectObj4Title: "Field Inspection & Treatment",
    honeyProjectObj4:
      "Conducting field inspection and diagnosis and providing rapid treatment services to beekeepers at their locations across the Kingdom",
    honeyKeyWorksTitle: "Major Implemented Activities",
    honeyParticipationTitle: "Participation in Agricultural Forums",
    honeyParticipationIntro:
      'The "Reef Saudi" Program reflects its active presence locally and internationally to promote sustainability and food security through:',
    honeyParticipation1: "Participation in the Saudi Agricultural Exhibition",
    honeyParticipation2: "Contributing to national food security initiatives",
    honeyParticipation3:
      "Cooperation with the private sector and strategic partners",
    honeyParticipation4: "Participation in the FAO World Food Exhibition",
    figuresAndIndicators: "Figures and Indicators",
    annualHoneyProduction: "Annual Honey Production",
    tonsPerYear: "Tons per Year",
    tons: "tons",
    baseline: "Baseline",
    currentYear: "Current year",
    projectedGrowth: "Projected growth",
    tonsGrowth2020to2024: "Tons growth 2020–2024",
    totalProjectedGrowth: "Total projected growth",
    overallGrowthRate: "Overall growth rate",
    sixYearPeriod: "6-Year Period",
    growth104Label: "104.8% Growth",

    // Key Sector Projects (Beekeeping) - project titles & descriptions
    honeyKeyProject1Title:
      "Beekeeping Program in the Kingdom of Saudi Arabia (Phase II)",
    honeyKeyProject1Desc: "Protection of the local honey bee strain.",
    honeyKeyProject2Title:
      "Rehabilitation of the Beekeeping Station in Baljurashi",
    honeyKeyProject3Title:
      "Establishment of Queen Bee Breeding and Package Production Stations",
    honeyKeyProjectLocationAsirNamas: "Asir – Al-Namas",
    honeyKeyProjectLocationTaif: "Taif",
    honeyKeyProject4Title: "Supply of Modern Beekeeping Equipment",
    honeyKeyProject4Desc: "To promote advanced technologies among beekeepers.",
    honeyKeyProject5Title: "Supply of Mobile Laboratories",
    honeyKeyProject5Desc:
      "For testing and diagnosing bee diseases and pests in apiaries.",
    honeyKeyProject6Title: "Supply of Fully Equipped Mobile Clinics",
    honeyKeyProject6Desc: "For diagnosing bee diseases and pests.",

    // Key Implemented Activities (Beekeeping) - Studies & Statistics
    honeyKeyWorksStudiesTitle: "Studies and Statistics",
    honeyKeyWorksSurveyIntroBefore: "A survey study covering more than ",
    honeyKeyWorksSurveyIntroBold: "450 beekeepers",
    honeyKeyWorksSurveyIntroAfter:
      " was completed, producing key results including:",
    honeyKeyWorksRegisteredLabel: "Registered Beekeepers",
    honeyKeyWorksRegisteredCount: "15,000",
    honeyKeyWorksRegisteredDetail: "Including about 4,000 women beekeepers",
    honeyKeyWorksHivesLabel: "Bee Hives",
    honeyKeyWorksHivesCount: "1.8M",
    honeyKeyWorksHivesDetail: "Total number of hives in the Kingdom",
    honeyKeyWorksIncomeLabel: "Agricultural Income",
    honeyKeyWorksIncomeDetail: "Honey production contribution",
    honeyKeyWorksJobsLabel: "Jobs Provided",
    honeyKeyWorksJobsCount: "17,000",
    honeyKeyWorksJobsDetail: "Employment opportunities in the sector",
    honeyKeyWorksNationalDbTitle: "National Database for Beekeeping Sector",
    honeyKeyWorksNationalDbIntro:
      "These studies supported the creation of a national database for the beekeeping sector, collecting comprehensive data from:",
    honeyKeyWorksApiariesCount: "80",
    honeyKeyWorksApiariesLabel: "Apiaries Covered",
    honeyKeyWorksColoniesCount: "800",
    honeyKeyWorksColoniesLabel: "Colonies Recorded",
    honeyKeyWorksAvgProductionTitle: "Average Honey Production Per Hive",
    honeyKeyWorksAvgProductionSub:
      "Comparing traditional vs modern hive efficiency",
    honeyKeyWorksTraditionalHive: "Traditional Hive",
    honeyKeyWorksModernHive: "Modern Hive",
    honeyKeyWorksPerSeason: "Per season production",
    honeyKeyWorksTraditionalKg: "6.0",
    honeyKeyWorksModernKg: "8.1",
    honeyKeyWorksKeyFinding: "Key Finding",
    honeyKeyWorksKeyFindingText:
      "Modern hives produce nearly 3 times more than traditional ones",
    honeyKeyWorksProductivityTitle: "Productivity",
    honeyKeyWorksProductivityIntro:
      "Beekeeping sector productivity has developed notably as a result of introducing **modern** **technologies**, with:",
    honeyKeyWorksTraditionalAvg: "Traditional hive average: 2.2 kg",
    honeyKeyWorksModernAvg: "Modern hive average: 4.75 kg",
    honeyKeyWorksTotalAnnual: "Total annual honey production: 4,600 tons",
    honeyKeyWorksModelAreasTitle: "Model Production Areas",
    honeyKeyWorksModelAreasIntro:
      "Model production areas for the beekeeping sector have been identified and developed in a number of regions of the Kingdom, including:",
    honeyKeyWorksTrainingTitle: "Training and Capacity Building",
    honeyKeyWorksTrainingIntro:
      "The program worked to enhance beekeepers' efficiency and build their capacities through:",
    honeyKeyWorksModelRegion: "Model Region",
    honeyKeyWorksSupportedApiaries: "Supported Apiaries",
    honeyKeyWorksSupportedApiariesDesc:
      "Applying modern beekeeping technologies",
    honeyKeyWorksModelBreeders: "Model Breeders",
    honeyKeyWorksModelBreedersDesc: "Producing 1,000+ queens and packages",
    honeyKeyWorksTrainingSessions: "Training Sessions",
    honeyKeyWorksTrainingSessionsDesc: "Specialized workshops implemented",
    honeyKeyWorksTrainedBeekeepers: "Trained Beekeepers",
    honeyKeyWorksTrainedBeekeepersDesc:
      "Improved practices and organic methods",
    honeyKeyWorksTotalAnnualLabel: "Total Annual Honey Production",
    honeyKeyWorksImprovementReflects:
      "This improvement reflects the impact of **modern practices** and **technical supervision** in increasing efficiency and product quality.",
    honeyKeyWorksAverageProduction: "Average production",
    honeyKeyWorksIncrease116: "Increase 116%+",
    honeyInternationalPartnershipsTitle: "International Partnerships",
    honeyInternationalPartnershipsIntro:
      "Building strategic partnerships to advance the beekeeping sector:",
    honeyKeyWorksExploreMap: "Explore the interactive map of our rural sectors",
    honeyKeyWorksExploreSupport: "Explore support programs",

    // About Intro Features
    aboutIntroFeature1Title: "Vision 2030 Alignment",
    aboutIntroFeature1Text:
      "Aligned with Saudi Arabia's Vision 2030 to diversify the economy and empower rural communities",
    aboutIntroFeature2Title: "Comprehensive Support",
    aboutIntroFeature2Text:
      "Providing financial, technical, and training support to small farmers and productive families",
    aboutIntroFeature3Title: "Sustainable Development",
    aboutIntroFeature3Text:
      "Promoting sustainable agricultural practices and environmental conservation",

    // Vision Section (About Page)
    visionSectionTitle: "Vision, Mission & Goals",
    visionTitle2: "Our Vision",
    visionDescription:
      "To be the leading force in sustainable agricultural rural development in the Kingdom of Saudi Arabia by 2030, creating thriving rural communities with enhanced living standards and economic prosperity.",
    missionTitle2: "Our Mission",
    missionDescription:
      "Empowering small farmers and productive families through integrated support programs, modern agricultural technologies, and sustainable practices that ensure food security and economic growth.",
    goalsTitle2: "Our Strategic Goals",
    goal1: "Increase agricultural productivity and food security",
    goal2: "Improve quality of life in rural communities",
    goal3: "Create sustainable job opportunities in agricultural sectors",
    goal4: "Preserve cultural heritage and traditional practices",

    // Objectives Section (About Page)
    objectivesSectionTitle: "Strategic Objectives",
    objective1Title: "Economic Empowerment",
    objective1Desc:
      "Supporting small farmers and productive families to establish sustainable income sources through targeted financial and technical assistance.",
    objective2Title: "Agricultural Development",
    objective2Desc:
      "Enhancing agricultural productivity through modern techniques, training programs, and infrastructure development across all supported sectors.",
    objective3Title: "Food Security",
    objective3Desc:
      "Contributing to the Kingdom's food security by supporting strategic agricultural sectors and reducing reliance on imports.",
    objective4Title: "Rural Transformation",
    objective4Desc:
      "Improving the quality of life in rural areas through comprehensive development programs that address economic, social, and infrastructure needs.",

    // Benefits Section (About Page)
    benefitsSectionTitle: "What We Offer",
    benefitsSubtitle: "Comprehensive support for rural development",
    benefit1Title: "Financial Support",
    benefit1Desc:
      "Access to grants, loans, and subsidies for agricultural projects and small businesses.",
    benefit2Title: "Technical Training",
    benefit2Desc:
      "Hands-on workshops and training programs to build skills and improve production quality.",
    benefit3Title: "Agricultural Extension",
    benefit3Desc:
      "Expert guidance on best practices, modern techniques, and sustainable farming methods.",
    benefit4Title: "Marketing Support",
    benefit4Desc:
      "Assistance with product marketing, branding, and access to local and international markets.",
    benefit5Title: "Infrastructure Development",
    benefit5Desc:
      "Investment in rural infrastructure including roads, irrigation systems, and storage facilities.",
    benefit6Title: "Research & Innovation",
    benefit6Desc:
      "Support for agricultural research and adoption of innovative technologies.",

    // Milestones Section (About Page)
    milestonesSectionTitle: "Key Milestones",
    milestone1Year: "2019",
    milestone1Title: "Program Launch",
    milestone1Desc:
      "Official launch of Reef Saudi Arabia by the Custodian of the Two Holy Mosques",
    milestone2Year: "2021",
    milestone2Title: "Expansion Phase",
    milestone2Desc:
      "Extended support to all 13 regions of the Kingdom, reaching 50,000+ beneficiaries",
    milestone3Year: "2023",
    milestone3Title: "Innovation Hub",
    milestone3Desc:
      "Launched agricultural innovation centers and entrepreneurship accelerators",
    milestone4Year: "2025",
    milestone4Title: "Target Achievement",
    milestone4Desc:
      "Reached 87,000+ beneficiaries with SAR 11.75 billion in total investment",

    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "We're here to support your rural development journey",
    contactName: "Full Name",
    contactEmail: "Email Address",
    contactPhone: "Phone Number",
    contactSubject: "Subject",
    contactMessage: "Message",
    contactSubmit: "Send Message",
    contactInfo: "Contact Information",
    contactAddress: "Riyadh, Saudi Arabia",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Phone",

    // Footer
    footerTagline: "Empowering rural communities for a sustainable future",
    quickLinks: "Quick Links",
    supportServices: "Support Services",
    followUs: "Follow Us",
    copyright: "© 2025 Reef Saudi Arabia. All rights reserved.",

    // Footer - Detailed
    overview: "Overview",
    mediaCenter: "Media Center",

    sectorsServices: "Sectors & Services",
    beekeeping: "Beekeeping",
    coffee: "Saudi Coffee",
    fruits: "Fruits",
    rainfedCrops: "Rainfed Crops",
    rosesAromatic: "Roses & Aromatic Plants",
    aromaticPlants: "Aromatic Plants",
    livestock: "Livestock & Dairy",
    fishing: "Fishery & Aquaculture",
    handicrafts: "Handicrafts",
    agritech: "Agricultural Technology",
    reefAcademy: "Reef Academy",

    supportResources: "Support & Resources",
    howToApply: "How to Apply",
    termsConditions: "Terms & Conditions",
    faqs: "Frequently Asked Questions",
    submitComplaint: "Submit a Complaint",
    reportCorruption: "Report Corruption",
    askSpokesperson: "Ask the Spokesperson",

    importantLinks: "Important Links",
    vision2030: "Saudi Vision 2030",
    nationalPortal: "National Portal",
    openDataPortal: "Open Data Portal",
    eParticipation: "E-Participation",
    mewa: "Ministry of Environment, Water & Agriculture",
    interactiveMap: "Interactive Map",
    galleryBook: "Gallery & Visual Book",

    accessibilityTools: "Accessibility Tools",
    copyrightFull:
      "All intellectual property rights reserved for Reef Saudi Arabia Program",
    copyrightSupervision:
      "Under the supervision of the Ministry of Environment, Water and Agriculture",

    // Beekeeping Page
    beekeepingHeroTitle: "Beekeeping Sector",

    // Roses & Aromatic Plants Sector
    rosesHeroTitle: "Roses Cultivation Development and Rose Trade Sector",
    rosesIntro1:
      "The rose and aromatic plants sector represents one of the promising specialized sectors supported by the Reef Saudi Arabia Program, due to its high economic, cultural, and environmental value and its historical association with several regions of the Kingdom—most notably Taif, Jazan, Asir, Makkah Al-Mukarramah, Al-Baha, and Al-Madinah Al-Munawwarah.",
    rosesIntro2:
      "The program aims to develop the complete value chain of roses and aromatic plants, starting from seedling cultivation and variety improvement, through harvesting, drying, distillation, and manufacturing processes, and ultimately reaching local and global marketing of rose oil, rose water, and related aromatic products.",
    rosesIntro3:
      "The program also contributes to supporting small farmers and empowering them to adopt modern technologies, achieve sustainable income, and preserve this agricultural heritage that has been passed down for hundreds of years as part of the Kingdom's cultural and economic identity.",

    rosesObj1:
      "Achieving leadership in the production, processing, and marketing of roses.",
    rosesObj2:
      "Increasing the income of small producers by adding value through processing and marketing.",
    rosesObj3: "Exporting rose products to Gulf countries and Europe.",
    rosesObj4: "Creating numerous job opportunities, especially for women.",

    keyAreasOfAction: "Key Areas of Action",
    rosesAction1:
      "Developing appropriate technologies for rose cultivation and production, including grading, storage, and preparation processes.",
    rosesAction2:
      "Providing financial support and institutional infrastructure for rose producers.",
    rosesAction3: "Establishing distillation facilities.",
    rosesAction4:
      "Introducing mechanized harvesting and post-harvest technologies to reduce losses.",
    rosesAction5:
      "Establishing and strengthening the capacities of specialized agricultural cooperatives to support small producers.",
    rosesAction6:
      "Supporting and developing electronic marketing methods for roses and their products.",
    rosesAction7:
      "Planting forestry trees such as hedgerows, windbreaks, and living fences.",
    rosesAction8:
      "Constructing small dams and interception barriers to harvest rainwater.",
    rosesAction9:
      "Developing and expanding the use of modern irrigation systems for supplementary irrigation.",
    rosesAction10:
      "Establishing demonstration fields for research and technical support to rose producers and training technical staff.",
    rosesAction11:
      "Establishing and developing specialized nurseries to produce important rose varieties and distributing these seedlings to producers.",

    // Figures and Indicators
    figuresIndicators: "Figures and Indicators",
    rosesImpactGrowth: "Impact & Growth",
    rosesFiguresSubtitle:
      "Data-driven insights into the transformation of Saudi Arabia's rose and aromatic plants sector",
    empoweringLocalProducers: "Empowering local producers",
    totalSupport: "Total Support",
    totalSupportValue: "Total Support Value",
    totalBeneficiaries: "Total Beneficiaries",
    million: "Million",
    men: "Men",
    women: "Women",
    beneficiariesByRegion: "Beneficiaries by region",
    millionSAR: "Million SAR",
    beneficiaries: "Number of Beneficiaries",
    supportedProducts: "Supported Products",
    jasmine: "Jasmine",
    henna: "Henna",
    rose: "Rose (Al-Jouri)",
    geographicalDistribution: "Geographical Distribution of Beneficiaries",
    saudiMapAlt: "Saudi Arabia Map",
    taif: "Taif",
    seedlings: "Seedlings",
    varieties: "Varieties",
    grapes: "Grapes",
    figs: "Figs",
    apricots: "Apricots",
    almonds: "Almonds",
    jazan: "Jazan",
    asir: "Asir",
    makkah: "Makkah Al-Mukarramah",
    baha: "Al-Baha",
    madinah: "Al-Madinah Al-Munawwarah",
    hail: "Hail",
    riyadh: "Riyadh",
    tabuk: "Tabuk",
    northernBorders: "Northern Borders",
    jouf: "Al-Jouf",
    najran: "Najran",
    easternProvince: "Eastern Province",
    qassim: "Al-Qassim",
    ofTotal: "of total",
    productionGrowth: "Production Growth",
    productionGrowthDesc:
      "Figures for the period 2020–2024 indicate accelerated growth in the production of roses and aromatic plants.",
    flowersPerYear: "flowers / year",
    target: "Target",
    millionShort: "M",
    billionShort: "B",

    // Rose and Aromatic Plants Sector Projects
    sectorProjects: "Sector Projects",
    rosesAromaticProjectsTitle: "Rose and Aromatic Plants Sector Projects",
    numberOfProjects: "Number of Projects",
    projects: "Projects",
    totalEstimatedValue: "Total Estimated Value",
    projectsIntro:
      'The "Reef Saudi Arabia" Program is implementing a package of specialized projects in the rose and aromatic plants sector, aiming to increase local production, strengthen value chains, and develop industries related to perfumes and plant extracts across various regions of the Kingdom.',
    keySectorProjects: "Key Sector Projects",
    project1:
      "Establishing specialized cities for roses and aromatic plants in Jazan region.",
    project2:
      "Establishing specialized nurseries for roses and aromatic plants in Jazan region.",
    project3:
      "Establishing a factory for extracting essential oils from roses and aromatic plants, along with nurseries, in Abu Arish Governorate (National Park).",
    project4:
      "Providing advisory support to implement field schools using artificial intelligence applications.",
    project5:
      "Developing a database for rose, jasmine, camphor, and honey farmers to monitor labor force needs.",
    project6:
      "Supplying laboratory equipment and tools for water and soil analysis in several regions of the Kingdom.",
    project7: "Establishing the Rose Center in Taif city.",
    project8:
      "Establishing and equipping a tissue culture laboratory to produce high-quality roses in Riyadh region.",
    project9:
      "Supplying greenhouses and agricultural shade structures and establishing irrigation networks for rose and aromatic plant cities in Jazan.",
    project10:
      "Rehabilitating the tissue culture laboratory to produce high-quality roses in Riyadh.",
    project11:
      "Applying sustainable irrigation systems and modern agricultural technologies for small rose farmers in Taif Governorate.",
    project12:
      "Supplying mobile clinics to diagnose diseases and pests of roses and medicinal and aromatic plants.",
    project13:
      "Supplying equipment to technical extension units for photography and video editing for ministry branches in different regions.",
    technicalEconomicFeasibility:
      "Technical and Economic Feasibility of the Projects",
    comprehensiveFeasibilityStudies: "Comprehensive Feasibility Studies",
    feasibilityIntro:
      "Projects in the rose and aromatic plants sector contribute to achieving several strategic gains, including:",
    feasibility1:
      "Increasing local rose production and reducing dependence on imports.",
    feasibility2:
      "Enhancing local revenues and creating new job opportunities for farmers.",
    feasibility3:
      "Promoting agricultural heritage related to rose cultivation as part of regional cultural identity.",
    feasibility4:
      "Supporting sustainable agricultural practices in managing water and soil resources.",
    feasibility5:
      "Achieving a balance between economic growth and environmental conservation.",
    feasibility6: "Preserving biodiversity of aromatic plants.",
    feasibility7:
      "Encouraging small farmers to adopt best agricultural practices.",
    feasibility8: "Diversifying aromatic crops to achieve sustainable income.",
    feasibility9:
      "Reducing logistical costs by localizing industries through distillation and processing facilities.",
    feasibility10:
      "Creating diverse plant environments that support environmental sustainability.",
    projectObjectives: "Project Objectives",
    projectObjectivesIntro:
      'The rose and aromatic plants sector projects under the "Reef Saudi Arabia" Program focus on achieving the following objectives:',
    objective1:
      "Increasing the Kingdom's rose production to meet local market demand and reduce reliance on imports.",
    objective2:
      "Establishing specialized facilities for extracting rose oil and rose water.",
    objective3: "Supporting and developing the local perfume industry.",
    objective4:
      "Enabling the export of rose and aromatic plant products to Gulf and global markets, contributing to the objectives of Saudi Vision 2030.",

    keyImplementedActivities:
      "Key Implemented Activities in the Rose and Aromatic Plants Sector",

    activity1Title: "Establishment of Demonstration Fields",
    activity1Desc:
      "A total of 12 demonstration fields were implemented to develop rose and jasmine cultivation in the Taif and Jazan regions, applying the latest practices in pruning, fertilization, and pest control.",
    activity1Sessions:
      "These efforts included awareness sessions with 120 farmers, which contributed to:",
    activity1Stat1: "100% increase in field productivity",
    activity1Stat2:
      "Raising average production from 300–400 flowers to 1,200–1,400 flowers per plant",
    activity1Fields: "12 demonstration fields",
    activity1Farmers: "120 farmers",

    activity2Title: "Introduction of Cooling Technology",
    activity2Desc:
      "Six refrigerated containers were delivered for transporting roses after harvest, with the aim of:",
    activity2Point1: "Preserving rose quality prior to distillation",
    activity2Point2: "Extending the storage life of flowers",
    activity2Point3: "Reducing losses and improving supply chain efficiency",
    activity2Containers: "6 refrigerated containers",

    activity3Title: "Introduction of Composting Technology",
    activity3Desc:
      "Production of compost from rose distillation waste was initiated and used as a natural, eco-friendly fertilizer, enhancing environmental sustainability and reducing fertilization costs.",

    activity4Title: "Rose Cultivation and Production Mapping",
    activity4Desc:
      "A technical study was conducted using remote sensing technologies to develop a precise cultivation map, resulting in:",
    activity4Suitable: "Suitable cultivation area: 621 hectares",
    activity4Current: "Currently cultivated area: 346 hectares",
    activity4Expansion: "Future expansion potential: 275 hectares",
    activity4Standards:
      "In addition, specifications for Saudi rose oil were developed to ensure quality and competitiveness in the markets.",

    activity5Title: "Workshops and Field Visits",
    activity5Desc: "Training and follow-up activities included:",
    activity5Visits: "35 field visits to monitor irrigation systems",
    activity5Training: "Training 149 farmers in modern agricultural techniques",
    activity5Jasmine: "Visits to jasmine farms in Taif",
    activity5Monitoring: "Monitoring pest and disease control programs",
    activity5Impact:
      "These efforts contributed to improving production efficiency and enhancing crop quality.",
    activity5FieldVisits: "35 field visits",
    activity5TrainedFarmers: "149 farmers trained",

    exploreInteractiveMap: "Explore the interactive map of our rural sectors",
    exploreSupportPrograms: "Explore support programs",

    mainObjectivesSector: "Main Objectives of the Sector",
    beekeepingObj1:
      "Improving the quality of Saudi honey and adhering to international quality standards to enhance competitiveness in local and global markets.",
    beekeepingObj2:
      "Providing training and educational programs for beekeepers to raise their productivity and improve their marketing and management skills.",
    beekeepingObj3:
      "Developing infrastructure for beekeeping, such as modern apiaries, honey laboratories, and quality testing facilities.",
    beekeepingObj4:
      "Supporting research and innovation in beekeeping to develop pest-resistant bee strains and improve hive productivity.",

    mainServicesSector: "Main Services Provided by the Sector",
    beekeepingService1Title: "Financial Support",
    beekeepingService1Desc:
      "Providing soft loans and direct financial grants to establish new apiaries or expand existing operations.",
    beekeepingService2Title: "Technical Training",
    beekeepingService2Desc:
      "Organizing workshops and training courses on modern beekeeping techniques, disease management, and quality honey production.",
    beekeepingService3Title: "Technical Consultation",
    beekeepingService3Desc:
      "Providing specialized advisory services by experts in beekeeping, hive health, and queen bee breeding.",
    beekeepingService4Title: "Marketing Support",
    beekeepingService4Desc:
      "Facilitating marketing channels to local and international markets and supporting participation in exhibitions and specialized markets.",

    beneficiariesSector: "Beneficiaries of the Sector",
    beekeepingBeneficiary1: "Small and medium-sized beekeepers",
    beekeepingBeneficiary2:
      "Productive families wishing to enter the beekeeping field",
    beekeepingBeneficiary3: "Youth entrepreneurs in rural areas",
    beekeepingBeneficiary4:
      "Local cooperatives specialized in honey production and marketing",

    futurePlans: "Future Plans",
    beekeepingFuture1:
      "Establishing specialized beekeeping centers in the main production areas in the Kingdom.",
    beekeepingFuture2:
      "Launching a Saudi honey certification program to ensure quality and purity.",
    beekeepingFuture3:
      "Strengthening partnerships with research centers and universities to develop the sector.",
    beekeepingFuture4:
      "Expanding export opportunities for Saudi honey to global markets.",
  },
  ar: {
    // Header
    home: "الرئيسية",
    about: "عن البرنامج",
    sectors: "القطاعات",
    sustainability: "الاستدامة",
    support: "الدعم",
    contact: "تواصل معنا",
    search: "بحث",
    programs: "البرامج",
    supportPrograms: "برامج الدعم",
    news: "الأخبار والفعاليات",
    latestNews: "آخر الأخبار",
    newsArchive: "أرشيف الأخبار",
    language: "English",
    // Header dropdowns (additional)
    initiatives: "المبادرات",
    impactStats: "الأثر والإحصائيات",
    newsPress: "الأخبار والصحافة",
    photoVideo: "مكتبة الصور والفيديو",
    events: "الفعاليات",
    beneficiariesGuide: "دليل المستفيدين",
    // Sectors (nav)
    flowers: "الورد والزهور",
    aromatic: "النباتات العطرية",

    // Mega Menu - Programs
    programsOverview: "نظرة عامة على البرامج",
    programsIntro: "اكتشف برامج الدعم الشاملة لدينا",
    financialSupport: "الدعم المالي",
    financialSupportDesc: "احصل على التمويل والمنح للمشاريع الزراعية",
    technicalTraining: "التدريب الفني",
    technicalTrainingDesc: "بناء المهارات من خلال ورش العمل التطبيقية",
    businessIncubators: "حاضنات الأعمال",
    businessIncubatorsDesc: "احصل على الإرشاد والموارد للمشاريع الناشئة",
    viewAllPrograms: "عرض جميع البرامج",

    // Mega Menu - Sectors
    sectorsOverview: "نظرة عامة على القطاعات",
    sectorsIntro: "استكشف القطاعات الزراعية المتنوعة التي ندعمها",
    beekeepingSector: "تربية النحل",
    beekeepingDesc: "تميز إنتاج العسل السعودي",
    coffeeSector: "البن السعودي",
    coffeeDesc: "تمكين مزارعي البن في جميع المناطق",
    rosesSector: "الورد والنباتات العطرية",
    sector3Desc:
      "تنمية إنتاج الورود والنباتات العطرية في مناطق المملكة لزيادة القيمة المضافة والتصدير",
    fruitsSector: "الفواكه",
    fruitsDesc: "زراعة الفواكه العضوية والمستدامة",
    livestockSector: "الثروة الحيوانية والألبان",
    livestockDesc: "تحسين جودة السلالات وإنتاج الألبان",
    rainfedSector: "الزراعة البعلية",
    rainfedDesc: "دعم إنتاج القمح والشعير",
    fisherySector: "الصيد والاستزراع السمكي",
    fisheryDesc: "تقنيات حديثة للصيد المستدام",
    handicraftsSector: "الحرف اليدوية",
    handicraftsDesc: "إحياء الحرف الريفية التقليدية",
    familiesSector: "أسر المنتجة",
    familiesDesc: "تمكين المشاريع الصغيرة المنزلية",
    viewAllSectors: "عرض جميع القطاعات",

    // Hero Slider
    hero1Title: "تمكين المجتمعات الريفية من خلال الابتكار المستدام",
    hero1Desc:
      "برنامج ريف السعودية يلتزم بالتنمية الزراعية المستدامة، والحفاظ على التراث الثقافي، وتعزيز الفرص الاقتصادية في المناطق الريفية",
    hero1Btn1: "استكشف قطاعاتنا",
    hero1Btn2: "تعرف علينا",

    hero2Title: "زراعة البن السعودي بتميز",
    hero2Desc:
      "دعم مزارعي البن في جازان والباحة وسير لتحسين الجودة والوصول إلى الأسواق العالمية",
    hero2Btn1: "اكتشف قطاع البن",
    hero2Btn2: "عرض جميع القطاعات",

    hero3Title: "زراعة مستدامة للجيل القادم",
    hero3Desc:
      "تعزيز ممارسات الزراعة البيئية التي تحافظ على بيئتنا وتضمن الأمن الغذائي",
    hero3Btn: "تعرف أكثر",

    hero4Title: "تغير حياة الناس من خلال التنمية الريفية",
    hero4Desc:
      "خلق فرص، بناء البنية التحتية، وتمكين المجتمعات في جميع أنحاء المملكة",
    hero4Btn1: "تأثيرنا",
    hero4Btn2: "برامج الدعم",

    hero5Title: "حفظ التراث، بناء المستقبل",
    hero5Desc:
      "احترام الحرف اليدوية التقليدية والممارسات الزراعية مع اعتماد الابتكار الحديث",
    hero5Btn1: "استكشف التراث",
    hero5Btn2: "عرض المبادرات",

    // Hero (Legacy - kept for compatibility)
    heroTitle: "تمكين المجتمعات الريفية من خلال الابتكار",
    heroSubtitle:
      "يلتزم برنامج ريف السعودية بالتنمية الزراعية المستدامة، والحفاظ على التراث الثقافي، وتعزيز الفرص الاقتصادية في المناطق الريفية",
    heroButton1: "استكشف قطاعاتنا",
    heroButton2: "تعرف علينا",

    // Key Numbers
    keyNumbersTitle: "تأثيرنا",
    keyNumbersSubtitle: "نحدث فرقاً في جميع أنحاء المملكة",
    keyNumbers1: "+87,000",
    keyNumbers1Label: "مستفيد",
    keyNumbers2: "9",
    keyNumbers2Label: "قطاعات مدعومة",
    keyNumbers3: "12",
    keyNumbers3Label: "منطقة مغطاة",
    keyNumbers4: "11.75 مليار ريال",
    keyNumbers4Label: "إجمالي الاستثمار",

    // Sectors Grid
    sectorsTitle: "قطاعاتنا المستهدفة",
    sectorsSubtitle:
      "يدعم برنامج ريف السعودية 9 قطاعات رئيسية تقود التنمية الريفية والتميز الزراعي",

    sector1Title: "تربية النحل",
    sector1Desc:
      "دعم مربي النحل في المناطق الجبلية لإنتاج عسل سعودي فاخر بنقاء وجودة عالية",
    sector1Point1: "التدريب والتطوير",
    sector1Point2: "الدعم المالي",
    sector1Point3: "الإرشاد الفني",

    sector2Title: "القهوة السعودية",
    coffeeHeroTitle: "قطاع تطوير وإنتاج وتصنيع وتسويق القهوة السعودية",
    coffeeIntroP1:
      'يمثّل قطاع القهوة والبن أحد المحاور الاستراتيجية التي يعمل عليها برنامج "ريف السعودية" بوصفه محصولاً نقدياً عالي القيمة، وعنصراً رئيسياً في دعم الأمن الغذائي وتعزيز الاقتصاد الريفي. ويهدف البرنامج إلى إنشاء سلسلة قيمة متكاملة تبدأ من الزراعة وتنتهي بالتسويق، مع التركيز على رفع جودة المنتج السعودي وتمكين صغار المزارعين من دخول الأسواق المحلية والعالمية بثقة واستدامة.',
    coffeeIntroP2:
      "يسهم البرنامج في زيادة نسبة الاكتفاء الذاتي من البن وتقليل الاعتماد على الاستيراد، عبر دعم المزارعين بالتقنيات الحديثة، وبناء بنية تحتية متخصصة تشمل المشاتل والمصانع ومراكز الخدمات الإرشادية، إضافة إلى خلق فرص عمل نوعية للشباب في مناطق الإنتاج، وتحسين دخل صغار المنتجين.",

    // Coffee Sector Objectives
    coffeeObj1:
      "إدخال ونشر البن كمحصول نقدي ضمن التركيبة المحصولية الزراعية في المملكة",
    coffeeObj2: "رفع نسبة الاكتفاء الذاتي وخفض واردات البن",
    coffeeObj3: "زيادة دخل صغار المنتجين وتحسين سبل معيشتهم",
    coffeeObj4: "إضافة قيمة اقتصادية عبر التصنيع والتسويق",
    coffeeObj5: "توفير فرص عمل للشباب في المناطق الريفية",

    // Coffee Sector Key Areas of Action
    keyAreasActionTitle: "محاور العمل في قطاع البُن",
    coffeeAction1: "تطبيق الممارسات الزراعية الجيدة",
    coffeeAction2: "إنشاء مشاتل ومزارع نموذجية للبن السعودي",
    coffeeAction3:
      "إدخال تقنيات الحصاد الحديثة وتقنيات ما بعد الحصاد للحد من الفاقد",
    coffeeAction4: "تسهيل الوصول إلى الائتمان والتمويل الزراعي",
    coffeeAction5: "إنشاء مراكز للخدمات الإرشادية والبحث العلمي",
    coffeeAction6: "تقديم دعم مالي مباشر لصغار المنتجين",
    coffeeAction7: "تأسيس جمعيات تعاونية ومراكز تسويق متخصصة",
    coffeeAction8: "إنشاء منشآت لحصاد مياه الأمطار وتوفير مياه الري",
    coffeeAction9: "تأهيل وتطوير الكفاءات والكوادر الفنية",
    coffeeAction10: "تطبيق أنظمة الحجر النباتي لحماية الإنتاج المحلي",

    // Coffee Stats Section
    coffeeStatsTitle: "أرقام ومؤشرات",
    coffeeStatsSubtitle:
      "الأرقام للفترة 2020 - 2024 وتظهر نمواً متسارعاً في إنتاج القهوة السعودية",
    coffeeTotalSupport: "إجمالي الدعم",
    coffeeProgressLabel: "إكمال البرنامج",
    coffeeBeneficiaries: "عدد المستفيدين",
    coffeeBeneficiariesLabel: "مستفيداً",
    coffeeMen: "رجلاً",
    coffeeWomen: "امرأة",
    coffeeGeographicalDistribution: "التوزيع الجغرافي للمستفيدين",
    coffeeProductionGrowth: "تطور الإنتاج (طن / سنة)",
    coffeeProductionSubtitle: "الإنتاج السنوي بالطن",
    coffeeTons: "طن",
    coffeeGrowth: "نمو",
    coffeeTarget: "مستهدف",
    coffeeGrowthNote:
      "الأرقام للفترة 2020 - 2024 وتظهر نمواً متسارعاً في إنتاج القهوة السعودية",

    // Coffee Projects Section
    coffeeProjectsTitle: "مشاريع قطاع القهوة السعودية",
    coffeeNumberOfProjects: "عدد المشاريع",
    coffeeProjects: "مشاريع",
    coffeeTotalValue: "إجمالي القيمة",
    coffeeProjectsIntro:
      'يعمل برنامج "ريف السعودية" على تنفيذ حزمة من المشاريع الاستراتيجية في قطاع القهوة السعودية، بهدف تطوير سلسلة القيمة من الزراعة وحتى المعالجة والتسويق، وتعزيز تنافسية البن السعودي محلياً وعالمياً.',
    coffeeKeyProjects: "أبرز مشاريع القطاع",

    // Feasibility
    coffeeFeasibilityTitle: "الجدوى الفنية والاقتصادية للمشاريع",
    coffeeFeasibilityIntro:
      'يركز برنامج "ريف السعودية" في قطاع البن على تحقيق تنمية متكاملة تشمل:',
    coffeeFeasibility1:
      "تدريب المزارعين على التقنيات الحديثة في الزراعة والحصاد.",
    coffeeFeasibility2: "إنشاء حقول استرشادية ومشاتل متخصصة.",
    coffeeFeasibility3: "حصاد مياه الأمطار لتوفير مصادر ري مستدامة.",
    coffeeFeasibility4: "التوسع في المساحات المزروعة وزيادة الإنتاجية.",
    coffeeFeasibility5:
      "زراعة البن في المدرجات الجبلية وإزالة النباتات الضارة.",
    coffeeFeasibility6: "دعم الاستدامة البيئية وتعزيز الاقتصاد المحلي.",
    coffeeFeasibility7: "تقليل الاعتماد على الواردات ورفع القدرة التنافسية.",
    coffeeFeasibility8: "التخطيط للوصول إلى الأسواق العالمية.",

    // Objectives
    coffeeObjectivesTitle: "أهداف المشاريع",
    coffeeObjective1:
      "رفع جودة البن السعودي باستخدام أحدث تقنيات الإنتاج والمعالجة.",
    coffeeObjective2: "زيادة أعداد الشتلات والتوسع في المساحات الزراعية.",
    coffeeObjective3: "إنشاء مزارع نموذجية وتحسين إدارة الموارد المائية.",
    coffeeObjective4: "إقامة حقول إرشادية لترشيد استهلاك المياه.",
    coffeeObjective5: "استغلال الأراضي الزراعية بكفاءة مستدامة.",
    coffeeObjective6: "تطوير ممارسات زراعية متوافقة مع طبيعة المناخ والتربة.",

    sector2Desc:
      "تمكين مزارعي البن في جازان والباحة وسير لتعزيز الجودة والانتشار العالمي",
    sector2Point1: "تحسين سلاسل الإمداد",
    sector2Point2: "دعم صغار المزارعين",
    sector2Point3: "تسويق المنتجات",

    sector3Title: "الورد والنباتات العطرية",
    sector3Point1: "تطوير المزارع",
    sector3Point2: "دعم عمليات التصنيع",
    sector3Point3: "تعزيز فرص التسويق",

    sector4Title: "الفواكه",
    sector4Desc:
      "إنتاج فواكه مميزة بأساليب عضوية تحافظ على التربة وجودة المحاصيل وحقق استدامة أعلى",
    fruitsHeroTitle: "قطاع تطوير وإنتاج وتصنيع وتسويق الفاكهة",
    fruitsIntro1:
      "يهدف قطاع الفاكهة في برنامج ريف السعودية إلى دعم تطوير وإنتاج وتسويق الفواكه ذات الميزة النسبية والقيمة العالية، من خلال تحسين عمليات الإنتاج والتسويق، ورفع كفاءة سلاسل القيمة، وإضافة قيمة اقتصادية من خلال الجمع والتصنيع والتسويق، بما يسهم في زيادة دخل المزارعين، وخلق فرص تنموية مستدامة للمجتمعات الريفية في ظل تزايد الطلب على منتجات الفاكهة محلياً ودولياً.",
    fruitsIntro2:
      "يركّز البرنامج على بناء منظومة متكاملة تبدأ من تحسين الممارسات الزراعية وتنتهي بتهيئة المنافذ التسويقية وسلاسل الإمداد، بما يضمن جودة المنتج وتقليل الفاقد ورفع تنافسيته داخل الأسواق.",
    fruitsObj1: "دعم إنتاج وتسويق الفواكه ذات الميزة النسبية والقيمة العالية",
    fruitsObj2: "زيادة دخل المزارعين من خلال تحسين الإنتاج والتسويق",
    fruitsObj3:
      "إضافة قيمة عالية وإيجاد فرص عمل من خلال الجمع والتصنيع والتسويق",
    fruitsObj4: "خلق فرصة تنموية للمناطق ذات الطلب المرتفع على منتجات الفاكهة",
    fruitsObj5: "تحفيز التنمية الريفية وزيادة دخل المجتمعات وتحسين سبل معيشتهم",
    fruitsWorkAxis1:
      "تطبيق الممارسات الزراعية الجيدة ويشمل ذلك العمليات الزراعية الحديثة",
    fruitsWorkAxis2: "إنشاء جمعيات تعاونية إنتاجية وتسويقية وتصنيعية",
    fruitsWorkAxis3:
      "إنشاء سدود صغيرة وحواجز اعتراضية لحصد مياه الأمطار وخزانات لتوفير مياه الري",
    fruitsWorkAxis4: "تطوير ونشر استخدام أنظمة الري الحديثة",
    fruitsWorkAxis5: "إنشاء مشاتل للفواكه شبه الاستوائية",
    fruitsWorkAxis6:
      "تطوير أنظمة تجفيف وتخزين الفواكه وإدخال تقنيات الحصاد الآلي وما بعد الحصاد للتقليل من الفاقد",
    fruitsWorkAxis7: "إنشاء مزارع نموذجية لنشر وتطوير زراعة الفواكه",
    fruitsWorkAxis8:
      "تدريب كوادر وزارة البيئة والمياه والزراعة في مجالات الفواكه شبه الاستوائية",
    fruitsWorkAxis9:
      "تسهيل الحصول على الائتمان المالي من خلال صندوق التنمية الزراعي",
    fruitsWorkAxis10: "تنمية مهارات وقدرات صغار المنتجين الزراعيين",
    fruitsWorkAxis11:
      "إنشاء مراكز لتقديم الخدمات الإرشادية والأبحاث والدراسات التطبيقية",
    fruitsStatsTitle: "أرقام ومؤشرات",
    fruitsTotalSupport: "إجمالي الدعم",
    fruitsSupportAmount: "+187.91 مليون ريال",
    fruitsBeneficiaries: "عدد المستفيدين",
    fruitsBeneficiariesCount: "+9,054 مستفيداً",
    fruitsBeneficiariesDetails: "(3,826 رجلاً - 5,228 امرأة)",
    fruitsGeoDistribution: "التوزيع الجغرافي للمستفيدين",
    fruitsSupportedProducts: "المنتجات المدعومة",
    fruitsProductionEvolution: "تطور الإنتاج (طن / سنة)",
    fruitsYear: "السنة",
    fruitsProductionVolume: "حجم الإنتاج",
    fruitsProduction2020: "93.2 طن",
    fruitsProduction2024: "365 طناً",
    fruitsGrowthRate: "(نمو 120%)",
    fruitsProduction2026: "350 طناً",
    fruitsTarget: "(مستهدف)",
    fruitsStatsNote:
      "*الأرقام للفترة 2020 - 2024 وتظهر نمواً متسارعاً في إنتاج الفاكهة ضمن مناطق الدعم.",
    fruitsProjectsTitle: "مشاريع قطاع الفاكهة",
    fruitsProjectsCount: "عدد المشاريع",
    fruitsProjectsCountValue: "23 مشروعاً",
    fruitsProjectsValue: "إجمالي القيمة التقديرية",
    fruitsProjectsValueAmount: "396.8 مليون ريال",
    fruitsProjectsIntro:
      'يعمل برنامج "ريف السعودية" على تنفيذ منظومة متكاملة من المشاريع في قطاع الفاكهة، بهدف تطوير الإنتاج، وتحسين الجودة، وتعزيز سلاسل القيمة من المزرعة إلى السوق، بما يسهم في رفع الاكتفاء الذاتي ودعم دخل المزارعين.',
    fruitsProjectsHighlights: "أبرز مشاريع القطاع",
    fruitsProject1: "إنشاء وتجهيز مراكز الخدمات التسويقية للمنتجات الزراعية",
    fruitsProject2: "إنشاء مركز تطوير إنتاج وتسويق الفواكه",
    fruitsProject3:
      "تشغيل وصيانة الوحدة البحثية للزراعة بالمياه المتجددة في وادي بن هشبل",
    fruitsProject4:
      "توريد معدات ومواد زراعية لمشروع الوحدة البحثية بوادي بن هشبل",
    fruitsProject5: "تركيب مواد لمشاتل مركز أبحاث البستنة في نجران",
    fruitsProject6:
      "تجهيزات مختبرية لوحدة أبحاث مكافحة الأمراض النباتية والتربة في جازان",
    fruitsProject7:
      "تركيب أجهزة ومواد المختبر المركزي للثروة النباتية في الرياض",
    fruitsProject8:
      "تركيب أجهزة مركز مكافحة الأمراض النباتية والملوثات الكيميائية في الرياض",
    fruitsProject9:
      "تطبيق نظم الري المستدامة والتقنيات الزراعية الحديثة لصغار مزارعي محاصيل الفاكهة",
    fruitsFeasibilityTitle: "الجدوى الفنية والاقتصادية للمشاريع",
    fruitsFeasibilityIntro:
      "تسهم مشاريع قطاع الفاكهة في تحقيق مجموعة من المكاسب الاستراتيجية، من أبرزها:",
    fruitsFeasibility1:
      "رفع العمر الافتراضي للمنتجات من خلال عمليات التبريد والحفظ قبل التوزيع",
    fruitsFeasibility2:
      "تحسين عمليات النظافة والتعبئة وضمان مطابقة المنتجات للمعايير الصحية",
    fruitsFeasibility3:
      "دعم المزارعين بمشاريع نوعية لزيادة مساحة الحيازات الزراعية",
    fruitsFeasibility4: "رفع نسبة الاكتفاء الذاتي من محاصيل الفاكهة",
    fruitsFeasibility5: "تجهيز وحدات تبريد وتخزين متطورة لتعزيز جودة المنتجات",
    fruitsFeasibility6:
      "تطوير وصيانة وتقليم الأشجار، ووقاية النخيل والأشجار المثمرة",
    fruitsFeasibility7:
      "تنظيف الحقول الزراعية من المخلفات وتحسين البيئة الإنتاجية",
    fruitsFeasibility8: "زيادة التوعية وبناء القدرات عبر تدريب المزارعين",
    fruitsFeasibility9:
      "نقل المعرفة وتطوير الممارسات الزراعية باستخدام التقنيات الحديثة",
    fruitsFeasibility10: "إيجاد حلول تسويقية مستدامة وإتاحة منافذ بيع مباشرة",
    fruitsFeasibility11:
      "تقليل سلاسل الإمداد بين المنتج والمستهلك لرفع كفاءة التسويق",
    fruitsProjectObjectivesTitle: "أهداف المشاريع",
    fruitsProjectObjective1:
      "إنشاء مراكز خدمات زراعية وتسويقية متكاملة للفواكه تشمل الفرز والتنظيف والتعبئة والتغليف والنقل",
    fruitsProjectObjective2:
      "تدريب المزارعين والمختصين وأصحاب المصلحة في الحقول الإرشادية على الممارسات الزراعية الحديثة",
    fruitsProjectObjective3:
      "تشغيل وصيانة الوحدات البحثية وتوفير المعدات والأجهزة اللازمة",
    fruitsKeyWorks2024Title: "أهم الأعمال المنفذة في 2024",
    fruitsWork1Title: "إنشاء مشاتل جديدة",
    fruitsWork1Desc:
      "تم اختيار موقعين لإنشاء مشاتل فاكهة تعاونية لدى الجمعية الزراعية بالطائف وجمعية التسويق الزراعي بجازان، بسعة تقديرية 15 ألف شتلة لكل مشتل، علماً بأن العمل جارٍ لإعداد الملفات وإنشاء المشتلين لخدمة المزارعين.",
    fruitsWork2Title: "التوسع بالمشاتل القديمة",
    fruitsWork2Region1: "منطقة عسير",
    fruitsWork2Region1Value: "10,000 شتلة",
    fruitsWork2Region2: "منطقة الباحة",
    fruitsWork2Region2Value: "10,000 شتلة",
    fruitsWork2Total: "إجمالي الإنتاج",
    fruitsWork2TotalValue: "20,000 شتلة حتى الآن",
    fruitsWork2Note: "جرى توزيعها خلال النصف الثاني من هذا العام 2025.",
    fruitsWork3Title: "توصيف أصناف الفاكهة",
    fruitsWork3Desc:
      "تم توصيف 6 أصناف مستوردة من العنب والتين والمشمش واللوز في الحقل الإرشادي بالبلجرشي بالتعاون مع مرك�� البذور والتقاوي بالباحة، بهدف تحديد المواصفات المورفولوجية والإنتاجية وقياس توافق الأصناف مع مناخ المنطقة وإكثار الأصناف المناسبة ذات الإنتاجية العالية.",
    fruitsWork4Title: "تطوير ريادة الأعمال الزراعية للسيدات",
    fruitsWork4Duration: "تنفيذ برنامج تدريبي استمر 3 أشهر شمل:",
    fruitsWork4Point1:
      "اختيار وتدريب 15 رائدة أعمال زراعية على إنشاء وتشغيل مشاتل زراعية خاصة بمدينة بلجرشي بمنطقة الباحة",
    fruitsWork4Point2: "مشاركة 12 متدربة في الدورة الأولى لمدة 3 أيام",
    fruitsWork4Point3: "مشاركة 15 متدربة في الدورة الثانية لمدة يومين",
    fruitsWork4Point4: "تدريب عملي ميداني متواصل على إنشاء وتشغيل المشاتل",
    fruitsWork4Point5:
      "تطوير مهارات التصنيع التحويلي خصوصاً الرمان وصناعة منتجات:",
    fruitsWork4Product1: "زيت بذور الرمان",
    fruitsWork4Product2: "الصابون",
    fruitsWork4Product3: "المربى",
    fruitsWork4Product4: "طحين قشرة الرمان",
    fruitsWork5Title: "الصحة النباتية",
    fruitsWork5Point1: "تنفيذ مسح لتشخيص آفات وأمراض التين والعنب والرمان",
    fruitsWork5Point2:
      "إعداد برامج الإدارة المتكاملة لمكافحة البياض الدقيقي وذبابة الفاكهة والنيماتودا وفراشة الرمان",
    fruitsWork5Point3:
      "سيتم رفع البرامج واعتمادها بالتعاون مع مركز وقاء للاتفاق على آلية التنفيذ والبدء في التطبيق.",
    fruitsCTA1: "استكشف الخريطة التفاعلية لقطاعاتنا الريفية",
    fruitsCTA2: "استكشف برامج الدعم",
    sector4Point1: "الإرشاد الزراعي",
    sector4Point2: "تطوير أساليب الري",
    sector4Point3: "دعم التسويق المحلي",

    sector5Title: "الثروة الحيوانية ومنتجات الألبان",
    sector5Desc:
      "رفع كفاءة مربي الماشية وتحسين جودة إنتاج الألبان عبر برامج دعم وتمويل موجهة",
    livestockHeroTitle: "قطاع تعزيز قدرات صغار مربي الماشية",
    livestockIntro1:
      'يمثل قطاع تعزيز قدرات صغار مربي الماشية أحد القطاعات الحيوية في برنامج "ريف السعودية"، بوصفه ركيزة مهمة لدعم الأمن الغذائي وتحسين دخل الأسر الريفية وتعزيز استدامة نظم الإنتاج الحيواني في المناطق الصحراوية والهامشية. ويعمل البرنامج على تطوير نظم التربية والرعاية والارتقاء بالسلالات المحلية، مع التركيز على كفاءة الإنتاج، وحماية الموارد الطبيعية، ورفع قدرة المربين على المنافسة في السوق.',
    livestockIntro2:
      "يسعى البرنامج إلى إحداث نقلة نوعية في نظم الإنتاج الحيواني التقليدي عبر إدخال التقنيات الحديثة، وتطوير البنية التحتية، وتمكين المربين من الاستفادة من الخدمات البيطرية والإرشادية والتمويلية، بما يسهم في رفع الإنتاجية وتحسين جودة المنتجات الحيوانية وخلق فرص اقتصادية مستدامة في القطاع الريفي.",
    livestockMainGoalsTitle: "الأهداف الرئيسية للقطاع:",
    livestockGoal1:
      "تنمية الأغنام والماعز والإبل في المناطق الصحراوية لتنظيم الاستخدام الأمثل للموارد الطبيعية في هذه المنطقة الهامشية.",
    livestockGoal2:
      "تحسين الإنتاجية وزيادة دخل الأسر من صغار المربين وتحسين سبل معيشتهم.",
    livestockGoal3:
      "تطوير نظم الإنتاج الحيواني التقليدي بشكل يحافظ على دورها في تعزيز الأمن الغذائي.",
    livestockGoal4:
      "تنمية إنتاج لبن الماعز والإبل وتصنيعه كمصدر غذائي خاص للأطفال والنساء في منتجات توافق احتياجات السوق.",
    livestockWorkAxesTitle: "محاور العمل في قطاع الماشية:",
    livestockAxis1:
      "إنشاء بنك الأصول الوراثية لتطوير السلالات المحلية لصغار مربي الماشية.",
    livestockAxis2:
      "تطوير البحث التطبيقي والتحسين الوراثي للسلالات المحلية والهجين لزيادة إنتاجها من الحملان والألبان.",
    livestockAxis3: "تقديم الدعم لإنشاء أو تقوية جمعيات تعاونية زراعية",
    livestockAxis4:
      "تبني ونشر التقنيات الحديثة في نظم التربية والإنتاج والرعاية المناسبة والتغذية المتوازنة، وعلى كيفية تسويق منتجاتهم لتحسين دخلهم.",
    livestockAxis5:
      "وضع سياسة تمويلية لتطوير ودعم صغار المربين لتعديل نمط التربية والإنتاج بالقطاع الريفي.",
    livestockAxis6:
      "تحسين الإرشاد البيطري وتطوير نظم وخدمات الرعاية والبيطرة وتغذية قطعان الأغنام والماعز والإبل في المناطق الصحراوية.",
    livestockAxis7:
      "إنشاء نظام متطور لتداول وتسويق منتجات القطاع الحيواني الريفي.",
    livestockAxis8:
      "إدارة رعي قطعان الثروة الحيوانية لتتسع الطاقة الاستيعابية للمراعي.",
    livestockAxis9:
      "زراعة أنواع وسلالات الأعلاف التي تتحمل الجفاف كعلف للماشية، وإعادة تأهيل المراعي بحماية مستودعات الأعلاف في المواسم الجافة.",
    livestockAxis10: "تطبيق أنظمة الحجر البيطري.",
    livestockAxis11:
      "إعداد قاعدة بيانات للقطاع تتضمن حصر أعدادها وتسجيل كافة بياناتها وترقيمها حتى يتسنى متابعتها ودراستها وتقييمها.",
    livestockObj1:
      "زيادة إنتاجية الثروة الحيوانية وتحسين جودة السلالات من خلال برامج تربية حديثة",
    livestockObj2:
      "تعزيز جودة منتجات الألبان وضمان الامتثال لمعايير الصحة والسلامة",
    livestockObj3:
      "توفير رعاية بيطرية شاملة وخدمات صحية وقائية للثروة الحيوانية",
    livestockObj4: "تطوير قنوات التسويق وخلق فرص دخل مستقرة لصغار المربين",
    livestockAction1Title: "برامج تحسين السلالات",
    livestockAction1Desc:
      "تنفيذ برامج تربية انتقائية وإدخال سلالات محسنة لتعزيز الإنتاجية ومقاومة الأمراض",
    livestockAction2Title: "خدمات الرعاية البيطرية",
    livestockAction2Desc:
      "توفير رعاية بيطرية شاملة تشمل التطعيمات والعلاج والمراقبة الصحية المنتظمة",
    livestockAction3Title: "تحسين جودة الأعلاف",
    livestockAction3Desc:
      "تطوير جودة الأعلاف الحيوانية وضمان التوازن الغذائي لزيادة الإنتاج إلى أقصى حد",
    livestockAction4Title: "دعم إنتاج الألبان",
    livestockAction4Desc:
      "دعم مربي الألبان بمعدات حديثة وتدريب وأنظمة مراقبة الجودة",
    livestockAction5Title: "التسويق والتوزيع",
    livestockAction5Desc:
      "إنشاء قنوات تسويقية وربط المربين بالأسواق المحلية والإقليمية",
    livestockAction6Title: "التدريب وبناء القدرات",
    livestockAction6Desc:
      "توفير التدريب الفني على ممارسات إدارة الثروة الحيوانية الحديثة والمهارات التجارية",
    livestockProject1Title: "برنامج دعم صغار مربي الماشية",
    livestockProject1Desc:
      "برنامج دعم شامل يوفر التمويل والتدريب والمساعدة الفنية لمربي الماشية صغار الحجم",
    livestockProject2Title: "مبادرة تحسين جودة الألبان",
    livestockProject2Desc:
      "مبادرة تركز على تعزيز جودة إنتاج الألبان من خلال المعدات الحديثة وأنظمة مراقبة الجودة",
    livestockProject3Title: "العيادات البيطرية المتنقلة",
    livestockProject3Desc:
      "خدمات بيطرية متنقلة تصل إلى المناطق الريفية النائية لتوفير الرعاية الصحية للثروة الحيوانية",
    livestockProject4Title: "مراكز إنتاج الأعلاف",
    livestockProject4Desc:
      "إنشاء مراكز محلية لإنتاج الأعلاف لضمان التغذية الجيدة بأسعار معقولة",
    livestockFigure1: "12,500",
    livestockFigure1Label: "مربي مستفيد",
    livestockFigure2: "85,000",
    livestockFigure2Label: "رأس من الماشية",
    livestockFigure3: "45%",
    livestockFigure3Label: "زيادة في الإنتاجية",
    livestockFigure4: "280 مليون ريال",
    livestockFigure4Label: "إجمالي الاستثمار",
    sector5Point1: "تحسين السلالات",
    sector5Point2: "العناية البيطرية",
    sector5Point3: "دعم خطوط الإنتاج",

    sector6Title: "المحاصيل البعلية",
    sector6Desc:
      "دعم زراعة المحاصيل البعلية كالقمح والشعير في المناطق الجبلية لتعزيز الأمن الغذائي المحلي",
    sector6Point1: "دعم أنظمة الري الطبيعية",
    sector6Point2: "تدريب المزارعين",
    sector6Point3: "تسويق الحبوب المحلية",

    sector7Title: "الصيد والاستزراع السمكي",
    sector7Desc:
      "ابتكار تقنيات حديثة لتربية الأسماك وتحسين جودة الإنتاج البحري عبر برامج تدريبية وتمويلية",
    sector7Point1: "دعم مشاريع الاستزراع",
    sector7Point2: "تطوير المرافئ",
    sector7Point3: "تسويق المنتجات البحرية",

    sector8Title: "الحرف اليدوية والصناعات الريفية",
    sector8Desc:
      "تمكين الأسر الريفية والحرفيين لتطوير منتجات محلية ذات طابع تراثي تساهم في تنويع مصادر الدخل",
    sector8Point1: "تدريب الحرفيين",
    sector8Point2: "دعم التسويق الإلكتروني",
    sector8Point3: "تعزيز المشاركة المجتمعية",

    sector9Title: "أسر المنتجة",
    sector9Desc:
      "دعم أسر المنتجة لتأسيس مشاريع صغيرة في المنازل التي تقدم دخلًا مستدامًا وتعزز الاستقلالية الاقتصادية",
    sector9Point1: "الدعم المالي والتقني",
    sector9Point2: "تسويق المنتجات",
    sector9Point3: "تدريب تطوير الأعمال",

    exploreSector: "استكشف القطاع",

    // Widgets
    widget1Title: "برامج الدعم الريفي",
    widget1Desc:
      "تعرّف على برامج الدعم المخصصة لصغار المزارعين والأسر المنتجة وقدّم طلبك إلكتروياً بسهولة",
    widget1Btn1: "استعرض برامج الدعم",
    widget1Btn2: "انتقل إلى منصة التقديم",

    widget2Title: "من الريف.. قصصٌ تُروى",
    widget2Desc:
      "نافذة بصرية واستعراض جغرافي واجتماعي وثقافي لمكونات الريف في مختلف مناطق المملكة",
    widget2Btn1: "شاهد القصص المصورة",
    widget2Btn2: "استكشف المعرض الكامل",

    widget3Title: "قطاعات تزدهر.. من الشمال إلى الجنوب",
    widget3Desc:
      "استكشف القطاعات الزراعية المدعومة في مختلف مناطق المملكة، وتعرّف على المشاريع والمبادرات الريفية النشطة بالقرب منك",
    widget3Btn: "استكشف الخريطة التفاعلية",
    widget3Hover: "مرر بالمؤشر لرؤية التفاصيل",

    // News
    newsTitle: "آخر الأخبار",
    newsDesc: 'تابع أحدث الأخبار والمبادرات والفعاليات لبرنامج "ريف السعودية"',
    viewAll: "عرض الكل",
    readMore: "اقرأ المزيد",

    news1Title:
      '"ريف السعودية" يشارك راعياً فضيّاً في المعرض الزراعي السعودي 2025',
    news1Date: "20 أكتوبر 2025",
    news1Excerpt:
      'يشارك برنامج التنمية الريفية الزراعية المستدامة "ريف السعودية" راعياً فضياً في المعرض الزراعي الس��ودي 2025 بمركز الرياض الدولي للمؤتمرات والمعارض، بمشاركة 438 جهة من 35 دولة. ويستعرض "ريف" خلال مشاركته برامجه ومبادراته التي تعزز الأمن الغذائي الوطني وتنمي المجتمعات الريفية الزراعية في مختلف مناطق المملكة.',

    news2Title:
      '"ريف اسعودية" يطلق مبادرة "ريف مستدام" لتعزيز الاستدامة الريفية',
    news2Date: "15 سبتمبر 2025",
    news2Excerpt:
      'أطلق برنامج التنمية الريفية الزراعية المستدامة "ريف السعودية" مبادرة "ريف مستدام" لإبراز أثر برامجه في دعم الأسر الريفية وتعزيز الاستدامة الزراعية والاقتصادية. يأتي ذلك ضمن جهود المملكة لتمكين المزارعين ورفع جودة الحياة، بعد وصول البرنامج إلى أكثر من 87 ألف مستفيد في أنحاء المملكة.',

    news3Title: '"ريف السعودية" يطلق مسرّعة "ريف" لريادة الأعمال الريفية',
    news3Date: "04 مايو 2025",
    news3Excerpt:
      'أطلق برنامج "ريف السعودية" مسرّعة "ريف" لريادة الأعمال لتعزيز ثقافة الابتكار في التنمية والسياحة الريفية. وتستهدف المسرّعة تمكين أكثر من 50 رائد أعمال من اكتساب الخبرات الميدانية من الشركات الكبرى، ودعم التحول الريادي في القطاع الزراعي لتحقيق مستهدفات رؤية 2030.',

    // About
    aboutProgram: "عن البرنامج",
    visionMission: "الرؤية والرسالة",
    objectives: "الأهداف الاستراتيجية",
    whatWeOffer: "ما نقدمه",
    milestones: "الإنجازات",
    annualReports: "التقارير السنوية",
    learnMore: "اعرف المزيد",
    aboutReefSaudi: "عن ريف السعودية",
    aboutDescription:
      "ريف السعودية هي مبادرة وطنية مكرسة لتمكين المجتمعات الريفية من خلال ممارسات زراعية مستدامة، والحفاظ على التراث الثقافي، وخلق فرص اقتصادية في جميع أنحاء المملكة العربية السعودية.",
    vision: "الرؤية",
    visionText:
      "أن نكون القوة الرائدة في التنمية الريفية والزراعة المستدامة في المملكة العربية السعودية.",
    mission: "الرسالة",
    missionText:
      "تمكين المجتمعات الريفية من خلال البرامج المبتكرة والممارسات المستدامة والنمو الاقتصادي.",
    goals: "الأهداف",
    goalsText:
      "خلق تأثير دائم من خلال التعليم والبنية التحتية وبرامج دعم المجتمع.",

    // About Page Content
    aboutPageTitle: "عن ريف السعودية",
    aboutPageSubtitle: "برنامج التنمية الريفية الزراعية المستدامة",
    aboutOpeningText:
      'برنامج التنمية الريفية الزراعية المستدامة "ريف السعودية" هو مبادرة استراتيجية تم إطلاقها لتطوير وتمكين المجتمعات الريفية في المملكة، دعم صغار المزارعين وأسر الريفية المنتجة وتمكينهم. يهدف البرنامج إلى تحقيق النمو الاقتصادي وتحسين جودة الحياة للأسر الريفية، من خلال مجموعة من المبادرات والبرامج التي تعتمد على الاستدامة، تضمن النمو الزراعي والاقتصادي المستدام حتى عام 2030.',

    // About Intro Paragraphs
    aboutIntroPara1:
      'برنامج التنمية الريفية الزراعية المستدامة "ريف السعودية Arabia" هو أحد أهم المبادرات التطويرية الرائدة التي تم إطلاقها من قبل حكومة المملكة العربية السعودية لتعزيز التنمية الريفية الزراعية المستدامة وتحقيق أهداف رؤية المملكة 2030.',
    aboutIntroPara2:
      "يعمل البرنامج على تمكين صغار المزارعين وأسر الريفية المنتجة وتحسين قدراتهم الإنتاجية من خلال الدعم المالي المباشر، برامج التدريب، والإرشاد الفني، بالإضافة إلى المبادرات التي تهدف إلى تطوير البنية التحتية الزراعية عبر مختلف مناطق المملكة.",
    aboutIntroPara3:
      "يدعم أيضًا قطاعات زراعية مستعدة التي تساهم في تحقيق الأمن الغذائي وتنويع الاقتصاد الوطني.",

    // About Establishment Section
    aboutEstablishmentTitle: 'تأسيس برنامج "ريف السعودية"',
    aboutEstablishmentPara1:
      "أطلق الحفاظ على الكعبة والمدينة، الملك سلمان بن عبد العزيز آل سعود (حفظه الله)، البرنامج في 3 جمادى الأولى 1440 هـ، يوافق 9 يناير 2019. يتم تضمين البرنامج منظرياً ضمن وزارة البيئة والمياه والزراعة.",
    aboutEstablishmentPara2:
      "يهدف البرنامج إلى تحقيق التطور الاقتصادي والاجتماعي المتوازن بين مختلف أقسام المجتمع من خلال استخدام موارد الطبيعة والزراعة والمياه المتجددة بشكل مثالي ومستدام.",
    aboutEstablishmentPara3:
      "خصصت الحكومة الملكية SAR 8.75 مليار للفترة الأولى من البرنامج، والتي تستمر حتى عام 2025، بالإضافة إلى SAR 3 مليار من صندوق التنمية الزراعية.",

    // About Establishment Stats
    establishmentStat1: "تم الإطلاق في 9 يناير 2019",
    establishmentStat2: "يغطي جميع مناطق المملكة",
    establishmentStat3: "دعم آلاف المزارعين",
    establishmentStat4: "برنامج تنمية حائز على جوائز",
    establishmentStat5: "ابتكار مستمر",
    establishmentStat6: "أفضل الممارسات العالمية",
    establishmentImageCaption: "تمكين المجتمعات الريفية في جميع أنحاء المملكة",

    // Vision 2030 Section
    vision2030SectionTitle: "ريف السعودية ورؤية 2030",
    vision2030Point1Title: "التنويع الاقتصادي",
    vision2030Point1Text:
      "المساهمة في تنويع الاقتصاد الوطني من خلال تطوير القطاعات الزراعية ودعم ريادة الأعمال الريفية.",
    vision2030Point2Title: "الأمن الغذائي",
    vision2030Point2Text:
      "تعزيز الأمن الغذائي للمملكة من خلال ممارسات زراعية مستدامة وزيادة الإنتاج المحلي.",
    vision2030Point3Title: "التنمية الريفية",
    vision2030Point3Text:
      "تحسين جودة الحياة في المناطق الريفية من خلال البنية التحتية والخدمات والفرص الاقتصادية.",
    vision2030Point4Title: "خلق فرص العمل",
    vision2030Point4Text:
      "خلق فرص عمل مستدامة للمواطنين السعوديين في القطاعات الزراعية والقطاعات ذات الصلة.",
    vision2030Point5Title: "الابتكار والتكنولوجيا",
    vision2030Point5Text:
      "اعتماد التقنيات الزراعية الحديثة وأساليب الزراعة المبتكرة لتعزيز الإنتاجية.",
    vision2030Point6Title: "الاستدامة البيئية",
    vision2030Point6Text:
      "تعزيز ممارسات الزراعة المستدامة التي تحافظ على الموارد الطبيعية وتحمي البيئة.",
    vision2030Point7Title: "الحفاظ على التراث",
    vision2030Point7Text:
      "الحفاظ على التراث الزراعي التقليدي مع تحديث أساليب وتقنيات الإنتاج.",
    vision2030Point8Title: "التنافسية العالمية",
    vision2030Point8Text:
      "وضع المنتجات الزراعية السعودية بشكل تنافسي في الأسواق الإقليمية والدولية.",
    vision2030CTA1: "استكشف الأهداف الاستراتيجية",
    vision2030CTA2: "اكتشف قطاعاتنا",

    // Vision & Mission Section
    visionMissionVisionTitle: "رؤيتنا",
    visionMissionVisionText:
      "أن نكون القوة الرائدة في التنمية الريفية الزراعية المستدامة في المملكة العربية السعودية بحلول عام 2030، وإنشاء مجتمعات ريفية مزدهرة بمستويات معيشة محسّنة ورخاء اقتصادي.",
    visionMissionMissionTitle: "رسالتنا",
    visionMissionMissionText:
      "تمكين صغار المزارعين والأسر المنتجة من خلال برامج الدعم المتكاملة والتقنيات الزراعية الحديثة والممارسات المستدامة التي تضمن الأمن الغذائي والنمو الاقتصادي.",

    // Strategic Objectives
    strategicObj1Title: "التمكين الاقتصادي",
    strategicObj1Text:
      "دعم صغار المزارعين والأسر الريفية لإنشاء مصادر دخل مستدامة من خلال المساعدة المالية الموجهة والتدريب والوصول إلى الأسواق.",
    strategicObj2Title: "الإنتاجية الزراعية",
    strategicObj2Text:
      "تعزيز الإنتاج والكفاءة الزراعية من خلال تقنيات الزراعة الحديثة واعتماد التكنولوجيا وتطوير البنية التحتية.",
    strategicObj3Title: "التطوير التقني",
    strategicObj3Text:
      "بناء القدرة التقنية من خلال برامج تدريبية شاملة وورش عمل ومبادرات نقل المعرفة عبر جميع القطاعات الزراعية.",
    strategicObj4Title: "الابتكار والتكنولوجيا",
    strategicObj4Text:
      "دمج التقنيات الزراعية المتقدمة والحلول الرقمية لتحسين جودة الإنتاج والكفاءة التشغيلية.",
    strategicObj5Title: "الاستدامة البيئية",
    strategicObj5Text:
      "تعزيز ممارسات الزراعة المستدامة التي تحافظ على الموارد الطبيعية وتحمي التنوع البيولوجي وتضمن الصحة البيئية طويلة الأجل.",
    strategicObj6Title: "الوصول إلى الأسواق والتصدير",
    strategicObj6Text:
      "تسهيل الوصول إلى الأسواق للمنتجات المحلية وتعزيز قدرات التصدير للوصول إلى الأسواق الإقليمية والدولية.",
    strategicObj7Title: "الأمن الغذائي",
    strategicObj7Text:
      "المساهمة في الأمن الغذائي للمملكة من خلال زيادة الإنتاج المحلي للمحاصيل الاستراتيجية وتقليل الاعتماد على الواردات.",
    strategicObj8Title: "جودة الحياة",
    strategicObj8Text:
      "تحسين مستويات المعيشة في المجتمعات الريفية من خلال تطوير البنية التحتية والخدمات الأساسية والفرص الاقتصادية.",

    // Organizational Structure
    orgStructureTitle: "الهيكل التنظيمي",
    orgStructureParagraph1:
      "يعمل برنامج ريف السعودية تحت إشراف وزارة البيئة والمياه والزراعة بهيكل تنظيمي واضح مصمم لضمان التنفيذ الفعال والمساءلة. يتضمن الهيكل لجان إشراف استراتيجية وفرق إدارة تشغيلية ووحدات تقنية متخصصة تعمل بالتنسيق لتحقيق أهداف البرنامج.",
    orgStructureParagraph2:
      "يمكّن هذا الإطار التنظيمي من اتخاذ القرارات بكفاءة وتخصيص الموارد وتقديم البرامج في جميع مناطق المملكة. يسهّل التعاون بين مختلف الجهات الحكومية وشركاء التنمية وأصحاب المصلحة لتعظيم تأثير البرنامج وضمان التنمية الريفية المستدامة.",
    orgNodeOperationalEfficiency: "الكفاءة التشغيلية",
    orgNodeClearResponsibilities: "المسؤوليات الواضحة",
    orgNodeRoleIntegration: "تكامل الأدوار",
    orgNodeStrategicAchievement: "الإنجاز الاستراتيجي",
    orgNodeQualityEnhancement: "تعزيز الجودة",
    orgNodeGovernanceStandards: "معايير الحوكمة",

    // Partners Section
    partnersTitle: "شركاؤنا الاستراتيجيون",
    partnersIntro:
      "يعمل ريف السعودية في شراكة وثيقة مع الجهات الحكومية ومنظمات التنمية والمؤسسات البحثية وشركات القطاع الخاص لتقديم الدعم الشامل وتحقيق التنمية الريفية المستدامة في جميع أنحاء المملكة.",
    partnersGovernmentTitle: "الشركاء الحكوميون",
    partnersGov1: "وزارة البيئة والمياه والزراعة",
    partnersGov2: "وزارة الموارد البشرية والتنمية الاجتماعية",
    partnersGov3: "وزارة الاقتصاد والتخطيط",
    partnersGov4: "وزارة السياحة",
    partnersGov5: "وزارة التعليم",
    partnersGov6: "منشآت (الهيئة العامة للمنشآت الصغيرة والمتوسطة)",
    partnersDevelopmentTitle: "شركاء التنمية",
    partnersDev1: "صندوق التنمية الزراعية",
    partnersDev2: "بنك التنمية السعودي",
    partnersDev3: "صندوق التنمية الزراعية (دائري)",
    partnersDev4: "مؤسسة ريف",
    partnersDev5: "مبادرة السعودية الخضراء",
    partnersResearchTitle: "الشركاء البحثيون والأكاديميون",
    partnersResearch1: "جامعة الملك سعود - مركز الأبحاث الزراعية",
    partnersResearch2: "مدينة الملك عبد العزيز للعلوم والتقنية",
    partnersResearch3: "المركز الوطني للتقنية الزراعية",
    partnersPrivateTitle: "شركاء القطاع الخاص",
    partnersPrivate1: "الشركة السعودية للاستثمار الزراعي والحيواني (ساليك)",
    partnersPrivate2: "الشركة الوطنية للتنمية الزراعية (نادك)",
    partnersPrivate3: "شركة المراعي",
    partnersPrivate4: "الشركة السعودية للاستثمار الزراعي والإنتاج الحيواني",
    partnersPrivate5: "شركة تنمية جازان",
    partnersPrivate6: "شركة تبوك للتنمية الزراعية",
    partnersPrivate7: "بنك الاستثمار السعودي - التمويل الزراعي",
    partnersPrivate8: "شبكة موردي المعدات والتقنية الزراعية",
    partnersCTA: "كن شريكاً",
    partnersCTA1: "كن شريكاً",
    partnersCTA2: "عرض جميع الشركاء",

    // Achievements Section
    achievementsFiguresTitle: "إنجازاتنا بالأرقام",
    achievementsFiguresSubtitle: "أرقام تعكس واقعاً ريفياً مزدهراً",
    achievementsTotalBeneficiaries:
      "إجمالي عدد المستفيدين منذ انطلاق البرنامج في 2020",
    achievementsMaleBeneficiaries: "عدد المستفيدين الذكور",
    achievementsFemaleBeneficiaries: "عدد المستفيدات الإناث",
    achievementsFamilies: "عدد الأسر الاقتصادية الريفية المدعومة",
    achievementsFinancialSupport:
      "إجمالي قيمة الدعم المالي منذ انطلاق البرنامج",
    achievementsTrainingCourses: "الدورات التدريبية المقدمة في إطار البرنامج",
    achievementsTrainingBeneficiaries: "عدد المستفيدين من الدورات التدريبية",
    achievementsProjects: "عدد المشاريع قيد الإنشاء",
    achievementsProjectsValue: "قيمة مشاريع البرنامج",
    achievementsFreelanceCerts: "عدد وثائق العمل الحر الصادرة عبر ريف السعودية",
    achievementsRuralProducts:
      "عدد المنتجات (منتجات الميزة النسبية) المدعومة من برنامج ريف السعو��ية",
    achievementsIndicatorsTitle: "مؤشرات الأثر الاقتصادي",
    achievementsUnemploymentRate: "انخفاض معدل البطالة",
    achievementsJobOpportunities: "فرص العمل المحدثة",
    achievementsPopulationStability: "زيادة استقرار السكان",
    achievementsSeedlings: "الشتلات الموزعة",
    achievementsAverageIncome: "متوسط الدخل الشهري (ريال)",
    achievementsHighlightsTitle: "أبرز الإنجازات الرئيسية",
    achievementsHighlight1:
      "تمكين أكثر من 87,000 مستفيد في جميع مناطق المملكة من خلال برامج الدعم الشاملة للتنمية الزراعية والريفية",
    achievementsHighlight2:
      "تنفيذ 129 دورة تدريبية متخصصة تغطي التقنيات الزراعية الحديثة وإدارة الأعمال والممارسات الزراعية المستدامة",
    achievementsHighlight3:
      "إنشاء 64 علامة تجارية للمنتجات الريفية تربط المنتجين المحليين بالأسواق الوطنية والدولية مع شهادات الجودة",
    achievementsHighlight4:
      "تنفيذ تقنيات الزراعة الذكية المبتكرة في أكثر من 105 مشروع، بدمج أجهزة استشعار إنترنت الأشياء والزراعة الدقيقة وتحليل البيانات",
    achievementsHighlight5:
      "دعم رائدات الأعمال من خلال برامج متخصصة في إنتاج العسل والحرف اليدوية والمنتجات الزراعية ذات القيمة المضافة",
    achievementsHighlight6:
      "تحقيق تأثير بيئي كبير من خلال مبادرات الزراعة المستدامة وتوزيع أكثر من 15.5 مليون شتلة",
    achievementsHighlight7:
      "تنظيم منتديات ومعارض زراعية وطنية تجتذب آلاف المشاركين وتعرض قصص نجاح التنمية الريفية",
    achievementsAwardsTitle: "التقدير والجوائز الدولية",
    achievementsAward1Title: "جائزة الأمم المتحدة للخدمة العامة",
    achievementsAward1Desc:
      "تقديراً للتميز في تقديم الخدمات العامة وبرامج التنمية الريفية المبتكرة",
    achievementsAward2Title: "جائزة الأميرة الملكية للتدريب",
    achievementsAward2Desc:
      "تكريماً للإنجازات المتميزة في التدريب وتنمية رأس المال البشري",
    achievementsAward3Title: "جائزة الابتكار العربي",
    achievementsAward3Desc:
      "منحت لتنفيذ التقنيات الزراعية المتطورة وحلول الزراعة الذكية",
    achievementsAward4Title: "التميز في التحول الرقمي",
    achievementsAward4Desc:
      "تقديراً للحلول الرقمية الرائدة في التنمية الزراعية وخدمات المستفيدين",
    achievementsAward5Title: "جائزة حائل للتنمية الإقليمية",
    achievementsAward5Desc:
      "احتفاءً بالتأثير التحولي على المجتمعات الريفية في منطقة حائل",
    achievementsCertificationsTitle: "شهادات الجودة والمعايير",
    achievementsISOTitle: "معتمد ISO 9001:2015",
    achievementsISODesc:
      "عمليات برنامجنا معتمدة وفقاً لمعايير إدارة الجودة الدولية، مما يضمن التميز في تقديم الخدمات والتحسين المستمر ورضا أصحاب المصلحة في جميع مبادراتنا.",
    achievementsGuinnessTitle: "رقم قياسي في موسوعة غينيس",
    achievementsGuinnessDesc:
      "تحقيق رقم قياسي في موسوعة غينيس لأكبر حملة لتوزيع الشتلات، بزراعة أكثر من 15.5 مليون شجرة في المناطق الريفية خلال سنة واحدة من المبادرة.",
    achievementsGuinness1:
      "تحقيق رقم قياسي في موسوعة غينيس لأكبر حملة لتوزيع الشتلات، بزراعة أكثر من 15.5 مليون شجرة في المناطق الريفية خلال سنة واحدة من المبادرة.",
    achievementsISO1Title: "ISO 9001:2015 إدارة الجودة",
    achievementsISO1Desc:
      "معتمد للتميز في أنظمة إدارة الجودة، مما يضمن تقديم خدمات متسقة والتحسين المستمر.",
    achievementsISO2Title: "ISO 22301 استمرارية الأعمال",
    achievementsISO2Desc:
      "معتمد لإدارة استمرارية الأعمال، مما يضمن المرونة والعمليات المستدامة أثناء الاضطرابات.",
    achievementsISO3Title: "ISO 56002 إدارة الابتكار",
    achievementsISO3Desc:
      "معتمد لأنظمة إدارة الابتكار، تعزيز الإبداع ودفع الابتكار المستمر في التنمية الزراعية.",
    achievementsISOSubtitle: "ملتزمون بالمعايير الدولية للتميز والجودة",
    achievementsAwardsSubtitle:
      "معترف به عالمياً للتميز في التنمية الريفية المستدامة",
    achievementsIndicatorsSubtitle:
      "قياس التحول الاقتصادي الإيجابي في المجتمعات الريفية",
    achievementsAward6Title: "جائزة حائل للتنمية الإقليمية",
    achievementsAward6Desc:
      "احتفاءً بالتأثير التحولي على المجتمعات الريفية في منطقة حائل",
    achievementsCTA1: "عرض التقرير الكامل",
    achievementsCTA2: "تحميل الإحصائيات",

    // Beekeeping Sector
    honeySector: "قطاع العسل",
    honeyEcosystem: "الإيكوسيستم",
    beekeepingDevelopmentHoneyProduction:
      "قطاع تطوير وتربية النحل وإنتاج العسل.",
    beekeepingIntro1:
      'يمثل قطاع النحل وإنتاج العسل أحد القطاعات الحيوية التي يدعمها برنامج "ريف السعودية" لما له من دور مباشر في تعزيز الأمن الغذائي، والمحافظة على التوازن البيئي، ورفع كفاءة الإنتاج المحلي، وتمكين مربّي النحل في مختلف مناطق المملكة. ويركّز البرنامج على بناء سلسلة قيمة متكاملة تبدأ من حماية السلالة المحلية وتطوير تقنيات التربية، وتنتهي بتحسين جودة المنتج وتسويقه محلياً وعالمياً.',
    beekeepingIntro2:
      "يعمل البرنامج على تعظيم الأثر الاقتصادي لقطاع العسل من خلال نشر التقنيات الحديثة، ودعم مشاريع البنية التحتية والخدمات الفنية، وتعزيز قدرات النحالين، ورفع مستويات الإنتاجية والكفاءة التشغيلية، بما يسهم في تحسين سبل العيش ودعم المجتمعات الريفية.",
    beekeepingIntro3: " ",
    honeyWork1: "التوسع في تربية ملكات النحل والإنتاج المحلي للطرود",
    honeyWork2: "تطوير ونشر التقنيات الحديثة في إنتاج وتصنيف العسل",
    honeyWork3: "الإدخال المنظم للسلالات الجيدة والمناسبة لتطوير الإنتاج",
    honeyWork4: "تحسين البنية التحتية والخدمات اللوجستية لمربّي النحل",
    honeyWork5: "تقديم خدمات الإرشاد والوقاية والدعم الفني لمربّي النحل",
    honeyWork6:
      "تقديم الدعم المالي والعيني لمربّي النحل في مجال الإنتاج والتسويق",
    honeyWork7:
      "تعزيز قدرات الجمعيات في مجالات تربية النحل وإنتاج وتسويق العسل",
    honeyWork8: "توفير المرعى للنحل في مواسم مختلفة",
    honeyWork9:
      "زراعة أشجار الغابات المحلية في الأودية والمناطق المحمية ومواقع السدود التي تدعم إنتاج العسل",
    honeyWork10: "تعزيز قدرات الكوادر البشرية في إدارة المراعي الطبيعية",
    keyWorkAreasHoneySector: "محاور العمل في قطاع العسل",
    honeyTotalSupportLabel: "إجمالي قيمة الدعم",
    honeyTotalSupportValue: "+197.53 مليون ريال",
    honeyBeneficiariesLabel: "إجمالي عدد المستفيدين",
    honeyBeneficiariesValue: "+14,899 مستفيداً",
    honeyBeneficiariesDetails: "(6,428 رجلاً و8,471 امرأة)",
    honeyGeoDistributionLabel: "التوزيع الجغرافي للمستفيدين",
    honeyProductionLabel: "الإنتاج السنوي للعسل (طن/سنة)",
    honeyProjectsSectionTitle: "مشاريع قطاع تطوير وتربية النحل وإنتاج العسل",
    honeyProjectsCount: "عدد المشاريع: 13 مشروعاً",
    honeyProjectsCountNumber: "13",
    honeyProjectsLabel: "مشاريع",
    honeyProjectsValue: "إجمالي القيمة التقديرية: 98 مليون ريال",
    honeyProjectsValueNumber: "98 مليون",
    honeyProjectsValueLabel: "إجمالي القيمة بالريال",
    honeyProjectsIntro:
      'ينفذ برنامج "ريف السعودية" مجموعة من المشاريع النوعية في قطاع تربية النحل وإنتاج العسل، بهدف حماية السلالة المحلية، ورفع كفاءة الإنتاج، ودعم استدامة هذا القطاع الحيوي في مختلف مناطق المملكة.',
    honeyKeyProjectsTitle: "أبرز مشاريع القطاع",
    honeyFeasibilityTitle: "الجدوى الفنية والاقتصادية للمشاريع",
    honeyFeasibilityIntro:
      "تهدف هذه المشاريع إلى إحداث أثر مستدام في قطاع النحل وإنتاج العسل من خلال:",
    honeyFeasibility1Title: "الحفاظ على الثروة النحلية الوطنية",
    honeyFeasibility1Desc:
      "حماية شاملة من الأمراض والآفات لضمان استدامة التجمعات النحلية",
    honeyFeasibility1:
      "الحفاظ على الثروة النحلية في المملكة من الأمراض والآفات",
    honeyFeasibility2: "زيادة فرص العمل في قطاع تربية النحل",
    honeyFeasibility3: "رفع عدد الطوائف المتكيفة وتطوير خصائصها الوراثية",
    honeyFeasibility4Title: "منتجات نحل محلية على مدار العام",
    honeyFeasibility4:
      "توفير منتجات نحل محلية على مدار العام دون الحاجة إلى الاستيراد",
    honeyFeasibility5: "إعداد وتوفير دليل إرشادي توعوي للنحالين",
    honeyFeasibility6: "الحد من احتمالات الخلط الجيني للسلالة المحلية",
    honeyFeasibility7:
      "بناء قاعدة بيانات متكاملة للأمراض والآفات وتزويد الجهات المعنية بها بشكل دوري",
    honeyFeasibility8Title: "تنشيط الصناعة المحلية",
    honeyFeasibility8: "تنشيط الصناعة المحلية لتلبية احتياجات مشاريع النحالة",
    honeyFeasibility9Title: "التقنيات الحديثة",
    honeyFeasibility9:
      "نشر وتطبيق تقنيات النحالة الحديثة المعتمدة على الأساليب المتقدمة",
    honeyProjectObjectivesTitle: "أهداف المشاريع",
    honeyProjectObjectivesIntro:
      'تركز مشاريع قطاع النحل في برنامج "ريف السعودية" على تحقيق مجموعة من الأهداف الاستراتيجية، أبرزها:',
    honeyProjectObj1Title: "زيادة الطوائف النحلية المحلية",
    honeyProjectObj1:
      "زيادة عدد الطوائف المحلية لتحقيق الاكتفاء الذاتي، ودعم جهود الوزارة في تحصين المناطق المحمية من دخول السلالات المستوردة",
    honeyProjectObj2Title: "خدمات الفحص والتشخيص",
    honeyProjectObj2:
      "تقديم خدمات الفحص والتشخيص والعلاج لأمراض وآفات النحل، إلى جانب تقديم الخدمات الإرشادية للنحالين",
    honeyProjectObj3Title: "مركبات العيادات المتنقلة",
    honeyProjectObj3:
      "توريد وتشغيل مركبات عيادات متنقلة ملحقة بمختبرات متخصصة لتشخيص أمراض وآفات النحل ومجهزة بكامل المعدات اللازمة",
    honeyProjectObj4Title: "الفحص الميداني والعلاج",
    honeyProjectObj4:
      "تنفيذ عمليات فحص وتشخيص ميدانية وتقديم خدمات علاجية سريعة للنحالين في مواقع تواجدهم، بما يسهم في الحفاظ على الثروة النحلية في المملكة",
    honeyKeyWorksTitle: "أهم الأعمال المنفذة",
    honeyParticipationTitle: "المشاركة في المحافل الزراعية",
    honeyParticipationIntro:
      'يعكس برنامج "ريف السعودية" حضوره الفاعل محلياً ودولياً لتعزيز الاستدامة والأمن الغذائي، من خلال:',
    honeyParticipation1: "المشاركة في المعرض الزراعي السعودي",
    honeyParticipation2: "المساهمة في المبادرات الوطنية للأمن الغذائي",
    honeyParticipation3: "التعاون مع القطاع الخاص والشركاء الاستراتيجيين",
    honeyParticipation4:
      "المشاركة في معرض الأغذية العالمي لمنظمة الأغذية والزراعة (FAO)",
    figuresAndIndicators: "الأرقام والمؤشرات",
    annualHoneyProduction: "الإنتاج السنوي من العسل",
    tonsPerYear: "طن سنوياً",
    tons: "طن",
    baseline: "خط أساس",
    currentYear: "السنة الحالية",
    projectedGrowth: "النمو المتوقع",
    tonsGrowth2020to2024: "نمو الإنتاج 2020–2024",
    totalProjectedGrowth: "إجمالي النمو المتوقع",
    overallGrowthRate: "نسبة النمو الإجمالية",
    sixYearPeriod: "فترة 6 سنوات",
    growth104Label: "نمو 104.8%",

    // Key Sector Projects (Beekeeping)
    honeyKeyProject1Title:
      "برنامج تربية النحل في المملكة العربية السعودية (المرحلة الثانية)",
    honeyKeyProject1Desc: "حماية سلالة نحل العسل المحلية.",
    honeyKeyProject2Title: "تأهيل محطة تربية النحل في بلجرشي",
    honeyKeyProject3Title: "إنشاء محطات تربية ملكات النحل وإنتاج الطرود",
    honeyKeyProjectLocationAsirNamas: "عسير – النماص",
    honeyKeyProjectLocationTaif: "الطائف",
    honeyKeyProject4Title: "توريد أدوات النحالة الحديثة",
    honeyKeyProject4Desc: "لنشر التقنيات المتقدمة لدى النحالين.",
    honeyKeyProject5Title: "توريد مختبرات متنقلة",
    honeyKeyProject5Desc: "لفحص وتشخيص أمراض وآفات النحل في المناحل.",
    honeyKeyProject6Title: "توريد عيادات متنقلة مجهزة",
    honeyKeyProject6Desc: "لفحص وتشخيص أمراض وآفات النحل.",

    // Key Implemented Activities (Beekeeping) - Studies & Statistics
    honeyKeyWorksStudiesTitle: "أولاً: الدراسات والإحصاء",
    honeyKeyWorksSurveyIntroBefore: "أُنجزت دراسة استقصائية شملت أكثر من ",
    honeyKeyWorksSurveyIntroBold: "450 مربّي نحل",
    honeyKeyWorksSurveyIntroAfter: "، وأسفرت عن نتائج مهمة من أبرزها:",
    honeyKeyWorksRegisteredLabel:
      "وصول عدد مربّي النحل المسجلين إلى نحو 15 ألف مربٍّ",
    honeyKeyWorksRegisteredCount: "15,000",
    honeyKeyWorksRegisteredDetail: "بينهم قرابة 4 آلاف مربية",
    honeyKeyWorksHivesLabel:
      "بلوغ عدد خلايا النحل في المملكة نحو 1.8 مليون خلية",
    honeyKeyWorksHivesCount: "1.8 مليون",
    honeyKeyWorksHivesDetail: "إجمالي عدد الخلايا في المملكة",
    honeyKeyWorksIncomeLabel:
      "مساهمة إنتاج العسل بنسبة 1% من الدخل القومي الزراعي",
    honeyKeyWorksIncomeDetail: "مساهمة إنتاج العسل",
    honeyKeyWorksJobsLabel: "توفير القطاع لما يقارب 17 ألف وظيفة",
    honeyKeyWorksJobsCount: "17,000",
    honeyKeyWorksJobsDetail: "فرص العمل في القطاع",
    honeyKeyWorksNationalDbTitle: "قاعدة بيانات وطنية لقطاع النحل",
    honeyKeyWorksNationalDbIntro:
      "دعمت هذه الدراسات بناء قاعدة بيانات وطنية لقطاع النحل، شملت جمع بيانات من 80 منحلاً و800 طائفة، وتسجيل متوسط إنتاج العسل بمقدار 6.0 كجم للخلية التقليدية و8.1 كجم للخلية الحديثة لكل موسم، بما يؤكد تفوق الخلايا الحديثة في الإنتاجية بما يقارب ثلاثة أضعاف.",
    honeyKeyWorksApiariesCount: "80",
    honeyKeyWorksApiariesLabel: "منحل",
    honeyKeyWorksColoniesCount: "800",
    honeyKeyWorksColoniesLabel: "طائفة",
    honeyKeyWorksAvgProductionTitle: "متوسط إنتاج العسل للخلية",
    honeyKeyWorksAvgProductionSub:
      "مقارنة كفاءة الخلية التقليدية مقابل الحديثة",
    honeyKeyWorksTraditionalHive: "الخلية التقليدية",
    honeyKeyWorksModernHive: "الخلية الحديثة",
    honeyKeyWorksPerSeason: "إنتاج لكل موسم",
    honeyKeyWorksTraditionalKg: "6.0",
    honeyKeyWorksModernKg: "8.1",
    honeyKeyWorksKeyFinding: "نتيجة رئيسية",
    honeyKeyWorksKeyFindingText:
      "الخلايا الحديثة تنتج ما يقارب ثلاثة أضعاف الخلايا التقليدية",
    honeyKeyWorksProductivityTitle: "ثانياً: الإنتاجية",
    honeyKeyWorksProductivityIntro:
      "شهدت إنتاجية قطاع النحل تطوراً ملحوظاً نتيجة إدخال **التقنيات** **الحديثة**، حيث بلغ:",
    honeyKeyWorksTraditionalAvg: "متوسط إنتاج الخلية التقليدية: 2.2 كجم",
    honeyKeyWorksModernAvg: "متوسط إنتاج الخلية الحديثة: 4.75 كجم",
    honeyKeyWorksTotalAnnual: "إجمالي الإنتاج السنوي للعسل: 4,600 طن",
    honeyKeyWorksModelAreasTitle: "ثالثاً: المناطق الإنتاجية النموذجية",
    honeyKeyWorksModelAreasIntro:
      "تم تحديد وتطوير مناطق إنتاجية نموذجية لقطاع النحل في عدد من مناطق المملكة، شملت:",
    honeyKeyWorksTrainingTitle: "رابعاً: التدريب وبناء القدرات",
    honeyKeyWorksTrainingIntro:
      "عمل البرنامج على رفع كفاءة النحالين وبناء قدراتهم من خلال:",
    honeyKeyWorksModelRegion: "منطقة نموذجية",
    honeyKeyWorksSupportedApiaries: "مناحل مدعومة",
    honeyKeyWorksSupportedApiariesDesc: "تطبيق التقنيات الحديثة في تربية النحل",
    honeyKeyWorksModelBreeders: "مربّون نموذجيون",
    honeyKeyWorksModelBreedersDesc: "قادرون على إنتاج أكثر من 1,000 ملكة وطرد",
    honeyKeyWorksTrainingSessions: "جلسات تدريبية",
    honeyKeyWorksTrainingSessionsDesc: "ورش عمل متخصصة منفذة",
    honeyKeyWorksTrainedBeekeepers: "نحّالون مدربون",
    honeyKeyWorksTrainedBeekeepersDesc:
      "تحسين الممارسات وأساليب تربية النحل العضوي",
    honeyKeyWorksTotalAnnualLabel: "إجمالي الإنتاج السنوي للعسل",
    honeyKeyWorksImprovementReflects:
      "يعكس هذا التحسن أثر تطبيق **الممارسات الحديثة** و**الرقابة الفنية** في رفع كفاءة الإنتاج وجودته.",
    honeyKeyWorksAverageProduction: "متوسط الإنتاج",
    honeyKeyWorksIncrease116: "زيادة 116%+",
    honeyInternationalPartnershipsTitle: "الشراكات الدولية",
    honeyInternationalPartnershipsIntro:
      "بناء شراكات استراتيجية لتطوير قطاع النحل:",
    honeyKeyWorksExploreMap: "استكشف الخريطة التفاعلية لقطاعاتنا الريفية",
    honeyKeyWorksExploreSupport: "استكشف برامج الدعم",

    // About Intro Features
    aboutIntroFeature1Title: "مواءمة رؤية 2030",
    aboutIntroFeature1Text:
      "متوافق مع رؤية المملكة 2030 لتنويع الاقتصاد وتمكين المجتمعات الريفية",
    aboutIntroFeature2Title: "دعم شامل",
    aboutIntroFeature2Text:
      "توفير الدعم المالي والفني والتدريبي لصغار المزارعين والأسر المنتجة",
    aboutIntroFeature3Title: "تنمية مستدامة",
    aboutIntroFeature3Text:
      "تعزيز الممارسات الزراعية المستدامة والحفاظ على البيئة",

    // Vision Section (About Page)
    visionSectionTitle: "الرؤية والرسالة والأهداف",
    visionTitle2: "رؤيتنا",
    visionDescription:
      "أن نكون القوة الرائدة في التنمية الريفية الزراعية المستدامة في المملكة العربية السعودية بحلول عام 2030، بخلق مجتمعات ريفية مزدهرة ذات مستويات معيشية محسّنة ورخاء اقتصادي.",
    missionTitle2: "رسالتنا",
    missionDescription:
      "تمكين صغار المزارعين والأسر المنتجة من خلال برامج دعم متكاملة، وتقنيات زراعية حديثة، وممارسات مستدامة تضمن الأمن الغذائي والنمو الاقتصادي.",
    goalsTitle2: "أهدافنا الاستراتيجية",
    goal1: "زيادة الإنتاجية الزراعية والأمن الغذائي",
    goal2: "تحسين جودة الحياة في المجتمعات الريفية",
    goal3: "خلق فرص عمل مستدامة في القطاعات الزراعية",
    goal4: "الحفاظ على التراث الثقافي والممارسات التقليدية",

    // Objectives Section (About Page)
    objectivesSectionTitle: "الأهداف الاستراتيجية",
    objective1Title: "التمكين الاقتصادي",
    objective1Desc:
      "دعم صغار المزارعين والأسر المنتجة لإنشاء مصادر دخل مستدامة من خلال المساعدة المالية والفنية الموجهة.",
    objective2Title: "التنمية الزراعية",
    objective2Desc:
      "تعزيز الإنتاجية الزرعية من خلال التقنيات الحديثة، وبرامج التدريب، وتطوير البنية التحتية في جميع القطاعات المدعومة.",
    objective3Title: "الأمن الغذائي",
    objective3Desc:
      "المساهمة في الأمن الغذائي للمملكة من خلال دعم القطاعات الزراعية الاستراتيجية وتقليل الاعتماد على الواردات.",
    objective4Title: "التحول الريفي",
    objective4Desc:
      "تحسين جودة الحياة في المناطق الريفية من خلال برامج تنموية شاملة تعالج الاحتياجات الاقتصادية والاجتماعية والبنية التحتية.",

    // Benefits Section (About Page)
    benefitsSectionTitle: "ما نقدمه",
    benefitsSubtitle: "دعم شامل للتنمية الريفية",
    benefit1Title: "الدعم المالي",
    benefit1Desc:
      "الوصول إلى المنح والقروض والإعانات للمشاريع الزراعية والشركات الصغيرة.",
    benefit2Title: "التدريب الفني",
    benefit2Desc:
      "ورش عمل وبرامج تدريبية عملية لبناء المهارات وتحسين جودة الإنتاج.",
    benefit3Title: "الإرشاد الزراعي",
    benefit3Desc:
      "توجيه خبراء حول أفضل الممارسات والتقنيات الحديثة وأساليب الزراعة المستدامة.",
    benefit4Title: "دعم التسويق",
    benefit4Desc:
      "المساعدة في تسويق المنتجات والعلامات التجارية والوصول إلى الأسواق المحلية والدولية.",
    benefit5Title: "تطوير البنية التحتية",
    benefit5Desc:
      "الاستثمار في البنية التحتية الريفية بما في ذلك الطرق وأنظمة الري ومرافق التخزين.",
    benefit6Title: "البحث والابتكار",
    benefit6Desc: "دعم البحث الزراعي واعتماد التقنيات المبتكرة.",

    // Milestones Section (About Page)
    milestonesSectionTitle: "الإنجازات الرئيسية",
    milestone1Year: "2019",
    milestone1Title: "إطلاق البرنامج",
    milestone1Desc:
      "الإطلاق الرسمي لبرنامج ريف السعودية من قبل خادم الحرمين الشريفين",
    milestone2Year: "2021",
    milestone2Title: "مرحلة التوسع",
    milestone2Desc:
      "توسيع الدعم ليشمل جميع مناطق المملكة الـ 13، والوصول إلى أكثر من 50,000 مستفيد",
    milestone3Year: "2023",
    milestone3Title: "مركز الابتكار",
    milestone3Desc: "إطلاق مراكز الابتكار الزراعي ومسرّعات ريادة الأعمال",
    milestone4Year: "2025",
    milestone4Title: "تحقيق الأهداف",
    milestone4Desc:
      "الوصول إلى أكثر من 87,000 مستفيد باستثمار إجمالي قدره 11.75 مليار ريال",

    // Contact
    contactTitle: "تواصل معنا",
    contactSubtitle: "نحن هنا لدعم رحلتك في التنمية الريفية",
    contactName: "الاسم الكامل",
    contactEmail: "البريد الإلكتروني",
    contactPhone: "رقم الهاتف",
    contactSubject: "الموضوع",
    contactMessage: "الرسالة",
    contactSubmit: "إرسال الرسالة",
    contactInfo: "معلومات التواصل",
    contactAddress: "الرياض، المملكة العربية السعودية",
    contactEmailLabel: "البريد الإلكتروني",
    contactPhoneLabel: "الهاتف",

    // Footer
    footerTagline: "تمكين المجتمعات الريفية من أجل مستقبل مستدام",
    quickLinks: "روابط سريعة",
    supportServices: "خ��مات الدعم",
    followUs: "تابعنا",
    copyright: "© 2025 ريف السعودية. جميع الحقوق محفوظة.",

    // Footer - Detailed
    overview: "نظرة عامة",
    mediaCenter: "مركز الإعلام",

    sectorsServices: "القطاعات والخدمات",
    beekeeping: "تربية النحل",
    coffee: "البن السعودي",
    fruits: "الفواكه",
    rainfedCrops: "محاصيل البعلية",
    rosesAromatic: "الورد والنباتات العطرية",
    aromaticPlants: "نباتات العطر",
    livestock: "الثروة الحيوانية والألبان",
    fishing: "الصيد والاستزراع السمكي",
    handicrafts: "الحرف اليدوية",
    agritech: "تكنولوجيا الزراعة",
    reefAcademy: "كليات ريف",

    supportResources: "الدعم والموارد",
    howToApply: "كيفية التقديم",
    termsConditions: "الشروط والأحكام",
    faqs: "أسئلة شائعة",
    submitComplaint: "تقديم شكوى",
    reportCorruption: "الإبلاغ عن الفساد",
    askSpokesperson: "سؤال المتحدث الرسمي",

    importantLinks: "روابط مهمة",
    vision2030: "رؤية المملكة 2030",
    nationalPortal: "البوابة الوطنية",
    openDataPortal: "بوابة البيانات المفتوحة",
    eParticipation: "مشاركة إلكترونية",
    mewa: "وزارة البيئة والمياه والزراعة",
    interactiveMap: "خريطة تفاعلية",
    galleryBook: "معرض وكتاب بصري",

    accessibilityTools: "أدوات الوصول",
    copyrightFull: "جميع حقوق الملكية الفكرية محجوزة لبرنامج ريف السعودية",
    copyrightSupervision: "تحت إشراف وزارة البيئة والمياه والزراعة",

    // Beekeeping Page
    beekeepingHeroTitle: "قطاع تربية النحل",

    // Roses & Aromatic Plants Sector
    rosesHeroTitle: "قطاع تنمية زراعة الورد وتجارة الورد.",
    rosesIntro1:
      "يمثّل قطاع الورد والنباتات العطرية أحد القطاعات النوعية الواعدة التي يعمل عليها برنامج ريف السعودية، لما يحمله من قيمة اقتصادية وثقافية وبيئية عالية، ولارتباطه التاريخي بعدد من مناطق المملكة، وعلى رأسها الطائف وجازان وعسير ومكة المكرمة والباحة والمدينة المنورة.",
    rosesIntro2:
      "ويهدف البرنامج إلى تطوير سلسلة القيمة الكاملة للورد والنباتات العطرية، بدءاً من زراعة الشتلات وتحسين السلالات، مروراً بعمليات الحصاد والتجفيف والتقطير والتصنيع، وصولاً إلى التسويق المحلي والعالمي لزيت الورد وماء الورد والمنتجات العطرية المرتبطة به.",
    rosesIntro3:
      "كما يسهم البرنامج في دعم صغار المزارعين، وتمكينهم من تطبيق التقنيات الحديثة، وتحقيق دخل مستدام، والمحافظة على هذا الإرث الزراعي المتوارث منذ مئات السنين، كشكل من أشكال الهوية الثقافية والاقتصادية للمملكة.",

    rosesObj1: "تحقيق الريادة في إنتاج وتصنيع وتسويق الورد",
    rosesObj2:
      "زيادة دخل صغار المنتجين بعد إضافة قيمة من خلال التصنيع والتسويق",
    rosesObj3: "تصدير منتجات الورد إلى دول الخليج وأوروبا",
    rosesObj4: "خلق العديد من الوظائف خاصة الفرص النسائية",

    keyAreasOfAction: "محاور العمل في قطاع الورد",
    rosesAction1:
      "تطوير التقنيات المناسبة لزراعة وإنتاج الورد وعمليات تصنيفه وتخزينه وعمليات التحضير",
    rosesAction2: "توفير الدعم المالي والبنى المؤسسية لمنتجي الورد",
    rosesAction3: "إنشاء معامل للتقطير",
    rosesAction4: "إدخال تقنيات الحصاد الآلي وما بعد الحصاد للتقليل من الفاقد",
    rosesAction5:
      "إنشاء وتعزيز قدرات الجمعيات الزراعية المتخصصة لدعم صغار المنتجين",
    rosesAction6: "دعم وتطوير أساليب التسويق الإلكتروني للورد ومنتجاته",
    rosesAction7:
      "زراعة أشجار الحراج مثل سياج الأشجار التحوطي ومصدّات الرياح والأنسجة الحية",
    rosesAction8: "إنشاء سدود صغيرة وحواجز اعتراضية لحصاد مياه الأمطار",
    rosesAction9: "تطوير ونشر استخدام أنظمة الري الحديثة في الري التكميلي",
    rosesAction10:
      "إنشاء حقول إرشادية للبحوث والدعم الفني لمنتجي الورد وتدريب الكوادر الفنية",
    rosesAction11:
      "إنشاء وتطوير المشاتل المتخصصة في إنتاج فسائل الأصناف الهامة من الورد وتوزيع تلك الفسائل على المنتجين",

    // Figures and Indicators
    figuresIndicators: "الأرقام والمؤشرات",
    rosesImpactGrowth: "الأثر والنمو",
    rosesFiguresSubtitle:
      "رؤى قائمة على البيانات لتحوّل قطاع الورد والنباتات العطرية في المملكة",
    empoweringLocalProducers: "تمكين المنتجين المحليين",
    totalSupport: "إجمالي الدعم",
    totalSupportValue: "إجمالي قيمة الدعم",
    totalBeneficiaries: "إجمالي المستفيدين",
    million: "مليون",
    men: "رجال",
    women: "نساء",
    beneficiariesByRegion: "المستفيدون حسب المنطقة",
    millionSAR: "مليون ريال",
    beneficiaries: "عدد المستفيدين",
    supportedProducts: "المنتجات المدعومة",
    jasmine: "الفل",
    henna: "الحناء",
    rose: "الجوري",
    geographicalDistribution: "التوزيع الجغرافي للمستفيدين",
    saudiMapAlt: "خريطة المملكة العربية السعودية",
    taif: "الطائف",
    seedlings: "شتلة",
    varieties: "أصناف",
    grapes: "العنب",
    figs: "التين",
    apricots: "المشمش",
    almonds: "اللوز",
    jazan: "جازان",
    asir: "عسير",
    makkah: "مكة المكرمة",
    baha: "الباحة",
    madinah: "المدينة المنورة",
    hail: "حائل",
    riyadh: "الرياض",
    tabuk: "تبوك",
    northernBorders: "الحدود الشمالية",
    jouf: "الجوف",
    najran: "نجران",
    easternProvince: "المنطقة الشرقية",
    qassim: "القصيم",
    ofTotal: "من الإجمالي",
    productionGrowth: "نمو الإنتاج",
    productionGrowthDesc:
      "الأرقام للفترة 2020–2024 وتظهر نمواً متسارعاً في إنتاج الورود والنباتات العطرية.",
    flowersPerYear: "زهرة / سنة",
    target: "مستهدف",
    millionShort: "م",
    billionShort: "مليار",

    // Rose and Aromatic Plants Sector Projects
    sectorProjects: "مشاريع القطاع",
    rosesAromaticProjectsTitle: "مشاريع قطاع الورد والنباتات العطرية",
    numberOfProjects: "عدد المشاريع",
    projects: "مشروع",
    totalEstimatedValue: "القيمة الإجمالية المقدرة",
    projectsIntro:
      'يعمل برنامج "ريف السعودية" على تنفيذ حزمة من المشاريع النوعية في قطاع الورد والنباتات العطرية، بهدف رفع الإنتاج المحلي، وتعزيز سلاسل القيمة، وتطوير الصناعات المرتبطة بالعطور والمستخلصات النباتية في مختلف مناطق المملكة.',
    keySectorProjects: "أبرز مشاريع القطاع",
    project1: "إنشاء مدن متخصصة للورود والنباتات العطرية في منطقة جازان.",
    project2: "إنشاء مشاتل متخصصة للورود والنباتات العطرية في منطقة جازان.",
    project3:
      "إنشاء مصنع لاستخلاص الزيوت العطرية من الورود والنباتات العطرية ومشاتل في محافظة أبو عريش (المنتزه الوطني).",
    project4:
      "تقديم الدعم الاستشاري لتنفيذ المدارس الحقلية باستخدام تطبيقات الذكاء الاصطناعي.",
    project5:
      "تطوير قاعدة بيانات لمزارعي الورد والفل والكافور والعسل لرصد الاحتياجات من الأيدي العاملة.",
    project6:
      "توريد أجهزة وأدوات ومعدات مختبرات تحليل المياه والتربة لعدد من مناطق المملكة.",
    project7: "إنشاء مركز الورد في مدينة الطائف.",
    project8:
      "إنشاء وتجهيز معمل لزراعة الأنسجة لإنتاج ورد عالي الجودة في منطقة الرياض.",
    project9:
      "توريد بيوت محمية ومظلات زراعية وإنشاء شبكات ري لمدن الورد والنباتات العطرية في جازان.",
    project10: "تأهيل معمل زراعة الأنسجة لإنتاج ورد عالي الجودة في الرياض.",
    project11:
      "تطبيق نظم الري المستدامة والتقنيات الزراعية الحديثة لصغار مزارعي الورد في محافظة الطائف.",
    project12:
      "توريد عيادات متنقلة لتشخيص أمراض وآفات الورد والنباتات الطبية والعطرية.",
    project13:
      "توريد أجهزة للوحدة الفنية الإرشادية للتصوير والمونتاج لفروع الوزارة في المناطق.",
    technicalEconomicFeasibility: "الجدوى الفنية والاقتصادية للمشاريع",
    comprehensiveFeasibilityStudies: "دراسات الجدوى الشاملة",
    feasibilityIntro:
      "تسهم مشاريع قطاع الورد والنباتات العطرية في تحقيق مجموعة من المكاسب الاستراتيجية، من أبرزها:",
    feasibility1: "زيادة إنتاج الورد المحلي وتقليل الاعتماد على الاستيراد.",
    feasibility2: "تعزيز الإيرادات المحلية وخلق فرص عمل جديدة للمزارعين.",
    feasibility3:
      "ترويج التراث الزراعي المرتبط بزراعة الورد كجزء من الهوية الثقافية للمناطق.",
    feasibility4:
      "دعم الممارسات الزراعية المستدامة في إدارة الموارد المائية والتربة.",
    feasibility5: "تحقيق التوازن بين النمو الاقتصادي والحفاظ على البيئة.",
    feasibility6: "الحفاظ على التنوع البيولوجي للنباتات العطرية.",
    feasibility7: "تشجيع تبني أفضل الممارسات الزراعية لدى صغار المزارعين",
    feasibility8: "تنويع المحاصيل العطرية لتحقيق دخل مستدام.",
    feasibility9:
      "تقليل التكاليف اللوجستية عبر توطين الصناعة محليًا من خلال معامل التقطير والمعالجة.",
    feasibility10: "إنشاء بيئات نباتية متنوعة تدعم الاستدامة البيئية.",

    projectObjectives: "أهداف المشاريع",
    projectObjectivesIntro:
      'تركز مشاريع قطاع الورد والنباتات العطرية في برنامج "ريف السعودية" على تحقيق الأهداف التالية:',
    objective1:
      "زيادة إنتاج المملكة من الورد لتلبية احتياجات السوق المحلي وتقليل الاعتماد على الاستيراد.",
    objective2: "إنشاء معامل متخصصة لاستخلاص زيت الورد وماء الورد العطري.",
    objective3: "دعم وتطوير صناعة العطور المحلية.",
    objective4:
      "تمكين تصدير منتجات الورد والنباتات العطرية إلى الأسواق الخليجية والعالمية، بما يسهم في تحقيق مستهدفات رؤية المملكة 2030.",

    keyImplementedActivities:
      "أهم الأعمال المنفذة في قطاع الورد والنباتات العطرية",

    activity1Title: "إنشاء الحقول الإرشادية",
    activity1Desc:
      "تم تنفيذ 12 حقلاً إرشادياً لتطوير زراعة الورد والفل في منطقتي الطائف وجازان، مع تطبيق أحدث الممارسات في التقليم والتسميد والحماية من الآفات.",
    activity1Sessions:
      "وشملت الجهود عقد لقاءات توعوية مع 120 مزارعاً، ما أسهم في:",
    activity1Stat1: "زيادة إنتاج الحقول بنسبة 100%",
    activity1Stat2:
      "رفع متوسط الإنتاج من 300–400 زهرة إلى 1200–1400 زهرة لكل شجيرة",
    activity1Fields: "12 حقل إرشادي",
    activity1Farmers: "120 مزارعاً",

    activity2Title: "إدخال تقنية التبريد",
    activity2Desc: "جرى تسليم 6 حاويات تبريد لنقل الورد بعد الحصاد، بهدف:",
    activity2Point1: "الحفاظ على جودة الورد قبل عمليات التقطير",
    activity2Point2: "إطالة العمر التخزيني للزهور",
    activity2Point3: "تقليل نسبة الفاقد وتحسين كفاءة سلسلة الإمداد",
    activity2Containers: "6 حاويات تبريد",

    activity3Title: "إدخال تقنية الكومبوست",
    activity3Desc:
      "تم البدء بإنتاج الكومبوست من مخلفات تقطير الورد، واستخدامه كسماد طبيعي وصديق للبيئة، بما يعزز الاستدامة البيئية ويخفض تكاليف التسميد.",

    activity4Title: "خريطة زراعة وإنتاج الورد",
    activity4Desc:
      "أُعدّت دراسة فنية باستخدام تقنيات الاستشعار عن بُعد لرسم خريطة دقيقة لزراعة الورد، أسفرت عن:",
    activity4Suitable: "تحديد المساحات الصالحة للزراعة: 621 هكتاراً",
    activity4Current: "المساحة المزروعة حاليًا: 346 هكتاراً",
    activity4Expansion: "إمكانية التوسع المستقبلي: 275 هكتاراً",
    activity4Standards:
      "كما تم إعداد مواصفات زيت الورد السعودي لضمان الجودة والقدرة التنافسية في الأسواق.",

    activity5Title: "ورش العمل والزيارات الميدانية",
    activity5Desc: "شملت أنشطة التدريب والمتابعة:",
    activity5Visits: "35 زيارة ميدانية لمتابعة أنظمة الري",
    activity5Training: "تدريب 149 مزارعاً على التقنيات الحديثة",
    activity5Jasmine: "زيارات لمزارع الفل في الطائف",
    activity5Monitoring: "متابعة برامج مكافحة الآفات والأمراض",
    activity5Impact: "وقد أسهم ذلك في رفع كفاءة الإنتاج وتحسين جودة المحاصيل.",
    activity5FieldVisits: "35 زيارة ميدانية",
    activity5TrainedFarmers: "149 مزارعاً",

    exploreInteractiveMap: "استكشف الخريطة التفاعلية لقطاعاتنا الريفية",
    exploreSupportPrograms: "استكشف برامج الدعم",

    mainObjectivesSector: "الأهداف الرئيسية للقطاع",
    beekeepingObj1:
      "إدخال ونشر الأنظمة والتقنيات الحديثة في تربية النحل وإنتاج وتصنيف العسل",
    beekeepingObj2:
      "إضافة قيمة عالية وخلق فرص عمل للسعوديين خاصة للشباب والشابات",
    beekeepingObj3: "زيادة دخل مربّي النحل وتحسين مستوى معيشتهم",
    beekeepingObj4:
      "الحفاظ على السلالة المحلية وتحسين جودتها لمنافسة وتقليل الاعتماد على الاستيراد",

    mainServicesSector: "الخدمات الرئيسية المقدمة من القطاع",
    beekeepingService1Title: "الدعم المالي",
    beekeepingService1Desc:
      "تقديم قروض ميسرة ومنح مالية مباشرة لإنشاء مناحل جديدة أو توسيع العمليات القائمة.",
    beekeepingService2Title: "التدريب الفني",
    beekeepingService2Desc:
      "تنظيم ورش عمل ودورات تدريبية حول تقنيات تربية النحل الحديثة، وإدارة الأمراض، وإنتاج عسل عالي الجودة.",
    beekeepingService3Title: "الاستشارات الفنية",
    beekeepingService3Desc:
      "تقديم خدمات استشارية متخصصة من قبل خبراء في مجال تربية النحل وصحة الخلايا وتربية الملكات.",
    beekeepingService4Title: "دعم التسويق",
    beekeepingService4Desc:
      "تسهيل قنوات التسويق إلى الأسواق المحلية والدولية ودعم المشاركة في المعارض والأسواق المتخصصة.",

    beneficiariesSector: "المستفيدون من القطاع",
    beekeepingBeneficiary1: "مربو النحل الصغار والمتوسطون",
    beekeepingBeneficiary2: "الأسر المنتجة الراغبة في دخول مجال تربية النحل",
    beekeepingBeneficiary3: "الشباب رواد الأعمال في المناطق الريفية",
    beekeepingBeneficiary4:
      "التعاونيات المحلية المتخصصة في إنتاج العسل وتسويقه",

    futurePlans: "الخطط المستقبلية",
    beekeepingFuture1:
      "إنشاء مراكز متخصصة لتربية النحل في المناطق الرئيسية للإنتاج في المملكة.",
    beekeepingFuture2: "إطلاق برنامج شهادة العسل السعودي لضمان الجودة والنقاء.",
    beekeepingFuture3:
      "تعزيز الشراكات مع المراكز البحثية والجامعات لتطوير القطاع.",
    beekeepingFuture4: "توسيع فرص التصدير للعسل السعودي إلى الأسواق العالمية.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
