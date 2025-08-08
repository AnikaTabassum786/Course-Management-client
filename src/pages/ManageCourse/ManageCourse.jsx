import React, { Suspense } from 'react';
import CourseList from './CourseList';
import useAuth from '../../hooks/useAuth';
import { manageCoursePromise } from '../../api/manageCourseApi';
import { Helmet } from 'react-helmet-async';

const ManageCourse = () => {

    const { user } = useAuth()

    return (
        <div>
            {/* Manage Course */}
            <Helmet>
                <title>BidyaNiketon | Manage Course</title>
            </Helmet>
            <div>
                <Suspense fallback={'Loading Courses'}>
                    <CourseList manageCoursePromise={manageCoursePromise(user.email)}>
                    </CourseList>
                </Suspense>
            </div>
        </div>
    );
};

export default ManageCourse;