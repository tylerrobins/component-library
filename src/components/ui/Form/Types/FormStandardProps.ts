import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type StandardFormTypes<TFormValues extends FieldValues> = {
  form: UseFormReturn<TFormValues>;
  name: Path<TFormValues>;
  className?: string;
  label?: string;
  description?: string;
  placeholder?: string;
};
