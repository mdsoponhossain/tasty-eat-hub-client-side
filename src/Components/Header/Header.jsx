import { signOut } from "firebase/auth";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import auth from "../../Firebase/Firebase.config";
import { CgProfile } from 'react-icons/cg';
import { AuthContext } from "../../ContextProvider/ContextProvider";




const Header = () => {


    const { user } = useContext(AuthContext)



    const navlink = <>

        <li><NavLink to='/'> Home </NavLink></li>
        <li><NavLink to='/logIn'> LogIn </NavLink></li>
        <li><NavLink to='/signUp'> SignUp </NavLink></li>
        {
            user && <>
                <li><NavLink to='/myCart'> My Cart</NavLink></li>
                <li><NavLink to='/addProduct'>Add Product</NavLink></li>
            </>
        }
    </>


    const handleLogOut = () => {
        return signOut(auth)
            .then(() => {
                console.log('logOut successfully')
            })
            .catch(() => {
                console.log('fail to logOut')
            })

    }




    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <img className="w-12 h-12 rounded-3xl" src="https://i.ibb.co/Qvkz1FY/logo-modified.png" />
                <span className="text-xl">TastyEatsHub.com</span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="tooltip tooltip-open tooltip-bottom" data-tip={user?.displayName || user?.email}>

                    {
                        user?.photoURL ? <img className="h-12 w-12 mr-4 rounded-3xl" src={user?.photoURL} alt="" /> : <CgProfile className="text-5xl mr-4"></CgProfile>
                    }
                </div>


                {
                    user ? <button onClick={handleLogOut} className="btn btn-secondary btn-sm">LogOut</button> : <Link to='/login'><button className="btn btn-secondary btn-sm">LogIn</button></Link>
                }
            </div>

        </div>
    );
};

export default Header;


