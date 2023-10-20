/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { FaStar } from 'react-icons/fa';


const BrandSingleProduct = ({ product }) => {
    const { setDetails } = useContext(AuthContext)
    console.log(product)
    const { photo, name, brand, price, rating, type, _id } = product;



    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-96" src={photo} /></figure>
            <div className="card-body">

                <h2 className="card-title">{name}</h2>
                <p>Type: {type}</p>
                <p> Brand:{brand}</p>
                <p>Price:{price}$ </p>
                <span className="text-xl">Ratings:{rating} <FaStar className="inline mb-1 text-yellow-400"></FaStar> </span>

                <div className="grid grid-cols-2">
                    <div className="card-actions justify-center">
                        <Link to='/details'><button onClick={() => setDetails(_id)} className="btn btn-secondary">Add to Cart</button></Link>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to='/details'><button onClick={() => setDetails(_id)} className="btn btn-secondary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSingleProduct;




