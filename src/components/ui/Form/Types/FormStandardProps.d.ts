// Types for all form inputs
export type StandardFormTypes<TFormValues extends FieldValues> = {
  name: Extract<keyof TFormValues, string>;
  className?: string;
  label?: string;
  description?: string;
  placeholder?: string;
};
