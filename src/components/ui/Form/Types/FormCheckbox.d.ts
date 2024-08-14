import type { StandardFormTypes } from "./FormStandardProps";

type BaseBooleanInput = {
  checked?: boolean;
  disabled?: boolean;
};

export type BooleanInputProps = StandardFormTypes & BaseBooleanInput;
