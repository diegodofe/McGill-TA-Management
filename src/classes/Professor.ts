import Course from "./Course";

export default interface Professor {
  email: string;
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
  courses: Array<Course>;
}

export interface RealProfessor {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  faculty: string;
  department: string;
}
