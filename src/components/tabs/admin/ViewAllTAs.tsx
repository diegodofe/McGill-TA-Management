import React from "react";
import { Container } from "react-bootstrap";
import "../../../style/userTable.css";
import ImportForm from "./ImportForm";
import ManualTAAdd from "./ManualTAAdd";
import TAList from "./TAList";

const ViewAllTAs = () => {
  const [tas, setTas] = React.useState([]);

  const fetchTAData = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/ta/all");
      const data = await res.json();
      setTas(data.tas);
      console.log("All TA's")
      console.log(data.tas);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchTAData();
  }, []);

  return (
    <Container>
      <div className="inline ">
        <ImportForm taskName="TA Cohort" />
      </div>
      <div className="add-ta-button ">
        <ManualTAAdd fetchTAData={fetchTAData} />
      </div>
      <h2 className="course-name">All TAs</h2>
      <TAList tas={tas} fetchTAData={fetchTAData} />
    </Container>
  );
};

export default ViewAllTAs;
