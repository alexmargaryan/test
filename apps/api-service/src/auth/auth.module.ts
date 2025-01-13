import { UsersModule } from "@/resources/users/users.module";
import { Module } from "@nestjs/common";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { GoogleStrategy } from "./google/google.strategy";
import { JwtTokenModule } from "./jwt-token/jwt-token.module";
import { JwtStrategy } from "./jwt/jwt.strategy";
import { PasswordService } from "./password.service";

@Module({
  imports: [JwtTokenModule, UsersModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, GoogleStrategy, PasswordService],
})
export class AuthModule {}
