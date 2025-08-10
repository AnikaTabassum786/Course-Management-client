// import React, { useEffect, useState } from 'react';

// const AllCourses = () => {
//     const [courses, setCourses] = useState([])

//     useEffect(() => {
//         fetch('https://course-management-server-mu.vercel.app/all-new-courses')
//             .then((res) => res.json())
//             .then((data) => setCourses(data))
//     }, [])
//     console.log(courses)
//     return (
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
//             {
//                 courses?.map((course, index) => {
//                     return (
//                         <div key={index}>
//                             <p>{course.title}</p>
//                             <img src={course.imageUrl} alt="" />
//                             <p>{course.description}</p>
//                             <p>Created By: {course.name}</p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// };

// export default AllCourses;
import React, { useEffect, useState } from "react";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://course-management-server-mu.vercel.app/all-new-courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <section className="px-4 py-12 md:px-8 lg:px-16 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        All Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses?.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 truncate">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {course.description}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Created By:{" "}
                  <span className="text-gray-800 font-medium">
                    {course.name}
                  </span>
                </p>
              </div>
            </div>

            {/* Footer */}
            {/* <div className="p-5 border-t border-gray-100 flex justify-between items-center">
              <span className="text-indigo-600 font-semibold">Free</span>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
                View Details
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCourses;
