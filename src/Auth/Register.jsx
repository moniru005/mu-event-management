import { useContext, useState } from "react";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";




const Register = () => {

    const { createUser } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); 
    console.log(name);
    const handleSignUp = (e) => {

        // setIsError('');
        // setSuccess('');

        e.preventDefault();
        if (!/.{8,16}$/.test(password)) {
            Swal.fire({
                title: 'Warning!',
                text: 'The Password should be 6 characters',
                icon: 'warning',
            }) 
        }
        else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/.test(password)){
            Swal.fire({
                title: 'Warning!',
                text: 'The Password must contain at least one Uppercase and Lowercase letter',
                icon: 'warning',
            }) 
        }
        else if (!/(?=.*\W)(?!.* )/.test(password)){
            Swal.fire({
                title: 'Warning!',
                text: 'The password must contain one special character',
                icon: 'warning',
            }) 
        }
        else {
            
            if (email) {
                createUser(email, password).then(result => {
                    console.log(result.user);
                    e.target.reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User Successfully Created',
                        showConfirmButton: false,
                        timer: 1500
                      })

                    navigate('/');
                   

                })
                    .catch(err => {
                        Swal.fire({
                            title: 'Error!',
                            text: err,
                            icon: 'error',
                        }) 
                    })
                    
            }
        }

    }

    return (
        <>

            <div className="hero lg:mx-auto lg:mt-6 font-workSans">
                <div className="hero-content w-full flex-col  ">
                    <div className="flex-shrink-0 w-full bg-formBg rounded-md">
                        <div className=" pt-6 text-center">
                            <h1 className="text-3xl font-bold text-white ">Registration Now</h1>
                        </div>
                        <form onSubmit={handleSignUp} className="card-body pb-2 ">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <div className="relative form-control">
                                <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Password" className="input input-bordered " required />
                                <span
                                            className="absolute top-4 right-2"
                                            onClick={() => setShowPassword(!showPassword)}>
                                            {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                        </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <input className="btn bg-slate-900 text-white hover:text-black hover:bg-slate-400 border-slate-800" type="submit" value="Register" />
                            </div>
                        </form>
                        <div className="pb-4">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Register;