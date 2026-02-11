import { ContactHero } from "../components/ContactHero";
import { ContactIntro } from "../components/ContactIntro";
import { ContactMethods } from "../components/ContactMethods";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9F7EF]">
      <Header />
      <ContactHero />
      <ContactIntro />
      <ContactMethods />
      <Footer />
    </div>
  );
}
