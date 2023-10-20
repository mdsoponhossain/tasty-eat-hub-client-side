
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";





export const AuthContext = createContext()

const ContextProvider = ({ children }) => {
    const [brandName, setBrandName] = useState('')
    const [details, setDetails] = useState('');
    
   


    const info = {
        setBrandName,
        brandName,
        setDetails,
        details
        
        
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;