import { z } from "zod";

export const formSchema = z.object({
  min: z.string().min(5),
  max: z.string().max(5),
  email: z.string().email(),
});

export type FormSchemaType = z.infer<typeof formSchema>;
