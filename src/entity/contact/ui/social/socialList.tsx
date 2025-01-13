import { FC, HTMLAttributes } from "react";

import { Icon } from "@/shared/ui/icon/ui/icon";
import { useSocialListData } from "../../vm/useSocialListData.model";
import sSocial from "./social.module.scss";
interface SocialProps extends HTMLAttributes<HTMLDivElement> {}

export const SocialList: FC<SocialProps> = (props) => {
  const socialList = useSocialListData();
  return (
    <div className={sSocial.social}>
      <div className={sSocial.inner}>
        <div className={sSocial.list}>
          {socialList.map((item) => (
            <div key={item.id} className={sSocial.item}>
              <a href={item.href} className={sSocial.link}>
                <Icon icon={item.icon} className={sSocial.icon} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
