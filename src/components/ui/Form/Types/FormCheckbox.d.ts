import type { StandardFormTypes } from "./FormStandardProps";

type BaseBooleanInput = {
  checked?: boolean;
};

export type BooleanInputProps = StandardFormTypes & BaseBooleanInput;
