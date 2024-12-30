import { FC, HTMLAttributes } from "react";
import sDesc from "./desc.module.scss";

interface DescProps extends HTMLAttributes<HTMLDivElement> {}

export const Desc: FC<DescProps> = (props) => {
  return (
    <div className={sDesc.inner}>
      <div className={sDesc.text}>
        Bring your talent to ACEIT & explore our it vacancies
      </div>
    </div>
  );
};
