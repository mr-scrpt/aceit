import { Position, PositionType } from "@/entity/position";
import { FC, HTMLAttributes } from "react";
import sPositionSnippet from "./positionItem.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { ButtonWithIconBox } from "@/shared/ui/button/buttonWithIconBox";
import { Icon } from "@/shared/ui/icon/ui/icon";

interface PositionItemProps extends HTMLAttributes<HTMLDivElement> {
  position: PositionType;
}

export const PositionItem: FC<PositionItemProps> = (props) => {
  const { position, className } = props;
  const clsPositionSnippet = clsx(sPositionSnippet.positionSnippet, [
    className,
  ]);
  return (
    <Position className={clsPositionSnippet} position={position}>
      <div className={sPositionSnippet.inner}>
        <Position.Title size="M" />
        <Position.TagList className={sPositionSnippet.tagBox} />
        <div className={sPositionSnippet.line}>
          {/* <Position.DatePosted /> */}
          <Link href={`${position.id}`} className={sPositionSnippet.link}>
            <ButtonWithIconBox
              view="WITH_ICON"
              size="M"
              shape="MAIN"
              IconSlot={(clsIcon) => (
                <Icon icon="ARROW_TILE" className={clsIcon} />
              )}
            >
              Learn more
            </ButtonWithIconBox>
          </Link>
        </div>
      </div>
    </Position>
  );
};
