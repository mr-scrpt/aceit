import { FC, HTMLAttributes } from "react";
import sEmploymentType from "./employmentType.module.scss";
import clsx from "clsx";
import { Icon } from "@/shared/ui/icon/ui/icon";
import { sDeco } from "@/shared/style";

interface EmploymentTypeProps extends HTMLAttributes<HTMLDivElement> {}

export const EmploymentType: FC<EmploymentTypeProps> = (props) => {
  const { className } = props;
  return (
    <div className={clsx(sEmploymentType.employmentType, [className])}>
      <span className={sEmploymentType.inner}>
        <div
          className={clsx(sEmploymentType.iconBox, [
            sDeco.sectionGradientPrimary,
            sDeco.sectionGradientBorderAndHover,
          ])}
        >
          <Icon icon="CLOCK" className={sEmploymentType.icon} />
        </div>
        <span className={sEmploymentType.text}>Full-time</span>
      </span>
    </div>
  );
};
