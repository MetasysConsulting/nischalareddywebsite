import { ContactBar } from "@/components/ContactBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  ClientsBlock,
  EducationBlock,
  ExpertiseGrid,
  ExperienceList,
  ProjectsBlock,
  ToolsBlock,
} from "@/components/PortfolioContent";
import { ContactBlock, TestimonialBlock } from "@/components/PortfolioTestimonialAndContact";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ContactBar />
        <ExperienceList />
        <EducationBlock />
        <ClientsBlock />
        <ExpertiseGrid />
        <ToolsBlock />
        <ProjectsBlock />
        <TestimonialBlock />
        <ContactBlock />
      </main>
      <SiteFooter />
    </>
  );
}
