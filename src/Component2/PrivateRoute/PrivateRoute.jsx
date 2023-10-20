import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return children ;
    }
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
   
};

export default PrivateRoute;