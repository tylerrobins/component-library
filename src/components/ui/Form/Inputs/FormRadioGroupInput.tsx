import type { StandardFormTypes } from "../Types/Form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/primatives/FormPrimitive/src";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/primatives/Radio-group/src";
import { cn } from "@/lib/utils/index";
import { FieldValues } from "react-hook-form";

export function FormRadioGroupInput<TFormValues extends FieldValues>({
  form,
  className,
  name,
  label,
  description,
  orientation = "vertical",
  children,
}: StandardFormTypes<TFormValues> & {
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
}) {
  return (
    <FormField
      name={name}
      control={form.control}
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

export function FormRadioItem<TFromValue extends FieldValues>({
  className,
  name,
  label,
  description,
}: StandardFormTypes<TFromValue> & { label: string }) {
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
