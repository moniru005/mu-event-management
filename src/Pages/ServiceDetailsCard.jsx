
const ServiceDetailsCard = ({ event }) => {
    const {title, image } = event;
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6 mx-12 font-workSans">
                <div className="col-span-3 border-2 ">
                    <img src="" alt="Image" />
                    <h2 className="text-2xl font-semibold">{title} </h2>

                    <div className="space-y-3">
                        <div>
                            <h2 className="text-xl font-semibold">Event Information</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente labore eos optio doloribus amet eius ut voluptatum, iure fuga esse?</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Event About</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente labore eos optio doloribus amet eius ut voluptatum, iure fuga esse?</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Event Content</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente labore eos optio doloribus amet eius ut voluptatum, iure fuga esse?</p>
                        </div>
                    </div>
                </div>

                <div className="border-2">
                    Right Side
                </div>

            </div>
        </div>
    );
};

export default ServiceDetailsCard;