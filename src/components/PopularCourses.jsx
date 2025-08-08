import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const PopularCourses = () => {
    const [popularCourses,setPopularCourses] = useState([])
    // console.log(popularCourses)

    useEffect(()=>{
            fetch('https://course-management-server-mu.vercel.app/popular-courses')
            .then((res)=>res.json())
            .then((data)=>setPopularCourses(data))
        },[])
    return (
        <div>
          
            
             <div className="my-6 text-center font-bold text-3xl italic  ">
 Popular Courses
</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                {
                popularCourses?.map((course,index)=>{
                    return(
                        // <div key={index}>
                        // <p>{course.title}</p>
                        // </div>
                        <CourseCard course={course} key={index}>
                     
                        </CourseCard>
                    )
                })
            }
            </div>
        </div>
    );
};

export default PopularCourses;