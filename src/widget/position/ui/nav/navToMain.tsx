import { ButtonWithIconBox } from "@/shared/ui/button/buttonWithIconBox";
import { Icon } from "@/shared/ui/icon/ui/icon";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import sNavToMain from "./navToMain.module.scss";

interface NavToMainProps extends HTMLAttributes<HTMLDivElement> {}

export const NavToMain: FC<NavToMainProps> = (props) => {
  return (
    <Link href="/">
      <ButtonWithIconBox
        view="WITH_ICON"
        classIcon={sNavToMain.icon}
        IconSlot={(clsIcon) => <Icon icon="ARROW_TILE" className={clsIcon} />}
      >
        Back
      </ButtonWithIconBox>
    </Link>
  );
};
