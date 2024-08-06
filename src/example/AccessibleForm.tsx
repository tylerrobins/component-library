import {
  FormContainer,
  FormTextInput,
  FormDatePickerInput,
} from "@/components/ui/Form";
import {
  FormRadioGroupInput,
  FormRadioItem,
} from "@/components/ui/Form/FormRadioGroupInput";
import { FormSwitchInput } from "@/components/ui/Form/FormSwitchInput";

export function AccessibleForm() {
  return (
    <FormContainer
      onSubmit={(e) => console.log(`This works: ${JSON.stringify(e)}`)}
      className="bg-gray-100 w-[50%] rounded-md m-10"
    >
      <FormTextInput
        name="min"
        label="Min"
        min={5}
        placeholder="Min of 5"
        description="This is to test min"
      />
      <FormTextInput
        name="max"
        label="Max"
        placeholder="Max of 5"
        max={5}
        maxMessage="This is the max message"
        // required
      />
      <FormTextInput
        name="max-required"
        label="Max Require"
        placeholder="Max of 5"
        max={5}
        maxMessage="This is the max message"
        // required
      />
      <FormTextInput
        name="length"
        label="Length"
        placeholder="Length of 5"
        length={5}
        defaultValue="Hello"
        lengthMessage="Length must be 5"
      />
      <FormDatePickerInput
        name="date"
        label="Date field"
        message="This Date is required !!!!"
        description="This is the date picker"
        // required
      />
      <FormSwitchInput
        name="switch"
        label="Switch"
        description="This is the switch test"
        message="This field is required!!!"
        // required
      />
      <FormRadioGroupInput name="name" required>
        <FormRadioItem name="item1" label="Item 1" />
        <FormRadioItem name="item2" label="Item 2" />
        <FormRadioItem name="item3" label="Item 3" />
      </FormRadioGroupInput>
    </FormContainer>
  );
}
