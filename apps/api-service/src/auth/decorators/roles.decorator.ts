import { SetMetadata } from "@nestjs/common";
import { Role } from "@s-test/database";

export const ROLES_KEY = "roles";
export const RestrictTo = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
