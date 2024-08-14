import type { StandardFormTypes } from "./FormStandardProps";

type BaseDatePickerInput = {
  placeholder?: string;
  alignPopout?: "start" | "center" | "end";
};

export type DatePickerInputProps = StandardFormTypes & BaseDatePickerInput;
