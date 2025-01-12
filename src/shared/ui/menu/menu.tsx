"use client";
import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import sMenu from "./menu.module.scss";
import { MENU_DATA } from "./model/menu.data";
import sLink from "@/shared/style/base/link.module.scss";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {}

import { useEffect } from "react";

export const Menu: FC<MenuProps> = (props) => {
  const { className } = props;
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      const scrollToSection = sessionStorage.getItem("scrollToSection");
      if (scrollToSection) {
        sessionStorage.removeItem("scrollToSection");

        const element = document.getElementById(scrollToSection);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [isHomePage]);

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (isHomePage) {
      const element = document.getElementById(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToSection", href);
      router.push("/");
    }
  };

  return (
    <nav className={clsx(sMenu.menu, className)} {...props}>
      <ul className={sMenu.list}>
        {Object.values(MENU_DATA).map((item) => (
          <li key={item.id} className={sMenu.item}>
            <Link
              href={isHomePage ? `#${item.href}` : "/"}
              className={clsx(sLink.link, sMenu.link)}
              onClick={(e) => handleNavigation(item.href, e)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
