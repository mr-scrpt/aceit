import { FC, HTMLAttributes } from "react";
import { FooterLayout } from "./layout/footerLayout";
import { Menu } from "@/shared/ui/menu/menu";
import { Social } from "./social/social";
import { Copyright } from "./copyright/copyright";

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer: FC<FooterProps> = (props) => {
  return (
    <FooterLayout
      MenuSlot={<Menu />}
      SocialSlot={<Social />}
      CopyrightSlot={<Copyright />}
    />
  );
};
