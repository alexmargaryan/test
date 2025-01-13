import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const TokenSchema = z.object({
  accessToken: z.string(),
});

export class TokenDto extends createZodDto(TokenSchema) {}
