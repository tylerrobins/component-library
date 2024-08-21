import type { FormSchemaType } from "@/example/TestFormSchema";
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

export function FormSwitchInput({
  name,
  label,
  description,
  disabled,
}: StandardFormTypes<FormSchemaType> & { disabled?: boolean }) {
  return (
    <FormField
      name={name}
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
