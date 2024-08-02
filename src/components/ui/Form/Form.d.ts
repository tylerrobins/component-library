type InputBaseMessageProps = {
  max?: number;
  min?: number;
  length?: number;
  regex?: RegExp;
  includes?: string;
  startsWith?: string;
  endsWith?: string;
};

type InputBaseStandardProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  type?: "text" | "email" | "url";
  required?: boolean;
};

type RequireMessageField<T extends Record<string, number | string | RegExp>> = {
  [K in keyof T as `${K & string}Message`]?: T[K] extends
    | undefined
    | null
    | never
    ? never
    : string;
} & T;

export type TextInputProps = InputBaseStandardProps &
  RequireMessageField<InputBaseMessageProps>;
