import { FC, HTMLAttributes } from "react";
import sCopyright from "./copyright.module.scss";
interface CopyrightProps extends HTMLAttributes<HTMLDivElement> {}

export const Copyright: FC<CopyrightProps> = (props) => {
  return (
    <div className={sCopyright.copyright}>
      <div className={sCopyright.inner}>
        <div className={sCopyright.text}>
          © Copyright 2024, All Rights Reserved ACEIT
        </div>
      </div>
    </div>
  );
};
