import { Button } from "@/components/primatives/Button/src";
import { Form } from "@/components/primatives/FormPrimitive/src";
import { cn } from "@/lib/utils/index";
import { FieldValues, UseFormReturn } from "react-hook-form";

export interface FormContainerProps<TFormValues extends FieldValues> {
  form: UseFormReturn<TFormValues>;
  className?: string;
  onSubmit?: (values: TFormValues) => void;
  children: React.ReactNode;
}
export function FormContainer<TFormValues extends FieldValues>({
  form,
  className,
  onSubmit,
  children,
}: FormContainerProps<TFormValues>) {
  function onSubmitHandler(values: TFormValues) {
    onSubmit ? onSubmit(values) : console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        className={cn("space-y-4 p-8", className)}
      >
        {children}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
