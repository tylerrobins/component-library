import { FormContainer, FormTextInput } from "@/components/ui/Form";
import { FormDatePickerInput } from "@/components/ui/Form/FormDatePicker";

export function AccessibleForm() {
  return (
    <FormContainer
      onSubmit={(e) => console.log(`This works: ${JSON.stringify(e)}`)}
      className="bg-gray-200 w-[50%] rounded-md m-10"
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
      <FormDatePickerInput name={"date"} />
      <FormTextInput name="test1" label="Test" />
      <FormTextInput
        className="text-green-800 bg-red-300"
        name="test2"
        // required
      />
    </FormContainer>
  );
}
