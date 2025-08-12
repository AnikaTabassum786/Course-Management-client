import React, { use, useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const CourseList = ({ manageCoursePromise }) => {
    const initialCourses = use(manageCoursePromise)
    const [courses, setCourses] = useState(initialCourses)
    console.log(courses)

    const handleDelete = (id) => {
        console.log('deleted', id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)

            if (result.isConfirmed) {
                fetch(`https://course-management-server-mu.vercel.app/delete-course/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Course has been deleted.",
                                icon: "success"
                            });
                            // remove the course
                            const remainCourse = courses.filter(course => course._id !== id)
                            setCourses(remainCourse)
                        }
                    })
            }
        });
    }
    return (
        <div>
            {/* Course List
            <p>{courses.length}</p> */}

            <div className="overflow-x-auto w-full rounded-box border border-base-content/5 bg-base-100 my-28">
                <table className="table w-full min-w-[640px] sm:min-w-full">
                    {/* head */}
                    <thead className='text-sm sm:text-base'>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th className='hidden sm:table-cell'>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses?.map((course, index) => (
                            <tr key={course._id}>
                                <td>{index + 1}</td>
                                <td className="px-2 py-1 text-sm sm:text-base">{course.title}</td>
                                <td className="hidden sm:table-cell">{course.description}</td>
                                <td>
                                    <Link to={`/update-course/${course._id}`}>
                                        <button className="btn  btn-primary ">
                                            Edit
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(course._id)}
                                        className="btn btn-error text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default CourseList;