import type { StandardFormTypes } from "../Types/Form";
import type { FormSchemaType } from "@/example/TestFormSchema";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/primatives/FormPrimitive/src";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/primatives/Popover/src";
import { Button } from "@/components/primatives/Button/src";
import { cn } from "@/lib/utils/index";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/primatives/Command/src";
import { useFormContext } from "react-hook-form";

export function FormComboboxInput({
  name,
  className,
  label,
  combobox,
  searchable,
  category,
  description,
}: StandardFormTypes<FormSchemaType> & {
  combobox: { label: string; value: string }[];
  searchable?: boolean;
  category?: string;
}) {
  const { setValue } = useFormContext();
  const placeholderValue = category ? category : name;
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className={cn("", className)}>
          {label && <FormLabel className="pr-2">{label}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-[200px] justify-between !mt-0",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  {field.value
                    ? combobox.find((e) => e.value === field.value)?.label
                    : `Select ${placeholderValue}`}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                {searchable && (
                  <CommandInput
                    placeholder={`Search ${placeholderValue}...`}
                    className="h-9"
                  />
                )}
                <CommandList>
                  <CommandEmpty>No {placeholderValue} found.</CommandEmpty>
                  <CommandGroup>
                    {combobox.map((e) => (
                      <CommandItem
                        value={e.label}
                        key={e.value}
                        onSelect={() => {
                          setValue(name, e.value);
                        }}
                      >
                        {e.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            e.value === field.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}