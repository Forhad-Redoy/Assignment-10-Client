import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { ClimbingBoxLoader } from 'react-spinners';

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <ClimbingBoxLoader color="#e74c3c" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  return children;
  
};

export default PrivateRouter;