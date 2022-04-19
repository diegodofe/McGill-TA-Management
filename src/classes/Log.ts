export default interface Log {
  courseName: string;
  professorNotes: Array<string>;
}

export interface RealLog {
  ratedByUuid: string;
  taRatedEmail: string;
  courseID: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}
