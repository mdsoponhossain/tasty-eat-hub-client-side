import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Link, useParams } from "react-router-dom";
import { FaStar } from 'react-icons/fa';



const ProductDetails = () => {
    const { details } = useContext(AuthContext);
    const [loadDetails ,setLoadDetails] = useState({})
    console.log(details)
    const {id} =useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/brandDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoadDetails(data)
            })
    }, [id])

    return (
        /*  This is the Product details page */
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className="h-[600px]" src={loadDetails.photo} /></figure>

            <div className="card-body">
                <h2 className="card-title">Product Name :{loadDetails.name}</h2>
                <h2 className="card-title">Brand :{loadDetails.brand}</h2>
                <h2 className="card-title">Type :{loadDetails.type}</h2>
                <h2 className="card-title">Price: {loadDetails.price}$</h2>
                <h2 className="card-title">Ratings: {loadDetails.rating}<FaStar className="text-orange-500"></FaStar> </h2>
                <p> Details: {loadDetails.description}</p>
                <div className="card-actions justify-center">
                    <Link to={-1}><button className="btn btn-secondary">Go back</button></Link>
                    <button className="btn btn-secondary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;