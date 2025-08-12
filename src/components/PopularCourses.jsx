// import React, { useEffect, useState } from 'react';
// import CourseCard from './CourseCard';

// const PopularCourses = () => {
//     const [popularCourses,setPopularCourses] = useState([])

//     useEffect(()=>{
//             fetch('https://course-management-server-mu.vercel.app/popular-courses')
//             .then((res)=>res.json())
//             .then((data)=>setPopularCourses(data))
//         },[])
//     return (
//         <div>
          
            
//              <div className="my-6 text-center font-bold text-3xl italic  ">
//  Popular Courses
// </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
//                 {
//                 popularCourses?.map((course,index)=>{
//                     return(
//                         <CourseCard course={course} key={index}>
                     
//                         </CourseCard>
//                     )
//                 })
//             }
//             </div>
//         </div>
//     );
// };

// export default PopularCourses;

import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const PopularCourses = () => {
    const [popularCourses, setPopularCourses] = useState([]);
    const [loading, setLoading] = useState(true); // loader state

    useEffect(() => {
        setLoading(true); // start loading
        fetch('https://course-management-server-mu.vercel.app/popular-courses')
            .then((res) => res.json())
            .then((data) => {
                setPopularCourses(data);
                setLoading(false); // stop loading
            })
            .catch(() => setLoading(false)); // stop loading even if error
    }, []);

    return (
        <div>
            <div className="my-6 text-center font-bold text-3xl italic">
                Popular Courses
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                    {popularCourses?.map((course, index) => (
                        <CourseCard course={course} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PopularCourses;
