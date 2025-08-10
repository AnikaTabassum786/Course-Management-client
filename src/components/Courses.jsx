import React from 'react';
// import img1 from '../assets/images/course-images/img-1.jpg'
// import img2 from '../assets/images/course-images/img2.jpg'
// import img3 from '../assets/images/course-images/img3.jpg'
// import img4 from '../assets/images/course-images/img-4.png'
// import img5 from '../assets/images/course-images/img-5.jpg'
// import img6 from '../assets/images/course-images/img-6.jpg'
// import img7 from '../assets/images/course-images/img-7.jpg'
// import img8 from '../assets/images/course-images/img-8.jpg'
// import img9 from '../assets/images/course-images/img-9.png'



import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";


const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://course-management-server-mu.vercel.app/all-courses')
            .then((res) => res.json())
            .then((data) => setCourses(data))
    }, [])
    return (
        <div>

            <div className="my-6 text-center font-bold text-3xl italic  ">
                All Courses
            </div>
            {/* <p>{allCourses.length}</p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                {
                    courses?.map((course, index) => {
                        return (
                            <CourseCard course={course} key={index}>

                            </CourseCard>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Courses;