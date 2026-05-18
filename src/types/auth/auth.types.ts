export interface LoginPayload {
  usernameOrEmail: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: UserPayload;
}

export type Role = "ADMIN" | "RECEPTIONIST";

export interface UserPayload {
  id: string;
  name: string;
  email: string;
  role: Role;
}
