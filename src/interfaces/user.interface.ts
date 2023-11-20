export interface IUser {
  isModified(arg0: string): unknown;
  _id?: string;
  isAdmin?: true;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: string;
  email: string;
  phone: string;
  password: string;
  matchPassword(enteredPassword: string): Promise<boolean>;
}

export interface IUser_CLIENT {
  firstname: string;
  lastname: string;
  birthday: string;
  gender: string;
  email: string;
  phone: string;
  password: string;
}

export interface IUser_DB {
  _id: string;
  firstname: string;
  isAdmin: boolean;
  lastname: string;
  email: string;
  password?: string;
  phone: string;
  birthday: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IUser_Login {
  email: string;
  password: string;
}

// export interface IUser_DB_BLANK {
//   _id: "",
//   firstname: "",
//   lastname: "",
//   email: "",
//   password: "",
//   phone: "",
//   birthday: "",
//   gender: "",
//   createdAt: "",
//   updatedAt: "",
//   __v: "",
// }
