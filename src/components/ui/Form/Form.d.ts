// Types for all form inputs
export type StandardFormProps = {
  name: string;
  className?: string;
  label?: string;
  description?: string;
  required?: boolean;
  message?: string;
  defaultValue?: string;
};

// Standard text inputs
type TextInputBaseProps = {
  placeholder?: string;
  type?: "text" | "email" | "url";
};
// Props that require a message if give in text input
type InputBaseMessageProps = {
  max?: number;
  min?: number;
  length?: number;
  regex?: RegExp;
  includes?: string;
  startsWith?: string;
  endsWith?: string;
};

// Apply required message to prop input given in InputBaseMessageProps
type RequireMessageField<T extends Record<string, number | string | RegExp>> = {
  [K in keyof T as `${K & string}Message`]?: T[K] extends
    | undefined
    | null
    | never
    ? never
    : string;
} & T;

export type TextInputProps = StandardFormProps &
  TextInputBaseProps &
  RequireMessageField<InputBaseMessageProps>;
