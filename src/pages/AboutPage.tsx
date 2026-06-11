import { Header } from "../components/Header";
import { AboutHero } from "../components/AboutHero";
import { AboutIntro } from "../components/AboutIntro";
import { AboutEstablishment } from "../components/AboutEstablishment";
import { AboutVision2030 } from "../components/AboutVision2030";
import { AboutVisionMission } from "../components/AboutVisionMission";
import { AboutStrategicObjectives } from "../components/AboutStrategicObjectives";
import { AboutWhatWeOffer } from "../components/AboutWhatWeOffer";
import { AboutOrganizationalStructure } from "../components/AboutOrganizationalStructure";
import { AboutPartners } from "../components/AboutPartners";
import { AboutMilestones } from "../components/AboutMilestones";
import { AboutAchievements } from "../components/AboutAchievements";
import { AboutAnnualReports } from "../components/AboutAnnualReports";
import { Footer } from "../components/Footer";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutIntro />
      <AboutEstablishment />
      <AboutVision2030 />
      <AboutVisionMission />
      <AboutStrategicObjectives />
      <AboutWhatWeOffer />
      <AboutOrganizationalStructure />
      <AboutPartners />
      <AboutMilestones />
      <AboutAchievements />
      <AboutAnnualReports />
      <Footer />
    </div>
  );
}