
// import  { useEffect, useState } from "react";

// const AllCourses = () => {
//   const [courses, setCourses] = useState([]);

//   // useEffect(() => {
//   //   fetch("https://course-management-server-mu.vercel.app/all-new-courses")
//   //     .then((res) => res.json())
//   //     .then((data) => setCourses(data));
//   // }, []);

//   useEffect(() => {
//   fetch("https://course-management-server-mu.vercel.app/all-new-courses")
//     .then((res) => res.json())
//     .then((data) => {
//       const sortedData = [...data].sort(
//         (a, b) => new Date(a.createdDate) - new Date(b.createdDate)
//       );
//       setCourses(sortedData);
//     });
// }, []);


//   return (
//     <section className="px-4 py-12 md:px-8 lg:px-16 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mt-10 text-gray-800">
//         All Courses
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
//         {courses?.map((course, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
//           >
//             {/* Image */}
//             <div className="h-48 w-full overflow-hidden">
//               <img
//                 src={course.imageUrl}
//                 alt={course.title}
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             {/* Content */}
//             <div className="flex-1 p-5 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-lg font-semibold text-gray-900 truncate">
//                   {course.title}
//                 </h2>
//                 <p className="text-gray-600 text-sm mt-2 line-clamp-3">
//                   {course.description}
//                 </p>
//               </div>

//               <div className="mt-4">
//                 <p className="text-sm text-gray-500">
//                   Created By:{" "}
//                   <span className="text-gray-800 font-medium">
//                     {course.name}
//                   </span>
//                 </p>
//               </div>

//               <div className="mt-4">
//                 <p> Date: <span className='font-medium'>{new Date(course.createdDate).toISOString().slice(0, 10)}</span></p>
//               </div>
//             </div>

//             {/* Footer */}
//             {/* <div className="p-5 border-t border-gray-100 flex justify-between items-center">
//               <span className="text-indigo-600 font-semibold">Free</span>
//               <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
//                 View Details
//               </button>
//             </div> */}

        
          
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AllCourses;


// import { useEffect, useState } from "react";
// import { Link } from "react-router";

// const AllCourses = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     fetch("https://course-management-server-mu.vercel.app/all-new-courses")
//       .then((res) => res.json())
//       .then((data) => {
//         const sortedData = [...data].sort(
//           (a, b) => new Date(a.createdDate) - new Date(b.createdDate)
//         );
//         setCourses(sortedData);
//       });
//   }, []);

//   return (
//     <section className="px-4 py-12 md:px-8 lg:px-16 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mt-10 text-gray-800">
//         All Courses
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
//         {courses?.map((course, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
//           >
//             {/* Image */}
//             <div className="h-48 w-full overflow-hidden">
//               <img
//                 src={course.imageUrl}
//                 alt={course.title}
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             {/* Content */}
//             <div className="flex-1 p-5 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-lg font-semibold text-gray-900 truncate">
//                   {course.title}
//                 </h2>
//                 <p className="text-gray-600 text-sm mt-2 line-clamp-3">
//                   {course.description}
//                 </p>
//               </div>

//               <div className="mt-2">
//                 <p className="text-sm text-gray-500">
//                   Created By:{" "}
//                   <span className="text-gray-800 font-medium">
//                     {course.name}
//                   </span>
//                 </p>
//               </div>

//               <div className="mt-2">
//                 <p>
//                   Date:{" "}
//                   <span className="font-medium">
//                     {new Date(course.createdDate).toISOString().slice(0, 10)}
//                   </span>
//                 </p>
//               </div>
//             </div>

            

//             <div className=" px-5 mb-4">
//                  <Link
//                 to={`/all-courses/${course._id}`}
//                 className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
//               >
//                 View Details
//               </Link>
//               </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AllCourses;



import { useEffect, useState } from "react";
import { Link } from "react-router";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    setLoading(true);
    fetch("https://course-management-server-mu.vercel.app/all-new-courses")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = [...data].sort(
          (a, b) => new Date(a.createdDate) - new Date(b.createdDate)
        );
        setCourses(sortedData);
        setLoading(false); // stop loading
      })
      .catch(() => setLoading(false)); // stop loading on error too
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600 border-solid"></div>
      </div>
    );
  }

  return (
    <section className="px-4 py-12 md:px-8 lg:px-16  min-h-screen">
      <h1 className="text-3xl font-bold text-center mt-10 ">
        All Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
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

              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Created By:{" "}
                  <span className="text-gray-800 font-medium">{course.name}</span>
                </p>
              </div>

              <div className="mt-2 text-black">
                <p>
                  Date:{" "}
                  <span className="font-medium ">
                    {new Date(course.createdDate).toISOString().slice(0, 10)}
                  </span>
                </p>
              </div>
            </div>

            <div className="px-5 mb-4">
              <Link
                to={`/all-courses/${course._id}`}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCourses;
