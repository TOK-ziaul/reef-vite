import { Header } from "../components/Header";
import { HeroSlider } from "../components/HeroSlider";
import { KeyNumbers } from "../components/KeyNumbers";
import { SectorsGrid } from "../components/SectorsGrid";
import { WidgetsSection } from "../components/WidgetsSection";
import { LatestNews } from "../components/LatestNews";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <KeyNumbers />
      <SectorsGrid />
      <WidgetsSection />
      <LatestNews />
      <Footer />
    </div>
  );
}
