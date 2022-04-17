import Review from "./Review";

export interface TA {
  email: string;
  firstName: string;
  lastName: string;
  faculty: string;
  department: string;
  averageRating: number;
  allReviews: Array<Review>;
}
