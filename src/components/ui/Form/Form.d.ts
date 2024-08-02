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

type RequireMessageField<T extends Record<number | string | RegExp>> = {
  [K in keyof T as `${K & string}Message`]?: T[K] extends
    | undefined
    | null
    | never
    ? never
    : string;
} & T;

export type TextInputProps = InputBaseStandardProps &
  RequireMessageField<TextInputPropsBase>;

// type TextInputPropsBase = {
//   name: string;
//   defaultValue?: string;
//   max?: number;
//   min?: number;
//   length?: number;
//   regex?: RegExp;
//   includes?: string;
//   startsWith?: string;
//   endsWith?: string;
//   type?: "text" | "email" | "url";
//   required?: boolean;
// };

// NEEDS TO BE REVIEWED TO ENSURE THE GENERIC IMPLEMENTATION IS CORRECT.
// type RequireMessageField<
//   T extends Record<string, number | boolean | RegExp | string>,
// > = {
//   [K in Exclude<
//     keyof T,
//     "name" | "type" | "required"
//   > as `${K & string}Message`]?: T[K] extends undefined | null | never
//     ? never
//     : string;
// } & T;
