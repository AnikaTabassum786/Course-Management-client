import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const EditCourse = () => {
    const { _id, title, imageUrl, duration, description } = useLoaderData()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const updatedCourse = Object.fromEntries(formData.entries())
        console.log(updatedCourse)

        axios.put(`https://course-management-server-mu.vercel.app/update-course/${_id}`, updatedCourse, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                console.log('Full response:', res.data);
                if (res.data.modifiedCount) {
                    toast.success('Course Updated Successfully', {
                        position: 'top-right',
                    });
                }
            })
            .catch(error => {
                toast.error('Error updating article:', error);
            });
    }
    return (

        <>
            <Helmet>
                <title>BidyaNiketon | Edit Course</title>
            </Helmet>
            <div className='flex items-center justify-center my-6'>
                <form
                    onSubmit={handleSubmit}
                >
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Edit Course</legend>

                        <label className="label">Course Title</label>
                        <input type="text" defaultValue={title} name='title' className="input" placeholder="Name" />

                        <label className="label">Image URL
                        </label>
                        <input type="text" defaultValue={imageUrl} name='imageUrl' className="input" placeholder="Image URL" />

                        <label className="label">Duration
                        </label>
                        <input type="text" defaultValue={duration} name='duration' className="input" placeholder="Time" />

                        <label className="label">Short Description
                        </label>

                        <input type="text" defaultValue={description} name='description' className="input" placeholder="Description" />

                        <button type='submit' className='btn btn-primary mt-2'>Update</button>

                    </fieldset>

                </form>
            </div>
        </>
    );
};

export default EditCourse;