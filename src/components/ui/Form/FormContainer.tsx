import type { FormContainerProps } from "./Types/Form";
import { z } from "zod";
import { Button } from "@/components/primatives/Button/src";
import { Form } from "@/components/primatives/FormPrimative/src";
import { cn } from "@/lib/utils/index";

export function FormContainer({
  className,
  form,
  onSubmit,
  children,
}: FormContainerProps) {
  function onSubmitHandler(values: z.infer<typeof form>) {
    // Can remove the default console.log
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
