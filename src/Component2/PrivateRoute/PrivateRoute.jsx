import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";


const PrivateRoute = ({children}) => {
    const {findUser}  = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;