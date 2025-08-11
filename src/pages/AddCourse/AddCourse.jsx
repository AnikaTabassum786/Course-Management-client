import React from 'react';
import useAuth from '../../hooks/useAuth';
import { AuthContext } from '../../context/AuthContext';
import { format } from 'date-fns';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const AddCourse = () => {
    const { user } = useAuth(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const title = e.target.title.value
        const imageUrl = e.target.url.value
        const duration = e.target.time.value
        const description = e.target.description.value

        // const createdDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
        const createdDate = new Date();

        const newCourse = {
            title,
            imageUrl,
            duration,
            description,
            email: user?.email,
            name: user?.displayName,
            createdDate
        }

        console.log('Submitted', title, imageUrl, duration, description)

        axios.post(`
https://course-management-server-mu.vercel.app/add-course?email=${user?.email}`, newCourse, {
            withCredentials: true
        })
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    // alert('course added')
                    toast.success(`Course Added  Successfully `, {
                        position: "top-right",
                    });
                    e.target.reset()
                }
            })
            .catch(error => {
                console.log(error)
            })


    }
    return (
        <>
            <Helmet>
                <title>BidyaNiketon | Add Course</title>
            </Helmet>
            <div className='flex items-center justify-center mt-20' >
                {/* Add Course <br />
            {user.email}
            {user.displayName} */}

                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Add Course</legend>

                        <label className="label">Course Title</label>
                        <input type="text" name='title' className="input" placeholder="Name" />

                        <label className="label">Image URL
                        </label>
                        <input type="text" name='url' className="input" placeholder="Image URL" />

                        <label className="label">Duration
                        </label>
                        <input type="text" name='time' className="input" placeholder="Time" />

                        <label className="label">Short Description
                        </label>

                        <input type="text" name='description' className="input" placeholder="Description" />

                        <button type='submit' className=' btn btn-primary mt-2'>Submit</button>

                    </fieldset>

                </form>
            </div>
        </>
    );
};

export default AddCourse;

