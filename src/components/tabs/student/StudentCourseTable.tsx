import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../../../App";
import { Course } from "../../../classes/Course";
import { Review } from "../../../classes/Review";
import { TA } from "../../../classes/TA";
import { allTAs } from "../../../data/RealData";
import "../../../style/userTable.css";
import TAReviewRow from "./TAReviewRow";

const StudentCourse = ({ course }: { course: Course }) => {
  const [alreadyReviewdTAs, setAlreadyReviewdTAs] = React.useState([] as Review[]);
  const [tasForCourse, setTasForCourse] = React.useState([] as TA[]);
  const { user } = useContext(UserContext);

  const loadAlreadyReviewedTAs = async () => {
    try {
      // get user getContext
      if (user && user.uuid) {
        const uuid = user.uuid;
        const courseID = course.courseID;

        console.log("Loading already reviewed TAs");
        console.log(courseID);
        console.log(uuid);

        const aRes = await fetch(`https://winter2022-comp307-group8.cs.mcgill.ca/course/tas/alreadyreviewedbyuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uuid: uuid,
            courseID: courseID,
          }),
        });
        const aJson = await aRes.json();
        setAlreadyReviewdTAs(aJson.tas as Review[]);
      }
    } catch (error) {
      console.log(error);
      console.error("Error loading reviewed TAs");
    }
  };

  const loadTAsForCourse = async () => {
    try {
      // print courseID
      console.log("course.courseID");
      console.log(course.courseID);
      const response = await fetch(`https://winter2022-comp307-group8.cs.mcgill.ca/course/tas/${course.courseID}`);
      const json = await response.json();
      setTasForCourse(json.tas as TA[]);
    } catch (error) {
      console.log(error);
      console.error("Error loading TAs");
    }
  };

  useEffect(() => {
    console.log("Loaded course");
    loadTAsForCourse();
    loadAlreadyReviewedTAs();
  }, []);

  return (
    <Container className="mb-5">
      <h2>{`${course.courseCode} ${course.courseNumber}: ${course.courseName}`}</h2>
      <div id="profTable">
        <table>
          <thead>
            <tr>
              <th className="column1">Status</th>
              <th className="column2">Review</th>
              <th className="column3">Email</th>
              <th className="column4">First Name</th>
              <th className="column5">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {/**
             * @TODO Retrieve actual list of tas for this course
             */}
            {tasForCourse.map((ta: TA, i: number) => (
              <TAReviewRow loadAlreadyReviewedTAs={loadAlreadyReviewedTAs} alreadyReviewdTAs={alreadyReviewdTAs} course={course} key={i} ta={ta} />
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default StudentCourse;
