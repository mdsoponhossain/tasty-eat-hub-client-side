import { useContext, useEffect, useState } from "react";
import BrandDetails from "../BrandDetails/BrandDetails";
import { AuthContext } from "../../ContextProvider/ContextProvider";
// import MyCartDetails from "../MyCartDetails/MyCartDetails";
import { FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";


const MyCart = () => {
    const [addCarts, setAddCarts] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/userCart/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAddCarts(data)
            })
    }, [user?.email]);

    const deleteHandle = (id) => {
        fetch(`http://localhost:5000/userCart/${id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                alert('user is deleted ')
                const remaining = addCarts.filter(cart=>cart._id !== id);
                setAddCarts(remaining)
            }
        })

    }



    return (
        <div>
            <h3>This is the My cart component:{addCarts.length} </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {
                    addCarts.map((addCart, index) => <p key={index}>

                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img src={addCart.photo} /></figure>

                            <div className="card-body">
                                <h2 className="card-title">{addCart.name}</h2>
                                <p className='text-xl font-medium'> Type: {addCart.type}</p>
                                <p className='text-xl font-medium'>Brand: {addCart.brand}</p>
                                <p className='text-xl font-medium'>Price: {addCart.price}$</p>

                                <span className="text-xl font-medium">Ratings:{addCart.rating} <FaStar className="inline mb-1 text-yellow-400"></FaStar> </span>
                                <div className="card-actions justify-center">
                                    <Link to={-1}><button className="btn btn-secondary">Go back</button></Link>
                                    <button onClick={() => deleteHandle(addCart?._id)} className="btn btn-secondary">Delete</button>
                                </div>
                            </div>
                        </div>

                    </p>)
                }
            </div>
        </div>
    );
};

export default MyCart;