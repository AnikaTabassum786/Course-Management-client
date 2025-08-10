import React from 'react';
import Banner from '../../components/Banner';
import Courses from '../../components/Courses';
import PopularCourses from '../../components/PopularCourses';
import Faq from '../../components/Faq';
import Count from '../../components/Cout';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    
    return (
         <>
         <Helmet>
                <title>BidyaNiketon | Home</title>
            </Helmet>
        <div className='flex flex-col gap-10 mt-20'>
<div className="text-center font-bold text-3xl italic  ">
  Welcome Our Platform
</div>

            <Banner></Banner>
            <Courses></Courses>
            <PopularCourses></PopularCourses>
            <Faq></Faq>
            <Count></Count>
        </div>
         </>
    );
};

export default Home;