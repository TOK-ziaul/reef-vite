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
    openDropdown: "Open dropdown menu",
    news: "News & Events",
    latestNews: "Latest News",
    newsArchive: "News Archive",
    language: "العربية",
    // Header dropdowns (additional)
    initiatives: "Initiatives",
    impactStats: "Impact & Statistics",

    beneficiariesGuide: "Beneficiaries Guide",
    // Sectors (nav)
    flowers: "Roses & Flowers",
    aromatic: "Aromatic Plants",
    // Sustainability Page
    sustainabilityHeroTitle: "Sustainable Initiatives",
    sustainabilityHeroSubtitle:
      "Our commitment to environmental stewardship, resource conservation, and long-term agricultural sustainability across Saudi Arabia's rural communities",
    learnMore: "Learn More",
    downloadReport: "Download Report",
    sustainableInitiatives: "Sustainable Initiatives",
    waterEfficiency: "Water Efficiency",
    beneficiaries: "Beneficiaries",
    comingSoon: "Coming Soon",
    sustainabilityContentComingSoon:
      "More sustainability content will be available soon.",

    // Sustainability Content
    sustIntroP1:
      "Sustainable initiatives embody one of the main pillars in the directions of the 'Reef Saudi Arabia' program towards achieving long-term rural development, based on empowering local communities, enhancing agricultural production efficiency, and linking natural resources with sustainable economic and social values. These initiatives stem from a comprehensive vision aimed at transforming agricultural activity from a traditional practice into an integrated production system that meets the requirements of food security, environmental sustainability, and economic empowerment.",
    sustIntroP2:
      "The program focuses on investing in latent rural potential, through supporting small holdings, improving the quality of production chains, and enhancing skills and knowledge, through an integrated system of programs and projects that balance the economic, social and environmental dimensions, and place people and the environment at the heart of the development process.",

    // Model Farms Project
    modelFarmsTitle: "Firstly: Model Farms Project",
    modelFarmsBadge: "Model Farms",
    modelFarmsP1:
      "The project targets the selection of a group of leading farmers and the rehabilitation of the infrastructure of their farms, especially with regard to rationalized irrigation networks, in addition to providing them with the necessary agricultural inputs to become capable of adopting the best modern and sustainable agricultural practices.",
    modelFarmsP2:
      "These model farms are also used as field training centers through holding field workshops to train the rest of the farmers on modern techniques in sustainable agriculture, rationalizing water use, increasing productivity and improving product quality.",
    modelFarmsAchievementTitle: "The project has achieved the following:",
    modelFarmsRegions: "Different regions",
    modelFarmsCount: "Model farms",
    modelFarmsTrainees: "Trainees",
    modelFarmsWorkshops: "Field training workshops",
    modelFarmsDonums: "Donums implemented",
    modelFarmsVisits: "Support and supervision field visits",

    // Agricultural Extension
    agricExtensionTitle: "Second: Agricultural Extension",
    agricExtensionIntro:
      "Work has been done to develop an integrated agricultural extension system that includes digitization, awareness, direct training, and knowledge products dedicated to smallholder farmers, through several interconnected paths:",

    // Digital Field Schools
    digitalFieldSchoolsTitle: "1. Digital Field Schools:",
    digitalFieldSchoolsDesc:
      "The areas and activities of digital field schools have been identified, numbering 39 schools distributed across:",
    digitalFieldSchoolsCrops: "Field crops: Wheat, sorghum, millet",
    digitalFieldSchoolsFruits: "Fruits: Subtropical fruits",
    digitalFieldSchoolsBeekeeping: "Beekeeping and honey production",
    digitalFieldSchoolsRoses: "Roses",
    digitalFieldSchoolsFish: "Fish",
    digitalFieldSchoolsAromatics: "Aromatic plants",
    digitalFieldSchoolsFarms:
      "About 650 farms were selected as application points for digital field schools.",
    digitalFieldSchoolsPlatform:
      "An electronic platform and website were designed to broadcast workshops, organize training content, and enable later reference.",
    digitalFieldSchoolsTraining:
      "Farmers were trained on workshop implementation, professional photography, and participation through the platform.",

    // Extension Messages
    extensionMessagesTitle: "2. Extension Messages:",
    extensionMessagesDesc:
      "Comprehensive extension messages were prepared for various agricultural and livestock activities, in coordination with the General Administration of Agricultural Extension.",
    extensionMessagesApp:
      "Development of the Murshiduk Agricultural Guide app and publishing messages through it.",
    extensionMessagesPublished:
      "Preparation and publication of 74 extension messages on agricultural cooperatives.",
    extensionMessagesBeneficiaries:
      "More than 500 cooperative members benefited.",
    extensionMessagesPrograms:
      "Development of 7 training programs for cooperatives.",
    extensionMessagesLeaders:
      "Training of 9 association leaders in Makkah, Jazan, and Northern Borders regions.",

    // Extension Meetings
    extensionMeetingsTitle: "3. Extension Meetings and Visits:",
    extensionMeetingsIntro:
      "Implementation of 22 field sessions for approximately 602 farmers.",
    extensionMeetingsTopicsTitle: "Sessions covered:",
    extensionMeetingsSessions: "field sessions implemented",
    extensionMeetingsFarmers: "farmers",
    extensionMeetingsTopic1: "Modern irrigation techniques",
    extensionMeetingsTopic2: "Good agricultural practices",
    extensionMeetingsTopic3: "Pruning and fertilization",
    extensionMeetingsTopic4: "Improving bee and honey productivity",
    extensionMeetingsTopic5: "Modern techniques in plant and animal production",

    // Knowledge Exchange Networks
    knowledgeNetworksTitle: "4. Knowledge Exchange Networks:",
    knowledgeNetworksDesc:
      "Creation of 4 digital groups for knowledge exchange between farmers via social media.",
    knowledgeNetworksBeekeeping: "Beekeeping",
    knowledgeNetworksBeekeepingParticipants:
      "Beekeeping (17 participants – Al-Baha, Asir, Jazan)",
    knowledgeNetworksOrganic: "Organic beekeeping",
    knowledgeNetworksOrganicParticipants:
      "Organic beekeeping (13 participants – Medina and Makkah)",
    knowledgeNetworksRoses: "Rose cultivation",
    knowledgeNetworksRosesParticipants:
      "Rose cultivation (18 participants – Taif)",
    knowledgeNetworksFruits: "Fruits",
    knowledgeNetworksFruitsParticipants:
      "Fruits (8 participants – Al-Baha)",

    // Agricultural Marketing
    agricMarketingTitle: "Third: Agricultural Marketing",

    // Digital System
    digitalMarketSystemTitle:
      "1. Digital System for Agricultural Market Information:",
    digitalMarketSystemItem1:
      "Preparing project tender documents and linking to Ministry platform",
    digitalMarketSystemItem2: "Announcing competition for qualified companies",
    digitalMarketSystemItem3: "Sorting offers and selecting system implementer",
    digitalMarketSystemItem4:
      "Recruiting specialized agricultural marketing expert",
    digitalMarketSystemGoalsTitle: "The system aims to:",
    digitalMarketSystemGoal1: "Support sales decisions",
    digitalMarketSystemGoal2: "Improve producers' access to markets",
    digitalMarketSystemGoal3:
      "Provide price information, locations, and sales points",

    // Post-Harvest Operations
    postHarvestTitle: "2. Post-Harvest Operations:",
    postHarvestItem1: "Study of post-harvest operations for small producers",
    postHarvestItem2:
      "Preparation of agricultural marketing services development plan",
    postHarvestItem3: "Inventory of required equipment",
    postHarvestItem4:
      "Preparation of technical guides for post-harvest operations",

    // Sales Points
    salesPointsTitle: "3. Sales Points:",
    salesPointsIntro:
      "Sales points dedicated to supporting and marketing rural family products have been established in several regions, including:",
    salesPoint1: "Rural café at Qalf Farm - Al-Dayer Bani Malik",
    salesPoint2: "Rural café at Al-Afia Farm - Taif Governorate",
    salesPoint3: "Coffee roastery in Al-Dayer Bani Malik Governorate",
    salesPoint4: "Honey exhibition in Dumat Al-Jandal Governorate",
    salesPoint5: "Jasmine (fila) exhibition in Abu Arish Governorate",
    salesPoint6: "Rainfed crops exhibition in Al-Lith Governorate",
    salesPointsImpact:
      "These points have contributed to enhancing income, diversifying its sources, and connecting producers directly with consumers.",

    // Impact and Statistics
    impactStatsTitle: "Impact and Statistics",
    impactStatsSubtitle: "Direct and growing economic impact",
    impactStatsIntro:
      "The social, economic and environmental impact of Reef Saudi Arabia program initiatives has been measured through quantitative results and precise indicators, most notably:",

    // Training and Capacity Building
    trainingCapacityTitle: "1. Training and Capacity Building:",
    trainingCourses: "training courses in 2024",
    trainingParticipants: "participants in various rural sector fields",
    trainingMen: "Men",
    trainingWomen: "Women",
    trainingFieldsTitle: "Fields covered:",
    trainingBeekeeping: "Beekeeping and honey production",
    trainingBeekeepingCount: "participants",
    trainingRainfed: "Rainfed grains",
    trainingLivestock: "Livestock",
    trainingFisheries: "Fisheries",
    trainingValueAdded: "Value added",
    trainingCooperatives: "Agricultural cooperatives",
    trainingExtension: "Agricultural extension",
    trainingCapacityBuilding: "Training and capacity building",
    trainingCategoriesTitle: "Trainees classification:",
    trainingEmployees: "Employees",
    trainingFarmers: "Farmers and cooperative members",

    // Study Tours
    studyToursTitle: "2. Study Tours:",
    studyToursDesc: "Number of study tours during 2024:",
    studyToursTotal: "tours",
    studyToursInternal: "Internal",
    studyToursExternal: "External",

    sustImpactCTA: "Explore supported agricultural sectors",
    sustMarketingCTA1: "Review program objectives",
    sustMarketingCTA2: "Explore supported sectors",
    sustPartnersCTA1: "Explore agricultural sectors",
    sustPartnersCTA2: "Learn about Reef sustainable initiatives",

    // Strategic Partnerships
    partnershipsTitle: "Sustainability Partners",
    partnershipsIntro:
      "In the context of enhancing integrated work between government entities, the private sector, academic, sports and community institutions, Reef Saudi Arabia program signed 12 strategic cooperation memoranda aimed at expanding sustainable development impact in rural areas, and raising efficiency of productive, financial and marketing projects for families, farmers and entrepreneurs.",
    partnershipsSubtitle:
      "Cooperation memoranda included the following entities:",

    // Partners
    partnerNadec: "Nadec Company",
    partnerNadecDesc:
      "Supporting agricultural activities and developing sustainable supply chains.",
    partnerDan: "DAN Company",
    partnerDanDesc: "Enhancing food innovation and rural development.",
    partnerRivana:
      "Cooperative Society for Rural and Environmental Tourism (Rivana)",
    partnerRivanaDesc: "Supporting environmentally responsible rural tourism.",
    partnerJahez: "Jahez International Company (Jahez Group)",
    partnerJahezDesc:
      "Enabling rural products to reach modern digital markets.",
    partnerKFU: "King Faisal University",
    partnerKFUDesc:
      "Cooperation in sustainable agricultural research and development.",
    partnerAlhasa: "Al-Ahsa Development Authority",
    partnerAlhasaDesc:
      "Supporting rural projects linked to regional development.",
    partnerFateh: "Al-Fateh Sports Club",
    partnerFatehDesc:
      "Enabling community and development initiatives in target areas.",
    partnerShabab: "Al-Shabab Club",
    partnerShababDesc:
      "Supporting awareness and development activities among youth.",
    partnerCateron: "Cateron Company",
    partnerCateronDesc:
      "Supporting supply chains and logistics services for rural sectors.",
    partnerIrrigation: "General Irrigation Authority",
    partnerIrrigationDesc:
      "Enhancing water resource sustainability in rural agriculture.",
    partnerCoopCouncil: "Cooperative Societies Council",
    partnerCoopCouncilDesc:
      "Developing cooperatives' capabilities and empowering them administratively and productively.",
    partnerTVTC: "Technical and Vocational Training Corporation",
    partnerTVTCDesc: "Building capacities and qualifying local competencies.",

    // Partnership Goals
    partnershipGoalsTitle: "Sustainability Partnership Goals:",
    partnershipGoalsIntro:
      "These partnerships focus on achieving four main tracks:",
    partnershipGoal1:
      "Increasing production efficiency in farms and rural families.",
    partnershipGoal2: "Improving access to local and international markets.",
    partnershipGoal3:
      "Localizing sustainable agricultural knowledge and expertise.",
    partnershipGoal4:
      "Creating new job opportunities that enhance economic stability in rural areas.",

    // Partnership Impact
    partnershipImpactTitle: "Partnership Impact on Sustainable Reef:",
    partnershipImpactIntro: "These agreements have contributed to:",
    partnershipImpact1:
      "Enhancing integration between government and private entities.",
    partnershipImpact2:
      "Accelerating implementation of initiatives and projects.",
    partnershipImpact3:
      "Supporting innovation in agriculture and sustainable practices.",
    partnershipImpact4: "Expanding the scope of benefiting from Reef programs.",

    // Additional Meetings
    additionalMeetingsTitle: "",
    additionalMeetingsIntro:
      "Also, within the framework of enhancing integration between relevant entities, the Reef Saudi Arabia Program held a number of meetings and sessions with local partners, government agencies and concerned institutions, including:",
    meetingPartner1: "Agricultural Development Fund",
    meetingPartner2: "Saudi Food and Drug Authority",
    meetingPartner3: "Saudi Coffee Company",
    meetingPartner4: "Sustainability Center",
    meetingPartner5: "Small and Medium Enterprises Authority",

    // Meeting Results
    meetingResultsTitle: "These partnerships resulted in:",
    meetingResult1: "Supporting implementation of operational plans",
    meetingResult2: "Aligning projects with Saudi Vision 2030",
    meetingResult3: "Developing new investment opportunities",
    meetingResult4: "Enhancing rural families empowerment",
    meetingResult5: "Transferring knowledge and expertise",
    meetingResult6: "Expanding developmental impact scope",

    // Implementation Plans
    implementationTitle: "Also:",
    implementation1:
      "Preparation of implementation plans for the period (2025 – 2030)",
    implementation2:
      "Following up on attracting national and international expertise",
    implementation3:
      "Formation of an executive committee chaired by the Deputy Minister",
    implementation4:
      "Holding regular meetings to evaluate performance and improve achievement level",

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
      "Sector for the development of rose cultivation and rose trade. The program works on developing rose and aromatic plant cultivation and supporting related industries to enhance export opportunities and achieve added economic value.",
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
    supportedSectorsTitle: "Supported Agricultural Sectors in Reef Saudi",
    supportedSectorsIntro:
      'The Sustainable Rural Agricultural Development Program "Reef Saudi Arabia" supports eight major productive sectors that represent the foundation of agricultural and food development in the Kingdom. These sectors contribute to empowering small farmers and producers, raising the quality of agricultural production, enhancing food security, and achieving sustainable rural development in line with the goals of Saudi Vision 2030.',

    // Hero Slider
    hero1Title: "A Rural Transformation Shaping the Kingdom's Future",
    hero1Desc:
      'The Sustainable Rural Agricultural Development Program "Reef Saudi" supports small farmers and rural families to achieve sustainable agricultural development that contributes to diversifying the national economy and enhancing food security.',
    hero1Btn1: "Watch the Story",
    hero1Btn2: "Explore the Impact",

    hero2Title: "Saudi Coffee.. A Story of Pride and Leadership",
    hero2Desc:
      "Reef Saudi supports coffee farmers in Jazan, Al-Baha, and Asir to improve production quality and enhance the presence of Saudi coffee in global markets.",
    hero2Btn1: "Explore Coffee Sector",
    hero2Btn2: "Learn About Initiatives",

    hero3Title: "Sustainability.. A Promise We Plant Today",
    hero3Desc:
      "Towards sustainable rural development that cares for people and resources together, in line with Saudi Vision 2030 targets.",
    hero3Btn: "Explore Reef Sustainable Initiatives",

    hero4Title: "Support that Bears Sustainable Impact",
    hero4Desc:
      "Through financial and advisory support programs, Reef Saudi empowers small farmers and productive families to improve livelihoods and achieve local self-sufficiency.",
    hero4Btn1: "Apply for Support",
    hero4Btn2: "Learn About Eligibility Conditions",

    hero5Title: "Growth that Thrives in Every Region",
    hero5Desc:
      "In every region, village, and farm, the impact of Reef Saudi extends through projects and programs that enhance agricultural production, support rural communities, and open new horizons for sustainable growth.",
    hero5Btn1: "Learn About Our Initiatives",
    hero5Btn2: "Explore the Interactive Sector Map",

    // Hero (Legacy - kept for compatibility)
    heroTitle: "A Rural Transformation Shaping the Kingdom's Future",
    heroSubtitle:
      'The Sustainable Rural Agricultural Development Program "Reef Saudi" supports small farmers and rural families to achieve sustainable agricultural development that contributes to diversifying the national economy and enhancing food security.',
    heroButton1: "Watch the Story",
    heroButton2: "Explore the Impact",

    // Key Numbers / Impact Statistics
    statsBadge: "Impact Statistics",
    statsTitle: "Reef Saudi.. Giving and Growth in Numbers",
    statsDesc:
      "Latest figures and statistics related to Reef Saudi's efforts in empowering farmers and enhancing sustainable rural development in various regions of the Kingdom.",
    stat1Label: "Beneficiaries",
    stat2Label: "Total Support Amount",
    stat2Suffix: " billion SAR",
    stat3Label: "Supported Families",
    stat4Label: "Freelance Work Certificates",
    stat5Label: "Training Courses in the Program",
    stat6Label: "Seedlings Planted Under Saudi Green Initiative",
    stat6Suffix: " million",
    statsDisclaimer: "Data Updated Continuously",
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
    sectorsBadge: "Rural Sectors",
    sectorsTitle: "Supported Agricultural Sectors in Reef Saudi",
    sectorsDesc:
      'The Sustainable Rural Agricultural Development Program "Reef Saudi Arabia" supports eight major productive sectors that represent the foundation of agricultural and food development in the Kingdom. These sectors contribute to empowering small farmers and producers, raising the quality of agricultural production, enhancing food security, and achieving sustainable rural development in line with the goals of Saudi Vision 2030.',
    sectorsSubtitle:
      "Reef Saudi Arabia supports 8 key sectors driving rural development and agricultural excellence",
    sector1Title: "Beekeeping & Honey Production",
    sector1Desc:
      "Sector for the development of beekeeping and honey production. Reef Saudi supports beekeepers through training, financing, and technical guidance to improve Saudi honey quality and develop related value chains.",
    sector1Point1: "Training & Development",
    sector1Point2: "Financial Support",
    sector1Point3: "Technical Guidance",

    sector2Title: "Saudi Coffee",
    coffeeHeroTitle:
      "Sector of Development, Production, Manufacturing, and Marketing of Saudi Coffee.",
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
    coffeeProjectsCountLabel: "8 projects",
    coffeeProjectsValueLabel: "155.8 million SAR",
    coffeeTotalValue: "Total Value",
    coffeeProject1:
      "Establishment and equipping of a coffee preparation and processing factory in Al-Baha region",
    coffeeProject2:
      "Establishment of model coffee nurseries in Jazan, Asir, and Al-Baha",
    coffeeProject3:
      "Establishment and equipping of a coffee preparation and processing factory in Asir region",
    coffeeProject4:
      "Implementation and equipping of alternative model farms in Jazan region",
    coffeeProject5:
      "Establishment and equipping of a coffee preparation and processing factory in Jazan (Ad-Daer)",
    coffeeProject6:
      "Application of sustainable irrigation systems for small coffee farmers in Al-Baha",
    coffeeProject7:
      "Application of sustainable irrigation systems for small coffee farmers in Jazan",
    coffeeProject8:
      "Application of sustainable irrigation systems for small coffee farmers in Asir",
    coffeeKeyAchievementsTitle: "Key Accomplishments",
    coffeeAchievement1: "Raising the number of coffee trees to 1.2 million trees",
    coffeeAchievement1Sub:
      "(Target: reaching 5–6 million trees by 2030)",
    coffeeAchievement2:
      "Increasing expected productivity per tree from 0.4 kg to 1.5 kg annually",
    coffeeAchievement3:
      "Introducing 5 modern technologies and practices in coffee cultivation",
    coffeeAchievement4: "Successfully transferring 8,000 high-quality coffee seedlings",
    coffeeAchievement5:
      "Supporting nurseries with a production capacity of 50,000 seedlings per year",
    coffeeAchievement6: "Conducting training workshops for more than 200 beneficiaries",
    coffeeAchievement7: "Carrying out field visits to more than 100 farms",
    coffeeAchievement8:
      "Participating in specialized international conferences and exhibitions",
    coffeeTissueCultureTitle: "Tissue Culture and Seedling Development Project",
    coffeeTissueCultureIntro:
      'In cooperation with the Reef Program and Estidama Center, a tissue culture project was implemented that included:',
    coffeeTissueStage1: "Selecting 6 distinguished genetic samples from coffee trees",
    coffeeTissueStage2: "Germinating 17,000 somatic coffee embryos",
    coffeeTissueStage3: "4,000 plants in the rooting stage",
    coffeeTissueStage4: "2,800 plants in the transfer-to-weaning stage",
    coffeeTissueStage5: "1,200 plants in the greenhouse weaning stage",
    coffeeTissueStage6: "400 seedlings in the hardening stage",
    coffeeBioreactorDesc:
      'Installing a "Bioreactor" device to increase productivity by 30%',
    coffeeTissueTarget: "Target production of 50,000 seedlings by end of 2025",
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
      "Sector for the development, production, processing, and marketing of Saudi coffee. Reef Saudi focuses on empowering coffee farmers in Jazan, Al-Baha, and Asir through improved production, supply chain development, and elevating Saudi coffee quality locally and globally.",
    sector2Point1: "Improving Supply Chains",
    sector2Point2: "Supporting Small Farmers",
    sector2Point3: "Product Marketing",

    sector3Title: "Roses & Aromatic Plants",
    sector3Point1: "Farm Development",
    sector3Point2: "Supporting Manufacturing Operations",
    sector3Point3: "Enhancing Marketing Opportunities",

    sector4Title: "Fruit Production & Processing",
    sector4Desc:
      "Sector for the development, production, processing, and marketing of fruits. Support includes fruits such as pomegranate, fig, grape, and more through improved techniques, developed agricultural practices, and enabling farmers to enter new markets.",
    fruitsHeroTitle:
      "Sector of Fruit Development, Production, Processing, and Marketing.",
    fruitsWorkAxesTitle: "Work Focus Areas in the Fruit Sector",
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
    fruitsTotalBeneficiariesSummary: "Total Beneficiaries: 9,054",
    fruitsBeneficiaryUnit: "beneficiaries",
    fruitsProduct1: "Bajali Almonds",
    fruitsProduct2: "Al-Bukhara",
    fruitsProduct3: "Peach",
    fruitsProduct4: "Apricot",
    fruitsProduct5: "Mango",
    fruitsProduct6: "Strawberry",
    fruitsProduct7: "Grapes",
    fruitsProduct8: "Lemon",
    fruitsProduct9: "Pomegranate",
    fruitsProjectsTitle: "Fruit Sector Projects",
    fruitsProjectsCount: "Number of Projects",
    fruitsProjectsCountValue: "23 Projects",
    fruitsProjectsValue: "Total Estimated Value",
    fruitsProjectsValueAmount: "396.8 Million SAR",
    fruitsProjectsIntro:
      "The 'Reef Saudi Arabia' Program implements an integrated system of projects in the fruit sector, aimed at developing production, improving quality, and enhancing value chains from farm to market, contributing to raising self-sufficiency and supporting farmers' income.",
    fruitsProjectsHighlights: "Key Sector Projects",
    fruitsProject1:
      "Establishment and equipping of marketing service centers for agricultural products in:",
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
    fruitsWork1Title: "Firstly: Establishing new nurseries",
    fruitsWork1Desc:
      "Two locations were selected to establish cooperative fruit nurseries at the Agricultural Association in Taif and the Agricultural Marketing Association in Jazan, with an estimated capacity of 15,000 seedlings per nursery. Work is underway to prepare the files and establish the two nurseries to serve farmers.",
    fruitsWork2Title: "Secondly: Expansion of existing nurseries",
    fruitsWork2Region1: "Asir Region",
    fruitsWork2Region1Value: "10,000 Seedlings",
    fruitsWork2Region2: "Al-Baha Region",
    fruitsWork2Region2Value: "10,000 Seedlings",
    fruitsWork2Total: "Total Production",
    fruitsWork2TotalValue: "20,000 Seedlings to Date",
    fruitsWork2Note: "Distributed during the second half of 2025.",
    fruitsWork3Title: "Thirdly: Characterization of fruit varieties",
    fruitsWork3Desc:
      "Six imported varieties of grapes, figs, apricots, and almonds were described in the extension field in Baljurashi in cooperation with the Seed and Seedling Center in Al-Baha, with the aim of determining morphological and production specifications, measuring variety compatibility with the regional climate, and propagating suitable varieties with high productivity.",
    fruitsWork4Title: "Fourthly: Developing women's agricultural entrepreneurship",
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
    fruitsWork5Title: "Fifthly: Plant health",
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

    // Handicrafts & Rural Industries Page
    handicraftsHeroTitle:
      "Sector for Developing Added Value from Small Holdings",
    handicraftsIntroTitle: "",
    handicraftsIntroLongDesc:
      "Within the framework of its vision to enhance sustainable development in rural areas, the Added Value Development from Small Holdings sector in the Reef Saudi Arabia Program works to enable entrepreneurial families and small projects to transition from the primary production stage to the manufacturing, development, and marketing stage, contributing to maximizing economic returns and achieving sustainability. This sector targets supporting productive families by providing them with tools and capabilities that increase production efficiency, improve product quality, develop manufacturing, packaging, and packaging processes, and open wider marketing channels for them, with a special focus on empowering women and youth in rural production areas, and enhancing their contribution to the local economy and food security.",
    handicraftsIntroDesc:
      "The Handicrafts & Rural Industries sector represents a vital bridge between our rich cultural heritage and sustainable economic development. We empower rural artisans and families to transform traditional skills into thriving businesses, creating authentic products that tell the story of Saudi Arabia's rural heritage while diversifying income sources and preserving cultural identity for future generations.",
    handicraftsPoint1Title: "Preserving Cultural Heritage",
    handicraftsPoint1Desc:
      "Supporting traditional crafts that have been passed down through generations, ensuring our cultural legacy thrives in modern markets.",
    handicraftsPoint2Title: "Empowering Rural Communities",
    handicraftsPoint2Desc:
      "Creating sustainable income opportunities for rural families through skill development and market access.",
    handicraftsPoint3Title: "Quality & Innovation",
    handicraftsPoint3Desc:
      "Combining traditional techniques with contemporary design to create products that appeal to modern consumers.",
    handicraftsArtisans: "Trained Artisans",
    handicraftsObjectivesTitle: "Main Goals of the Sector",
    handicraftsObjectivesSubtitle: "",
    handicraftsObj1Title: "1",
    handicraftsObj1Desc:
      "Maximizing returns from small holdings and traditional rural agricultural activities",
    handicraftsObj2Title: "2",
    handicraftsObj2Desc:
      "Increasing added value and creating job opportunities for entrepreneurial families, especially youth and women",
    handicraftsObj3Title: "3",
    handicraftsObj3Desc:
      "Increasing household income and rural community revenues and diversifying income sources for entrepreneurial agricultural families",
    handicraftsObj4Title: "4",
    handicraftsObj4Desc:
      "Increasing added value of agricultural products and improving efficiency in using natural agricultural resources",
    handicraftsObj5Title: "5",
    handicraftsObj5Desc:
      "Contributing to reducing rural migration rates and enhancing social stability in rural communities",
    handicraftsObj6Title: "6",
    handicraftsObj6Desc:
      "Enhancing food security and supplying the local market with some traditional food products",
    handicraftsWorkAxesTitle: "Work Focus Areas in the Value Added Sector",
    handicraftsWorkAxesSubtitle: "",
    handicraftsWorkAxis1:
      "Conducting food chain analysis and added value studies for targeted commodities",
    handicraftsWorkAxis2:
      "Developing rural agricultural products aligned with food and nutrition requirements",
    handicraftsWorkAxis3:
      "Developing commercial production systems and technologies",
    handicraftsWorkAxis4:
      "Providing targeted financial and in-kind support to producing agricultural families, especially women and youth",
    handicraftsWorkAxis5:
      "Improving infrastructure and logistics services for producing and processing traditional agricultural and food products for entrepreneurial producing families",
    handicraftsWorkAxis6:
      "Developing marketing systems for traditional agricultural and food products for entrepreneurial producing families",
    handicraftsWorkAxis7:
      "Facilitating access to soft loans through agricultural development funds, social development committees, and other financial institutions",
    handicraftsWorkAxis8:
      "Establishing small business incubators and models for disseminating and localizing traditional rural agricultural and food establishments",
    handicraftsWorkAxis9:
      "Strengthening contract farming between small farmers and companies and establishing an agricultural rural development information system",
    handicraftsWorkAxis10:
      "Preparing and activating supportive national policies and strategies for developing and implementing agricultural rural development programs",
    handicraftsWorkAxis11:
      "Establishing specialized units for rural agricultural women's development",
    handicraftsTotalSupport: "Total Support Value",
    handicraftsTotalSupportValue: "+1.85 Billion SAR",
    handicraftsTotalBeneficiaries: "Total Beneficiaries",
    handicraftsTotalBeneficiariesValue: "49,517 Beneficiaries",
    handicraftsBeneficiariesBreakdown: "(6,835 Men - 42,682 Women)",
    handicraftsGeographicDistribution:
      "Geographic Distribution of Beneficiaries:",
    handicraftsRegionHail: "Hail",
    handicraftsRegionEastern: "Eastern Province",
    handicraftsRegionAsir: "Asir",
    handicraftsRegionRiyadh: "Riyadh",
    handicraftsRegionMakkah: "Makkah",
    handicraftsRegionBaha: "Al Baha",
    handicraftsRegionNajran: "Najran",
    handicraftsRegionJazan: "Jazan",
    handicraftsRegionQassim: "Qassim",
    handicraftsRegionTabuk: "Tabuk",
    handicraftsRegionJouf: "Al Jouf",
    handicraftsRegionNorthern: "Northern Borders",
    handicraftsRegionMadinah: "Madinah",
    handicraftsGrowthTitle: "Development from 2020 to 2026:",
    handicraftsGrowth2020: "2020: 562 Entrepreneurial Families",
    handicraftsGrowth2024: "2024: 49,517 Entrepreneurial Families (76% growth)",
    handicraftsGrowth2026: "2026 (Target): 60,000 Entrepreneurial Families",
    handicraftsWork1Title: "Training & Capacity Building",
    handicraftsWork1Desc:
      "Developing artisan skills through comprehensive training programs covering traditional techniques, modern tools, quality standards, and business management.",
    handicraftsWork1Point1:
      "Specialized workshops in traditional crafts including pottery, weaving, basketry, and textile arts",
    handicraftsWork1Point2:
      "Business development training covering pricing, marketing, financial management, and customer service",
    handicraftsWork1Point3:
      "Quality control and product development programs to meet market standards",
    handicraftsWork2Title: "Market Access & E-Commerce",
    handicraftsWork2Desc:
      "Connecting artisans with buyers through digital platforms, exhibitions, and strategic market partnerships.",
    handicraftsWork2Point1:
      "Development of online marketplaces and e-commerce platforms for rural handicrafts",
    handicraftsWork2Point2:
      "Participation in national and international exhibitions and trade fairs",
    handicraftsWork2Point3:
      "Strategic partnerships with retailers and boutique stores",
    handicraftsWork3Title: "Community & Women Empowerment",
    handicraftsWork3Desc:
      "Supporting rural communities and women entrepreneurs through targeted programs and financial assistance.",
    handicraftsWork3Point1:
      "Microfinance support and grants for starting handicraft businesses",
    handicraftsWork3Point2: "Women's cooperatives and community workshops",
    handicraftsWork3Point3:
      "Mentorship programs connecting experienced artisans with newcomers",
    handicraftsWork4Title: "Innovation & Product Development",
    handicraftsWork4Desc:
      "Blending traditional craftsmanship with contemporary design to create products that resonate with modern consumers.",
    handicraftsWork4Point1:
      "Collaboration with designers to modernize traditional products",
    handicraftsWork4Point2:
      "Research and development of new materials and techniques",
    handicraftsWork4Point3:
      "Packaging and branding support for market differentiation",
    handicraftsStatsTitle: "Numbers and Indicators",
    handicraftsStatsSubtitle: "",
    handicraftsStatArtisans: "Trained Artisans",
    handicraftsStatProducts: "Product Lines",
    handicraftsStatBrands: "Rural Brands",
    handicraftsStatGrowth: "Income Growth",
    handicraftsStatsNote:
      "Data as of 2024 - reflecting our commitment to rural economic development",
    handicraftsCTA1: "Explore Rural Artisan Products",
    handicraftsCTA2: "Support Programs for Artisans",
    handicraftsValueAddedTitle: "Value Added Sector Projects",
    handicraftsProjectsCount: "Projects",
    handicraftsProjectsValue: "117.5",
    handicraftsProjectsValueLabel: "Million SAR",
    handicraftsValueAddedIntro:
      'The value-added sector is one of the core pillars of the "Reef Saudi Arabia" Program, focusing on transforming knowledge, technology, and extension services into practical tools that raise farmers\' productivity, improve product quality, and strengthen value chain efficiency across various rural sectors.',
    handicraftsMainProjects: "Key Sector Projects:",
    handicraftsProject1:
      "Implementing extension caravans in the field of plant wealth across various regions of the Kingdom.",
    handicraftsProject2:
      "Developing the agricultural guide application using artificial intelligence techniques for disease and pest diagnosis.",
    handicraftsProject3:
      "Supervising construction projects for the Southwestern Development Program.",
    handicraftsProject4:
      "Supervising construction projects for the Development Program in the Central and Western regions.",
    handicraftsProject5:
      "Providing consulting services for sustainable agricultural rural development program projects.",
    handicraftsProject6:
      "Supervising projects implementing sustainable irrigation systems and agricultural technologies.",
    handicraftsTechnicalBenefits: "Technical Feasibility of Projects:",
    handicraftsTechBenefit1:
      "Preparing specialized awareness campaigns in the field of plant wealth.",
    handicraftsTechBenefit2:
      "Creating a smart application to identify crop diseases using mobile phone cameras and artificial intelligence technologies.",
    handicraftsTechBenefit3:
      "Building a database for plant and animal diseases including fish and bees to facilitate diagnosis and treatment processes.",
    handicraftsTechBenefit4:
      "Preparing a comprehensive database for agricultural crop diseases and control methods.",
    handicraftsTechBenefit5:
      "Producing visual, printed, and electronic extension materials to enhance agricultural knowledge.",
    handicraftsTechBenefit6:
      "Raising farmers' capabilities for early detection of diseases and pests.",
    handicraftsTechBenefit7:
      "Producing a comprehensive reference guide for agricultural and food diseases.",
    handicraftsGoalsTitle: "Project Objectives:",
    handicraftsGoal1:
      "Using high-quality and credible technical means and training artificial intelligence systems to recognize agricultural diseases in all their stages and forms, facilitating disease diagnosis and accelerating treatment without the need for direct reference to specialists.",
    handicraftsGoal2:
      "Developing extension work in plant wealth and honey fields, through producing awareness and extension materials presented through caravans, seminars, meetings, and festivals, in addition to live broadcasting of activities implemented by the Ministry in various regions of the Kingdom.",
    handicraftsKeyWorksTitle: "Key Implemented Works",
    handicraftsKeyWorksIntro:
      "The year 2024 witnessed the implementation of several quality initiatives within this sector, most notably the operation of the solar drying tunnel for drying figs, where production capacity increased from 400 to 500 kg per drying cycle, and crop loss rates decreased by an estimated 30%. Within just three months, approximately 2,500 kg of dried figs were produced with a value of 100,000 SAR, in addition to using the same technology for drying local mangoes.",
    handicraftsKeyWorksKg: "kg",
    handicraftsKeyWorksSar: "SAR",
    handicraftsKeyWorksStat1: "Production capacity per cycle",
    handicraftsKeyWorksStat2: "Reduction in crop losses",
    handicraftsKeyWorksStat3: "Dried figs in 3 months",
    handicraftsKeyWorksStat4: "Total value generated",
    handicraftsKeyWorksSolarDrying: "Solar Drying Tunnel Project",
    handicraftsKeyWorksSolarDetails:
      "This technology was also used for drying local mango fruit, demonstrating its versatility and effectiveness in preserving various agricultural products.",
    handicraftsKeyWorksSolarTraining:
      "13 farmers and Ministry staff trained on drying technology to achieve the best results",
    handicraftsKeyWorksTrainingTitle: "Training & Capacity Building",
    handicraftsKeyWorksTraining1:
      "22 women entrepreneurs trained in innovative products using beeswax",
    handicraftsKeyWorksTraining2:
      "15 women trained in pomegranate-related entrepreneurship",
    handicraftsKeyWorksTraining3:
      "36 supervisors trained in developing agricultural tourism in Taif and Jazan",
    handicraftsKeyWorksTraining4:
      "25 new farms selected and added to the developed agricultural tourism atlas",
    handicraftsKeyWorksTrainingDetails:
      "Activities also included field visits to pomegranate cooperative orchards in Al-Baha to diagnose field challenges and propose appropriate solutions. All trainees' data was documented and followed up within the Reef program system to ensure sustainable impact.",
    handicraftsKeyWorksFoodSafety: "Food Safety & Storage",
    handicraftsKeyWorksFoodSafetyDetails:
      "Coordination with the Saudi Food and Drug Authority to hold awareness workshops for small-holding breeders on food safety standards. Refrigerated storage units using Cool Bot technology were operated, along with six solar-powered mobile cooling units, helping preserve and transport agricultural products efficiently and reduce losses, in addition to providing technical support to develop agricultural marketing service centers in targeted regions.",
    handicraftsKeyWorksCoolBot:
      "Refrigerated storage using Cool Bot technology",
    handicraftsKeyWorksSolarUnits: "6 Solar-Powered Units",
    handicraftsKeyWorksSolarUnitsDetails:
      "Mobile cooling units operating on solar energy for efficient product transport",
    handicraftsKeyWorksConclusion:
      'Through these integrated efforts, the value-added development sector from small holdings in the Reef Saudi Arabia Program continues its pivotal role in promoting sustainable rural development, raising productive families\' living standards, and transforming small holdings from limited traditional activities into projects of sustainable economic and social value that effectively contribute to achieving the Kingdom\'s Vision targets.',
    handicraftsCTA1Full: "Explore the Interactive Map of Our Rural Sectors",
    handicraftsCTA1Desc:
      "Discover the geographical distribution of projects and initiatives across different regions of the Kingdom",
    handicraftsCTA2Full: "Explore Support Programs",
    handicraftsCTA2Desc:
      "Learn about available support and financing programs to empower rural communities",
    exploreNow: "Explore Now",

    sector5Title: "Small Livestock Breeders",
    sector5Desc:
      "Sector for enhancing the capacities of small livestock breeders. Support includes training, financing, and veterinary care to improve dairy product quality and raise animal production efficiency across the Kingdom.",
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
    livestockProjectsTitle: "Livestock Sector Projects",
    livestockProjectsCountLabel: "Projects",
    livestockProjectsTotalValueLabel: "Total Value",
    livestockProjectsMillionSar: "Million SAR",
    livestockProjectsIntro:
      'The "Reef Saudi Arabia" Program in the livestock sector works to develop the Kingdom\'s livestock production system through advanced infrastructure, tracking and numbering systems, and raising the efficiency of small breeders, contributing to food security, increasing local meat and dairy production, and achieving environmental and economic sustainability.',
    livestockProjectsKeyTitle: "Key Sector Projects",
    livestockProjectsLocationsIntro:
      "Establishment and equipping of model livestock production farm complexes in:",
    livestockLocation1: "Jubail",
    livestockLocation2: "Madinah",
    livestockLocation3: "Hafr Al-Batin",
    livestockLocation4: "Najran",
    livestockLocation5: "Hail",
    livestockLocation6: "Qassim",
    livestockLocation7: "Arar",
    livestockProjectsTagging:
      "Implementation of the livestock numbering and registration project in various regions of the Kingdom.",
    livestockProjectsFeasibilityTitle: "Technical Feasibility of Projects",
    livestockProjectsFeasibilityIntro:
      "Livestock sector projects contribute to achieving a wide range of technical and developmental impacts, most notably:",
    livestockProjectsFeasibility1:
      "Numbering more than 12,269,000 heads of productive livestock of all types (sheep – goats – camels).",
    livestockProjectsFeasibility2:
      "Launching an electronic platform to manage all implementation work, including data entry, electronic chips, and complete automation of operations.",
    livestockProjectsFeasibility3:
      "Providing model livestock farms in selected areas such as Qassim, Hail, Hafr Al-Batin, Jubail, Arar and others.",
    livestockProjectsFeasibility4:
      "Supporting self-sufficiency and increasing local meat production within the targets of Saudi Vision 2030.",
    livestockProjectsFeasibility5:
      "Introducing modern techniques in artificial insemination and breed improvement.",
    livestockProjectsFeasibility6:
      "Preserving natural pastures, combating overgrazing and protecting environmental resources.",
    livestockProjectsFeasibility7:
      "Optimal use of available food and water resources.",
    livestockProjectsFeasibility8:
      "Improving the income of small breeders and contributing to social stability in rural areas.",
    livestockProjectsFeasibility9:
      "Creating advanced model farms to be emulated by investors in the livestock sector with potential for replication.",
    livestockProjectsFeasibility10:
      "Contributing to food security and increasing sources of animal protein.",
    livestockProjectsFeasibility11:
      "Enhancing livestock production efficiency and raising its quality.",
    livestockProjectsGoalsTitle: "Project Objectives",
    livestockProjectsGoalsIntro:
      'Livestock sector projects in the "Reef Saudi Arabia" Program focus on:',
    livestockProjectsGoal1:
      "Establishing sustainable complexes for livestock breeding and production, developing and rehabilitating rural fields on ministry lands allocated to small livestock breeders.",
    livestockProjectsGoal2:
      "Providing comprehensive veterinary services for livestock numbering, and launching an electronic platform with an integrated database to track livestock owners, including data entry, electronic chips and all automation operations.",
    livestockProjectsGoal3:
      "Implementing an electronic numbering and tracking system based on numbers equipped with electronic chips for accurate tracking of productive ewes, males and camels, supporting information systems and data analysis and raising herd management efficiency at the Kingdom level.",
    livestockKeyWorksTitle: "Key Implemented Works",
    livestockKeyWork1Title: "Digital Management of Intensive Breeding Farms",
    livestockKeyWork1Desc:
      "The Saudi Smart Flock application was developed for digital management of intensive livestock breeding farms using IoT and tested in 6 farms. It is the first of its kind in the region, featuring amagineX technology for animal recognition via facial image.\n\nThe application and platform help with:\n• Tracking livestock herd productivity rates\n• Instant reporting on animal health status\n• Managing animal records",
    livestockKeyWork1Stat1Value: "6",
    livestockKeyWork1Stat1Label: "Farms",
    livestockKeyWork1Stat2Value: "1st",
    livestockKeyWork1Stat2Label: "In the region",
    livestockKeyWork2Title: "Small Ruminants Characterization Study",
    livestockKeyWork2Desc:
      "Direct technical arrangements were completed for the small ruminants characterization study in cooperation with King Saud University, aimed at inventorying and counting important local breeds and developing breeding programs using genome technology.",
    livestockKeyWork2Stat1Value: "KSU",
    livestockKeyWork2Stat1Label: "Partnership",
    livestockKeyWork2Stat2Value: "Genome",
    livestockKeyWork2Stat2Label: "Technology",
    livestockKeyWork3Title: "Technical Services System for Small Breeders",
    livestockKeyWork3Desc:
      "A system was developed to deliver technical services to small livestock breeders, applied directly in:\n• Herd management services\n• Ultrasound\n• Vaccination and immunization\n• Deworming\n• Nutritional supplements\n• Other health services\n\nApplied on 45 livestock farms in: Jazan, Arar, and Northern Borders.\n\nBreeders, technicians, and field veterinarians participated, along with an expert team from SDAIA. The initial survey showed an increase in lambs per ewe from 74% to 98%.",
    livestockKeyWork3Stat1Value: "45",
    livestockKeyWork3Stat1Label: "Farms",
    livestockKeyWork3Stat2Value: "98%",
    livestockKeyWork3Stat2Label: "Lambing rate",
    livestockKeyWork4Title: "Internal Study Tour",
    livestockKeyWork4Desc:
      "An internal study tour benefited 10 male and female livestock breeders from the Arar region, to learn about:\n• Advanced animal housing infrastructure\n• Modern automated milking systems\n• Best breeding practices\n• Milk value-addition activities",
    livestockKeyWork4Stat1Value: "10",
    livestockKeyWork4Stat1Label: "Breeders",
    livestockKeyWork4Stat2Value: "Arar",
    livestockKeyWork4Stat2Label: "Region",
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

    sector6Title: "Rainfed Crops",
    sector6Desc:
      "Sector for the cultivation of rainfed crops. Support covers rain-dependent crops in mountainous regions such as wheat, barley, millet, and sesame, with a focus on sustainability and preserving natural resources.",
    sector6Point1: "Natural Irrigation Systems Support",
    sector6Point2: "Farmer Training",
    sector6Point3: "Local Grain Marketing",
    rainfedHeroTitle:
      'Rainfed Crops Cultivation Sector "Rainfed".',
    rainfedIntro1:
      'The Rainfed Crops Sector in the "Reef Saudi Arabia" Program aims to increase self-sufficiency in these strategic crops, substitute a portion of imports, and raise productivity in areas with comparative advantages through rainwater harvesting techniques and modern irrigation methods, improving production quality, increasing smallholder farmers\' income, and promoting natural resource sustainability for rural community development.',
    rainfedObj1:
      "Increase and raise rainfed crop productivity in areas with comparative advantages using rainwater harvesting techniques and modern irrigation methods.",
    rainfedObj2:
      "Increase self-sufficiency in these crops and substitute a portion of imports.",
    rainfedObj3:
      "Increase smallholder farmers' income and improve their livelihoods.",
    rainfedWorkAxesTitle: "Work Focus Areas in the Rainfed Crops Sector",
    rainfedWorkAxis1:
      "Implementing good agricultural practices, including agricultural and educational operations.",
    rainfedWorkAxis2:
      "Developing and providing improved seeds suitable for production areas according to environmental conditions and disease resistance, and distributing them to small producers.",
    rainfedWorkAxis3:
      "Providing extension services and technical support to small producers.",
    rainfedWorkAxis4:
      "Developing rainwater harvesting systems suited to production area requirements and disseminating them among farmers, with supplementary irrigation where possible.",
    rainfedWorkAxis5:
      "Introducing mechanized harvesting and post-harvest technologies to reduce losses.",
    rainfedWorkAxis6:
      "Developing and implementing programs for finger millet, sesame, millet, and providing advanced technical services for post-harvest operations.",
    rainfedWorkAxis7:
      "Providing financial support to encourage farmers to produce rainfed crops.",
    rainfedWorkAxis8: "Planting forest trees in farmers' fields.",
    rainfedWorkAxis9:
      "Establishing cooperatives to provide production and post-harvest services.",
    rainfedWorkAxis10: "Developing farmers' technical capacities.",
    rainfedStatsTitle: "Numbers and Indicators",
    rainfedTotalSupport: "Total Support Value",
    rainfedSupportAmount: "+99.65 million SAR",
    rainfedBeneficiaries: "Total Beneficiaries",
    rainfedBeneficiariesCount: "+5,466 beneficiaries",
    rainfedBeneficiariesDetails: "(2,919 men and 2,547 women)",
    rainfedGeoDistribution: "Geographic Distribution of Beneficiaries",
    rainfedSupportedProducts: "Supported Products",
    rainfedProduct1: "Wheat",
    rainfedProduct2: "Barley",
    rainfedProduct3: "Millet",
    rainfedProduct4: "Sesame",
    rainfedProduct5: "Finger millet",
    rainfedProduct6: "Rainfed watermelon",
    rainfedProductionEvolution: "Production Evolution (tons/year)",
    rainfedProduction2020: "6,000 tons",
    rainfedProduction2024: "62,000 tons",
    rainfedGrowthRate: "(32% growth)",
    rainfedProduction2026: "195,000 tons",
    rainfedTarget: "(Target)",
    rainfedProjectsTitle: "Rainfed Crops Sector Projects",
    rainfedProjectsCount: "Number of Projects",
    rainfedProjectsCountValue: "17 projects",
    rainfedProjectsValue: "Total Estimated Value",
    rainfedProjectsValueAmount: "215.4 million SAR",
    rainfedProjectsIntro:
      'The "Reef Saudi Arabia" Program implements a system of specialized projects in the rainfed crops sector to enhance food security, raise production efficiency, and improve rainfed agriculture sustainability across the Kingdom.',
    rainfedProjectsHighlights: "Key Sector Projects",
    rainfedProject1:
      "Supply of various agricultural equipment in Makkah and Jazan.",
    rainfedProject2:
      "Establishment of a factory for sesame, finger millet, and millet products in Jazan region.",
    rainfedProject3:
      "Supply of harvesting equipment for rainfed agriculture in Makkah and Jazan.",
    rainfedProject4:
      "Improving local field crop varieties for farmers in southwestern Saudi Arabia.",
    rainfedProject5:
      "Operating the Jazan research unit to strengthen integration between agricultural research and field applications.",
    rainfedProject6:
      "Establishing model rainfed grain crop farms in Madinah.",
    rainfedProject7:
      "Establishing model rainfed grain crop farms in Asir and Jazan.",
    rainfedProject8:
      "Supply of modern harvesting equipment for rainfed crops.",
    rainfedProject9:
      "Supply of soil preparation and modern farming equipment for rainfed crop farmers.",
    rainfedProject10:
      "Supply of accessories for soil preparation and modern farming equipment.",
    rainfedProject11:
      "Application of sustainable irrigation systems and modern agricultural techniques for small rainfed field crop farmers in:",
    rainfedFeasibilityTitle: "Technical Feasibility of Projects",
    rainfedFeasibilityIntro:
      "Rainfed crops sector projects contribute to a set of technical and production gains, most notably:",
    rainfedFeasibility1:
      "Enhancing operational efficiency of agricultural equipment in rural development.",
    rainfedFeasibility2:
      "Reducing effort and costs through modern technologies and mechanization.",
    rainfedFeasibility3:
      "Promoting cooperation among farmers through collective work and shared equipment.",
    rainfedFeasibility4:
      "Improving field crop production efficiency to achieve food security.",
    rainfedFeasibility5:
      "Increasing sustainability and productivity of local rainfed crops.",
    rainfedFeasibility6: "Improving utilization of available water resources.",
    rainfedFeasibility7:
      "Applying modern agricultural techniques to improve crop quality and productivity.",
    rainfedFeasibility8: "Supporting expansion of quality agricultural holdings.",
    rainfedFeasibility9:
      "Designing and implementing irrigation networks suited to the region and crop.",
    rainfedFeasibility10:
      "Organizing value chains from production to processing and marketing.",
    rainfedProjectObjectivesTitle: "Project Objectives",
    rainfedProjectObjectivesIntro:
      'Rainfed crops sector projects in the "Reef Saudi Arabia" Program focus on achieving the following objectives:',
    rainfedProjectObjective1:
      "Achieving maximum benefit from crop production and encouraging increased demand.",
    rainfedProjectObjective2:
      "Establishing model and demonstration fields providing integrated agricultural operations throughout the season.",
    rainfedProjectObjective3:
      "Implementing modern tanks and irrigation networks suited to land conditions, with supplementary irrigation when rainfall is scarce.",
    rainfedProjectObjective4:
      "Utilizing available agricultural land and rainwater through sustainable irrigation systems and modern techniques.",
    rainfedProjectObjective5:
      "Developing agricultural mechanization to increase efficiency and reduce costs, and training cooperatives on operation.",
    rainfedKeyWorksTitle: "Key Implemented Works",
    rainfedWork1Title:
      "Firstly: Improved variety trials – mountain environment (Abha, Asir region)",
    rainfedWork1Start: "Trial start: May 9, 2024",
    rainfedWork1Varieties: "24 varieties",
    rainfedWork1VarietiesDetail:
      "(12 finger millet varieties + 12 millet varieties)",
    rainfedWork1Location:
      "Seed multiplication station – Seeds and Seedlings Center – Riyadh (experimental site in Asir)",
    rainfedWork1Harvest: "Harvest completed: October 10, 2024",
    rainfedWork1Note:
      "These trials extend trials that began in 2023 in Jazan.",
    rainfedWork2Title:
      "Secondly: Improved variety trials – coastal environment (Jazan)",
    rainfedWork2Date: "September 18–19, 2024",
    rainfedWork2Desc:
      "Four new trials were conducted, including two grain and fodder trials for finger millet and two for millet, to identify the most suitable varieties for Jazan.",
    rainfedWork3Title: "Thirdly: Scientific guides and procedures",
    rainfedWork3Item1:
      "Preparation of a guide for diseases and pests affecting target crops in collaboration with ICRISAT.",
    rainfedWork3Item2:
      "Preparation of the executive plan for rainfed crops.",
    rainfedWork3Item3: "Launch of the community seed bank initiative.",
    rainfedWork3Item4:
      "Launch of silage production from finger millet and millet green biomass.",
    rainfedWork3Item5:
      "Training course in soil fertility and agricultural irrigation in Jazan and Al-Namas with 70 farmers and staff.",
    rainfedWork3Item6:
      "Training course for Ministry staff in gene bank management (27 trainees).",
    rainfedMechanizationTitle: "Agricultural Mechanization Initiative",
    rainfedMechanizationIntro:
      "Aiming to increase productivity and reduce costs for smallholder farmers through:",
    rainfedMechGoal1: "Adopting modern agricultural mechanization technologies",
    rainfedMechGoal1Desc:
      "Approximately 300 various agricultural machines imported and operated through cooperatives to serve smallholder farmers.",
    rainfedMechGoal2: 'Launch of the "Mechanization Pioneers Incubator"',
    rainfedMechGoal2Desc: "To empower young entrepreneurs",
    rainfedMechIndicatorsTitle: "Initiative Indicators",
    rainfedMechIndicator1: "Operating entrepreneurs",
    rainfedMechIndicator2: "Operating cooperative associations",
    rainfedMechIndicator3: "Course beneficiaries",
    rainfedMechIndicator4: "Workshops and training courses",
    rainfedMechIndicator5: "Beneficiary regions",
    rainfedMechIndicator6: "Direct beneficiaries of the initiative",
    rainfedMechProcessingTitle:
      "Development of processing industries mechanization",
    rainfedMechProcessingIntro: "Currently working on the following:",
    rainfedMechProcessing1: "Development of Taif rose oil extraction",
    rainfedMechProcessing2:
      "Development of cactus pear processing and washing before packaging",
    rainfedMechProcessing3: "Development of almond peeling and sorting",
    rainfedMechProcessing4: "Development of wool thread processing and spinning",
    rainfedMechEquipmentHighlight:
      "Various agricultural equipment imported to serve smallholder farmers",

    sector7Title: "Fisheries & Aquaculture",
    sector7Desc:
      "Sector for enhancing the capacities of fishermen and fish farmers. The program supports fishermen and fish farmers through training, financing, and modern technologies to raise marine production and strengthen food security.",
    sector7Point1: "Supporting Aquaculture Projects",
    sector7Point2: "Port Development",
    sector7Point3: "Marine Product Marketing",
    fishingHeroTitle: "Enhancing the Capacities of Fishermen and Fish Farmers",
    fishingHeroIntro:
      'The "Reef Saudi Arabia" Program works to empower small-scale fishermen and fish farmers across various regions of the Kingdom of Saudi Arabia, enhance their productivity efficiency, improve their livelihoods, and strengthen their contribution to achieving food security, through integrated technical, financial, and training support programs, and strategic projects that contribute to developing the value chains of fishery resources.',
    fishingObjectivesTitle: "Main Goals of the Sector",
    fishingObjective1:
      "Meeting the Kingdom's needs for marine products and contributing to achieving food security by increasing local production and reducing imports.",
    fishingObjective2:
      "Supporting young entrepreneurs to establish and operate small fishing facilities.",
    fishingObjective3: "Creating jobs for Saudis, especially the youth.",
    fishingWorkAreasTitle: "Work Focus Areas in the Fish Sector",
    fishingWorkArea1:
      "Developing aquaculture fields and technologies and increasing productivity",
    fishingWorkArea2:
      "Developing extension and technical support services for small-scale fishermen and small fish farm owners",
    fishingWorkArea3: "Establishing and developing facilities for fishermen",
    fishingWorkArea4:
      "Establishing and activating cooperative associations for small-scale fishermen and small fish farm owners to serve the sector",
    fishingWorkArea5:
      "Encouraging young entrepreneurs to enter aquaculture and establishing aquaculture incubators",
    fishingWorkArea6:
      "Establishing and developing local markets and raising their efficiency in marketing and price control",
    fishingWorkArea7:
      "Supporting and developing coastal activities in a sustainable manner and protecting the environmental characteristics of coasts, especially mangroves",
    fishingWorkArea8: "Training human capacities in the field of aquaculture",
    fishingWorkArea9:
      "Designing and implementing programs to raise the skills of small fishermen and fish farmers in production and processing to increase added value",
    fishingNumbersTitle: "Numbers and Indicators",
    fishingTotalSupport: "Total Support Value",
    fishingTotalSupportValue: "+16.8 Million Riyals",
    fishingTotalBeneficiaries: "Total Number of Beneficiaries",
    fishingTotalBeneficiariesValue: "1,812 Beneficiaries",
    fishingGeographicDistribution: "Geographic Distribution of Beneficiaries",
    fishingJazan: "Jazan",
    fishingMakkah: "Makkah",
    fishingEastern: "Eastern Region",
    fishingTabuk: "Tabuk",
    fishingMadinah: "Madinah",
    fishingAsir: "Asir",
    fishingProjectsTitle: "Fishing Sector Projects",
    fishingProjectsCount: "Number of Projects",
    fishingProjectsCountValue: "16 Projects",
    fishingProjectsTotalValue: "Total Value",
    fishingProjectsTotalValueAmount: "69.5 Million Riyals",
    fishingProjectsIntro:
      'The "Reef Saudi Arabia" program works in the fishing sector to develop marine fishing infrastructure, enhance the efficiency of Saudi fishermen, and improve the quality and safety of marine products, contributing to strengthening national food security and creating sustainable job opportunities in coastal communities.',
    fishingProject1:
      "Supply of engines for small boats for small Saudi fishermen",
    fishingProject2:
      "Supply of satellite distress devices (EPIRB) to enhance fishermen's safety at sea",
    fishingProject3:
      "Supply of cooling boxes to preserve fish and reduce post-catch losses",
    fishingFishAuctionsTitle:
      "Establishment and equipping of fish auctions in:",
    fishingQatif: "Qatif",
    fishingRayis: "Rayis",
    fishingUmluj: "Umluj",
    fishingQunfudhah: "Qunfudhah",
    fishingKhorFarasan: "Khor Farasan",
    fishingMaintenanceCentersTitle:
      "Establishment and equipping of boat maintenance centers in:",
    fishingShaqiq: "Shaqiq",
    fishingMadaya: "Madaya",
    fishingProject7:
      "Establishment and development of an electronic platform to support fishermen and connect them with services and markets",
    fishingFeasibilityTitle: "Technical and Economic Feasibility of Projects",
    fishingFeasibilityIntro:
      "Fishing sector projects contribute to achieving a wide range of technical and economic impacts, most notably:",
    fishingFeasibility1:
      "Reducing loss and waste in marine products and improving environmental sustainability",
    fishingFeasibility2:
      "Enhancing the efficiency of packaging operations within post-catch facilities",
    fishingFeasibility3:
      "Using modern technologies for water analysis, waste treatment, and improving boat performance",
    fishingFeasibility4:
      "Providing fast and efficient boat maintenance services and ensuring safe operation",
    fishingFeasibility5:
      "Enhancing fishermen's safety at sea through effective and accurate distress devices",
    fishingFeasibility6:
      "Raising competitiveness and quality of marine products in markets",
    fishingFeasibility7:
      "Localizing the fishing profession and providing job opportunities for citizens",
    fishingFeasibility8:
      "Supporting local fishermen and raising the level of maritime security",
    fishingFeasibility9:
      "Reducing operational costs through improving maintenance operations",
    fishingFeasibility10:
      "Providing after-maintenance services to ensure continuity of performance quality",
    fishingProjectObjectivesTitle: "Project Objectives",
    fishingProjectObjectivesIntro:
      'Fishing sector projects in the "Reef Saudi Arabia" program focus on achieving the following:',
    fishingObjective1Title:
      "Establishment and equipping of fish auctions to provide basic services to fishermen, primarily serving small fishermen",
    fishingObjective2Title:
      "Establishment and equipping of boat maintenance centers to provide integrated technical and operational services to fishermen",
    fishingObjective3Title:
      "Supporting the fishing community by providing engines for fishing boats for small fishermen, contributing to enhancing their productive capacity and achieving national food security",
    fishingObjective4Title:
      "Supply of modern distress devices (EPIRB) to accurately locate boats and connect them with coastal rescue systems and marine operations, including the supply of 1,000 distress devices to support fishermen's safety and reduce risks in emergencies",
    fishingStatsTitle: "Key Achievements in Numbers",

    // Key Implemented Projects Section
    fishingImplementedTitle: "Key Implemented Works",
    fishingImplementedSubtitle: "",

    // Project 1: Digital Monitoring
    fishingDigitalMonitoringTitle:
      "Firstly: Digital Monitoring of Fisheries",
    fishingDigitalMonitoringDesc:
      "Installation of 4 digital cameras on 4 fishing boats (volunteers) in the Eastern Region and Jazan Region",

    // Project 2: Ecosystem Management
    fishingEcosystemTitle:
      "Secondly: Ecosystem-Based Fisheries Management System",
    fishingEcosystemPoint1:
      "Preparation of a systematic fisheries management plan through participatory discussions between fishermen and relevant authorities",
    fishingEcosystemPoint2:
      "Collection of preliminary data on the state of the marine ecosystem in the Farasan Islands, including social and economic data",
    fishingEcosystemPoint3: "Implementation of 3 participatory workshops",
    fishingEcosystemPoint4:
      "Preparation of an initial draft plan and its submission to the Fisheries Management Department",

    // Project 3: Automated Auction System
    fishingAuctionSystemTitle: "Thirdly: Modern Automated Fish Auction System",
    fishingAuctionSystemFeaturesLabel: "The system includes:",
    fishingAuctionSystemDesc:
      "Installation of 4 modern systems in Jubail and Farasan Island auctions in Jazan",
    fishingAuctionSystemFeatures:
      "Electric conveyor belt, display screens, cameras, rust-resistant seats, carts, digital scale, and special boxes",
    fishingAuctionSystemGoals:
      "Aims to improve the quality of marine products, reduce waste, and increase fishermen's income by up to 20%",

    // Project 4: Seaweed Cultivation
    fishingSeaweedTitle: "Fourthly: Small-Scale Seaweed Cultivation",
    fishingSeaweedPoint1:
      "Implementation of two seaweed farm systems south of Jeddah (180 km) with an initial production capacity of 650 kg per batch / 6 weeks",
    fishingSeaweedPoint2:
      "Implementation of a model led by young Saudi men and women in Makkah Region in collaboration between Naqua Company, the Ministry of Environment, Water and Agriculture, and FAO",
    fishingSeaweedPoint3:
      "Training of more than 50 young men and women in cultivation and harvesting techniques",
    fishingSeaweedPoint4:
      "Planning for expansion at another site on the Red Sea coast",

    // Project 5: Hatchery Activation
    fishingHatcheryTitle:
      "Fifthly: Activation of Freshwater Fish Hatchery in Qatif",
    fishingHatcheryPoint1: "Rehabilitation of the hatchery with modern systems",
    fishingHatcheryPoint2: "Operation of a closed water recirculation system",
    fishingHatcheryPoint3:
      "Introduction of broodstock soon to enhance production and sustainability",

    // CTAs
    fishingCTA1: "Explore Interactive Map of Our Rural Sectors",
    fishingCTA2: "Explore Support Programs",

    fishingStatsFishFarmers: "Fish Farmers Supported",
    fishingStatsAquacultureSites: "Aquaculture Sites Developed",
    fishingStatsTrainedFishermen: "Trained Fishermen",
    fishingStatsProductionIncrease: "Production Increase",
    fishingStatsDescription:
      "Through integrated technical and financial support programs, we work to enhance the efficiency of fishing operations and aquaculture, contributing to sustainable food security and improving the livelihoods of coastal communities.",
    fishingWorkAxesTitle: "Main Work Areas",
    fishingWorkAxesSubtitle:
      "Integrated programs to develop fishing and aquaculture capabilities through modern technologies and sustainable practices",
    fishingAxis1Title: "Development of Smart Aquaculture Systems",
    fishingAxis1Desc:
      "Establishing modern aquaculture facilities equipped with smart technologies to monitor water quality, control feeding systems, and improve productivity while preserving the marine environment.",
    fishingAxis2Title: "Upgrading Fishing Infrastructure",
    fishingAxis2Desc:
      "Developing fishing ports, landing sites, and marine facilities to provide better services to fishermen and improve operational efficiency and marine product quality.",
    fishingAxis3Title: "Technical Training and Capacity Building",
    fishingAxis3Desc:
      "Implementing specialized training programs for fishermen and fish farmers in sustainable fishing techniques, aquaculture management, and fishing operations safety practices.",
    fishingAxis4Title: "Development of Cold Chains and Marketing",
    fishingAxis4Desc:
      "Establishing integrated cold chain systems from fishing/production sites to markets, providing refrigerated storage and transport facilities to maintain product quality and increase market value.",
    fishingAxis5Title: "Environmental Sustainability and Resource Protection",
    fishingAxis5Desc:
      "Implementing environmental monitoring programs and sustainable fishing practices to protect marine resources, maintain ecological balance, and ensure long-term sustainability of the sector.",
    fishingAxis6Title: "Quality Certification and Standards",
    fishingAxis6Desc:
      "Supporting fish farmers and fishermen in obtaining international quality certifications and compliance with health and environmental standards to enhance competitiveness in local and global markets.",
    fishingKeyProjectsTitle: "Key Sector Projects",
    fishingKeyProjectsSubtitle:
      "Strategic projects aimed at transforming the fishing and aquaculture sector through innovation and sustainability",
    fishingProject1Title: "Development of Fishing Ports and Landing Sites",
    fishingProject1Desc:
      "A comprehensive project to upgrade fishing infrastructure across coastal regions to improve efficiency and service quality.",
    fishingProject1Details:
      "The project includes developing 12 fishing ports and landing sites with modern equipment, refrigerated storage facilities, fuel stations, maintenance workshops, and fish markets equipped with the latest technologies.",
    fishingProject1Stats: "12 Ports Developed • 8 Coastal Regions",
    fishingProject2Title: "Integrated Cold Chain Development",
    fishingProject2Desc:
      "Establishing a comprehensive cold chain system to preserve fish quality from catch to consumer.",
    fishingProject2Details:
      "The project includes installing refrigerated storage units at landing sites, providing refrigerated transport vehicles, and establishing quality control laboratories to ensure compliance with health standards.",
    fishingProject2Stats: "25 Refrigerated Units • 15 Transport Vehicles",
    fishingProject3Title: "Fishermen Training and Qualification Program",
    fishingProject3Desc:
      "Comprehensive training programs to enhance fishermen's skills in sustainable fishing and modern aquaculture techniques.",
    fishingProject3Details:
      "The program includes training in sustainable fishing methods, fishing equipment maintenance, marine safety practices, and fish handling and storage techniques, in cooperation with specialized technical institutes.",
    fishingProject3Stats: "320+ Trained Fishermen • 15 Training Sessions",
    fishingProject4Title: "Support for Cooperative Fishing Associations",
    fishingProject4Desc:
      "Strengthening fishing cooperatives to improve collective bargaining and marketing capabilities.",
    fishingProject4Details:
      "The project provides technical and administrative support to fishing cooperatives, facilitates access to financing, establishes collective marketing channels, and provides legal consultation to protect fishermen's rights.",
    fishingProject4Stats: "18 Associations Supported • 450+ Beneficiaries",
    fishingKeyProjectsConclusion:
      "Through these strategic projects, the fishing and aquaculture sector in the Reef Saudi Arabia Program continues its vital role in supporting food security, improving the livelihoods of coastal communities, and achieving sustainable development of marine resources in alignment with the Kingdom's Vision 2030 objectives.",

    sector8Title: "Value-Added Products",
    sector8Desc:
      "Sector for developing value-added products from small agricultural holdings. It supports productive rural families, handicrafts, rural industries, and rural tourism activities to establish small home-based projects and local experiences that achieve sustainable income.",
    sector8Point1: "Training Artisans and Rural Entrepreneurs",
    sector8Point2: "E-Commerce Marketing for Rural Products and Services",
    sector8Point3: "Rural Tourism Activities and Community Participation",

    sector9Title: "Productive Families",
    sector9Desc:
      "Supporting productive families to establish small home-based projects that provide sustainable income and promote economic independence",
    sector9Point1: "Financial & Technical Support",
    sector9Point2: "Product Marketing",
    sector9Point3: "Business Development Training",

    exploreSector: "Explore Sector",
    ourRuralSectors: "Our Rural Sectors",
    learnAboutSector: "Learn About the Sector",

    allSector1Name: "Beekeeping Development and Honey Production",
    allSector1Desc:
      "Reef Saudi supports beekeepers through training, financing, and technical guidance, aiming to improve the quality of Saudi honey and develop its value chains.",
    allSector2Name:
      "Development, Production, Processing, and Marketing of Saudi Coffee",
    allSector2Desc:
      "Reef Saudi focuses on empowering coffee farmers in Jazan, Al-Baha, and Asir by improving production, developing supply chains, and elevating the quality of Saudi coffee locally and globally.",
    allSector3Name: "Rose Cultivation and Trade Development",
    allSector3Desc:
      "The program works on developing rose and aromatic plant cultivation, supporting related industries to enhance export opportunities and achieve added economic value.",
    allSector4Name:
      "Development, Production, Processing, and Marketing of Fruits",
    allSector4Desc:
      "Includes supporting the production of fruits such as pomegranate, fig, grape, and others through improving techniques, developing agricultural practices, and enabling farmers to enter new markets.",
    allSector5Name: "Rainfed Agriculture Crops",
    allSector5Desc:
      "The sector supports rain-dependent agriculture in mountainous areas, such as wheat, barley, sorghum, and sesame, focusing on sustainability and preserving natural resources.",
    allSector6Name: "Enhancing the Capabilities of Fishermen and Fish Farmers",
    allSector6Desc:
      "The program supports fishermen and fish farmers through training, financing, and developing modern techniques to increase marine sector productivity and enhance food security.",
    allSector7Name: "Developing Value-Added from Small Holdings",
    allSector7Desc:
      "Works to empower productive families and artisans, develop rural industries that reflect the Kingdom's heritage identity, while supporting local marketing and manufacturing.",
    allSector8Name: "Enhancing the Capabilities of Small Livestock Farmers",
    allSector8Desc:
      "Includes supporting small livestock farmers through training, financing, and veterinary care to improve dairy product quality and increase livestock production efficiency in the Kingdom.",

    // Widgets
    widgetsBadge: "From the Countryside",
    widgetsTitle: "Explore Our Programs & Initiatives",
    widget1Title: "Rural Support Programs",
    widget1Desc:
      "Learn about support programs dedicated to small farmers and productive families, and submit your application online easily.",
    widget1Btn1: "Apply for Support",
    widget1Btn2: "Go to Application Platform",

    widget2Title: "From the Countryside.. Stories to Be Told",
    widget2Desc:
      "A visual window and geographical, social, and cultural display of rural components in various regions of the Kingdom.",
    widget2Btn1: "Watch Visual Stories",
    widget2Btn2: "Explore Full Gallery",

    widget3Title: "Discover What Reef Saudi Supports in Your Region",
    widget3Desc:
      "Explore the agricultural sectors supported by Reef Saudi in each city, and learn about the products and crops that distinguish each region and shape its production identity.",
    widget3Btn: "Discover What Makes Your Region Unique",
    widget3Hover: "Hover to see details",

    // News
    newsTitle: "Latest News",
    newsTitlePrefix: "Latest",
    newsTitleHighlight: "News",
    newsDesc: "Stay updated with our latest stories and achievements",
    viewAllNews: "View All News",
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
    strategicObjectivesTitle: "Strategic Objectives",
    strategicObjectivesIntro:
      'The Sustainable Agricultural Rural Development Program "Reef Saudi Arabia" works to achieve a set of strategic objectives that contribute to diversifying agricultural production, empowering rural agricultural communities, and enhancing environmental and economic sustainability, in line with the goals of the Kingdom\'s Vision 2030.',
    strategicObjectivesCTA1: "Learn About Reef Sustainable Initiatives",
    strategicObjectivesCTA2: "Explore Supported Sectors",
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
    achievementsPageTitle: "Reef Saudi Arabia Program Achievements",
    achievementsPageIntro:
      "The Reef Saudi Arabia program has achieved a series of qualitative accomplishments that have supported small farmers and empowered thousands of rural families while promoting agricultural sustainability. These achievements reflect wide-ranging developmental impact on rural communities across the Kingdom.",
    achievementsHighlightsSubtitle:
      "The figures and indicators above reflect the most prominent achievements of the Reef Saudi Arabia program as follows:",
    achievementsGuinness2:
      "Largest model farm in the world: recorded as part of the program's initiatives to improve agricultural practices and raise productivity.",
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
    achievementsAward5Title: "Arab Digital Government Award for Visual Media",
    achievementsAward5Desc:
      "Awarded in the digital media excellence category for professional visual content serving rural development sectors.",
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
    achievementsAward6Title: "Prince of Hail Environmental Excellence Award",
    achievementsAward6Desc:
      "The program received the award in its second edition in recognition of its contributions to environmental protection and rural community development.",
    achievementsCTA1: "View Full Report",
    achievementsCTA2: "Download Statistics",

    // Annual Reports Section
    transparency: "Transparency",
    annualReportsIntro:
      "Access annual reports documenting the program's progress, impact, and financial performance.",
    annualReport2021: "Annual Report 2021",
    annualReport2022: "Annual Report 2022",
    annualReport2023: "Annual Report 2023",
    viewAllReports: "View All Reports",
    annualReportsCTA1: "View Reef Saudi Arabia Achievements",
    annualReportsCTA2: "Explore Supported Sectors",

    // Beekeeping Sector
    honeySector: "Honey Sector",
    honeyEcosystem: "Ecosystem",
    beekeepingDevelopmentHoneyProduction:
      "Beekeeping Development and Honey Production Sector",
    beekeepingIntro1:
      'The beekeeping and honey production sector is one of the vital sectors supported by the "Reef Saudi Arabia" Program for its direct role in enhancing food security, preserving environmental balance, raising local production efficiency, and empowering beekeepers across the Kingdom. The program focuses on building an integrated value chain that begins with protecting the local strain and developing breeding techniques, and ends with improving product quality and marketing it locally and globally.',
    beekeepingIntro2:
      "The program works to maximize the economic impact of the honey sector by disseminating modern technologies, supporting infrastructure and technical service projects, strengthening beekeepers' capabilities, and raising productivity and operational efficiency levels, contributing to improved livelihoods and support for rural communities.",
    beekeepingIntro3: "",
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
      "Rehabilitation of the Bee Mating Station in Baljurashi",
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
    honeyKeyWorksTrainingClosing:
      "Within this framework, an integrated project booklet for breeding and preserving the local bee strain was prepared, along with a national early warning and monitoring system for bee diseases and pests, strengthening the sector's readiness and rapid response capacity.",
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
    achievements: "Achievements",
    mediaCenter: "Media Center",
    newsPress: "News & Press Releases",
    photoVideo: "Photo & Video Library",
    events: "Events",

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
    howToApply: "Support Application Mechanism",
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
    galleryBook: "Photos from Reef",
    newsPressHeroSubtitle: "",
    newsPressIntro:
      'A dedicated page to display the latest news from the "Reef Saudi Arabia" Program, including official statements, latest updates, success stories, and initiative coverage, to learn about the program\'s efforts in supporting rural communities and achieving sustainable development targets and Saudi Vision 2030.',
    newsPressLinksNote:
      "Full news links and media coverage are added here:",
    photoVideoIntro:
      "A comprehensive library containing all press materials and ready-made elements for media professionals and researchers. Includes videos, infographics, and approved introductory texts, with direct download capability for media use.",
    photoVideoLinksNote:
      "Download links for files and videos are added here:",
    eventsIntro:
      "Learn about all activities, occasions, and events organized by or participated in by the Reef Saudi Arabia Program, including rural forums, conferences, seminars, workshops, and field meetings.",
    eventsLinksNote:
      "Event links and accompanying materials are added here:",
    galleryBookIntro:
      'A journey of sustainable development through the camera lens, through a gallery showcasing the beauty of rural areas in the Kingdom of Saudi Arabia, and the efforts of the "Reef Saudi Arabia" Program in supporting farmers and rural projects.',
    galleryBookWatchStories: "Watch Photo Stories",
    galleryBookExploreGallery: "Explore Full Gallery",
    backToMediaCenter: "Back to Media Center",

    // Support pages
    supportApplyHeroTitle: "Support Application Mechanism",
    supportApplyIntroBadge: "Overview",
    supportApplyIntroHeading: "A Carefully Designed Mechanism to Serve You",
    supportApplyIntro1:
      'The Reef Saudi program support application mechanism has been designed to be easy, clear, and fair, ensuring support reaches deserving productive families, small farmers, and those working in sustainable rural activities.',
    supportApplyIntro2:
      "The application process goes through organized stages aimed at verifying applicant eligibility, studying the project, then connecting it with appropriate support services to achieve the highest developmental impact.",
    supportApplyIntroEasy: "Easy & Clear",
    supportApplyIntroEasyDesc: "Simple procedures",
    supportApplyIntroFair: "Fair & Transparent",
    supportApplyIntroFairDesc: "Clear criteria",
    supportApplyIntroComprehensive: "Comprehensive Support",
    supportApplyIntroComprehensiveDesc: "Financial & Technical",
    supportApplyStagesBadge: "Application Stages",
    supportApplyStagesHeading: "Your Journey to Support",
    supportApplyStagesSub:
      "Five consecutive stages ensuring you a smooth experience from registration to receiving support",
    supportApplyStep1Label: "Stage 01",
    supportApplyStep1Title: "Platform Registration",
    supportApplyStep1Desc:
      "The beneficiary begins their journey by registering through the Reef Saudi electronic platform, creating an account using their basic information such as:",
    supportApplyStep1FieldsHeading: "Required Information:",
    supportApplyStep1Field1: "National ID number",
    supportApplyStep1Field2: "Date of birth",
    supportApplyStep1Field3: "Mobile number registered in their name",
    supportApplyStep1Field4: "Address and administrative region",
    supportApplyStep1Note:
      "The account is then activated via a text message sent to the mobile number, to ensure data accuracy.",
    supportApplyStep2Label: "Stage 02",
    supportApplyStep2Title: "Project Data Entry",
    supportApplyStep2Desc:
      "After logging into the platform, the beneficiary proceeds to enter their project details, including:",
    supportApplyStep2FieldsHeading: "Project Information:",
    supportApplyStep2Field1: "Type of agricultural or rural activity",
    supportApplyStep2Field2: "Project location",
    supportApplyStep2Field3: "Approximate area",
    supportApplyStep2Field4: "Production stages",
    supportApplyStep2Field5: "Current and expected production volume",
    supportApplyStep2Field6: "Tools and equipment used",
    supportApplyStep2Field7: "Current challenges",
    supportApplyStep2Field8: "Future project objectives",
    supportApplyStep2Goal:
      "This data helps the relevant authorities to accurately assess the project and connect it with the appropriate type of support.",
    supportApplyStep3Label: "Stage 03",
    supportApplyStep3Title: "Upload Required Documents",
    supportApplyStep3Desc:
      "The application requires attaching a number of documents, which vary depending on the type of activity, including:",
    supportApplyStep3FieldsHeading: "Required Documents:",
    supportApplyStep3Field1: "Copy of national ID",
    supportApplyStep3Field2: "Proof of residence or project location",
    supportApplyStep3Field3: "Photo of the farm or production site",
    supportApplyStep3Field4:
      "Beekeeping license if the activity is related to honey",
    supportApplyStep3Field5: "Freelance certificate (if available)",
    supportApplyStep3Field6: "Bank account in the applicant's name",
    supportApplyStep3Note:
      "These documents are subject to review by the program's specialized teams.",
    supportApplyStep4Label: "Stage 04",
    supportApplyStep4Title: "Evaluation and Inspection",
    supportApplyStep4Desc:
      "After the application is completed, it is transferred to the relevant authorities to conduct:",
    supportApplyStep4FieldsHeading: "Evaluation Procedures:",
    supportApplyStep4Field1: "Technical review of data",
    supportApplyStep4Field2: "Economic evaluation of the project",
    supportApplyStep4Field3:
      "In some cases: field visit to verify information accuracy",
    supportApplyStep4Goal:
      "Ensure the project's readiness to benefit from support and develop it sustainably.",
    supportApplyStep5Label: "Stage 05 - Final Stage",
    supportApplyStep5Title: "Application Approval and Support Disbursement",
    supportApplyStep5Desc:
      "If all conditions are met, the application is approved and the beneficiary is notified of acceptance, then financial support disbursement begins according to a specific timeline, often linked to implementation stages and project progress.",
    supportApplyStep5NonFinancial:
      "Support is not limited to financial assistance only, but also includes:",
    supportApplyStep5Support1: "Agricultural guidance",
    supportApplyStep5Support2: "Training and qualification",
    supportApplyStep5Support3: "Marketing support",
    supportApplyStep5Support4: "Connection with markets and platforms",
    supportApplyStep5Commitment: "Our Commitment",
    supportApplyStep5Closing:
      'Through this mechanism, the "Reef Saudi" program ensures that support reaches projects most capable of sustainability and achieving economic and social impact.',
    supportApplyNoteLabel: "Note:",
    supportApplyGoalLabel: "Goal:",
    faqsHeroTitle: "Frequently Asked Questions",
    faqsIntroBadge: "Overview",
    faqsIntroHeading: "We Answer All Your Questions",
    faqsIntro:
      "On this page, we compile the most frequently asked questions by beneficiaries and answer them in detail to clarify all aspects related to the Reef Saudi program services.",
    faqsSectionBadge: "FAQs",
    faqsSectionTitle: "Frequently Asked Questions",
    faq1Q: "Who can apply for Reef Saudi program support?",
    faq1A:
      "Farmers, small producers, rural families, and entrepreneurs in agricultural, food, and rural activities can apply, provided they are Saudi nationals residing in areas covered by program support.",
    faq2Q: "Can I apply if I have another job?",
    faq2A:
      "Yes, you can apply provided that your monthly income does not exceed the maximum allowed limit, and that the rural activity is actual and established on the ground.",
    faq3Q: "What types of activities does the support cover?",
    faq3A:
      "The support includes 8 sectors:\n\n• Beekeeping development and honey production\n• Saudi coffee development, production and marketing\n• Rose cultivation and aromatic plants production\n• Fruit development, production and marketing\n• Rain-fed crops cultivation\n• Fishing and aquaculture\n• Added value\n• Enhancing the capabilities of small livestock breeders",
    faq4Q: "How long does it take to respond to the application?",
    faq4A:
      "Applications go through multiple review and evaluation stages, and the response may take from several weeks to two months depending on the project type and volume of applications.",
    faq5Q: "Can I modify the application data after submitting it?",
    faq5A:
      "Yes, at some stages you can modify the data through your personal account before the application is finally approved.",
    faq6Q: "Is the support continuous or one-time?",
    faq6A:
      "It depends on the type of activity; some projects receive periodic support, while others receive one-time foundational support.",
    faq7Q: "How do I know my application status?",
    faq7A:
      "You can track your application through the platform dashboard using your ID number and password.",
    beneficiariesGuideHeroTitle: "Beneficiaries Guide",
    beneficiariesGuideIntro1:
      'The Beneficiaries Guide has been prepared as a practical reference to help beneficiaries maximize their benefit from "Reef Saudi" program services and achieve sustainability for their projects.',
    beneficiariesGuideIntro2:
      "The guide provides a set of practical guidelines and steps, including:",
    beneficiariesGuide1Title: "Understanding Project Nature",
    beneficiariesGuide1Intro:
      "The beneficiary must accurately define their project nature, whether it is:",
    beneficiariesGuide1Item1: "Productive",
    beneficiariesGuide1Item2: "Marketing",
    beneficiariesGuide1Item3: "Service-based",
    beneficiariesGuide1Item4: "Artisanal",
    beneficiariesGuide1Item5: "Natural resource-based",
    beneficiariesGuide1Conclusion:
      "This classification helps in selecting the appropriate type of support.",
    beneficiariesGuide2Title: "Commitment to Technical Standards",
    beneficiariesGuide2Intro:
      "The beneficiary must adhere to good practices in:",
    beneficiariesGuide2Item1: "Irrigation",
    beneficiariesGuide2Item2: "Fertilization",
    beneficiariesGuide2Item3: "Pest control",
    beneficiariesGuide2Item4: "Waste management",
    beneficiariesGuide2Item5: "Product preservation",
    beneficiariesGuide2Conclusion:
      "This is supported through training courses and guidance visits.",
    beneficiariesGuide3Title: "Financial Resource Management",
    beneficiariesGuide3Intro: "The beneficiary learns how to:",
    beneficiariesGuide3Item1: "Distribute project budget",
    beneficiariesGuide3Item2: "Reduce waste",
    beneficiariesGuide3Item3: "Increase efficiency",
    beneficiariesGuide3Item4: "Reinvest profits",
    beneficiariesGuide3Item5: "Prepare simplified financial reports",
    beneficiariesGuide3Conclusion:
      'Reef Saudi program emphasizes that good resource management increases sustainability opportunities.',
    beneficiariesGuide4Title: "Marketing and Promotion",
    beneficiariesGuide4Intro: "The beneficiary is guided to:",
    beneficiariesGuide4Item1: "Product packaging methods",
    beneficiariesGuide4Item2: "Appropriate pricing",
    beneficiariesGuide4Item3: "Using digital platforms",
    beneficiariesGuide4Item4: "Accessing retail points and exhibitions",
    beneficiariesGuide4Item5: "Leveraging partnerships",
    beneficiariesGuide5Title: "Continuous Evaluation",
    beneficiariesGuide5Intro:
      'Reef Saudi program encourages beneficiaries through support, guides and advisory seminars to:',
    beneficiariesGuide5Item1: "Measure production development",
    beneficiariesGuide5Item2: "Develop methods",
    beneficiariesGuide5Item3: "Improve quality",
    beneficiariesGuide5Item4: "Prepare for future expansion",
    beneficiariesGuide5Conclusion:
      "Thus, the beneficiary becomes a partner in development, not just a support recipient.",

    // Inquiries & Communication Service
    contactServiceHeroTitle: "Inquiries & Communication Service",
    contactServiceHeroSubtitle:
      "Your direct window to connect with the Reef Saudi Arabia program",
    contactServiceIntroTitle: "Inquiries & Communication Service",
    contactServiceIntro1:
      'This page has been dedicated as a direct window between the "Reef Saudi Arabia" program and beneficiaries, with the aim of providing support, advice, and responding to all inquiries professionally and quickly.',
    contactServiceIntro2:
      "The inquiries service provides several communication channels, including:",
    contactMethod1Title: "Electronic Contact Form:",
    contactMethod1Desc:
      "Beneficiaries can send their inquiry through a form containing:",
    contactMethod1Field1: "Full name",
    contactMethod1Field2: "ID number",
    contactMethod1Field3: "Mobile number",
    contactMethod1Field4: "Region",
    contactMethod1Field5: "Inquiry subject",
    contactMethod1Field6: "Message details",
    contactMethod1Footer:
      "A response is provided within a short period by a specialized team.",
    contactMethod2Title: "Beneficiaries Service Center:",
    contactMethod2Desc:
      'The "Reef Saudi Arabia" program provides a support center that handles:',
    contactMethod2Field1: "Responding to general inquiries",
    contactMethod2Field2: "Following up on delayed applications",
    contactMethod2Field3: "Guiding beneficiaries through necessary steps",
    contactMethod2Field4: "Assisting with technical issues",
    contactMethod3Title: "Digital Communication Channels:",
    contactMethod3Desc: "The program also enables communication through:",
    contactMethod3Field1: "Official email",
    contactMethod3Field2: "Social media platforms",
    contactMethod3Field3: "(LinkedIn / Instagram / X / Facebook)",
    contactMethod3Footer:
      "The program is committed to publishing updates, alerts, opportunities, initiatives, and new programs through its official website and all its social media platforms and accounts.",
    contactMethod4Title: "Field Support:",
    contactMethod4Desc:
      "The program provides field visits conducted by specialized teams to support beneficiaries on the ground, especially in remote rural areas.",
    contactMethod4Footer:
      "This integrated system aims to ensure an open, permanent, and effective channel between the program and beneficiaries, enhancing transparency and trust while serving the path of sustainable development.",

    accessibilityTools: "Accessibility Tools",
    copyrightFull:
      "All intellectual property rights reserved for Reef Saudi Arabia Program",
    copyrightSupervision:
      "Under the supervision of the Ministry of Environment, Water and Agriculture",

    // Beekeeping Page
    beekeepingHeroTitle: "Beekeeping Sector",

    // Roses & Aromatic Plants Sector
    rosesHeroTitle: "Roses Cultivation Development and Rose Trade Sector.",
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
    numberOfBeneficiaries: "Number of Beneficiaries",
    marketShare: "Market Share",
    rosesCumulativeGrowth: "Cumulative Growth",
    rosesTargetAchievement: "Target Achievement",
    rosesProductionScale: "Production Scale",
    rosesSuitableArea: "Suitable cultivation area",
    rosesCurrentlyCultivated: "Currently cultivated area",
    rosesExpansionPotential: "Future expansion potential",
    hectares: "hectares",
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
    projects: "projects",
    rosesProjectsCountLabel: "14 projects",
    rosesProjectsValueLabel: "135.6 million SAR",
    rosesBeneficiariesLabel: "beneficiaries",
    rosesMenLabel: "men",
    rosesWomenLabel: "women",
    rosesProductionEvolution: "Production Evolution",
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

    activity1Title: "1- Establishment of demonstration fields",
    activity1Desc:
      "A total of 12 demonstration fields were implemented to develop rose and jasmine cultivation in the Taif and Jazan regions, applying the latest practices in pruning, fertilization, and pest control.",
    activity1Sessions:
      "These efforts included awareness sessions with 120 farmers, which contributed to:",
    activity1Stat1: "100% increase in field productivity",
    activity1Stat2:
      "Raising average production from 300–400 flowers to 1,200–1,400 flowers per plant",
    activity1Fields: "12 demonstration fields",
    activity1Farmers: "120 farmers",

    activity2Title: "2- Introduction of cooling technology",
    activity2Desc:
      "Six refrigerated containers were delivered for transporting roses after harvest, with the aim of:",
    activity2Point1: "Preserving rose quality prior to distillation",
    activity2Point2: "Extending the storage life of flowers",
    activity2Point3: "Reducing losses and improving supply chain efficiency",
    activity2Containers: "6 refrigerated containers",

    activity3Title: "3- Introduction of composting technology",
    activity3Desc:
      "Production of compost from rose distillation waste was initiated and used as a natural, eco-friendly fertilizer, enhancing environmental sustainability and reducing fertilization costs.",

    activity4Title: "4- Rose cultivation and production mapping",
    activity4Desc:
      "A technical study was conducted using remote sensing technologies to develop a precise cultivation map, resulting in:",
    activity4Suitable: "Suitable cultivation area: 621 hectares",
    activity4Current: "Currently cultivated area: 346 hectares",
    activity4Expansion: "Future expansion potential: 275 hectares",
    activity4Standards:
      "In addition, specifications for Saudi rose oil were developed to ensure quality and competitiveness in the markets.",

    activity5Title: "5- Workshops and field visits",
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
      "Introducing and disseminating modern systems and technologies in beekeeping, honey production, and honey classification",
    beekeepingObj2:
      "Adding high value and creating employment opportunities for Saudis, especially young men and women",
    beekeepingObj3:
      "Increasing beekeepers' income and improving their standard of living",
    beekeepingObj4:
      "Preserving the local strain and improving its quality to compete and reduce reliance on imports",

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
    openDropdown: "فتح القائمة المنسدلة",
    news: "الأخبار والفعاليات",
    latestNews: "آخر الأخبار",
    newsArchive: "أرشيف الأخبار",
    language: "English",
    // Header dropdowns (additional)
    initiatives: "المبادرات",
    impactStats: "الأثر والإحصائيات",

    sustainabilityHeroTitle: "المبادرات المستدامة",
    sustainabilityHeroSubtitle:
      "التزامنا بالحفاظ على البيئة وترشيد الموارد وتحقيق الاستدامة الزراعية طويلة الأمد في المجتمعات الريفية بالمملكة",
    sustIntroP1:
      'تُجسّد المبادرات المستدامة أحد الأعمدة الرئيسية في توجهات برنامج "ريف السعودية" نحو تحقيق تنمية ريفية طويلة الأمد، تقوم على تمكين المجتمعات المحلية، وتعزيز كفاءة الإنتاج الزراعي، وربط الموارد الطبيعية بقيم اقتصادية واجتماعية مستدامة. وتنطلق هذه المبادرات من رؤية شاملة تهدف إلى تحويل النشاط الزراعي من ممارسة تقليدية إلى منظومة إنتاجية متكاملة تواكب متطلبات الأمن الغذائي والاستدامة البيئية والتمكين الاقتصادي.',
    sustIntroP2:
      "يركّز البرنامج على استثمار الإمكانات الريفية الكامنة، عبر دعم الحيازات الصغيرة، وتحسين جودة سلاسل الإنتاج، وتعزيز المهارات والمعرفة، وذلك من خلال منظومة متكاملة من البرامج والمشاريع التي توازن بين البعد الاقتصادي والاجتماعي والبيئي، وتضع الإنسان والبيئة في قلب عملية التنمية.",

    modelFarmsTitle: "أولاً: مشروع المزارع النموذجية",
    modelFarmsBadge: "المزارع النموذجية",
    modelFarmsP1:
      "يستهدف المشروع اختيار مجموعة من المزارعين القياديين وتأهيل البنية التحتية لمزارعهم، وبالذات فيما يتعلق بشبكات الري المرشدة، إلى جانب تزويدهم بالمدخلات الزراعية اللازمة ليصبحوا قادرين على تبني أفضل الممارسات الزراعية الحديثة والمستدامة.",
    modelFarmsP2:
      "كما تُستخدم هذه المزارع النموذجية كمراكز تدريب ميداني من خلال إقامة ورش عمل حقلية لتدريب بقية المزارعين على التقنيات الحديثة في الزراعة المستدامة وترشيد استخدام المياه وزيادة الإنتاجية وتحسين جودة المنتجات.",
    modelFarmsAchievementTitle: "وقد حقق المشروع ما يلي:",
    modelFarmsRegions: "مناطق مختلفة",
    modelFarmsCount: "مزرعة نموذجية",
    modelFarmsTrainees: "متدرباً",
    modelFarmsWorkshops: "ورشة تدريبية ميدانية",
    modelFarmsDonums: "دونم",
    modelFarmsVisits: "زيارة دعم وإشراف ميداني",

    agricExtensionTitle: "ثانياً: الإرشاد الزراعي",
    agricExtensionIntro:
      "جرى العمل على تطوير منظومة متكاملة للإرشاد الزراعي تشمل الرقمنة، التوعية، التدريب المباشر، والمنتجات المعرفية المخصصة لصغار المزارعين، وذلك من خلال عدة مسارات مترابطة:",

    digitalFieldSchoolsTitle: "1- المدارس الحقلية الرقمية:",
    digitalFieldSchoolsDesc:
      "تم تحديد مجالات وأنشطة المدارس الحقلية الرقمية، وعددها 39 مدرسة موزعة على:",
    digitalFieldSchoolsCrops: "محاصيل حقلية: القمح، الذرة، الدخن",
    digitalFieldSchoolsFruits: "الفاكهة: الفواكه شبه الاستوائية",
    digitalFieldSchoolsBeekeeping: "تربية النحل وإنتاج العسل",
    digitalFieldSchoolsRoses: "الورد",
    digitalFieldSchoolsFish: "الأسماك",
    digitalFieldSchoolsAromatics: "النباتات العطرية",
    digitalFieldSchoolsFarms:
      "تم اختيار نحو 650 مزرعة كنقاط تطبيق للمدارس الحقلية الرقمية.",
    digitalFieldSchoolsPlatform:
      "تم تصميم منصة إلكترونية وموقع إلكتروني لبث الورش وتنظيم المحتوى التدريبي والرجوع إليه لاحقاً.",
    digitalFieldSchoolsTraining:
      "جرى تدريب المزارعين على كيفية تنفيذ الورش والتصوير الاحترافي والمشاركة عبر المنصة.",

    extensionMessagesTitle: "2- الرسائل الإرشادية:",
    extensionMessagesDesc:
      "إعداد رسائل إرشادية شاملة لمختلف الأنشطة الزراعية والحيوانية، بالتنسيق مع الإدارة العامة للإرشاد الزراعي.",
    extensionMessagesApp: "تطوير تطبيق مرشدك الزراعي ونشر الرسائل من خلاله.",
    extensionMessagesPublished:
      "إعداد ونشر 74 رسالة إرشادية حول التعاونيات الزراعية.",
    extensionMessagesBeneficiaries:
      "استفاد منها أكثر من 500 عضو في الجمعيات التعاونية.",
    extensionMessagesPrograms:
      "تطوير 7 برامج تدريبية للتعاونيات.",
    extensionMessagesLeaders:
      "تدريب 9 قادة جمعيات في مناطق مكة، جازان، والحدود الشمالية.",

    extensionMeetingsTitle: "3- اللقاءات والزيارات الإرشادية:",
    extensionMeetingsIntro:
      "تنفيذ 22 جلسة ميدانية لحوالي 602 مزارع.",
    extensionMeetingsTopicsTitle: "شملت الجلسات:",
    extensionMeetingsSessions: "جلسة ميدانية",
    extensionMeetingsFarmers: "مزارع",
    extensionMeetingsTopic1: "تقنيات الري الحديثة",
    extensionMeetingsTopic2: "الممارسات الزراعية الجيدة",
    extensionMeetingsTopic3: "التقليم والتسميد",
    extensionMeetingsTopic4: "تحسين إنتاجية النحل والعسل",
    extensionMeetingsTopic5:
      "التقنيات الحديثة في الإنتاج النباتي والحيواني",

    knowledgeNetworksTitle: "4- شبكات تبادل الخبرات:",
    knowledgeNetworksDesc:
      "إنشاء 4 مجموعات رقمية لتبادل الخبرات بين المزارعين عبر وسائل التواصل الاجتماعي.",
    knowledgeNetworksBeekeeping: "تربية النحل",
    knowledgeNetworksBeekeepingParticipants:
      "تربية النحل (17 مشاركاً – الباحة، عسير، جازان)",
    knowledgeNetworksOrganic: "النحل العضوي",
    knowledgeNetworksOrganicParticipants:
      "النحل العضوي (13 مشاركاً – المدينة المنورة ومكة المكرمة)",
    knowledgeNetworksRoses: "زراعة الورد",
    knowledgeNetworksRosesParticipants:
      "زراعة الورد (18 مشاركاً – الطائف)",
    knowledgeNetworksFruits: "الفاكهة",
    knowledgeNetworksFruitsParticipants:
      "الفاكهة (8 مشاركين – الباحة)",

    agricMarketingTitle: "ثالثاً: التسويق الزراعي",
    digitalMarketSystemTitle:
      "1- النظام والتطبيق الرقمي لمعلومات الأسواق الزراعية:",
    digitalMarketSystemItem1:
      "تجهيز وثائق طرح المشروع وربطه بمنصة الوزارة.",
    digitalMarketSystemItem2: "الإعلان عن المنافسة للشركات المؤهلة.",
    digitalMarketSystemItem3: "فرز العروض واختيار الجهة المنفذة للنظام.",
    digitalMarketSystemItem4: "استقطاب خبير متخصص في التسويق الزراعي.",
    digitalMarketSystemGoalsTitle: "يهدف النظام إلى:",
    digitalMarketSystemGoal1: "دعم قرارات البيع",
    digitalMarketSystemGoal2: "تحسين وصول المنتجين إلى الأسواق",
    digitalMarketSystemGoal3: "توفير معلومات أسعار ومواقع ونقاط بيع",

    postHarvestTitle: "2- عمليات ما بعد الحصاد:",
    postHarvestItem1: "دراسة واقع عمليات ما بعد الحصاد لدى صغار المنتجين",
    postHarvestItem2: "إعداد خطة تطوير خدمات التسويق الزراعي",
    postHarvestItem3: "حصر المعدات المطلوبة",
    postHarvestItem4: "إعداد الأدلة الفنية الخاصة بعمليات ما بعد الحصاد",

    salesPointsTitle: "3- نقاط البيع:",
    salesPointsIntro:
      "تم إنشاء نقاط بيع مخصصة لدعم وتسويق منتجات الأسر الريفية في عدة مناطق، منها:",
    salesPoint1: "مقهى ريفي في مزرعة قلف – الدائر بني مالك",
    salesPoint2: "مقهى ريفي في مزرعة العافية – محافظة الطائف",
    salesPoint3: "محمصة بن في محافظة الدائر بني مالك",
    salesPoint4: "معرض لبيع العسل في محافظة دومة الجندل",
    salesPoint5: "معرض لبيع الفل في محافظة أبو عريش",
    salesPoint6: "معرض لبيع المحاصيل البعلية في محافظة الليث",
    salesPointsImpact:
      "وقد ساهمت هذه النقاط في تعزيز الدخل وتنويع مصادره وربط المنتج مباشرة بالمستهلكين.",

    impactStatsTitle: "الأثر والإحصاءات",
    impactStatsSubtitle: "أثر اقتصادي مباشر ومتنام",
    impactStatsIntro:
      'تم قياس الأثر الاجتماعي والاقتصادي والبيئي لمبادرات برنامج "ريف السعودية" من خلال نتائج كمية ومؤشرات دقيقة، من أبرزها:',

    trainingCapacityTitle: "1- التدريب وبناء القدرات:",
    trainingCourses: "دورة تدريبية في عام 2024",
    trainingParticipants: "مشاركاً في مختلف مجالات القطاع الريفي",
    trainingMen: "رجال",
    trainingWomen: "نساء",
    trainingFieldsTitle: "شملت المجالات:",
    trainingBeekeeping: "تربية النحل وإنتاج العسل",
    trainingRainfed: "الحبوب البعلية",
    trainingLivestock: "الثروة الحيوانية",
    trainingFisheries: "الأسماك",
    trainingValueAdded: "القيمة المضافة",
    trainingCooperatives: "التعاونيات الزراعية",
    trainingExtension: "الإرشاد الزراعي",
    trainingCapacityBuilding: "التدريب وبناء القدرة",
    trainingCategoriesTitle: "كما تم تصنيف المتدربين إلى:",
    trainingEmployees: "موظفون",
    trainingFarmers: "مزارعون وأعضاء تعاونيات",

    studyToursTitle: "2- الجولات الدراسية:",
    studyToursDesc: "عدد الجولات الدراسية خلال 2024:",
    studyToursTotal: "جولة",
    studyToursInternal: "داخلية",
    studyToursExternal: "خارجية",

    sustImpactCTA: "استكشف القطاعات الزراعية المدعومة",
    sustMarketingCTA1: "اطّلع على أهداف البرنامج",
    sustMarketingCTA2: "استكشف القطاعات المدعومة",
    sustPartnersCTA1: "استكشف القطاعات الزراعية",
    sustPartnersCTA2: "تعرّف على مبادرات ريف مستدام",

    partnershipsTitle: "شركاء الاستدامة",
    partnershipsIntro:
      "في إطار تعزيز العمل التكاملي بين الجهات الحكومية والقطاع الخاص والمؤسسات الأكاديمية والرياضية والمجتمعية، وقّع برنامج ريف السعودية 12 مذكرة تعاون استراتيجية تهدف إلى توسيع الأثر التنموي المستدام في المناطق الريفية، ورفع كفاءة المشاريع الإنتاجية والتمويلية والتسويقية للأسر والمزارعين ورواد الأعمال.",
    partnershipsSubtitle: "شملت مذكرات التعاون الجهات التالية:",

    partnerNadec: "شركة نادك",
    partnerNadecDesc:
      "دعم الأنشطة الزراعية وتطوير سلاسل الإمداد المستدامة.",
    partnerDan: "شركة دان (DAN)",
    partnerDanDesc: "تعزيز الابتكار الغذائي والتنمية الريفية.",
    partnerRivana: "الجمعية التعاونية للسياحة الريفية والبيئية (ريفنا)",
    partnerRivanaDesc: "دعم السياحة الريفية المسؤولة بيئياً.",
    partnerJahez: "شركة جاهز الدولية (Jahez Group)",
    partnerJahezDesc:
      "تمكين وصول المنتجات الريفية للأسواق الرقمية الحديثة.",
    partnerKFU: "جامعة الملك فيصل",
    partnerKFUDesc: "التعاون في البحث والتطوير الزراعي المستدام.",
    partnerAlhasa: "هيئة تطوير الأحساء",
    partnerAlhasaDesc:
      "دعم المشاريع الريفية المرتبطة بالتنمية المناطقية.",
    partnerFateh: "نادي الفتح الرياضي",
    partnerFatehDesc:
      "تمكين المبادرات المجتمعية والتنموية في المناطق المستهدفة.",
    partnerShabab: "نادي الشباب",
    partnerShababDesc:
      "دعم أنشطة التوعية والتنمية بين فئة الشباب.",
    partnerCateron: "شركة كاتريون",
    partnerCateronDesc:
      "دعم سلاسل الإمداد والخدمات اللوجستية للقطاعات الريفية.",
    partnerIrrigation: "المؤسسة العامة للري",
    partnerIrrigationDesc:
      "تعزيز استدامة الموارد المائية في الزراعة الريفية.",
    partnerCoopCouncil: "مجلس الجمعيات التعاونية",
    partnerCoopCouncilDesc:
      "تطوير قدرات الجمعيات التعاونية وتمكينها إدارياً وإنتاجياً.",
    partnerTVTC: "المؤسسة العامة للتدريب التقني والمهني",
    partnerTVTCDesc: "بناء القدرات وتأهيل الكفاءات المحلية.",

    partnershipGoalsTitle: "أهداف شراكات الاستدامة:",
    partnershipGoalsIntro: "تركز هذه الشراكات على تحقيق أربعة مسارات رئيسية:",
    partnershipGoal1: "رفع كفاءة الإنتاج في المزارع والأسر الريفية.",
    partnershipGoal2: "تحسين فرص الوصول إلى الأسواق المحلية والدولية.",
    partnershipGoal3: "توطين المعرفة والخبرة الزراعية المستدامة.",
    partnershipGoal4:
      "خلق فرص عمل جديدة تعزز الاستقرار الاقتصادي في المناطق الريفية.",

    partnershipImpactTitle: "أثر الشراكات على ريف مستدام:",
    partnershipImpactIntro: "أسهمت هذه الاتفاقيات في:",
    partnershipImpact1: "تعزيز التكامل بين الجهات الحكومية والخاصة.",
    partnershipImpact2: "تسريع تنفيذ المبادرات والمشاريع.",
    partnershipImpact3: "دعم الابتكار في الزراعة والممارسات المستدامة.",
    partnershipImpact4: "توسيع نطاق الاستفادة من برامج ريف.",

    additionalMeetingsTitle: "",
    additionalMeetingsIntro:
      "كذلك وضمن إطار تعزيز التكامل بين الجهات ذات العلاقة، عقد برنامج ريف السعودية عدداً من اللقاءات والاجتماعات مع شركاء محليين وجهات حكومية ومؤسسات معنية، من بينها:",
    meetingPartner1: "صندوق التنمية الزراعية",
    meetingPartner2: "الهيئة العامة للغذاء والدواء",
    meetingPartner3: "شركة القهوة السعودية",
    meetingPartner4: "مركز الاستدامة",
    meetingPartner5: "هيئة المنشآت الصغيرة والمتوسطة",

    meetingResultsTitle: "وقد نتج عن هذه الشراكات:",
    meetingResult1: "دعم تنفيذ الخطط التشغيلية",
    meetingResult2: "مواءمة المشاريع مع رؤية المملكة 2030",
    meetingResult3: "تطوير فرص استثمارية جديدة",
    meetingResult4: "تعزيز تمكين الأسر الريفية",
    meetingResult5: "نقل المعرفة والخبرات",
    meetingResult6: "توسيع نطاق التأثير التنموي",

    implementationTitle: "كما تم:",
    implementation1: "إعداد خطط تنفيذية للفترة (2025 – 2030)",
    implementation2: "متابعة استقطاب خبرات وطنية ودولية",
    implementation3: "تشكيل لجنة تنفيذية برئاسة وكيل الوزارة",
    implementation4:
      "عقد اجتماعات دورية لتقييم الأداء وتحسين مستوى الإنجاز",

    newsPress: "الأخبار والبيانات الصحفية",
    photoVideo: "مكتبة الصور والفيديو",
    events: "الفعاليات",
    galleryBook: "صور من الريف",
    newsPressHeroSubtitle: "",
    newsPressIntro:
      'صفحة مخصّصة لعرض أحدث أخبار برنامج "ريف السعودية"، تشمل البيانات الرسمية، وآخر المستجدات، وقصص النجاح، وتغطيات المبادرات، لمعرفة جهود البرنامج في دعم المجتمعات الريفية وتحقيق مستهدفات التنمية المستدامة ورؤية المملكة 2030.',
    newsPressLinksNote: "هنا تُضاف روابط الأخبار الكاملة والتغطيات الإعلامية:",
    photoVideoIntro:
      "مكتبة شاملة تضم كل المواد الصحفية والعناصر الجاهزة للإعلاميين والباحثين. تشمل الفيديوهات، والإنفوجرافيك، والنصوص التعريفية المعتمدة، مع إمكانية التحميل المباشر للاستخدام الإعلامي.",
    photoVideoLinksNote: "هنا تُضاف روابط تحميل الملفات، والفيديوهات:",
    eventsIntro:
      "تعرف على جميع الأنشطة والمناسبات والفعاليات التي ينظمها برنامج ريف السعودية أو يشارك بها بما في ذلك الملتقيات الريفية والمؤتمرات والندوات وورش العمل واللقاءات الميدانية.",
    eventsLinksNote: "هنا تُضاف روابط الفعاليات والمواد المرافقة:",
    galleryBookIntro:
      'رحلة التنمية المستدامة عبر عدسة الكاميرا، من خلال معرض يبرز جمال المناطق الريفية في المملكة العربية السعودية، وجهود برنامج "ريف السعودية" في دعم المزارعين والمشاريع الريفية.',
    galleryBookWatchStories: "شاهد القصص المصورة",
    galleryBookExploreGallery: "استكشف المعرض الكامل",
    backToMediaCenter: "الرجوع إلى المركز الإعلامي",

    // Support pages
    supportApplyHeroTitle: "آلية التقديم على الدعم",
    supportApplyIntroBadge: "نبذة",
    supportApplyIntroHeading: "آلية مصممة بعناية لخدمتك",
    supportApplyIntro1:
      'تم تصميم آلية التقديم على دعم برنامج "ريف السعودية" لتكون سهلة، واضحة، وعادلة، وتضمن وصول الدعم إلى مستحقيه من الأسر المنتجة وصغار المزارعين والعاملين في الأنشطة الريفية المستدامة.',
    supportApplyIntro2:
      "تمر عملية التقديم عبر مراحل منظمة تهدف إلى التحقق من أهلية المتقدم، ودراسة المشروع، ثم ربطه بخدمات الدعم المناسبة، بما يحقق أعلى أثر تنموي.",
    supportApplyIntroEasy: "سهل وواضح",
    supportApplyIntroEasyDesc: "إجراءات بسيطة",
    supportApplyIntroFair: "عادل وشفاف",
    supportApplyIntroFairDesc: "معايير واضحة",
    supportApplyIntroComprehensive: "دعم شامل",
    supportApplyIntroComprehensiveDesc: "مالي وفني",
    supportApplyStagesBadge: "مراحل التقديم",
    supportApplyStagesHeading: "رحلتك نحو الدعم",
    supportApplyStagesSub:
      "خمس مراحل متتالية تضمن لك تجربة سلسة من التسجيل حتى الحصول على الدعم",
    supportApplyStep1Label: "المرحلة 01",
    supportApplyStep1Title: "التسجيل في المنصة",
    supportApplyStep1Desc:
      "يبدأ المستفيد رحلته بالتسجيل عبر منصة ريف السعودية الإلكترونية، حيث يقوم بإنشاء حساب باستخدام بياناته الأساسية مثل:",
    supportApplyStep1FieldsHeading: "البيانات المطلوبة:",
    supportApplyStep1Field1: "رقم الهوية الوطنية",
    supportApplyStep1Field2: "تاريخ الميلاد",
    supportApplyStep1Field3: "رقم الجوال المسجل باسمه",
    supportApplyStep1Field4: "العنوان والمنطقة الإدارية",
    supportApplyStep1Note:
      "يتم بعد ذلك تفعيل الحساب عبر رسالة نصية مرسلة إلى رقم الجوال، لضمان صحة البيانات.",
    supportApplyStep2Label: "المرحلة 02",
    supportApplyStep2Title: "إدخال بيانات المشروع",
    supportApplyStep2Desc:
      "بعد تسجيل الدخول إلى المنصة، ينتقل المستفيد لإدخال تفاصيل مشروعه، وتشمل:",
    supportApplyStep2FieldsHeading: "معلومات المشروع:",
    supportApplyStep2Field1: "نوع النشاط الزراعي أو الريفي",
    supportApplyStep2Field2: "موقع المشروع",
    supportApplyStep2Field3: "المساحة التقريبية",
    supportApplyStep2Field4: "مراحل الإنتاج",
    supportApplyStep2Field5: "حجم الإنتاج الحالي والمتوقع",
    supportApplyStep2Field6: "الأدوات والمعدات المستخدمة",
    supportApplyStep2Field7: "التحديات القائمة",
    supportApplyStep2Field8: "الأهداف المستقبلية للمشروع",
    supportApplyStep2Goal:
      "هذه البيانات تساعد الجهات المختصة على تقييم المشروع بدقة وربطه بنوع الدعم المناسب.",
    supportApplyStep3Label: "المرحلة 03",
    supportApplyStep3Title: "رفع الوثائق المطلوبة",
    supportApplyStep3Desc:
      "يتطلب التقديم إرفاق عدد من الوثائق، والتي تختلف حسب نوع النشاط، ومن أهمها:",
    supportApplyStep3FieldsHeading: "الوثائق المطلوبة:",
    supportApplyStep3Field1: "نسخة من الهوية الوطنية",
    supportApplyStep3Field2: "إثبات السكن أو موقع المشروع",
    supportApplyStep3Field3: "صورة للمزرعة أو موقع الإنتاج",
    supportApplyStep3Field4: "رخصة النحل في حال كان النشاط مرتبطًا بالعسل",
    supportApplyStep3Field5: "شهادة العمل الحر (إن توفرت)",
    supportApplyStep3Field6: "حساب بنكي باسم المتقدم",
    supportApplyStep3Note:
      "تخضع هذه الوثائق للمراجعة من قبل الفرق المختصة في البرنامج.",
    supportApplyStep4Label: "المرحلة 04",
    supportApplyStep4Title: "التقييم والمعاينة",
    supportApplyStep4Desc:
      "بعد اكتمال الطلب، يتم تحويله إلى الجهات المختصة لإجراء:",
    supportApplyStep4FieldsHeading: "إجراءات التقييم:",
    supportApplyStep4Field1: "مراجعة فنية للبيانات",
    supportApplyStep4Field2: "تقييم اقتصادي للمشروع",
    supportApplyStep4Field3:
      "في بعض الحالات: زيارة ميدانية للتحقق من صحة المعلومات",
    supportApplyStep4Goal:
      "ضمان جاهزية المشروع للاستفادة من الدعم وتنميته بشكل مستدام.",
    supportApplyStep5Label: "المرحلة 05 - المرحلة النهائية",
    supportApplyStep5Title: "اعتماد الطلب وصرف الدعم",
    supportApplyStep5Desc:
      "في حال استيفاء جميع الشروط، يتم اعتماد الطلب وإبلاغ المستفيد بالقبول، ثم يبدأ صرف الدعم المالي وفق خطة زمنية محددة، ترتبط غالباً بمراحل التنفيذ والتقدم في المشروع.",
    supportApplyStep5NonFinancial:
      "لا يقتصر الدعم على الجانب المالي فقط، بل يشمل أيضاً:",
    supportApplyStep5Support1: "الإرشاد الزراعي",
    supportApplyStep5Support2: "التدريب والتأهيل",
    supportApplyStep5Support3: "الدعم التسويقي",
    supportApplyStep5Support4: "الربط مع الأسواق والمنصات",
    supportApplyStep5Commitment: "التزامنا",
    supportApplyStep5Closing:
      'بهذه الآلية، يضمن برنامج "ريف السعودية" وصول الدعم إلى المشاريع الأكثر قدرة على الاستدامة وتحقيق الأثر الاقتصادي والاجتماعي.',
    supportApplyNoteLabel: "ملاحظة:",
    supportApplyGoalLabel: "الهدف:",
    faqsHeroTitle: "الأسئلة الشائعة",
    faqsIntroBadge: "نبذة",
    faqsIntroHeading: "نجيب على جميع تساؤلاتك",
    faqsIntro:
      "في هذه الصفحة يتم تجميع أكثر الأسئلة التي يطرحها المستفيدون، والإجابة عنها بشكل تفصيلي لتوضيح جميع الجوانب المتعلقة بخدمات برنامج ريف السعودية.",
    faqsSectionBadge: "أسئلة متكررة",
    faqsSectionTitle: "أسئلة متكررة",
    faq1Q: "من يمكنه التقديم على دعم برنامج ريف السعودية؟",
    faq1A:
      "يمكن للمزارعين وصغار المنتجين والأسر الريفية ورواد الأعمال في الأنشطة الزراعية والغذائية والريفية التقديم، بشرط أن يكون سعودي الجنسية ويقيم في المناطق المشمولة بدعم البرنامج.",
    faq2Q: "هل يمكن التقديم إذا كان لدي وظيفة أخرى؟",
    faq2A:
      "نعم، يمكن التقديم بشرط ألا يتجاوز الدخل الشهري الحد الأعلى المسموح به، وأن يكون النشاط الريفي فعلياً ومثبتاً على أرض الواقع.",
    faq3Q: "ما هي أنواع الأنشطة التي يشملها الدعم؟",
    faq3A:
      "يشمل الدعم 8 قطاعات هي:\n\n• تطوير وتربية النحل وإنتاج العسل\n• تطوير وإنتاج وتسويق القهوة السعودية\n• تنمية زراعة وإنتاج الورد والنباتات العطرية\n• تطوير وإنتاج وتسويق الفاكهة\n• زراعة المحاصيل البعلية\n• الصيد والاستزراع السمكي\n• القيمة المضافة\n• تعزيز قدرات صغار مربي الماشية",
    faq4Q: "كم يستغرق الرد على الطلب؟",
    faq4A:
      "تمر الطلبات بمراحل مراجعة وتقييم متعددة، وقد يستغرق الرد من عدة أسابيع حتى شهرين بحسب نوع المشروع وحجم الطلبات.",
    faq5Q: "هل يمكن تعديل بيانات الطلب بعد إرساله؟",
    faq5A:
      "نعم، في بعض المراحل يمكن تعديل البيانات عبر الحساب الشخصي قبل اعتماد الطلب بشكل نهائي.",
    faq6Q: "هل الدعم مستمر أم لمرة واحدة؟",
    faq6A:
      "يعتمد ذلك على نوع النشاط، فبعض المشاريع تحصل على دعم دوري، وأخرى تحصل على دعم تأسيسي لمرة واحدة.",
    faq7Q: "كيف أعرف حالة طلبي؟",
    faq7A:
      "يمكن متابعة الطلب عبر لوحة التحكم في المنصة باستخدام رقم الهوية وكلمة المرور.",
    beneficiariesGuideHeroTitle: "دليل المستفيدين",
    beneficiariesGuideIntro1:
      'تم إعداد دليل المستفيدين ليكون مرجعاً عملياً يساعد المستفيدين في الاستفادة القصوى من خدمات برنامج "ريف السعودية" وتحقيق الاستدامة لمشاريعهم.',
    beneficiariesGuideIntro2:
      "يقدّم الدليل مجموعة من الإرشادات والخطوات العملية، تشمل:",
    beneficiariesGuide1Title: "فهم طبيعة المشروع",
    beneficiariesGuide1Intro:
      "على المستفيد تحديد طبيعة مشروعه بدقة، وهل هو:",
    beneficiariesGuide1Item1: "إنتاجي",
    beneficiariesGuide1Item2: "تسويقي",
    beneficiariesGuide1Item3: "خدمي",
    beneficiariesGuide1Item4: "حرفي",
    beneficiariesGuide1Item5: "قائم على موارد طبيعية",
    beneficiariesGuide1Conclusion:
      "هذا التصنيف يساعد في اختيار نوع الدعم المناسب.",
    beneficiariesGuide2Title: "الالتزام بالمعايير الفنية",
    beneficiariesGuide2Intro:
      "يجب على المستفيد الالتزام بالممارسات الجيدة في:",
    beneficiariesGuide2Item1: "الري",
    beneficiariesGuide2Item2: "التسميد",
    beneficiariesGuide2Item3: "مكافحة الآفات",
    beneficiariesGuide2Item4: "إدارة المخلفات",
    beneficiariesGuide2Item5: "حفظ المنتجات",
    beneficiariesGuide2Conclusion:
      "ويتم دعم ذلك من خلال الدورات التدريبية والزيارات الإرشادية.",
    beneficiariesGuide3Title: "إدارة الموارد المالية",
    beneficiariesGuide3Intro: "يتعلم المستفيد كيفية:",
    beneficiariesGuide3Item1: "توزيع ميزانية المشروع",
    beneficiariesGuide3Item2: "تقليل الهدر",
    beneficiariesGuide3Item3: "رفع الكفاءة",
    beneficiariesGuide3Item4: "إعادة استثمار الأرباح",
    beneficiariesGuide3Item5: "إعداد تقارير مالية مبسطة",
    beneficiariesGuide3Conclusion:
      'يؤكد برنامج "ريف السعودية" على أن الإدارة الجيدة للموارد ترفع من فرص الاستدامة.',
    beneficiariesGuide4Title: "التسويق والترويج",
    beneficiariesGuide4Intro: "يتم توجيه المستفيد إلى:",
    beneficiariesGuide4Item1: "كيفية تغليف المنتج",
    beneficiariesGuide4Item2: "التسعير المناسب",
    beneficiariesGuide4Item3: "استخدام المنصات الرقمية",
    beneficiariesGuide4Item4: "الدخول إلى نقاط البيع والمعارض",
    beneficiariesGuide4Item5: "الاستفادة من الشراكات",
    beneficiariesGuide5Title: "التقييم المستمر",
    beneficiariesGuide5Intro:
      'يشجّع برنامج "ريف السعودية" عبر الدعم والأدلة والندوات الإرشادية المستفيد على:',
    beneficiariesGuide5Item1: "قياس تطور إنتاجه",
    beneficiariesGuide5Item2: "تطوير أساليبه",
    beneficiariesGuide5Item3: "تحسين الجودة",
    beneficiariesGuide5Item4: "الاستعداد للتوسع مستقبلاً",
    beneficiariesGuide5Conclusion:
      "بهذا يصبح المستفيد شريكاً في التنمية وليس مجرد متلقٍ للدعم.",

    // Inquiries & Communication Service
    contactServiceHeroTitle: "خدمة الاستفسارات والتواصل",
    contactServiceHeroSubtitle:
      "نافذتك المباشرة للتواصل مع برنامج ريف السعودية",
    contactServiceIntroTitle: "خدمة الاستفسارات والتواصل",
    contactServiceIntro1:
      'تم تخصيص هذه الصفحة لتكون نافذة مباشرة بين برنامج "ريف السعودية" والمستفيدين، بهدف تقديم الدعم والمشورة والاستجابة لجميع التساؤلات باحترافية وسرعة.',
    contactServiceIntro2:
      "توفر خدمة الاستفسارات عدة قنوات تواصل، منها:",
    contactMethod1Title: "نموذج التواصل الإلكتروني",
    contactMethod1Desc:
      "يمكن للمستفيد إرسال استفسارك عبر نموذج يحتوي على:",
    contactMethod1Field1: "الاسم الكامل",
    contactMethod1Field2: "رقم الهوية",
    contactMethod1Field3: "رقم الجوال",
    contactMethod1Field4: "المنطقة",
    contactMethod1Field5: "موضوع الاستفسار",
    contactMethod1Field6: "تفاصيل الرسالة",
    contactMethod1Footer:
      "يتم الرد خلال فترة قصيرة من قبل فريق متخصص.",
    contactMethod2Title: "مركز خدمة المستفيدين",
    contactMethod2Desc:
      'يوفر برنامج "ريف السعودية" مركز دعم يتولى:',
    contactMethod2Field1: "الرد على الاستفسارات العامة",
    contactMethod2Field2: "متابعة الطلبات المتأخرة",
    contactMethod2Field3: "توجيه المستفيد للخطوات اللازمة",
    contactMethod2Field4: "المساعدة في حل المشكلات التقنية",
    contactMethod3Title: "قنوات التواصل الرقمية",
    contactMethod3Desc: "يتيح البرنامج أيضاً التواصل عبر:",
    contactMethod3Field1: "البريد الإلكتروني الرسمي",
    contactMethod3Field2: "منصات التواصل الاجتماعي",
    contactMethod3Field3: "(LinkedIn / Instagram / X / Facebook)",
    contactMethod3Footer:
      "يلتزم البرنامج بنشر التحديثات والتنبيهات والفرص والمبادرات والبرامج الجديدة عبر موقعه الرسمي وكافة منصاته وحساباته التواصل الاجتماعي.",
    contactMethod4Title: "الدعم الميداني",
    contactMethod4Desc:
      "يوفر البرنامج زيارات ميدانية تقوم بها فرق متخصصة لمساندة المستفيدين على أرض الواقع، خاصة في المناطق الريفية البعيدة.",
    contactMethod4Footer:
      "يهدف هذا النظام المتكامل إلى ضمان وجود قناة مفتوحة، دائمة، وفعالة بين البرنامج والمستفيدين، بما يعزز الشفافية والثقة ويخدم مسار التنمية المستدامة.",
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
      "يعمل البرنامج على تطوير زراعة الورد والنباتات العطرية، ودعم الصناعات المرتبطة بها لتعزيز فرص التصدير وتحقيق قيمة اقتصادية مضافة.",
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
    hero1Title: "تحوّل ريفي يصنع مستقبل المملكة",
    hero1Desc:
      'برنامج التنمية الريفية الزراعية المستدامة "ريف السعودية" يدعم صغار المزارعين والأسر الريفية، لتحقيق تنمية زراعية مستدامة تُسهم في تنويع الاقتصاد الوطني وتعزيز الأمن الغذائي.',
    hero1Btn1: "شاهد القصة",
    hero1Btn2: "استكشف الأثر",

    hero2Title: "القهوة السعودية.. قصة فخر وريادة",
    hero2Desc:
      'يدعم برنامج "ريف السعودية" مزارعي البن في جازان والباحة وعسير لرفع جودة الإنتاج وتعزيز حضور القهوة السعودية في الأسواق العالمية.',
    hero2Btn1: "استكشف قطاع القهوة",
    hero2Btn2: "تعرّف على المبادرات",

    hero3Title: "الاستدامة.. وعد نزرعه اليوم",
    hero3Desc:
      "نحو تنميةٍ ريفيةٍ مستدامة، تُعنى بالإنسان والموارد معًا، ضمن مستهدفات رؤية السعودية 2030.",
    hero3Btn: "استكشف مبادرات ريف المستدامة",

    hero4Title: "دعم يُثمر أثرًا مستدامًا",
    hero4Desc:
      'من خلال برامج الدعم المالي والإرشادي، يُمكّن برنامج "ريف السعودية" صغار المزارعين والأسر المنتجة، لتحسين سبل العيش وتحقيق الاكتفاء المحلي.',
    hero4Btn1: "قدّم على الدعم",
    hero4Btn2: "تعرف على شروط الاستفادة",

    hero5Title: "نماء يُثمر في كل منطقة",
    hero5Desc:
      "في كل منطقةٍ وقريةٍ ومزرعة، يمتدّ أثر برنامج ريف السعودية عبر مشاريع وبرامج تُعزّز الإنتاج الزراعي، وتدعم المجتمعات الريفية، وتفتح آفاقًا جديدة للنمو المستدام.",
    hero5Btn1: "تعرّف على مبادراتنا",
    hero5Btn2: "استكشف الخريطة التفاعلية للقطاعات",

    // Hero (Legacy - kept for compatibility)
    heroTitle: "تحوّل ريفي يصنع مستقبل المملكة",
    heroSubtitle:
      'برنامج التنمية الريفية الزراعية المستدامة "ريف السعودية" يدعم صغار المزارعين والأسر الريفية، لتحقيق تنمية زراعية مستدامة تُسهم في تنويع الاقتصاد الوطني وتعزيز الأمن الغذائي.',
    heroButton1: "شاهد القصة",
    heroButton2: "استكشف الأثر",

    // Key Numbers / Impact Statistics
    statsBadge: "إحصائيات الأثر",
    statsTitle: "ريف السعودية.. عطاء ونماء بالأرقام",
    statsDesc:
      'آخر الأرقام والإحصاءات المتعلقة بجهود برنامج "ريف السعودية" في تمكين المزارعين وتعزيز التنمية الريفية المستدامة في مختلف مناطق المملكة.',
    stat1Label: "إجمالي عدد المدعومين",
    stat2Label: "إجمالي مبلغ الدعم",
    stat2Suffix: " مليار ريال",
    stat3Label: "عدد الأسر الاقتصادية المدعومة",
    stat4Label: "عدد شهادات العمل الحر",
    stat5Label: "عدد الدورات التدريبية في البرنامج",
    stat6Label: "عدد الشتلات المزروعة ضمن مبادرة السعودية الخضراء",
    stat6Suffix: " مليون",
    statsDisclaimer: "البيانات محدّثة باستمرار",
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

    supportedSectorsTitle: 'القطاعات الزراعية المدعومة في "ريف السعودية"',
    supportedSectorsIntro:
      'يدعم برنامج التنمية الريفية الزراعية المستدامة "ريف السعودية" ثمانية قطاعات إنتاجية رئيسية تمثل أساس التنمية الزراعية والغذائية في المملكة. وتسهم هذه القطاعات في تمكين صغار المزارعين والمنتجين، ورفع جودة الإنتاج الزراعي وتعزيز الأمن الغذائي، وتحقيق تنمية ريفية مستدامة تواكب مستهدفات رؤية المملكة 2030.',

    // Sectors Grid
    sectorsBadge: "القطاعات المستهدفة بالدعم",
    sectorsTitle: 'القطاعات الزراعية المدعومة في "ريف السعودية"',
    sectorsDesc:
      'يدعم برنامج التنمية الريفية الزراعية المستدامة "ريف السعودية" ثمانية قطاعات إنتاجية رئيسية تمثل أساس التنمية الزراعية والغذائية في المملكة. وتسهم هذه القطاعات في تمكين صغار المزارعين والمنتجين، ورفع جودة الإنتاج الزراعي وتعزيز الأمن الغذائي، وتحقيق تنمية ريفية مستدامة تواكب مستهدفات رؤية المملكة 2030.',
    sectorsSubtitle:
      "يدعم برنامج ريف السعودية 8 قطاعات رئيسية تقود التنمية الريفية والتميز الزراعي",

    sector1Title: "قطاع تطوير وتربية النحل وإنتاج العسل",
    sector1Desc:
      'يدعم برنامج "ريف السعودية" مربي النحل عبر التدريب والتمويل والإرشاد الفني، بهدف رفع جودة العسل السعودي وتطوير سلاسل القيمة المرتبطة به.',
    sector1Point1: "التدريب والتطوير",
    sector1Point2: "الدعم المالي",
    sector1Point3: "الإرشاد الفني",

    sector2Title: "قطاع تطوير وإنتاج وتصنيع وتسويق القهوة السعودية",
    coffeeHeroTitle: "قطاع تطوير وإنتاج وتصنيع وتسويق القهوة السعودية.",
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
    coffeeProjects: "مشروعاً",
    coffeeProjectsCountLabel: "8 مشاريع",
    coffeeProjectsValueLabel: "155.8 مليون ريال",
    coffeeTotalValue: "إجمالي القيمة",
    coffeeProject1: "إنشاء وتجهيز مصنع إعداد وتجهيز البن في منطقة الباحة.",
    coffeeProject2: "إنشاء مشاتل نموذجية للبن في جازان وعسير والباحة.",
    coffeeProject3: "إنشاء وتجهيز مصنع إعداد وتجهيز البن في منطقة عسير.",
    coffeeProject4: "تنفيذ وتجهيز مزارع بديلة نموذجية في منطقة جازان.",
    coffeeProject5: "إنشاء وتجهيز مصنع إعداد وتجهيز البن في جازان (الدائر).",
    coffeeProject6: "تطبيق نظم الري المستدامة لصغار مزارعي البن في الباحة.",
    coffeeProject7: "تطبيق نظم الري المستدامة لصغار مزارعي البن في جازان.",
    coffeeProject8: "تطبيق نظم الري المستدامة لصغار مزارعي البن في عسير.",
    coffeeKeyAchievementsTitle: "أبرز المنجزات",
    coffeeAchievement1: "رفع عدد أشجار البن إلى 1.2 مليون شجرة",
    coffeeAchievement1Sub:
      "(مستهدف الوصول إلى 5 – 6 ملايين شجرة بحلول 2030)",
    coffeeAchievement2:
      "زيادة الإنتاجية المتوقعة للشجرة من 0.4 كجم إلى 1.5 كجم سنوياً",
    coffeeAchievement3: "إدخال 5 تقنيات وممارسات حديثة في زراعة البن",
    coffeeAchievement4: "نقل 8,000 شتلة بن عالية الجودة بنجاح",
    coffeeAchievement5: "دعم المشاتل بطاقة إنتاجية 50 ألف شتلة سنوياً",
    coffeeAchievement6: "تنفيذ ورش تدريبية لأكثر من 200 مستفيد",
    coffeeAchievement7: "إجراء زيارات ميدانية لأكثر من 100 مزرعة",
    coffeeAchievement8: "المشاركة في مؤتمرات ومعارض دولية متخصصة",
    coffeeTissueCultureTitle: "مشروع زراعة الأنسجة وتطوير الشتلات",
    coffeeTissueCultureIntro:
      "بالتعاون مع برنامج ريف ومركز استدامة تم تنفيذ مشروع زراعة الأنسجة والذي شمل:",
    coffeeTissueStage1: "اختيار 6 عينات وراثية مميزة من أشجار البن",
    coffeeTissueStage2: "إنبات 17,000 أجنة جسدية للبُن",
    coffeeTissueStage3: "4,000 نبتة في مرحلة التجذير",
    coffeeTissueStage4: "2,800 نبتة في مرحلة النقل للفطام",
    coffeeTissueStage5: "1,200 نبتة في البيت المحمي للفطام",
    coffeeTissueStage6: "400 شتلة في مرحلة التقسية",
    coffeeBioreactorDesc:
      'تركيب جهاز "Bioreactor" لزيادة الإنتاجية بنسبة 30%',
    coffeeTissueTarget: "مستهدف إنتاج 50 ألف شتلة بنهاية 2025",
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
      'يركّز "ريف السعودية" على تمكين مزارعي البن في جازان والباحة وعسير من خلال تحسين الإنتاج وتطوير سلاسل الإمداد والارتقاء بجودة القهوة السعودية محلياً وعالمياً.',
    sector2Point1: "تحسين سلاسل الإمداد",
    sector2Point2: "دعم صغار المزارعين",
    sector2Point3: "تسويق المنتجات",

    sector3Title: "قطاع تنمية زراعة الورد وتجارة الورد",
    sector3Point1: "تطوير المزارع",
    sector3Point2: "دعم عمليات التصنيع",
    sector3Point3: "تعزيز فرص التسويق",

    sector4Title: "قطاع تطوير وإنتاج وتصنيع وتسويق الفاكهة",
    sector4Desc:
      "يشمل دعم إنتاج الفواكه مثل الرمان والتين والعنب وغيرها، عبر تحسين التقنيات المستخدمة، وتطوير الممارسات الزراعية، وتمكين المزارعين من دخول أسواق جديدة.",
    fruitsHeroTitle: "قطاع تطوير وإنتاج وتصنيع وتسويق الفاكهة.",
    fruitsWorkAxesTitle: "محاور العمل في قطاع الفاكهة",
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
    fruitsTotalBeneficiariesSummary: "إجمالي المستفيدين: 9,054",
    fruitsBeneficiaryUnit: "مستفيد",
    fruitsProduct1: "اللوز البجلي",
    fruitsProduct2: "البخارى",
    fruitsProduct3: "الخوخ",
    fruitsProduct4: "المشمش",
    fruitsProduct5: "المانجو",
    fruitsProduct6: "الفراولة",
    fruitsProduct7: "العنب",
    fruitsProduct8: "الليمون",
    fruitsProduct9: "الرمان",
    fruitsProjectsTitle: "مشاريع قطاع الفاكهة",
    fruitsProjectsCount: "عدد المشاريع",
    fruitsProjectsCountValue: "23 مشروعاً",
    fruitsProjectsValue: "إجمالي القيمة التقديرية",
    fruitsProjectsValueAmount: "396.8 مليون ريال",
    fruitsProjectsIntro:
      'يعمل برنامج "ريف السعودية" على تنفيذ منظومة متكاملة من المشاريع في قطاع الفاكهة، بهدف تطوير الإنتاج، وتحسين الجودة، وتعزيز سلاسل القيمة من المزرعة إلى السوق، بما يسهم في رفع الاكتفاء الذاتي ودعم دخل المزارعين.',
    fruitsProjectsHighlights: "أبرز مشاريع القطاع",
    fruitsProject1:
      "إنشاء وتجهيز مراكز الخدمات التسويقية للمنتجات الزراعية في كل من:",
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
    fruitsWork1Title: "أولاً: إنشاء مشاتل جديدة",
    fruitsWork1Desc:
      "تم اختيار موقعين لإنشاء مشاتل فاكهة تعاونية لدى الجمعية الزراعية بالطائف وجمعية التسويق الزراعي بجازان، بسعة تقديرية 15 ألف شتلة لكل مشتل، علماً بأن العمل جارٍ لإعداد الملفات وإنشاء المشتلين لخدمة المزارعين.",
    fruitsWork2Title: "ثانياً: التوسع بالمشاتل القديمة",
    fruitsWork2Region1: "منطقة عسير",
    fruitsWork2Region1Value: "10,000 شتلة",
    fruitsWork2Region2: "منطقة الباحة",
    fruitsWork2Region2Value: "10,000 شتلة",
    fruitsWork2Total: "إجمالي الإنتاج",
    fruitsWork2TotalValue: "20,000 شتلة حتى الآن",
    fruitsWork2Note: "جرى توزيعها خلال النصف الثاني من هذا العام 2025.",
    fruitsWork3Title: "ثالثاً: توصيف أصناف الفاكهة",
    fruitsWork3Desc:
      "تم توصيف 6 أصناف مستوردة من العنب والتين والمشمش واللوز في الحقل الإرشادي بالبلجرشي بالتعاون مع مركز البذور والتقاوي بالباحة، بهدف تحديد المواصفات المورفولوجية والإنتاجية وقياس توافق الأصناف مع مناخ المنطقة وإكثار الأصناف المناسبة ذات الإنتاجية العالية.",
    fruitsWork4Title: "رابعاً: تطوير ريادة الأعمال الزراعية للسيدات",
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
    fruitsWork5Title: "خامساً: الصحة النباتية",
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

    sector5Title: "قطاع تعزيز قدرات صغار مربي الماشية",
    sector5Desc:
      "يشمل دعم صغار مربي الماشية عبر التدريب والتمويل والرعاية البيطرية، لتحسين جودة منتجات الألبان ورفع كفاءة الإنتاج الحيواني في المملكة.",
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
    livestockProjectsTitle: "مشاريع قطاع الماشية",
    livestockProjectsCountLabel: "مشاريع",
    livestockProjectsTotalValueLabel: "إجمالي القيمة",
    livestockProjectsMillionSar: "مليون ريال",
    livestockProjectsIntro:
      'يعمل برنامج "ريف السعودية" في قطاع الماشية على تطوير منظومة الإنتاج الحيواني في المملكة من خلال إنشاء بنية تحتية متقدمة، وتطبيق أنظمة التتبع والترقيم، ورفع كفاءة صغار المربين، بما يسهم في تعزيز الأمن الغذائي وزيادة الإنتاج المحلي من اللحوم والألبان وتحقيق الاستدامة البيئية والاقتصادية.',
    livestockProjectsKeyTitle: "أبرز مشاريع القطاع",
    livestockProjectsLocationsIntro:
      "إنشاء وتجهيز مجمع المزارع النموذجية للإنتاج الحيواني في:",
    livestockLocation1: "الجبيل",
    livestockLocation2: "المدينة المنورة",
    livestockLocation3: "حفر الباطن",
    livestockLocation4: "نجران",
    livestockLocation5: "حائل",
    livestockLocation6: "القصيم",
    livestockLocation7: "عرعر",
    livestockProjectsTagging:
      "تنفيذ مشروع ترقيم وتسجيل الثروة الحيوانية في مختلف مناطق المملكة.",
    livestockProjectsFeasibilityTitle: "الجدوى الفنية للمشاريع",
    livestockProjectsFeasibilityIntro:
      "تسهم مشاريع قطاع الماشية في تحقيق مجموعة واسعة من الآثار الفنية والتنموية، من أبرزها:",
    livestockProjectsFeasibility1:
      "ترقيم أكثر من 12,269,000 رأس من الماشية المنتجة بجميع أنواعها (الأغنام – الماعز – الإبل).",
    livestockProjectsFeasibility2:
      "إطلاق منصة إلكترونية لإدارة كافة أعمال التنفيذ، تشمل إدخال البيانات، الشرائح الإلكترونية، والأتمتة الكاملة للعمليات.",
    livestockProjectsFeasibility3:
      "توفير مزارع نموذجية لتربية الماشية في مناطق مختارة مثل القصيم، حائل، حفر الباطن، الجبيل، عرعر وغيرها.",
    livestockProjectsFeasibility4:
      "دعم تحقيق الاكتفاء الذاتي وزيادة الإنتاج المحلي من اللحوم ضمن مستهدفات رؤية المملكة 2030.",
    livestockProjectsFeasibility5:
      "إدخال تقنيات حديثة في التلقيح الصناعي وتحسين السلالات.",
    livestockProjectsFeasibility6:
      "الحفاظ على المراعي الطبيعية ومجابهة الرعي الجائر وحماية الموارد البيئية.",
    livestockProjectsFeasibility7:
      "الاستخدام الأمثل للموارد الغذائية والمائية المتاحة.",
    livestockProjectsFeasibility8:
      "تحسين دخل صغار المربين والمساهمة في تحقيق الاستقرار الاجتماعي في المناطق الريفية.",
    livestockProjectsFeasibility9:
      "إنشاء نماذج متقدمة للمزارع النموذجية يُحتذى بها للمستثمرين في قطاع الثروة الحيوانية وإمكانية تكرارها.",
    livestockProjectsFeasibility10:
      "المساهمة في تحقيق الأمن الغذائي وزيادة مصادر البروتين الحيواني.",
    livestockProjectsFeasibility11:
      "تعزيز كفاءة الإنتاج الحيواني ورفع جودته.",
    livestockProjectsGoalsTitle: "أهداف المشاريع",
    livestockProjectsGoalsIntro:
      'تركز مشاريع قطاع الماشية في برنامج "ريف السعودية" على:',
    livestockProjectsGoal1:
      "إنشاء مجمعات مستدامة لتربية وإنتاج الماشية وتنمية وتأهيل الحقول الريفية على أراضي الوزارة المخصصة لصغار مربي الثروة الحيوانية.",
    livestockProjectsGoal2:
      "تقديم خدمات بيطرية شاملة لترقيم الثروة الحيوانية، وإطلاق منصة إلكترونية بقاعدة بيانات متكاملة لمتابعة ملاك الماشية، تشمل إدخال البيانات والشرائح الإلكترونية وكافة عمليات الأتمتة.",
    livestockProjectsGoal3:
      "تنفيذ منظومة ترقيم وتتبع إلكتروني تعتمد على أرقام مزودة بشرائح إلكترونية لتطبيق التتبع الدقيق على النعاج والذكور المنتجة والإبل، بما يدعم نظم المعلومات وتحليل البيانات ويرفع كفاءة إدارة القطيع على مستوى المملكة.",
    livestockKeyWorksTitle: "أهم الأعمال المنفذة",
    livestockKeyWork1Title: "الإدارة الرقمية لمزارع التربية المكثفة",
    livestockKeyWork1Desc:
      "تم تطوير تطبيق Saudi Smart Flock للإدارة الرقمية لمزارع التربية المكثفة للماشية باستخدام إنترنت الأشياء، وتم تجربته في 6 مزارع. ويعد هذا التطبيق الأول من نوعه في المنطقة، ويتميز باستخدام تقنية أماجينكس في التعرف على الحيوان عن طريق مقدمة الوجه اعتماداً على صورة الحيوان.\n\nيساعد التطبيق والمنصة في:\n• متابعة معدلات إنتاجية قطعان الماشية\n• الإفادة الفورية عن الحالة الصحية للحيوانات\n• إدارة سجل الحيوانات",
    livestockKeyWork1Stat1Value: "6",
    livestockKeyWork1Stat1Label: "مزارع",
    livestockKeyWork1Stat2Value: "الأول",
    livestockKeyWork1Stat2Label: "في المنطقة",
    livestockKeyWork2Title: "دراسة توصيف المجترات الصغيرة",
    livestockKeyWork2Desc:
      "تم استكمال الترتيبات الفنية المباشرة للعمل في دراسة توصيف المجترات الصغيرة بالتعاون مع جامعة الملك سعود، بهدف التمكن من حصر وتعداد الأصناف المحلية المهمة وتطوير برامج تربية باستخدام تكنولوجيا الجينوم.",
    livestockKeyWork2Stat1Value: "جامعة",
    livestockKeyWork2Stat1Label: "الملك سعود",
    livestockKeyWork2Stat2Value: "الجينوم",
    livestockKeyWork2Stat2Label: "تكنولوجيا",
    livestockKeyWork3Title: "نظام تقديم الخدمات الفنية لصغار المربين",
    livestockKeyWork3Desc:
      "تم تطوير نظام لتقديم الخدمات الفنية لصغار مربي الماشية، وتطبيقه مباشرة في:\n• خدمات إدارة القطيع\n• الأشعة فوق الصوتية\n• التحصين والتطعيم\n• مكافحة الديدان\n• المكملات الغذائية\n• وخدمات صحية أخرى\n\nتم التطبيق على 45 مزرعة ماشية في مناطق: جازان، عرعر، والحدود الشمالية.\n\nشارك في التنفيذ: مربون، فنيون، وأطباء ميدانيون، إضافة إلى فريق خبراء من سدايا، وأظهر المسح الأولي زيادة عدد الحملان للأنثى من 74% إلى 98%.",
    livestockKeyWork3Stat1Value: "45",
    livestockKeyWork3Stat1Label: "مزرعة",
    livestockKeyWork3Stat2Value: "98%",
    livestockKeyWork3Stat2Label: "معدل الحملان",
    livestockKeyWork4Title: "جولة دراسية داخلية",
    livestockKeyWork4Desc:
      "تم تنظيم جولة دراسية داخلية استفاد منها 10 مربين ومربيات ماشية من منطقة عرعر، للتعرف على:\n• البنية التحتية المتقدمة لإيواء الحيوانات\n• أنظمة الحلب الحديثة الآلية\n• أفضل الممارسات التربوية\n• أنشطة إضافة قيمة الحليب",
    livestockKeyWork4Stat1Value: "10",
    livestockKeyWork4Stat1Label: "مربين ومربيات",
    livestockKeyWork4Stat2Value: "عرعر",
    livestockKeyWork4Stat2Label: "المنطقة",
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

    sector6Title: 'قطاع زراعة المحاصيل البعلية "المطرية"',
    sector6Desc:
      "يدعم القطاع زراعة المحاصيل المعتمدة على الأمطار في المناطق الجبلية، مثل القمح والشعير والذرة الرفيعة والسمسم، مع التركيز على الاستدامة والحفاظ على الموارد الطبيعية.",
    sector6Point1: "دعم أنظمة الري الطبيعية",
    sector6Point2: "تدريب المزارعين",
    sector6Point3: "تسويق الحبوب المحلية",
    rainfedHeroTitle: 'قطاع زراعة المحاصيل البعلية "المطرية".',
    rainfedIntro1:
      'يهدف قطاع زراعة المحاصيل البعلية ببرنامج "ريف السعودية" إلى زيادة نسبة الاكتفاء الذاتي من هذه المحاصيل الاستراتيجية، وإحلال نسبة من الواردات، مع رفع إنتاجيتها في المناطق ذات الميزات النسبية، وذلك عبر توظيف تقنيات حصاد المياه وأساليب الري الحديثة، وتحسين جودة الإنتاج، وزيادة دخل صغار المزارعين، وتعزيز استدامة الموارد الطبيعية بما ينعكس على تنمية المجتمعات الريفية وتحسين سبل معيشتها.',
    rainfedObj1:
      "زيادة ورفع إنتاجية المحاصيل البعلية في المناطق ذات الميزة النسبية باستخدام تقنيات حصاد المياه وأساليب الري الحديثة.",
    rainfedObj2: "زيادة نسبة الاكتفاء الذاتي من هذه المحاصيل وإحلال نسبة من الواردات.",
    rainfedObj3: "زيادة دخل صغار المزارعين وتحسين سبل معيشتهم.",
    rainfedWorkAxesTitle: "محاور عمل قطاع المحاصيل البعلية",
    rainfedWorkAxis1:
      "تطبيق الممارسات الزراعية الجيدة ويشمل ذلك العمليات الزراعية والتربوية.",
    rainfedWorkAxis2:
      "استنباط وتوفير البذور المحسّنة المناسبة لمناطق الإنتاج حسب ظروفها البيئية والمقاومة للأمراض، وتوزيعها على صغار المنتجين.",
    rainfedWorkAxis3: "تقديم خدمات إرشاد ودعم فني لصغار المنتجين.",
    rainfedWorkAxis4:
      "تطوير أنظمة حصاد مياه الأمطار بما يتناسب مع متطلبات مناطق الإنتاج وتعميمها وسط المزارعين، مع إمكانية استخدام الري التكميلي.",
    rainfedWorkAxis5:
      "إدخال تقنيات الحصاد الآلي وما بعد الحصاد للتقليل من الفاقد.",
    rainfedWorkAxis6:
      "تطوير وتنفيذ برامج لمحاصيل: الذرة الرفيعة، السمسم، الدخن، وتوفير خدمات تقنية متقدمة لعمليات ما بعد الحصاد.",
    rainfedWorkAxis7: "تقديم دعم مالي لتشجيع المزارعين على إنتاج المحاصيل.",
    rainfedWorkAxis8: "زراعة الأشجار الغابية في حقول المزارعين.",
    rainfedWorkAxis9: "إنشاء جمعيات تعاونية لتقديم خدمات الإنتاج وما بعد الحصاد.",
    rainfedWorkAxis10: "تطوير القدرات الفنية للمزارعين.",
    rainfedStatsTitle: "أرقام ومؤشرات",
    rainfedTotalSupport: "إجمالي قيمة الدعم",
    rainfedSupportAmount: "+99.65 مليون ريال",
    rainfedBeneficiaries: "إجمالي عدد المستفيدين",
    rainfedBeneficiariesCount: "+5,466 مستفيداً",
    rainfedBeneficiariesDetails: "(2,919 رجلاً و2,547 امرأة)",
    rainfedGeoDistribution: "التوزيع الجغرافي للمستفيدين",
    rainfedSupportedProducts: "المنتجات المدعومة",
    rainfedProduct1: "القمح",
    rainfedProduct2: "الشعير",
    rainfedProduct3: "الدخن",
    rainfedProduct4: "السمسم",
    rainfedProduct5: "الذرة الرفيعة",
    rainfedProduct6: "الحبحب البعلي",
    rainfedProductionEvolution: "تطور الإنتاج (طن/سنة)",
    rainfedProduction2020: "6000 طن",
    rainfedProduction2024: "62 ألف طن",
    rainfedGrowthRate: "(نمو 32%)",
    rainfedProduction2026: "195 ألف طن",
    rainfedTarget: "(مستهدف)",
    rainfedProjectsTitle: "مشاريع قطاع المحاصيل البعلية",
    rainfedProjectsCount: "عدد المشاريع",
    rainfedProjectsCountValue: "17 مشروعاً",
    rainfedProjectsValue: "إجمالي القيمة التقديرية",
    rainfedProjectsValueAmount: "215.4 مليون ريال",
    rainfedProjectsIntro:
      'يعمل برنامج "ريف السعودية" على تنفيذ منظومة من المشاريع النوعية في قطاع المحاصيل البعلية، بهدف تعزيز الأمن الغذائي، ورفع كفاءة الإنتاج، وتحسين استدامة الزراعة المطرية في مختلف مناطق المملكة.',
    rainfedProjectsHighlights: "أبرز مشاريع القطاع",
    rainfedProject1: "توريد معدات زراعية متنوعة في مكة المكرمة وجازان.",
    rainfedProject2:
      "إنشاء مصنع لمنتجات السمسم والذرة الرفيعة والدخن في منطقة جازان.",
    rainfedProject3: "توريد معدات الحصاد لخدمة الزراعة البعلية في مكة المكرمة وجازان.",
    rainfedProject4:
      "تحسين أصناف المحاصيل الحقلية المحلية لدى المزارعين في جنوب غرب المملكة.",
    rainfedProject5:
      "تشغيل وحدة أبحاث جازان لتعزيز التكامل بين الأبحاث الزراعية والتطبيقات الميدانية.",
    rainfedProject6: "إنشاء مزارع نموذجية لمحاصيل الحبوب البعلية في المدينة المنورة.",
    rainfedProject7: "إنشاء مزارع نموذجية لمحاصيل الحبوب البعلية في عسير وجازان.",
    rainfedProject8: "توريد معدات الحصاد الحديثة لخدمة المحاصيل البعلية.",
    rainfedProject9:
      "توريد معدات إعداد التربة والزراعة الحديثة لخدمة مزارعي المحاصيل البعلية.",
    rainfedProject10: "توريد ملحقات معدات إعداد التربة والزراعة الحديثة.",
    rainfedProject11:
      "تطبيق نظم الري المستدامة والتقنيات الزراعية الحديثة لصغار مزارعي المحاصيل الحقلية المطرية في:",
    rainfedFeasibilityTitle: "الجدوى الفنية للمشاريع",
    rainfedFeasibilityIntro:
      "تسهم مشاريع قطاع المحاصيل البعلية في تحقيق مجموعة من المكاسب الفنية والإنتاجية، من أبرزها:",
    rainfedFeasibility1:
      "تعزيز الكفاءة التشغيلية للمعدات الزراعية في التنمية الريفية.",
    rainfedFeasibility2: "تقليل الجهد والتكاليف عبر إدخال تقنيات وميكنة حديثة.",
    rainfedFeasibility3:
      "تعزيز التعاون بين المزارعين من خلال العمل الجماعي واستخدام المعدات المشتركة.",
    rainfedFeasibility4: "رفع كفاءة إنتاج المحاصيل الحقلية لتحقيق الأمن الغذائي.",
    rainfedFeasibility5: "زيادة استدامة وإنتاجية المحاصيل المطرية المحلية.",
    rainfedFeasibility6: "تحسين توظيف الموارد المائية المتاحة.",
    rainfedFeasibility7:
      "تطبيق تقنيات زراعية حديثة لتحسين جودة وإنتاجية المحاصيل.",
    rainfedFeasibility8: "دعم توسع الحيازات الزراعية النوعية.",
    rainfedFeasibility9:
      "تصميم وتنفيذ شبكات ري تتوافق مع طبيعة المنطقة والمحصول.",
    rainfedFeasibility10:
      "تنظيم سلاسل القيمة من الإنتاج إلى التصنيع والتسويق.",
    rainfedProjectObjectivesTitle: "أهداف المشاريع",
    rainfedProjectObjectivesIntro:
      'تركز مشاريع قطاع المحاصيل البعلية في برنامج "ريف السعودية" على تحقيق الأهداف التالية:',
    rainfedProjectObjective1:
      "تحقيق الاستفادة القصوى من إنتاج المحاصيل وتشجيع زيادة الطلب عليها.",
    rainfedProjectObjective2:
      "إنشاء حقول زراعية نموذجية وإرشادية توفر حزمًا متكاملة من العمليات الزراعية طوال الموسم.",
    rainfedProjectObjective3:
      "تنفيذ خزانات وشبكات ري حديثة مناسبة لطبيعة الأراضي، وتوفير مصادر ري تكميلية في حال شح الأمطار.",
    rainfedProjectObjective4:
      "الاستفادة من الأراضي الزراعية المتاحة ومياه الأمطار عبر تطبيق نظم ري مستدامة وتقنيات حديثة.",
    rainfedProjectObjective5:
      "تطوير الميكنة الزراعية لزيادة الكفاءة وتقليل التكلفة على المزارعين، وتدريب الجمعيات التعاونية على تشغيلها.",
    rainfedKeyWorksTitle: "أهم الأعمال المنفذة",
    rainfedWork1Title:
      "أولاً: تجارب الأصناف المحسنة – البيئة الجبلية (أبها في منطقة عسير)",
    rainfedWork1Start: "بدء التجارب: 9 مايو 2024",
    rainfedWork1Varieties: "24 صنفاً",
    rainfedWork1VarietiesDetail: "(12 صنف ذرة رفيعة + 12 صنف دخن)",
    rainfedWork1Location:
      "محطة إكثار البذور – مركز البذور والتقاوي – الرياض (موقع تجريبي في عسير)",
    rainfedWork1Harvest: "اكتمال الحصاد: 10 أكتوبر 2024",
    rainfedWork1Note: "تعد هذه التجارب امتداداً لتجارب بدأت عام 2023 في جازان",
    rainfedWork2Title:
      "ثانياً: تجارب الأصناف المحسنة – البيئة الساحلية (جازان)",
    rainfedWork2Date: "18–19 سبتمبر 2024",
    rainfedWork2Desc:
      "أُجريت أربع تجارب جديدة شملت تجربتين للحبوب والأعلاف لمحصول الذرة الرفيعة وتجربتين للحبوب والأعلاف لمحصول الدخن، بهدف تحديد الأصناف الأكثر ملاءمة لبيئة منطقة جازان.",
    rainfedWork3Title: "ثالثاً: أدلة وإجراءات علمية",
    rainfedWork3Item1:
      "إعداد دليل إرشادي للأمراض والآفات التي تصيب المحاصيل المستهدفة بالتعاون مع المركز الدولي لبحوث المحاصيل للمناطق الرطبة شبه الجافة (اكرسات).",
    rainfedWork3Item2: "إعداد الخطة التنفيذية للمحاصيل البعلية.",
    rainfedWork3Item3: "إطلاق مبادرة بنك البذور المجتمعي.",
    rainfedWork3Item4:
      "إطلاق مبادرة إنتاج السيلاج من المجموع الخضري للذرة الرفيعة والدخن.",
    rainfedWork3Item5:
      "إقامة دورة تدريبية في خصوبة التربة والري الزراعي في جازان والنماص بمشاركة 70 مزارعاً وموظفاً.",
    rainfedWork3Item6:
      "إقامة دورة تدريبية لموظفي وزارة البيئة والمياه والزراعة في إدارة البنوك الجينية (27 متدرباً).",
    rainfedMechanizationTitle: "مبادرة الميكنة الزراعية",
    rainfedMechanizationIntro:
      "تهدف إلى زيادة الإنتاجية وتقليل التكلفة على صغار المزارعين من خلال:",
    rainfedMechGoal1: "تبني تقنيات الميكنة الزراعية الحديثة",
    rainfedMechGoal1Desc:
      "تم استيراد نحو 300 معدة زراعية متنوعة يتم تشغيلها عبر الجمعيات التعاونية لخدمة صغار المزارعين.",
    rainfedMechGoal2: 'إطلاق "حاضنة رواد الميكنة"',
    rainfedMechGoal2Desc: "لتمكين رواد الأعمال الشباب",
    rainfedMechIndicatorsTitle: "مؤشرات المبادرة",
    rainfedMechIndicator1: "رائد أعمال مشغل",
    rainfedMechIndicator2: "جمعية تعاونية مشغلة",
    rainfedMechIndicator3: "مستفيداً من الدورات",
    rainfedMechIndicator4: "ورشة ودورة تدريبية",
    rainfedMechIndicator5: "مناطق مستفيدة",
    rainfedMechIndicator6: "مستفيداً مباشر من المبادرة",
    rainfedMechProcessingTitle: "تطوير ميكنة الصناعات التحويلية",
    rainfedMechProcessingIntro: "يجري العمل حالياً على التالي:",
    rainfedMechProcessing1: "تطوير استخلاص زيت الورد الطائفي.",
    rainfedMechProcessing2:
      "تطوير معالجة وغسيل التين الشوكي للتخلص من الأشواك قبل التعبئة.",
    rainfedMechProcessing3: "تطوير تقشير وفرز ثمار اللوز.",
    rainfedMechProcessing4: "تطوير معالجة وغزل الخيوط الصوفية.",
    rainfedMechEquipmentHighlight:
      "معدة زراعية متنوعة مستوردة لخدمة صغار المزارعين",

    sector7Title: "قطاع تعزيز قدرات الصيادين ومستزرعي الأسماك",
    sector7Desc:
      "يدعم البرنامج الصيادين ومستزرعي الأسماك من خلال التدريب والتمويل وتطوير التقنيات الحديثة لرفع إنتاجية القطاع البحري وتعزيز الأمن الغذائي.",
    sector7Point1: "دعم مشاريع الاستزراع",
    sector7Point2: "تطوير المرافئ",
    sector7Point3: "تسويق المنتجات البحرية",

    fishingHeroTitle: "قطاع تعزيز قدرات الصيادين ومستزرعي الأسماك",
    fishingHeroIntro:
      'يعمل برنامج "ريف السعودية" على تمكين صغار الصيادين ومربي الأسماك في مختلف مناطق المملكة العربية السعودية، ورفع كفاءتهم الإنتاجية، وتحسين سبل معيشتهم، وتعزيز مساهمتهم في تحقيق الأمن الغذائي، وذلك من خلال برامج دعم فني وتمويلي وتدريبي متكاملة، ومشاريع استراتيجية تسهم في تطوير سلاسل القيمة للثروة السمكية.',
    fishingObjectivesTitle: "الأهداف الرئيسية للقطاع",
    fishingObjective1:
      "تغطية احتياجات المملكة من المنتجات البحرية والمساهمة في تحقيق الأمن الغذائي من خلال زيادة كمية الإنتاج المحلي وتقليل الواردات.",
    fishingObjective2:
      "دعم رواد الأعمال الشباب لإنشاء وتشغيل المنشآت الصغيرة للصيد.",
    fishingObjective3: "خلق وظائف للسعوديين خاصة فئة الشباب.",
    fishingWorkAreasTitle: "محاور العمل في قطاع الأسماك",
    fishingWorkArea1:
      "تطوير مجالات وتقنيات الاستزراع السمكي ورفع الإنتاجية",
    fishingWorkArea2:
      "تطوير خدمات الإرشاد والدعم الفني لصغار الصيادين ومالكي المزارع السمكية الصغيرة",
    fishingWorkArea3: "إنشاء وتطوير مرافق للصيادين",
    fishingWorkArea4:
      "إنشاء جمعيات تعاونية لصغار الصيادين وأصحاب المزارع السمكية الصغيرة وتفعيلها لخدمة القطاع",
    fishingWorkArea5:
      "تشجيع رواد الأعمال الشباب للدخول في الاستزراع السمكي وإنشاء حاضنات الاستزراع السمكي",
    fishingWorkArea6:
      "إنشاء وتطوير الأسواق المحلية ورفع كفاءتها في التسويق وضبط الأسعار",
    fishingWorkArea7:
      "دعم وتنمية الأنشطة الساحلية بطريقة مستدامة وحماية الخصائص البيئية للسواحل خاصة المانجروف",
    fishingWorkArea8: "تدريب القدرات البشرية في مجال الاستزراع السمكي",
    fishingWorkArea9:
      "تصميم وتنفيذ برامج لرفع مهارات صغار الصيادين ومربي الأسماك في الإنتاج والمعالجات لرفع القيمة المضافة",
    fishingNumbersTitle: "أرقام ومؤشرات",
    fishingTotalSupport: "إجمالي قيمة الدعم",
    fishingTotalSupportValue: "+16.8 مليون ريال",
    fishingTotalBeneficiaries: "إجمالي عدد المستفيدين",
    fishingTotalBeneficiariesValue: "1,812 مستفيداً",
    fishingGeographicDistribution: "التوزيع الجغرافي للمستفيدين",
    fishingJazan: "جازان",
    fishingMakkah: "مكة المكرمة",
    fishingEastern: "المنطقة الشرقية",
    fishingTabuk: "تبوك",
    fishingMadinah: "المدينة المنورة",
    fishingAsir: "عسير",
    fishingProjectsTitle: "مشاريع قطاع الأسماك",
    fishingProjectsCount: "عدد المشاريع",
    fishingProjectsCountValue: "16 مشروعاً",
    fishingProjectsTotalValue: "إجمالي القيمة",
    fishingProjectsTotalValueAmount: "69.5 مليون ريال",
    fishingProjectsIntro:
      'يعمل برنامج "ريف السعودية" في قطاع الأسماك على تطوير البنية التحتية للصيد البحري، ورفع كفاءة الصيادين السعوديين، وتحسين جودة وسلامة المنتجات البحرية، بما يسهم في تعزيز الأمن الغذائي الوطني وخلق فرص عمل مستدامة في المجتمعات الساحلية.',
    fishingProject1:
      "توريد محركات للقوارب الصغيرة لصغار الصيادين السعوديين.",
    fishingProject2:
      "توريد أجهزة استغاثة بالأقمار الصناعية (EPIRB) لتعزيز سلامة الصيادين في البحر.",
    fishingProject3:
      "توريد صناديق تبريد لحفظ الأسماك وتقليل الفاقد بعد الصيد",
    fishingFishAuctionsTitle: "إنشاء وتجهيز مزادات الأسماك في:",
    fishingQatif: "القطيف",
    fishingRayis: "الرايس",
    fishingUmluj: "أملج",
    fishingQunfudhah: "القنفذة",
    fishingKhorFarasan: "خور فرسان",
    fishingMaintenanceCentersTitle: "إنشاء وتجهيز مراكز صيانة القوارب في:",
    fishingShaqiq: "شقيق",
    fishingMadaya: "المضايا",
    fishingProject7:
      "إنشاء وتطوير منصة إلكترونية لدعم صيادي الأسماك وربطهم بالخدمات والأسواق.",
    fishingFeasibilityTitle: "الجدوى الفنية والاقتصادية للمشاريع",
    fishingFeasibilityIntro:
      "تسهم مشاريع قطاع الأسماك في تحقيق مجموعة واسعة من الآثار الفنية والاقتصادية، أبرزها:",
    fishingFeasibility1:
      "تقليل الفاقد والهدر في المنتجات البحرية وتحسين الاستدامة البيئية.",
    fishingFeasibility2:
      "تعزيز كفاءة عمليات التغليف والتعبئة داخل منشآت ما بعد الصيد.",
    fishingFeasibility3:
      "استخدام تقنيات حديثة لتحليل المياه ومعالجة المخلفات وتحسين أداء القوارب.",
    fishingFeasibility4:
      "تقديم خدمات صيانة سريعة وفعالة للقوارب وضمان تشغيلها بأمان.",
    fishingFeasibility5:
      "تعزيز سلامة الصيادين في البحر من خلال أجهزة استغاثة فعالة ودقيقة.",
    fishingFeasibility6:
      "رفع القدرة التنافسية وجودة المنتجات البحرية في الأسواق.",
    fishingFeasibility7:
      "توطين مهنة الصيد وتوفير فرص عمل للمواطنين.",
    fishingFeasibility8:
      "دعم الصيادين المحليين ورفع مستوى الأمن البحري.",
    fishingFeasibility9:
      "تقليل التكاليف التشغيلية من خلال تحسين عمليات الصيانة.",
    fishingFeasibility10:
      "توفير خدمات ما بعد الصيانة لضمان استمرارية جودة الأداء.",
    fishingProjectObjectivesTitle: "أهداف المشاريع",
    fishingProjectObjectivesIntro:
      'تركز مشاريع قطاع الأسماك في برنامج "ريف السعودية" على تحقيق ما يلي:',
    fishingObjective1Title:
      "إنشاء وتجهيز مزادات الأسماك لتقديم الخدمات الأساسية لصيادي الأسماك، مع توجيهها بشكل رئيسي لخدمة صغار الصيادين.",
    fishingObjective2Title:
      "إنشاء وتجهيز مراكز صيانة القوارب لتقديم خدمات فنية وتشغيلية متكاملة لصيادي الأسماك.",
    fishingObjective3Title:
      "دعم مجتمع الصيادين عبر توفير محركات لقوارب الصيد لصغار الصيادين، بما يسهم في تعزيز قدرتهم الإنتاجية وتحقيق الأمن الغذائي الوطني.",
    fishingObjective4Title:
      "توريد أجهزة استغاثة حديثة (EPIRB) لتحديد مواقع القوارب بدقة وربطها بأنظمة الإنقاذ الساحلية والعمليات البحرية، ويشمل ذلك توريد 1000 جهاز استغاثة لدعم سلامة الصيادين والحد من المخاطر في حالات الطوارئ.",
    fishingKeyProjectsTitle: "أبرز مشاريع القطاع",
    fishingImplementedTitle: "أهم الأعمال المنفذة",
    fishingImplementedSubtitle: "",
    fishingDigitalMonitoringTitle: "أولاً: المراقبة الرقمية لمصايد الأسماك",
    fishingDigitalMonitoringDesc:
      "تركيب 4 كاميرات رقمية على 4 قوارب صيد (متطوعين) في المنطقة الشرقية ومنطقة جازان",
    fishingEcosystemTitle: "ثانياً: النظام البيئي لإدارة مصايد الأسماك",
    fishingEcosystemPoint1:
      "إعداد خطة إدارة مصايد الأسماك النظامية من خلال مناقشات تشاركية بين الصيادين والجهات المعنية.",
    fishingEcosystemPoint2:
      "جمع بيانات أولية عن حالة النظام البيئي البحري في جزر فرسان شملت البيانات الاجتماعية والاقتصادية.",
    fishingEcosystemPoint3: "تنفيذ 3 ورش عمل تشاركية.",
    fishingEcosystemPoint4:
      "إعداد مسودة أولية للخطة وإرسالها لإدارة المصايد السمكية.",
    fishingAuctionSystemTitle: "ثالثاً: نظام مزاد الأسماك الآلي الحديث",
    fishingAuctionSystemFeaturesLabel: "يشمل النظام:",
    fishingAuctionSystemDesc:
      "تركيب 4 أنظمة حديثة في مزادات الجبيل وجزيرة فرسان بجازان",
    fishingAuctionSystemFeatures:
      "سير كهربائي وشاشات عرض وكاميرات ومقاعد مقاومة للصدأ وعربات وميزان رقمي وصناديق خاصة.",
    fishingAuctionSystemGoals:
      "يهدف إلى رفع جودة المنتجات البحرية وتقليل الفاقد وزيادة دخل الصيادين بنسبة تصل إلى 20%.",
    fishingSeaweedTitle: "رابعاً: استزراع الأعشاب البحرية على نطاق صغير",
    fishingSeaweedPoint1:
      "تنفيذ نظامين لمزارع الأعشاب البحرية جنوب جدة (180 كم) بطاقة إنتاجية أولية 650 كجم لكل دفعة / 6 أسابيع.",
    fishingSeaweedPoint2:
      'تنفيذ نموذج يقوده شباب وشابات سعوديون في منطقة مكة المكرمة بالتعاون بين شركة نقوا ووزارة البيئة والمياه والزراعة ومنظمة "الفاو".',
    fishingSeaweedPoint3:
      "تدريب أكثر من 50 شاباً وشابة على تقنيات الاستزراع والحصاد.",
    fishingSeaweedPoint4:
      "التخطيط للتوسع في موقع آخر على ساحل البحر الأحمر.",
    fishingHatcheryTitle: "خامساً: تفعيل مفرخ أسماك المياه العذبة في القطيف",
    fishingHatcheryPoint1: "إعادة تأهيل المفرخ بأنظمة حديثة.",
    fishingHatcheryPoint2: "تشغيل نظام تدوير المياه المغلقة.",
    fishingHatcheryPoint3:
      "إدخال الأمهات قريباً لتعزيز الإنتاج والاستدامة.",
    fishingCTA1: "استكشف الخريطة التفاعلية لقطاعاتنا الريفية",
    fishingCTA2: "استكشف برامج الدعم",

    handicraftsHeroTitle: "قطاع تطوير القيمة المضافة من الحيازات الصغيرة",
    handicraftsIntroTitle: "",
    handicraftsIntroLongDesc:
      'في إطار رؤيته لتعزيز التنمية المستدامة في المناطق الريفية، يعمل قطاع تطوير القيمة المضافة من الحيازات الصغيرة في برنامج "ريف السعودية" على تمكين الأسر الريادية والمشاريع الصغيرة من الانتقال من مرحلة الإنتاج الأولي إلى مرحلة التصنيع والتطوير والتسويق، بما يسهم في تعظيم العائد الاقتصادي وتحقيق الاستدامة. ويستهدف هذا القطاع دعم الأسر المنتجة من خلال تزويدها بالأدوات والإمكانات التي ترفع كفاءة الإنتاج، وتحسن جودة المنتجات، وتطور عمليات التصنيع والتعبئة والتغليف، وتفتح أمامها قنوات تسويق أوسع، مع تركيز خاص على تمكين المرأة والشباب في مناطق الإنتاج الريفية، وتعزيز مساهمتهم في الاقتصاد المحلي والأمن الغذائي.',
    handicraftsObjectivesTitle: "الأهداف الرئيسية للقطاع",
    handicraftsObjectivesSubtitle: "",
    handicraftsObj1Title: "1",
    handicraftsObj1Desc:
      "تعظيم العائد من الحيازات الصغيرة والأنشطة الريفية الزراعية التقليدية",
    handicraftsObj2Title: "2",
    handicraftsObj2Desc:
      "زيادة القيمة المضافة وخلق فرص عمل للأسر الريادية، خاصة الشباب والنساء",
    handicraftsObj3Title: "3",
    handicraftsObj3Desc:
      "زيادة دخل الأسر وعائدات المجتمعات الريفية وتنويع مصادر دخل الأسر الزراعية الريادية",
    handicraftsObj4Title: "4",
    handicraftsObj4Desc:
      "زيادة القيمة المضافة للمنتجات الزراعية ورفع كفاءة استخدام الموارد الزراعية الطبيعية",
    handicraftsObj5Title: "5",
    handicraftsObj5Desc:
      "المساهمة في خفض معدلات الهجرة الريفية وتعزيز الاستقرار الاجتماعي في المجتمعات الريفية",
    handicraftsObj6Title: "6",
    handicraftsObj6Desc:
      "تعزيز الأمن الغذائي ومد السوق المحلي ببعض المنتجات الغذائية التقليدية",
    handicraftsWorkAxesTitle: "محاور العمل في قطاع القيمة المضافة",
    handicraftsWorkAxesSubtitle: "",
    handicraftsWorkAxis1:
      "إجراء دراسة تحليل السلاسل الغذائية والقيمة المضافة للسلع المستهدفة",
    handicraftsWorkAxis2:
      "تطوير منتجات ريفية زراعية تتماشى مع متطلبات الغذاء والتغذية",
    handicraftsWorkAxis3: "تطوير أنظمة وتقنيات الإنتاج التجاري",
    handicraftsWorkAxis4:
      "تقديم الدعم المالي والعيني الموجّه للأسر الزراعية المنتجة وخاصة النساء والشباب",
    handicraftsWorkAxis5:
      "تحسين البنية التحتية والخدمات اللوجستية لإنتاج وتصنيع المنتجات الزراعية والغذائية التقليدية للأسر الريادية المنتجة",
    handicraftsWorkAxis6:
      "تطوير أنظمة التسويق للمنتجات الزراعية والغذائية التقليدية للأسر الريادية المنتجة",
    handicraftsWorkAxis7:
      "تسهيل الحصول على القروض الميسرة من خلال صناديق التنمية الزراعية ولجان التنمية الاجتماعية والمؤسسات المالية الأخرى",
    handicraftsWorkAxis8:
      "إنشاء حاضنات الأعمال الصغيرة ونماذج لنشر وتوطين المنشآت الزراعية والغذائية التقليدية الريفية",
    handicraftsWorkAxis9:
      "تدعيم الزراعة التعاقدية بين صغار المزارعين والشركات وإنشاء نظام معلومات التنمية الريفية الزراعية",
    handicraftsWorkAxis10:
      "إعداد وتفعيل سياسات واستراتيجيات وطنية داعمة لتطوير وتنفيذ برامج التنمية الريفية الزراعية",
    handicraftsWorkAxis11:
      "إنشاء وحدات متخصصة لتنمية المرأة الريفية الزراعية",
    handicraftsTotalSupport: "إجمالي قيمة الدعم",
    handicraftsTotalSupportValue: "+1.85 مليار ريال",
    handicraftsTotalBeneficiaries: "إجمالي عدد المستفيدين",
    handicraftsTotalBeneficiariesValue: "49,517 مستفيداً",
    handicraftsBeneficiariesBreakdown: "(6,835 رجال - 42,682 نساء)",
    handicraftsGeographicDistribution: "التوزيع الجغرافي للمستفيدين",
    handicraftsRegionHail: "حائل",
    handicraftsRegionEastern: "المنطقة الشرقية",
    handicraftsRegionAsir: "عسير",
    handicraftsRegionRiyadh: "الرياض",
    handicraftsRegionMakkah: "مكة المكرمة",
    handicraftsRegionBaha: "الباحة",
    handicraftsRegionNajran: "نجران",
    handicraftsRegionJazan: "جازان",
    handicraftsRegionQassim: "القصيم",
    handicraftsRegionTabuk: "تبوك",
    handicraftsRegionJouf: "الجوف",
    handicraftsRegionNorthern: "الحدود الشمالية",
    handicraftsRegionMadinah: "المدينة المنورة",
    handicraftsGrowthTitle: "التطور من 2020 إلى 2026",
    handicraftsGrowth2020: "2020: 562 أسرة ريادية",
    handicraftsGrowth2024: "2024: 49,517 أسرة ريادية (نمو بنسبة 76%)",
    handicraftsGrowth2026: "2026 (مستهدف): 60,000 أسرة ريادية",
    handicraftsStatsTitle: "أرقام ومؤشرات",
    handicraftsValueAddedTitle: "مشاريع قطاع القيمة المضافة",
    handicraftsProjectsCount: "مشاريع",
    handicraftsProjectsValue: "117.5",
    handicraftsProjectsValueLabel: "مليون ريال",
    handicraftsValueAddedIntro:
      'يُعد قطاع القيمة المضافة أحد المحاور المحورية في برنامج "ريف السعودية"، إذ يركز على تحويل المعرفة والتقنية والخدمات الإرشادية إلى أدوات عملية ترفع إنتاجية المزارعين، وتحسّن جودة المنتجات، وتعزز كفاءة سلاسل القيمة في مختلف القطاعات الريفية.',
    handicraftsMainProjects: "أبرز مشاريع القطاع",
    handicraftsProject1:
      "تنفيذ القوافل الإرشادية في مجال الثروة النباتية في مختلف مناطق المملكة.",
    handicraftsProject2:
      "تطوير تطبيق مرشدك الزراعي باستخدام تقنيات الذكاء الاصطناعي لتشخيص الأمراض والآفات.",
    handicraftsProject3:
      "الإشراف على المشاريع الإنشائية لبرنامج التنمية في الجنوب الغربي.",
    handicraftsProject4:
      "الإشراف على المشاريع الإنشائية لبرنامج التنمية في المنطقة الوسطى والغربية.",
    handicraftsProject5:
      "تقديم الخدمات الاستشارية لمشاريع برنامج التنمية الريفية الزراعية المستدامة.",
    handicraftsProject6:
      "الإشراف على مشاريع تطبيق نظم الري المستدامة والتقنيات الزراعية.",
    handicraftsTechnicalBenefits: "الجدوى الفنية للمشاريع",
    handicraftsTechBenefit1:
      "إعداد حملات توعوية متخصصة في مجال الثروة النباتية.",
    handicraftsTechBenefit2:
      "إنشاء تطبيق ذكي للتعرف على أمراض المحاصيل باستخدام كاميرا الهاتف المحمول وتقنيات الذكاء الاصطناعي.",
    handicraftsTechBenefit3:
      "بناء قاعدة بيانات للأمراض النباتية والحيوانية تشمل الأسماك والنحل لتسهيل عمليات التشخيص والمعالجة.",
    handicraftsTechBenefit4:
      "إعداد قاعدة بيانات شاملة لأمراض المحاصيل الزراعية وطرق مكافحتها.",
    handicraftsTechBenefit5:
      "إنتاج مواد إرشادية مرئية ومطبوعة وإلكترونية لتعزيز المعرفة الزراعية.",
    handicraftsTechBenefit6:
      "رفع قدرات المزارعين على التشخيص المبكر للأمراض والآفات.",
    handicraftsTechBenefit7:
      "إنتاج دليل مرجعي متكامل للأمراض الزراعية والغذائية.",
    handicraftsGoalsTitle: "أهداف المشاريع",
    handicraftsGoal1:
      "استخدام وسائل تقنية عالية الجودة والمصداقية وتدريب أنظمة الذكاء الاصطناعي على التعرف على الأمراض الزراعية في جميع مراحلها وأشكالها، بما يسهّل تشخيص الأمراض وتسريع العلاج دون الحاجة إلى الرجوع المباشر لأخصائيين.",
    handicraftsGoal2:
      "تطوير العمل الإرشادي في مجالات الثروة النباتية والعسل، عبر إنتاج مواد توعوية وإرشادية تُقدّم من خلال القوافل، والندوات، واللقاءات، والمهرجانات، إضافة إلى البث المباشر للفعاليات التي تنفذها الوزارة في مختلف مناطق المملكة.",
    handicraftsKeyWorksTitle: "أهم الأعمال المنفذة",
    handicraftsKeyWorksIntro:
      "شهد عام 2024 تنفيذ عدد من المبادرات النوعية في إطار هذا القطاع، من أبرزها تشغيل نفق التجفيف الشمسي لتجفيف محصول التين، حيث ارتفعت القدرة الإنتاجية من 400 إلى 500 كجم لكل دورة تجفيف، وانخفضت نسبة الفاقد وخسائر المحصول بنسبة تقدر بـ 30%. وخلال ثلاثة أشهر فقط، تم إنتاج نحو 2500 كجم من التين المجفف بقيمة وصلت إلى 100 ألف ريال، بالإضافة إلى استخدام نفس التقنية في تجفيف فاكهة المانجو المحلية.",
    handicraftsKeyWorksKg: "كجم",
    handicraftsKeyWorksSar: "ريال",
    handicraftsKeyWorksStat1: "القدرة الإنتاجية لكل دورة تجفيف",
    handicraftsKeyWorksStat2: "انخفاض نسبة الفاقد والخسائر",
    handicraftsKeyWorksStat3: "التين المجفف خلال 3 أشهر",
    handicraftsKeyWorksStat4: "القيمة الإجمالية المحققة",
    handicraftsKeyWorksSolarDrying: "نفق التجفيف الشمسي",
    handicraftsKeyWorksSolarDetails:
      "بالإضافة إلى استخدام نفس التقنية في تجفيف فاكهة المانجو المحلية.",
    handicraftsKeyWorksSolarTraining:
      "تدريب 13 من المزارعين وموظفي الوزارة على استخدام تقنية التجفيف وتحقيق أفضل النتائج منها.",
    handicraftsKeyWorksTrainingTitle: "التدريب وبناء القدرات",
    handicraftsKeyWorksTraining1:
      "تدريب 22 سيدة من رائدات الأعمال الزراعية على إنتاج منتجات مبتكرة باستخدام شمع العسل",
    handicraftsKeyWorksTraining2:
      "تدريب 15 سيدة في مجال ريادة الأعمال المرتبطة بصناعة الرمان",
    handicraftsKeyWorksTraining3:
      "تدريب 36 مشرفاً على تطوير السياحة الزراعية في منطقتي الطائف وجازان",
    handicraftsKeyWorksTraining4:
      "اختيار وإضافة 25 مزرعة جديدة إلى أطلس السياحة الزراعية المطور",
    handicraftsKeyWorksTrainingDetails:
      "وشملت الأنشطة أيضًا زيارات ميدانية لبساتين جمعية الرمان التعاونية في منطقة الباحة لتشخيص التحديات الميدانية واقتراح الحلول المناسبة. وتم توثيق بيانات جميع المتدربين ومتابعتهم ضمن منظومة برنامج ريف لضمان استدامة الأثر.",
    handicraftsKeyWorksFoodSafety: "السلامة الغذائية والتخزين",
    handicraftsKeyWorksFoodSafetyDetails:
      "تم التنسيق مع الهيئة العامة للغذاء والدواء لعقد ورش توعوية لمربي الحيازات الصغيرة حول معايير سلامة الأغذية. كما جرى تشغيل وحدات تخزين مبردة باستخدام تقنية Cool Bot، إلى جانب تشغيل ست وحدات تبريد متنقلة تعمل بالطاقة الشمسية، بما يسهم في حفظ ونقل المنتجات الزراعية بكفاءة وتقليل الفاقد، إضافة إلى تقديم الدعم الفني لتطوير مراكز خدمات التسويق الزراعي في المناطق المستهدفة.",
    handicraftsKeyWorksCoolBot:
      "تشغيل وحدات تخزين مبردة باستخدام تقنية Cool Bot",
    handicraftsKeyWorksSolarUnits: "6 وحدات تبريد متنقلة",
    handicraftsKeyWorksSolarUnitsDetails:
      "وحدات تبريد متنقلة تعمل بالطاقة الشمسية لحفظ ونقل المنتجات بكفاءة",
    handicraftsKeyWorksConclusion:
      "وبهذه الجهود المتكاملة، يواصل قطاع تطوير القيمة المضافة من الحيازات الصغيرة في برنامج ريف السعودية أداء دوره المحوري في تعزيز التنمية الريفية المستدامة، ورفع مستوى معيشة الأسر المنتجة، وتحويل الحيازات الصغيرة من أنشطة تقليدية محدودة إلى مشاريع ذات قيمة اقتصادية واجتماعية مستدامة تسهم بفاعلية في تحقيق مستهدفات رؤية المملكة.",
    handicraftsCTA1Full: "استكشف الخريطة التفاعلية لقطاعاتنا الريفية",
    handicraftsCTA2Full: "استكشف برامج الدعم",

    sector8Title: "قطاع تطوير القيمة المضافة من الحيازات الصغيرة",
    sector8Desc:
      "يعمل على تمكين الأسر المنتجة والحرفيين، وتنمية الصناعات الريفية التي تعكس الهوية التراثية للمملكة، مع دعم التسويق والتصنيع المحلي.",
    sector8Point1: "تدريب الحرفيين وأصحاب المشاريع الريفية",
    sector8Point2: "دعم التسويق الإلكتروني للمنتجات والخدمات الريفية",
    sector8Point3: "تطوير أنشطة السياحة الريفية وتعزيز المشاركة المجتمعية",

    sector9Title: "أسر المنتجة",
    sector9Desc:
      "دعم أسر المنتجة لتأسيس مشاريع صغيرة في المنازل التي تقدم دخلًا مستدامًا وتعزز الاستقلالية الاقتصادية",
    sector9Point1: "الدعم المالي والتقني",
    sector9Point2: "تسويق المنتجات",
    sector9Point3: "تدريب تطوير الأعمال",

    exploreSector: "تعرّف على القطاع",
    ourRuralSectors: "قطاعاتنا الريفية",
    learnAboutSector: "تعرّف على القطاع",

    allSector1Name: "قطاع تطوير وتربية النحل وإنتاج العسل",
    allSector1Desc:
      'يدعم برنامج "ريف السعودية" مربي النحل عبر التدريب والتمويل والإرشاد الفني، بهدف رفع جودة العسل السعودي وتطوير سلاسل القيمة المرتبطة به.',
    allSector2Name: "قطاع تطوير وإنتاج وتصنيع وتسويق القهوة السعودية",
    allSector2Desc:
      'يركّز "ريف السعودية" على تمكين مزارعي البن في جازان والباحة وعسير من خلال تحسين الإنتاج وتطوير سلاسل الإمداد والارتقاء بجودة القهوة السعودية محلياً وعالمياً.',
    allSector3Name: "قطاع تنمية زراعة الورد وتجارة الورد",
    allSector3Desc:
      "يعمل البرنامج على تطوير زراعة الورد والنباتات العطرية، ودعم الصناعات المرتبطة بها لتعزيز فرص التصدير وتحقيق قيمة اقتصادية مضافة.",
    allSector4Name: "قطاع تطوير وإنتاج وتصنيع وتسويق الفاكهة",
    allSector4Desc:
      "يشمل دعم إنتاج الفواكه مثل الرمان والتين والعنب وغيرها، عبر تحسين التقنيات المستخدمة، وتطوير الممارسات الزراعية، وتمكين المزارعين من دخول أسواق جديدة.",
    allSector5Name: 'قطاع زراعة المحاصيل البعلية "المطرية"',
    allSector5Desc:
      "يدعم القطاع زراعة المحاصيل المعتمدة على الأمطار في المناطق الجبلية، مثل القمح والشعير والذرة الرفيعة والسمسم، مع التركيز على الاستدامة والحفاظ على الموارد الطبيعية.",
    allSector6Name: "قطاع تعزيز قدرات الصيادين ومستزرعي الأسماك",
    allSector6Desc:
      "يدعم البرنامج الصيادين ومستزرعي الأسماك من خلال التدريب والتمويل وتطوير التقنيات الحديثة لرفع إنتاجية القطاع البحري وتعزيز الأمن الغذائي.",
    allSector7Name: "قطاع تطوير القيمة المضافة من الحيازات الصغيرة",
    allSector7Desc:
      "يعمل على تمكين الأسر المنتجة والحرفيين، وتنمية الصناعات الريفية التي تعكس الهوية التراثية للمملكة، مع دعم التسويق والتصنيع المحلي.",
    allSector8Name: "قطاع تعزيز قدرات صغار مربي الماشية",
    allSector8Desc:
      "يشمل دعم صغار مربي الماشية عبر التدريب والتمويل والرعاية البيطرية، لتحسين جودة منتجات الألبان ورفع كفاءة الإنتاج الحيواني في المملكة.",

    // Widgets
    widgetsBadge: "من الريف",
    widgetsTitle: "استكشف برامجنا ومبادراتنا",
    widget1Title: "برنامج دعم ريف السعودية",
    widget1Desc:
      "تعرّف على برامج الدعم المخصصة لصغار المزارعين والأسر المنتجة وقدّم طلبك إلكترونياً بسهولة.",
    widget1Btn1: "للتقديم على الدعم",
    widget1Btn2: "انتقل إلى منصة التقديم",

    widget2Title: "من الريف.. قصصٌ تُروى",
    widget2Desc:
      "نافذة بصرية واستعراض جغرافي واجتماعي وثقافي لمكونات الريف في مختلف مناطق المملكة.",
    widget2Btn1: "زيارة معرض صور من الريف",
    widget2Btn2: "استكشف المعرض الكامل",

    widget3Title: 'تعرف على ما يدعمه برنامج "ريف السعودية" في منطقتك',
    widget3Desc:
      'استكشف القطاعات الزراعية التي يدعمها برنامج "ريف السعودية" في كل مدينة، وتعرّف على المنتجات والمحاصيل التي تميز كل منطقة وتشكل هويتها الإنتاجية.',
    widget3Btn: "اكتشف ما يميز منطقتك",
    widget3Hover: "مرر بالمؤشر لرؤية التفاصيل",

    // News
    newsTitle: "آخر الأخبار",
    newsTitlePrefix: "آخر",
    newsTitleHighlight: "الأخبار",
    newsDesc: "ابقَ على اطلاعٍ دائم بآخر أخبارنا وإنجازاتنا",
    viewAllNews: "عرض جميع الأخبار",
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
      'برنامج التنمية الريفية الزراعية المستدامة "ريف السعودية"، هو أحد أهم المبادرات التنموية الرائدة التي أطلقتها حكومة المملكة العربية السعودية، لتعزيز التنمية الزراعية الريفية المستدامة، وتحقيق أهداف رؤية السعودية 2030، عبر تمكين صغار المزارعين والأسر الريفية المنتجة ورفع قدراتهم الإنتاجية.',
    aboutIntroPara2:
      "من خلال دعم مالي مباشر، وبرامج تدريب وإرشاد فني، بالإضافة إلى مبادرات تطوير البنية الزراعية في مختلف مناطق المملكة، وتعزيز القطاعات الزراعية الواعدة التي تسهم في تحقيق الأمن الغذائي وتنويع الاقتصاد الوطني.",
    aboutIntroPara3:
      "يعمل البرنامج على بناء مجتمعات ريفية مزدهرة من خلال دعم مستدام يعزز الإنتاجية الزراعية ويرفع مستوى المعيشة في المناطق الريفية.",

    // About Establishment Section
    aboutEstablishmentTitle: 'نشأة برنامج "ريف السعودية"',
    aboutEstablishmentPara1:
      "دشن خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود - حفظه الله - البرنامج في 3 جمادى الأولى 1440هـ الموافق 9 يناير 2019م، ويرتبط تنظيمياً بوزارة البيئة والمياه والزراعة، فيما يسعى إلى تحقيق تنمية اقتصادية واجتماعية متوازنة بين مختلف شرائح المجتمع، من خلال الاستغلال الأمثل والمستدام للموارد الطبيعية والزراعية والمائية المتجددة.",
    aboutEstablishmentPara2:
      "واعتمدت حكومة المملكة مبلغ 8.750 مليارات ريال للبرنامج خلال مرحلته الأولى الممتدة حتى عام 2025م، إضافة إلى 3 مليارات ريال قدّمها صندوق التنمية الزراعية.",
    aboutEstablishmentPara3: "",

    // About Establishment Stats
    establishmentStat1: "تم الإطلاق في 9 يناير 2019",
    establishmentStat2: "يغطي جميع مناطق المملكة",
    establishmentStat3: "دعم آلاف المزارعين",
    establishmentStat4: "برنامج تنمية حائز على جوائز",
    establishmentStat5: "ابتكار مستمر",
    establishmentStat6: "أفضل الممارسات العالمية",
    establishmentImageCaption: "تمكين المجتمعات الريفية في جميع أنحاء المملكة",

    // Vision 2030 Section
    vision2030SectionTitle:
      'دور برنامج "ريف السعودية" في تحقيق مستهدفات رؤية المملكة 2030',
    vision2030Point1Title: "الحد من التلوث بمختلف أنواعه",
    vision2030Point1Text:
      "يسهم البرنامج في نشر ممارسات زراعية صديقة للبيئة، وتعزيز أساليب إنتاج تُقلل الانبعاثات وترفع كفاءة استخدام الموارد الطبيعية.",
    vision2030Point2Title: "ضمان تحقيق الأمن التنموي والغذائي",
    vision2030Point2Text:
      "من خلال تمكين المزارعين ورفع الإنتاج المحلي، وتحسين جودة المحاصيل والمنتجات الريفية بما يعزز الأمن الغذائي للمملكة.",
    vision2030Point3Title: "حماية وتهيئة المناطق الطبيعية",
    vision2030Point3Text:
      "يدعم البرنامج مشاريع تهدف للمحافظة على البيئة الريفية وحماية الغطاء النباتي والحد من التدهور البيئي.",
    vision2030Point4Title: "حماية البيئة من الأخطار الطبيعية مثل التصحر",
    vision2030Point4Text:
      "عبر مبادرات لرفع وعي المزارعين وتطوير ممارسات تساهم في استدامة التربة والحد من آثار التغير المناخي.",
    vision2030Point5Title: "زيادة مشاركة المرأة في سوق العمل",
    vision2030Point5Text:
      "يوفر البرنامج فرصاً اقتصادية واجتماعية للنساء الريفيات، ويدعم أعمالهن الإنتاجية والحرفية.",
    vision2030Point6Title:
      "زيادة مساهمة المنشآت الصغيرة والمتوسطة والسياحة الريفية في الاقتصاد",
    vision2030Point6Text:
      "من خلال دعم المشاريع الريفية الناشئة، وتمكين رواد الأعمال، وتطوير أنشطة السياحة الريفية، وخلق فرص إنتاجية تعزز الاقتصاد المحلي وتنوع مصادر الدخل.",
    vision2030Point7Title: "ضمان استفادة مستدامة من الموارد المائية",
    vision2030Point7Text:
      "يشجع البرنامج تقنيات الري الحديثة، وترشيد استخدام المياه، وتعزيز إنتاج يعتمد على كفاءة عالية في استغلال الموارد.",
    vision2030Point8Title:
      "المحافظة على تراث المملكة الإسلامي والعربي والوطني والتعريف به وتعزيز السياحة الريفية المرتبطة به",
    vision2030Point8Text:
      'يدعم "ريف السعودية" المنتجات التراثية والحرف التقليدية، ويسهم في إبراز الهوية الريفية السعودية، وتحويلها إلى عنصر جذب في السياحة الريفية المستدامة.',
    vision2030CTA1: "اطّلع على أهداف البرنامج",
    vision2030CTA2: "استكشف القطاعات المدعومة",

    // Vision & Mission Section
    visionMissionVisionTitle: "الرؤية",
    visionMissionVisionText:
      "تحقيق تنمية ريفية زراعية مستدامة في مناطق المملكة كافة.",
    visionMissionMissionTitle: "الرسالة",
    visionMissionMissionText:
      "تعزيز قدرات صغار المنتجين الزراعيين وجمعياتهم التعاونية ومؤسساتهم الريفية، لتمكينهم من الحصول على الموارد الإنتاجية والخدمات الزراعية والوصول للأسواق.",

    // Strategic Objectives
    strategicObjectivesTitle: "الأهداف الاستراتيجية",
    strategicObjectivesIntro:
      'يعمل برنامج التنمية الريفية الزراعية المستدامة "ريف السعودية" على تحقيق مجموعة من الأهداف الاستراتيجية التي تسهم في تنويع الإنتاج الزراعي، وتمكين المجتمعات الريفية الزراعية، وتعزيز الاستدامة البيئية والاقتصادية، بما ينسجم مع مستهدفات رؤية المملكة 2030.',
    strategicObjectivesCTA1: "تعرّف على مبادرات ريف مستدام",
    strategicObjectivesCTA2: "استكشف القطاعات المدعومة",
    strategicObj1Title: "تنويع القاعدة الإنتاجية الزراعية",
    strategicObj1Text:
      "تعزيز قدرة المناطق الريفية على إنتاج محاصيل متنوعة ومنتجات ذات قيمة مضافة تفتح فرصاً اقتصادية جديدة.",
    strategicObj2Title: "تعزيز الأمن الغذائي الوطني",
    strategicObj2Text:
      "رفع كفاءة الإنتاج المحلي من خلال دعم القطاعات الزراعية الحيوية وتطوير سلاسل القيمة التي تربط المنتجين بالأسواق.",
    strategicObj3Title: "تحسين دخل ومستوى معيشة صغار المزارعين",
    strategicObj3Text:
      "دعم القدرات الإنتاجية وتوفير برامج تمويل وإرشاد تساعد المزارعين على تحسين أعمالهم ورفع مستوى الدخل الريفي.",
    strategicObj4Title: "الحفاظ على البيئة والموارد الطبيعية",
    strategicObj4Text:
      "ترشيد استخدام المياه وحماية التربة وتقليل الأثر البيئي للعمليات الزراعية.",
    strategicObj5Title: "زيادة فرص العمل",
    strategicObj5Text:
      "خلق فرص اقتصادية جديدة عبر دعم المشاريع الزراعية والحرفية وتعزيز الصناعات الريفية.",
    strategicObj6Title: "المساهمة في الاستقرار الاجتماعي",
    strategicObj6Text:
      "ربط المزارعين بالأسواق المحلية والإقليمية وتنمية المهارات وتمكين المرأة الريفية، بما يعزز الاستقرار الاجتماعي والاقتصادي.",
    strategicObj7Title: "نشر المعرفة الزراعية وبناء القدرات",
    strategicObj7Text:
      "تنفيذ برامج تدريب وإرشاد متخصصة تسهم في رفع مهارات المستفيدين وتعزيز الابتكار الزراعي.",
    strategicObj8Title: "تطوير الممارسات الزراعية المستدامة",
    strategicObj8Text:
      "تشجيع الزراعة الذكية وتبنّي التقنيات الحديثة لضمان استدامة الإنتاج على المدى الطويل.",

    // Organizational Structure
    orgStructureTitle: 'الهيكل التنظيمي لبرنامج "ريف السعودية"',
    orgStructureParagraph1:
      'يعتمد برنامج التنمية الريفية الزراعية المستدامة "ريف السعودية" على هيكل تنظيمي يضمن كفاءة التشغيل ووضوح المهام وتكامل الأدوار بين القادة التنفيذيين ومختلف الإدارات المتخصصة، لضمان تحقيق أهداف البرنامج الاستراتيجية، وتعزيز جودة الأداء والخدمات المقدمة للمستفيدين وسرعة تنفيذ المبادرات في مختلف القطاعات الريفية بمناطق المملكة كافة.',
    orgStructureParagraph2:
      "ويعكس هذا الهيكل التزام البرنامج بتطبيق أعلى معايير الحوكمة وتعزيز الشفافية، ودعم مسيرة التنمية الريفية في مختلف مناطق المملكة.",
    orgNodeOperationalEfficiency: "الكفاءة التشغيلية",
    orgNodeClearResponsibilities: "المسؤوليات الواضحة",
    orgNodeRoleIntegration: "تكامل الأدوار",
    orgNodeStrategicAchievement: "الإنجاز الاستراتيجي",
    orgNodeQualityEnhancement: "تعزيز الجودة",
    orgNodeGovernanceStandards: "معايير الحوكمة",

    // Partners Section
    partnersTitle: "شركاؤنا",
    partnersIntro:
      'يعمل برنامج "ريف السعودية" بالشراكة مع جهات حكومية وتنموية وبحثية ومالية لدعم التنمية الريفية وتحسين الإنتاج الزراعي، من خلال تكامل الجهود وتطوير مبادرات ترتقي بالقطاع الزراعي، وتحقق أثراً مستداماً في المجتمعات الريفية.',
    partnersGovernmentTitle: "الشركاء حكوميون",
    partnersGov1: "وزارة البيئة والمياه والزراعة",
    partnersGov2: "وزارة الموارد البشرية والتنمية الاجتماعية",
    partnersGov3: "وزارة الاقتصاد والتخطيط",
    partnersGov4: "وزارة السياحة",
    partnersGov5: "وزارة التعليم",
    partnersGov6: "الهيئة العامة للمنشآت الصغيرة والمتوسطة",
    partnersDevelopmentTitle: "الجهات التنموية والتمويلية",
    partnersDev1: "صندوق التنمية الزراعية",
    partnersDev2: "بنك التنمية الاجتماعية",
    partnersDev3: "الجمعيات التعاونية الزراعية",
    partnersDev4: "مؤسسة ريف الأهلية",
    partnersDev5: "مبادرات الاستدامة الوطنية وأبرزها: مبادرة السعودية الخضراء",
    partnersResearchTitle: "المؤسسات والمراكز البحثية والعلمية",
    partnersResearch1: "الجامعات السعودية",
    partnersResearch2: "مراكز الأبحاث الزراعية",
    partnersResearch3: "الجهات المختصة بالتقنيات الزراعية الحديثة",
    partnersPrivateTitle: "القطاع الخاص",
    partnersPrivate1: "الشركات المتخصصة في المدخلات الزراعية",
    partnersPrivate2: "شركات الأغذية الوطنية",
    partnersPrivate3: "الشركات الداعمة لسلاسل الإمداد والتسويق",
    partnersPrivate4: "نادي الشباب",
    partnersPrivate5: "نادي الفتح",
    partnersPrivate6: "نادك",
    partnersPrivate7: "مصرف الراجحي",
    partnersPrivate8: "بنك العربي",
    partnersCTA: "اطلع على إنجازات ريف السعودية",
    partnersCTA1: "اطلع على إنجازات ريف السعودية",
    partnersCTA2: "استكشف القطاعات المدعومة",

    // Achievements Section
    achievementsPageTitle: 'إنجازات برنامج "ريف السعودية"',
    achievementsPageIntro:
      'حقق برنامج "ريف السعودية" سلسلة من الإنجازات النوعية التي أسهمت في دعم صغار المزارعين وتمكين آلاف الأسر الريفية، وتعزيز الاستدامة الزراعية. وتعكس هذه الإنجازات أثراً تنموياً واسعاً على المجتمعات الريفية في المملكة، من خلال دعم آلاف الأسر وتعزيز قطاعات الإنتاج الريفي، وتحسين مستوى المعيشة والاستدامة في مختلف القطاعات والمناطق الريفية.',
    achievementsFiguresTitle: 'إنجازات برنامج "ريف السعودية"',
    achievementsFiguresSubtitle: "أولاً: أرقام تعكس واقعاً ريفياً مزدهراً",
    achievementsTotalBeneficiaries:
      "إجمالي عدد المستفيدين من البرنامج منذ الانطلاقة في 2020",
    achievementsMaleBeneficiaries: "عدد الرجال المستفيدين",
    achievementsFemaleBeneficiaries: "عدد النساء المستفيدات",
    achievementsFamilies: "عدد الأسر الريفية الاقتصادية المدعومة",
    achievementsFinancialSupport: "إجمالي مبالغ الدعم منذ إطلاق البرنامج",
    achievementsTrainingCourses: "الدورات التدريبية المقدمة ضمن البرنامج",
    achievementsTrainingBeneficiaries: "عدد المستفيدين من الدورات",
    achievementsProjects: "عدد المشاريع تحت الإنشاء",
    achievementsProjectsValue: "قيمة مشاريع البرنامج",
    achievementsFreelanceCerts:
      'عدد شهادات العمل الحر التي تم استخراجها عبر "ريف السعودية"',
    achievementsRuralProducts:
      'عدد المنتجات (الميز النسبية) التي يدعمها برنامج "ريف السعودية"',
    achievementsIndicatorsTitle: "مؤشرات اقتصادية وتنموية إضافية",
    achievementsUnemploymentRate:
      "انخفاض متوسط نسبة البطالة بين السعوديين في المناطق الريفية إلى",
    achievementsJobOpportunities:
      'عدد فرص العمل التي وفرها برنامج "ريف السعودية" للسعوديين في مختلف القطاعات الريفية والزراعية',
    achievementsPopulationStability:
      "معدل تحسن الاستقرار السكاني والحد من الهجرة من المناطق الريفية إلى المدن، في مؤشر على زيادة جاذبية العيش والعمل في الريف",
    achievementsSeedlings:
      "عدد الشتلات التي تم دعمها وزراعتها ضمن مبادرة السعودية الخضراء بما يعزز الاستدامة البيئية والغطاء النباتي في المناطق الريفية",
    achievementsAverageIncome:
      "متوسط دخل المزارعين الصغار، بما يعكس الأثر الاقتصادي المباشر للدعم على مستوى معيشة الأسر الريفية",
    achievementsHighlightsTitle: "أبرز الإنجازات",
    achievementsHighlightsSubtitle:
      'تعكس الأرقام والمؤشرات سالفة الذكر أبرز إنجازات برنامج "ريف السعودية" على النحو التالي:',
    achievementsHighlight1:
      "وصول الدعم إلى آلاف المستفيدين: قدّم البرنامج دعماً مباشراً لعدد كبير من صغار المزارعين والأسر الريفية في مناطق المملكة، مما ساعد على تحسين إنتاجهم ورفع دخلهم.",
    achievementsHighlight2:
      "تنفيذ برامج تدريب وإرشاد واسعة: قدّم البرنامج ورش تدريب وإرشاد ميداني غطّت عشرات المناطق وعززت مهارات المزارعين والحرفيين.",
    achievementsHighlight3:
      "دعم مشاريع القيمة المضافة: ساهم البرنامج في تطوير منتجات ريفية ذات قيمة عالية وأتاح فرصاً جديدة للتسويق والتصدير.",
    achievementsHighlight4:
      "رفع جودة المنتجات الريفية: من خلال تحسين أساليب الزراعة ودعم التصنيع الغذائي، واستخدام الممارسات الزراعية المستدامة، عبر تعزيز الزراعة الذكية، وربط المزارع بالتقنيات الحديثة (إنترنت الأشياء – البيانات).",
    achievementsHighlight5:
      "تعزيز حضور المرأة الريفية: دعم البرنامج آلاف النساء في تطوير مشاريعهن في قطاعات ومجالات عديدة، على رأسها: العسل والحرف اليدوية والغذاء الريفي.",
    achievementsHighlight6:
      'تنفيذ مبادرات تنموية شاملة: أطلق برنامج "ريف السعودية" مجموعة من المبادرات التنموية التي تستهدف تعزيز الإنتاجية، ورفع كفاءة سلاسل القيمة، ودعم الابتكار، وتمكين المزارعين والأسر الريفية من تبني ممارسات أكثر استدامة.',
    achievementsHighlight7:
      'المشاركة الفعالة في المحافل الزراعية: يحرص برنامج "ريف السعودية" على حضور وتمثيل القطاع الريفي في أهم الفعاليات الزراعية المحلية والدولية، بهدف تبادل الخبرات واستعراض منجزات البرنامج، وتعزيز فرص التعاون مع الجهات الحكومية والقطاع الخاص والمنظمات الدولية، مثل مشاركته في: المعرض الزراعي السعودي، والمعرض العالمي الأول لمنظمة الأغذية والزراعة للأمم المتحدة "الفاو".',
    achievementsAwardsTitle: "ثانياً: الجوائز والتكريمات",
    achievementsAward1Title: "جائزة الأمم المتحدة لأعلى معايير الجودة",
    achievementsAward1Desc:
      "تكريم دولي يعكس التزام البرنامج بتطبيق أعلى معايير الجودة والتنمية المستدامة.",
    achievementsAward2Title: "جائزة الأميرة صيتة للعمل الاجتماعي",
    achievementsAward2Desc:
      "جاء فوز البرنامج تقديراً لجهوده في تحسين حياة الأسر الريفية وتمكينها اقتصادياً.",
    achievementsAward3Title: "جائزة الابتكار من مؤسسة IBMAR البريطانية",
    achievementsAward3Desc:
      "تكريم يعكس تبنّي البرنامج لحلول مبتكرة في تنمية المناطق الريفية وتطوير سلاسل القيمة.",
    achievementsAward4Title:
      "جائزة الحكومة الرقمية العربية عن فئة التواصل الاجتماعي",
    achievementsAward4Desc:
      "تكريم يبرز جهود البرنامج في تعزيز التواصل الرقمي وتوظيف منصات التواصل الاجتماعي لدعم التنمية الريفية وتمكين المستفيدين من الوصول إلى الخدمات والمبادرات بفاعلية.",
    achievementsAward5Title: "جائزة الحكومة الرقمية للإعلام المرئي",
    achievementsAward5Desc:
      "فاز بها البرنامج ضمن فئة التميّز الإعلامي الرقمي لإنتاج محتوى مرئي احترافي يخدم قطاعات التنمية الريفية.",
    achievementsCertificationsTitle: "شهادات الجودة والمعايير",
    achievementsISOTitle: "ثالثاً: شهادات الآيزو العالمية",
    achievementsISODesc:
      'يعكس حصول برنامج "ريف السعودية" على شهادات الآيزو التزامه بأعلى معايير الجودة والإدارة والابتكار.',
    achievementsGuinnessTitle: "إنجازات مسجّلة في موسوعة Guinness",
    achievementsGuinnessDesc:
      "إنجازات عالمية تعكس قوة البرنامج وشراكاته المجتمعية.",
    achievementsGuinness1:
      "أكبر حضور لورشة عمل في مجال التنمية الريفية على مستوى العالم: إنجاز عالمي يعكس قوة البرنامج وشراكاته المجتمعية.",
    achievementsGuinness2:
      "أكبر مزرعة نموذجية في العالم: سُجّل هذا الإنجاز ضمن مبادرات البرنامج لتحسين الممارسات الزراعية ورفع الإنتاجية.",
    achievementsISO1Title: "نظام إدارة الجودة – ISO 9001",
    achievementsISO1Desc:
      "يشهد على التزام البرنامج بتقديم خدمات عالية الجودة وفق المعايير العالمية.",
    achievementsISO2Title: "نظام إدارة استمرارية الأعمال – ISO 22301",
    achievementsISO2Desc:
      "يؤكد جاهزية البرنامج في مواجهة التحديات واستمرارية تقديم الخدمات بكفاءة.",
    achievementsISO3Title: "نظام إدارة الابتكار – ISO 56002",
    achievementsISO3Desc:
      "يعزز قدرات البرنامج على تطوير حلول تنموية مبتكرة وتحسين ممارسات العمل.",
    achievementsISOSubtitle:
      "حصل البرنامج على ثلاثة من أهم شهادات الجودة العالمية، حيث يعكس ذلك التزامه بأعلى معايير الجودة والإدارة والابتكار.",
    achievementsAwardsSubtitle:
      'يواصل برنامج "ريف السعودية" تحقيق حضور بارز في المحافل المحلية والدولية، مُتوجاً بعدد من الجوائز المرموقة التي تؤكد ريادته وتأثيره التنموي.',
    achievementsIndicatorsSubtitle:
      "تعكس هذه المؤشرات الأثر الحقيقي لبرنامج ريف السعودية في دعم الاستقرار الاقتصادي والاجتماعي في المناطق الريفية وتعزيز جاذبيتها للسكان والعمل والاستثمار.",
    achievementsAward6Title: "جائزة أمير حائل للتميز البيئي",
    achievementsAward6Desc:
      "حصل البرنامج على الجائزة في نسختها الثانية تقديراً لإسهاماته في حماية البيئة وتنمية المجتمعات الريفية.",
    achievementsCTA1: "تعرف على برامج الدعم",
    achievementsCTA2: "استكشف القطاعات المدعومة",

    // Annual Reports Section
    transparency: "الشفافية",
    annualReportsIntro:
      "اطلع على التقارير السنوية التي توثق تقدم البرنامج وأثره وأداءه المالي.",
    annualReport2021: "التقرير السنوي 2021",
    annualReport2022: "التقرير السنوي 2022",
    annualReport2023: "التقرير السنوي 2023",
    viewAllReports: "عرض جميع التقارير",
    annualReportsCTA1: "اطلع على إنجازات ريف السعودية",
    annualReportsCTA2: "استكشف القطاعات المدعومة",

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
    honeyProjectsLabel: "مشروعاً",
    honeyProjectsValue: "إجمالي القيمة التقديرية: 98 مليون ريال",
    honeyProjectsValueNumber: "98 مليون",
    honeyProjectsValueLabel: "إجمالي القيمة بالريال",
    honeyProjectsIntro:
      'ينفذ برنامج "ريف السعودية" مجموعة من المشاريع النوعية في قطاع تربية النحل وإنتاج العسل، بهدف حماية السلالة المحلية، ورفع كفاءة الإنتاج، ودعم استدامة هذا القطاع الحيوي في مختلف مناطق المملكة.',
    honeyKeyProjectsTitle: "أبرز مشاريع القطاع",
    honeyFeasibilityTitle: "الجدوى الفنية والاقتصادية للمشاريع",
    honeyFeasibilityIntro:
      "تهدف هذه المشاريع إلى إحداث أثر مستدام في قطاع النحل وإنتاج العسل من خلال:",
    honeyFeasibility1Title:
      "الحفاظ على الثروة النحلية في المملكة من الأمراض والآفات",
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
    honeyKeyProject2Title: "تأهيل محطة مكاك النحل في بلجرشي",
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
    honeyKeyWorksTrainingClosing:
      "كما تم في هذا الإطار إعداد كراسة مشروع متكاملة لتربية وحفظ سلالة النحل المحلية، وإنشاء نظام وطني للمراقبة والإنذار المبكر لأمراض وآفات النحل، بما يعزز جاهزية القطاع وقدرته على الاستجابة السريعة للتحديات.",
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
    howToApply: "آلية التقديم على الدعم",
    termsConditions: "الشروط والأحكام",
    faqs: "الأسئلة الشائعة",
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
    figuresIndicators: "أرقام ومؤشرات",
    rosesImpactGrowth: "الأثر والنمو",
    rosesFiguresSubtitle:
      "الأرقام للفترة 2020–2024 وتظهر نمواً متسارعاً في إنتاج الورود والنباتات العطرية.",
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
    numberOfBeneficiaries: "عدد المستفيدين",
    marketShare: "الحصة السوقية",
    rosesCumulativeGrowth: "النمو التراكمي",
    rosesTargetAchievement: "تحقيق المستهدف",
    rosesProductionScale: "حجم الإنتاج",
    rosesSuitableArea: "المساحات الصالحة للزراعة",
    rosesCurrentlyCultivated: "المساحة المزروعة حاليًا",
    rosesExpansionPotential: "إمكانية التوسع المستقبلي",
    hectares: "هكتاراً",
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
    flowersPerYear: "وردة / سنة",
    target: "مستهدف",
    millionShort: "م",
    billionShort: "مليار",

    // Rose and Aromatic Plants Sector Projects
    sectorProjects: "مشاريع القطاع",
    rosesAromaticProjectsTitle: "مشاريع قطاع الورد والنباتات العطرية",
    numberOfProjects: "عدد المشاريع",
    projects: "مشروعاً",
    rosesProjectsCountLabel: "14 مشروعاً",
    rosesProjectsValueLabel: "135.6 مليون ريال",
    rosesBeneficiariesLabel: "مستفيداً",
    rosesMenLabel: "رجلاً",
    rosesWomenLabel: "امرأة",
    rosesProductionEvolution: "تطور الإنتاج",
    totalEstimatedValue: "إجمالي القيمة التقديرية",
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

    activity1Title: "أولاً: إنشاء الحقول الإرشادية",
    activity1Desc:
      "تم تنفيذ 12 حقلاً إرشادياً لتطوير زراعة الورد والفل في منطقتي الطائف وجازان، مع تطبيق أحدث الممارسات في التقليم والتسميد والحماية من الآفات.",
    activity1Sessions:
      "وشملت الجهود عقد لقاءات توعوية مع 120 مزارعاً، ما أسهم في:",
    activity1Stat1: "زيادة إنتاج الحقول بنسبة 100%",
    activity1Stat2:
      "رفع متوسط الإنتاج من 300–400 زهرة إلى 1200–1400 زهرة لكل شجيرة",
    activity1Fields: "12 حقل إرشادي",
    activity1Farmers: "120 مزارعاً",

    activity2Title: "ثانياً: إدخال تقنية التبريد",
    activity2Desc: "جرى تسليم 6 حاويات تبريد لنقل الورد بعد الحصاد، بهدف:",
    activity2Point1: "الحفاظ على جودة الورد قبل عمليات التقطير",
    activity2Point2: "إطالة العمر التخزيني للزهور",
    activity2Point3: "تقليل نسبة الفاقد وتحسين كفاءة سلسلة الإمداد",
    activity2Containers: "6 حاويات تبريد",

    activity3Title: "ثالثاً: إدخال تقنية الكومبوست",
    activity3Desc:
      "تم البدء بإنتاج الكومبوست من مخلفات تقطير الورد، واستخدامه كسماد طبيعي وصديق للبيئة، بما يعزز الاستدامة البيئية ويخفض تكاليف التسميد.",

    activity4Title: "رابعاً: خريطة زراعة وإنتاج الورد",
    activity4Desc:
      "أُعدّت دراسة فنية باستخدام تقنيات الاستشعار عن بُعد لرسم خريطة دقيقة لزراعة الورد، أسفرت عن:",
    activity4Suitable: "تحديد المساحات الصالحة للزراعة: 621 هكتاراً",
    activity4Current: "المساحة المزروعة حاليًا: 346 هكتاراً",
    activity4Expansion: "إمكانية التوسع المستقبلي: 275 هكتاراً",
    activity4Standards:
      "كما تم إعداد مواصفات زيت الورد السعودي لضمان الجودة والقدرة التنافسية في الأسواق.",

    activity5Title: "خامساً: ورش العمل والزيارات الميدانية",
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
    const dict = translations[language] as Record<string, string>;
    return dict[key] ?? key;
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
