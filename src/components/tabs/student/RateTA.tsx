import React from "react";
import { Container } from "react-bootstrap";
import { TA } from "../../../classes/TA";
import { usersEnrolledCourses } from "../../../data/FakeData";
import "../../../style/userTable.css";
import TAReviewRow from "./TAReviewRow";

const RateTA = () => {

  
  return (<Container className="mb-4">
    <h2>{'COMP 421'}</h2>
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
          
        </tbody>
      </table >
      <button>
        Add class
      </button>
    </div >
  </Container >)


};



export default RateTA;



// return (
//   <div>
//     {/**
//        * @TODO Retrieve this information from the actual global user state
//        */}
//     {/* {usersEnrolledCourses.map((course, i) => (
        
//       ))} * /}
//     </div >
