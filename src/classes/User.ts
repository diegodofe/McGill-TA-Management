export abstract class User {
  private uuid: string = "";
  private studentID: string = "";
  private firstName: string = "";
  private lastName: string = "";
  private email: string = "";
  private password: string = "";
  private userType: string = "";

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }
}

export class Admin extends User {
  private age: number;
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName);
    this.age = age;
  }
}
