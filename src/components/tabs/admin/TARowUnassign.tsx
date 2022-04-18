import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

const TARowUnassign = ({ ta, fetchTAData, course }) => {

    const handleUnassignUser = async () => {
        try {
            console.log(ta.email)
            console.log(course.courseID)
            const res = await fetch(`https://winter2022-comp307-group8.cs.mcgill.ca/ta/unassignFromCourse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: ta.email,
                    courseID: course.courseID
                })
            })
            const data = await res.json()
            console.log(data)
            setTimeout(() => {
                fetchTAData();
            }, 500);
        } catch (e) {
            console.error('Error:', e)
        }
    }

    export default TARowUnassign;
