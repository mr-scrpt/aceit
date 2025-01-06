import { FC, HTMLAttributes } from "react";
import { HeroLayout } from "./layout/heroLayout";
import { Banner } from "./banner/banner";
import { Action } from "./action/action";
import { Desc } from "./desc/desc";

interface HeroModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const HeroModule: FC<HeroModuleProps> = (props) => {
  return (
    <HeroLayout
      slotBanner={<Banner />}
      slotDesc={<Desc />}
      slotAction={<Action />}
    />
  );
};
