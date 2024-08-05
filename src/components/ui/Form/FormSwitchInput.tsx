import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/components/primatives/FormPrimative/src";
import { Switch } from "@/components/primatives/Switch/src";
import { StandardFormProps } from "./Form";

export function FormSwitchInput({
  name,
  label,
  description,
  defaultValue,
  ...props
}: StandardFormProps & { defaultValue?: boolean }) {
  return (
    <FormField
      name={name}
      {...props}
      render={({ field }) => (
        <>
          <FormItem>
            <div className="flex flex-row items-center justify-between">
              <div className="space-y-0.5">
                {/* Make this a generic that required either a label or description or both?
                Or just make it require on and the other can be an optional input? */}
                {label && <FormLabel>{label}</FormLabel>}
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
              </div>
              <FormControl>
                <Switch
                  defaultChecked={defaultValue ? true : false}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        </>
      )}
    />
  );
}
