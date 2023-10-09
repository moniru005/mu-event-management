import Register from "../../Auth/Register";


const Banner = () => {

    return (
        <div className="" >
            {/* Banner Image */}
            <div className="mx-auto max-w-full">
                <img className="relative lg:min-h-screen z-0 " src="https://i.ibb.co/dG2qxXW/wepik-export-2023.png" alt="" />
            </div>
            {/* Overlay Background */}
            <div className=" z-10 bg-gradient-to-r from-orange-500 to-blue-500 md:h-[380px] lg:h-[667px] h-[210px] w-[100%] md:w-[100%] lg:w-[100%] absolute top-[112px] opacity-60">
            </div>

            <div className="z-20 absolute top-40 left-28 md:top-48 md:left-52 lg:top-28 lg:left-24 lg:flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-48">
                {/* Banner Title */}
                <div className="uppercase text-4xl md:text-6xl lg:text-8xl lg:font-extrabold font-bold font-workSans lg:flex-1 ">
                    <p className="text-white text-center lg:text-left ">Education <br />Event</p>
                    <p className="text-slate-800 mx-auto lg:ml-0 bg-white w-fit px-2 opacity-80 rounded mt-2">2024</p>
                </div>

                {/* Register Form */}
                <div className="lg:flex lg:flex-1 lg:w-96 hidden" >
                    <Register></Register>
                </div>

                {/* Bottom Shape */}
                <div className=" z-30 absolute lg:left-10 lg:top-[575px] md:top-[230px] md:-left-52 -left-20 top-[135px]">
                    <img className="lg:max-w-full md:max-w-3xl max-w-sm" src="https://i.ibb.co/4RmJc1j/section-Bottom-Shape.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;