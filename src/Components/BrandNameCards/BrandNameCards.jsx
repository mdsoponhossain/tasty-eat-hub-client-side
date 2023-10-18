import { useEffect, useState } from "react";
import BrandNameCard from "../BrandNameCard/BrandNameCard";
import { useLoaderData } from "react-router-dom";


const BrandNameCards = () => {
    const loadedData = useLoaderData();
    console.log(loadedData)
    const [brands ,setBrands] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])
    console.log(brands)
    return (
        <div>
            <h2>Our brands ..</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    brands.map(brand=><BrandNameCard key={brand.id} brand={brand} ></BrandNameCard>)
                }
            </div>
            
        </div>
    );
};

export default BrandNameCards;