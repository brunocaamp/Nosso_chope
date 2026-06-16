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
import { SectionSlideOver } from "../components/animations/SectionSlideOver";
import { ScrollVideoReveal } from "../components/animations/ScrollVideoReveal";

export function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <CtaTagsSection />
      <PilsenSection />
      <ScrollVideoReveal />
      <SocialProofSection />
      <RedDraftSection />
      <PartnersSection />
      <DeliverySection />
      <FooterSection />
    </div>
  );
}
