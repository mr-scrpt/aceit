import { FC, HTMLAttributes } from "react";
import sCopyright from "./copyright.module.scss";
import { getCurrentYear } from "@/shared/lib/getCurrentYear";
interface CopyrightProps extends HTMLAttributes<HTMLDivElement> {}

export const Copyright: FC<CopyrightProps> = (props) => {
  return (
    <div className={sCopyright.copyright}>
      <div className={sCopyright.inner}>
        <div className={sCopyright.text}>
          © Copyright {getCurrentYear()}, All Rights Reserved ACEIT
        </div>
      </div>
    </div>
  );
};
