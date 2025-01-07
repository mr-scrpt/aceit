import { FC, HTMLAttributes } from "react";
import { ContactLayout } from "./layout/contactLayout";
import { Presentation } from "./presentation/presentation";
import { Candidat } from "./form/candidat";

interface ContactModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactModule: FC<ContactModuleProps> = (props) => {
  return (
    <ContactLayout
      PresentationSlot={<Presentation />}
      FormSlot={<Candidat />}
    />
  );
};
