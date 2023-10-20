import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (

        <div className="hero-content flex-col mx-auto ">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                <form className="card-body">
                    {/* login with google */}
                    <div className="form-control mt-6">

                        <button className="btn btn-outline"><FaGoogle className="text-3xl"></FaGoogle> Continue with Google</button>
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
                        <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" className="input input-bordered" required />
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