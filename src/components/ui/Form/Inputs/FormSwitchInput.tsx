import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/components/primatives/FormPrimitive/src";
import { Switch } from "@/components/primatives/Switch/src";
import { StandardFormTypes } from "../Types/FormStandardProps";
import { FieldValues } from "react-hook-form";

export function FormSwitchInput<TFormValues extends FieldValues>({
  form,
  name,
  label,
  description,
  disabled,
}: StandardFormTypes<TFormValues> & { disabled?: boolean }) {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center justify-between">
            <div className="space-y-0.5">
              {label && <FormLabel>{label}</FormLabel>}
              {description && <FormDescription>{description}</FormDescription>}
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={disabled}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
