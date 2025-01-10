"use client";
import { FC, HTMLAttributes } from "react";
import { ContactLayout } from "./layout/contactLayout";
import { Presentation } from "./presentation/presentation";
import { Candidat } from "./form/candidat";
import { MENU_DATA } from "@/shared/ui/menu/model/menu.data";

interface ContactModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const ContactModule: FC<ContactModuleProps> = (props) => {
  return (
    <ContactLayout
      PresentationSlot={<Presentation />}
      FormSlot={<Candidat />}
      anchor={MENU_DATA.contacts.href}
    />
  );
};
