import { FC, HTMLAttributes } from "react";
import sBanner from "./banner.module.scss";
import { sDeco } from "@/shared/style";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {}

export const Banner: FC<BannerProps> = (props) => {
  return (
    <div className={sBanner.inner}>
      <div className={sBanner.text}>
        Unlock your IT potential join our team{" "}
        <span className={sDeco["text-gradient"]}>Today</span>
      </div>
    </div>
  );
};
