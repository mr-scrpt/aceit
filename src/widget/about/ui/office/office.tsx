import { sDeco } from "@/shared/style";
import { Title } from "@/shared/ui/title/title";
import clsx from "clsx";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import OfficeImg from "./img/img_office.png";
import sOffice from "./office.module.scss";
import { Img } from "@/shared/ui/img/img";

interface OfficeProps extends HTMLAttributes<HTMLDivElement> {}

export const Office: FC<OfficeProps> = (props) => {
  return (
    <div className={sOffice.office}>
      <div className={sOffice.inner}>
        <div className={sOffice.imgBox}>
          <Img src={OfficeImg} alt="office" className={sOffice.img} />
        </div>
        <div className={sOffice.textBox}>
          <div className={sOffice.textRow}>
            <Title size="M" className={sOffice.title}>
              Office near metro
            </Title>
            <div className={clsx(sOffice.description, sDeco.textGhosty)}>
              Office near metro We are able to provide you access to a spacious
              office that is close to metro.
            </div>
          </div>
          <div className={sOffice.textRow}>
            <Title size="M" className={sOffice.title}>
              Work Remotly
            </Title>
            <div className={clsx(sOffice.description, sDeco.textGhosty)}>
              Work from home if it is more comfortable for you and will enhance
              the results.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
