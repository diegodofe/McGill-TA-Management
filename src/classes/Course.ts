import { TA } from "./TA";

export default interface Course {
  name: string;
  numStudents: number;
  currentTAs: Array<TA>;
}
