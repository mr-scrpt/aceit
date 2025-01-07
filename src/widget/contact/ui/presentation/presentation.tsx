import { FC, HTMLAttributes } from "react";
import sPresentation from "./presentation.module.scss";
import { Title } from "@/shared/ui/title/title";

interface PresentationProps extends HTMLAttributes<HTMLDivElement> {}

export const Presentation: FC<PresentationProps> = (props) => {
  return (
    <div className={sPresentation.presentation}>
      <div className={sPresentation.inner}>
        <div className={sPresentation.subtitle}>Contacts</div>
        <Title>Build your career with us</Title>
      </div>
    </div>
  );
};
