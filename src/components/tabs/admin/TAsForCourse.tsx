import React, { useEffect } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import TAList from "./TAList";
import "../../../style/admin.css";
import { TA } from "../../../classes/TA";
import { Course } from "../../../classes/Course";

const TAsForCourse = ({ course }: { course: Course }) => {
  const [tas, setTas] = React.useState<Array<TA>>([]);
  const [allTas, setAllTas] = React.useState<Array<TA>>([]);

  const [email, setEmail] = React.useState("");

  const fetchTAData = async () => {
    try {
      const res = await fetch(`https://winter2022-comp307-group8.cs.mcgill.ca/course/tas/${course.courseID}`);
      const data = await res.json();
      console.log("TAs loaded for class:");
      console.log(data);
      setTas(data.tas);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAllTAData = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/ta/all");
      const data = await res.json();
      setAllTas(data.tas);
      console.log(data.tas);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAssignToClass = async () => {
    if (!email) {
      return;
    }

    try {
      const assignRes = await fetch(`https://winter2022-comp307-group8.cs.mcgill.ca/ta/assignToCourse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          courseID: course.courseID,
        }),
      });

      const assignData = await assignRes.json();
      console.log(assignData);

      setTimeout(() => {
        fetchTAData();
      }, 500);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTAData();
  }, [course]);

  useEffect(() => {
    fetchAllTAData();
  }, []);

  return (
    <Container>
      <TAList tas={tas} fetchTAData={fetchTAData} />
      <h6 className="sub-title">Assign TA to course</h6>
      <Form>
        <InputGroup className="mb-3">
          <Form.Select required onChange={(thing) => setEmail(thing.target.value)}>
            <option value="">Select TA</option>
            {allTas.map((ta: TA, i: number) => {
              return (
                <option key={i} value={ta.email}>
                  {ta.email}
                </option>
              );
            })}
          </Form.Select>
          <Button variant="outline-secondary" onClick={handleAssignToClass}>
            Assign
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
};
export default TAsForCourse;
