
const Feature1 = () => {

    return (
        <div className="flex flex-col md:flex-col lg:flex-row justify-between  gap-10 ">
            <div className="flex flex-1  relative p-4">
                <div className="flex mx-auto md:pt-40 lg:pt-40 md:pb-20 lg:pb-20 pt-32 pb-14">
                    <img className="z-0 md:w-64 lg:w-64 w-64" src="https://i.ibb.co/DtQFQzK/about-Img4.jpg" alt="" />
                    <img className="z-10 w-36 md:w-48 lg:w-48 absolute md:left-96 md:top-0 lg:left-96 lg:top-0 top-14 left-60" src="https://i.ibb.co/1G3p0w2/about-Img3.jpg" alt="" />
                    <img className="z-20 absolute lg:top-20 lg:w-72 lg:left-64 md:top-20 md:w-72 md:left-64 w-60 top-24" src="https://i.ibb.co/B6YjD30/about-Shape4.png" alt="" />
                </div>
            </div>
            <div className="lg:flex hidden w-2 border-l-yellow-500 lg:h-60 border-l-4"></div>

            <div className="flex flex-1 lg:items-center justify-center ">
                <div className="px-4 ">
                    <div className="lg:mb-6 space-y-3 lg:text-left text-center">
                        <div className="text-6xl font-bold font-workSans space-y-2 lg:mb-10 mb-6">
                            <p className="">Workshops</p>
                            <p className="">for lifetime</p>
                            <p className="">learning</p>
                        </div>
                        <p className="lg:w-4/5 text-xl ">We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                    </div>

                    {/* <div className=''>
                    <div>
                        <div>
                            calender icon
                        </div>
                        <div>
                            <p>When start</p>
                            <p>21th - 24th February 2022</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            Location icon
                        </div>
                        <div>
                            <p>Where to</p>
                            <p>Zhylianska St, 97б, Kyiv, Ukraine.</p>
                        </div>
                    </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Feature1;