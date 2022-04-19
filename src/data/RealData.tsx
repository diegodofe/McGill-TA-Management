import { RealCourse } from "../classes/Course";
import { RealProfessor } from "../classes/Professor";
import { RealReview } from "../classes/Review";
import { RealTA } from "../classes/TA";

export const allTAs: Array<RealTA> = [
  {
    email: "ddorantesferreira@gmail.com",
    courseID: "3977c4b1-51bb-4c80-a4c3-ad51db3ab76e",
    createdAt: "2022-04-16 16:48:51.244 +00:00",
    updatedAt: "2022-04-16 16:48:51.244 +00:00",
    faculty: "Science",
    department: "Computer science",
    firstName: "Diego",
    lastName: "Dorantes-Ferreira",
    uuid: "7b4dc1e7-a272-484d-b649-549a6cc601cc",
    password: "$2b$08$uDTKk73gT1zAODIskoZ.Weo1VbBCqDuE7it1wOkxyxC.C5JeyEj1W",
  },
  {
    email: "alex.ference@mail.mcgill.ca",
    courseID: "3977c4b1-51bb-4c80-a4c3-ad51db3ab76e",
    createdAt: "2022-04-16 03:20:48.831 +00:00",
    updatedAt: "2022-04-16 03:20:48.831 +00:00",
    faculty: "Science",
    department: "Computer science",
    firstName: "Alex",
    lastName: "Ference",
    uuid: "c7f17ddd-f14f-4707-9780-df74cfffce6f",
    password: "$2b$08$hgf0Q7RdAHjjot8m7gsv4uJt6rcksP/ULop38gcj58.PZgAuu2F.O",
  },
];

export const enrolledCourses: Array<RealCourse> = [
  {
    uuid: "c7f17ddd-f14f-4707-9780-df74cfffce6f",
    courseID: "1ec6382a-8998-499f-b325-df9ec109a9f5",
    createdAt: "2022-04-17 17:52:33.989 +00:00",
    updatedAt: "2022-04-17 17:52:33.989 +00:00",
    term: "Winter",
    year: "2022",
    courseNumber: "323",
    courseName: "Probability",
    courseCode: "MATH",
  },
  {
    uuid: "c7f17ddd-f14f-4707-9780-df74cfffce6f",
    courseID: "5f13eef5-b289-4a15-8e7d-b0dfd3715358",
    createdAt: "2022-04-17 17:52:16.525 +00:00",
    updatedAt: "2022-04-17 17:52:16.525 +00:00",
    term: "Winter",
    year: "2022",
    courseNumber: "421",
    courseName: "Databases",
    courseCode: "COMP",
  },
];

export const allCourseMcGill: Array<RealCourse> = [
  {
    courseID: "1ec6382a-8998-499f-b325-df9ec109a9f5",
    createdAt: "2022-04-17 17:52:33.989 +00:00",
    updatedAt: "2022-04-17 17:52:33.989 +00:00",
    term: "Winter",
    year: "2022",
    courseNumber: "323",
    courseName: "Probability",
    courseCode: "MATH",
  },
  {
    courseID: "5f13eef5-b289-4a15-8e7d-b0dfd3715358",
    createdAt: "2022-04-17 17:52:16.525 +00:00",
    updatedAt: "2022-04-17 17:52:16.525 +00:00",
    term: "Winter",
    year: "2022",
    courseNumber: "421",
    courseName: "Databases",
    courseCode: "COMP",
  },
  {
    courseID: "1ec6382a-8998-499f-b325-df9ec109a9f5",
    createdAt: "2022-04-17 17:52:33.989 +00:00",
    updatedAt: "2022-04-17 17:52:33.989 +00:00",
    term: "Winter",
    year: "2022",
    courseNumber: "323",
    courseName: "Probability",
    courseCode: "MATH",
  },
  {
    courseID: "1ec6382a-8998-499f-b325-df9ec109a9f5",
    createdAt: "2022-04-17 17:52:33.989 +00:00",
    updatedAt: "2022-04-17 17:52:33.989 +00:00",
    term: "Winter",
    year: "2022",
    courseNumber: "323",
    courseName: "Probability",
    courseCode: "MATH",
  },
];

export const allProfsMcGill: Array<RealProfessor> = [
  {
    uuid: "c7f17ddd-f14f-4707-9780-df74cfffce6f",
    firstName: "Alex",
    lastName: "Ference",
    email: "alex.ference@mail.mcgill.ca",
    password: "$2b$08$hgf0Q7RdAHjjot8m7gsv4uJt6rcksP/ULop38gcj58.PZgAuu2F.O",
    createdAt: "2022-04-19 14:54:34.482 +00:00",
    updatedAt: "2022-04-19 14:54:34.482 +00:00",
    faculty: "Science",
    department: "Computer Science",
  },
  {
    uuid: "4251c038-3f23-485e-b599-6833e7212ffa",
    firstName: "Madison",
    lastName: "Kruh",
    email: "madison.kruh@mail.mcgill.ca",
    password: "$2b$08$qwryza0HGq2WVty0TeeB1OrKFKwuWNwD0.Cdvw0yPyDKZKOgBgPP.",
    createdAt: "2022-04-16 18:24:48.806 +00:00",
    updatedAt: "2022-04-16 18:24:48.806 +00:00",
    faculty: "Science",
    department: "Computer Science",
  },
];

export const allReviews: Array<RealReview> = [
  {
    ratedByUuid: "7b4dc1e7-a272-484d-b649-549a6cc601cc",
    taRatedEmail: "alex.ference@mail.mcgill.ca",
    courseID: "5f13eef5-b289-4a15-8e7d-b0dfd3715358",
    rating: 4,
    comment: "Amazing person! Was super helpful, and the office ours were very accommodating.",
    createdAt: "2022-04-19 16:02:04.547 +00:00",
    updatedAt: "2022-04-19 16:02:04.547 +00:00",
  },
  {
    ratedByUuid: "c7f17ddd-f14f-4707-9780-df74cfffce6f",
    taRatedEmail: "ddorantesferreira@gmail.com",
    courseID: "1ec6382a-8998-499f-b325-df9ec109a9f5",
    rating: 3,
    comment: "Wasn't helpful and always showed up late for office hours.",
    createdAt: "2022-04-19 17:47:08.716 +00:00",
    updatedAt: "2022-04-19 17:47:08.716 +00:00",
  },
];
