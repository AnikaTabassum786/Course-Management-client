import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';


const Instructors = () => {

    const data = useLoaderData()
    console.log(data)
    const [instructor, setInstructor] = useState([])

    useEffect(() => {
        setInstructor(data)
    }, [data])

    return (
        <>
            <Helmet>
                <title>BidyaNiketon | Instructor</title>
            </Helmet>
            <div className="mt-20 text-center font-bold text-3xl italic  ">
                Instructors
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 place-items-center">
                {instructor.map((ins) => (
                    <div
                        key={ins.id}
                        className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-sm"
                    >
                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                            <img
                                src={ins.image}
                                alt={ins.name}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <div className="p-4">
                            <div className='flex justify-between'>
                                <p className="mb-2 text-slate-800 text-xl font-semibold">{ins.name}</p>
                                {/* <p>Experience {ins.experience} Years</p> */}
                                <p className="text-gray-600">Experience: <span className="font-semibold">{ins.experience} years</span></p>

                            </div>
                            <p className="font-semibold leading-normal text-base">{ins.expertise}</p>
                        </div>
                        <div className="font-medium px-4 pb-4 pt-0 text-sm text-gray-700">
                            {ins.courses.join(', ')}
                        </div>
                    </div>
                ))}
            </div>

            
        </>

    );
};

export default Instructors;