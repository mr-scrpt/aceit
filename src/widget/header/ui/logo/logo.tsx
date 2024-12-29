"use client";
import { IconLogoWithText } from "@/shared/icon/logo_with_text";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <IconLogoWithText />
    </Link>
  );
}
