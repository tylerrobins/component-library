import { FormContainer, FormTextInput } from "@/components/ui/Form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { formSchema, type FormSchemaType } from "./TestFormSchema";

import { z } from "zod";

const formSchema = z.object({
  min: z.string().min(5),
  max: z.string().max(5),
  email: z.string().email(),
});
type FormSchemaType = z.infer<typeof formSchema>;

export function TestForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  return (
    <FormContainer form={form} className="bg-gray-100 w-[50%] rounded-md m-10">
      <FormTextInput<FormSchemaType>
        name="min"
        label="Min"
        placeholder="Min of 5"
        description="This is to test min"
      />
      <FormTextInput<FormSchemaType>
        name="maximum"
        label="Maximum"
        placeholder="Max of 5"
      />
      <FormTextInput<FormSchemaType>
        name="email"
        label="Email"
        placeholder="email..."
      />
    </FormContainer>
  );
}
