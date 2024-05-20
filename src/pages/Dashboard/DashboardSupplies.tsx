import { useEffect, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const DashboardSupplies = () => {
    const [supplies, setSupplies] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/supplies')
        .then(res => res.json())
        .then(data => setSupplies(data))
    }, []);
    
    return (
        <div>
            <div>
                <h1 className="mt-10 font-semibold text-lg">All Supplies</h1>
            </div>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                supplies.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <button className="bg-[#212121] text-white px-4 py-2 rounded-md">
                                                <FaRegEdit />
                                            </button>
                                        </td>
                                        <td>
                                            <button className="bg-[#212121] text-white px-4 py-2 rounded-md">
                                                <FaRegTrashAlt />
                                            </button>
                                        </td>
                            </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardSupplies;

