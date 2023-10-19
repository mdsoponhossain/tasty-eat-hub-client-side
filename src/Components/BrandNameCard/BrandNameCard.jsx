/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";


const BrandNameCard = ({ brand }) => {

    const {setBrandName} = useContext(AuthContext)

    console.log(brand);
    const { brand_name, image_url } = brand;

    const brandNameHandle =(name)=>{
        /* console.log(name) */
        setBrandName(name)
    }


    return (
        <Link to={`/brandName/brandDetails`}>
            <div className="card  bg-base-100 shadow-md" onClick={()=>brandNameHandle(brand_name)} >
                <figure><img className="w-[450px] h-[400px]" src={image_url} /></figure>
                <h2 className="card-title text-3xl pb-3 pl-3 font-bold">{brand_name}</h2>


            </div>

        </Link>
    );
};




export default BrandNameCard;