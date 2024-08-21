import { z } from "zod";

export const formSchema = z.object({
  min: z.string().min(5),
  max: z.string().max(5),
  email: z.string().email(),
  date: z.date(),
  switch: z.boolean(),
  radioGroup: z.string(),
  checkbox: z.boolean(),
  combobox: z.string(),
});

export type FormSchemaType = z.infer<typeof formSchema>;
