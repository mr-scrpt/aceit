import { AboutModule } from "@/widget/about";
import { ContactModule } from "@/widget/contact/ui/contact.module";
import { HeroModule } from "@/widget/hero";
import { PositionListModule } from "@/widget/positionList";
import { PositionMerqueeModule } from "@/widget/positionMarquee";

export default function Home() {
  return (
    <>
      <HeroModule />
      <AboutModule />
      <PositionMerqueeModule />
      <PositionListModule />
      <ContactModule />
    </>
  );
}
