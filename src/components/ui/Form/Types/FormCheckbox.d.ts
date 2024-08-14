import type { StandardFormTypes } from "./FormStandardProps";

type BaseCheckboxInput = {
  checked?: true;
};

export type CheckboxInputProps = StandardFormTypes & BaseCheckboxInput;
