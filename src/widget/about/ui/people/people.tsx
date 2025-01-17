import { FC, HTMLAttributes } from "react";

interface PeopleProps extends HTMLAttributes<HTMLDivElement> {}
import sPeople from "./people.module.scss";
import clsx from "clsx";
import PeopleImg from "./img/img_people.png";
import Image from "next/image";

export const People: FC<PeopleProps> = (props) => {
  const { className } = props;
  return (
    <div className={clsx(sPeople.people, [className])}>
      <div className={sPeople.inner}>
        <div className={sPeople.imgBox}>
          <Image src={PeopleImg} alt="cup" />
        </div>
      </div>
    </div>
  );
};
