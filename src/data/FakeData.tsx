import Course from "../classes/Course";
import Professor from "../classes/Professor";
import Review from "../classes/Review";
import Student from "../classes/Student";
import { TA } from "../classes/TA";

function createProfessor(email: string, firstName: string, lastName: string, faculty: string, department: string, courses: Array<Course>): Professor {
  return { email, firstName, lastName, faculty, department, courses };
}

function createStudent(email: string, firstName: string, lastName: string, studentID: string, courses: Array<string>): Student {
  return { email, firstName, lastName, studentID, courses };
}

function createTA(email: string, firstName: string, lastName: string, faculty: string, department: string, averageRating: number, allReviews: Array<Review>): TA {
  return { email, firstName, lastName, faculty, department, averageRating, allReviews };
}

function createReview(rating: number, comment: string): Review {
  return { rating, comment };
}

const fakeReviews: Array<Review> = [
  createReview(4, "Amazing person! Was super helpful, and the office ours were very accommodating."),
  createReview(2, "Wasn't helpful and always showed up late for office hours."),
  createReview(1, "Never once answered my emails, and was always rude when I asked questions during labs."),
  createReview(5, "Hands down best TA out there. Couldn't recommend them more!"),
];

export const allTAs: Array<TA> = [
  createTA("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "Science", "Computer Science", 4, [fakeReviews[0], fakeReviews[3]]),
  createTA("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "Science", "Computer Science", 2, [fakeReviews[1], fakeReviews[2]]),
  createTA("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "Science", "Computer Science", 3, [fakeReviews[0], fakeReviews[1]]),
];

export const allCoursesAtMcGill: Array<Course> = [
  { name: "COMP155", numStudents: 200, currentTAs: [...allTAs] },
  { name: "COMP202", numStudents: 200, currentTAs: [...allTAs] },
  { name: "COMP206", numStudents: 154, currentTAs: [allTAs[0], allTAs[1]] },
  { name: "COMP330", numStudents: 95, currentTAs: [...allTAs] },
  { name: "COMP688", numStudents: 154, currentTAs: [...allTAs] },
  { name: "COMP689", numStudents: 95, currentTAs: [allTAs[0], allTAs[1]] },
  { name: "COMP800", numStudents: 200, currentTAs: [...allTAs] },
  { name: "COMP801", numStudents: 154, currentTAs: [...allTAs] },
  { name: "COMP999", numStudents: 95, currentTAs: [allTAs[0], allTAs[1]] },
];

export const allStudents: Array<Student> = [
  createStudent("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "2600000000", ["COMP202", "COMP206", "COMP330"]),
  createStudent("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "2600000000", ["COMP202", "COMP206", "COMP330"]),
  createStudent("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "2600000000", ["COMP202", "COMP206", "COMP330"]),
  createStudent("Ruben.Thomas@mail.mcgill.ca", "Ruben", "Thomas", "2600000000", ["COMP202", "COMP206", "COMP330"]),
  createStudent("Wendy.Allen@mail.mcgill.ca", "Wendy", "Allen", "2600000000", ["COMP202", "COMP206", "COMP330"]),
  createStudent("Jared.Kim@mail.mcgill.ca", "Jared", "Kim", "2600000000", ["COMP202", "COMP206", "COMP330"]),
];

export const allProfessors: Array<Professor> = [
  createProfessor("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "Science", "Computer Science", [allCoursesAtMcGill[0], allCoursesAtMcGill[4], allCoursesAtMcGill[5]]),
  createProfessor("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "Science", "Computer Science", [allCoursesAtMcGill[4], allCoursesAtMcGill[8]]),
  createProfessor("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "Science", "Computer Science", [allCoursesAtMcGill[2], allCoursesAtMcGill[4]]),
  createProfessor("Ruben.Thomas@mail.mcgill.ca", "Ruben", "Thomas", "Science", "Computer Science", [allCoursesAtMcGill[2], allCoursesAtMcGill[1], allCoursesAtMcGill[3]]),
  createProfessor("Wendy.Allen@mail.mcgill.ca", "Wendy", "Allen", "Science", "Computer Science", [allCoursesAtMcGill[2], allCoursesAtMcGill[1]]),
  createProfessor("Jared.Kim@mail.mcgill.ca", "Jared", "Kim", "Science", "Computer Science", [allCoursesAtMcGill[2], allCoursesAtMcGill[1], allCoursesAtMcGill[3]]),
];

export const usersEnrolledCourses: Array<Course> = [allCoursesAtMcGill[0], allCoursesAtMcGill[1], allCoursesAtMcGill[2], allCoursesAtMcGill[3]];
