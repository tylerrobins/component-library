import type { StandardFormTypes } from "../Types/Form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/primatives/FormPrimitive/src";
import { Checkbox } from "@/components/primatives/Checkbox/src";
import { FieldValues } from "react-hook-form";

export function FormCheckboxInput<TFormValues extends FieldValues>({
  form,
  name,
  label,
  description,
  disabled,
}: StandardFormTypes<TFormValues> & {
  disabled?: boolean;
}) {
  return (
    <FormField
      name={name}
      control={form.control}
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
