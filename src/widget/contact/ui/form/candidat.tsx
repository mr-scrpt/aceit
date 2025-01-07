import { ContactFormSendModule } from "@/features/contactSend";
import { FC, HTMLAttributes } from "react";

interface CandidatProps extends HTMLAttributes<HTMLDivElement> {}

export const Candidat: FC<CandidatProps> = (props) => {
  return <ContactFormSendModule />;
};
