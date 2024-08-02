import React, { useRef } from "react";
import { z, ZodDate, ZodNullable } from "zod";
import { FormTextInput, FormDatePickerInput } from "../Form";
import type { TextInputProps } from "./Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function useFormSchema(children: React.ReactNode) {
  const schemaRef = useRef<z.ZodObject<any>>(undefined!); // eslint-disable-line @typescript-eslint/no-explicit-any
  const defaultValuesRef = useRef<Record<string, string>>({});

  if (!schemaRef.current) {
    const shape: Record<
      string,
      z.ZodString | z.ZodDate | ZodNullable<ZodDate>
    > = {};
    const defaultValues: Record<string, string> = {};

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === FormTextInput) {
          const { name } = child.props;
          shape[name] = handleStringInput(child.props);
          defaultValues[name] = child.props.defaultValue || "";
        }
        if (child.type === FormDatePickerInput) {
          const { name } = child.props;
          shape[name] = z.date().nullable();
        }
      }
    });
    console.log(`Shape: ${JSON.stringify(shape)}`);
    schemaRef.current = z.object(shape);
    defaultValuesRef.current = defaultValues;
  }

  const form = useForm({
    resolver: zodResolver(schemaRef.current),
    defaultValues: defaultValuesRef.current,
  });

  return { form, schemaRef };
}

function handleStringInput({ ...props }: TextInputProps) {
  let zObject = z.string();

  // Set default type
  if (!props.type) {
    props.type = "text";
  }
  // Set required
  if (props.required) {
    zObject = zObject.min(
      1,
      `${props.label ? props.label : "This field"} is required.`,
    );
  }

  switch (props.type) {
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
  return zObject;
}
