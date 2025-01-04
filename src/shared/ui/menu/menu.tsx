import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import sMenu from "./menu.module.scss";
import { MENU_LIST } from "./model/menu.data";
import sLink from "@/shared/style/base/link.module.scss";
import clsx from "clsx";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {}

export const Menu: FC<MenuProps> = (props) => {
  const { className } = props;
  return (
    <nav className={clsx(sMenu.menu, className)} {...props}>
      <ul className={sMenu.list}>
        {MENU_LIST.map((item) => (
          <li key={item.id} className={sMenu.item}>
            <Link href={item.href} className={clsx(sLink.link, sMenu.link)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
