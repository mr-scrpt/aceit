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
    <section className={clsx(sLayout.wrapper, sContactLayout.contact)}>
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
      </div>
    </section>
  );
};
