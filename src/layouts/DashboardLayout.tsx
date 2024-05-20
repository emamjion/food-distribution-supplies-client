import { useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const menus = [
        {
            name : 'Dashboard', 
            link: '/dashboard', 
            icon: <MdOutlineDashboard />
        },
        {
            name : 'All Supplies', 
            link: '/dashboard/supplies', 
            icon: <AiOutlineProduct />
        },
        {
            name : 'Create Supply', 
            link: '/dashboard/create-supply', 
            icon: <IoCreateOutline />
        },
        {
            name : 'User', 
            link: 'dashboard/user', 
            icon: <FaRegUser />,
            margin: true
        }
    ];
    const [open, setOpen] = useState(true);
    
    return (
        <div className="flex gap-6">
            <div className={`bg-[#212121] text-gray-100 min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 px-4`}>
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3 
                        size={26} 
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {
                        menus?.map((menu, index) => (
                            <Link 
                                key={index} 
                                to={menu?.link}
                                className={`${menu?.margin && 'mt-5'} group flex items-center text- gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                            >
                                <div className="text-xl">
                                    {menu?.icon}
                                </div>
                                <h2 style={{
                                    transitionDelay: `${index + 3}00ms`
                                }} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                                <h2 className={` ${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-[#212121] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                    {menu?.name}
                                </h2>
                            </Link>
                        ) )
                    }
                    
                </div>
            </div>
            <div className="flex-[4]">
                <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;