import React from "react";
import { Course } from "../../../classes/Course";
import { Review } from "../../../classes/Review";
import { TA } from "../../../classes/TA";
import "../../../style/userTable.css";
import ReviewTAForm from "./TAReviewForm";
import CheckCircleIcon from "@mui/icons-material/Check";

const ReviewTARow = ({ ta, course, alreadyReviewdTAs, loadAlreadyReviewedTAs }: { ta: TA; course: Course; alreadyReviewdTAs?: Review[]; loadAlreadyReviewedTAs?: () => Promise<void> }) => {
  /**
   * @TODO get submission status from server of user's review for this specific ta
   */
  let isSubmitted: boolean = false;

  if (alreadyReviewdTAs) {
    const alreadySubmitted = alreadyReviewdTAs.find((review) => review.taRatedEmail === ta.email);
    if (alreadySubmitted) {
      isSubmitted = true;
    }
  }

  return (
    <tr className="body">
      {/**@TODO Make these some cooler icons */}
      <td className="column1" style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#3BCE2E" }}>
        {isSubmitted ? <CheckCircleIcon></CheckCircleIcon> : "❌"}
      </td>
      <td className="column2 course-button">
        {/** TA Review form, modal, and button*/}
        {!isSubmitted && <ReviewTAForm loadAlreadyReviewedTAs={loadAlreadyReviewedTAs} course={course} ta={ta} status={isSubmitted} />}
      </td>
      <td className="column3">{ta.email}</td>
      <td className="column4">{ta.firstName}</td>
      <td className="column5">{ta.lastName}</td>
    </tr>
  );
};

export default ReviewTARow;
