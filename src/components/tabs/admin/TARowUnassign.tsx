import React from 'react'

const TARowUnassign = ({ ta, fetchTAData }) => {

    const handleUnassignUser = () => {
        console.log(ta.email)

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