import Log from "./Log";
import Review from "./Review";

export interface TA {
  email: string;
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
  averageRating: number;
  allReviews: Array<Review>;
  allCourses: Array<string>;
  previousCourses: Array<string>;
  allLogs: Array<Log>;
}

export interface RealTA {
  email: string;
  courseID: string;
  officeHoursTime: string;
  officeHoursLocation: string;
  duties: string;
  createdAt: string;
  updatedAt: string;
  faculty: string;
  department: string;
  firstName: string;
  lastName: string;
  uuid: string;
  password: string;
}
