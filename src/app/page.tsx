import { About } from "@/widget/about/ui/about";
import { Hero } from "@/widget/hero";
import { PositionList } from "@/widget/positionList";
import { PositionMarquee } from "@/widget/positionMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PositionList />
      <PositionMarquee />
    </>
  );
}
