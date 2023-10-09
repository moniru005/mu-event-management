import { useContext, useState } from "react";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { signIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) => {
        
        e.preventDefault();
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                if(result.user.email || result.user.email){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Logged in Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                              
                  navigate(location?.state ? location.state : '/');

            })
            .catch(err => {
                Swal.fire({
                    title: 'Email or password not matched!', err,   
                    text: 'Please check and try again!',
                    icon: 'warning',
                }) 
            })
    }




    return (
        <>
            <div className="hero lg:mx-auto lg:mt-6 font-workSans">
                <div className="hero-content w-full flex-col  ">
                    <div className="flex-shrink-0 w-full bg-formBg rounded-md">
                        <div className=" pt-6 text-center">
                            <h1 className="text-3xl font-bold text-white ">Please Login</h1>
                        </div>
                        <form className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="input input-bordered focus:outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered focus:outline-none" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleSignIn} className="btn bg-slate-900 text-white hover:text-black hover:bg-slate-400 border-slate-800">Login</button>
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;