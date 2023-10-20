import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import auth from '../../Firebase/Firebase.config';

const Login = () => {


    const handleGoogleLogIn = ()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result)

        })  
        .catch(error=>{
            console.log(error.message)
        }) ;

    }





    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
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

                        <button onClick={handleGoogleLogIn}  className="btn btn-outline"><FaGoogle className="text-3xl"></FaGoogle> Continue with Google</button>
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
                            <a href="#" className="label-text-alt link link-hover text-lg font-semibold">Forgot password?</a>
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