import type { BooleanInputProps } from "../Types/Form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/components/primatives/FormPrimative/src";
import { Switch } from "@/components/primatives/Switch/src";

export function FormSwitchInput({
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
