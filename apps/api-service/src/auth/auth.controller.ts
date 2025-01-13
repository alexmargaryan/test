import { Response } from "express";

import { ApiConfigService } from "@/config/config.service";
import { UserResponseDto } from "@/resources/users/dto/user.dto";
import { Body, Controller, Get, Post, Res, UseGuards } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";

import { AuthService } from "./auth.service";
import { CurrentUser } from "./decorators/current-user.decorator";
import { Public } from "./decorators/public.decorator";
import { SigninDto, SignupDto } from "./dto/signin.dto";
import { GoogleAuthGuard } from "./google/google-auth.guard";

@Public()
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly apiConfigService: ApiConfigService
  ) {}

  @Post("signin")
  async signin(@Body() dto: SigninDto) {
    return this.authService.signin(dto);
  }

  @Post("signup")
  async signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  @Public()
  @Get("google/login")
  @UseGuards(GoogleAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  googleLogin() {}

  /**
   * This route is called after the user has authenticated with Google.
   * In google cloud we set the redirect URI to /api/auth/google/redirect
   */
  @Get("google/callback")
  @UseGuards(GoogleAuthGuard)
  @ApiOkResponse()
  async googleCallback(
    @CurrentUser() user: UserResponseDto,
    @Res() res: Response
  ) {
    const response = await this.authService.googleLogin(user.id);

    res.redirect(
      `${this.apiConfigService.webClientUrl}?token=${response.accessToken}`
    );
  }
}
