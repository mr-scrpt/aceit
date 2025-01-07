"use client";
import { ButtonSubmitComponentType } from "@/shared/type/button.type";
import { Button } from "@/shared/ui/shadcn/button/button";
import {
  FormField,
  FormItem,
  FormItemCol,
  FormMessage,
} from "@/shared/ui/shadcn/form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { FC, HTMLAttributes, useEffect } from "react";
import {
  DefaultValues,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { ZodTypeAny } from "zod";
import {
  contactDefaultFieldsValues,
  contactFormDefaultSchema,
  ContactFormDefaultValues,
} from "../../domain/form.schema";
import { ContactFirstNameElement } from "./elements/contactFirstName";

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
  FieldFirstName: FC<HTMLAttributes<HTMLDivElement>>;
  FieldSecondName: FC<HTMLAttributes<HTMLDivElement>>;
  FieldPhoneNumber: FC;
  FieldEmail: FC;
  FieldPosition: FC;
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

ContactFormElements.FieldFirstName = function FieldFirstName(props) {
  const { className } = props;
  const { control } = useFormContext<ContactFormDefaultValues>();
  console.log("output_log: classNameC =>>>", className);

  return (
    <FormField
      control={control}
      name="firstName"
      render={({ field }) => (
        <FormItemCol className={className}>
          <ContactFirstNameElement
            value={field.value}
            onChange={field.onChange}
          />
          <FormMessage />
        </FormItemCol>
      )}
    />
  );
};
ContactFormElements.FieldSecondName = function FieldSecondName(props) {
  const { className } = props;
  const { control } = useFormContext<ContactFormDefaultValues>();

  return (
    <FormField
      control={control}
      name="secondName"
      render={({ field }) => (
        <FormItemCol className={className}>
          <ContactFirstNameElement
            value={field.value}
            onChange={field.onChange}
          />
          <FormMessage />
        </FormItemCol>
      )}
    />
  );
};

ContactFormElements.FieldPhoneNumber = function FieldPhoneNumber() {
  const { control } = useFormContext<ContactFormDefaultValues>();

  return (
    <FormField
      control={control}
      name="phoneNumber"
      render={({ field }) => (
        <FormItem>
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

ContactFormElements.FieldEmail = function FieldEmail() {
  const { control } = useFormContext<ContactFormDefaultValues>();

  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
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

// TODO: MOVE to POSITION
ContactFormElements.FieldPosition = function FieldPosition() {
  const { control } = useFormContext<ContactFormDefaultValues>();

  return (
    <FormField
      control={control}
      name="position"
      render={({ field }) => (
        <FormItem>
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
