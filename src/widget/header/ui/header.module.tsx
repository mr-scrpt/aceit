import { FC, HTMLAttributes } from "react";
import { HeaderLayout } from "./layout/headerLayout";
import { Logo } from "./logo/logo";
import { Menu } from "@/shared/ui/menu/menu";

interface HeaderModule extends HTMLAttributes<HTMLDivElement> {}

export const HeaderModule: FC<HeaderModule> = (props) => {
  return <HeaderLayout LogoSlot={<Logo />} MenuSlot={<Menu />} />;
};
