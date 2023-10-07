
const Feature1 = () => {
    return (
        <div className="flex flex-col md:flex-col lg:flex-row justify-between  gap-10 ">
            <div className="flex flex-1 border-2 relative">
                <div className="flex  mx-auto pt-40 pb-20">
                    <img className="z-0 w-64" src="https://i.ibb.co/DtQFQzK/about-Img4.jpg" alt="" />
                    <img className="z-10 w-48 absolute left-96 top-0" src="https://i.ibb.co/1G3p0w2/about-Img3.jpg" alt="" />
                    <img className="z-20 absolute top-20 w-72 left-64" src="https://i.ibb.co/B6YjD30/about-Shape4.png" alt="" />
                </div>
            </div>
            <div className="w-2 border-l-yellow-600 lg:h-60 border-l-4"></div>
            <div className="flex-1 border-2">
                
                <div className="px-4">
                    <div className="mb-6 space-y-3">
                        <div className="text-6xl font-bold font-workSans space-y-1">
                            <p className="">Workshops</p>
                            <p className="">for lifetime</p>
                            <p className="">learning</p>
                        </div>
                        <p className="w-96">We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</p>
                    </div>

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
                </div>
            </div>
        </div>
    );
};

export default Feature1;