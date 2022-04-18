import React, { useEffect } from 'react';
import TAList from './TAList';

const TAsForCourse = ({ course }) => {

    const [tas, setTas] = React.useState([]);
    const [allTas, setAllTas] = React.useState([]);

    const [email, setEmail] = React.useState('');

    const fetchTAData = async () => {
        try {
            const res = await fetch(
                `https://winter2022-comp307-group8.cs.mcgill.ca/course/tas/${course.courseID}`
            );
            const data = await res.json();
            console.log("TAs loaded for class:");
            console.log(data);
            setTas(data.tas);
        } catch (err) {
            console.error(err);
        }
    }

    const fetchAllTAData = async () => {
        try {
            const res = await fetch(
                "https://winter2022-comp307-group8.cs.mcgill.ca/ta/all"
            );
            const data = await res.json();
            setAllTas(data.tas);
            console.log(data.tas)
        } catch (err) {
            console.error(err);
        }
    };

    const handleAssignToClass = async () => {
        try {
            const assignRes = await fetch(
                `https://winter2022-comp307-group8.cs.mcgill.ca/ta/assignToCourse`
                , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        courseID: course.courseID
                    })
                })

            const assignData = await assignRes.json();
            console.log(assignData);

            setTimeout(() => {
                fetchTAData();
            }, 500);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchTAData();
    }, [course]);

    useEffect(() => {
        fetchAllTAData();
    }, []);

    return (
        <div>
            <div>{course.courseName}</div>
            <TAList tas={tas} fetchTAData={fetchTAData} kind={'current'} />
            <div>
                Assign TA to course
            </div>
            {/* select input, onChange print the ta.email */}
            <div>
                <select onChange={(thing) => {
                    setEmail(thing.target.value)
                }}>
                    {allTas.map((ta, i) => {
                        return (
                            <option key={i} value={ta.email}>
                                {ta.email}
                            </option>
                        );
                    })}
                </select>
                <button
                    style={{ backgroundColor: '#00bcd4', color: 'white' }}
                    onClick={handleAssignToClass}>
                    Assign To Class
                </button>
            </div>
        </div>
    );
}
export default TAsForCourse;