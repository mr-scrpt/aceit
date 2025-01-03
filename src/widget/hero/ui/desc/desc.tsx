import { FC, HTMLAttributes } from "react";
import sDesc from "./desc.module.scss";
import { sDeco } from "@/shared/style";
import clsx from "clsx";

interface DescProps extends HTMLAttributes<HTMLDivElement> {}

export const Desc: FC<DescProps> = (props) => {
  return (
    <div className={sDesc.inner}>
      <div className={clsx(sDesc.text, sDeco.textGhosty)}>
        Bring your talent to ACEIT & explore our it vacancies
      </div>
    </div>
  );
};
