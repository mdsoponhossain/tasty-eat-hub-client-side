import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import auth from '../../Firebase/Firebase.config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useState } from 'react';
import Swal from 'sweetalert2';


const Login = () => {

    const [valid, setValid] = useState(' ')
    const navigate = useNavigate();
    const location = useLocation();
    

    const handleGoogleLogIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result)
                navigate(location?.state ? location.state : '/')
                new Swal('You have successfully logged in ')

            })
            .catch(error => {
                console.log(error.message);
                
            });

    }



    

    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setValid(' ')
        signInWithEmailAndPassword(auth, email, password)
        
            .then(result => {
                console.log(result.user);
                new Swal('You have successfully logged in ')

            })
            .catch(error => {
                console.log(error.message)
                setValid(error.message)
            })
    }
        



    return (

        <div className="hero-content flex-col mx-auto ">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                <form onSubmit={handleLogIn} className="card-body">
                    {/* login with google */}
                    <div className="form-control mt-6">

                        <button onClick={handleGoogleLogIn} className="btn btn-outline"><FaGoogle className="text-3xl"></FaGoogle> Continue with Google</button>
                    </div>


                    <div className="grid grid-cols-3 my-4 justify-center items-center">
                        <div className="border-b-2"></div>
                        <div className="text-center"> OR </div>
                        <div className="border-b-2"></div>
                    </div>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                        <label className="label">
                            <span  className="label-text-alt  text-lg font-semibold text-red-500">{valid}</span>
                        </label>
                        <label className="label">
                            <Link to='/signUp' className="text-blue-600 underline label-text-alt link link-hover text-lg font-semibold">New here? Please signUp</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Login</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;