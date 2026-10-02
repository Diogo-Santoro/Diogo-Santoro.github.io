import { featuredProjects } from "@/data/projects";
import HomeHero from "@/components/organisms/HomeHero";
import TechStackSection from "@/components/organisms/TechStackSection";
import FeaturedStrip from "@/components/organisms/FeaturedStrip";
import HomeCTA from "@/components/organisms/HomeCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TechStackSection />
      <FeaturedStrip projects={featuredProjects} />
      <HomeCTA />
    </>
  );
}
