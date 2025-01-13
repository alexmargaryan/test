import { ZodSerializerDto } from "nestjs-zod";

import { RestrictTo } from "@/auth/decorators/roles.decorator";
import { RolesGuard } from "@/auth/guards/roles.guard";
import { UuidValidationPipe } from "@/pipes/uuid.pipe";
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from "@nestjs/swagger";
import { Role } from "@s-test/database";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserResponseDto } from "./dto/user.dto";
import { UsersService } from "./users.service";

@ApiBearerAuth()
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserResponseDto })
  @ZodSerializerDto(UserResponseDto)
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  @RestrictTo(Role.ADMIN, Role.MANAGER)
  @UseGuards(RolesGuard)
  @ApiOkResponse({ type: UserResponseDto, isArray: true })
  @ZodSerializerDto(UserResponseDto)
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  @UseGuards(RolesGuard)
  @ApiOkResponse({ type: UserResponseDto })
  @ZodSerializerDto(UserResponseDto)
  async findOne(@Param("id", UuidValidationPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(":id")
  @ApiOkResponse()
  async updateUser(
    @Param("id", UuidValidationPipe) id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    await this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(":id")
  @RestrictTo(Role.ADMIN, Role.MANAGER)
  @UseGuards(RolesGuard)
  @ApiOkResponse()
  async removeUser(@Param("id", UuidValidationPipe) id: string) {
    await this.usersService.removeUser(id);
  }
}
