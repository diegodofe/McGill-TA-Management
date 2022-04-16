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
            <table>
                <thead>
                    <tr>
                        <th className="column2">First name</th>
                        <th className="column3">Last name</th>
                        <th className="column1">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="body">

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ManageTAs;
