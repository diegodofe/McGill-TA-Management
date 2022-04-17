import React, { useEffect } from 'react';
import TAList from './TAList';

const TAsForCourse = ({ course }) => {

    const [tas, setTas] = React.useState([]);

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

    useEffect(() => {
        fetchTAData();
    }, [course]);

    return (
        <div>
            <div>{course.courseName}</div>
            <TAList tas={tas} fetchTAData={fetchTAData} kind={'all'} />
        </div>
    );
}
export default TAsForCourse;