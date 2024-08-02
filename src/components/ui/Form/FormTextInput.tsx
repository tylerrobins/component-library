import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/primatives/FormPrimative/src";
import { Input } from "@/components/primatives/Input/src";
import type { TextInputProps } from "./FormContainer";

export type FormInputProps = {
  name: string;
  label?: string | null;
  placeholder?: string | undefined;
  description?: string | null;
};

export function FormTextInput({
  name,
  label,
  placeholder,
  description,
  ...props
}: FormInputProps & TextInputProps) {
  return (
    <FormField
      name={name}
      {...props}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
