import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/primatives/FormPrimative/src";
import { Input } from "@/components/primatives/Input/src";
import type { TextInputProps } from "./Form";

export type FormInputProps = {
  name: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
};

export function FormTextInput({
  name,
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
          {props.label && <FormLabel>{props.label}</FormLabel>}
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
