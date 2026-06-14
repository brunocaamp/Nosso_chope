import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { gridBase } from "../components/code/constants";
import { CtaTagsSection } from "../components/sections/CtaTagsSection";
import { PilsenSection } from "../components/sections/PilsenSection";
import { SocialProofSection } from "../components/sections/SocialProofSection";
import { RedDraftSection } from "../components/sections/RedDraftSection";
import { PartnersSection } from "../components/sections/PartnersSection";
import { DeliverySection } from "../components/sections/DeliverySection";
import { FooterSection } from "../components/sections/FooterSection";

export function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <CtaTagsSection />
      <PilsenSection />
      <SocialProofSection />
      <RedDraftSection />
      <PartnersSection />
      <DeliverySection />
      <FooterSection />
    </div>
  );
}
