import React from 'react';
import {
  createBrowserRouter,

} from "react-router";
import Root from '../root/Root';
import Home from '../pages/Home/Home';
import Jobs from '../pages/Jobs/Jobs';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import PrivateRoute from '../context/PrivateRoute';
import AddCourse from '../pages/AddCourse/AddCourse';
import ManageCourse from '../pages/ManageCourse/ManageCourse';
import EditCourse from '../pages/ManageCourse/EditCourse';
import Courses from '../components/Courses';
import CourseDetails from '../components/CourseDetails';
import EnrollCourse from '../pages/EnrollCourse/EnrollCourse';
import PopularCourses from '../components/PopularCourses';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Terms from '../pages/FooterInfo/Terms';
import Privacy from '../pages/FooterInfo/Privacy';
import Contact from '../pages/FooterInfo/Contact';
import Instructors from '../pages/Instructors/Instructors';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home
      },
      {
        path: '/jobs',
        Component: Jobs
      },
      {
        path: '/register',
        Component: Registration
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/add-course',
        element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>
      },
      
      {
        path: '/update-course/:id',
        loader: ({ params }) => fetch(`https://course-management-server-mu.vercel.app/course/${params.id}`),
        Component: EditCourse
      },
      {
        path: '/all-courses',
        // loader:()=>fetch('https://course-management-server-mu.vercel.app/all-courses'),
        Component: Courses
      },
      {
        path: '/all-courses/:id',
        loader: ({ params }) => fetch(`https://course-management-server-mu.vercel.app/course/${params.id}`),
        Component: CourseDetails
      },
      {
        path: '/manage-course',
        element: <PrivateRoute><ManageCourse></ManageCourse></PrivateRoute>
      },
      {
        path: '/my-enrolled-courses',
        element: <PrivateRoute><EnrollCourse /></PrivateRoute>
      },
      {
        path:'/popular-courses',
        Component:PopularCourses
      },
      {
        path:'/terms-condition',
        Component:Terms
      },
      {
        path:'/privacy-policy',
        Component:Privacy
      },
      {
        path:'/contact-us',
        Component:Contact
      },
      {
        path: '/instructors',
        Component: Instructors,
        loader:()=>fetch('/data.json'),
        hydrateFallbackElement: <div className='flex justify-center h-[50vh]'><span className="loading loading-dots loading-xl"></span></div>
      }


    ]
  },
]);

export default router;