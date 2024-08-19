import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/primatives/FormPrimative/src";
import { Input } from "@/components/primatives/Input/src";
import type { TextInputProps } from "../Types/Form";
import { cn } from "@/lib/utils/index";

export function FormTextInput({
  className,
  name,
  placeholder,
  description,
  label,
  ...props
}: TextInputProps) {
  return (
    <FormField
      name={name}
      {...props}
      render={({ field }) => (
        // What level do we want to apply the class to?
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          {/* Currently applied at control level as the label can be customised from the container level */}
          <FormControl className={cn("", className)}>
            <Input
              placeholder={placeholder}
              {...field}
              aria-required={props.required ? "true" : "false"}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
