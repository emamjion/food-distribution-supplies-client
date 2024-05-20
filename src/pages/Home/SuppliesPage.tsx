import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SuppliesPage = () => {
    const [supplies, setSupplies] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/supplies')
        .then(res => res.json())
        .then(data => setSupplies(data))
    }, []);
    
    return (
        <div className="my-16 px-2 md:px-0">
            <h1 className="text-center font-semibold text-3xl mb-6">Supply Posts</h1>
            <p className="md:w-[600px] mx-auto text-center">
                Efficiently manage your food supply chain from source to distribution with our intuitive platform. Streamline procurement, optimize inventory, and ensure timely delivery, all in one centralized system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {
                    supplies.map(supply => (<div
                        key={supply._id}
                        className="border rounded-md w-full shadow-sm"
                    >
                        <img src={supply.image} className="w-full rounded-md" />
                        <div className="text-center space-y-2 mt-6">
                            <h1 className="text-2xl font-semibold">{supply.title}</h1>
                            <p className="text-lg "><span>{supply.category}</span></p>
                            <p>Quantity: {supply.quantity}</p>
                        </div>
                        <div className="flex items-center justify-center my-4">
                            <Link to={`/supplies/${supply._id}`}>
                                <button className='px-4 py-2.5 text-white bg-[#212121] font-medium rounded-lg'>View Details</button>
                            </Link>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default SuppliesPage;