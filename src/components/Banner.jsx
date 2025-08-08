import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.png';
import img4 from '../assets/images/img-4.jpg';
import { motion } from "framer-motion";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        //  arrows: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 3000, 
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div style={{ width: "100%", margin: "auto" }}>
            <Slider {...settings}>
                <div className="relative">
                    <div className='absolute inset-0 z-10  bg-black opacity-50 '>

                    </div>
                    <img
                        src={img1}
                        alt=""
                        className="w-full h-[500px] object-cover "
                    />

                    <motion.div
                        animate={{ x: [0, -20, 0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 z-10 top-1/3  text-white text-3xl font-bold text-center"
                    >
                        <p className=''>Learn Anywhere, Anytime</p>
                        <p className=''>Access expert-led courses from the comfort of your home.</p>
                    </motion.div>
                </div>

               <div className="relative">
                    <div className='absolute inset-0 z-10  bg-black opacity-50 '>

                    </div>
                    <img
                        src={img2}
                        alt=""
                        className="w-full h-[500px] object-cover "
                    />

                    <motion.div
                        animate={{ x: [0, -20, 0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 z-10 top-1/3  text-white text-3xl font-bold text-center"
                    >
                        <p className=''>Unlock Your Potential</p>
                        <p className=''>Join thousands of learners and start your journey today</p>
                    </motion.div>
                </div>

               <div className="relative">
                    <div className='absolute inset-0 z-10  bg-black opacity-50 '>

                    </div>
                    <img
                        src={img3}
                        alt=""
                        className="w-full h-[500px] object-cover "
                    />

                    <motion.div
                        animate={{ x: [0, -20, 0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 z-10 top-1/3  text-white text-3xl font-bold text-center"
                    >
                        <p className=''>Build Real-World Skills</p>
                        <p className=''>From coding to marketing, master skills that matter.</p>
                    </motion.div>
                </div>
                

                <div className="relative">
                    <div className='absolute inset-0 z-10  bg-black opacity-50 '>

                    </div>
                    <img
                        src={img4}
                        alt=""
                        className="w-full h-[500px] object-cover "
                    />

                    <motion.div
                        animate={{ x: [0, -20, 0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 z-10 top-1/3  text-white text-3xl font-bold text-center"
                    >
                        <p className=''>Learn From Industry Experts</p>
                        <p className=''>Gain practical skills through real-world projects guided by top instructors</p>
                    </motion.div>
                </div>
                
            </Slider>
        </div>
    );
};

export default Banner;




