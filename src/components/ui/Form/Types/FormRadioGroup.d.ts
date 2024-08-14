import type { StandardFormTypes } from "./FormStandardProps";

type BaseRadioGroupInput = {
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
};

type BaseRadioItemInput = { label: string };

export type RadioGroupInputProps = StandardFormTypes & BaseRadioGroupInput;
export type RadioItemInputProps = StandardFormTypes & BaseRadioItemInput;
