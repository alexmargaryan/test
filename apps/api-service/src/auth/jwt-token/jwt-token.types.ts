export enum JwtTokenType {
  Access = "ACCESS",
}

export type JwtPayload = {
  sub: string;
  type: JwtTokenType.Access;
  exp?: number;
};
