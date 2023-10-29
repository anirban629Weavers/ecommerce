import { IUser_DB } from "./user.interface";

export interface counterState {
  message: string | undefined;
  error: string | undefined;
  loading: boolean;
  success: boolean;
  userInfo: object | undefined | IUser_DB;
  accessToken: string | undefined;
  refreshToken: string | undefined;
}