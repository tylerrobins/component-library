import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/primatives/FormPrimative/src";
import { StandardFormProps } from "./Form";
import { Checkbox } from "@/components/primatives/Checkbox/src";

export function FormCheckboxInput({
  name,
  label,
  description,
  ...props
}: StandardFormProps) {
  return (
    <FormField
      name={name}
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          {label && <FormLabel className="pl-2">{label}</FormLabel>}
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
}