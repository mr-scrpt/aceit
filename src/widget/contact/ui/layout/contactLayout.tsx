import { sDeco, sLayout, sPage } from "@/shared/style";
import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode } from "react";
import sContactLayout from "./contactLayout.module.scss";

interface ContactLayoutProps extends HTMLAttributes<HTMLDivElement> {
  PresentationSlot: ReactNode;
  FormSlot: ReactNode;
}

export const ContactLayout: FC<ContactLayoutProps> = (props) => {
  const { PresentationSlot, FormSlot } = props;
  return (
    <section className={clsx(sLayout.wrapper)}>
      <div
        className={clsx(
          sContactLayout.inner,
          sPage.card,
          sDeco.sectionGradientBorder,
        )}
      >
        <div className={clsx(sContactLayout.row)}>
          <div className={clsx(sContactLayout.presentation)}>
            {PresentationSlot}
          </div>
          <div className={clsx(sContactLayout.form)}>{FormSlot}</div>
        </div>
        <div
          className={clsx(sDeco.sectionGradientLeftBottom, sContactLayout.deco)}
        ></div>
        <div
          className={clsx(
            sDeco.sectionBackgroundImgCircleLeftBottom,
            sContactLayout.deco,
          )}
        ></div>
      </div>
    </section>
  );
};
