import { FC, HTMLAttributes } from "react";

import sSocial from "./social.module.scss";
import { SOCIAL_LIST } from "./model/social.model";
import Image from "next/image";
interface SocialProps extends HTMLAttributes<HTMLDivElement> {}

export const Social: FC<SocialProps> = (props) => {
  return (
    <div className={sSocial.social}>
      <div className={sSocial.inner}>
        <div className={sSocial.list}>
          {SOCIAL_LIST.map((item) => (
            <div key={item.id} className={sSocial.item}>
              <a href={item.href} className={sSocial.link}>
                <Image src={item.icon} alt={item.title} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
