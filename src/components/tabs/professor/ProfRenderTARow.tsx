import React, { useState } from "react";
import "../../../style/userTable.css";
import { TA } from "../../../classes/TA";
import ViewTAInfo from "../admin/ViewTAInfo";
import ViewTAPerformance from "../admin/ViewTAPerformance";
import { Form } from "react-bootstrap";

const ManageTARow = ({ ta }: { ta: TA }) => {
  /**
   * @TODO get wishlist status from server for current course
   */
  const [wishlistStatus, setWishlistStatus] = useState(false);

  const handleChangeWishlist = () => {
    console.log(`Add or Remove ${ta.firstName}?`);

    /**
     * @TODO send TA to be removed or added to wishlist for this course
     */
  };

  return (
    <tr className="body">
      {/**
       * @TODO need to fetch the term that this TA was in this course
       */}
      <td className="column1">Fall 2022</td>
      {/** TA Extra Info*/}
      <td className="column2">
        <div className="inline">{`${ta.firstName} ${ta.lastName}`}</div>
        <ViewTAInfo ta={ta} />
      </td>
      <td className="column3">
        <p></p>
      </td>
      <td className="column4">
        <p></p>
      </td>
      <td className="column5">
        <p></p>
      </td>
      <td className="column6">
        <ViewTAPerformance ta={ta} isProfessor={true} />
      </td>
      <td className="column7">
        <Form.Check onChange={() => handleChangeWishlist()} aria-label="setWishlistStatus" />
      </td>
    </tr>
  );
};

export default ManageTARow;
