import { useRouter } from "next/navigation";
// import { useContactCreateMutation } from "../_mutation/useContactCreate.mutation";
// import { HandlerFormBaseProps } from "@/shared/lib/hook";

interface ContactFormCreateProps {
  callbackUrl?: string;
  onSuccess?: () => void;
  // data: {
  //   firstName: string;
  // };
}

export const useContactCreateHandler = (props: ContactFormCreateProps) => {
  const { onSuccess, callbackUrl } = props;
  // const { firstName } = data;
  // const {
  //   contactCreate,
  //   isPending: isPendingCreate,
  //   isSuccess: isSuccessCreate,
  // } = useContactCreateMutation();

  const router = useRouter();

  // const handleContactCreate = async (data: ContactCreateFormValues) => {
  //   await contactCreate({
  //     contactData: {
  //       ...data,
  //       userId,
  //       settlementRef,
  //     },
  //   });
  //
  //   onSuccess?.();
  //
  //   if (callbackUrl) {
  //     router.push(callbackUrl);
  //   }
  // };
  //
  //
  const {
    contactCreate: handleContactCreate,
    isPending: isPendingCreate,
    isSuccess: isSuccessCreate,
  } = {
    contactCreate: () => {
      console.log("output_log: handleContactCreate =>>>");
    },
    isPending: false,
    isSuccess: false,
  };

  return {
    handleContactCreate,
    isPendingCreate,
    isSuccessCreate,
  };
};
