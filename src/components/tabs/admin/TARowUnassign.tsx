import React from 'react'

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

    return (
        <tr>
            <td className="column2">{ta.email} {ta.lastName || ta.backupLastName}</td>
            <td className="column3">{ta.performance}</td>
            <td className="column4">{ta.currentCourses}</td>
            <td className="column5">{ta.previousCourses}</td>
            <td className="column6">
                <button className="btn btn-primary" onClick={handleUnassignUser}>Unassign</button>
            </td>
        </tr>
    );
}

export default TARowUnassign;