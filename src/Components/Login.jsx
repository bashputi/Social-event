import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../layOut/Pages/Providers/AuthProvider";


const Login = () => {

    const { signIn, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            navigate('/');

        })
        .catch(error => {
            console.error(error)
        })
    };

    const handleGoogleSignIn = e => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
       
    };
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p> New to this site? Please <Link to="/register">
                            <button className="btn btn-link">Register</button>
                        </Link> </p>
                        <p className="ml-8"><button onClick={handleGoogleSignIn} className="btn btn-success">Signin With Google</button></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;