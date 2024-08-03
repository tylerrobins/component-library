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
import { Controller } from "react-hook-form";

export function FormDatePickerInput({
  name,
  alignPopout,
}: {
  name: string;
  alignPopout?: "start" | "center" | "end";
}) {
  return (
    // FormField uses FormFieldContext.Provider which only has - value={{ name: props.name }}

    // FormFieldContext just creates context:
    //   React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

    // Provider takes in a generic and a child only:
    //   interface ProviderProps<T> {
    //     value: T;
    //     children?: ReactNode | undefined;
    //   }

    // Not sure if I should be creating a wrapper of React.createContext?
    <Controller
      name={name}
      render={({ field: { onChange, value } }) => (
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
              {value ? format(value, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent align={alignPopout} className="w-auto p-0">
            <Calendar
              mode="single"
              selected={value}
              onSelect={(date) => onChange(date || null)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      )}
    />
  );
}
