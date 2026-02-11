import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { NavigationProvider } from "./context/NavigationContext";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SectorPage } from "./pages/SectorPage";
import { SustainabilityPage } from "./pages/SustainabilityPage";
import { NewsPressPage } from "./pages/NewsPress";
import { PhotoVideoLibraryPage } from "./pages/PhotoVideoLibrary";
import { EventsPage } from "./pages/Events";
import { PhotosFromReefPage } from "./pages/PhotosFromReef";
import { SupportApplicationPage } from "./pages/SupportApplication";
import { FAQsPage } from "./pages/FAQs";
import { BeneficiariesGuidePage } from "./pages/BeneficiariesGuide";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <div className="w-full min-w-0 bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sector/:sectorId" element={<SectorPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/news-press" element={<NewsPressPage />} />
            <Route path="/photo-video" element={<PhotoVideoLibraryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery-book" element={<PhotosFromReefPage />} />
            <Route
              path="/support-application"
              element={<SupportApplicationPage />}
            />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route
              path="/beneficiaries-guide"
              element={<BeneficiariesGuidePage />}
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </NavigationProvider>
    </LanguageProvider>
  );
}
