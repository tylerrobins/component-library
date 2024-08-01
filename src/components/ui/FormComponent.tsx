import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/primatives/Button/src";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/primatives/Form/src";
import { Input } from "@/components/primatives/Input/src";

export function FormContainer({ children }: { children: React.ReactNode }) {
  const buildSchema = () => {
    const shape: Record<string, z.ZodString> = {};
    const defValues: Record<string, string> = {};

    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === FormInput) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {children}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

type FormInputProps = {
  name: string;
  label?: string | null;
  placeholder?: string | undefined;
  description?: string | null;
};

export function FormInput({
  name,
  label,
  placeholder,
  description,
}: FormInputProps) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
