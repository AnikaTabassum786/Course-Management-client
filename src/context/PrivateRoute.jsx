import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    const location = useLocation();
    //console.log(loading)

    if(loading){
        return <div className='flex justify-center h-[50vh]'><span className="loading loading-dots loading-xl"></span></div>
    }


    if(!user){
        return (
            <>
            <Navigate state={location?.pathname} to='/login'></Navigate>
            </>
        )
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;