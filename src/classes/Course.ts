import { TA } from "./TA";

export default interface Course {
  name: string;
  numStudents: number;
  courseID: string;
  currentTAs: Array<TA>;
  historicalTAs: Array<TA>;
  wishlist: Array<TA>;
}

export default interface CurrentCourse {
  courseID: string;
  courseCode: string;
  courseNumber: string;
  courseName: string;
  term: string;
  year: string;
}
