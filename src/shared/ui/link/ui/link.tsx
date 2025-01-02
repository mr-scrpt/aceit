import clsx from "clsx";
import NextLink from "next/link";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import cls from "./style/link.module.scss";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  IconSlotLeft?: (className: string) => ReactNode;
  IconSlotRight?: (className: string) => ReactNode;
  classLink?: string;
  classIconBox?: string;
}

export const LinkProject: FC<LinkProps> = (props) => {
  const {
    href,
    children,
    IconSlotLeft,
    IconSlotRight,
    classIconBox,
    classLink,
  } = props;
  const clsLink = clsx(cls.link, [classLink]);
  const clsIconBoxLink = clsx(cls.icon_box, [classIconBox]);
  return (
    <NextLink href={href || "#"} className={clsLink}>
      {IconSlotLeft && IconSlotLeft(clsIconBoxLink)}
      <span className={cls.text}>{children}</span>
      {IconSlotRight && IconSlotRight(clsIconBoxLink)}
    </NextLink>
  );
};
