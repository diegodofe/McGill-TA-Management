import React from "react";
import "../../../style/userTable.css";
import RemoveIcon from "@material-ui/icons/Remove";
import ViewTACourses from "./ViewTACourses";
import { TA } from "../../../classes/TA";
import ViewTAPerformance from "./ViewTAPerformance";
import ViewTAInfo from "./ViewTAInfo";

const ManageTARow = ({ ta, isHistorical }: { ta: TA; isHistorical: boolean }) => {
  /**
   * @TODO get wishlist status from server for current course
   */
  let onWishlist: boolean = true;

  const handleRemoveTA = () => {
    console.log(`${ta.firstName} removed!`);

    /**
     * @TODO send TA to be removed to server from current course
     */
  };

  return (
    <tr className="body">
      {/**Only render the nessary parts for appropriate tab */}
      {/** Remove Button*/}
      {!isHistorical && (
        <td className="column0">
          <button className="btn btn-secondary" onClick={handleRemoveTA}>
            <RemoveIcon />
          </button>
        </td>
      )}

      {/**
       * @TODO need to fetch the term that this TA was in this course
       */}
      <td className="column1">Fall 2022</td>
      {/** TA Extra Info*/}
      <td className="column2">
        <div className="inline">{`${ta.firstName} ${ta.lastName}`}</div>
        {/* <ViewTAInfo ta={ta} /> */}
      </td>
      {/** TA Reviews*/}
      <td className="column3">
        <ViewTAPerformance ta={ta} isProfessor={false} />
      </td>
      {/** TA Courses*/}
      <td className="column4">{/* <ViewTACourses courseList={ta.allCourses} /> */}</td>
      {/** TA Courses*/}
      <td className="column5">{/* <ViewTACourses courseList={ta.previousCourses} /> */}</td>
      {/** Wishlist status*/}
      {!isHistorical && <td className="column6">{onWishlist ? "✔️" : "❌"}</td>}
    </tr>
  );
};

export default ManageTARow;
