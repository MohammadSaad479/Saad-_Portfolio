import PageShell from "./components/PageShell";
import HeroSection from "./components/HeroSection";
import Intro from "./components/Intro";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import WorkTogether from "./components/WorkTogether";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <Intro />
      <TechStack />
      <Experience />
      <Projects limit={4} />
      <WorkTogether />
    </PageShell>
  );
}
