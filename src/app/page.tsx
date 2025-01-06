import { AboutModule } from "@/widget/about/ui/about.module";
import { Hero } from "@/widget/hero";
import { PositionList } from "@/widget/positionList";
import { PositionMarquee } from "@/widget/positionMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutModule />
      <PositionList />
      <PositionMarquee />
    </>
  );
}
