import { UserTypes } from "../enums/UserTypes";

export interface User {
  uuid: string;
  studentID: string;
  firstName: string;
  lastName: string;
  email: string;
  allTypes: Array<UserTypes>;
}

export const emptyUser: User = { uuid: "", studentID: "", firstName: "", lastName: "", email: "", allTypes: [] };
