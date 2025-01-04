import { sDeco } from "@/shared/style";
import { FC, HTMLAttributes } from "react";
import sBanner from "./banner.module.scss";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {}

export const Banner: FC<BannerProps> = (props) => {
  return (
    <div className={sBanner.banner}>
      <div className={sBanner.inner}>
        <div className={sBanner.text}>
          Unlock your IT potential join our team{" "}
          <span className={sDeco.textGradientPrimary}>Today</span>
          <br />
        </div>
      </div>
    </div>
  );
};
