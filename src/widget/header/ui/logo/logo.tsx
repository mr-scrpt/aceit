"use client";
import { IconLogoWithText } from "@/shared/icon/logo_with_text";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";

interface Logo extends HTMLAttributes<HTMLDivElement> {}

export const Logo: FC<Logo> = (props) => {
  return (
    <Link href="/">
      <IconLogoWithText />
    </Link>
  );
};
