import type { BooleanInputProps } from "../Types/Form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/primatives/FormPrimative/src";
import { Checkbox } from "@/components/primatives/Checkbox/src";

export function FormCheckboxInput({
  name,
  label,
  description,
  disabled,
  ...props
}: BooleanInputProps) {
  return (
    <FormField
      name={name}
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Checkbox
              disabled={disabled}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          {label && <FormLabel className="pl-2">{label}</FormLabel>}
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
