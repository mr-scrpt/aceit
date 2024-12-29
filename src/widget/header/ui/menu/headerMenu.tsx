import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import headerMenu from "./headerMenu.module.scss";
import { HEADER_MENU } from "../../model/menu.data";
import slink from "@/shared/style/base/link.module.scss";
import clsx from "clsx";

interface HeaderMenuProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderMenu: FC<HeaderMenuProps> = (props) => {
  const { className } = props;
  return (
    <nav className={className} {...props}>
      <ul className={headerMenu.list}>
        {HEADER_MENU.map((item) => (
          <li key={item.id} className={headerMenu.item}>
            <Link
              href={item.href}
              className={clsx(slink.link, headerMenu.link)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
