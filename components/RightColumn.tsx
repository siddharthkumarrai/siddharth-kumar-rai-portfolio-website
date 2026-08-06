import IntroSection from "./IntroSection";
import NewsSection from "./NewsSection";
import ProjectsSection from "./ProjectsSection";
import SoftwareSection from "./SoftwareSection";

export default function RightColumn() {
  return (
    <main className="h-full overflow-y-auto scrollbar-hide">
      <IntroSection />
      <NewsSection />
      <ProjectsSection />
      <SoftwareSection />
    </main>
  );
}
