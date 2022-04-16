import Course from "./Course";

export default interface Professor {
  email: string;
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
  courses: Array<Course>;
}
