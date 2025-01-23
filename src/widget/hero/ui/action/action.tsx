import { Button } from "@/shared/ui/button/button";
import { MENU_DATA } from "@/shared/ui/menu/model/menu.data";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import sAction from "./action.module.scss";

interface ActionProps extends HTMLAttributes<HTMLDivElement> {}

export const Action: FC<ActionProps> = (props) => {
  return (
    <div className={sAction.action}>
      <div className={sAction.inner}>
        <Link href={`#${MENU_DATA.jobs.href}`}>
          <Button view="PRIMARY" size="XL">
            Open positions
          </Button>
        </Link>
      </div>
    </div>
  );
};
