import { useContext, useState } from "react";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";




const Register = () => {

    const { createUser } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                        title: 'Success',
                        text: 'User Successfully Created',
                        icon: 'success',
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
                        <form onSubmit={handleSignUp} className="card-body ">
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
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="input input-bordered " required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-slate-900 text-white hover:text-black hover:bg-slate-400 border-slate-800" type="submit" value="Register" />
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Register;