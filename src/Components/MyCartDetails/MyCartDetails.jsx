/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyCartDetails = ({ addCart }) => {

    const deleteHandle = (id) => {
        fetch(`http://localhost:5000/userCart/${id}`,{
            method:'DELETE'
        })

    }

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={addCart.photo} /></figure>

            <div className="card-body">
                <h2 className="card-title">{addCart.name}</h2>
                <p className='text-xl font-medium'> Type: {addCart.type}</p>
                <p className='text-xl font-medium'>Brand: {addCart.brand}</p>
                <p className='text-xl font-medium'>Price: {addCart.price}$</p>

                <span className="text-xl font-medium">Ratings:{addCart.rating} <FaStar className="inline mb-1 text-yellow-400"></FaStar> </span>
                <div className="card-actions justify-center">
                    <Link to={-1}><button className="btn btn-secondary">Go back</button></Link>
                    <button onClick={() => deleteHandle(addCart?._id)} className="btn btn-secondary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyCartDetails;