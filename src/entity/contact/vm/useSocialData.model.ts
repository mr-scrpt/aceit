import { SOCIAL_LIST } from "../model/social.model";

export const useSocialData = (socialId: string) => {
  return SOCIAL_LIST.find((p) => p.id.toString() === socialId);
};
