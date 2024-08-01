import { FormContainer, FormInput } from "@/components/ui/FormComponent";

<FormContainer>
  <FormInput
    name="username"
    label="Username"
    placeholder="Enter your username"
    description="Your username should be unique."
  />
  <FormInput
    name="email"
    label="Email"
    placeholder="Enter your email"
    description="We will never share your email."
  />
</FormContainer>;
