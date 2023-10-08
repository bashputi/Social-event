import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../layOut/Pages/Providers/AuthProvider";





const Register = () => {
   
    const [registerError, setRegisterError] = useState('');
    const [success, setsuccess] = useState('');
    const { signUp, handleUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if(password.length < 6) {
            setRegisterError('Password is less than 6 charecters');
            return;
        }else if(!/[A-Z]/.test(password)) {
            setRegisterError('Use a capital letter ')
            return;
        }else if(!/[@$!%*#?&]/.test(password)) {
            setRegisterError('Use atleast 1 special charecter')
            return;
        }
        setRegisterError('');
        setsuccess('');

        signUp(email, password)
        .then(result => {
            console.log(result.user)
            handleUpdateProfile(name)
            .then(() => {
                setsuccess('Sign up successfully!');
                navigate('/')
            })
        })
        .catch(error => {
            setRegisterError(error.message);
        })

    };

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">  
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            
                             <input type="password" name="password" required placeholder="Password" className="input input-bordered" />
                           
                       
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                      {
                        registerError && <p className="text-red-700"> {registerError} </p>
                      }
                      {
                        success && <p className="text-green-600">{success}</p>
                      }
                    <p> Already have account?<Link to="/login">Please
                        <button className="btn btn-link"> Login</button>
                    </Link> </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;