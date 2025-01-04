import { FC, HTMLAttributes } from "react";

import sSnack from "./snack.module.scss";
import Image from "next/image";
interface SnackProps extends HTMLAttributes<HTMLDivElement> {}
import CupImg from "./img/img_cup.png";

export const Snack: FC<SnackProps> = (props) => {
  return (
    <div className={sSnack.snack}>
      <div className={sSnack.inner}>
        <div className={sSnack.imgBox}>
          <Image src={CupImg} alt="cup" width={192} />
        </div>
        <div className={sSnack.description}>
          Snacks.
          <br /> Drinks.
          <br /> Everyday.
        </div>
      </div>
    </div>
  );
};
