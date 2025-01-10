import { ContactFormSendModule } from "@/features/contactSend";
import { FC, HTMLAttributes } from "react";

interface CandidatProps extends HTMLAttributes<HTMLDivElement> {}
import sCandidat from "./candidat.module.scss";
import { Title } from "@/shared/ui/title/title";

export const Candidat: FC<CandidatProps> = (props) => {
  return (
    <div className={sCandidat.candidat}>
      <div className={sCandidat.inner}>
        <Title size="L">Get in touch</Title>
        <ContactFormSendModule />
      </div>
    </div>
  );
};
