import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandSingleProduct from "../BrandSingleProduct/BrandSingleProduct";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import AddSlider from "../../Component2/AddSlider";





const BrandDetails = () => {

    const brandsProducts = useLoaderData();
    console.log(brandsProducts)
    const [allProducts, setAllProducts] = useState([]);
    // let { setBrandName } = useContext(AuthContext)
    const { brand } = useParams();
    console.log(1, brand);
    const [brandName,] = useState(brand)
    

    useEffect(() => {
        fetch('http://localhost:5000/brandDetails')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const brand = data.filter(product => product.brand === brandName)
                setAllProducts(brand)
            })
    }, [brandName]);

    return (
        <div>
            <AddSlider brandName={brandName} ></AddSlider>
            <div>
                <h3 className="text-3xl text-center">this is the brand details page :{allProducts.length}</h3>
                <div className="grid md:grid-cols-2 gap-5">
                    {
                        allProducts.map(product => <BrandSingleProduct key={product._id} product={product}> </BrandSingleProduct>)
                    }
                </div>

            </div>
        </div>
    );
};

export default BrandDetails;