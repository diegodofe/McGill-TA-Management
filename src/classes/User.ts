export default class User {
  public uuid: string;
  public studentID: string;
  public firstName: string;
  public lastName: string;
  public email: string;

  public constructor(obj: any) {
    this.uuid = obj.uuid || "";
    this.studentID = obj.studentID || "";
    this.firstName = obj.firstName || "";
    this.lastName = obj.lastName || "";
    this.email = obj.email || "";
  }

  // public getFirstName(): string {
  //   return this.firstName;
  // }

  // public getLastName(): string {
  //   return this.lastName;
  // }

  // public getEmail(): string {
  //   return this.email;
  // }

  // public setFirstName(firstName: string): void {
  //   this.firstName = firstName;
  // }

  // public setLastName(lastName: string): void {
  //   this.lastName = lastName;
  // }

  // public setEmail(email: string): void {
  //   this.email = email;
  // }
}
