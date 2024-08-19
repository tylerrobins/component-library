import type { DatePickerInputProps } from "../Types/Form";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils/index";
import { Button } from "@/components/primatives/Button/src";
import { Calendar } from "@/components/primatives/Calendar/src";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/primatives/Popover/src";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormDescription,
} from "@/components/primatives/FormPrimative/src";

export function FormDatePickerInput({
  name,
  label,
  description,
  placeholder,
  alignPopout,
  ...props
}: DatePickerInputProps) {
  return (
    <FormField
      name={name}
      {...props}
      render={({ field: { onChange, value } }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !value && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value ? (
                  format(value, "PPP")
                ) : (
                  <span>{placeholder ? placeholder : "Pick a date"}</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align={alignPopout} className="w-auto p-0">
              <FormControl>
                <Calendar
                  mode="single"
                  selected={value}
                  onSelect={(date) => onChange(date || null)}
                  initialFocus
                />
              </FormControl>
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
