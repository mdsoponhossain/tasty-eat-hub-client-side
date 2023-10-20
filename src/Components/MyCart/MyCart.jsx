import { useContext, useEffect, useState } from "react";
import BrandDetails from "../BrandDetails/BrandDetails";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import MyCartDetails from "../MyCartDetails/MyCartDetails";


const MyCart = () => {
    const [addCarts, setAddCarts] = useState([]);
    const {user} =useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/userCart/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAddCarts(data)
        })
    },[user?.email])
    return (
        <div>
            <h3>This is the My cart component:{addCarts.length} </h3>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                addCarts.map((addCart,index)=><MyCartDetails key={index} addCart={addCart}></MyCartDetails>)
            }
           </div>
        </div>
    );
};

export default MyCart;