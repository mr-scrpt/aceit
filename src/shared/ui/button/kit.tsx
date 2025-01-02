import { FC, HTMLAttributes } from "react";
import { Button } from "./button";
import cls from "../button/style/kit.module.scss";
import { Icon } from "../icon/ui/icon";
import { LinkProject } from "../link/ui/link";
import { ButtonWithIconBox } from "./buttonWithIconBox";

interface ButtonKitProps extends HTMLAttributes<HTMLDivElement> {}

export const ButtonKit: FC<ButtonKitProps> = (props) => {
  return (
    <div>
      <div className={cls.inner}>
        <div className={cls.box}>
          <div className={cls.title}>View Primary</div>
          <div className={cls.row}>
            <Button view="PRIMARY" size="S">
              Button
            </Button>
            <Button view="PRIMARY" size="M">
              Button
            </Button>
            <Button view="PRIMARY" size="L">
              Button
            </Button>
            <Button view="PRIMARY" size="XL">
              Button
            </Button>
          </div>
        </div>
        <div className={cls.box}>
          <div className={cls.title}>View Primary - Roundy</div>
          <div className={cls.row}>
            <Button view="PRIMARY" size="S" shape="ROUNDY">
              Button
            </Button>
            <Button view="PRIMARY" size="M" shape="ROUNDY">
              Button
            </Button>
            <Button view="PRIMARY" size="L" shape="ROUNDY">
              Button
            </Button>
            <Button view="PRIMARY" size="XL" shape="ROUNDY">
              Button
            </Button>
          </div>
        </div>
        <div className={cls.box}>
          <div className={cls.title}>Transparent</div>
          <div className={cls.row}>
            <Button view="TRANSPARENT" size="S">
              Button
            </Button>
            <Button view="TRANSPARENT" size="M">
              Button
            </Button>
            <Button view="TRANSPARENT" size="L">
              Button
            </Button>
            <Button view="TRANSPARENT" size="XL">
              Button
            </Button>
          </div>
        </div>
        <div className={cls.box}>
          <div className={cls.title}>Transparent - Roundy</div>
          <div className={cls.row}>
            <Button view="TRANSPARENT" size="S" shape="ROUNDY">
              Button
            </Button>
            <Button view="TRANSPARENT" size="M" shape="ROUNDY">
              Button
            </Button>
            <Button view="TRANSPARENT" size="L" shape="ROUNDY">
              Button
            </Button>
            <Button view="TRANSPARENT" size="XL" shape="ROUNDY">
              Button
            </Button>
          </div>
        </div>
        <div className={cls.box}>
          <div className={cls.title}>View Transparent - Roundy + Icon</div>
          <div className={cls.row}>
            <Button
              view="TRANSPARENT"
              size="S"
              shape="ROUNDY"
              IconSlotRight={(clsIcon) => (
                <Icon icon="ARROW_FLAT" className={clsIcon} />
              )}
            >
              Button
            </Button>
            <Button
              view="TRANSPARENT"
              size="M"
              shape="ROUNDY"
              IconSlotRight={(clsIcon) => (
                <Icon icon="ARROW_FLAT" className={clsIcon} />
              )}
            >
              Button
            </Button>
            <Button
              view="TRANSPARENT"
              size="L"
              shape="ROUNDY"
              IconSlotRight={(clsIcon) => (
                <Icon icon="ARROW_FLAT" className={clsIcon} />
              )}
            >
              Button
            </Button>
            <Button
              view="TRANSPARENT"
              size="XL"
              shape="ROUNDY"
              IconSlotRight={(clsIcon) => (
                <Icon icon="ARROW_FLAT" className={clsIcon} />
              )}
            >
              Button
            </Button>
          </div>
        </div>
        <div className={cls.box}>
          <div className={cls.title}>Link Icon Box</div>
          <div className={cls.row}>
            {/* <IconBox icon="ARROW_FLAT" size="L" /> */}
            {/* <LinkProject */}
            {/*   href="#" */}
            {/*   IconSlotLeft={(clsIconBox) => ( */}
            {/*     <IconBox icon="ARROW_FLAT" size="L" classBox={clsIconBox} /> */}
            {/*   )} */}
            {/* > */}
            {/*   Link */}
            {/* </LinkProject> */}
            <ButtonWithIconBox
              view="WITH_ICON"
              size="L"
              shape="ROUNDY"
              IconSlot={(cls) => <Icon icon="ARROW_FLAT" className={cls} />}
            >
              Button
            </ButtonWithIconBox>
            <ButtonWithIconBox
              view="WITH_ICON"
              size="M"
              shape="ROUNDY"
              IconSlot={(cls) => <Icon icon="ARROW_FLAT" className={cls} />}
            >
              Button
            </ButtonWithIconBox>
          </div>
        </div>
      </div>
    </div>
  );
};
