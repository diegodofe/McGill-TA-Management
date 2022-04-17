import { TA } from "./TA";

export default interface Course {
  name: string;
  numStudents: number;
  courseID: string;
  currentTAs: Array<TA>;
}
