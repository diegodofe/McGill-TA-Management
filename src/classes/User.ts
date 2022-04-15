import { UserTypes } from "../enums/UserTypes";

export default class User {
  private uuid: string;
  private studentID: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private allTypes: Array<UserTypes>;

  public constructor(obj: any) {
    this.uuid = obj.uuid || "";
    this.studentID = obj.studentID || "";
    this.firstName = obj.firstName || "";
    this.lastName = obj.lastName || "";
    this.email = obj.email || "";
    this.allTypes = [];
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getEmail(): string {
    return this.email;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getAllTypes(): Array<UserTypes> {
    return this.allTypes;
  }
}
