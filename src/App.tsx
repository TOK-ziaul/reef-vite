import { LanguageProvider } from "./context/LanguageContext";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SectorPage } from "./pages/SectorPage";

function AppContent() {
  const { currentPage, currentSectorId } = useNavigation();

  // console.log(
  //   "AppContent - currentPage:",
  //   currentPage,
  //   "currentSectorId:",
  //   currentSectorId,
  // );

  if (currentPage === "home") return <HomePage />;
  if (currentPage === "about") return <AboutPage />;
  if (currentPage === "sector" && currentSectorId)
    return <SectorPage sectorId={currentSectorId} />;

  return <HomePage />;
}

export default function App() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <div className="w-full min-w-0 bg-white">
          <AppContent />
        </div>
      </NavigationProvider>
    </LanguageProvider>
  );
}
