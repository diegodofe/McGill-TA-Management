import React from "react";
import { Container } from "react-bootstrap";
import { allTAs } from "../../../data/FakeData";
import "../../../style/userTable.css";
import ImportTACohort from "./ImportTACohort";
import ManualTAAdd from "./ManualTAAdd";
import RenderList from "./RenderList";

const ViewAllTAs = () => {
  const [tas, setTas] = React.useState([]);

  const fetchTAData = async () => {
    try {
      const res = await fetch(
        "https://winter2022-comp307-group8.cs.mcgill.ca/ta/all"
      );
      const data = await res.json();
      setTas(data.tas);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchTAData();
  }, []);

  return (
    <Container>
      <div className="inline">
        <ImportTACohort />
      </div>
      <div className="inline button-spacing">
        <ManualTAAdd fetchTAData={fetchTAData} />
      </div>
      <div className="inline">
        <h2 className=" course-name">All Teaching Assistants</h2>
        <RenderList listToRender={allTAs} courseName={""} isHistorical={true} />
      </div>
    </Container>
  );
};

export default ViewAllTAs;
