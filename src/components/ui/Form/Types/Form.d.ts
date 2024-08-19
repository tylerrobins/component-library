import { ZodObject } from "zod";

// Form Input Types
export { StandardFormTypes } from "./FormStandardProps";
export { BooleanInputProps } from "./FormCheckbox";
export { TextInputProps } from "./FormText";
export { ComboBoxInputProps } from "./FormCombobox";
export { DatePickerInputProps } from "./FormDatePicker";
export { RadioGroupInputProps, RadioItemInputProps } from "./FormRadioGroup";

export type FormContainerProps = {
  className?: string;
  form: ZodObject;
  onSubmit?: (values: unknown) => void;
  children: React.ReactNode;
};
