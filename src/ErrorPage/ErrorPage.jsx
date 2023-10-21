import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="grid justify-center">
            <h3 className="text-4xl font-serif font-bold text-center my-28">This page is not found (404)</h3>
            <Link className="block mx-auto" to={-1}><button className="btn btn-secondary">Go back</button></Link>
        </div>
    );
};

export default ErrorPage;