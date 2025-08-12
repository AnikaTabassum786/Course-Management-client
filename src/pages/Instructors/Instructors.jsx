// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useLoaderData } from 'react-router';


// const Instructors = () => {

//     const data = useLoaderData()
//     console.log(data)
//     const [instructor, setInstructor] = useState([])

//     useEffect(() => {
//         setInstructor(data)
//     }, [data])

//     return (
//         <>
//             <Helmet>
//                 <title>BidyaNiketon | Instructor</title>
//             </Helmet>
//             <div className="mt-20 text-center font-bold text-3xl italic  ">
//                 Instructors
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 place-items-center">
//                 {instructor.map((ins) => (
//                     <div
//                         key={ins.id}
//                         className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-sm"
//                     >
//                         <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
//                             <img
//                                 src={ins.image}
//                                 alt={ins.name}
//                                 className="w-full h-full object-cover rounded-md"
//                             />
//                         </div>
//                         <div className="p-4">
//                             <div className='flex justify-between'>
//                                 <p className="mb-2 text-slate-800 text-xl font-semibold">{ins.name}</p>
//                                 <p className="text-gray-600">Experience: <span className="font-semibold">{ins.experience} years</span></p>

//                             </div>
//                             <p className="font-semibold leading-normal text-base text-black">{ins.expertise}</p>
//                         </div>
//                         <div className="font-medium px-4 pb-4 pt-0 text-sm text-gray-700">
//                             {ins.courses.join(', ')}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div>

//                 <div className="my-6 text-center font-bold text-3xl italic">
//                     Why Lean From Us?
//                 </div>
//                 <p className='px-4 text-justify text-lg font-normal'>At BidyaNiketon, we believe learning should be inspiring, practical, and result-driven. Our expert instructors bring years of real-world experience to the classroom, ensuring you gain not just theoretical knowledge, but the skills and confidence to apply it. With interactive lessons, personalized support, and a focus on your success, we make every learning journey meaningful and rewarding</p>
//             </div>

//             <div>
//                 <p className="my-6 text-center font-bold text-3xl italic">What we Provide?</p>
//                 <ul className="space-y-2 list-disc list-inside ">
//                     <li>
//                         <span className="font-semibold">Expert Instructors</span> – Learn from industry professionals with years of real-world experience.
//                     </li>
//                     <li>
//                         <span className="font-semibold">Comprehensive Courses</span> – Covering fundamentals to advanced skills in each subject.
//                     </li>
//                     <li>
//                         <span className="font-semibold">Hands-on Projects</span> – Apply your knowledge through practical, real-life projects.
//                     </li>
//                     <li>
//                         <span className="font-semibold">Flexible Learning</span> – Study at your own pace with lifetime access to course materials.
//                     </li>
//                     <li>
//                         <span className="font-semibold">Interactive Sessions</span> – Engage in live discussions, Q&A, and peer collaboration.
//                     </li>
//                     <li>
//                         <span className="font-semibold">Personalized Mentorship</span> – Get one-on-one guidance tailored to your goals.
//                     </li>
//                     <li>
//                         <span className="font-semibold">Career Support</span> – Resume building, interview prep, and job placement assistance.
//                     </li>
//                 </ul>
//             </div>

//         </>

//     );
// };

// export default Instructors;

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';

const Instructors = () => {
    const data = useLoaderData();
    const [instructor, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true); // loader state

    useEffect(() => {
        setLoading(true);
        // Simulate fetch delay for loader (optional, since data comes from loader)
        const timer = setTimeout(() => {
            setInstructor(data);
            setLoading(false);
        }, 500); // short delay for better UX

        return () => clearTimeout(timer);
    }, [data]);

    return (
        <>
            <Helmet>
                <title>BidyaNiketon | Instructor</title>
            </Helmet>

            <div className="mt-20 text-center font-bold text-3xl italic">
                Instructors
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-60">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 place-items-center">
                    {instructor.map((ins) => (
                        <div
                            key={ins.id}
                            className="relative flex flex-col my-6 bg-white dark:bg-gray-800 shadow-sm border border-slate-200 dark:border-gray-700 rounded-lg w-full max-w-sm"
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
                                    <p className="mb-2 text-slate-800 dark:text-white text-xl font-semibold">
                                        {ins.name}
                                    </p>
                                    <p className="text-black">
                                        Experience: <span>{ins.experience} </span>years
                                    </p>
                                </div>
                                <p className="leading-normal text-base text-black dark:text-gray-200">
                                    {ins.expertise}
                                </p>
                            </div>
                            <div className="font-medium px-4 pb-4 pt-0 text-sm text-black">
                                {ins.courses.join(', ')}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && (
                <>
                    <div>
                        <div className="my-6 text-center font-bold text-3xl italic">
                            Why Learn From Us?
                        </div>
                        <p className='px-4 text-justify text-lg font-normal dark:text-gray-300'>
                            At BidyaNiketon, we believe learning should be inspiring, practical, and result-driven.
                            Our expert instructors bring years of real-world experience to the classroom, ensuring you gain
                            not just theoretical knowledge, but the skills and confidence to apply it. With interactive
                            lessons, personalized support, and a focus on your success, we make every learning journey
                            meaningful and rewarding.
                        </p>
                    </div>

                    <div>
                        <p className="my-6 text-center font-bold text-3xl italic">What We Provide?</p>
                        <ul className="space-y-2 list-disc list-inside dark:text-gray-300">
                            <li><span className="font-semibold">Expert Instructors</span> – Learn from industry professionals with years of real-world experience.</li>
                            <li><span className="font-semibold">Comprehensive Courses</span> – Covering fundamentals to advanced skills in each subject.</li>
                            <li><span className="font-semibold">Hands-on Projects</span> – Apply your knowledge through practical, real-life projects.</li>
                            <li><span className="font-semibold">Flexible Learning</span> – Study at your own pace with lifetime access to course materials.</li>
                            <li><span className="font-semibold">Interactive Sessions</span> – Engage in live discussions, Q&A, and peer collaboration.</li>
                            <li><span className="font-semibold">Personalized Mentorship</span> – Get one-on-one guidance tailored to your goals.</li>
                            <li><span className="font-semibold">Career Support</span> – Resume building, interview prep, and job placement assistance.</li>
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default Instructors;
