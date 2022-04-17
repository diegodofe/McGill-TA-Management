import React from 'react'

const TARow = ({ ta, fetchTAData }) => {

    const handleDeleteTA = async () => {
        try {
            console.log("deleting " + ta.email);
            // make api call to delete TA
            fetch("https://winter2022-comp307-group8.cs.mcgill.ca/ta/delete/" + ta.email, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            setTimeout(() => {
                fetchTAData();
            }, 500);

        } catch (err) {
            console.error(err);
        }

    }

    return (
        <tr>
            <td style={{ textTransform: 'capitalize' }}>
                {(ta.firstName || ta.backupFirstName) + " " + (ta.lastName || ta.backupLastName)}
            </td>
            <td>{ta.phone}</td>
            <td>{ta.currentCourses}</td>
            <td>
                <button
                    style={{ backgroundColor: '#f5f5f5', border: 'none', color: 'red', fontSize: '12px' }}
                    onClick={handleDeleteTA}
                >
                    Delete
                </button>
            </td>
        </tr>
    )

}

export default TARow