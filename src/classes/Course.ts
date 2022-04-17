import { TA } from "./TA";

export default interface Course {
  name: string;
  numStudents: number;
  courseID: string;
  currentTAs: Array<TA>;
  historicalTAs: Array<TA>;
  wishlist: Array<TA>;
}
