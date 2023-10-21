import { useState } from "react";


const AddProduct = () => {
    const [rating, setRating] = useState('');
    const [type, setType] = useState(' ');
    const [brand, setBrand] = useState(' ');

    const Rating = e => {

        const theRating = e.target.value;
        setRating(theRating)
    }


    const brandNameHandle = e => {
        const brand = e.target.value;
        setBrand(brand)
    }


    const productType = e => {
        const type = e.target.value
        setType(type)
    }


    const formSubmitHandle = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const productDetails = { photo, name, price, description }
        productDetails.rating = rating
        productDetails.type = type
        productDetails.brand = brand;
        console.log(productDetails)
        fetch('https://tasty-eats-hub-server-51lgk2gqk-sopon.vercel.app/product', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }


    return (
        <div className="border-4 w-full lg:w-3/4 mx-auto">
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
                <div className="grid lg:grid-cols-4 lg:gap-3 my-3 justify-between">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select Brand</span>
                        </label>
                        <select name="brand" id="brand" onChange={brandNameHandle}  >
                            <option value="Coca-Cola">Coca-Cola</option>
                            <option value="McDonald's">McDonald's</option>
                            <option value="Starbucks">Starbucks</option>
                            <option value="PepsiCo">PepsiCo</option>
                            <option value="Nestle">Nestle</option>
                            <option value="Kellogg's">Kellogg's</option>

                        </select>

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
                            <span className="label-text">Product Type</span>
                        </label>
                        <select name="type" id="type" onChange={productType}>
                            <option value="food">Food</option>
                            <option value="beverage">Beverage</option>

                        </select>

                    </div>
                </div>
                
                <div className="" >
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <input type="text"  name="description" placeholder="Write description here ..." className="input w-[90%] h-28 input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-secondary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;