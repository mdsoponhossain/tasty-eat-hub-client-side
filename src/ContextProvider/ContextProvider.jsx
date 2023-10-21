

import { onAuthStateChanged} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";







export const AuthContext = createContext()

const ContextProvider = ({ children }) => {
    const [brandName, setBrandName] = useState('')
    const [details, setDetails] = useState('');
    const [updateId ,setUpdateId] = useState('')
    
    
    
    const [user, setUser] = useState([]);


    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            
        })
            
    },[])
    
   

    const info = {
        setBrandName,
        brandName,
        setDetails,
        details,
        user,
        setUpdateId,
        updateId
        
        
    }
       
        
        
        

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;