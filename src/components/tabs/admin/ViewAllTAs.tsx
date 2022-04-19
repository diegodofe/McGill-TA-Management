import React from "react";
import { Container } from "react-bootstrap";
import "../../../style/userTable.css";
import ImportTACohort from "./ImportTACohort";
import ManualTAAdd from "./ManualTAAdd";
import TAList from "./TAList";

const ViewAllTAs = () => {
  const [tas, setTas] = React.useState([]);

  const fetchTAData = async () => {
    try {
      const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/ta/all");
      const data = await res.json();
      setTas(data.tas);
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
      <div className="inline">
        <ImportTACohort />
      </div>
      <div className="inline add-ta-button ">
        <ManualTAAdd fetchTAData={fetchTAData} />
      </div>
      <div style={{ display: "block" }}>
        <div className="inline">
          <h2 className="course-name">All Teaching Assistants</h2>
          <TAList kind={"all"} tas={tas} fetchTAData={fetchTAData} />
          {/* <RenderList listToRender={tas} courseName={""} isHistorical={true} /> */}
        </div>
      </div>
    </Container>
  );
};

export default ViewAllTAs;
