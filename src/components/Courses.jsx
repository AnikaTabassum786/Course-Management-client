// import React from 'react';

// import { useEffect, useState } from "react";
// import CourseCard from "./CourseCard";


// const Courses = () => {
//     const [courses, setCourses] = useState([])

//     useEffect(() => {
//         fetch('https://course-management-server-mu.vercel.app/all-courses')
//             .then((res) => res.json())
//             .then((data) => setCourses(data))
//     }, [])
//     return (
//         <div>

//             <div className="my-6 text-center font-bold text-3xl italic  ">
//                 Latest Courses
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
//                 {
//                     courses?.map((course, index) => {
//                         return (
//                             <CourseCard course={course} key={index}>

//                             </CourseCard>
//                         )
//                     })
//                 }
//             </div>

//         </div>
//     );
// };

// export default Courses;


import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // spinner state

  useEffect(() => {
    fetch("https://course-management-server-mu.vercel.app/all-courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false); // stop spinner
      })
      .catch(() => setLoading(false)); // stop spinner on error
  }, []);

  return (
    <div>
      <div className="my-6 text-center font-bold text-3xl italic">
        Latest Courses
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600 border-solid"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {courses?.map((course, index) => (
            <CourseCard course={course} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
