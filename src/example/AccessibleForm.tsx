import { FormContainer, FormTextInput } from "@/components/ui/Form";

export function AccessibleForm() {
  return (
    <FormContainer className="">
      <FormTextInput
        name="username"
        label="Username"
        placeholder="Enter your username"
        description="Your username should be unique."
      />
      <FormTextInput
        name="email"
        label="Email"
        placeholder="Enter your email"
      />
    </FormContainer>
  );
}
