export class User {
  uuid: string;
  studentID: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(obj: any) {
    this.uuid = obj.uuid || "";
    this.studentID = obj.studentID || "";
    this.firstName = obj.firstName || "";
    this.lastName = obj.lastName || "";
    this.email = obj.email || "";
  }
}
