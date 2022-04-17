import React from 'react';

const TAAdminRow = ({ taAdmin, handleFetchTAAdmins }) => {

    const handleDeleteTAAdmin = async () => {
        try {
            const deleteRes = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/taAdmin/delete/" + taAdmin.email, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (deleteRes.status === 200) {
                setTimeout(() => {
                    handleFetchTAAdmins();
                }
                    , 500);
            } else {
                console.log("Error deleting TAAdmin");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <tr>
            <td>{taAdmin.email}</td>
            <td>{taAdmin.firstName || taAdmin.backupFirstName}</td>
            <td>{taAdmin.lastName || taAdmin.backupLastName}</td>
            <td>{taAdmin.faculty}</td>
            <td>{taAdmin.department}</td>
            <td>
                {/* Red button to call handleDeleteTAAdmin function with trash can icon */}
                <button style={{ color: 'red' }} onClick={handleDeleteTAAdmin}>
                    <i className="fas fa-trash-alt"></i>
                    Delete
                </button>

            </td>
        </tr>
    )
}

export default TAAdminRow;