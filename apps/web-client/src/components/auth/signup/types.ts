import { z } from "zod";

import { SignupSchema } from "./signup.schema";

export type SignupForm = z.infer<typeof SignupSchema>;
