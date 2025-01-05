import { About } from "@/widget/about/ui/about";
import { Hero } from "@/widget/hero";
import { PositionList } from "@/widget/positionList";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PositionList />
    </>
  );
}
