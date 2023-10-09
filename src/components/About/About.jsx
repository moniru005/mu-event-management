import image1 from '../../assets/images/about1.png';

const About = () => {
    return (
        <div className="mt-16">
            <div className="flex flex-row-reverse px-12 gap-14 justify-around items-center">
                <img className="lg:w-96 flex-1 mx-auto " src={image1} alt="" />
                <div className="flex-1  font-workSans p-4">
                    <h2 className="text-2xl font-semibold  text-[#fb544e]">Welcome</h2>
                    <h2 className="text-5xl font-bold my-3">We Inspire People to  Go Out More</h2>
                    <p className="mt-6">Influential media, entertainment & technology show inspiration speaker clouding game changing not just a large scale conference educational hub on digital technologies for business, where people communicate, inspired find.
                    </p>
                    <button className="btn border-slate-800 border-2 bg-white text-slate-900 mt-6"> See All Event </button>
                </div>
            </div>
            <div>
                <img src="" alt="" />
                <div>
                    <h2>Who we are</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatibus at eaque exercitationem saepe rem ab asperiores doloribus explicabo qui?</p>
                </div>
            </div>

        </div>
    );
};

export default About;