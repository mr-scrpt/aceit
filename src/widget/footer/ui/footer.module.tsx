import { FC, HTMLAttributes } from "react";
import { FooterLayout } from "./layout/footerLayout";
import { Menu } from "@/shared/ui/menu/menu";
import { SocialList } from "../../../entity/contact/ui/social/socialList";
import { Copyright } from "./copyright/copyright";

interface FooterModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const FooterModule: FC<FooterModuleProps> = (props) => {
  return (
    <FooterLayout
      MenuSlot={<Menu />}
      SocialSlot={<SocialList />}
      CopyrightSlot={<Copyright />}
    />
  );
};
