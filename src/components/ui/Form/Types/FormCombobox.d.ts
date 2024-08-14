import type { StandardFormTypes } from "./FormStandardProps";

type BaseComboBoxInput = {
  combobox: { label: string; value: string }[];
  searchable?: boolean;
  category?: string;
};

export type ComboBoxInputProps = StandardFormTypes & BaseComboBoxInput;
