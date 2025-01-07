"use client";
import { ButtonSubmitComponentType } from "@/shared/type/button.type";
import { Button } from "@/shared/ui/shadcn/button/button";
import {
  FormField,
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
  positionDefaultFieldsValues,
  positionFormDefaultSchema,
  PositionFormDefaultValues,
} from "../../domain/position.schema";
import { PositionSelectElement } from "./elements/positionSelectElement";

interface PositionFormElementsProps<T extends PositionFormDefaultValues>
  extends HTMLAttributes<HTMLFormElement> {
  handleSubmit?: (data: T) => void;
  defaultValues?: DefaultValues<T>;
  schema?: ZodTypeAny;
}

type PositionFormElementsComponent = <
  T extends PositionFormDefaultValues = PositionFormDefaultValues,
>(
  props: PositionFormElementsProps<T>,
) => React.ReactElement;

type PositionFormFields = {
  FieldPositionSelect: FC<HTMLAttributes<HTMLDivElement>>;
  SubmitButton: ButtonSubmitComponentType;
};

type PositionFormElementsType = PositionFormElementsComponent &
  PositionFormFields;

const getDefaultFormValues = <T extends PositionFormDefaultValues>(
  defaultValues?: DefaultValues<T> | undefined,
): DefaultValues<T> => {
  return {
    ...positionDefaultFieldsValues,
    ...defaultValues,
  } as DefaultValues<T>;
};

export const PositionFormElements: PositionFormElementsType = <
  T extends PositionFormDefaultValues,
>(
  props: PositionFormElementsProps<T>,
) => {
  const { defaultValues, handleSubmit: onSubmit, schema, children } = props;

  const form = useForm<T>({
    resolver: zodResolver(schema ?? positionFormDefaultSchema),
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

PositionFormElements.FieldPositionSelect = function FieldFirstName(props) {
  const { className } = props;
  const { control } = useFormContext<PositionFormDefaultValues>();
  console.log("output_log: classNameC =>>>", className);

  return (
    <FormField
      control={control}
      name="positionList"
      render={({ field }) => (
        <FormItemCol className={className}>
          <PositionSelectElement
            onSelectPosition={field.onChange}
            positionActive={field.value?.[0]}
          />
          <FormMessage />
        </FormItemCol>
      )}
    />
  );
};

PositionFormElements.SubmitButton = function SubmitButton({
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
