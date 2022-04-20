import React, { useEffect, useState } from "react";
import { Course } from "../../../classes/Course";
import { TA } from "../../../classes/TA";
import ProfCourseRow from "./ProfCourseRow";

const ProfCourseTable = ({ listToRender, course }: { listToRender: Array<TA>; course: Course }) => {
  const [tasOfCourse, setTasOfCourse] = useState<Array<TA>>([]);

  const loadTAsOfCourse = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/course/tas/" + course.courseID);
      const json = await res.json();
      setTasOfCourse(json.tas as TA[]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(course.courseName);
    loadTAsOfCourse();
  }, [course]);

  return (
    <div id="profTable">
      <table style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th className="column1">Term</th>
            <th className="column2">Teaching Assistant</th>
            <th className="column3">OH Time</th>
            <th className="column4">OH Location</th>
            <th className="column5">Duties</th>
            <th className="column6">Performance</th>
          </tr>
        </thead>
        <tbody>
          {tasOfCourse.map((ta: TA, i: number) => (
            <ProfCourseRow loadTAsOfCourse={loadTAsOfCourse} course={course} key={i} ta={ta} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfCourseTable;
