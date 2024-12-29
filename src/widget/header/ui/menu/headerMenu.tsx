import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import headerMenu from "./headerMenu.module.scss";
import { HEADER_MENU } from "../../model/menu.data";

interface HeaderMenuProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderMenu: FC<HeaderMenuProps> = (props) => {
  const { className } = props;
  return (
    <nav className={className} {...props}>
      <ul className={headerMenu.list}>
        {HEADER_MENU.map((item) => (
          <li key={item.id} className={headerMenu.item}>
            <Link href={item.href} className={headerMenu.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
