import React, { useEffect, useState } from 'react';
import AddTAForm from './AddTAForm';
const ManageTAs = () => {

    const [tas, setTas] = useState([]);

    const fetchTAData = async () => {
        try {
            const res = await fetch('https://winter2022-comp307-group8.cs.mcgill.ca/ta/all');
            const data = await res.json();
            setTas(data.tas);
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchTAData();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Faculty</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {tas.map((ta, i) => (
                        <tr key={i}>
                            <td>{ta.email}</td>
                            <td>{ta.firstName || ta.backupFirstName}</td>
                            <td>{ta.lastName || ta.backupLastName}</td>
                            <td>{ta.faculty}</td>
                            <td>{ta.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Div with height 20 */}
            <div style={{ height: "20px" }}></div>
            <AddTAForm fetchTAData={fetchTAData} />
        </div>
    )
}

export default ManageTAs;
