import { Title } from "@/shared/ui/title/title";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import imacImg from "./img/img-imac_2.png";

import sWork from "./work.module.scss";
import clsx from "clsx";
import { sDeco } from "@/shared/style";
interface WorkProps extends HTMLAttributes<HTMLDivElement> {}

export const Work: FC<WorkProps> = (props) => {
  return (
    <div className="">
      <Image src={imacImg} alt="work" width={500} height={500} quality={100} />
      <Title size="L" className={clsx(sWork.title, sDeco.textGradientGhosty)}>
        Work Equipment
      </Title>
      <div className={clsx(sWork.description, sDeco.textGhosty)}>
        We provide you with a personal computer so that you can perform all your
        tasks and stay in touch with the team
      </div>
    </div>
  );
};
