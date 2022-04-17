import { TA } from "./TA";

export default interface Course {
  name: string;
  numStudents: number;
  currentTAs: Array<TA>;
  historicalTAs: Array<TA>;
  wishlist: Array<TA>;
}
