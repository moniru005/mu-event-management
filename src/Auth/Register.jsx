
const Register = () => {
    return (
        <>

            <div className="hero lg:mx-auto lg:mt-6 font-workSans">
                <div className="hero-content w-full flex-col  ">

                    <div className="flex-shrink-0 w-full bg-formBg rounded-md">
                        <div className=" pt-6 text-center">
                            <h1 className="text-3xl font-bold text-white ">Registration Now</h1>
                        </div>
                        <form className="card-body ">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered focus:outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered focus:outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered focus:outline-none" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-slate-900 text-white hover:text-black hover:bg-slate-400 border-slate-800">Register</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Register;