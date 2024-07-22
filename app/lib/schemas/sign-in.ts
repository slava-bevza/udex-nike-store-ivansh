import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.coerce
    .string({ invalid_type_error: "Password must be a string" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});

export type FormData = z.infer<typeof schema>;
export const resolver = zodResolver(schema);
