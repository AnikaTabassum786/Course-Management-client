
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth'
import { Helmet } from 'react-helmet-async';


const MyEnrolledCourses = () => {
  const {user,loading,setLoading} = useAuth()
  const [courses, setCourses] = useState([]);
  
 

  useEffect(() => {
   
      axios.get(`https://course-management-server-mu.vercel.app/my-enrolled-courses?email=${user.email}`,{
        withCredentials:true
      })
        .then((res) => {
          setCourses(res.data)
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching enrolled courses:', error);
          setLoading(false);
        });
    
  }, [user?.email,setLoading]);

  const handleRemove = (courseId) => {
   
    

    axios.delete(`https://course-management-server-mu.vercel.app/unenroll-course?courseId=${courseId}&email=${user.email}`,{
      withCredentials: true
    })
      .then((res) => {
        if (res.data.deletedCount) {
          toast.error('Enrollment Removed.', { position: 'top-right' });
          const remainCourse = courses.filter(course => course._id !== courseId)
          setCourses(remainCourse)
        }
      })
      .catch((error) => {
        toast.error('Error removing enrollment!',error);
      });
  };

  if (loading) {
    return <div className='flex justify-center h-[50vh]'><span className="loading loading-dots loading-xl"></span></div>
  }


  if(courses.length ==0){
    return (
      <>
        <p className='text-center mt-20 text-2xl'>You have not enrolled in any courses</p>
      </>
    )
  }

  return (

    <>
    <Helmet>
                    <title>BidyaNiketon | Enrolled Course</title>
                </Helmet>
    <div className="max-w-4xl mx-auto mt-10 lg:p-0 p-4">
      <h2 className="text-2xl font-bold mb-4">My Enrolled Courses</h2>
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Course Title</th>
            <th className="border px-4 py-2 text-left">Duration</th>
            <th className="border px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{course.title}</td>
              <td className="border px-4 py-2">{course.duration}</td>
              <td className="border px-4 py-2">
                <button
                 
                  onClick={()=>handleRemove(course._id)}
                  className="btn bg-red-500 text-white "
                >
                  Remove Enrollment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default MyEnrolledCourses;

