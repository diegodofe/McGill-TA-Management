import React, { useState } from 'react';


const ManageTAs = () => {

    const [tas, setTas] = useState([]);

    const fetchTAData = async () => {
        try {

        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            Testing
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default ManageTAs;
