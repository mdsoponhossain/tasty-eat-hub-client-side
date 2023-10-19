/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
// import { AuthContext } from "../../ContextProvider/ContextProvider";


const BrandSingleProduct = ({ product }) => {
    const {setDetails} = useContext(AuthContext)
    console.log(product)
    const { photo, name, brand, description, price, rating, type, _id } = product;



    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-96" src={photo} /></figure>
            <div className="card-body">

                <h2 className="card-title">{name}</h2>
                <p>Type: {type}</p>
                <p> Brand:{brand}</p>
                <p>Price:{price}$ </p>
                <p>{description.slice(0, 70)}</p>

                <div className="card-actions justify-end">
                    <Link to='/details'><button onClick={()=>setDetails(_id)} className="btn btn-secondary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BrandSingleProduct;




