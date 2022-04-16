import React, { useEffect, useState } from 'react';
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
                        <div>
                            {ta.email}
                        </div>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ManageTAs;
