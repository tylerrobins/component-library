import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/primatives/FormPrimative/src";
import type { StandardFormProps } from "./Form";
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
}: StandardFormProps & {
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
}) {
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
              className={orientationStyleFunc(orientation)}
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
}: StandardFormProps & { label: string }) {
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

function orientationStyleFunc(orientation: string): string {
  if (orientation === "horizontal") {
    return "flex flex-row space-y-1";
  } else {
    return "flex flex-col space-y-1";
  }
}
