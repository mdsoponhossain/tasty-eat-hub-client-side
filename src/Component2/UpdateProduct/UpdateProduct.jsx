import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateProduct = () => {
    const { updateId } = useContext(AuthContext)
    const [update, setUpdate] = useState({})

    useEffect(() => {
        fetch(`https://tasty-eats-hub-server-51lgk2gqk-sopon.vercel.app/brandDetails/${updateId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdate(data)
            })
    }, [updateId])
    console.log(update)

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
        const UpdateProductDetails = { photo, name, price, description }
        UpdateProductDetails.rating = rating
        UpdateProductDetails.type = type
        UpdateProductDetails.brand = brand;
        console.log(UpdateProductDetails)



        Swal.fire({
            title: 'Are you sure to update?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tasty-eats-hub-server-51lgk2gqk-sopon.vercel.app/brandDetails/${update._id}`, {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(UpdateProductDetails)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                            Swal.fire(
                                'Good job!',
                                'You product is successfully updated !',
                                'success'
                            )
                        }
                    })
            }
        })




    }










    return (
        <div className="border-4 w-full lg:w-3/4 mx-auto">
            <h3 className="text-center">Update a Product here</h3>
            <form onSubmit={formSubmitHandle} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" defaultValue={update.photo} name="photo" placeholder="Enter Product Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={update.name} placeholder="Product Name" className="input input-bordered" required />

                </div>

                {/* the next */}
                <div className="grid lg:grid-cols-4 lg:gap-3 my-3 justify-between">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={update.price} name='price' placeholder="Price" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Select Brand</span>
                        </label>
                        <select name="brand" id="brand" onChange={brandNameHandle} >
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
                    <input type="text" defaultValue={update.description} name="description" placeholder="Write description here ..." className="input w-[90%] h-28 input-bordered" required />
                </div>

                <div className="card-actions justify-center ">
                    <Link to={-1}><button className="btn btn-secondary">Go back</button></Link>
                    <button className="btn btn-secondary">Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;
