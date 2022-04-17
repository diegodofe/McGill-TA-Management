import React, { useEffect, useState } from 'react'
import AddTaAdminForm from './AddTaAdminForm';
import TAAdminRow from './TAAdminRow';

const ManageTAAdmins = () => {

    const [taAdmins, setTAAdmins] = useState([])

    const handleFetchTAAdmins = async () => {
        try {
            const res = await fetch("https://winter2022-comp307-group8.cs.mcgill.ca/taAdmin/all");
            const data = await res.json();
            console.log("taAdmins loaded");
            setTAAdmins(data.tas);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        console.log("ManageTAAdmins useEffect");
        handleFetchTAAdmins();
    }, [])


    return (
        <div>
            {/* Table that lists all the TAAdmins */}
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
                    {taAdmins.map((taAdmin, i) => (
                        <TAAdminRow key={i} taAdmin={taAdmin} handleFetchTAAdmins={handleFetchTAAdmins} />
                    ))}
                </tbody>
            </table>
            <AddTaAdminForm handleFetchTAAdmins={handleFetchTAAdmins} />
        </div>
    )
}

export default ManageTAAdmins;