import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex items-center justify-center'>
            <span className='loading loading-bars loading-xl min-h-screen '></span>
        </div>
    }
    if(!user){
        return <Navigate state={location.pathname} to="/auth/login"/>;

    }
    return children;
};

export default PrivateRoute;