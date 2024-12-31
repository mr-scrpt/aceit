import { FC, HTMLAttributes } from "react";
import sBanner from "./banner.module.scss";
import { sDeco } from "@/shared/style";
import { Button } from "@/shared/ui/button/button";
import { Icon } from "@/shared/ui/icon/icon";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {}

export const Banner: FC<BannerProps> = (props) => {
  return (
    <div className={sBanner.inner}>
      <div className={sBanner.text}>
        Unlock your IT potential join our team{" "}
        <span className={sDeco["text-gradient"]}>Today</span>
        <Button view="PRIMARY" size="L" icon="ARROW_FLAT" iconPosition="RIGHT">
          Learn more
        </Button>
        <Button view="SECONDARY" size="L">
          Learn more
        </Button>
        <Button view="TRANSPARENT" size="L">
          Learn more
        </Button>
        <Icon icon="ARROW_FLAT" />
      </div>
    </div>
  );
};
