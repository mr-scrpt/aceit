import { AboutModule } from "@/widget/about";
import { HeroModule } from "@/widget/hero";
import { PositionListModule } from "@/widget/positionList";
import { PositionMerqueeModule } from "@/widget/positionMarquee";

export default function Home() {
  return (
    <>
      <HeroModule />
      <AboutModule />
      <PositionListModule />
      <PositionMerqueeModule />
    </>
  );
}
