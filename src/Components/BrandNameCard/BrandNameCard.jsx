/* eslint-disable react/prop-types */


const BrandNameCard = ({ brand }) => {
    console.log(brand);
    const { brand_name, image_url } = brand;
    return (
        <div className="card  bg-base-100 shadow-md">
            <figure><img className="w-[450px] h-[400px]" src={image_url} /></figure>
                <h2 className="card-title text-3xl pb-3 pl-3 font-bold">{brand_name}</h2>
               
           
                
            
        </div>
    );
};
                

export default BrandNameCard;