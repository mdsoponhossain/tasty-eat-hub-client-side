import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { Link } from "react-router-dom";


const SignUp = () => {

    /* signUp with email and password */


    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }




    return (
        <div className="hero-content flex-col mx-auto ">
            <div className="text-center">
                <h1 className="text-5xl font-bold">SignUp now!</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/logIn' className="underline text-blue-500 label-text-alt link link-hover text-lg font-semibold">Have an account? please logIn</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;