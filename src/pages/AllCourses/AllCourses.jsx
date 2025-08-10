import React, { useEffect, useState } from 'react';

const AllCourses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://course-management-server-mu.vercel.app/all-new-courses')
            .then((res) => res.json())
            .then((data) => setCourses(data))
    }, [])
    console.log(courses)
    return (
        <div>

        </div>
    );
};

export default AllCourses;