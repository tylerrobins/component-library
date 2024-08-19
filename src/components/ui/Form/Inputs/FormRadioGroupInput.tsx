import type { RadioGroupInputProps, RadioItemInputProps } from "../Types/Form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/primatives/FormPrimative/src";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/primatives/Radio-group/src";
import { cn } from "@/lib/utils/index";

export function FormRadioGroupInput({
  className,
  name,
  label,
  description,
  orientation = "vertical",
  children,
  ...props
}: RadioGroupInputProps) {
  return (
    <FormField
      name={name}
      {...props}
      render={({ field }) => (
        <FormItem className={cn("", className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={
                orientation === "horizontal"
                  ? "flex flex-row space-y-1"
                  : "flex flex-col space-y-1"
              }
            >
              {children}
            </RadioGroup>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function FormRadioItem({
  className,
  name,
  label,
  description,
}: RadioItemInputProps) {
  return (
    <FormItem
      className={cn("flex items-center space-x-3 space-y-0", className)}
    >
      <FormControl>
        <RadioGroupItem value={name} />
      </FormControl>
      <FormLabel className="font-normal">{label}</FormLabel>
      {description && <FormDescription>{description}</FormDescription>}
    </FormItem>
  );
}
