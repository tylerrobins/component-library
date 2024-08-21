import {
  FormContainer,
  FormTextInput,
  FormDatePickerInput,
  FormCheckboxInput,
  FormComboboxInput,
} from "@/components/ui/Form/Form";
import {
  FormRadioGroupInput,
  FormRadioItem,
} from "@/components/ui/Form/Inputs/FormRadioGroupInput";
import { FormSwitchInput } from "@/components/ui/Form/Inputs/FormSwitchInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema, type FormSchemaType } from "./TestFormSchema";

export function TestForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  return (
    <FormContainer form={form} className="bg-gray-100 w-[50%] rounded-md m-10">
      <FormTextInput
        name="min"
        label="Min"
        placeholder="Min of 5"
        description="This is to test min"
      />
      <FormTextInput name="max" label="Max" placeholder="Max of 5" />
      <FormTextInput name="maximum" label="Maximum" placeholder="Max of 5" />
      <FormTextInput name="otherOne" label="OtherOne" placeholder="Max of 5" />
      <FormTextInput name="email" label="Email" placeholder="email..." />
      <FormTextInput name="length" label="Length" placeholder="Length of 5" />
      <FormDatePickerInput
        name="date"
        label="Date field"
        description="This is the date picker"
      />
      <FormSwitchInput
        name="switch"
        label="Switch"
        description="This is the switch test"
      />
      <FormRadioGroupInput name="radioGroup" label="The radio group">
        <FormRadioItem name="item1" label="Item 1" />
        <FormRadioItem name="item2" label="Item 2" />
        <FormRadioItem name="item3" label="Item 3" />
      </FormRadioGroupInput>

      <FormCheckboxInput name="checkbox" label="Checkbox for checking..." />
      <FormComboboxInput
        name="combobox"
        label="ComboBox"
        searchable
        combobox={[
          { label: "value 1", value: "1" },
          { label: "value 2", value: "2" },
          { label: "value 3", value: "3" },
        ]}
      />
    </FormContainer>
  );
}
