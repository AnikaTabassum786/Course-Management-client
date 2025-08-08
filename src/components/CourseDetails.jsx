import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';


const CourseDetails = () => {
  const { user,setLoading } = useAuth();
  const [isEnroll, setIsEnroll] = useState(false);
  // const [loading, setLoading] = useState(true); 
  const course = useLoaderData();

  const shareUrl = `${window.location.origin}/course/${course._id}`;

  
  useEffect(() => {
    if (user) {
      setLoading(true); 
      axios.get(`https://course-management-server-mu.vercel.app/enroll/check?courseId=${course._id}&email=${user.email}`)
        .then((res) => {
          if (res.data) {
            setIsEnroll(true);
          }
          setLoading(false); 
        })
        .catch((error) => {
          toast.error('Error checking enrollment',error, { position: 'top-right' });
          setLoading(false);
        });
    } 
  }, [user, course._id]);

  const handleEnrollToggle = () => {
    if (!user) return;

    const enrollUser = {
      courseId: course._id,
      email: user.email,
    };

    if (!isEnroll) {
      axios.post('https://course-management-server-mu.vercel.app/enroll-course', enrollUser)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success('Enrolled Successfully!', { position: 'top-right' });
            setIsEnroll(true);
          }
        })
        .catch((error) => {
          toast.error(error, { position: 'top-right' });
        });
    } else {
      axios .delete(`https://course-management-server-mu.vercel.app/unenroll-course?courseId=${course._id}&email=${user.email}`)
        .then((res) => {
          if (res.data.deletedCount) {
            toast.warn('Enrollment Removed.', { position: 'top-right' });
            setIsEnroll(false);
          }
        })
        .catch((error) => {
          toast.error(error, { position: 'top-right' });
        });
    }
  };

  return (
    <div className="p-6 space-y-2">
      <h2 className="text-3xl font-semibold">{course.title}</h2>
      <p>{course.description}</p>
      <p>Duration of the Course: <span className='font-medium'>{course.duration}</span></p>

      { user ? (
        <button
          onClick={handleEnrollToggle}
          className={`btn ${isEnroll ? 'btn-success' : 'btn-primary'}`}
        >
          {isEnroll ? 'Enrolled' : 'Enroll'}
        </button>
      ) : (
        <div>
          <button className="btn btn-primary btn-disabled">Enroll</button>
          <p className="text-red-500 font-semibold mt-2">
            Please log in to enroll in this course.
          </p>
        </div>
      )}


      <div className="mt-4">
  <h3 className="font-semibold text-lg mb-2">Share this course:</h3>
  <div className="flex gap-3">
    <FacebookShareButton url={shareUrl} quote={course.title}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>

    <WhatsappShareButton url={shareUrl} title={course.title}>
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
  </div>
</div>
    </div>
  );
};

export default CourseDetails;

