import { useState } from "react";


const AddProduct = () => {
    const [rating,setRating] = useState('');
    const [type ,setType] = useState(' ');

    const Rating =e=>{
        
       const theRating = e.target.value;
       setRating(theRating)
    }


    const productType =e=>{
        const type = e.target.value
        setType(type)
    }


    const formSubmitHandle =(e)=>{
        e.preventDefault();
        const form = e.target ;
        const photo = form.photo.value;
        const name = form.name.value;
        const price = form.price.value ;
        const description = form.description.value;
        const productDetails = {photo,name,price,description}
        productDetails.rating = rating
        productDetails.type = type
       
        console.log(productDetails)
    }


    return (
        <div className="border-4 w-3/4 mx-auto">
            <h3 className="text-center">Add a Product here</h3>
            <form className="card-body" onSubmit={formSubmitHandle}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Enter Product Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Product Name" className="input input-bordered" required />

                </div>

                {/* the next */}
                <div className="flex justify-between">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating(out of 5)</span>
                        </label>
                        <select name="type" id="type" onChange={Rating} >
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>

                        </select>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <select name="type" id="type" onChange={productType}>
                            <option value="food">Food</option>
                            <option value="beverage">Beverage</option>

                        </select>

                    </div>
                </div>
                <div className="w-3/4 mx-auto" >
                    <textarea className="border-4 pl-3" name="description" placeholder="Write description here..." cols="80" rows="5"></textarea>
                </div>
                    
                <div className="form-control mt-6">
                    <button className="btn btn-secondary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;