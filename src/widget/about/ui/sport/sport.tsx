import { Title } from "@/shared/ui/title/title";
import { FC, HTMLAttributes } from "react";

import sSport from "./sport.module.scss";
import clsx from "clsx";
import { sDeco } from "@/shared/style";
interface SportProps extends HTMLAttributes<HTMLDivElement> {}

export const Sport: FC<SportProps> = (props) => {
  return (
    <div className={sSport.sport}>
      <div className={sSport.inner}>
        <Title
          size="L"
          className={clsx(sSport.title, sDeco.textGradientSuccess)}
        >
          Sports Activity
        </Title>
        <div className={clsx(sSport.description, sDeco.textGhosty)}>
          In order to support the team's growth of healthy lifestyle habits, we
          pay gym memberships.
        </div>
      </div>
    </div>
  );
};
