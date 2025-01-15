import { z } from "zod";

import { EmailSchema, NameSchema, PasswordSchema } from "@/lib/schemas";

export const SignupSchema = z.object({
  firstName: NameSchema,
  lastName: NameSchema,
  email: EmailSchema,
  password: PasswordSchema,
});
