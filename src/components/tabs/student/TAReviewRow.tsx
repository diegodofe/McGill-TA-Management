import React from "react";
import { RealCourse } from "../../../classes/Course";
import { RealReview } from "../../../classes/Review";
import { RealTA } from "../../../classes/TA";
import "../../../style/userTable.css";
import ReviewTAForm from "./TAReviewForm";

const ReviewTARow = ({ ta, course, alreadyReviewdTAs, loadAlreadyReviewedTAs }: {
  ta: RealTA, course: RealCourse,
  alreadyReviewdTAs?: RealReview[], loadAlreadyReviewedTAs?: () => Promise<void>
}) => {
  /**
   * @TODO get submission status from server of user's review for this specific ta
   */
  let isSubmitted: boolean = false;

  if (alreadyReviewdTAs) {
    const alreadySubmitted = alreadyReviewdTAs.find(review => review.taRatedEmail === ta.email);
    if (alreadySubmitted) {
      isSubmitted = true;
    }
  }

  return (
    <tr className="body">
      {/**@TODO Make these some cooler icons */}
      <td className="column1">{isSubmitted ? "✔️" : "❌"}</td>
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
