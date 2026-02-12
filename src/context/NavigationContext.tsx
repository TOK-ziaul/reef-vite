import React, { createContext, useCallback, useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Page =
  | "home"
  | "about"
  | "sectors"
  | "sector"
  | "sustainability"
  | "newsPress"
  | "photoVideo"
  | "events"
  | "galleryBook"
  | "supportApplication"
  | "faqs"
  | "beneficiariesGuide"
  | "contact";

interface NavigationContextType {
  currentPage: Page;
  currentSectorId?: string;
  navigateTo: (page: Page, sectorId?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

const PATH_TO_PAGE: Record<string, Page> = {
  "/": "home",
  "/about": "about",
  "/sectors": "sectors",
  "/sustainability": "sustainability",
  "/news-press": "newsPress",
  "/photo-video": "photoVideo",
  "/events": "events",
  "/gallery-book": "galleryBook",
  "/support-application": "supportApplication",
  "/faqs": "faqs",
  "/beneficiaries-guide": "beneficiariesGuide",
  "/contact": "contact",
};

const PAGE_TO_PATH: Record<Page, string> = {
  home: "/",
  about: "/about",
  sectors: "/sectors",
  sector: "/sector", // append /:sectorId
  sustainability: "/sustainability",
  newsPress: "/news-press",
  photoVideo: "/photo-video",
  events: "/events",
  galleryBook: "/gallery-book",
  supportApplication: "/support-application",
  faqs: "/faqs",
  beneficiariesGuide: "/beneficiaries-guide",
  contact: "/contact",
};

function pathnameToPage(pathname: string): { page: Page; sectorId?: string } {
  const sectorMatch = pathname.match(/^\/sector\/([^/]+)$/);
  if (sectorMatch) return { page: "sector", sectorId: sectorMatch[1] };
  return { page: PATH_TO_PAGE[pathname] ?? "home" };
}

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const { page: currentPage, sectorId: currentSectorId } = useMemo(
    () => pathnameToPage(location.pathname),
    [location.pathname]
  );

  const navigateTo = useCallback(
    (page: Page, sectorId?: string) => {
      if (page === "sector" && sectorId) {
        navigate(`/sector/${sectorId}`);
      } else {
        navigate(PAGE_TO_PATH[page] ?? "/");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  const value = useMemo(
    () => ({ currentPage, currentSectorId, navigateTo }),
    [currentPage, currentSectorId, navigateTo]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}
