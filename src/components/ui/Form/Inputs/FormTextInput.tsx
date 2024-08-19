import type { StandardFormTypes } from "../Types/Form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/primatives/FormPrimative/src";
import { Input } from "@/components/primatives/Input/src";
import { cn } from "@/lib/utils/index";

export function FormTextInput({
  className,
  name,
  placeholder,
  description,
  label,
}: StandardFormTypes) {
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
