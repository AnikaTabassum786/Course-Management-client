import React from 'react';
import CountUp from 'react-countup';


const Count = () => {
    return (
        <div className='my-6'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6'>
            <div className='flex flex-col gap-1  bg-gray-200 rounded-md p-4 w-[250px] '>
            
            <CountUp className='font-bold text-black mt-2'
                    start={1}
                    end={20} 
                    suffix="+"
                    duration={3}
                />
                <p className='text-lg font-medium text-black'>Total Courses</p>
            </div>

            <div className='flex flex-col gap-1 bg-gray-200 rounded-md p-4 w-[250px]'>
            
            <CountUp className='font-bold text-black mt-2'
                    start={100}
                    end={150} 
                    suffix="+"
                    duration={7}
                />
                <p className='text-lg font-medium text-black'>Instructors</p>
            </div>

            <div className='flex flex-col gap-1 bg-gray-200 rounded-md p-4 w-[250px]'>
           
            <CountUp className='font-bold text-black mt-2'
                    start={5}
                    end={15} 
                    suffix="+"
                    duration={12}
                />
                <p className='text-lg font-medium text-black'>Assignments Per course</p>
            </div>


            <div className='flex flex-col gap-1 bg-gray-200 rounded-md p-4 w-[250px]'>
            
            <CountUp className='font-bold text-black mt-2'
                    start={500}
                    end={1000} 
                    suffix="+"
                    duration={15}
                />
                <p className='text-lg font-medium text-black'>Students Enrolled</p>
            </div>
            </div>

        </div>
    );
};

export default Count;