import { TA } from "./TA";

export default interface Course {
  name: string;
  numStudents: number;
  courseID: string;
  currentTAs: Array<TA>;
  historicalTAs: Array<TA>;
  wishlist: Array<TA>;
}

export interface RealCourse {
  uuid?: string;
  courseID: string;
  createdAt: string;
  updatedAt: string;
  term: string;
  year: string;
  courseNumber: string;
  courseName: string;
  courseCode: string;
}
