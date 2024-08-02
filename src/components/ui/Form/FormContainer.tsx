import React, { useRef } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/primatives/Button/src";
import { Form } from "@/components/primatives/FormPrimative/src";
import { FormTextInput } from "./FormTextInput";
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
  const schemaRef = useRef<z.ZodObject<any>>(undefined!); // eslint-disable-line @typescript-eslint/no-explicit-any
  const defaultValuesRef = useRef<Record<string, string>>({});

  if (!schemaRef.current) {
    const shape: Record<string, z.ZodString> = {};
    const defaultValues: Record<string, string> = {};

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === FormTextInput) {
        const { name } = child.props;
        shape[name] = handleStringInput(child.props);
        defaultValues[name] = child.props.defaultValue || "";
      }
    });

    schemaRef.current = z.object(shape);
    defaultValuesRef.current = defaultValues;
  }

  const form = useForm({
    resolver: zodResolver(schemaRef.current),
    defaultValues: defaultValuesRef.current,
  });

  function onSubmitHandler(values: z.infer<typeof schemaRef.current>) {
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

type TextInputPropsBase = {
  name: string;
  defaultValue?: string;
  max?: number;
  min?: number;
  length?: number;
  // uuid?: boolean;
  regex?: RegExp;
  includes?: string;
  startsWith?: string;
  endsWith?: string;
  type?: "text" | "email" | "url";
};

// NEEDS TO BE REVIEWED TO ENSURE THE GENERIC IMPLEMENTATION IS CORRECT.
type RequireMessageField<
  T extends Record<string, number | boolean | RegExp | string>,
> = {
  [K in Exclude<
    keyof T,
    "name" | "type"
  > as `${K & string}Message`]?: T[K] extends undefined | null | never
    ? never
    : string;
} & T;

export type TextInputProps = RequireMessageField<TextInputPropsBase>;

function handleStringInput({ type = "text", ...props }: TextInputProps) {
  let zObject = z.string();
  switch (type) {
    case "text":
      if (props.max) {
        zObject = zObject.max(props.max, {
          message:
            props.maxMessage ||
            `${props.name} must be atleast ${props.max} long.`,
        });
      }
      if (props.min) {
        zObject = zObject.min(props.min, {
          message:
            props.minMessage ||
            `Please ensure that the input is less than ${props.min} in length`,
        });
      }
      if (props.length) {
        zObject = zObject.length(props.length, {
          message:
            props.lengthMessage ||
            `Please ensure that the input is ${props.length} in length`,
        });
      }
      break;
    case "email":
      break;
    case "url":
      break;
    default:
      console.error("Something has gone wrong with type property");
  }

  console.log(zObject);

  return zObject;
}
