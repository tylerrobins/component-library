import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/primatives/FormPrimitive/src";
import { Input } from "@/components/primatives/Input/src";
import { cn } from "@/lib/utils/index";
import { FieldValues } from "react-hook-form";

export type StandardFormTypes<TFormValues extends FieldValues> = {
  name: Extract<keyof TFormValues, string>;
  className?: string;
  label?: string;
  description?: string;
  placeholder?: string;
};

export function FormTextInput<TFormValues extends FieldValues>({
  className,
  name,
  placeholder,
  description,
  label,
}: StandardFormTypes<TFormValues>) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        // What level do we want to apply the class to?
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          {/* Currently applied at control level as the label can be customised from the container level */}
          <FormControl className={cn("", className)}>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
