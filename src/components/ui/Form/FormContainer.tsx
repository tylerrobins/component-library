import React from "react";
import { z } from "zod";
import { useFormSchema } from "./useFormSchema";
import { Button } from "@/components/primatives/Button/src";
import { Form } from "@/components/primatives/FormPrimative/src";
import { cn } from "@/lib/utils/index";

export function FormContainer({
  className,
  onSubmit,
  children,
}: {
  className?: string;
  onSubmit?: (values: unknown) => void;
  children: React.ReactNode;
}) {
  const { form, schemaRef } = useFormSchema(children);

  function onSubmitHandler(values: z.infer<typeof schemaRef.current>) {
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
