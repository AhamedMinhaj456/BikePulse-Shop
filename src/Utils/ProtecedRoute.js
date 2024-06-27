// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthProvider';

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user === null) {
//       navigate('/ShopLogin', { replace: true });
//     }
//   }, [navigate, user]);

//   return children;
// };

// export default ProtectedRoute;
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const token = useSelector((state) => state.shopStatus);
    
    // let auth = { token : false}
    // return(
    //     auth.token ? <Outlet/> : <Navigate to="/ShopLogin"/>
    // )

    const isAuthenticated = Boolean(token);

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/ShopLogin" />
    );
}

export default ProtectedRoute;