import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../../App";
import { Course } from "../../../classes/Course";
import { enrolledCourses } from "../../../data/RealData";
import "../../../style/userTable.css";
import StudentCourse from "./StudentCourseTable";
import StudentRegisterCourse from "./StudentRegisterCourse";

const RateTA = () => {
  const [myCourses, setMyCourses] = React.useState(enrolledCourses);

  const { user } = useContext(UserContext);

  const loadMyCourses = async () => {
    try {
      // get user getContext
      if (user && user.uuid) {
        const uuid = user.uuid;
        const response = await fetch(`https://winter2022-comp307-group8.cs.mcgill.ca/student/getallclasses/${uuid}/`);
        const json = await response.json();
        setMyCourses(json.enrolledCourses as Course[]);
      }
    } catch (error) {
      console.log(error);
      console.error("Error loading courses");
    }
  };

  React.useEffect(() => {
    loadMyCourses();
    console.log("Loaded courses");
  }, []);

  return (
    <div>
      <StudentRegisterCourse loadMyCourses={loadMyCourses} />
      <Container className="mt-3">
        {myCourses.map((course: Course, i: number) => (
          <StudentCourse key={i} course={course} />
        ))}
      </Container>
    </div>
  );
};

export default RateTA;
