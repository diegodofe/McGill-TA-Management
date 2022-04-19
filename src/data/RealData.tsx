import { RealCourse } from "../classes/Course";
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
