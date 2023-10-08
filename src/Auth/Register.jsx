import { useContext, useState } from "react";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2';



const Register = () => {

    const { createUser } = useContext(AuthContext);



    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState("");
    const [success, setSuccess] = useState("");



    const handleSignUp = (e) => {

        // setIsError('');
        // setSuccess('');

        e.preventDefault();
        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            Swal.fire({
                title: 'Warning!',
                text: 'Password should be 6 characters or use at least one Uppercase letter',
                icon: 'warning',
            }) 
        }
        else {
            
            if (email) {
                createUser(email, password).then(result => {
                    console.log(result.user);
                    e.target.reset();
                    Swal.fire({
                        title: 'Created Success!',
                        text: success,
                        icon: 'success',
                    })
                   

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