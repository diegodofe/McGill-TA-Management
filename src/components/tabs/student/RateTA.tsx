import React, { useContext } from "react";
import { UserContext } from "../../../App";
import { RealCourse } from "../../../classes/Course";
import { enrolledCourses } from "../../../data/RealData";
import "../../../style/userTable.css";
import StudentCourse from "./StudentCourseTable";

const RateTA = () => {

  const [myCourses, setMyCourses] = React.useState(enrolledCourses);
  const [allCourses, setAllCourses] = React.useState(enrolledCourses);

  const { user } = useContext(UserContext);

  const loadMyCourses = async () => {
    try {
      // get user getContext 
      if (user && user.uuid) {
        const uuid = user.uuid;
        const response = await fetch(`https://winter2022-comp307-group8.cs.mcgill.ca/student/getallclasses/${uuid}/`);
        const json = await response.json();
        setMyCourses(json.enrolledCourses as RealCourse[]);
      }
    } catch (error) {
      console.log(error);
      console.error("Error loading courses");
    }
  }

  const loadAllCourses = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/course/all");
      const json = await res.json();
      setAllCourses(json.courses as RealCourse[]);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    loadMyCourses();
    loadAllCourses();
  }, []);


  return (
    <div>
      {/**
       * @TODO Retrieve this information from the actual global user state
       */}
      {myCourses.map((course, i) => (
        <StudentCourse key={i} course={course} />
      ))}
    </div>
  );
};

export default RateTA;
