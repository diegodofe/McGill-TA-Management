import React from "react";
import { Container } from "react-bootstrap";
import { allTAs } from "../../../data/FakeData";
import "../../../style/userTable.css";
import ImportTACohort from "./ImportTACohort";
import RenderList from "./RenderList";

const ViewAllTAs = () => {
  return (
    <Container>
      <ImportTACohort />
      <h2 className="mt-4 mb-4">All Teaching Assistants</h2>
      <RenderList listToRender={allTAs} courseName={""} isHistorical={true} />
    </Container>
  );
};

export default ViewAllTAs;
