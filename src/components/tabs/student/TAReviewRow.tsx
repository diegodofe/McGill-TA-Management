import React from "react";
import "../../../style/userTable.css";
import ReviewTAForm from "./TAReviewForm";

const ReviewTARow = ({ ta }) => {
  /**
   * @TODO get submission status from server of user's review for this specific ta
   */
  let isSubmitted: boolean = false;

  return (
    <tr className="body">
      {/**@TODO Make these some cooler icons */}
      <td className="column1">{isSubmitted ? "✔️" : "❌"}</td>
      <td className="column2 course-button">
        {/** TA Review form, modal, and button*/}
        <ReviewTAForm ta={ta} status={isSubmitted} />
      </td>
      <td className="column3">{ta.email}</td>
      <td className="column4">{ta.firstName}</td>
      <td className="column5">{ta.lastName}</td>
    </tr>
  );
};

export default ReviewTARow;
