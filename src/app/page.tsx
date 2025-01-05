import { About } from "@/widget/about/ui/about";
import { Hero } from "@/widget/hero";
import { PositionList } from "@/widget/positionList";
import { Marquee } from "@/widget/positionSlider/ui/marquee/marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PositionList />
      <Marquee />
    </>
  );
}
