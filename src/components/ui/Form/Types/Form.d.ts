import type { UseFormReturn } from "react-hook-form";

// Form Input Types
export { StandardFormTypes } from "./FormStandardProps";
export { TextInputProps } from "./FormText";
export { ComboBoxInputProps } from "./FormCombobox";
export { RadioGroupInputProps, RadioItemInputProps } from "./FormRadioGroup";

export type FormContainerProps<TFormValues> = {
  form: UseFormReturn<TFormValues>;
  className?: string;
  onSubmit?: (values: unknown) => void;
  children: React.ReactNode;
};
