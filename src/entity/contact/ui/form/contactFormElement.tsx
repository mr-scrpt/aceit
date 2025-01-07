"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, HTMLAttributes, useEffect } from "react";
import {
  DefaultValues,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { ZodTypeAny } from "zod";
import { ButtonSubmitComponentType } from "@/shared/type/button.type";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/shadcn/form/form";
import { ContactFirstNameElement } from "./elements/contactFirstName";
import clsx from "clsx";
import { Button } from "@/shared/ui/shadcn/button/button";
import {
  contactDefaultFieldsValues,
  contactFormDefaultSchema,
  ContactFormDefaultValues,
} from "../../domain/form.schema";

interface ContactFormElementsProps<T extends ContactFormDefaultValues>
  extends HTMLAttributes<HTMLFormElement> {
  handleSubmit?: (data: T) => void;
  defaultValues?: DefaultValues<T>;
  schema?: ZodTypeAny;
}

type ContactFormElementsComponent = <
  T extends ContactFormDefaultValues = ContactFormDefaultValues,
>(
  props: ContactFormElementsProps<T>,
) => React.ReactElement;

type ContactFormFields = {
  FieldFirstName: FC;
  SubmitButton: ButtonSubmitComponentType;
};

type ContactFormElementsType = ContactFormElementsComponent & ContactFormFields;

const getDefaultFormValues = <T extends ContactFormDefaultValues>(
  defaultValues?: DefaultValues<T> | undefined,
): DefaultValues<T> => {
  return {
    ...contactDefaultFieldsValues,
    ...defaultValues,
  } as DefaultValues<T>;
};

export const ContactFormElements: ContactFormElementsType = <
  T extends ContactFormDefaultValues,
>(
  props: ContactFormElementsProps<T>,
) => {
  const { defaultValues, handleSubmit: onSubmit, schema, children } = props;

  const form = useForm<T>({
    resolver: zodResolver(schema ?? contactFormDefaultSchema),
    defaultValues: { ...getDefaultFormValues<T>(defaultValues) },
  });
  console.log("output_log: VALUES =>>>", form.getValues());

  useEffect(() => {
    form.reset(getDefaultFormValues<T>(defaultValues));
  }, [defaultValues, form]);

  const handleSubmit = form.handleSubmit(async (data: T) => {
    onSubmit?.(data);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="space-y-8">
        {children}
        <FormMessage />
      </form>
    </FormProvider>
  );
};

ContactFormElements.FieldFirstName = function FieldSettlement() {
  const { control } = useFormContext<ContactFormDefaultValues>();

  return (
    <FormField
      control={control}
      name="firstName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Street</FormLabel>
          <ContactFirstNameElement
            value={field.value}
            onChange={field.onChange}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

ContactFormElements.SubmitButton = function SubmitButton({
  isPending,
  submitText,
  className,
}) {
  return (
    <Button type="submit" disabled={isPending} className={clsx(className)}>
      {isPending && <span>Sending...</span>}
      {submitText}
    </Button>
  );
};
