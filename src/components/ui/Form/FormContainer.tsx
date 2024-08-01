import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/primatives/Button/src";
import { Form } from "@/components/primatives/FormPrimative/src";
import { FormTextInput } from "./FormTextInput";
import { cn } from "@/lib/utils/index";

export function FormContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const buildSchema = () => {
    const shape: Record<string, z.ZodString> = {};
    const defValues: Record<string, string> = {};

    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === FormTextInput) {
        const { name, defVal } = child.props;
        shape[name] = z.string().min(2, {
          message: `${name} must be at least 2 characters`,
        });
        defValues[name] = defVal;
      }
    });
    const schema = z.object(shape);
    return { schema, defValues };
  };

  const { schema, defValues } = buildSchema();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defValues,
  });

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-4 px-4", className)}
      >
        {children}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
