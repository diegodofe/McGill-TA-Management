import Course from "../classes/Course";
import Log from "../classes/Log";
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

function createTA(email: string, firstName: string, lastName: string, faculty: string, department: string, averageRating: number, allReviews: Array<Review>, allCourses: Array<string>, previousCourses: Array<string>, allLogs: Array<Log>): TA {
  return { email, firstName, lastName, faculty, department, averageRating, allReviews, allCourses, previousCourses, allLogs };
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

const fakeLogs: Array<Log> = [
  { courseName: "COMP330", professorNotes: ["2022/04/17: Was very helpful conducting zoom class for me.", "2022/04/13: Didn't show up for meeting today."] },
  { courseName: "COMP400", professorNotes: ["2022/04/11: Covered my office hours this week - thanks!", "2022/04/12: 2 Days past deadline to submit corrected assignments."] },
];

export const allTAs: Array<TA> = [
  createTA("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "Science", "Computer Science", 4, [fakeReviews[0], fakeReviews[3]], ["COMP202", "COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
  createTA("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "Science", "Computer Science", 2, [fakeReviews[1], fakeReviews[2]], ["COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
  createTA("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "Science", "Computer Science", 3, [fakeReviews[0], fakeReviews[1]], ["COMP689", "COMP801", "COMP999"], ["COMP202"], [...fakeLogs]),
  createTA("Ruben.Thomas@mail.mcgill.ca", "Ruben", "Thomas", "Science", "Computer Science", 3, [fakeReviews[0], fakeReviews[1]], ["COMP202", "COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
  createTA("Jared.Kim@mail.mcgill.ca", "Jared", "Kim", "Science", "Computer Science", 3, [fakeReviews[0], fakeReviews[1]], ["COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
  createTA("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "Science", "Computer Science", 4, [fakeReviews[0], fakeReviews[3]], ["COMP202", "COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
  createTA("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "Science", "Computer Science", 2, [fakeReviews[1], fakeReviews[2]], ["COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
  createTA("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "Science", "Computer Science", 3, [fakeReviews[0], fakeReviews[1]], ["COMP689", "COMP801", "COMP999"], ["COMP202"], [...fakeLogs]),
  createTA("Ruben.Thomas@mail.mcgill.ca", "Ruben", "Thomas", "Science", "Computer Science", 3, [fakeReviews[0], fakeReviews[1]], ["COMP202", "COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
  createTA("Jared.Kim@mail.mcgill.ca", "Jared", "Kim", "Science", "Computer Science", 3, [fakeReviews[0], fakeReviews[1]], ["COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
  createTA("Jennifer.Smith@mail.mcgill.ca", "Jennefer", "Smith", "Science", "Computer Science", 4, [fakeReviews[0], fakeReviews[3]], ["COMP202", "COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
  createTA("Andrew.Linn@mail.mcgill.ca", "Andrew", "Linn", "Science", "Computer Science", 2, [fakeReviews[1], fakeReviews[2]], ["COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
  createTA("Thomas.Key@mail.mcgill.ca", "Thomas", "Key", "Science", "Computer Science", 3, [fakeReviews[0], fakeReviews[1]], ["COMP689", "COMP801", "COMP999"], ["COMP202"], [...fakeLogs]),
  createTA("Ruben.Thomas@mail.mcgill.ca", "Ruben", "Thomas", "Science", "Computer Science", 3, [fakeReviews[0], fakeReviews[1]], ["COMP202", "COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
  createTA("Jared.Kim@mail.mcgill.ca", "Jared", "Kim", "Science", "Computer Science", 3, [fakeReviews[0], fakeReviews[1]], ["COMP202", "COMP688"], ["COMP202"], [...fakeLogs]),
];

export const allCoursesAtMcGill: Array<Course> = []
//   { name: "Intro to Programming", courseID: "COMP155", numStudents: 200, currentTAs: [allTAs[0], allTAs[1]], wishlist: [allTAs[0], allTAs[2]], historicalTAs: [...allTAs] },
//   { name: "Intro to Computer Science", courseID: "COMP202", numStudents: 200, currentTAs: [allTAs[0], allTAs[1], allTAs[2]], wishlist: [allTAs[0], allTAs[2]], historicalTAs: [...allTAs] },
//   { name: "Software Engineering", courseID: "COMP206", numStudents: 154, currentTAs: [allTAs[0], allTAs[1]], wishlist: [allTAs[0], allTAs[2]], historicalTAs: [...allTAs] },
//   { name: "Intro to Programming", courseID: "COMP330", numStudents: 95, currentTAs: [allTAs[3]], wishlist: [allTAs[0], allTAs[2]], historicalTAs: [...allTAs] },
//   { name: "Software Engineering", courseID: "COMP688", numStudents: 154, currentTAs: [allTAs[0], allTAs[1], allTAs[3]], wishlist: [allTAs[0], allTAs[2]], historicalTAs: [...allTAs] },
//   { name: "Intro to Programming", courseID: "COMP689", numStudents: 95, currentTAs: [allTAs[0], allTAs[1]], wishlist: [allTAs[0], allTAs[2]], historicalTAs: [...allTAs] },
//   { name: "Intro to Computer Science", courseID: "COMP800", numStudents: 200, currentTAs: [allTAs[0], allTAs[1]], wishlist: [allTAs[0], allTAs[2]], historicalTAs: [...allTAs] },
//   { name: "Software Engineering", courseID: "COMP801", numStudents: 154, currentTAs: [allTAs[0], allTAs[1], allTAs[3]], wishlist: [allTAs[0], allTAs[2]], historicalTAs: [...allTAs] },
//   { name: "Intro to Programming", courseID: "COMP999", numStudents: 95, currentTAs: [allTAs[0], allTAs[1]], wishlist: [allTAs[0], allTAs[2]], historicalTAs: [...allTAs] },
// ];

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
