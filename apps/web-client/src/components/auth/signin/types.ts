import { z } from "zod";

import { SigninSchema } from "./signin.schema";

export type SigninForm = z.infer<typeof SigninSchema>;
