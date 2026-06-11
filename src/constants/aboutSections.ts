export const ABOUT_DROPDOWN_ITEMS = [
  { key: "aboutProgram", sectionId: "about-program" },
  { key: "visionMission", sectionId: "vision-mission" },
  { key: "objectives", sectionId: "objectives" },
  { key: "whatWeOffer", sectionId: "what-we-offer" },
  { key: "milestones", sectionId: "milestones" },
  { key: "annualReports", sectionId: "annual-reports" },
] as const;

export const ABOUT_SECTION_BY_KEY = Object.fromEntries(
  ABOUT_DROPDOWN_ITEMS.map((item) => [item.key, item.sectionId]),
) as Record<(typeof ABOUT_DROPDOWN_ITEMS)[number]["key"], string>;
