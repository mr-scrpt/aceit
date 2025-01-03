import { Button } from "@/shared/ui/button/button";
import { Icon } from "@/shared/ui/icon/ui/icon";
import { FC, HTMLAttributes } from "react";
import sAction from "./action.module.scss";

interface ActionProps extends HTMLAttributes<HTMLDivElement> {}

export const Action: FC<ActionProps> = (props) => {
  return (
    <div className={sAction.action}>
      <div className={sAction.inner}>
        <Button view="PRIMARY" size="L">
          Open Position
        </Button>

        <Button
          view="TRANSPARENT"
          size="L"
          shape="ROUNDY"
          className={sAction.buttonMeet}
          IconSlotRight={(clsIcon) => (
            <Icon icon="ARROW_FLAT" className={clsIcon} />
          )}
        >
          Meet The Team
        </Button>
      </div>
    </div>
  );
};
