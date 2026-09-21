import { featuredProjects } from "@/data/projects";
import HomeHero from "@/components/organisms/HomeHero";
import FeaturedStrip from "@/components/organisms/FeaturedStrip";
import HomeCTA from "@/components/organisms/HomeCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedStrip projects={featuredProjects} />
      <HomeCTA />
    </>
  );
}
