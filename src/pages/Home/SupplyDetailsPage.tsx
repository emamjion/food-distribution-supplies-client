import { useLoaderData } from "react-router-dom";

const SupplyDetailsPage = () => {
    const details = useLoaderData();
    const { title, _id, image, category, quantity , description1, description2, description3  } = details;
    
    return (
        <div className="my-16 px-4 md:px-0 ">
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <img src={image} className="mx-auto" />
                    <div>
                        <h1 className="text-3xl font-semibold my-6">{title}</h1>
                        <p className="text-lg w-[600px] mb-3">
                            {description1}
                        </p>
                        <p className="text-lg w-[600px] mb-3">
                            {description2}
                        </p>
                        <p className="text-lg w-[600px] mb-3">
                            {description3}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-center">
                                <p className="text-lg font-medium">Category :</p>
                                <span className="text-lg font-semibold ml-2">{category}</span>
                            </div>
                            <div className="flex items-center justify-center">
                            <p className="text-lg font-medium">Quantity :</p>
                                <span className="text-lg font-semibold ml-2">{quantity}</span>
                            </div>
                        </div>
                        <div className="mt-16">
                            <button className='px-4 py-2.5 text-white bg-[#212121] font-medium rounded-lg'>Donate Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupplyDetailsPage;