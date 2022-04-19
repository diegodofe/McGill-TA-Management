export default interface Review {
  rating: number;
  comment: string;
}

export interface RealReview {
  ratedByUuid: string;
  taRatedEmail: string;
  courseID: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}
