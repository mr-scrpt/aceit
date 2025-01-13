import { IconListType } from "@/shared/ui/icon/domain/icon.type";

// NOTE: Base
export type Contact = {
  firstName: string;
  secondName: string;
  phoneNumber: string;
  email: string;
  position: string;
  cv: File;
};

export interface SocialType {
  id: number;
  href: string;
  title: string;
  icon: IconListType;
}

// // NOTE: Entity
// export type ContactEntity = ContactBase & {
//   id: string;
//   createdAt: Date;
//   updatedAt: Date;
// };
//
// // NOTE: Projetions
// export type Contact = ContactBase & {
//   id: string;
//   createdAt: Date;
//   updatedAt: Date;
// };
//
