import { FC, HTMLAttributes } from "react";
import { HeaderLayout } from "./layout/headerLayout";
import { Logo } from "./logo/logo";
import { Menu } from "@/shared/ui/menu/menu";

interface Header extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<Header> = (props) => {
  return <HeaderLayout LogoSlot={<Logo />} MenuSlot={<Menu />} />;
};
